"use client";

import Image from "next/image";

const imgDFlare = "/images/d-flare.svg";

interface DFlareProps {
  className?: string;
}

export default function DFlare({ className = "" }: DFlareProps) {
  return (
    <div className={`relative size-full ${className}`} data-name="D Flare" data-node-id="2514:12230">
      <div className="absolute inset-[-10.34%_-5.47%]">
        <Image
          alt=""
          src={imgDFlare}
          fill
          className="block max-w-none size-full"
        />
      </div>
    </div>
  );
}