import { ChainId, Token } from "@cryptoalgebra/sdk";

export const STABLECOINS = {
    [ChainId.BitlayerTestnet]: {
        USDT: new Token(ChainId.BitlayerTestnet, '0x7d98346b3b000c55904918e3d9e2fc3f94683b01', 6, 'USDT', 'USDT'),
        USDC: new Token(ChainId.BitlayerTestnet, '0x38a5c36fa8c8c9e4649b51fcd61810b14e7ce047', 18, 'USDT', 'USDT'),
    },
    [ChainId.BitlayerMainnet]: {
        USDT: new Token(ChainId.BitlayerMainnet, '0xfe9f969faf8ad72a83b761138bf25de87eff9dd2', 6, 'USDT', 'USDT'),
        USDC: new Token(ChainId.BitlayerMainnet, '0xf9D303B8288E8AEb98E3D921722393c6aaeA5F50', 18, 'USDC', 'USDC'),
    }
}
