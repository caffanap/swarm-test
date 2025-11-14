"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="w-full relative py-8">
      <div className="container mx-auto px-12">
        <div className="w-full grid grid-cols-2 gap-8">
          <div className="space-y-8">
            <div className="text-7xl font-work-sans-extrabold">
              Discover <br /> Digital art & Collect NFTs
            </div>
            <div className="text-foreground-text text-xl max-w-md">
              NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.
            </div>
            <Button className="bg-primary text-white font-work-sans-semibold rounded-2xl px-12 h-12 hover:bg-primary/90">
              <Image className="w-4 h-4" alt="launch" src={require("@/assets/icons/launch.svg")} />
              <span>
                Get Started
              </span>
            </Button>
            <div className="flex items-center space-x-16">
              <div>
                <div className="font-work-sans-semibold text-2xl">240K</div>
                <div className="text-xl text-foreground-text font-work-sans">Total Sale</div>
              </div>
              <div>
                <div className="font-work-sans-semibold text-2xl">100k+</div>
                <div className="text-xl text-foreground-text font-work-sans">Auctions</div>
              </div>
              <div>
                <div className="font-work-sans-semibold text-2xl">240K</div>
                <div className="text-xl text-foreground-text font-work-sans">Artists</div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="rounded-3xl overflow-hidden bg-foreground w-3/4">
              <div className="aspect-square w-full">
                <Image alt="hero" src={require("@/assets/images/home/hero.png")} className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <div className="text-2xl font-work-sans-semibold">
                  Space Walking
                </div>
                <div className="flex items-center space-x-3 pt-1">
                  <div className="w-5 h-5 bg-white rounded-full" />
                  <div>
                    Animakid
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
