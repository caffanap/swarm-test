import ListHeader from "@/components/list/list-header";
import ListItem from "@/components/list/list-item";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

export default function RankingsPage() {

    return (
        <div className="py-8 w-full min-h-screen">
            <div className="container mx-auto px-12">
                <div className="space-y-3 w-full">
                    <h2 className="text-white font-work-sans-extrabold text-4xl">
                        Top Creators
                    </h2>
                    <div className="text-white text-xl">
                        Check out top ranking NFT artists on the NFT Marketplace.
                    </div>
                </div>
                <Tabs className="mt-16" defaultValue="today">
                    <TabsList className="w-full">
                        <TabsTrigger className="w-full text-lg pb-2" value="today">Today</TabsTrigger>
                        <TabsTrigger className="w-full text-lg pb-2" value="this-week">This Week</TabsTrigger>
                        <TabsTrigger className="w-full text-lg pb-2" value="this-month">This Month</TabsTrigger>
                        <TabsTrigger className="w-full text-lg pb-2" value="all-time">All Time</TabsTrigger>
                    </TabsList>
                    <TabsContent className="space-y-4" value="today">
                        <ListHeader>
                            <div className="col-span-1 font-work-sans text-foreground-text rounded-full h-8 w-8 bg-foreground inline-flex items-center justify-center">
                                #
                            </div>
                            <div className="col-span-5 font-work-sans text-foreground-text">Artist</div>
                            <div className="col-span-2 font-work-sans text-foreground-text">Change</div>
                            <div className="col-span-2 font-work-sans text-foreground-text">NFTs Sold</div>
                            <div className="col-span-2 font-work-sans text-foreground-text">Volume</div>
                        </ListHeader>
                        {
                            Array.from({ length: 10 }).map((_, index) => (
                                <ListItem key={index}>
                                    <div className="col-span-1 font-work-sans text-foreground-text rounded-full h-8 w-8 bg-background inline-flex items-center justify-center">
                                        {index + 1}
                                    </div>
                                    <div className="col-span-5 font-work-sans text-white flex items-center space-x-4">
                                        <Image className="w-14 h-14 rounded-full" src={require(`@/assets/images/profile/avatar-${Math.floor(Math.random() * 4) + 1}.png`)} alt={`Artist ${index + 1}`} width={60} height={60} />
                                        <span>
                                            Artist Name {index + 1}
                                        </span>
                                    </div>
                                    <div className="col-span-2 font-work-sans text-green-500">
                                        +{(Math.random() * 100).toFixed(2)}%
                                    </div>
                                    <div className="col-span-2 font-work-sans text-white">
                                        {Math.floor(Math.random() * 1000)}
                                    </div>
                                    <div className="col-span-2 font-work-sans text-white">
                                        {(Math.random() * 100).toFixed(2)}K ETH
                                    </div>
                                </ListItem>
                            ))
                        }
                    </TabsContent>
                    <TabsContent value="this-week">
                        <div>
                            This Week Content
                        </div>
                    </TabsContent>
                    <TabsContent value="this-month">
                        <div>
                            This Month Content
                        </div>
                    </TabsContent>
                    <TabsContent value="all-time">
                        <div>
                            All Time Content
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}