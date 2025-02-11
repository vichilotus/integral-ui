import { ChainId } from "@cryptoalgebra/sdk";
import { Address } from "viem";

export const POOL_INIT_CODE_HASH: Record<number, Address> = {
  [ChainId.BitlayerTestnet]: "0xb3fc09be5eb433d99b1ec89fd8435aaf5ffea75c1879e19028aa2414a14b3c85",
  [ChainId.BitlayerMainnet]: "0xb3fc09be5eb433d99b1ec89fd8435aaf5ffea75c1879e19028aa2414a14b3c85",
};

export const ALGEBRA_FACTORY: Record<number, Address> = {
  [ChainId.BitlayerTestnet]: "0x10253594A832f967994b44f33411940533302ACb",
  [ChainId.BitlayerMainnet]: "0x689237ebA808a604c3B8b0Ee5b27b89Da79722c6",
};

export const ALGEBRA_POOL_DEPLOYER: Record<number, Address> = {
  [ChainId.BitlayerTestnet]: "0xd7cB0E0692f2D55A17bA81c1fE5501D66774fC4A",
  [ChainId.BitlayerMainnet]: "0x2Ee0020d54eEd16496D52Be27Fa3d7A58f821591",
};

export const ALGEBRA_POSITION_MANAGER: Record<number, Address> = {
  [ChainId.BitlayerTestnet]: "0x69D57B9D705eaD73a5d2f2476C30c55bD755cc2F",
  [ChainId.BitlayerMainnet]: "0x15240EB8D7Af66CBc68733Ab8b1b7dF3cA478724",
};

export const ALGEBRA_QUOTER: Record<number, Address> = {
  [ChainId.BitlayerTestnet]: "0x03f8B4b140249Dc7B2503C928E7258CCe1d91F1A",
  [ChainId.BitlayerMainnet]: "0xdC22e22415492c4E5683AB34AF732ce343d94a8F",
};

export const ALGEBRA_QUOTER_V2: Record<number, Address> = {
  [ChainId.BitlayerTestnet]: "0xa77aD9f635a3FB3bCCC5E6d1A87cB269746Aba17",
  [ChainId.BitlayerMainnet]: "0xcf33495069E3De418dfA1aE4d0F7E90c1800a500",
};

export const ALGEBRA_ROUTER: Record<number, Address> = {
  [ChainId.BitlayerTestnet]: "0x3012E9049d05B4B5369D690114D5A5861EbB85cb",
  [ChainId.BitlayerMainnet]: "0x21aB8b609f889E9c926Aa3580c5ddB916Ec89553",
};

export const ALGEBRA_ETERNAL_FARMING: Record<number, Address> = {
  [ChainId.BitlayerTestnet]: "0x50FCbF85d23aF7C91f94842FeCd83d16665d27bA",
  [ChainId.BitlayerMainnet]: "0x39644f4BfbB8201B747517F10Cd5fb1e1581ca09",
};

export const FARMING_CENTER: Record<number, Address> = {
  [ChainId.BitlayerTestnet]: "0x658E287E9C820484f5808f687dC4863B552de37D",
  [ChainId.BitlayerMainnet]: "0x16Fde7FFB83e6B6fe8F2e08E558259f51440EB64",
};