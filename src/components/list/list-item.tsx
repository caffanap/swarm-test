"use client";

export default function ListItem({ children }: { children?: React.ReactNode }) {

    return (
        <div className="border w-full border-background bg-foreground grid grid-cols-12 items-center gap-4 rounded-[20px] py-3 px-5">
            {children}
        </div>
    )
}