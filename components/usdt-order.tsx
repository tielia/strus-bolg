import { fontSans } from "@/config/fonts";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Button } from "@nextui-org/react";
import { title, subtitle } from "@/components/primitives";
export const UsdtOrder = () => {
    return (
        <Card className="max-w-[400px]">
            <CardHeader className="flex justify-between">
                <div className="flex gap-3 items-center justify-center">
                    <Image
                        alt="nextui logo"
                        height={58}
                        radius="sm"
                        src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                        width={58}
                    />
                    <div className="flex flex-col">
                        <p className="text-md">BNB/USDT</p>
                        <p className="text-small text-default-500">$374746.88</p>
                    </div>
                </div>
                <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg ">
                    BUY
                </Button>
            </CardHeader>
            {/* <Divider /> */}
            <CardBody>
                <div className={subtitle({ class: "mt-120" })}>
                    20USDT
                </div>
            </CardBody>
            {/* <Divider /> */}
            <CardFooter>
                <Link
                    isExternal
                    showAnchorIcon
                    href="https://#"
                >
                    balance:0.2332BTC
                </Link>
            </CardFooter>
        </Card>
    );
}