import Image from "next/image";
import PlaceholderNft from "@/assets/images/nft/nft-3.png";

export default function CardNft() {

    return (
        <div className="w-full cursor-pointer hover:opacity-80 bg-background rounded-3xl overflow-hidden">
            <div className="w-full aspect-square">
                <Image alt="nft" src={PlaceholderNft} className="object-cover object-center w-full h-full" />
            </div>
            <div className="p-6 font-work-sans space-y-4">
                <div>
                    <div className="text-2xl font-work-sans-semibold">
                        Magic Mushroom 0325
                    </div>
                    <div className="flex items-center space-x-3 pt-1">
                        <div className="w-5 h-5 bg-white rounded-full" />
                        <div>
                            Shroomie
                        </div>
                    </div>
                </div>
                <div className="flex justify-between w-full">
                    <div>
                        <div className="text-foreground-text text-sm">Price</div>
                        <div>1.63 ETH</div>
                    </div>
                    <div>
                        <div className="text-foreground-text text-sm">Highest Bid</div>
                        <div>0.33 wETH</div>
                    </div>
                </div>
            </div>
        </div>
    )
}