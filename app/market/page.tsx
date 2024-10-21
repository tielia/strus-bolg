import { title } from "@/components/primitives";
import { ConnectButton } from '@rainbow-me/rainbowkit';
export default function AboutPage() {
  return (
    <div>
      <ConnectButton />
      <h1 className={title()}>市场</h1>
    </div>
    
  );
}
