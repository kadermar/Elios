import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Link from "next/link";
import Image from "next/image";
import CTA from "../components/CTA";
import CaseStudies from "../components/CaseStudies";

// Hero assets
const imgArrow = "/assets/af95064ccab6ee359bc75f7a09db40c0162fd9cd.svg";

// Role icons
const imgRoleIcon1 = "/assets/bb483e0a6a74244c11cf95a11df9830226501854.svg";
const imgRoleIcon2 = "/assets/486a1faec1d5eb4500b90e6d036def65f06de1d6.svg";
const imgRoleIcon3 = "/assets/fbd85535a69ed375fb650bf93e830b74b73cc189.svg";
const imgRoleIcon4 = "/assets/8f21ca0a5d411bb19a8124b9481564d3d0d8c35a.svg";
const imgRoleIcon5 = "/assets/c85557a6627529bb7b180758be685ab69a74d8d1.svg";
const imgRoleIcon6 = "/assets/641c7e775c78e673afa22146cefa3142cc84a2ce.svg";

// Common assets
const imgVector622 = "/assets/18721c6591626d2156d2f18b97a5158dcf117d0c.svg";

// Case study logos
const imgAmplifyChange = "/assets/d6fa8ccf04c6cec63c738de7bd38c50b2074718b.svg";
const imgWeatherford = "/assets/c2d5f71db181ef4e21bcc3648272db190c76715f.svg";
const imgDrata = "/assets/6067f9ed3d170a726d2ea02fd539a0b56c337a04.svg";
const imgSamsung = "/assets/d676c6942966e9ae4c171de327666f398754e82e.svg";
const imgGoldmanSachs = "/assets/4dcd68412e554c3ce6741fe77bd1164877d15ef2.svg";

// Case study images
const imgImage44 = "/assets/626fed97cfe088a057d058501a853d0a1698ff9f.png";
const imgImage47 = "/assets/b6522ee211cf1501a81e304b7952987cf2bed325.png";
const imgImage49 = "/assets/ee1c469fa54bff47a3eb0c9ff464470c74a61adb.png";
const imgImage52 = "/assets/b6a64c7fd1d247f3b175650a28512167d79ae589.png";
const imgImage58 = "/assets/8e0cc7fd7d7762e4c06e65ba838d06253b2cdbbd.png";
const imgImage59 = "/assets/133586ff46005cc64512fe39ac769d5579f709a1.png";

// Mask images
const imgImage45 = "/assets/71b862066df77941d15b89c106c291ddcd888a00.svg";
const imgImage46 = "/assets/0a0207dcb81ea8967c2f8357fe47599a302f9767.svg";

// Arrow icons
const imgLeftArrow = "/assets/dbe7504d81343173293fc7b1e1a5df9a9c618e2c.svg";
const imgRightArrow = "/assets/49e68b13da682e80b091c4faa6a996fcefbbeb36.svg";
const imgBlogArrow = "/assets/fc77663448a36794eefa1cf9abfa2313454af665.svg";

// Blog images
const imgImage48 = "/assets/4fb884a0cef509b72695d5aa4be91f4a2d5135e0.png";

export default function PrivateEquityPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-[174px] pb-[100px]">
        <div className="max-w-[1638px] mx-auto px-4 flex items-center justify-between gap-[140px]">
          <div className="max-w-[694px]">
            <div className="mb-[100px]">
              <h1 className="font-aptos-semibold text-[96px] leading-[96px] tracking-[-5.76px] text-[#09141f] mb-10">
                Deliver precision hiring in private equity
              </h1>
              <p className="font-aptos-regular text-[24px] leading-[32px] text-[#09141f] mb-10">
                From attorneys to compliance leaders, Elios identifies trusted professionals with the expertise and judgment to safeguard your organization and drive business-critical decisions.
              </p>
              <div className="flex gap-3">
                <Link href="/book-demo" className="bg-[#fa6a20] flex items-center gap-4 px-[22px] py-3.5 rounded-[12px] hover:bg-[#e85a10] transition-colors">
                  <span className="font-aptos-semibold text-[16px] text-white">Book a Demo</span>
                  <div className="bg-white rounded-[7px] p-[10px]">
                    <Image src={imgArrow} alt="Arrow" width={16} height={16} />
                  </div>
                </Link>
                <Link href="/request-talent" className="flex items-center px-[22px] py-[18px] rounded-[12px] hover:bg-gray-50 transition-colors">
                  <span className="font-aptos-semibold text-[16px] text-black">Request Talent</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Private Equity Roles Section */}
      <section className="py-[152px]">
        <div className="max-w-[1638px] mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-[120px]">
            <div className="flex items-center justify-center gap-2.5 mb-10">
              <Image src={imgVector622} alt="" width={16} height={13} />
              <span className="font-aptos-semibold text-[20px] text-[#fa6a20] uppercase tracking-[-0.4px]">
                ROLES & SPECIALTIES
              </span>
            </div>
            <h2 className="font-aptos-semibold text-[64px] leading-[0.9] tracking-[-3.2px] text-[#09141f]">
              Private equity roles we'll help you find
            </h2>
          </div>

          {/* Roles Grid */}
          <div className="gap-6 grid grid-cols-3 grid-rows-2 h-[718px]">
            {/* Investment Team */}
            <div className="bg-white rounded-[6px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.02),0px_2px_4px_0px_rgba(0,0,0,0.08)] p-9">
              <div className="flex flex-col justify-between h-[255px]">
                <Image src={imgRoleIcon1} alt="" width={46} height={46} />
                <div className="px-2.5 space-y-7">
                  <h4 className="font-aptos-semibold text-[28px] leading-[36px] tracking-[-1.4px] text-[#09141f]">
                    Investment Team
                  </h4>
                  <ul className="font-aptos-regular text-[20px] text-[#535960] space-y-1 list-disc list-inside">
                    <li>Investment Associate</li>
                    <li>Vice President</li>
                    <li>Principal</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Deal Sourcing & Origination */}
            <div className="bg-white rounded-[6px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.02),0px_2px_4px_0px_rgba(0,0,0,0.08)] p-9">
              <div className="flex flex-col justify-between h-[255px]">
                <Image src={imgRoleIcon2} alt="" width={46} height={46} />
                <div className="px-2.5 space-y-7">
                  <h4 className="font-aptos-semibold text-[28px] leading-[36px] tracking-[-1.4px] text-[#09141f]">
                    Deal Sourcing & Origination
                  </h4>
                  <ul className="font-aptos-regular text-[20px] text-[#535960] space-y-1 list-disc list-inside">
                    <li>Head of Origination</li>
                    <li>Business Development / Sourcing Manager</li>
                    <li>Market Intelligence Analyst</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Portfolio Operations */}
            <div className="bg-white rounded-[6px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.02),0px_2px_4px_0px_rgba(0,0,0,0.08)] p-9">
              <div className="flex flex-col justify-between h-[255px]">
                <Image src={imgRoleIcon3} alt="" width={46} height={46} />
                <div className="px-2.5 space-y-7">
                  <h4 className="font-aptos-semibold text-[28px] leading-[36px] tracking-[-1.4px] text-[#09141f]">
                    Portfolio Operations (Value Creation)
                  </h4>
                  <ul className="font-aptos-regular text-[20px] text-[#535960] space-y-1 list-disc list-inside">
                    <li>Operating Partner</li>
                    <li>Portfolio Operations Director</li>
                    <li>Commercial Excellence Lead</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Fundraising & Investor Relations */}
            <div className="bg-white rounded-[6px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.02),0px_2px_4px_0px_rgba(0,0,0,0.08)] p-9">
              <div className="flex flex-col justify-between h-[255px]">
                <Image src={imgRoleIcon4} alt="" width={46} height={46} />
                <div className="px-2.5 space-y-7">
                  <h4 className="font-aptos-semibold text-[28px] leading-[36px] tracking-[-1.4px] text-[#09141f]">
                    Fundraising & Investor Relations
                  </h4>
                  <ul className="font-aptos-regular text-[20px] text-[#535960] space-y-1 list-disc list-inside">
                    <li>Head of Investor Relations</li>
                    <li>Capital Formation Manager</li>
                    <li>Investor Relations Analyst</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Finance & Fund Operations */}
            <div className="bg-white rounded-[6px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.02),0px_2px_4px_0px_rgba(0,0,0,0.08)] p-9">
              <div className="flex flex-col justify-between h-[255px]">
                <Image src={imgRoleIcon5} alt="" width={46} height={46} />
                <div className="px-2.5 space-y-7">
                  <h4 className="font-aptos-semibold text-[28px] leading-[36px] tracking-[-1.4px] text-[#09141f]">
                    Finance & Fund Operations
                  </h4>
                  <ul className="font-aptos-regular text-[20px] text-[#535960] space-y-1 list-disc list-inside">
                    <li>Fund Controller</li>
                    <li>Fund Accounting Manager</li>
                    <li>Valuation Manager</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Portfolio Company Leadership */}
            <div className="bg-white rounded-[6px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.02),0px_2px_4px_0px_rgba(0,0,0,0.08)] p-9">
              <div className="flex flex-col justify-between h-[255px]">
                <Image src={imgRoleIcon6} alt="" width={46} height={46} />
                <div className="px-2.5 space-y-7">
                  <h4 className="font-aptos-semibold text-[28px] leading-[36px] tracking-[-1.4px] text-[#09141f]">
                    Portfolio Company Leadership
                  </h4>
                  <ul className="font-aptos-regular text-[20px] text-[#535960] space-y-1 list-disc list-inside">
                    <li>Practice Manager</li>
                    <li>Client Engagement Lead</li>
                    <li>Operations Director</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <CaseStudies
        title="Private Equity Case Studies"
        taglineText="Case Studies"
      />

      {/* Blog Section */}
      <section className="pt-[152px] pb-[400px]">
        <div className="max-w-[1638px] mx-auto px-4">
          <div className="flex flex-col gap-[90px] items-center justify-center">
            <div className="flex flex-col gap-10 items-center justify-center w-full">
              <div className="flex gap-2.5 items-center justify-center px-0 py-[18px] rounded-[9px]">
                <div className="h-[13px] w-4 relative">
                  <div className="absolute inset-[-3.99%_-8.8%_-11.36%_-1.63%]">
                    <Image src={imgVector622} alt="" width={16} height={13} className="block max-w-none size-full" />
                  </div>
                </div>
                <div className="font-aptos-semibold text-[#fa6a20] text-[20px] uppercase leading-[24px]">
                  BLOG
                </div>
              </div>
              <div className="font-aptos-semibold text-[#09141f] text-[64px] text-nowrap tracking-[-3.2px] leading-[0.9]">
                What's Happening in Private Equity
              </div>
            </div>
            <div className="flex gap-[50px] items-start justify-center w-full">
              <div className="basis-0 flex flex-col gap-[30px] grow items-start justify-center min-h-px min-w-px">
                <div className="flex flex-col gap-[30px] h-[292px] items-start justify-end overflow-clip pb-6 pt-10 px-6 rounded-[15px] w-full relative">
                  <div className="absolute contents left-[-22px] top-0">
                    <div className="absolute contents left-[-6px] top-0">
                      <div className="[mask-clip:no-clip,_no-clip] [mask-composite:intersect,_intersect] [mask-mode:alpha,_alpha] [mask-repeat:no-repeat,_no-repeat] absolute bg-center bg-cover bg-no-repeat h-[867.031px] left-[-379px] mask-position-[363px,_379px_250.932px,_250.932px] mask-size-[685px_426px,_636.284px_483px] top-[-250.93px] w-[1300.55px]" style={{ backgroundImage: `url('${imgImage44}')`, maskImage: `url('${imgImage45}'), url('${imgImage46}')` }} />
                    </div>
                  </div>
                  <div className="absolute bg-center bg-cover bg-no-repeat h-[705px] left-[-382px] top-[-176px] w-[1057px]" style={{ backgroundImage: `url('${imgImage48}')` }} />
                </div>
                <div className="flex flex-col gap-10 items-start justify-start w-full">
                  <div className="font-aptos-semibold text-[#09141f] text-[32px] tracking-[-0.96px] w-full leading-[1.2]">
                    Private Equity Due Diligence: Key Personnel Assessment Strategies
                  </div>
                  <div className="flex font-aptos-regular items-start justify-between text-[#121212] text-[16px] text-nowrap w-full leading-[32px]">
                    <div>
                      Duran Workman
                    </div>
                    <div>
                      6m read
                    </div>
                  </div>
                </div>
              </div>
              <div className="basis-0 flex flex-col gap-[30px] grow items-start justify-center min-h-px min-w-px">
                <div className="flex flex-col gap-[30px] h-[292px] items-start justify-end overflow-clip pb-6 pt-10 px-6 rounded-[15px] w-full relative">
                  <div className="absolute contents left-[-22px] top-0">
                    <div className="absolute contents left-[-6px] top-0">
                      <div className="[mask-clip:no-clip,_no-clip] [mask-composite:intersect,_intersect] [mask-mode:alpha,_alpha] [mask-repeat:no-repeat,_no-repeat] absolute bg-center bg-cover bg-no-repeat h-[867.031px] left-[-379px] mask-position-[363px,_379px_250.932px,_250.932px] mask-size-[685px_426px,_636.284px_483px] top-[-250.93px] w-[1300.55px]" style={{ backgroundImage: `url('${imgImage44}')`, maskImage: `url('${imgImage45}'), url('${imgImage46}')` }} />
                    </div>
                  </div>
                  <div className="absolute bg-center bg-cover bg-no-repeat h-[705px] left-[-382px] top-[-176px] w-[1057px]" style={{ backgroundImage: `url('${imgImage48}')` }} />
                </div>
                <div className="flex flex-col gap-10 items-start justify-start w-full">
                  <div className="font-aptos-semibold text-[#09141f] text-[32px] tracking-[-0.96px] w-full leading-[1.2]">
                    Building High-Performance Investment Teams in PE
                  </div>
                  <div className="flex font-aptos-regular items-start justify-between text-[#121212] text-[16px] text-nowrap w-full leading-[32px]">
                    <div>
                      Duran Workman
                    </div>
                    <div>
                      4m read
                    </div>
                  </div>
                </div>
              </div>
              <div className="basis-0 flex flex-col gap-[30px] grow items-start justify-center min-h-px min-w-px">
                <div className="flex flex-col gap-[30px] h-[292px] items-start justify-end overflow-clip pb-6 pt-10 px-6 rounded-[15px] w-full relative">
                  <div className="absolute contents left-[-22px] top-0">
                    <div className="absolute contents left-[-6px] top-0">
                      <div className="[mask-clip:no-clip,_no-clip] [mask-composite:intersect,_intersect] [mask-mode:alpha,_alpha] [mask-repeat:no-repeat,_no-repeat] absolute bg-center bg-cover bg-no-repeat h-[867.031px] left-[-379px] mask-position-[363px,_379px_250.932px,_250.932px] mask-size-[685px_426px,_636.284px_483px] top-[-250.93px] w-[1300.55px]" style={{ backgroundImage: `url('${imgImage44}')`, maskImage: `url('${imgImage45}'), url('${imgImage46}')` }} />
                    </div>
                  </div>
                  <div className="absolute bg-center bg-cover bg-no-repeat h-[705px] left-[-382px] top-[-176px] w-[1057px]" style={{ backgroundImage: `url('${imgImage48}')` }} />
                </div>
                <div className="flex flex-col gap-10 items-start justify-start w-full">
                  <div className="font-aptos-semibold text-[#09141f] text-[32px] tracking-[-0.96px] w-full leading-[1.2]">
                    ESG Compliance: Hiring the Right Talent for Sustainable PE
                  </div>
                  <div className="flex font-aptos-regular items-start justify-between text-[#121212] text-[16px] text-nowrap w-full leading-[32px]">
                    <div>
                      Duran Workman
                    </div>
                    <div>
                      5m read
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Link href="/blog" className="flex gap-2.5 items-center justify-center hover:opacity-70 transition-opacity">
              <div className="font-aptos-semibold text-[#fa6a20] text-[24px] text-nowrap tracking-[-0.48px] leading-[24px]">
                See All Blog Posts
              </div>
              <div className="size-[22px] relative">
                <div className="absolute inset-[15.67%_15%]">
                  <div className="absolute inset-[-5.67%_-5.57%_-5.68%_-5.57%]">
                    <Image src={imgBlogArrow} alt="Arrow" width={22} height={22} className="block max-w-none size-full" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA />

      <Footer />
    </div>
  );
}