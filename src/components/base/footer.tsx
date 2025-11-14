"use client";

import Image from "next/image";
import Logo from "@/assets/icons/logo.svg";
import DiscordLogo from "@/assets/icons/sosmed/discord.svg";
import YoutubeLogo from "@/assets/icons/sosmed/youtube.svg";
import TwitterLogo from "@/assets/icons/sosmed/twitter.svg";
import InstagramLogo from "@/assets/icons/sosmed/instagram.svg";
import Link from "next/link";
import { Input } from "../ui/input";


export default function Footer() {


    return (
        <footer className="py-5 bg-foreground w-full">
            <div className="container mx-auto px-12 space-y-6">
                <div className="grid grid-cols-12 gap-4 w-full">
                    <div className="col-span-4 space-y-4">
                        <div className="flex items-center space-x-3 pb-2">
                            <Image alt="logo" className="w-8 h-8" src={Logo} />
                            <span className="font-work-sans-semibold text-base text-white">
                                NFT Marketplace
                            </span>
                        </div>
                        <div className="text-foreground-text text-sm">
                            NFT marketplace UI created with Anima for Figma.
                        </div>
                        <div className="text-foreground-text text-sm">
                            Join our community
                        </div>
                        <div className="flex items-center space-x-3">
                            <Link href={"https://discord.com/invite/eQxkYTNxSp"}>
                                <Image alt="discord" className="w-8 h-8" src={DiscordLogo} />
                            </Link>
                            <Link href={"https://www.youtube.com/channel/UCXqr0Ca-b73rU9zcpSBJ5cw"}>
                                <Image alt="youtube" className="w-8 h-8" src={YoutubeLogo} />
                            </Link>
                            <Link href={"https://twitter.com/animaapp?lang=en"}>
                                <Image alt="twitter" className="w-8 h-8" src={TwitterLogo} />
                            </Link>
                            <Link href={"https://www.instagram.com/animaapp/?hl=en"}>
                                <Image alt="instagram" className="w-8 h-8" src={InstagramLogo} />
                            </Link>
                        </div>
                    </div>
                    <div className="col-span-3 space-y-4">
                        <h5 className="pb-2 text-lg font-work-sans-semibold text-white">Explore</h5>
                        <div className="space-y-4">
                            <Link href={"/marketplace"} className="block text-foreground-text text-sm">
                                Marketplace
                            </Link>
                            <Link href={"/rankings"} className="block text-foreground-text text-sm">
                                Rankings
                            </Link>
                            <Link href={"/connect-wallet"} className="block text-foreground-text text-sm">
                                Connect a wallet
                            </Link>
                        </div>
                    </div>
                    <div className="col-span-5 space-y-4">
                        <h5 className="pb-2 text-lg font-work-sans-semibold text-white">Join our weekly digest</h5>
                        <div className="text-foreground-text text-sm">
                            Get exclusive promotions & updates straight to your inbox.
                        </div>
                        <div>
                            <Input variant="mail" placeholder="Enter your email here" />
                        </div>
                    </div>
                </div>
                <hr className="border-foreground-text/40 w-full" />
                <div className="w-full text-foreground-text text-xs">
                    Ⓒ NFT Market. Use this template freely.
                </div>
            </div>
        </footer>
    )
}