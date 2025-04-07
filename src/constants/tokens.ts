import { Token } from "@cryptoalgebra/sdk";
import { DEFAULT_CHAIN_ID } from "./default-chain-id";

export const STABLECOINS = {
    USDT: new Token(DEFAULT_CHAIN_ID, '0x3861F9a52D74de02372C4C5bB86fF204E19F0c43', 6, 'USDT', 'USDT')
}
