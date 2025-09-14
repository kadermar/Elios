import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const imgProfileDropdownMenu1 = "/hero-dashboard.png";

export default function Hero() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative size-full px-4 md:px-0" data-name="Hero" data-node-id="65:806">
      <div className="content-stretch flex flex-col lg:flex-row gap-8 md:gap-[140px] items-center justify-start max-w-full lg:max-w-[1638px] relative shrink-0 w-full" data-name="Wrapper" data-node-id="65:807">
        <div className="content-stretch flex flex-col gap-8 md:gap-[100px] items-start justify-start relative shrink-0 w-full lg:w-[694px]" data-name="Hero Text" data-node-id="65:829">
          <div className="content-stretch flex flex-col gap-6 md:gap-10 items-start justify-start relative shrink-0 w-full" data-name="Top" data-node-id="65:830">
            <div className="font-semibold leading-[0] min-w-full not-italic relative shrink-0 text-[#09141f] text-[36px] md:text-[64px] lg:text-[96px] tracking-[-2px] md:tracking-[-4px] lg:tracking-[-5.76px]" data-node-id="65:831" style={{ width: "min-content" }}>
              <p className="leading-[1.1] md:leading-[64px] lg:leading-[96px]">Hire with human expertise, at AI speed</p>
            </div>
            <div className="font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[#09141f] text-[16px] md:text-[20px] lg:text-[24px]" data-node-id="65:832" style={{ width: "min-content" }}>
              <p className="leading-[1.35]">Elios combines elite recruiters with an intelligence layer that cuts the noise and moves the right people forward—fast.</p>
            </div>
            <div className="content-stretch flex flex-col sm:flex-row gap-3 items-start justify-start relative shrink-0 w-full sm:w-auto" data-name="Button Row">
              <Button 
                variant="primary" 
                size="lg" 
                href="/book-demo" 
                showArrow={true}
                className="w-full sm:w-auto"
              >
                Book a Demo
              </Button>
              <Button 
                variant="secondary" 
                size="lg" 
                href="/request-talent"
                className="w-full sm:w-auto"
              >
                Request Talent
              </Button>
            </div>
          </div>
        </div>
        <div className="relative w-full lg:w-auto lg:flex-1" data-name="Hero Image" data-node-id="65:908">
          <div className="relative w-full aspect-[16/10] lg:aspect-[1854.44/1043.12] rounded-[15px] overflow-hidden shadow-[0px_138.351px_38.79px_0px_rgba(216,134,19,0),0px_87.924px_34.911px_0px_rgba(216,134,19,0.01),0px_49.134px_29.739px_0px_rgba(216,134,19,0.05),0px_21.981px_21.981px_0px_rgba(216,134,19,0.09),0px_5.172px_11.637px_0px_rgba(216,134,19,0.1)]" data-name="Software" data-node-id="65:910">
            <Image 
              src={imgProfileDropdownMenu1}
              alt="Elios Dashboard"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}