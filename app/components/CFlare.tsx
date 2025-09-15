"use client";

const imgCFlare = "/images/c-flare.svg";

interface CFlareProps {
  className?: string;
}

export default function CFlare({ className = "" }: CFlareProps) {
  return (
    <div className={`absolute h-[727px] left-[-233px] top-[305.4px] w-[745px] ${className}`} data-name="C Flare">
      <div className="absolute inset-[-15.68%_-15.3%]">
        <img
          alt=""
          className="block max-w-none size-full"
          src={imgCFlare}
        />
      </div>
    </div>
  );
}