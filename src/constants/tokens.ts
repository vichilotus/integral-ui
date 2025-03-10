import { Token } from "@cryptoalgebra/sdk";
import { DEFAULT_CHAIN_ID } from "./default-chain-id";

export const STABLECOINS = {
    USDT: new Token(DEFAULT_CHAIN_ID, '0xad11a8BEb98bbf61dbb1aa0F6d6F2ECD87b35afA', 6, 'USDC.e', 'USDC.e')
}
