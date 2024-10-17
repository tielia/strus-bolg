import { title } from "@/components/primitives";
import { ConnectButton } from '@rainbow-me/rainbowkit';
export default function AboutPage() {
  return (
    <div>
      <ConnectButton />
      <h1 className={title()}>About</h1>
    </div>
    
  );
}
