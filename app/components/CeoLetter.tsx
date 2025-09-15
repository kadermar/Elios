"use client";

import Image from "next/image";
import Tagline from "./Tagline";
import BFlare from "./BFlare";

export default function CeoLetter() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[90px] items-center justify-center px-0 py-[152px] relative size-full">
      {/* Background BFlare */}
      <div className="absolute top-[443px] left-[calc(50%-668.5px)] w-[869px] h-[625px] opacity-90">
        <BFlare />
      </div>
      <div className="content-stretch flex flex-col gap-[90px] items-center justify-center max-w-[1638px] relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-10 items-center justify-center relative shrink-0 w-full">
          <Tagline text="a letter from our ceo" />
          <div className="font-aptos font-semibold leading-[0] not-italic relative shrink-0 text-[#09141f] text-[32px] md:text-[64px] text-center tracking-[-1.6px] md:tracking-[-3.2px] w-full max-w-[634px] px-4">
            <p className="leading-[0.9]">"The Future of Hiring Can't Wait, And Neither Can We"</p>
          </div>
        </div>
        <div className="h-0 relative shrink-0 w-[70px]">
          <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
            <Image
              alt=""
              src="/assets/ceo-letter-line.svg"
              width={70}
              height={1}
              className="block max-w-none size-full"
            />
          </div>
        </div>
        <div className="content-stretch flex flex-col lg:flex-row gap-[90px] items-center lg:items-start justify-center relative shrink-0 w-full">
          <div className="content-stretch flex gap-[90px] h-[400px] md:h-[700px] lg:h-[700.28px] items-start justify-start relative shrink-0 w-full lg:w-[574px]">
            <div className="aspect-[700/854] basis-0 bg-gray-100 grow min-h-px min-w-px rounded-[15px] shrink-0" />
          </div>
          <div className="content-stretch flex flex-col gap-11 items-start justify-center relative shrink-0 w-full lg:w-[572px] px-4 lg:px-0">
            <div className="font-aptos font-semibold leading-[0] min-w-full not-italic relative shrink-0 text-[#09141f] text-[24px] md:text-[40px] tracking-[-1px] md:tracking-[-2px]" style={{ width: "min-content" }}>
              <p className="leading-[1.1]">To our clients, partners, and colleagues</p>
            </div>
            <div className="content-stretch flex flex-col font-aptos gap-9 items-start justify-start leading-[0] not-italic relative shrink-0 text-[#09141f] text-[16px] md:text-[20px] w-full">
              <div className="relative shrink-0 w-full">
                <p className="leading-[24px] md:leading-[29px]">At Elios, we believe hiring is more than filling roles—it's shaping the future of organizations, careers, and industries. For too long, recruiting has been slowed by inefficiencies, fragmented processes, and a lack of clarity. The result? Frustrated candidates, overburdened recruiters, and executives left waiting on talent to drive growth.</p>
              </div>
              <div className="relative shrink-0 w-full">
                <p className="leading-[24px] md:leading-[29px]">We built Elios to change that.</p>
              </div>
              <div className="relative shrink-0 w-full">
                <p className="leading-[24px] md:leading-[29px]">Elios re-imagines recruiting from the ground up—combining the empathy and judgment of experienced recruiters with the speed and precision of AI-driven insights. For hiring managers, it means clearer shortlists and faster decisions. For recruiters, it means less time on busywork and more time building meaningful relationships. For HR executives, it means visibility into the talent pipeline and confidence that every hire is aligned to strategy. And for candidates, it means a transparent, respectful process that treats every career move like the pivotal moment it is.</p>
              </div>
              <div className="relative shrink-0 w-full">
                <p className="leading-[24px] md:leading-[29px]">
                  We see a future where recruiting is no longer a bottleneck, but a business enabler. Where teams can staff critical projects in days, not months. Where candidates walk away from every interaction—hired or not—feeling seen and valued. Where data informs decisions, but people make them.
                  <br />
                  That's the future we're building at Elios. And we're just getting started.
                </p>
              </div>
              <div className="relative shrink-0 w-full">
                <p className="leading-[24px] md:leading-[29px]">With urgency and optimism,</p>
              </div>
            </div>
            <div className="bg-center bg-cover bg-no-repeat h-[76px] shrink-0 w-[263px]" style={{ backgroundImage: `url('/assets/ceo-letter-signature.png')` }} />
          </div>
        </div>
      </div>
    </div>
  );
}