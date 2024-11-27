import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'
import './styles/_colors.css'
import './App.css'

import { WagmiConfig } from 'wagmi'
import { defineChain } from 'viem'

import Layout from "@/components/common/Layout"

import BitlayerLogo from '@/assets/bitlayer-logo.png'

const projectId = import.meta.env.VITE_WALLETCONNECT_PROJECT_ID

const bitlayerTestnet = defineChain({
  id: 200810,
  network: 'bitlayer-testnet',
  name: 'Bitlayer Test',
  nativeCurrency: { name: 'BTC', symbol: 'BTC', decimals: 18 },
  rpcUrls: {
    default: {
      http: [import.meta.env.VITE_INFURA_RPC_TESTNET],
    },
    public: {
      http: [import.meta.env.VITE_INFURA_RPC_TESTNET],
    },
  },
  blockExplorers: {
    etherscan: {
      name: 'BitlayerScan',
      url: 'https://testnet.btrscan.com',
    },
    default: {
      name: 'BitlayerScan',
      url: 'https://testnet.btrscan.com',
    },
  },
  contracts: {
    multicall3: {
      address: '0xf2a0bc44debd394076c67962bb4869fd43c78018',
      blockCreated: 9880702,
    },
  },
  testnet: true,
})

const bitlayerMainnet = defineChain({
  id: 200901,
  network: 'bitlayer-mainnet',
  name: 'Bitlayer',
  nativeCurrency: { name: 'BTC', symbol: 'BTC', decimals: 18 },
  rpcUrls: {
    default: {
      http: [import.meta.env.VITE_INFURA_RPC_MAINNET],
    },
    public: {
      http: [import.meta.env.VITE_INFURA_RPC_MAINNET],
    },
  },
  blockExplorers: {
    etherscan: {
      name: 'BitlayerScan',
      url: 'https://www.btrscan.com',
    },
    default: {
      name: 'BitlayerScan',
      url: 'https://www.btrscan.com',
    },
  },
  contracts: {
    multicall3: {
      address: '0xca11bde05977b3631167028862be2a173976ca11',
      blockCreated: 3225645,
    },
  }
})


const chains = [
  bitlayerTestnet,
  bitlayerMainnet
]
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata: { name: 'Algebra Integral', description: 'DEX Engine', url: 'https://integral.algebra.finance', icons: [''] } })

createWeb3Modal({ 
  wagmiConfig, 
  projectId, 
  chains,
  chainImages: {
    200901: BitlayerLogo,
    200810: BitlayerLogo
  },
  defaultChain: bitlayerMainnet,
  themeVariables: {
    '--w3m-accent': '#ff8a34'
  },
  themeMode: 'light'
})

function App({ children }: { children: React.ReactNode }) {

  return (
    <WagmiConfig config={wagmiConfig}>
        <Layout>
          {children}
        </Layout>
    </WagmiConfig>
  )
}

export default App
