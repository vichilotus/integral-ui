import { 
    infoClientTestnet, 
    blocksClientTestnet, 
    farmingClientTestnet,
    infoClientMainnet,
    blocksClientMainnet,
    farmingClientMainnet
} from '@/graphql/clients';

import { ChainId } from '@cryptoalgebra/sdk';
import { useChainId } from 'wagmi';

export function useClients() {

    const chainId = useChainId()

    switch (chainId) {
        case ChainId.BitlayerTestnet:
            return {
                infoClient: infoClientTestnet,
                blocksClient: blocksClientTestnet,
                farmingClient: farmingClientTestnet
            }
        case ChainId.BitlayerMainnet:
            return {
                infoClient: infoClientMainnet,
                blocksClient: blocksClientMainnet,
                farmingClient: farmingClientMainnet
            }
        default:
            return {
                infoClient: infoClientMainnet,
                blocksClient: blocksClientMainnet,
                farmingClient: farmingClientMainnet
            }
    }

}
