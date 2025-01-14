import { Currency } from "@cryptoalgebra/custom-pools-sdk";
import React from "react";
import { Address } from "wagmi";
import USDCLogo from '@/assets/tokens/usdc.svg'
import BTCLogo from '@/assets/tokens/wbtc.svg'
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

interface CurrencyLogoProps {
    currency: Currency | undefined | null;
    size: number;
    className?: string;
    style?: React.CSSProperties
}

export const specialTokens: { [key: Address]: { symbol: string; logo: string } } = {
    ['0x83f62399f2a417db8ad34a4fc54d58240fc898e9']: {
        symbol: 'BTC',
        logo: BTCLogo
    },
    ['0x38a5c36fa8c8c9e4649b51fcd61810b14e7ce047']: {
        symbol: 'USDC',
        logo: USDCLogo
    }
}


const CurrencyLogo = ({ currency, size, className, style = {} }: CurrencyLogoProps) => {

    if (!currency) return <Skeleton className={cn(`flex rounded-full bg-muted-primary`, className)} style={{ minWidth: `${size}px`, minHeight: `${size}px`, width: `${size}px`, height: `${size}px`, ...style }} />

    const address = currency.wrapped.address.toLowerCase() as Address;

    const classString = cn(`w-[${size}px] h-[${size}px] min-w-[${size}px] min-h-[${size}px] bg-card-dark rounded-full`, className)

    if (address in specialTokens) {
        return <img src={specialTokens[address].logo} alt={specialTokens[address].symbol} width={size} height={size} className={classString} style={style} />
    }

    if (currency.isNative) {
        return <img src={BTCLogo} alt={'BTC'} width={size} height={size} className={classString} style={style} />
    }

    return <div className={`${classString} flex items-center justify-center bg-muted-primary text-black`} style={{ minWidth: `${size}px`, minHeight: `${size}px`, width: `${size}px`, height: `${size}px`, ...style }}>
        {currency.symbol?.slice(0, 2)}
    </div>

}

export default CurrencyLogo;