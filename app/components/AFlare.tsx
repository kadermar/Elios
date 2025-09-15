"use client";

import Image from "next/image";

const imgAFlare = "/images/a-flare.svg";

interface AFlareProps {
  className?: string;
}

export default function AFlare({ className = "" }: AFlareProps) {
  return (
    <div className={`relative size-full ${className}`} data-name="A Flare" data-node-id="2514:12223">
      <div className="absolute inset-[-11.03%_-12.51%]">
        <Image
          alt=""
          src={imgAFlare}
          fill
          className="block max-w-none size-full"
        />
      </div>
    </div>
  );
}