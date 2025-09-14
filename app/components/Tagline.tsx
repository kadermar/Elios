"use client";

import Image from "next/image";

const imgBeamVector = "/assets/4c38ab617c6f56c437ddce5238aa049bc1f2f716.svg";

interface TaglineProps {
  text: string;
  className?: string;
}

export default function Tagline({ text, className = "" }: TaglineProps) {
  return (
    <div className={`flex gap-2.5 items-center justify-center rounded-[9px] ${className}`} data-name="Tagline">
      <div className="h-[6px] relative shrink-0 w-[15px]" data-name="Beam Vector">
        <div className="absolute inset-0">
          <Image alt="" src={imgBeamVector} width={15} height={6} className="block max-w-none size-full" />
        </div>
      </div>
      <div className="font-aptos-semibold leading-[0] not-italic relative shrink-0 text-[#fb5d0b] text-[16px] text-nowrap uppercase">
        <p className="leading-[20px] whitespace-pre">{text}</p>
      </div>
    </div>
  );
}