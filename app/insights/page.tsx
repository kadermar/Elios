import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const imgProfileDropdownMenu1 = "/assets/a5646353145800288e648f5fe27f13f824531797.png";
const imgHeroArrow = "/assets/dbfc7fa3b59b3bc1d708ecb442d7b149635903f4.svg";
const imgProfileDropdownMenu2 = "/assets/1026c93c2f0cc786fb8f3edf6ebc6bf177a470e8.svg";

// Platform Overview assets
const imgVector622 = "/assets/18721c6591626d2156d2f18b97a5158dcf117d0c.svg";
const imgFrame = "/assets/1ab3a849e2aa39a5832eb25a7aa617bea81ac253.svg";
const imgFrame1 = "/assets/f1828b99a318c6f590e08437cff82a426dca1193.svg";
const imgFrame2 = "/assets/891014d415199aa869f77ce643178ede2fcb2ee0.svg";
const imgFrame3 = "/assets/ceeebd9969b52363826f874176593d0e5a2148e9.svg";
const imgGroup4712 = "/assets/e34a1f8f9dd6093f5436ed6548b1060d8ca41ba4.svg";
const imgGroup4713 = "/assets/41f0c0e9149f37040f83fc07d0c63d8bbe8a399a.svg";
const imgGroup4711 = "/assets/37e222f4c369192079cdcaf9ac35865f724b9213.svg";
const imgEliosLogo = "/assets/67555c82589c30488d329281d4794a01ae973c57.svg";
const imgGroup4710 = "/assets/268a792539c58bf6d424c008710a3fd321fc6249.svg";

// Features section assets
const imgFrame1410111306 = "/assets/7db1933c5e1c0b76e690521c1faba1d2c14fd77a.svg";
const imgFrame1410111307 = "/assets/6eac8afffb53554be4dff20eb03c3a471230975b.svg";
const imgArrow = "/assets/dbfc7fa3b59b3bc1d708ecb442d7b149635903f4.svg";

export default function InsightsPage() {
  return (
    <div className="min-h-screen">
      <div className="pt-[174px]">
        <Navigation />
        
        {/* Hero Section */}
        <div className="box-border content-stretch flex flex-col items-center justify-start px-4 md:px-0 py-[70px] relative size-full bg-[#F4F4F4]" data-name="Hero">
          <div className="content-stretch flex flex-col lg:flex-row gap-8 md:gap-[140px] items-center justify-start max-w-full lg:max-w-[1638px] relative shrink-0 w-full px-4 md:px-8 lg:px-[141px]" data-name="Wrapper">
            <div className="content-stretch flex flex-col gap-8 md:gap-[100px] items-start justify-start relative shrink-0 w-full lg:w-[694px]" data-name="Hero Text">
              <div className="content-stretch flex flex-col gap-6 md:gap-10 items-start justify-start relative shrink-0 w-full" data-name="Top">
                <div className="font-aptos font-semibold leading-[0] min-w-full not-italic relative shrink-0 text-[#09141f] text-[36px] md:text-[64px] lg:text-[96px] tracking-[-2px] md:tracking-[-4px] lg:tracking-[-5.76px]" style={{ width: "min-content" }}>
                  <p className="leading-[1.1] md:leading-[64px] lg:leading-[96px]">Elios Insights: The AI Talent Intelligence Platform</p>
                </div>
                <div className="font-aptos leading-[0] min-w-full not-italic relative shrink-0 text-[#09141f] text-[16px] md:text-[20px] lg:text-[24px]" style={{ width: "min-content" }}>
                  <p className="leading-[1.35] md:leading-[32px]">Supercharge recruiting from intake to offer with AI-powered automation and human expertise where it matters most.</p>
                </div>
                <div className="content-stretch flex flex-col sm:flex-row gap-3 items-start justify-start relative shrink-0 w-full sm:w-auto" data-name="Button Row">
                  <div className="bg-[#fa6a20] box-border content-stretch flex gap-3 md:gap-4 h-[50px] md:h-[60px] items-center justify-center px-4 md:pl-[22px] md:pr-2 py-3 md:py-3.5 relative rounded-[12px] shrink-0 cursor-pointer hover:bg-[#e85a10] transition-colors w-full sm:w-auto" data-name="Primary Button">
                    <div className="font-aptos font-semibold leading-[0] not-italic relative shrink-0 text-[14px] md:text-[16px] text-center text-nowrap text-white">
                      <p className="leading-[20px] whitespace-pre">Book a Demo</p>
                    </div>
                    <div className="bg-white box-border content-stretch flex gap-2.5 items-center justify-center p-[8px] md:p-[10px] relative rounded-[7px] shrink-0 size-[36px] md:size-[46px]">
                      <div className="relative shrink-0 size-3 md:size-4" data-name="Line Rounded/Arrow rigth">
                        <div className="absolute inset-[15.67%_15%]" data-name="Arrow rigth">
                          <div className="absolute inset-[-7.8%_-7.65%_-7.8%_-7.66%]">
                            <img alt="" className="block max-w-none size-full" src={imgHeroArrow} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden lg:block grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Hero Image">
              <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[15.88px] place-items-start relative" data-name="Software">
                <div className="[grid-area:1_/_1] bg-center bg-cover bg-no-repeat h-[600px] xl:h-[1043.12px] ml-[0.001px] mt-0 rounded-[15px] shadow-[0px_138.351px_38.79px_0px_rgba(216,134,19,0),0px_87.924px_34.911px_0px_rgba(216,134,19,0.01),0px_49.134px_29.739px_0px_rgba(216,134,19,0.05),0px_21.981px_21.981px_0px_rgba(216,134,19,0.09),0px_5.172px_11.637px_0px_rgba(216,134,19,0.1)] w-[1000px] xl:w-[1854.44px]" data-name="Profile Dropdown Menu 1" style={{ 
                  backgroundImage: `url('${imgProfileDropdownMenu1}')`, 
                  maskImage: `url('${imgProfileDropdownMenu2}')`,
                  maskSize: '1541px 958px',
                  maskPosition: '-78.58px -15.88px',
                  maskRepeat: 'no-repeat'
                }} />
              </div>
            </div>
          </div>
        </div>
        
        {/* Platform Overview Section */}
        <div className="bg-white box-border content-stretch flex flex-col gap-[90px] items-center justify-center px-4 md:px-0 py-[120px] md:py-[152px] relative size-full" data-name="Platform Overview">
          <div className="content-stretch flex flex-col gap-[90px] md:gap-[120px] items-center justify-center max-w-full lg:max-w-[1638px] relative shrink-0 w-full" data-name="Wrapper">
            <div className="content-stretch flex flex-col gap-[40px] md:gap-[50px] items-center justify-center max-w-[830px] relative shrink-0 w-full" data-name="Subhead Section">
              <div className="content-stretch flex flex-col gap-[20px] md:gap-[30px] items-center justify-start relative shrink-0 w-full">
                <div className="box-border content-stretch flex gap-2.5 items-center justify-center px-0 py-[18px] relative rounded-[9px] shrink-0" data-name="Tagline">
                  <div className="h-[13px] relative shrink-0 w-4">
                    <div className="absolute inset-[-3.99%_-8.8%_-11.36%_-1.63%]">
                      <img alt="" className="block max-w-none size-full" src={imgVector622} />
                    </div>
                  </div>
                  <div className="font-aptos font-semibold leading-[0] not-italic relative shrink-0 text-[#fa6a20] text-[16px] md:text-[20px] text-nowrap uppercase">
                    <p className="leading-[24px] whitespace-pre">Platform overview</p>
                  </div>
                </div>
                <div className="font-aptos font-semibold leading-[0] min-w-full not-italic relative shrink-0 text-[#09141f] text-[32px] md:text-[48px] lg:text-[64px] text-center tracking-[-1.6px] md:tracking-[-2.4px] lg:tracking-[-3.2px]" style={{ width: "min-content" }}>
                  <p className="leading-none">A Smarter Layer for Modern Recruiting</p>
                </div>
              </div>
              <div className="font-aptos leading-[0] not-italic relative shrink-0 text-[#535960] text-[16px] md:text-[18px] lg:text-[20px] text-center max-w-[684px] w-full">
                <p className="leading-[1.2] md:leading-[24px]">Elios Insights enriches your ATS with AI-powered recommendations, workflow automation, and recruiter support – converting static data into real-time actions and dramatically improving speed, quality, and candidate experience.</p>
              </div>
            </div>
            
            {/* Platform Diagram - Desktop */}
            <div className="hidden lg:block h-[321px] relative shrink-0 w-full">
              <div className="absolute content-stretch flex flex-col gap-10 items-center justify-center left-[172px] translate-y-[-50%]" style={{ top: "calc(50% - 0.5px)" }}>
                <div className="bg-[rgba(255,255,255,0.8)] relative rounded-[70px] shrink-0" data-name="Frame">
                  <div className="box-border content-stretch flex flex-col gap-[15px] items-center justify-center overflow-clip pb-[30px] pt-5 px-10 relative">
                    <div className="relative shrink-0 size-6" data-name="Frame">
                      <img alt="" className="block max-w-none size-full" src={imgFrame} />
                    </div>
                    <div className="font-aptos leading-[24px] not-italic relative shrink-0 text-[0px] text-black text-center tracking-[-0.2px] w-[233px]">
                      <p className="mb-0 text-[20px]">ATS</p>
                      <p className="text-[16px]">(Applicant Tracking System)</p>
                    </div>
                  </div>
                  <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[70px] shadow-[0px_71px_20px_0px_rgba(0,0,0,0),0px_45px_18px_0px_rgba(0,0,0,0.01),0px_25px_15px_0px_rgba(0,0,0,0.03),0px_11px_11px_0px_rgba(0,0,0,0.04),0px_3px_6px_0px_rgba(0,0,0,0.05)]" />
                </div>
              </div>
              
              <div className="absolute content-stretch flex flex-col gap-[26px] items-start justify-start left-[1260px] translate-y-[-50%] w-[191px]" style={{ top: "calc(50% - 0.5px)" }}>
                <div className="bg-[rgba(255,255,255,0.8)] relative rounded-[70px] shrink-0 w-[233px]" data-name="Frame">
                  <div className="box-border content-stretch flex flex-col gap-[15px] items-center justify-center overflow-clip px-10 py-5 relative w-[233px]">
                    <div className="relative shrink-0 size-6" data-name="Frame">
                      <img alt="" className="block max-w-none size-full" src={imgFrame1} />
                    </div>
                    <div className="font-aptos leading-[0] not-italic relative shrink-0 text-[20px] text-black text-center text-nowrap tracking-[-0.2px]">
                      <p className="leading-[24px] whitespace-pre">Quality Candidates</p>
                    </div>
                  </div>
                  <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[70px] shadow-[0px_71px_20px_0px_rgba(0,0,0,0),0px_45px_18px_0px_rgba(0,0,0,0.01),0px_25px_15px_0px_rgba(0,0,0,0.03),0px_11px_11px_0px_rgba(0,0,0,0.04),0px_3px_6px_0px_rgba(0,0,0,0.05)]" />
                </div>
                <div className="bg-[rgba(255,255,255,0.8)] relative rounded-[70px] shrink-0 w-[233px]" data-name="Frame">
                  <div className="box-border content-stretch flex flex-col gap-[15px] items-center justify-center overflow-clip px-10 py-5 relative w-[233px]">
                    <div className="relative shrink-0 size-6" data-name="Frame">
                      <img alt="" className="block max-w-none size-full" src={imgFrame2} />
                    </div>
                    <div className="font-aptos leading-[0] not-italic relative shrink-0 text-[20px] text-black text-center text-nowrap tracking-[-0.2px]">
                      <p className="leading-[24px] whitespace-pre">Data Analysis</p>
                    </div>
                  </div>
                  <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[70px] shadow-[0px_71px_20px_0px_rgba(0,0,0,0),0px_45px_18px_0px_rgba(0,0,0,0.01),0px_25px_15px_0px_rgba(0,0,0,0.03),0px_11px_11px_0px_rgba(0,0,0,0.04),0px_3px_6px_0px_rgba(0,0,0,0.05)]" />
                </div>
                <div className="bg-[rgba(255,255,255,0.8)] relative rounded-[70px] shrink-0" data-name="Frame">
                  <div className="box-border content-stretch flex flex-col gap-[15px] items-center justify-center overflow-clip px-10 py-5 relative">
                    <div className="relative shrink-0 size-6" data-name="Frame">
                      <img alt="" className="block max-w-none size-full" src={imgFrame3} />
                    </div>
                    <div className="font-aptos leading-[0] not-italic relative shrink-0 text-[20px] text-black text-center text-nowrap tracking-[-0.2px]">
                      <p className="leading-[24px] whitespace-pre">Real-time Insights</p>
                    </div>
                  </div>
                  <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[70px] shadow-[0px_71px_20px_0px_rgba(0,0,0,0),0px_45px_18px_0px_rgba(0,0,0,0.01),0px_25px_15px_0px_rgba(0,0,0,0.03),0px_11px_11px_0px_rgba(0,0,0,0.04),0px_3px_6px_0px_rgba(0,0,0,0.05)]" />
                </div>
              </div>
              
              <div className="absolute h-[272px] left-[1019px] top-1/2 translate-y-[-50%] w-52">
                <div className="absolute contents left-0 top-0">
                  <div className="absolute h-[111px] left-0 top-0 w-52">
                    <div className="absolute bottom-[-0.45%] left-0 right-[-0.37%] top-[-0.34%]">
                      <img alt="" className="block max-w-none size-full" src={imgGroup4712} />
                    </div>
                  </div>
                </div>
                <div className="absolute contents left-0 top-[130px]">
                  <div className="absolute h-3 left-0 top-[130px] w-52">
                    <div className="absolute bottom-[-3.16%] left-0 right-[-0.37%] top-[-3.16%]">
                      <img alt="" className="block max-w-none size-full" src={imgGroup4713} />
                    </div>
                  </div>
                </div>
                <div className="absolute h-[111px] left-0 top-[161px] w-52">
                  <div className="absolute bottom-[-0.34%] left-0 right-[-0.37%] top-[-0.45%]">
                    <img alt="" className="block max-w-none size-full" src={imgGroup4711} />
                  </div>
                </div>
              </div>
              
              <div className="absolute contents left-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Benefit Input" style={{ top: "calc(50% - 0.5px)" }}>
                <div className="absolute bg-[rgba(255,255,255,0.8)] h-[260px] left-[653px] rounded-[22px] top-[30px] w-[332px]">
                  <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[22px] shadow-[0px_71px_20px_0px_rgba(0,0,0,0),0px_45px_18px_0px_rgba(0,0,0,0.01),0px_25px_15px_0px_rgba(0,0,0,0.03),0px_11px_11px_0px_rgba(0,0,0,0.04),0px_3px_6px_0px_rgba(0,0,0,0.05)]" />
                </div>
                <div className="absolute contents top-1/2 translate-x-[-50%] translate-y-[-50%]" style={{ left: "calc(50% - 0.1px)" }}>
                  <div className="absolute flex items-center justify-center top-1/2 translate-x-[-50%] translate-y-[-50%] w-[126.2px]" style={{ left: "calc(50% - 0.1px)" }}>
                    <div className="flex-none rotate-[180deg] scale-y-[-100%]">
                      <div className="content-stretch flex flex-col gap-[18px] items-center justify-start relative w-[126.2px]">
                        <div className="flex items-center justify-center relative shrink-0">
                          <div className="flex-none rotate-[180deg] scale-y-[-100%]">
                            <div className="h-[73.77px] relative w-[186.2px]" data-name="Elios Logo">
                              <img alt="" className="block max-w-none size-full" src={imgEliosLogo} />
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center justify-center min-w-full relative shrink-0" style={{ width: "min-content" }}>
                          <div className="flex-none rotate-[180deg] scale-y-[-100%] w-full">
                            <div className="font-aptos font-extrabold leading-[0] not-italic relative text-[#121212] text-[14px] text-center uppercase w-full">
                              <p className="leading-[24px]">Insights</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute h-[12.76px] left-[519px] top-[153.62px] w-[100.769px]">
                <img alt="" className="block max-w-none size-full" src={imgGroup4710} />
              </div>
            </div>
            
            {/* Mobile/Tablet simplified view */}
            <div className="lg:hidden flex flex-col gap-8 items-center justify-center w-full">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex flex-col gap-4 items-center">
                  <img alt="" className="w-8 h-8" src={imgFrame} />
                  <div className="text-center">
                    <p className="font-aptos font-semibold text-lg text-black">ATS</p>
                    <p className="font-aptos text-sm text-gray-600">(Applicant Tracking System)</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="h-px bg-gray-300 flex-1"></div>
                <div className="bg-white rounded-2xl p-4 shadow-lg">
                  <img alt="" className="w-16 h-16" src={imgEliosLogo} />
                  <p className="font-aptos font-extrabold text-sm text-center uppercase mt-2">Insights</p>
                </div>
                <div className="h-px bg-gray-300 flex-1"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex flex-col gap-4 items-center">
                    <img alt="" className="w-8 h-8" src={imgFrame1} />
                    <p className="font-aptos font-semibold text-lg text-black text-center">Quality Candidates</p>
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex flex-col gap-4 items-center">
                    <img alt="" className="w-8 h-8" src={imgFrame2} />
                    <p className="font-aptos font-semibold text-lg text-black text-center">Data Analysis</p>
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex flex-col gap-4 items-center">
                    <img alt="" className="w-8 h-8" src={imgFrame3} />
                    <p className="font-aptos font-semibold text-lg text-black text-center">Real-time Insights</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Features Section */}
        <div className="box-border content-stretch flex flex-col gap-[90px] items-center justify-center px-4 md:px-0 py-[152px] relative size-full">
          <div className="bg-black box-border content-stretch flex flex-col lg:flex-row gap-8 lg:gap-[100px] h-auto lg:min-h-[600px] items-start justify-start overflow-clip px-4 md:px-8 lg:px-[130px] py-[60px] lg:py-[90px] relative rounded-[25px] shrink-0 w-full max-w-full lg:max-w-[1638px]">
            <div className="box-border content-stretch flex flex-col gap-8 lg:gap-[180px] h-full items-start justify-start px-0 py-0 lg:py-[60px] relative shrink-0 w-full lg:w-[522px]">
              <div className="content-stretch flex flex-col gap-8 lg:gap-[90px] items-start justify-center max-w-full relative shrink-0 w-full">
                <div className="content-stretch flex flex-col gap-8 lg:gap-[120px] items-start justify-start max-w-full relative shrink-0 w-full">
                  <div className="content-stretch flex flex-col gap-8 lg:gap-[90px] items-start justify-center relative shrink-0 w-full">
                    <div className="content-stretch flex flex-col gap-6 lg:gap-10 items-start justify-center relative shrink-0 w-full">
                      <div className="content-stretch flex gap-2.5 items-center justify-center relative shrink-0 w-full">
                        <div className="basis-0 font-aptos font-semibold grow leading-[0.9] min-h-px min-w-px not-italic relative shrink-0 text-[32px] md:text-[48px] lg:text-[64px] text-white tracking-[-1.6px] md:tracking-[-2.4px] lg:tracking-[-3.2px]">
                          <p className="leading-[0.9]">Features Designed to Remove the Busywork</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="basis-0 content-stretch flex flex-col gap-5 grow items-start justify-start min-h-px min-w-px relative shrink-0">
                <div className="content-stretch flex gap-5 h-10 items-center justify-start relative shrink-0">
                  <div className="relative shrink-0 size-[30px]">
                    <img alt="" className="block max-w-none size-full" src={imgFrame1410111306} />
                  </div>
                  <div className="font-aptos font-semibold leading-[0] not-italic relative shrink-0 text-[20px] lg:text-[24px] text-center text-nowrap text-white tracking-[-0.24px]">
                    <p className="leading-[24px] whitespace-pre">AI-Powered Matching</p>
                  </div>
                </div>
                <div className="content-stretch flex gap-5 h-10 items-center justify-start relative shrink-0">
                  <div className="relative shrink-0 size-[30px]">
                    <img alt="" className="block max-w-none size-full" src={imgFrame1410111307} />
                  </div>
                  <div className="font-aptos leading-[0] not-italic relative shrink-0 text-[20px] lg:text-[24px] text-[rgba(255,255,255,0.6)] text-center text-nowrap tracking-[-0.24px]">
                    <p className="leading-[24px] whitespace-pre">Smart Job Posting</p>
                  </div>
                </div>
                <div className="content-stretch flex gap-5 h-10 items-center justify-start relative shrink-0">
                  <div className="relative shrink-0 size-[30px]">
                    <img alt="" className="block max-w-none size-full" src={imgFrame1410111307} />
                  </div>
                  <div className="font-aptos leading-[0] not-italic relative shrink-0 text-[20px] lg:text-[24px] text-[rgba(255,255,255,0.6)] text-center text-nowrap tracking-[-0.24px]">
                    <p className="leading-[24px] whitespace-pre">Automated Workflow & Scheduling</p>
                  </div>
                </div>
                <div className="content-stretch flex gap-5 h-10 items-center justify-start relative shrink-0">
                  <div className="relative shrink-0 size-[30px]">
                    <img alt="" className="block max-w-none size-full" src={imgFrame1410111307} />
                  </div>
                  <div className="font-aptos leading-[0] not-italic relative shrink-0 text-[20px] lg:text-[24px] text-[rgba(255,255,255,0.6)] text-center text-nowrap tracking-[-0.24px]">
                    <p className="leading-[24px] whitespace-pre">Interview Intelligence & Feedback</p>
                  </div>
                </div>
                <div className="content-stretch flex gap-5 h-10 items-center justify-start relative shrink-0">
                  <div className="relative shrink-0 size-[30px]">
                    <img alt="" className="block max-w-none size-full" src={imgFrame1410111307} />
                  </div>
                  <div className="font-aptos leading-[0] not-italic relative shrink-0 text-[20px] lg:text-[24px] text-[rgba(255,255,255,0.6)] text-center text-nowrap tracking-[-0.24px]">
                    <p className="leading-[24px] whitespace-pre">ATS Integration & Security</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 box-border content-stretch flex flex-col gap-8 lg:gap-[153px] items-start justify-start px-0 py-0 lg:py-[60px] relative shrink-0">
              <div className="content-stretch flex flex-col gap-6 lg:gap-[50px] items-start justify-start relative shrink-0 w-full">
                <div className="font-aptos font-semibold leading-[0] not-italic relative shrink-0 text-[32px] md:text-[40px] lg:text-[48px] text-white tracking-[-1.6px] md:tracking-[-2px] lg:tracking-[-2.4px]">
                  <p className="leading-none">AI-Powered Matching</p>
                </div>
                <div className="font-aptos leading-[0] not-italic relative shrink-0 text-[16px] md:text-[18px] lg:text-[20px] text-white w-full max-w-full lg:max-w-[684px]">
                  <p className="leading-[24px]">Elios Insights enriches your ATS with AI-powered recommendations, workflow automation, and recruiter support – converting static data into real-time actions and dramatically improving speed, quality, and candidate experience.</p>
                </div>
                <div className="content-stretch flex gap-3 items-start justify-start relative shrink-0">
                  <div className="bg-[#fa6a20] box-border content-stretch flex gap-3 lg:gap-4 h-[50px] lg:h-[60px] items-center justify-center pl-4 lg:pl-[22px] pr-2 py-3 lg:py-3.5 relative rounded-[12px] shrink-0 cursor-pointer hover:bg-[#e85a10] transition-colors">
                    <div className="font-aptos font-semibold leading-[0] not-italic relative shrink-0 text-[14px] lg:text-[16px] text-center text-nowrap text-white">
                      <p className="leading-[20px] whitespace-pre">Book a Demo</p>
                    </div>
                    <div className="bg-white box-border content-stretch flex gap-2.5 items-center justify-center p-2 lg:p-[10px] relative rounded-[7px] shrink-0 size-[36px] lg:size-[46px]">
                      <div className="relative shrink-0 size-3 lg:size-4">
                        <div className="absolute inset-[15.67%_15%]">
                          <div className="absolute inset-[-7.8%_-7.65%_-7.8%_-7.66%]">
                            <img alt="" className="block max-w-none size-full" src={imgArrow} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-center bg-cover bg-no-repeat h-[400px] lg:h-[731px] rounded-[15px] shadow-[-125px_-155px_56px_0px_rgba(247,116,42,0.01),-80px_-99px_51px_0px_rgba(247,116,42,0.06),-45px_-56px_43px_0px_rgba(247,116,42,0.2),-20px_-25px_32px_0px_rgba(247,116,42,0.34),-5px_-6px_18px_0px_rgba(247,116,42,0.39)] shrink-0 w-full max-w-full lg:max-w-[1300px]" style={{ backgroundImage: `url('${imgProfileDropdownMenu1}')` }} />
            </div>
          </div>
        </div>
        
        <Footer />
      </div>
    </div>
  );
}