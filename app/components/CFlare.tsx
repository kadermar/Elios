"use client";

import Image from "next/image";

const imgCFlare = "/images/c-flare.svg";

interface CFlareProps {
  className?: string;
}

export default function CFlare({ className = "" }: CFlareProps) {
  return (
    <div className={`relative size-full ${className}`} data-name="C Flare" data-node-id="2514:12225">
      <div className="absolute inset-[-8.8%_-8.59%]">
        <Image
          alt=""
          src={imgCFlare}
          fill
          className="block max-w-none size-full"
        />
      </div>
    </div>
  );
}