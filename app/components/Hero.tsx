import Image from "next/image";
import Link from "next/link";

const imgProfileDropdownMenu1 = "/hero-dashboard.png";
const img = "/hero-arrow.svg";
const imgGroup = "/samsung-group.svg";
const imgDrataWordmarkDark01 = "/drata-wordmark.svg";
const imgGoldmanSachsLogo01 = "/goldman-sachs.svg";
const imgAmplifyChangeLogo01 = "/amplify-change.svg";

export default function Hero() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative size-full px-4 md:px-0" data-name="Hero" data-node-id="65:806">
      <div className="content-stretch flex flex-col lg:flex-row gap-8 md:gap-[140px] items-center justify-start max-w-[1638px] relative shrink-0 w-full" data-name="Wrapper" data-node-id="65:807">
        <div className="content-stretch flex flex-col gap-8 md:gap-[100px] items-start justify-start relative shrink-0 w-full lg:w-[694px]" data-name="Hero Text" data-node-id="65:829">
          <div className="content-stretch flex flex-col gap-6 md:gap-10 items-start justify-start relative shrink-0 w-full" data-name="Top" data-node-id="65:830">
            <div className="font-semibold leading-[0] min-w-full not-italic relative shrink-0 text-[#09141f] text-[36px] md:text-[64px] lg:text-[96px] tracking-[-2px] md:tracking-[-4px] lg:tracking-[-5.76px]" data-node-id="65:831" style={{ width: "min-content" }}>
              <p className="leading-[1.1] md:leading-[64px] lg:leading-[96px]">Hire with human expertise, at AI speed</p>
            </div>
            <div className="font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[#09141f] text-[16px] md:text-[20px] lg:text-[24px]" data-node-id="65:832" style={{ width: "min-content" }}>
              <p className="leading-[1.35]">Elios combines elite recruiters with an intelligence layer that cuts the noise and moves the right people forward—fast.</p>
            </div>
            <div className="content-stretch flex flex-col sm:flex-row gap-3 items-start justify-start relative shrink-0 w-full sm:w-auto" data-name="Button Row" data-node-id="65:833">
              <Link href="/book-demo" className="bg-[#fa6a20] box-border content-stretch flex gap-3 md:gap-4 h-[50px] md:h-[60px] items-center justify-center px-4 md:pl-[22px] md:pr-2 py-3 md:py-3.5 relative rounded-[12px] shrink-0 cursor-pointer hover:bg-[#e85a10] transition-colors w-full sm:w-auto" data-name="Primary Button" data-node-id="65:834">
                <div className="font-aptos font-semibold leading-[0] not-italic relative shrink-0 text-[14px] md:text-[16px] text-center text-nowrap text-white" data-node-id="65:836">
                  <p className="leading-[20px] whitespace-pre">Book a Demo</p>
                </div>
                <div className="bg-white box-border content-stretch flex gap-2.5 items-center justify-center p-[8px] md:p-[10px] relative rounded-[7px] shrink-0 size-[36px] md:size-[46px]" data-node-id="65:837">
                  <div className="relative shrink-0 size-3 md:size-4" data-name="Line Rounded/Arrow rigth" data-node-id="65:838">
                    <div className="absolute inset-[15.67%_15%]" data-name="Arrow rigth" id="node-I65_838-4940_34491">
                      <div className="absolute inset-[-7.8%_-7.66%_-7.8%_-7.65%]">
                        <Image alt="Arrow" src="/connect-cta-arrow.svg" width={16} height={16} className="block max-w-none size-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              <Link href="/request-talent" className="box-border content-stretch flex gap-[3px] items-center justify-center px-4 md:px-[22px] py-3 md:py-[18px] relative rounded-[12px] self-stretch shrink-0 cursor-pointer hover:bg-gray-50 transition-colors w-full sm:w-auto" data-name="Secondary Button" data-node-id="65:839">
                <div className="font-semibold leading-[0] not-italic relative shrink-0 text-[14px] md:text-[16px] text-black text-center text-nowrap" data-node-id="65:841">
                  <p className="leading-[20px] whitespace-pre">Request Talent</p>
                </div>
              </Link>
            </div>
          </div>
          <div className="content-stretch flex flex-wrap gap-4 md:gap-[52px] items-center justify-center md:justify-start opacity-50 relative shrink-0" data-name="Logo Reel" data-node-id="65:843">
            <div className="h-[28px] md:h-[38px] overflow-clip relative shrink-0 w-[68px] md:w-[90px]" data-name="Weatherford Logo" data-node-id="65:844">
              <div className="text-gray-600 text-xs md:text-sm font-medium flex items-center justify-center h-full">
                Weatherford
              </div>
            </div>
            <div className="h-2.5 md:h-3.5 overflow-clip relative shrink-0 w-[68px] md:w-[90px]" data-name="Samsung Logo" data-node-id="65:878">
              <div className="absolute bottom-[-0.12%] left-0 right-0 top-0" data-name="Group" data-node-id="65:879">
                <Image alt="Samsung" src={imgGroup} width={90} height={14} className="block max-w-none size-full" />
              </div>
            </div>
            <div className="h-2.5 md:h-3.5 relative shrink-0 w-[60px] md:w-20" data-name="Drata Logo" data-node-id="65:881">
              <Image alt="Drata" src={imgDrataWordmarkDark01} width={80} height={14} className="block max-w-none size-full" />
            </div>
            <div className="h-[22px] md:h-[30px] relative shrink-0 w-[54px] md:w-[72px]" data-name="Goldman Sachs Logo" data-node-id="65:887">
              <Image alt="Goldman Sachs" src={imgGoldmanSachsLogo01} width={72} height={30} className="block max-w-none size-full" />
            </div>
            <div className="h-[22px] md:h-[30px] relative shrink-0 w-[74px] md:w-[98px]" data-name="Amplify Change Logo" data-node-id="65:889">
              <Image alt="Amplify Change" src={imgAmplifyChangeLogo01} width={98} height={30} className="block max-w-none size-full" />
            </div>
          </div>
        </div>
        <div className="hidden lg:block grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Hero Image" data-node-id="65:908">
          <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[15.88px] place-items-start relative" data-name="Software" data-node-id="65:910">
            <div className="[grid-area:1_/_1] bg-center bg-cover bg-no-repeat h-[600px] xl:h-[1043.12px] ml-[49.645px] mt-0 rounded-[15px] shadow-[0px_138.351px_38.79px_0px_rgba(216,134,19,0),0px_87.924px_34.911px_0px_rgba(216,134,19,0.01),0px_49.134px_29.739px_0px_rgba(216,134,19,0.05),0px_21.981px_21.981px_0px_rgba(216,134,19,0.09),0px_5.172px_11.637px_0px_rgba(216,134,19,0.1)] w-[1000px] xl:w-[1854.44px]" data-name="Profile Dropdown Menu 1" data-node-id="65:913" style={{ backgroundImage: `url(${imgProfileDropdownMenu1})` }} />
          </div>
        </div>
      </div>
    </div>
  );
}