import { ChainId } from "@cryptoalgebra/sdk";
import { Address } from "viem";

export const POOL_INIT_CODE_HASH: Record<number, Address> = {
  [ChainId.BitlayerTestnet]: "0xb3fc09be5eb433d99b1ec89fd8435aaf5ffea75c1879e19028aa2414a14b3c85",
  [ChainId.BitlayerMainnet]: "0xb3fc09be5eb433d99b1ec89fd8435aaf5ffea75c1879e19028aa2414a14b3c85",
};

export const ALGEBRA_FACTORY: Record<number, Address> = {
  [ChainId.BitlayerTestnet]: "0xDfCC62B3eE40EE453Cb2788576B56e746FC79827",
  [ChainId.BitlayerMainnet]: "0x689237ebA808a604c3B8b0Ee5b27b89Da79722c6",
};

export const ALGEBRA_POOL_DEPLOYER: Record<number, Address> = {
  [ChainId.BitlayerTestnet]: "0x43680a9e859e72158303cEC7F15CE99a04A09674",
  [ChainId.BitlayerMainnet]: "0x2Ee0020d54eEd16496D52Be27Fa3d7A58f821591",
};

export const ALGEBRA_POSITION_MANAGER: Record<number, Address> = {
  [ChainId.BitlayerTestnet]: "0xDE4da840d2c602abC583eF7558251Ff188d27A1D",
  [ChainId.BitlayerMainnet]: "0x15240EB8D7Af66CBc68733Ab8b1b7dF3cA478724",
};

export const ALGEBRA_QUOTER: Record<number, Address> = {
  [ChainId.BitlayerTestnet]: "0xa4918dC84968de27b4ea1ea255F656667eA9da4C",
  [ChainId.BitlayerMainnet]: "0xdC22e22415492c4E5683AB34AF732ce343d94a8F",
};

export const ALGEBRA_QUOTER_V2: Record<number, Address> = {
  [ChainId.BitlayerTestnet]: "0xC809dAfDf2F0E786bfF9d343e2Ea59adB8B793d1",
  [ChainId.BitlayerMainnet]: "0xcf33495069E3De418dfA1aE4d0F7E90c1800a500",
};

export const ALGEBRA_ROUTER: Record<number, Address> = {
  [ChainId.BitlayerTestnet]: "0xa7cD67EE492e63a9d9EE54556E1Ec7AA7699DD1D",
  [ChainId.BitlayerMainnet]: "0x21aB8b609f889E9c926Aa3580c5ddB916Ec89553",
};

export const ALGEBRA_ETERNAL_FARMING: Record<number, Address> = {
  [ChainId.BitlayerTestnet]: "0x6155F87733088567b8107127801ff67409C11582",
  [ChainId.BitlayerMainnet]: "0x39644f4BfbB8201B747517F10Cd5fb1e1581ca09",
};

export const FARMING_CENTER: Record<number, Address> = {
  [ChainId.BitlayerTestnet]: "0x3173E2e47a405563AbDF8500F11fEcDa595aBC41",
  [ChainId.BitlayerMainnet]: "0x16Fde7FFB83e6B6fe8F2e08E558259f51440EB64",
};