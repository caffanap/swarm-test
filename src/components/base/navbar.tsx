"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/icons/logo.svg";
import UserSignUp from "@/assets/icons/user-sign-up.svg";

export default function Navbar() {

    return (
        <nav className="py-5 bg-background w-full sticky top-0">
            <div className="container mx-auto px-12">
                <div className="w-full flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <Image alt="logo" className="w-8 h-8" src={Logo} />
                        <span className="font-work-sans-semibold text-lg text-white">
                            NFT Marketplace
                        </span>
                    </div>
                    <div className="flex space-x-8 items-center text-base font-work-sans-semibold">
                        <Link className="text-white hover:opacity-80" href="/marketplace">
                            Marketplace
                        </Link>
                        <Link className="text-white hover:opacity-80" href="/rankings">
                            Rankings
                        </Link>
                        <Link className="text-white hover:opacity-80" href="/connect-wallet">
                            Connect Wallet
                        </Link>
                        <Link className="h-14 w-36 hover:bg-primary/80 flex items-center space-x-3 justify-center text-white bg-primary rounded-[20px]" href="/auth/sign-up">
                            <Image alt="icon" className="w-5 h-5" src={UserSignUp} />
                            <span>Sign Up</span>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}