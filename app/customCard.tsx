import { Card } from "@nextui-org/card";
import { Skeleton } from "@nextui-org/skeleton";
export const CustomCard = () => (
  // <Card className="w-[200px] space-y-5 p-4" radius="2xl">
  //   <div className="h-24 rounded-lg bg-default-300"></div>
  //   <div className="space-y-3">
  //     <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
  //     <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
  //     <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
  //   </div>
  // </Card>
  <Card className="w-[200px] space-y-5 p-4" radius="lg">
    <Skeleton className="rounded-lg">
      <div className="h-24 rounded-lg bg-default-300"></div>
    </Skeleton>
    <div className="space-y-3">
      <Skeleton className="w-3/5 rounded-lg">
        <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
      </Skeleton>
      <Skeleton className="w-4/5 rounded-lg">
        <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
      </Skeleton>
      <Skeleton className="w-2/5 rounded-lg">
        <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
      </Skeleton>
    </div>
  </Card>
);