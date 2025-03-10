import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'
import './styles/_colors.css'
import './App.css'

import { WagmiConfig } from 'wagmi'
import Layout from "@/components/common/Layout"

import ETHLogo from '@/assets/tokens/ether.svg'
import { defineChain } from 'viem'

const projectId = import.meta.env.VITE_WALLETCONNECT_PROJECT_ID

const hemi = defineChain({
  id: 43111,
  network: 'hemi-mainnet',
  name: 'Hemi',
  nativeCurrency: { name: 'ETH', symbol: 'ETH', decimals: 18 },
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
      name: 'HemiScan',
      url: 'https://explorer.hemi.xyz',
    },
    default: {
      name: 'HemiScan',
      url: 'https://explorer.hemi.xyz',
    },
  },
  testnet: true,
})


const chains = [hemi]
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata: { name: 'Algebra Integral', description: 'DEX Engine', url: 'https://integral.algebra.finance', icons: [''] } })

createWeb3Modal({ 
  wagmiConfig, 
  projectId, 
  chains,
  chainImages: {
    43111: ETHLogo
  },
  defaultChain: hemi,
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
