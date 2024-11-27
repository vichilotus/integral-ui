import { useAlgebraPositionManagerFarmingApprovals } from '@/generated';
import { ADDRESS_ZERO } from '@cryptoalgebra/sdk';
import { useEffect, useState } from 'react';
import { useChainId } from 'wagmi';

export function useFarmCheckApprove(tokenId: bigint) {
    const [approved, setApproved] = useState<boolean>();

    const chainId = useChainId()

    const {
        data,
        isLoading: isApproveLoading,
        refetch,
    } = useAlgebraPositionManagerFarmingApprovals({
        args: [tokenId],
        chainId: chainId as AlgebraChainId
    });

    useEffect(() => {
        setApproved(data !== ADDRESS_ZERO);
    }, [tokenId, data]);

    return {
        approved,
        handleCheckApprove: refetch,
        isLoading: approved === undefined || isApproveLoading,
    };
}
