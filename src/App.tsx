import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi/react";
import "./styles/_colors.css";
import "./App.css";

import { WagmiConfig } from "wagmi";
import { defineChain } from "viem";

import Layout from "@/components/common/Layout";

import ETHLogo from "@/assets/tokens/ether.svg";

const projectId = import.meta.env.VITE_WALLETCONNECT_PROJECT_ID;

const monad = defineChain({
  id: 10143,
  name: "Monad Testnet",
  network: "monad-testnet",
  nativeCurrency: {
    name: "Monad Testnet Native",
    symbol: "MON",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://monad-testnet.drpc.org"],
    },
    public: {
      http: ["https://testnet-rpc.monad.xyz"],
    },
  },
  blockExplorers: {
    default: {
      name: "Monad Testnet Explorer",
      url: "https://testnet.monadexplorer.com/",
    },
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
    },
  },
  testnet: true,
});

const chains = [monad];
const wagmiConfig = defaultWagmiConfig({
  chains,
  projectId,
  metadata: {
    name: "Algebra Integral",
    description: "DEX Engine",
    url: "https://integral.algebra.finance",
    icons: [""],
  },
});

createWeb3Modal({
  wagmiConfig,
  projectId,
  chains,
  chainImages: {
    10143: ETHLogo,
  },
  defaultChain: monad,
  themeVariables: {
    "--w3m-accent": "#2797ff",
  },
});

function App({ children }: { children: React.ReactNode }) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <Layout>{children}</Layout>
    </WagmiConfig>
  );
}

export default App;
