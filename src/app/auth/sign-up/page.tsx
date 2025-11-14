"use client"

import Image from "next/image"
import PlaceholderRegister from "@/assets/images/signup/signup-placeholder.png";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function SignUpPage() {

    return (
        <div className="w-full h-full flex">
            <Image src={PlaceholderRegister} className="object-cover object-center" alt="placeholder-register" />
            <div className="flex-grow flex flex-col justify-center px-14 space-y-6">
                <h2 className="text-white font-work-sans-extrabold text-6xl">Create account</h2>
                <div className="text-white text-xl max-w-md leading-relaxed">
                    Welcome! enter your details and start creating, collecting and selling NFTs.
                </div>
                <div className="space-y-4 max-w-md pt-4">
                    <Input icon="user" type="text" placeholder="Username" className="bg-input-bg border-foreground-text/50" />
                    <Input icon="email" type="email" placeholder="Email" className="bg-input-bg border-foreground-text/50" />
                    <Input icon="password" type="password" placeholder="Password" className="bg-input-bg border-foreground-text/50" />
                    <Input icon="password" type="password" placeholder="Confirm Password" className="bg-input-bg border-foreground-text/50" />
                    <Button className="w-full h-12 rounded-full bg-primary text-white font-work-sans-semibold hover:bg-primary/90">
                        Create Account
                    </Button>
                </div>
            </div>
        </div>
    )
}