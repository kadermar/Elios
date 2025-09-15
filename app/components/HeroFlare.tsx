"use client";

import Image from "next/image";

const imgHeroFlareVariant2 = "/images/hero-flare-variant2.svg";
const imgHeroFlareVariant3 = "/images/hero-flare-variant3.svg";
const imgHeroFlareDefault = "/images/hero-flare-default.svg";

interface HeroFlareProps {
  property1?: "Default" | "Variant2" | "Variant3";
  className?: string;
}

export default function HeroFlare({ property1 = "Default", className = "" }: HeroFlareProps) {
  if (property1 === "Variant2") {
    return (
      <div className={`relative size-full ${className}`} data-name="Property 1=Variant2" data-node-id="1980:1851">
        <div className="absolute bottom-[0.64%] left-[-0.96%] right-0 top-[2.05%]" data-node-id="1980:1852">
          <div className="absolute inset-[-8.34%_-9.34%]">
            <Image
              alt=""
              src={imgHeroFlareVariant2}
              fill
              className="block max-w-none size-full"
            />
          </div>
        </div>
      </div>
    );
  }

  if (property1 === "Variant3") {
    return (
      <div className={`relative size-full ${className}`} data-name="Property 1=Variant3" data-node-id="1980:1855">
        <div className="absolute bottom-[0.64%] left-[3.02%] right-0 top-[-1.27%]" data-node-id="1980:1856">
          <div className="absolute inset-[-8.06%_-9.72%]">
            <Image
              alt=""
              src={imgHeroFlareVariant3}
              fill
              className="block max-w-none size-full"
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative size-full ${className}`} data-name="Property 1=Default" data-node-id="1969:1392">
      <div className="absolute inset-[-8.11%_-9.43%]">
        <Image
          alt=""
          src={imgHeroFlareDefault}
          fill
          className="block max-w-none size-full"
        />
      </div>
    </div>
  );
}