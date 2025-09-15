"use client";

import Image from "next/image";
import Link from "next/link";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function Connect() {
  return (
    <div className="bg-[#f4f4f4] content-stretch flex flex-col items-center justify-start relative size-full">
      <Navigation />
      <div className="content-stretch flex flex-col items-center justify-center mt-[174px] relative size-full">
        <div className="content-stretch flex gap-[140px] items-center justify-start max-w-[1638px] relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-[70px] items-start justify-start relative shrink-0 w-[694px]">
            <div className="content-stretch flex flex-col gap-10 items-start justify-start leading-[0] not-italic relative shrink-0 text-[#09141f] w-full">
              <div className="font-aptos font-semibold relative shrink-0 text-[96px] tracking-[-5.76px] w-full">
                <p className="leading-[96px]">Connect with the Elios Team</p>
              </div>
              <div className="font-aptos font-normal relative shrink-0 text-[24px] w-full">
                <p className="leading-[32px]">Find quick answers to common questions about Elios. Still curious? We can help.</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[30px] items-start justify-start relative shrink-0 w-[549px]">
              <div className="content-stretch flex gap-3 items-center justify-center relative shrink-0 w-full">
                <div className="relative shrink-0 size-6">
                  <Image
                    alt="Email"
                    src="/connect-email-icon.svg"
                    width={24}
                    height={24}
                    className="block max-w-none w-full h-full"
                  />
                </div>
                <div className="basis-0 font-aptos font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#09141f] text-[20px]">
                  <a href="mailto:hello@eliostalent.com" className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid leading-[20px] underline">hello@eliostalent.com</a>
                </div>
              </div>
              <div className="content-stretch flex gap-3 items-center justify-center relative shrink-0 w-full">
                <div className="relative shrink-0 size-6">
                  <Image
                    alt="Location"
                    src="/connect-location-icon.svg"
                    width={24}
                    height={24}
                    className="block max-w-none w-full h-full"
                  />
                </div>
                <div className="basis-0 font-aptos font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#09141f] text-[20px]">
                  <p className="leading-[20px]">2339 Commerce St. Houston, TX 77002</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-center bg-cover bg-no-repeat h-[720px] relative rounded-[15px] shrink-0 w-[804px]" style={{ backgroundImage: `url('/connect-hero.png')` }}>
            <div aria-hidden="true" className="absolute border-[9px] border-solid border-white inset-0 pointer-events-none rounded-[15px]" />
          </div>
        </div>
      </div>
      
      <div className="box-border content-stretch flex flex-col gap-[90px] items-center justify-center pb-[400px] pt-[152px] px-0 relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[60px] items-start justify-start max-w-[1638px] relative shrink-0 w-[1638px]">
          <div className="content-stretch flex flex-col gap-[50px] items-center justify-center max-w-[830px] relative shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-[30px] items-center justify-start relative shrink-0 w-full">
              <div className="font-aptos font-semibold leading-[0] not-italic relative shrink-0 text-[#09141f] text-[40px] tracking-[-2px] w-full">
                <p className="leading-none">For Hiring Managers</p>
              </div>
            </div>
          </div>
          <div className="gap-5 grid grid-cols-[repeat(3,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[400px] relative shrink-0 w-full">
            <div className="bg-white box-border content-stretch flex flex-col items-start justify-between overflow-clip px-9 py-[46px] relative rounded-[15px] shrink-0">
              <div className="content-stretch flex flex-col gap-[46px] items-start justify-start relative shrink-0 w-full">
                <div className="bg-[#f4f4f4] box-border content-stretch flex gap-2.5 items-center justify-center overflow-clip p-[4px] relative rounded-[100px] shrink-0 size-[60px]">
                  <div className="relative shrink-0 size-[30px]">
                    <Image
                      alt="Clock"
                      src="/connect-clock-icon.svg"
                      width={30}
                      height={30}
                      className="block max-w-none w-full h-full"
                    />
                  </div>
                </div>
                <div className="box-border content-stretch flex flex-col gap-7 items-start justify-center leading-[0] not-italic px-2.5 py-0 relative shrink-0 w-full">
                  <div className="font-aptos font-semibold relative shrink-0 text-[#09141f] text-[32px] tracking-[-1.6px] w-full">
                    <p className="leading-[36px]">Book a Demo to see Elios Insights in action</p>
                  </div>
                  <div className="font-aptos font-normal relative shrink-0 text-[#535960] text-[20px] w-full">
                    <p className="leading-[24px]">Gain clarity with Elios Insights</p>
                  </div>
                </div>
              </div>
              <Link href="/book-demo" className="content-stretch flex gap-2.5 items-center justify-center relative shrink-0 hover:opacity-80 transition-opacity">
                <div className="font-aptos font-semibold leading-[0] not-italic relative shrink-0 text-[#fa6a20] text-[20px] text-nowrap tracking-[-0.4px]">
                  <p className="leading-[24px] whitespace-pre">Book a Demo</p>
                </div>
                <div className="relative shrink-0 size-[22px]">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M5 11H17M17 11L11 5M17 11L11 17" stroke="#fa6a20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </Link>
            </div>
            <div className="bg-white box-border content-stretch flex flex-col items-start justify-between overflow-clip px-9 py-[46px] relative rounded-[15px] shrink-0">
              <div className="content-stretch flex flex-col gap-[46px] items-start justify-start relative shrink-0 w-full">
                <div className="bg-[#f4f4f4] box-border content-stretch flex gap-2.5 items-center justify-center overflow-clip p-[4px] relative rounded-[100px] shrink-0 size-[60px]">
                  <div className="relative shrink-0 size-[30px]">
                    <Image
                      alt="Clock"
                      src="/connect-clock-icon.svg"
                      width={30}
                      height={30}
                      className="block max-w-none w-full h-full"
                    />
                  </div>
                </div>
                <div className="box-border content-stretch flex flex-col gap-7 items-start justify-center leading-[0] not-italic px-2.5 py-0 relative shrink-0 w-full">
                  <div className="font-aptos font-semibold relative shrink-0 text-[#09141f] text-[32px] tracking-[-1.6px] w-full">
                    <p className="leading-[36px]">Request Top Talent Quickly</p>
                  </div>
                  <div className="font-aptos font-normal relative shrink-0 text-[#535960] text-[20px] w-full">
                    <p className="leading-[24px]">Get the right candidates when you need them.</p>
                  </div>
                </div>
              </div>
              <Link href="/request-talent" className="content-stretch flex gap-2.5 items-center justify-center relative shrink-0 hover:opacity-80 transition-opacity">
                <div className="font-aptos font-semibold leading-[0] not-italic relative shrink-0 text-[#fa6a20] text-[20px] text-nowrap tracking-[-0.4px]">
                  <p className="leading-[24px] whitespace-pre">Request Talent</p>
                </div>
                <div className="relative shrink-0 size-[22px]">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M5 11H17M17 11L11 5M17 11L11 17" stroke="#fa6a20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </Link>
            </div>
            <div className="bg-white box-border content-stretch flex flex-col items-start justify-between overflow-clip px-9 py-[46px] relative rounded-[15px] shrink-0">
              <div className="content-stretch flex flex-col gap-[46px] items-start justify-start relative shrink-0 w-full">
                <div className="bg-[#f4f4f4] box-border content-stretch flex gap-2.5 items-center justify-center overflow-clip p-[4px] relative rounded-[100px] shrink-0 size-[60px]">
                  <div className="relative shrink-0 size-[30px]">
                    <Image
                      alt="Clock"
                      src="/connect-clock-icon.svg"
                      width={30}
                      height={30}
                      className="block max-w-none w-full h-full"
                    />
                  </div>
                </div>
                <div className="box-border content-stretch flex flex-col gap-7 items-start justify-center leading-[0] not-italic px-2.5 py-0 relative shrink-0 w-full">
                  <div className="font-aptos font-semibold relative shrink-0 text-[#09141f] text-[32px] tracking-[-1.6px] w-full">
                    <p className="leading-[36px]">Build a Winning Talent Strategy</p>
                  </div>
                  <div className="font-aptos font-normal relative shrink-0 text-[#535960] text-[20px] w-full">
                    <p className="leading-[24px]">Get expert advice on planning for growth.</p>
                  </div>
                </div>
              </div>
              <Link href="/book-strategy-session" className="content-stretch flex gap-2.5 items-center justify-center relative shrink-0 hover:opacity-80 transition-opacity">
                <div className="font-aptos font-semibold leading-[0] not-italic relative shrink-0 text-[#fa6a20] text-[20px] text-nowrap tracking-[-0.4px]">
                  <p className="leading-[24px] whitespace-pre">Book a Talent Strategy Session</p>
                </div>
                <div className="relative shrink-0 size-[22px]">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M5 11H17M17 11L11 5M17 11L11 17" stroke="#fa6a20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="content-stretch flex flex-col gap-[60px] items-start justify-start max-w-[1638px] relative shrink-0 w-[1638px]">
          <div className="content-stretch flex flex-col gap-[50px] items-center justify-center max-w-[830px] relative shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-[30px] items-center justify-start relative shrink-0 w-full">
              <div className="font-aptos font-semibold leading-[0] not-italic relative shrink-0 text-[#09141f] text-[40px] tracking-[-2px] w-full">
                <p className="leading-none">For Candidates</p>
              </div>
            </div>
          </div>
          <div className="gap-5 grid grid-cols-[repeat(3,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[400px] relative shrink-0 w-full">
            <div className="bg-white box-border content-stretch flex flex-col items-start justify-between overflow-clip px-9 py-[46px] relative rounded-[15px] shrink-0">
              <div className="content-stretch flex flex-col gap-[46px] items-start justify-start relative shrink-0 w-full">
                <div className="bg-[#f4f4f4] box-border content-stretch flex gap-2.5 items-center justify-center overflow-clip p-[4px] relative rounded-[100px] shrink-0 size-[60px]">
                  <div className="relative shrink-0 size-[30px]">
                    <Image
                      alt="Clock"
                      src="/connect-clock-icon.svg"
                      width={30}
                      height={30}
                      className="block max-w-none w-full h-full"
                    />
                  </div>
                </div>
                <div className="box-border content-stretch flex flex-col gap-7 items-start justify-center leading-[0] not-italic px-2.5 py-0 relative shrink-0 w-full">
                  <div className="font-aptos font-semibold relative shrink-0 text-[#09141f] text-[32px] tracking-[-1.6px] w-full">
                    <p className="leading-[36px]">Join the Elios Talent Network</p>
                  </div>
                  <div className="font-aptos font-normal relative shrink-0 text-[#535960] text-[20px] w-full">
                    <p className="leading-[24px]">Get connected to exclusive opportunities.</p>
                  </div>
                </div>
              </div>
              <Link href="/submit-resume" className="content-stretch flex gap-2.5 items-center justify-center relative shrink-0 hover:opacity-80 transition-opacity">
                <div className="font-aptos font-semibold leading-[0] not-italic relative shrink-0 text-[#fa6a20] text-[20px] text-nowrap tracking-[-0.4px]">
                  <p className="leading-[24px] whitespace-pre">Submit Your Resume</p>
                </div>
                <div className="relative shrink-0 size-[22px]">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M5 11H17M17 11L11 5M17 11L11 17" stroke="#fa6a20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </Link>
            </div>
            <div className="bg-white box-border content-stretch flex flex-col items-start justify-between overflow-clip px-9 py-[46px] relative rounded-[15px] shrink-0">
              <div className="content-stretch flex flex-col gap-[46px] items-start justify-start relative shrink-0 w-full">
                <div className="bg-[#f4f4f4] box-border content-stretch flex gap-2.5 items-center justify-center overflow-clip p-[4px] relative rounded-[100px] shrink-0 size-[60px]">
                  <div className="relative shrink-0 size-[30px]">
                    <Image
                      alt="Clock"
                      src="/connect-clock-icon.svg"
                      width={30}
                      height={30}
                      className="block max-w-none w-full h-full"
                    />
                  </div>
                </div>
                <div className="box-border content-stretch flex flex-col gap-7 items-start justify-center leading-[0] not-italic px-2.5 py-0 relative shrink-0 w-full">
                  <div className="font-aptos font-semibold relative shrink-0 text-[#09141f] text-[32px] tracking-[-1.6px] w-full">
                    <p className="leading-[36px]">Explore Jobs</p>
                  </div>
                  <div className="font-aptos font-normal relative shrink-0 text-[#535960] text-[20px] w-full">
                    <p className="leading-[24px]">Explore open jobs that match your skills.</p>
                  </div>
                </div>
              </div>
              <Link href="/jobs" className="content-stretch flex gap-2.5 items-center justify-center relative shrink-0 hover:opacity-80 transition-opacity">
                <div className="font-aptos font-semibold leading-[0] not-italic relative shrink-0 text-[#fa6a20] text-[20px] text-nowrap tracking-[-0.4px]">
                  <p className="leading-[24px] whitespace-pre">Go to Job Board</p>
                </div>
                <div className="relative shrink-0 size-[22px]">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M5 11H17M17 11L11 5M17 11L11 17" stroke="#fa6a20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </Link>
            </div>
            <div className="bg-white box-border content-stretch flex flex-col items-start justify-between overflow-clip px-9 py-[46px] relative rounded-[15px] shrink-0">
              <div className="content-stretch flex flex-col gap-[46px] items-start justify-start relative shrink-0 w-full">
                <div className="bg-[#f4f4f4] box-border content-stretch flex gap-2.5 items-center justify-center overflow-clip p-[4px] relative rounded-[100px] shrink-0 size-[60px]">
                  <div className="relative shrink-0 size-[30px]">
                    <Image
                      alt="Clock"
                      src="/connect-clock-icon.svg"
                      width={30}
                      height={30}
                      className="block max-w-none w-full h-full"
                    />
                  </div>
                </div>
                <div className="box-border content-stretch flex flex-col gap-7 items-start justify-center leading-[0] not-italic px-2.5 py-0 relative shrink-0 w-full">
                  <div className="font-aptos font-semibold relative shrink-0 text-[#09141f] text-[32px] tracking-[-1.6px] w-full">
                    <p className="leading-[36px]">Advance Your Career</p>
                  </div>
                  <div className="font-aptos font-normal relative shrink-0 text-[#535960] text-[20px] w-full">
                    <p className="leading-[24px]">Get personalized career guidance.</p>
                  </div>
                </div>
              </div>
              <Link href="/career-strategy" className="content-stretch flex gap-2.5 items-center justify-center relative shrink-0 hover:opacity-80 transition-opacity">
                <div className="font-aptos font-semibold leading-[0] not-italic relative shrink-0 text-[#fa6a20] text-[20px] text-nowrap tracking-[-0.4px]">
                  <p className="leading-[24px] whitespace-pre">Book a Career Strategy Session</p>
                </div>
                <div className="relative shrink-0 size-[22px]">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M5 11H17M17 11L11 5M17 11L11 17" stroke="#fa6a20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
      
      <div className="absolute bg-[#e0f1fe] box-border content-stretch flex gap-[100px] h-[482px] items-center justify-start left-1/2 overflow-clip px-[120px] py-0 rounded-[25px] top-[2269px] translate-x-[-50%] w-[1656px]">
        <div className="content-stretch flex flex-col gap-20 items-start justify-center relative shrink-0 w-[726px]">
          <div className="font-aptos font-semibold leading-[0] min-w-full not-italic relative shrink-0 text-[#292626] text-[64px] tracking-[-3.2px]" style={{ width: "min-content" }}>
            <p className="leading-none">Let's Build Your Dream Team of Tomorrow</p>
          </div>
          <div className="content-stretch flex gap-3 items-start justify-start relative shrink-0">
            <Link href="/book-demo" className="bg-[#fa6a20] box-border content-stretch flex gap-4 h-[60px] items-center justify-center pl-[22px] pr-2 py-3.5 relative rounded-[12px] shrink-0 hover:bg-[#e85a10] transition-colors">
              <div className="font-aptos font-semibold leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
                <p className="leading-[20px] whitespace-pre">Book a Demo</p>
              </div>
              <div className="bg-white box-border content-stretch flex gap-2.5 items-center justify-center p-[10px] relative rounded-[7px] shrink-0 size-[46px]">
                <div className="relative shrink-0 size-4">
                  <div className="absolute inset-[15.67%_15%]">
                    <div className="absolute inset-[-7.8%_-7.66%_-7.8%_-7.65%]">
                      <Image
                        alt="Arrow"
                        src="/connect-cta-arrow.svg"
                        width={16}
                        height={16}
                        className="block max-w-none size-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link href="/request-talent" className="box-border content-stretch flex gap-[3px] h-[60px] items-center justify-center px-[22px] py-[18px] relative rounded-[12px] shrink-0 hover:bg-white/20 transition-colors">
              <div className="font-aptos font-semibold leading-[0] not-italic relative shrink-0 text-[16px] text-black text-center text-nowrap">
                <p className="leading-[20px] whitespace-pre">Get Talent</p>
              </div>
            </Link>
          </div>
        </div>
        <div className="absolute bg-center bg-cover bg-no-repeat left-[756.4px] mix-blend-screen size-[1396.6px] top-[-394.3px]" style={{ backgroundImage: `url('/connect-cta-bg.png')` }} />
      </div>
    </div>
  );
}