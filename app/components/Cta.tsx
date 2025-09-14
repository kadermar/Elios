"use client";

import Image from "next/image";
import Button from "./Button";

const imgFlareLeft = "/cta-flare-left.svg";
const imgFlareRight = "/cta-flare-right.svg";
const imgGlobe = "/cta-globe.png"; // You may need to add this asset

export default function CTA() {
  return (
    <div className="relative bg-[#e0f1fe] w-full overflow-hidden">
      <div className="relative max-w-[1920px] mx-auto px-4 md:px-8 lg:px-16 py-24 md:py-36">
        {/* Background Elements */}
        {/* Globe Animation Background */}
        <div 
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1440px] h-[812px] opacity-20 mix-blend-luminosity pointer-events-none"
          style={{
            background: `radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%)`,
          }}
        />
        
        {/* Left Flare */}
        <div className="absolute bottom-[-320px] left-1/2 transform -translate-x-[calc(50%+485px)] w-[805px] h-[614px] opacity-80 pointer-events-none">
          <Image
            alt=""
            src={imgFlareLeft}
            width={805}
            height={614}
            className="block w-full h-full object-contain"
          />
        </div>
        
        {/* Right Flare */}
        <div className="absolute bottom-[-488px] right-0 transform translate-x-[100px] rotate-[207deg] w-[497px] h-[614px] opacity-80 pointer-events-none">
          <Image
            alt=""
            src={imgFlareRight}
            width={497}
            height={614}
            className="block w-full h-full object-contain"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col gap-6 items-center justify-center text-center">
          {/* Heading */}
          <h2 className="font-semibold text-[#0f1012] text-[32px] md:text-[48px] lg:text-[54px] leading-[1.1] md:leading-[1] tracking-[-1.92px] md:tracking-[-2.88px] lg:tracking-[-3.24px] max-w-5xl">
            Let's build your dream team of tomorrow
          </h2>
          
          {/* Button Row */}
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
            <Button 
              variant="primary" 
              size="lg" 
              href="/book-demo"
              showArrow={true}
              className="min-w-[180px]"
            >
              Book a Demo
            </Button>
            
            <Button 
              variant="secondary" 
              size="lg" 
              href="/request-talent"
              className="min-w-[180px] bg-white"
            >
              Request Talent
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}