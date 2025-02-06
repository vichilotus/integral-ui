import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'
import './styles/_colors.css'
import './App.css'

import { WagmiConfig } from 'wagmi'
import { defineChain } from 'viem'

import Layout from "@/components/common/Layout"

import ETHLogo from '@/assets/tokens/ether.svg'

const projectId = import.meta.env.VITE_WALLETCONNECT_PROJECT_ID

const zephyr = defineChain({
  id: 1417429182,
  network: 'zephyr-testnet',
  name: 'Zephyr Mainnet',
  nativeCurrency: { name: 'ZERO', symbol: 'ZERO', decimals: 18 },
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
      name: 'Zephyr Explorer',
      url: 'https://zephyr-blockscout.eu-north-2.gateway.fm/',
    },
    default: {
      name: 'Zephyr Explorer',
      url: 'https://zephyr-blockscout.eu-north-2.gateway.fm/',
    },
  },
  testnet: true,
})

const chains = [zephyr]
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata: { name: 'Algebra Integral', description: 'DEX Engine', url: 'https://integral.algebra.finance', icons: [''] } })

createWeb3Modal({ 
  wagmiConfig, 
  projectId, 
  chains,
  chainImages: {
    1417429182: ETHLogo
  },
  defaultChain: zephyr,
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
