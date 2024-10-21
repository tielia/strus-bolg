import { title } from "@/components/primitives";
import { Spacer } from "@nextui-org/react";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { WalletHeaher } from "@/components/wallet-header";

export default function WalletPage() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center justify-center">
        <ConnectButton />
      </div>
      
      <Spacer y={4} />
      <WalletHeaher />
    </div>
    
  );
}
