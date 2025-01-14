import { Token } from "@cryptoalgebra/custom-pools-sdk";
import { DEFAULT_CHAIN_ID } from "./default-chain-id";

export const STABLECOINS = {
    USDT: new Token(DEFAULT_CHAIN_ID, '0x38a5c36fa8c8c9e4649b51fcd61810b14e7ce047', 18, 'USDC', 'USDC')
}