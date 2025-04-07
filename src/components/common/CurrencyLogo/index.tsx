import type { Currency } from "@cryptoalgebra/sdk";
import type React from "react";
import type { Address } from "wagmi";
import USDTLogo from "@/assets/tokens/usdt.png";
import USDCLogo from "@/assets/tokens/usdc.svg";
import WBTCLogo from "@/assets/tokens/wbtc.svg";
import EtherLogo from "@/assets/tokens/ether.svg";
import MonadLogo from "@/assets/tokens/mon.png";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

interface CurrencyLogoProps {
  currency: Currency | undefined | null;
  size: number;
  className?: string;
  style?: React.CSSProperties;
}

const specialTokens: {
  [key: Address]: { symbol: string; logo: string };
} = {
  "0x94373a4919b3240d86ea41593d5eba789fef3848": {
    symbol: "ETH",
    logo: EtherLogo,
  },
  "0x7d98346b3b000c55904918e3d9e2fc3f94683b01": {
    symbol: "USDT",
    logo: USDTLogo,
  },
  "0x9dad8a1f64692adeb74aca26129e0f16897ff4bb": {
    symbol: "WBTC",
    logo: WBTCLogo,
  },
  "0x6581e59a1c8da66ed0d313a0d4029dce2f746cc5": {
    symbol: "USDC",
    logo: USDCLogo,
  },
  "0x7327DED5602BAf1b3281eA2349a394C087840fe7": {
    symbol: "MON",
    logo: MonadLogo,
  },
};

const CurrencyLogo = ({
  currency,
  size,
  className,
  style = {},
}: CurrencyLogoProps) => {
  if (!currency)
    return (
      <Skeleton
        className={cn("flex rounded-full bg-card-dark", className)}
        style={{
          minWidth: `${size}px`,
          minHeight: `${size}px`,
          width: `${size}px`,
          height: `${size}px`,
          ...style,
        }}
      />
    );

  const address = currency.wrapped.address.toLowerCase() as Address;

  const classString = cn(
    `w-[${size}px] h-[${size}px] min-w-[${size}px] min-h-[${size}px] bg-card-dark rounded-full`,
    className
  );

  if (address in specialTokens) {
    return (
      <img
        src={specialTokens[address].logo}
        alt={specialTokens[address].symbol}
        width={size}
        height={size}
        className={classString}
        style={style}
      />
    );
  }

  if (currency.isNative) {
    return (
      <img
        src={MonadLogo}
        alt={"MON"}
        width={size}
        height={size}
        className={classString}
        style={style}
      />
    );
  }

  return (
    <div
      className={`${classString} flex items-center justify-center bg-white text-black`}
      style={{
        minWidth: `${size}px`,
        minHeight: `${size}px`,
        width: `${size}px`,
        height: `${size}px`,
        ...style,
      }}
    >
      {currency.symbol?.slice(0, 2)}
    </div>
  );
};

export default CurrencyLogo;
