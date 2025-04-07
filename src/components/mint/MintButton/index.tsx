/* import { useWeb3Modal, useWeb3ModalState } from "@web3modal/wagmi/react";
import { useCallback, useMemo } from "react";
import { useAccount } from "wagmi";
import Loader from "@/components/common/Loader";
import { Button } from "@/components/ui/button";
import {
  DEFAULT_CHAIN_ID,
  DEFAULT_CHAIN_NAME,
} from "@/constants/default-chain-id";

const SwapButton = () => {
  const { selectedNetworkId } = useWeb3ModalState();
  const isWrongChain = selectedNetworkId !== DEFAULT_CHAIN_ID;
  const { address: account } = useAccount();
  const {
    callback: mintCallback,
    error: mintCallbackError,
    isLoading: isMintLoading,
  } = useMintCallback(trade, allowedSlippage, approvalState);

  const handleMint = useCallback(async () => {
    if (!mintCallback) return;
    try {
      await mintCallback();
    } catch (error) {
      return new Error(`Swap Failed ${error}`);
    }
  }, [mintCallback]);

  if (!account) return <Button onClick={() => open()}>Connect Wallet</Button>;

  if (isWrongChain)
    return (
      <Button
        variant={"destructive"}
        onClick={() => open({ view: "Networks" })}
      >{`Connect to ${DEFAULT_CHAIN_NAME}`}</Button>
    );

  return (
    <>
      <Button
        onClick={() => handleMint()}
        disabled={
          !isValid || priceImpactTooHigh || !!swapCallbackError || isSwapLoading
        }
      ></Button>
    </>
  );
};
 */