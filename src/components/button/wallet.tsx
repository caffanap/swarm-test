"use client";

import { Button } from "../ui/button";

export default function ButtonWallet({ children, onClick }: { children?: React.ReactNode, onClick?: () => void }) {

    return (
        <Button onClick={onClick} className="border border-primary space-x-2 px-8 justify-start bg-foreground text-white font-work-sans-semibold hover:bg-primary/10 w-80 h-16 rounded-2xl">
            {children}
        </Button>
    )
}