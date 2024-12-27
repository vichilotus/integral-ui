import { Currency } from "@cryptoalgebra/sdk";
import React from "react";
import { Address } from "wagmi";
import USDTLogo from '@/assets/tokens/usdt.png'
import USDCLogo from '@/assets/tokens/usdc.svg'
import MATICLogo from '@/assets/tokens/matic.svg'
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

interface CurrencyLogoProps {
    currency: Currency | undefined | null;
    size: number;
    className?: string;
    style?: React.CSSProperties
}


export const specialTokens: { [key: Address]: { symbol: string; logo: string } } = {
    ['0xa5733b3a8e62a8faf43b0376d5faf46e89b3033e']: {
        symbol: 'POL',
        logo: MATICLogo
    },
    ['0xec250e6856e14a494cb1f0abc61d72348c79f418']: {
        symbol: 'USDC',
        logo: USDCLogo
    },
    ['0xc2132d05d31c914a87c6611c10748aeb04b58e8f']: {
        symbol: 'USDT',
        logo: USDTLogo
    }
}


const CurrencyLogo = ({ currency, size, className, style = {} }: CurrencyLogoProps) => {

    if (!currency) return <Skeleton className={cn(`flex rounded-full bg-card-dark`, className)} style={{ minWidth: `${size}px`, minHeight: `${size}px`, width: `${size}px`, height: `${size}px`, ...style }} />

    const address = currency.wrapped.address.toLowerCase() as Address;

    const classString = cn(`w-[${size}px] h-[${size}px] min-w-[${size}px] min-h-[${size}px] bg-card-dark rounded-full`, className)

    if (address in specialTokens) {
        return <img src={specialTokens[address].logo} alt={specialTokens[address].symbol} width={size} height={size} className={classString} style={style} />
    }

    if (currency.isNative) {
        return <img src={MATICLogo} alt={'MATIC'} width={size} height={size} className={classString} style={style} />
    }

    return <div className={`${classString} flex items-center justify-center bg-white text-black`} style={{ minWidth: `${size}px`, minHeight: `${size}px`, width: `${size}px`, height: `${size}px`, ...style }}>
        {currency.symbol?.slice(0, 2)}
    </div>

}

export default CurrencyLogo;
