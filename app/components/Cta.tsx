"use client";

import Image from "next/image";
import Link from "./Link";

// Image assets from Figma
const imgGlobeEarthLinesGray = "/globe-earth-lines-gray.png";
const imgDFlare = "/d-flare.svg";
const imgDFlare1 = "/d-flare-1.svg";

export default function CTA() {
  return (
    <div
      className="bg-[#e0f1fe] box-border content-stretch flex flex-col items-center justify-start px-16 py-36 relative size-full overflow-hidden"
      data-name="Section"
    >
      {/* Globe Background */}
      <div
        className="absolute bg-center bg-cover bg-no-repeat h-[940px] mix-blend-luminosity top-[165.44px] translate-x-[-50%] w-[1504px]"
        data-name="Globe_Earth_Lines_Gray-removebg-preview 1"
        style={{
          left: "calc(50% + 17px)",
          backgroundImage: `url('${imgGlobeEarthLinesGray}')`
        }}
      />

      {/* Left D Flare */}
      <div
        className="absolute bottom-[-318.61px] h-[614.209px] opacity-80 translate-x-[-50%] w-[804.943px] z-0 pointer-events-none"
        data-name="D Flare"
        style={{ left: "calc(50% - 485.529px)" }}
      >
        <div className="absolute inset-[-10.42%_-7.95%]">
          <Image
            src={imgDFlare}
            alt=""
            width={804}
            height={614}
            className="block max-w-none size-full"
          />
        </div>
      </div>

      {/* Right D Flare */}
      <div className="absolute flex h-[773.087px] items-center justify-center right-[-172.68px] top-[331.85px] w-[722.338px] z-0 pointer-events-none">
        <div className="flex-none rotate-[207.139deg]">
          <div className="h-[614px] opacity-80 relative w-[497px]" data-name="D Flare">
            <div className="absolute inset-[-10.42%_-12.88%]">
              <Image
                src={imgDFlare1}
                alt=""
                width={497}
                height={614}
                className="block max-w-none size-full"
              />
            </div>
          </div>
        </div>
      </div>

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
            <div className="bg-[#fb5d0b] box-border content-stretch flex gap-4 items-center justify-center pl-6 pr-2 py-2 relative rounded-[12px] shrink-0" data-name="Button-Primary-lg">
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
          </Link>

          {/* Secondary Button */}
          <Link href="/request-talent">
            <div className="bg-white box-border content-stretch flex gap-4 h-[62px] items-center justify-center px-6 py-2 relative rounded-[12px] shrink-0" data-name="Button-Secondary-Lg">
              <div className="font-['Aptos:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#0f1012] text-[16px] text-center text-nowrap">
                <p className="leading-[20px] whitespace-pre">Request Talent</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}