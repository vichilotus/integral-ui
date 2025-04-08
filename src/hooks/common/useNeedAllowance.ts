import { Currency, CurrencyAmount } from "@cryptoalgebra/sdk";
import { erc20ABI, useAccount, useContractRead, Address } from "wagmi";

export function useNeedAllowance(
  currency: Currency | null | undefined,
  amount: CurrencyAmount<Currency> | undefined,
  spender: Address | undefined
) {
  const { address: account } = useAccount();

  const { data: allowance } = useContractRead({
    address: currency?.wrapped.address as Address,
    abi: erc20ABI,
    functionName: "allowance",
    watch: true,
    args: account && spender && [account, spender],
  });

  return Boolean(
    !currency?.isNative &&
      typeof allowance === "bigint" &&
      amount &&
      amount.greaterThan(allowance.toString())
  );
}
