"use client";

import Image from "next/image";
import Link from "./Link";

// Image assets from Figma
const imgTaletGlobeColorized = "/assets/talet-globe-colorized.png";
const imgDFlare = "/assets/d-flare-updated.svg";
const imgDFlare1 = "/assets/d-flare-updated-2.svg";

interface ButtonPrimaryLgProps {
  state?: "Rest" | "Hover";
}

function ButtonPrimaryLg({ state = "Rest" }: ButtonPrimaryLgProps) {
  return (
    <div className="box-border content-stretch flex gap-4 items-center justify-center pl-6 pr-2 py-2 relative rounded-[12px] size-full" data-name="State=Rest">
      <div className="font-['Aptos:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[20px] whitespace-pre">Book a Demo</p>
      </div>
      <div className="bg-white box-border content-stretch flex gap-2.5 items-center justify-center p-[10px] relative rounded-[7px] shrink-0 size-[46px]">
        <div className="shrink-0 size-4">
          <Image
            src="/cta-arrow.svg"
            alt="Arrow"
            width={16}
            height={16}
            className="block max-w-none size-full"
          />
        </div>
      </div>
    </div>
  );
}

interface ButtonSecondaryLgProps {
  state?: "Rest" | "Hover";
}

function ButtonSecondaryLg({ state = "Rest" }: ButtonSecondaryLgProps) {
  return (
    <div className="box-border content-stretch flex gap-4 items-center justify-center px-6 py-2 relative rounded-[12px] size-full" data-name="State=Rest">
      <div className="font-['Aptos:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#0f1012] text-[16px] text-center text-nowrap">
        <p className="leading-[20px] whitespace-pre">Request Talent</p>
      </div>
    </div>
  );
}

export default function CTA() {
  return (
    <section className="w-full bg-[#c0e4ff] box-border content-stretch flex flex-col items-center justify-start px-16 py-36 relative overflow-visible" data-name="Content Type=Final CTA">
      {/* Left D Flare */}
      <div className="absolute flex h-[614.209px] items-center justify-center left-[-262px] top-[130.44px] w-[804.943px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="h-[614.209px] opacity-90 relative w-[804.943px]" data-name="D Flare">
            <div className="absolute inset-[-10.42%_-7.95%]">
              <Image alt="" className="block max-w-none size-full" src={imgDFlare} width={804} height={614} />
            </div>
          </div>
        </div>
      </div>

      {/* Right D Flare */}
      <div className="absolute flex h-[869.487px] items-center justify-center right-[-246.32px] top-[104.44px] w-[866.313px]">
        <div className="flex-none rotate-[315.551deg] scale-y-[-100%]">
          <div className="h-[730.469px] opacity-90 relative w-[497px]" data-name="D Flare">
            <div className="absolute inset-[-8.76%_-12.88%]">
              <Image alt="" className="block max-w-none size-full" src={imgDFlare1} width={497} height={730} />
            </div>
          </div>
        </div>
      </div>

      {/* Colorized Globe Background */}
      <div
        className="absolute bg-center bg-cover bg-no-repeat mix-blend-screen size-[841px] top-[16.44px] translate-x-[-50%]"
        data-name="Talet Globe Colorized@2x 1"
        style={{
          left: "calc(50% - 0.5px)",
          backgroundImage: `url('${imgTaletGlobeColorized}')`
        }}
      />

      {/* Content */}
      <div className="content-stretch flex flex-col gap-6 items-center justify-start relative shrink-0 z-10">
        <div className="content-stretch flex flex-col gap-6 h-[108px] items-center justify-center relative shrink-0 w-[1312px]" data-name="Subhead Section">
          <div className="content-stretch flex flex-col gap-4 items-center justify-center relative shrink-0 w-full" data-name="Top">
            <div
              className="font-['Aptos:Semibold',_sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#0f1012] text-[54px] text-center tracking-[-3.24px]"
              style={{ width: "min-content" }}
            >
              <p className="leading-[54px]">Let's build your dream team of tomorrow</p>
            </div>
          </div>
        </div>

        {/* Button Row */}
        <div className="content-stretch flex gap-3 items-start justify-start relative shrink-0" data-name="Button Row">
          {/* Primary Button */}
          <Link href="/book-demo">
            <div className="bg-[#fb5d0b] box-border content-stretch flex gap-4 items-center justify-center pl-6 pr-2 py-2 relative rounded-[12px] shrink-0 transition-all duration-300 hover:shadow-lg hover:scale-105" data-name="Button-Primary-lg">
              <ButtonPrimaryLg />
            </div>
          </Link>

          {/* Secondary Button */}
          <Link href="/request-talent">
            <div className="bg-white box-border content-stretch flex gap-4 h-[62px] items-center justify-center px-6 py-2 relative rounded-[12px] shrink-0 transition-all duration-300 hover:shadow-lg hover:scale-105" data-name="Button-Secondary-Lg">
              <ButtonSecondaryLg />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}