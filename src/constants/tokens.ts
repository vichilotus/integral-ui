import { Token } from "@cryptoalgebra/sdk";
import { DEFAULT_CHAIN_ID } from "./default-chain-id";

export const STABLECOINS = {
    USDT: new Token(DEFAULT_CHAIN_ID, '0xc2132d05d31c914a87c6611c10748aeb04b58e8f', 6, 'USDT', 'USDT'),
    USDC: new Token(DEFAULT_CHAIN_ID, '0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359', 6, 'USDC', 'USDC')
}
