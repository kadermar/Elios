"use client";

import Image from "next/image";
import Button from "./Button";
import AFlare from "./AFlare";

export default function AboutHero() {
  return (
    <section className="content-stretch flex flex-col items-center justify-center relative size-full px-4 md:px-16">
      <div className="content-stretch flex gap-[140px] items-center justify-start max-w-[1638px] relative shrink-0 w-full">
        {/* Background Flare */}
        <div className="absolute top-[-200px] left-[50%] translate-x-[-50%] w-[800px] h-[600px] opacity-30">
          <AFlare />
        </div>

        {/* Left Side - Hero Text */}
        <div className="content-stretch flex flex-col gap-[100px] items-start justify-start relative shrink-0 w-[694px]">
          <div className="content-stretch flex flex-col gap-10 items-start justify-start relative shrink-0 w-full">
            <div className="font-['Aptos:SemiBold',_sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#09141f] text-[96px] tracking-[-5.76px]" style={{ width: "min-content" }}>
              <p className="leading-[96px]">Bringing executive insight and recruiting expertise together.</p>
            </div>
            <div className="font-['Aptos:Regular',_sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#09141f] text-[24px]" style={{ width: "min-content" }}>
              <p className="leading-[32px]">We've lived the frustrations of slow, fragmented hiring—both in the boardroom and on the recruiting floor. That's why we built a team that blends the perspective of seasoned executives with the craft of expert recruiters. Together, we're reimagining what hiring can be: faster, fairer, and more human for everyone involved.</p>
            </div>

            {/* Button Row */}
            <div className="content-stretch flex gap-3 items-start justify-start relative shrink-0">
              <Button
                href="/book-demo"
                variant="primary"
                size="lg"
                showArrow={true}
              >
                Book a Demo
              </Button>
              <Button
                href="/request-talent"
                variant="secondary"
                size="lg"
              >
                Request Talent
              </Button>
            </div>
          </div>
        </div>

        {/* Right Side - Hero Image with Dark Glass Effects */}
        <div className="relative shrink-0">
          {/* Background Glass Panels */}
          <div className="absolute backdrop-blur-[7.758px] backdrop-filter bg-[#1a1a1a] h-[548px] left-[20px] rounded-[15px] top-[30px] w-[536px]">
            <div className="absolute inset-0 pointer-events-none shadow-[3.879px_3.879px_0.646px_-4.525px_inset_rgba(255,255,255,0.5),2.586px_2.586px_1.293px_-2.586px_inset_#b3b3b3,-2.586px_-2.586px_1.293px_-2.586px_inset_#b3b3b3,0px_0px_0px_1.293px_inset_#999999,0px_0px_28.446px_0px_inset_rgba(242,242,242,0.5)]" />
          </div>
          <div className="absolute backdrop-blur-[7.758px] backdrop-filter bg-[#1a1a1a] h-[608px] left-[40px] rounded-[15px] top-[0px] w-[536px]">
            <div className="absolute inset-0 pointer-events-none shadow-[3.879px_3.879px_0.646px_-4.525px_inset_rgba(255,255,255,0.5),2.586px_2.586px_1.293px_-2.586px_inset_#b3b3b3,-2.586px_-2.586px_1.293px_-2.586px_inset_#b3b3b3,0px_0px_0px_1.293px_inset_#999999,0px_0px_28.446px_0px_inset_rgba(242,242,242,0.5)]" />
          </div>

          {/* Main Hero Image */}
          <div className="bg-center bg-cover bg-no-repeat h-[720px] relative rounded-[15px] shrink-0 w-[804px]" style={{ backgroundImage: `url('/images/gemini-image-4.png')` }}>
            <div aria-hidden="true" className="absolute border-[9px] border-solid border-white inset-0 pointer-events-none rounded-[15px]" />
          </div>
        </div>
      </div>
    </section>
  );
}