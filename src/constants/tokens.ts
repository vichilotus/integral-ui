import { Token } from "@cryptoalgebra/sdk";
import { DEFAULT_CHAIN_ID } from "./default-chain-id";

export const STABLECOINS = {
    USDT: new Token(DEFAULT_CHAIN_ID, '0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9', 6, 'USDT', 'USDT')
}
