import { Spacer } from "@nextui-org/Spacer";
import { CustomCard } from "./customCard";
import { LanguageSwitcher } from "@/components/language-switch";
import { UsdtOrder } from "@/components/usdt-order";

export default function Home() {
  return (
    <div>
      <div className="flex px-4">
        <CustomCard />
        <Spacer x={4} />
        <CustomCard />
        {/* <LanguageSwitcher /> */}
      </div>
      <div className="px-4">
        <Spacer y={4} />
        <UsdtOrder />
        <Spacer y={4} />
        <UsdtOrder />
        <Spacer y={4} />
        <UsdtOrder />
      </div>
      
    </div>
  );
}