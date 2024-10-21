import { fontSans } from "@/config/fonts";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Button, Spacer } from "@nextui-org/react";
import { title, subtitle } from "@/components/primitives";
import { HeartIcon } from '@/app/wallet/components/HeartIcon';
import { CameraIcon } from '@/app/wallet/components/CameraIcon';
export const WalletHeaher = () => {
    return (
        <div className="px-4">
            <Card>
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
                    <div className="flex items-center justify-center">
                        <Button isIconOnly color="warning" variant="faded" aria-label="Take a photo">
                            <CameraIcon />
                        </Button>
                        <Spacer x={2} />
                        <Button isIconOnly color="warning" variant="faded" aria-label="Take a photo">
                            <CameraIcon />
                        </Button>
                    </div>

                </CardHeader>
                {/* <Divider /> */}
                <CardBody>
                    <div className="flex flex-col">
                        <p>Your available balance</p>
                        <div className="flex flex-wrap gap-4">
                            <div className={subtitle({ class: "mt-120" })}>
                                20USDT
                            </div>
                            {/* <p>(1INCH)</p> */}
                        </div>
                        <p>$334343.42(usdt)</p>
                    </div>
                </CardBody>
                {/* <Divider /> */}
                <CardFooter>
                    <div className="w-full grid grid-cols-4 gap-4">
                        <div className="flex flex-col justify-center items-center h-full">
                            <Button isIconOnly color="danger" aria-label="Like">
                                <HeartIcon />
                            </Button>
                            <h3>Send</h3>
                        </div>
                        <div className="flex flex-col justify-center items-center h-full">
                            <Button isIconOnly color="danger" aria-label="Like">
                                <HeartIcon />
                            </Button>
                            <h3>Receive</h3>
                        </div>
                        <div className="flex flex-col justify-center items-center h-full">
                            <Button isIconOnly color="danger" aria-label="Like">
                                <HeartIcon />
                            </Button>
                            <h3>Swap</h3>
                        </div>
                        <div className="flex flex-col justify-center items-center h-full">
                            <Button isIconOnly color="danger" aria-label="Like">
                                <HeartIcon />
                            </Button>
                            <h3>buy/sell</h3>
                        </div>
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
}