import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'
import './styles/_colors.css'
import './App.css'

import { WagmiConfig } from 'wagmi'
import Layout from "@/components/common/Layout"
import { defineChain } from "viem"

import BitlayerLogo from '@/assets/bitlayer-logo.png'

const projectId = import.meta.env.VITE_WALLETCONNECT_PROJECT_ID

const bitlayerTestnet = defineChain({
  id: 200810,
  network: 'bitlayer-testnet',
  name: 'Bitlayer',
  nativeCurrency: { name: 'BTC', symbol: 'BTC', decimals: 18 },
  rpcUrls: {
    default: {
      http: [import.meta.env.VITE_INFURA_RPC],
    },
    public: {
      http: [import.meta.env.VITE_INFURA_RPC],
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

const chains = [bitlayerTestnet]
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata: { name: 'Daikon DEX', description: 'Daikon DEX app', url: 'https://app.daikon.finance', icons: [''] } })

createWeb3Modal({ 
  wagmiConfig, 
  projectId, 
  chains, 
  chainImages: {
    200810: BitlayerLogo
  },
  defaultChain: bitlayerTestnet,
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
