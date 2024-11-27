import { Farming } from "@/types/farming-info";
import { formatUnits } from "viem";
import { formatAmount } from "@/utils/common/formatAmount";
import { useAlgebraVirtualPoolRewardRates } from "@/generated";
import { useChainId } from "wagmi";

export function useFarmingRewardRates(farming: Farming) {

    const chainId = useChainId()

    const { data: rates } = useAlgebraVirtualPoolRewardRates({
        address: farming.farming.virtualPool,
        chainId: chainId as AlgebraChainId
    });

    const [rewardRate, bonusRewardRate] = rates || [0n, 0n];

    const rewardRatePerDay = Number(formatUnits(rewardRate, farming.rewardToken.decimals)) * 60 * 60 * 24;

    const bonusRewardRatePerDay = Number(formatUnits(bonusRewardRate, farming.bonusRewardToken?.decimals)) * 60 * 60 * 24;

    const sumOfRewardRates = rewardRatePerDay + bonusRewardRatePerDay;

    return {
        sumOfRewardRates: formatAmount(sumOfRewardRates.toString(), 4),
        rewardRatePerDay: formatAmount(rewardRatePerDay.toString(), 4),
        bonusRewardRatePerDay: formatAmount(bonusRewardRatePerDay.toString(), 4),
    };
}
