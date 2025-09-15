"use client";

import Image from "next/image";

const imgBFlare = "/images/b-flare.svg";

interface BFlareProps {
  className?: string;
}

export default function BFlare({ className = "" }: BFlareProps) {
  return (
    <div className={`opacity-80 relative size-full ${className}`} data-name="B Flare" data-node-id="2985:18987">
      <div className="absolute inset-[-10.42%_-7.95%]">
        <Image
          alt=""
          src={imgBFlare}
          fill
          className="block max-w-none size-full"
        />
      </div>
    </div>
  );
}