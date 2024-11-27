import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'
import './styles/_colors.css'
import './App.css'

import { WagmiConfig } from 'wagmi'
import Layout from "@/components/common/Layout"

import ETHLogo from '@/assets/tokens/ether.svg'
import { defineChain } from 'viem'

const projectId = import.meta.env.VITE_WALLETCONNECT_PROJECT_ID

const botanix = defineChain({
  id: 3636,
  name: 'Botanix Testnet',
  network: 'botanix-testnet',
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
    default: {
      name: 'botanixExplorer',
      url: 'https://testnet.botanixscan.io/',
    },
  },
  testnet: true,
})


const chains = [botanix]
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata: { name: 'Algebra Integral', description: 'DEX Engine', url: 'https://integral.algebra.finance', icons: [''] } })

createWeb3Modal({ 
  wagmiConfig, 
  projectId, 
  chains,
  chainImages: {
    3636: ETHLogo
  },
  defaultChain: botanix,
  themeVariables: {
    '--w3m-accent': '#2797ff'
  }
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
