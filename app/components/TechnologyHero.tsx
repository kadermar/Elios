import Image from "next/image";
import Button from "./Button";

export default function TechnologyHero() {
  return (
    <div className="box-border gap-6 grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] px-16 py-0 relative size-full">
      {/* Hero Text - Left Column */}
      <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[104px] items-start justify-center relative shrink-0">
        <div className="content-stretch flex flex-col gap-10 items-start justify-start relative shrink-0 w-full">
          <div className="font-aptos-semibold leading-[64px] not-italic relative shrink-0 text-[#0f1012] text-[86px] tracking-[-5.16px]">
            Accelerate your technology hiring
          </div>
          <div className="font-aptos-regular leading-[24px] not-italic relative shrink-0 text-[#0f1012] text-[20px]">
            From engineers who scale systems to product leaders who set strategy, Elios finds the right people so you stay ahead in fast-moving markets.
          </div>
          <div className="content-stretch flex gap-3 items-start justify-start relative shrink-0">
            <Button href="/demo" variant="primary" size="lg" showArrow={true}>
              Book a Demo
            </Button>
            <Button href="/request-talent" variant="secondary" size="lg" showArrow={false}>
              Request Talent
            </Button>
          </div>
        </div>
      </div>

      {/* Hero Image - Right Column */}
      <div className="[grid-area:1_/_2] relative">
        {/* Hero B Flare Background */}
        <div
          className="absolute h-[699.963px] translate-x-[-50%] translate-y-[-50%] w-[659.031px]"
          style={{ top: "calc(50% - 0.018px)", left: "calc(50% + 365.516px)" }}
        >
          <div className="absolute inset-[-9.01%_-9.57%]">
            <Image
              src="/assets/technology-hero-b-flare.svg"
              alt=""
              width={659}
              height={700}
              className="block max-w-none size-full"
            />
          </div>
        </div>

        {/* Main Code Editor Background */}
        <div
          className="absolute backdrop-blur-[6.31px] backdrop-filter bg-gradient-to-b from-[#121212] from-[12.5%] h-[379.137px] rounded-[6px] to-[#1a1a1a] to-[94.231%] translate-x-[-50%] translate-y-[-50%] w-[295.998px]"
          style={{
            top: "calc(50% - 101.432px)",
            left: "calc(50% + 313.999px)",
            maskImage: "url('/assets/technology-hero-rectangle.svg')",
            maskSize: "708px 700px",
            maskPosition: "-154px -59px",
            maskRepeat: "no-repeat"
          }}
        >
          <div className="absolute inset-0 pointer-events-none shadow-[3.155px_3.155px_0.526px_-3.681px_inset_rgba(255,255,255,0.5),2.103px_2.103px_1.052px_-2.103px_inset_#b3b3b3,-2.103px_-2.103px_1.052px_-2.103px_inset_#b3b3b3,0px_0px_0px_1.052px_inset_#999999,0px_0px_23.137px_0px_inset_rgba(242,242,242,0.5)]" />
        </div>

        {/* Main Code Editor Image */}
        <div
          className="absolute bg-center bg-cover bg-no-repeat h-[408.49px] rounded-[4.653px] translate-x-[-50%] translate-y-[-50%] w-[316.383px]"
          style={{
            top: "calc(50% - 65.479px)",
            left: "calc(50% + 346.808px)",
            backgroundImage: "url('/assets/technology-hero-image-71.png')",
            maskImage: "url('/assets/technology-hero-rectangle.svg')",
            maskSize: "708px 700px",
            maskPosition: "-176.616px -80.276px",
            maskRepeat: "no-repeat"
          }}
        >
          <div className="absolute border-[3.687px] border-solid border-white inset-0 pointer-events-none rounded-[4.653px]" />
        </div>

        {/* Bottom Small Image */}
        <div
          className="absolute bg-center bg-cover bg-no-repeat h-[101.196px] rounded-[4px] translate-x-[-50%] translate-y-[-50%] w-[87.217px]"
          style={{
            top: "calc(50% + 239.555px)",
            left: "calc(50% + 522.609px)",
            backgroundImage: "url('/assets/technology-hero-image-70.png')",
            maskImage: "url('/assets/technology-hero-rectangle.svg')",
            maskSize: "708px 700px",
            maskPosition: "-467px -538.957px",
            maskRepeat: "no-repeat"
          }}
        />
      </div>
    </div>
  );
}