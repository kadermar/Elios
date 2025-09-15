import Image from "next/image";
import Button from "./Button";
import HeroFlare from "./HeroFlare";

const imgProfileDropdownMenu1 = "/images/profile-dropdown-menu.png";
const imgRectangle717 = "/images/rectangle-717.svg";

export default function Hero() {
  return (
    <div
      className="relative"
      data-name="Hero"
      data-node-id="2398:25401"
      style={{
        display: 'flex',
        height: '752px',
        maxWidth: '1800px',
        padding: '0 var(--Margin, 64px)',
        alignItems: 'center',
        gap: 'var(--Spacing-0, 0)',
        alignSelf: 'stretch'
      }}
    >
      <div className="content-stretch flex flex-col gap-[104px] h-full items-start justify-center relative shrink-0 w-[590px]" data-name="Hero Text" data-node-id="2398:24624">
        <div className="content-stretch flex flex-col gap-10 items-start justify-start relative shrink-0 w-full" data-name="Top Section" data-node-id="2398:24625">
          <div
            className="relative shrink-0 w-[534px]"
            data-node-id="2398:24626"
            style={{
              color: 'var(--Neutral-Charcoal, #0F1012)',
              fontFeatureSettings: "'liga' off, 'clig' off",
              fontFamily: 'var(--Typeface-Family-Heading, Aptos)',
              fontSize: 'var(--Typeface-Size-H1, 86px)',
              fontStyle: 'normal',
              fontWeight: 600,
              lineHeight: '64px',
              letterSpacing: '-5.16px'
            }}
          >
            <p>Hire the right talent, effortlessly.</p>
          </div>
          <div
            className="min-w-full relative shrink-0"
            data-node-id="2398:24627"
            style={{
              width: "min-content",
              color: 'var(--Neutral-Charcoal, #0F1012)',
              fontFeatureSettings: "'liga' off, 'clig' off",
              fontFamily: 'var(--Typeface-Family-Body, Aptos)',
              fontSize: 'var(--Typeface-Size-Paragraph-lg, 20px)',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: '24px'
            }}
          >
            <p>Elios combines elite recruiters with an intelligent AI layer that cuts the noise and delivers top talent, fast.</p>
          </div>
          <div className="content-stretch flex gap-3 items-start justify-start relative size-full" data-name="Button Row" data-node-id="2398:24628">
            <Button
              variant="primary"
              size="lg"
              href="/book-demo"
              showArrow={true}
            >
              Book a Demo
            </Button>
            <Button
              variant="secondary"
              size="lg"
              href="/request-talent"
            >
              Request Talent
            </Button>
          </div>
        </div>
      </div>

      <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Hero Image" data-node-id="2398:24635">
        <div
          className="[grid-area:1_/_1] ml-0 mt-0 relative z-0"
          data-name="Hero Flare"
          data-node-id="2398:24636"
          style={{
            display: 'flex',
            width: '628px',
            height: '752px',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            flexShrink: 0
          }}
        >
          <HeroFlare property1="Default" />
        </div>
        <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-9 place-items-start relative z-10" data-name="Software" data-node-id="2398:24638">
          <div
            className="[grid-area:1_/_1] backdrop-blur-[5.936px] backdrop-filter bg-transparent h-[664.977px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-76.567px_-105.464px] mask-size-[1187px_752px] ml-0 mt-[69.464px] relative rounded-[11.477px] w-[370.186px] opacity-30 z-10"
            data-node-id="2398:24639"
            style={{ maskImage: `url('${imgRectangle717}')` }}
          >
            <div className="absolute inset-0 pointer-events-none shadow-[2.968px_2.968px_0.495px_-3.463px_inset_rgba(255,255,255,0.2),1.979px_1.979px_0.989px_-1.979px_inset_rgba(255,255,255,0.1),-1.979px_-1.979px_0.989px_-1.979px_inset_rgba(255,255,255,0.1),0px_0px_0px_0.989px_inset_rgba(255,255,255,0.15),0px_0px_21.766px_0px_inset_rgba(255,255,255,0.1)]" />
          </div>
          <div
            className="[grid-area:1_/_1] backdrop-blur-[5.936px] backdrop-filter bg-transparent h-[732.746px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-93.73px_-71.579px] mask-size-[1187px_752px] ml-[17.163px] mt-[35.579px] relative rounded-[11.477px] w-[370.186px] opacity-20 z-10"
            data-node-id="2398:24640"
            style={{ maskImage: `url('${imgRectangle717}')` }}
          >
            <div className="absolute inset-0 pointer-events-none shadow-[2.968px_2.968px_0.495px_-3.463px_inset_rgba(255,255,255,0.2),1.979px_1.979px_0.989px_-1.979px_inset_rgba(255,255,255,0.1),-1.979px_-1.979px_0.989px_-1.979px_inset_rgba(255,255,255,0.1),0px_0px_0px_0.989px_inset_rgba(255,255,255,0.15),0px_0px_21.766px_0px_inset_rgba(255,255,255,0.1)]" />
          </div>
          <div
            className="[grid-area:1_/_1] bg-center bg-cover bg-no-repeat h-[774.622px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-113.435px_-36px] mask-size-[1187px_752px] ml-[36.868px] mt-0 rounded-[11.477px] shadow-[0px_71.266px_20.362px_0px_rgba(250,93,11,0),0px_46.276px_18.511px_0px_rgba(250,93,11,0.01),0px_25.915px_15.734px_0px_rgba(250,93,11,0.05),0px_11.106px_11.106px_0px_rgba(250,93,11,0.1)] w-[1377.11px] z-20"
            data-name="Profile Dropdown Menu 1"
            data-node-id="2398:24641"
            style={{
              backgroundImage: `url('${imgProfileDropdownMenu1}')`,
              maskImage: `url('${imgRectangle717}')`
            }}
          />
        </div>
      </div>
    </div>
  );
}