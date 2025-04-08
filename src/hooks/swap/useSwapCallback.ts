import { formatBalance } from "@/utils/common/formatBalance";
import { Currency, Percent, Trade, TradeType } from "@cryptoalgebra/sdk";
import { Address, useAccount, useContractWrite } from "wagmi";
import { useSwapCallArguments } from "./useSwapCallArguments";
import {
  getAlgebraRouter,
  usePrepareAlgebraRouterMulticall,
} from "@/generated";
import { useEffect, useMemo, useState } from "react";
import { SwapCallbackState } from "@/types/swap-state";
import { useTransactionAwait } from "../common/useTransactionAwait";
import { ApprovalStateType } from "@/types/approve-state";
import { TransactionType } from "@/state/pendingTransactionsStore";

interface SwapCallEstimate {
  calldata: string;
  value: bigint;
}

interface SuccessfulCall extends SwapCallEstimate {
  calldata: string;
  value: bigint;
  gasEstimate: bigint;
}

interface FailedCall extends SwapCallEstimate {
  calldata: string;
  value: bigint;
  error: Error;
}

export function useSwapCallback(
  trade: Trade<Currency, Currency, TradeType> | undefined,
  allowedSlippage: Percent,
  approvalState: ApprovalStateType
) {
  const { address: account } = useAccount();

  const [bestCall, setBestCall] = useState<
    SuccessfulCall | FailedCall | undefined
  >();

  const swapCalldata = useSwapCallArguments(trade, allowedSlippage);

  useEffect(() => {
    async function findBestCall() {
      if (!swapCalldata || !account) return;

      setBestCall(undefined);

      const algebraRouter = getAlgebraRouter({});

      const calls = await Promise.all(
        swapCalldata.map(({ calldata, value: _value }) => {
          const value = BigInt(_value);

          return algebraRouter.estimateGas
            .multicall([calldata], {
              account,
              value,
            })
            .then((gasEstimate: bigint) => ({
              calldata,
              value,
              gasEstimate,
            }))
            .catch((gasError: unknown) => {
              return algebraRouter.simulate
                .multicall([calldata], {
                  account,
                  value,
                })
                .then(() => ({
                  calldata,
                  value,
                  error: new Error(
                    `Unexpected issue with estimating the gas. Please try again. ${gasError}`
                  ),
                }))
                .catch((callError: string | undefined) => ({
                  calldata,
                  value,
                  error: new Error(callError),
                }));
            });
        })
      );

      let bestCallOption: SuccessfulCall | SwapCallEstimate | undefined =
        calls.find(
          (
            el: SuccessfulCall | FailedCall,
            ix: number,
            list: (SuccessfulCall | FailedCall)[]
          ): el is SuccessfulCall =>
            "gasEstimate" in el &&
            (ix === list.length - 1 || "gasEstimate" in list[ix + 1])
        );

      if (!bestCallOption) {
        const errorCalls = calls.filter(
          (call: SuccessfulCall | FailedCall): call is FailedCall =>
            "error" in call
        );
        if (errorCalls.length > 0)
          throw errorCalls[errorCalls.length - 1].error;
        const firstNoErrorCall = calls.find(
          (call: SuccessfulCall | FailedCall): call is SuccessfulCall =>
            !("error" in call)
        );
        if (!firstNoErrorCall)
          throw new Error(
            "Unexpected error. Could not estimate gas for the swap."
          );
        bestCallOption = firstNoErrorCall;
      }

      setBestCall(
        bestCallOption && "gasEstimate" in bestCallOption
          ? (bestCallOption as SuccessfulCall)
          : bestCallOption && "error" in bestCallOption
          ? (bestCallOption as FailedCall)
          : undefined
      );
    }

    swapCalldata && findBestCall();
  }, [swapCalldata, approvalState, account]);

  const { config: swapConfig } = usePrepareAlgebraRouterMulticall({
    args: bestCall && [[bestCall.calldata as `0x${string}`] as const],
    value: BigInt(bestCall?.value || 0),
    enabled: Boolean(bestCall),
    gas:
      bestCall && "gasEstimate" in bestCall
        ? (bestCall.gasEstimate * (10000n + 2000n)) / 10000n
        : undefined,
  });

  const { data: swapData, writeAsync: swapCallback } =
    useContractWrite(swapConfig);

  const { isLoading, isSuccess } = useTransactionAwait(swapData?.hash, {
    title: `Swap ${formatBalance(
      trade?.inputAmount.toSignificant() as string
    )} ${trade?.inputAmount.currency.symbol}`,
    tokenA: trade?.inputAmount.currency.wrapped.address as Address,
    tokenB: trade?.outputAmount.currency.wrapped.address as Address,
    type: TransactionType.SWAP,
  });

  return useMemo(() => {
    if (!trade)
      return {
        state: SwapCallbackState.INVALID,
        callback: null,
        error: "No trade was found",
        isLoading: false,
        isSuccess: false,
      };

    return {
      state: SwapCallbackState.VALID,
      callback: swapCallback,
      error: null,
      isLoading,
      isSuccess,
    };
  }, [trade, isLoading, swapCallback, isSuccess]);
}
