import { Token } from "@cryptoalgebra/sdk";
import { DEFAULT_CHAIN_ID } from "./default-chain-id";

export const STABLECOINS = {
    USDC: new Token(DEFAULT_CHAIN_ID, '0xec250e6856e14a494cb1f0abc61d72348c79f418', 6, 'USDC', 'USDC')
}
