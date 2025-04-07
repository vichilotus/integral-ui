import { defineChain } from "viem";

export const monadTestnet = /*#__PURE__*/ defineChain({
  id: 10143,
  name: "Monad Testnet",
  network: "monad-testnet",
  nativeCurrency: {
    decimals: 18,
    name: "Monad",
    symbol: "MON",
  },
  rpcUrls: {
    infura: { http: ["https://aurora-testnet.infura.io/v3"] },
    default: { http: ["https://monad-testnet.drpc.org"] },
    public: { http: ["https://testnet-rpc.monad.xyz"] },
  },
  blockExplorers: {
    etherscan: { name: "Monad Explorer", url: "https://monadexplorer.com/" },
    default: {
      name: "Socialscan",
      url: "https://monad-testnet.socialscan.io/",
    },
  },
  testnet: true,
});
export default monadTestnet;
