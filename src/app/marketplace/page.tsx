"use client";

import CardNft from "@/components/card/card-nft";
import ListHeader from "@/components/list/list-header";
import ListItem from "@/components/list/list-item";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

export default function MarketplacePage() {

    return (
        <div className="pt-8 w-full min-h-screen relative border-b border-background">
            <div className="container mx-auto px-12">
                <div className="space-y-3 w-full">
                    <h2 className="text-white font-work-sans-extrabold text-4xl">
                        Browse Marketplace
                    </h2>
                    <div className="text-white text-xl pb-4">
                        Browse through more than 50k NFTs on the NFT Marketplace.
                    </div>
                    <Input variant="search" icon="search" placeholder="Search your favourite NFTs" />
                </div>
            </div>
            <hr className="w-full border-t border-foreground mt-10" />
            <Tabs className="mt-4" defaultValue="nfts">
                <TabsList className="container mx-auto flex justify-center px-12">
                    <TabsTrigger className="w-full text-lg pb-2" value="nfts">NFTs</TabsTrigger>
                    <TabsTrigger className="w-full text-lg pb-2" value="collections">Collections</TabsTrigger>
                </TabsList>
                <TabsContent className="space-y-4 pb-8 bg-foreground min-h-screen" value="nfts">
                    <div className="container mx-auto px-12">
                        <div className="w-full grid grid-cols-3 gap-6">
                            {
                                Array.from({ length: 9 }).map((_, index) => (
                                    <CardNft key={index} />
                                ))
                            }
                        </div>
                    </div>
                </TabsContent>
                <TabsContent className="space-y-4 pb-8 bg-foreground min-h-screen" value="collections">
                    <div className="container mx-auto px-12">
                        Collections
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    )
}