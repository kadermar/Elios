"use client";

import Image from "next/image";
import Link from "next/link";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function Energy() {
  return (
    <div className="bg-[#F4F4F4] content-stretch flex flex-col items-center justify-start relative size-full">
      <Navigation />
      
      <div className="content-stretch flex flex-col items-center justify-center mt-[174px] relative size-full">
        <div className="content-stretch flex gap-[140px] items-center justify-start max-w-[1638px] relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-[70px] items-start justify-start relative shrink-0 w-[694px]">
            <div className="content-stretch flex flex-col gap-10 items-start justify-start leading-[0] not-italic relative shrink-0 text-[#09141f] w-full">
              <div className="font-aptos font-semibold relative shrink-0 text-[96px] tracking-[-5.76px] w-full">
                <p className="leading-[96px]">Fuel energy hiring</p>
              </div>
              <div className="font-aptos font-normal relative shrink-0 text-[24px] w-full">
                <p className="leading-[32px]">Elios connects oil & gas companies with drilling engineers, HSE specialists, and operations leaders who keep production safe, efficient, and on schedule—while also sourcing talent for emerging renewable projects that shape the industry's future.</p>
              </div>
              <div className="content-stretch flex gap-3 items-start justify-start relative shrink-0">
                <Link href="/book-demo" className="bg-[#fa6a20] box-border content-stretch flex gap-4 h-[60px] items-center justify-center pl-[22px] pr-2 py-3.5 relative rounded-[12px] shrink-0 hover:bg-[#e85a10] transition-colors">
                  <div className="font-aptos font-semibold leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
                    <p className="leading-[20px] whitespace-pre">Book a Demo</p>
                  </div>
                  <div className="bg-white box-border content-stretch flex gap-2.5 items-center justify-center p-[10px] relative rounded-[7px] shrink-0 size-[46px]">
                    <div className="relative shrink-0 size-4">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8H13M13 8L8 3M13 8L8 13" stroke="#fa6a20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </Link>
                <Link href="/request-talent" className="box-border content-stretch flex gap-[3px] items-center justify-center px-[22px] py-[18px] relative rounded-[12px] h-[60px] shrink-0 hover:bg-white/20 transition-colors">
                  <div className="font-aptos font-semibold leading-[0] not-italic relative shrink-0 text-[16px] text-black text-center text-nowrap">
                    <p className="leading-[20px] whitespace-pre">Request Talent</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="box-border content-stretch flex flex-col gap-[90px] items-center justify-center px-0 py-[152px] relative size-full">
        <div className="content-stretch flex flex-col gap-[120px] items-start justify-start max-w-[1638px] relative shrink-0 w-[1638px]">
          <div className="content-stretch flex flex-col gap-10 items-center justify-center relative shrink-0 w-full">
            <div className="box-border content-stretch flex gap-2.5 items-center justify-center px-0 py-[18px] relative rounded-[9px] shrink-0">
              <div className="h-[13px] relative shrink-0 w-4">
                <svg width="16" height="13" viewBox="0 0 16 13" fill="none">
                  <path d="M8 1L10.5 6H15.5L11.5 9L13 12L8 9L3 12L4.5 9L0.5 6H5.5L8 1Z" fill="#fa6a20"/>
                </svg>
              </div>
              <div className="font-aptos font-semibold leading-[0] not-italic relative shrink-0 text-[#fa6a20] text-[20px] text-nowrap uppercase">
                <p className="leading-[24px] whitespace-pre">roles & specialties</p>
              </div>
            </div>
            <div className="font-aptos font-semibold leading-[0] not-italic relative shrink-0 text-[#09141f] text-[64px] text-nowrap tracking-[-3.2px]">
              <p className="leading-[0.9] whitespace-pre">Energy roles we'll help you find</p>
            </div>
          </div>
          <div className="gap-6 grid grid-cols-[repeat(3,_minmax(0px,_1fr))] grid-rows-[repeat(2,_minmax(0px,_1fr))] h-[680px] relative shrink-0 w-full">
            <div className="[grid-area:1_/_1] bg-white box-border content-stretch flex flex-col gap-[50px] items-start justify-start overflow-clip px-9 py-[46px] relative rounded-[6px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.02),0px_2px_4px_0px_rgba(0,0,0,0.08)] shrink-0">
              <div className="basis-0 content-stretch flex flex-col grow items-start justify-between min-h-px min-w-px relative shrink-0 w-full">
                <div className="bg-[#f4f4f4] rounded-full p-3 relative shrink-0 size-[46px] flex items-center justify-center">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z" stroke="#fa6a20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="box-border content-stretch flex flex-col gap-7 items-start justify-center leading-[0] not-italic px-2.5 py-0 relative shrink-0 w-full">
                  <div className="font-aptos font-semibold relative shrink-0 text-[#09141f] text-[28px] tracking-[-1.4px] w-full">
                    <p className="leading-[36px]">Drilling & Exploration</p>
                  </div>
                  <div className="font-aptos font-normal relative shrink-0 text-[#535960] text-[20px] w-full">
                    <ul className="list-disc ml-[30px]">
                      <li className="leading-[1.5]">Drilling Engineer</li>
                      <li className="leading-[1.5]">Reservoir Engineer</li>
                      <li className="leading-[1.5]">Petroleum Geologist</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="[grid-area:1_/_2] bg-white box-border content-stretch flex flex-col gap-[50px] items-start justify-start overflow-clip px-9 py-[46px] relative rounded-[6px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.02),0px_2px_4px_0px_rgba(0,0,0,0.08)] shrink-0">
              <div className="basis-0 content-stretch flex flex-col grow items-start justify-between min-h-px min-w-px relative shrink-0 w-full">
                <div className="bg-[#f4f4f4] rounded-full p-3 relative shrink-0 size-[46px] flex items-center justify-center">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M8 2V6M16 2V6M3 10H21M5 4H19C20.1046 4 21 4.89543 21 6V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V6C3 4.89543 3.89543 4 5 4Z" stroke="#fa6a20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="box-border content-stretch flex flex-col gap-7 items-start justify-center leading-[0] not-italic px-2.5 py-0 relative shrink-0 w-full">
                  <div className="font-aptos font-semibold relative shrink-0 text-[#09141f] text-[28px] tracking-[-1.4px] w-full">
                    <p className="leading-[36px]">Operations & Production</p>
                  </div>
                  <div className="font-aptos font-normal relative shrink-0 text-[#535960] text-[20px] w-full">
                    <ul className="list-disc ml-[30px]">
                      <li className="leading-[1.5]">Production Engineer</li>
                      <li className="leading-[1.5]">Offshore Operations Manager</li>
                      <li className="leading-[1.5]">Field Operator</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="[grid-area:1_/_3] bg-white box-border content-stretch flex flex-col gap-[50px] items-start justify-start overflow-clip px-9 py-[46px] relative rounded-[6px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.02),0px_2px_4px_0px_rgba(0,0,0,0.08)] shrink-0">
              <div className="basis-0 content-stretch flex flex-col grow items-start justify-between min-h-px min-w-px relative shrink-0 w-full">
                <div className="bg-[#f4f4f4] rounded-full p-3 relative shrink-0 size-[46px] flex items-center justify-center">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#fa6a20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17L12 22L22 17" stroke="#fa6a20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="#fa6a20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="box-border content-stretch flex flex-col gap-7 items-start justify-center leading-[0] not-italic px-2.5 py-0 relative shrink-0 w-full">
                  <div className="font-aptos font-semibold relative shrink-0 text-[#09141f] text-[28px] tracking-[-1.4px] w-full">
                    <p className="leading-[36px]">Health, Safety & Environment (HSE)</p>
                  </div>
                  <div className="font-aptos font-normal relative shrink-0 text-[#535960] text-[20px] w-full">
                    <ul className="list-disc ml-[30px]">
                      <li className="leading-[1.5]">HSE Specialist</li>
                      <li className="leading-[1.5]">Environmental Engineer</li>
                      <li className="leading-[1.5]">Safety Officer</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="[grid-area:2_/_1] bg-white box-border content-stretch flex flex-col gap-[50px] items-start justify-start overflow-clip px-9 py-[46px] relative rounded-[6px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.02),0px_2px_4px_0px_rgba(0,0,0,0.08)] shrink-0">
              <div className="basis-0 content-stretch flex flex-col grow items-start justify-between min-h-px min-w-px relative shrink-0 w-full">
                <div className="bg-[#f4f4f4] rounded-full p-3 relative shrink-0 size-[46px] flex items-center justify-center">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#fa6a20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="box-border content-stretch flex flex-col gap-7 items-start justify-center leading-[0] not-italic px-2.5 py-0 relative shrink-0 w-full">
                  <div className="font-aptos font-semibold relative shrink-0 text-[#09141f] text-[28px] tracking-[-1.4px] w-full">
                    <p className="leading-[36px]">Integrity & Maintenance</p>
                  </div>
                  <div className="font-aptos font-normal relative shrink-0 text-[#535960] text-[20px] w-full">
                    <ul className="list-disc ml-[30px]">
                      <li className="leading-[1.5]">Integrity Inspector</li>
                      <li className="leading-[1.5]">Reliability Engineer</li>
                      <li className="leading-[1.5]">Maintenance Supervisor</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="[grid-area:2_/_2] bg-white box-border content-stretch flex flex-col gap-[50px] items-start justify-start overflow-clip px-9 py-[46px] relative rounded-[6px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.02),0px_2px_4px_0px_rgba(0,0,0,0.08)] shrink-0">
              <div className="basis-0 content-stretch flex flex-col grow items-start justify-between min-h-px min-w-px relative shrink-0 w-full">
                <div className="bg-[#f4f4f4] rounded-full p-3 relative shrink-0 size-[46px] flex items-center justify-center">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="#fa6a20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14 2V8H20" stroke="#fa6a20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 13H8" stroke="#fa6a20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 17H8" stroke="#fa6a20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10 9H9H8" stroke="#fa6a20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="box-border content-stretch flex flex-col gap-7 items-start justify-center leading-[0] not-italic px-2.5 py-0 relative shrink-0 w-full">
                  <div className="font-aptos font-semibold relative shrink-0 text-[#09141f] text-[28px] tracking-[-1.4px] w-full">
                    <p className="leading-[36px]">Project & Facilities Engineering</p>
                  </div>
                  <div className="font-aptos font-normal relative shrink-0 text-[#535960] text-[20px] w-full">
                    <ul className="list-disc ml-[30px]">
                      <li className="leading-[1.5]">Project Engineer (Oil & Gas)</li>
                      <li className="leading-[1.5]">Facilities Engineer</li>
                      <li className="leading-[1.5]">Construction Manager (Energy Projects)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="[grid-area:2_/_3] bg-white box-border content-stretch flex flex-col gap-[50px] items-start justify-start overflow-clip px-9 py-[46px] relative rounded-[6px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.02),0px_2px_4px_0px_rgba(0,0,0,0.08)] shrink-0">
              <div className="basis-0 content-stretch flex flex-col grow items-start justify-between min-h-px min-w-px relative shrink-0 w-full">
                <div className="bg-[#f4f4f4] rounded-full p-3 relative shrink-0 size-[46px] flex items-center justify-center">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="5" stroke="#fa6a20" strokeWidth="2"/>
                    <path d="M12 1V3" stroke="#fa6a20" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M12 21V23" stroke="#fa6a20" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M4.22 4.22L5.64 5.64" stroke="#fa6a20" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M18.36 18.36L19.78 19.78" stroke="#fa6a20" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M1 12H3" stroke="#fa6a20" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M21 12H23" stroke="#fa6a20" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M4.22 19.78L5.64 18.36" stroke="#fa6a20" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M18.36 5.64L19.78 4.22" stroke="#fa6a20" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className="box-border content-stretch flex flex-col gap-7 items-start justify-center leading-[0] not-italic px-2.5 py-0 relative shrink-0 w-full">
                  <div className="font-aptos font-semibold relative shrink-0 text-[#09141f] text-[28px] tracking-[-1.4px] w-full">
                    <p className="leading-[36px]">Renewable & Alternative Energy</p>
                  </div>
                  <div className="font-aptos font-normal relative shrink-0 text-[#535960] text-[20px] w-full">
                    <ul className="list-disc ml-[30px]">
                      <li className="leading-[1.5]">Wind Energy Engineer</li>
                      <li className="leading-[1.5]">Solar PV Specialist</li>
                      <li className="leading-[1.5]">Energy Transition Analyst</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="box-border content-stretch flex flex-col gap-[90px] items-center justify-center px-0 py-[152px] relative size-full">
        <div className="content-stretch flex flex-col gap-[90px] items-start justify-start max-w-[1638px] relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-10 items-start justify-center relative shrink-0 w-full">
            <div className="box-border content-stretch flex gap-2.5 items-center justify-center px-0 py-[18px] relative rounded-[9px] shrink-0">
              <div className="h-[13px] relative shrink-0 w-4">
                <svg width="16" height="13" viewBox="0 0 16 13" fill="none">
                  <path d="M8 1L10.5 6H15.5L11.5 9L13 12L8 9L3 12L4.5 9L0.5 6H5.5L8 1Z" fill="#fa6a20"/>
                </svg>
              </div>
              <div className="font-aptos font-semibold leading-[0] not-italic relative shrink-0 text-[#fa6a20] text-[20px] text-nowrap uppercase">
                <p className="leading-[24px] whitespace-pre">Case Studies</p>
              </div>
            </div>
            <div className="font-aptos font-semibold leading-[0] not-italic relative shrink-0 text-[#09141f] text-[64px] text-nowrap tracking-[-3.2px]">
              <p className="leading-[0.9] whitespace-pre">Energy Case Studies</p>
            </div>
          </div>
          <div className="content-stretch flex gap-5 h-[564px] items-center justify-start relative shrink-0 w-full overflow-x-auto">
            <div className="bg-gradient-to-br from-blue-500 to-blue-700 box-border content-stretch flex flex-col h-full items-start justify-between overflow-clip pb-6 pt-10 px-6 relative rounded-[15px] shrink-0 w-[480px]">
              <div className="box-border content-stretch flex flex-col gap-5 items-start justify-start px-2.5 py-0 relative shrink-0 w-full">
                <div className="bg-white p-3 rounded-lg">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z" stroke="#fa6a20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <div className="bg-white box-border content-stretch flex flex-col gap-2.5 items-start justify-start p-[30px] relative rounded-[4px] shrink-0 w-full">
                <div className="content-stretch flex flex-col gap-[50px] items-start justify-start leading-[0] not-italic relative shrink-0 w-full">
                  <div className="font-aptos font-semibold relative shrink-0 text-[#09141f] text-[32px] tracking-[-0.96px] w-full">
                    <p className="leading-[32px]">"We cannot believe how much we needed the Insights platform."</p>
                  </div>
                  <div className="font-aptos font-normal relative shrink-0 text-[#121212] text-[16px] w-full">
                    <p className="leading-[32px]">Energy Executive, Major Oil & Gas Company</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-700 box-border content-stretch flex flex-col h-full items-start justify-between overflow-clip pb-6 pt-10 px-6 relative rounded-[15px] shrink-0 w-[480px]">
              <div className="box-border content-stretch flex flex-col gap-5 h-[50px] items-start justify-start px-2.5 py-0 relative shrink-0 w-full">
                <div className="bg-white p-3 rounded-lg">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="5" stroke="#fa6a20" strokeWidth="2"/>
                    <path d="M12 1V3" stroke="#fa6a20" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M12 21V23" stroke="#fa6a20" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>
              <div className="bg-[#fae6a4] box-border content-stretch flex flex-col gap-2.5 items-start justify-start p-[30px] relative rounded-[4px] shrink-0 w-full">
                <div className="content-stretch flex flex-col gap-[50px] items-start justify-start leading-[0] not-italic relative shrink-0 w-full">
                  <div className="font-aptos font-semibold relative shrink-0 text-[#09141f] text-[32px] tracking-[-0.96px] w-full">
                    <p className="leading-[32px]">"Elios simplified our entire hiring process."</p>
                  </div>
                  <div className="font-aptos font-normal relative shrink-0 text-[#121212] text-[16px] w-full">
                    <p className="leading-[32px]">Renewable Energy Director</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-red-600 box-border content-stretch flex flex-col h-full items-start justify-between overflow-clip pb-6 pt-10 px-6 relative rounded-[15px] shrink-0 w-[480px]">
              <div className="box-border content-stretch flex flex-col gap-5 h-[52px] items-start justify-center px-2.5 py-0 relative shrink-0 w-full">
                <div className="bg-white p-3 rounded-lg">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#fa6a20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <div className="bg-[#e0f1fe] box-border content-stretch flex flex-col gap-2.5 items-start justify-start p-[30px] relative rounded-[4px] shrink-0 w-full">
                <div className="content-stretch flex flex-col gap-[50px] items-start justify-start leading-[0] not-italic relative shrink-0 w-full">
                  <div className="font-aptos font-semibold relative shrink-0 text-[#09141f] text-[32px] tracking-[-0.96px] w-full">
                    <p className="leading-[32px]">"Outstanding results in safety compliance hiring."</p>
                  </div>
                  <div className="font-aptos font-normal relative shrink-0 text-[#121212] text-[16px] w-full">
                    <p className="leading-[32px]">HSE Manager, Offshore Operations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-5 items-center justify-start relative shrink-0 w-full">
            <div className="bg-white box-border content-stretch flex gap-[15px] h-20 items-center justify-center px-7 py-5 relative rounded-[12px] shrink-0 hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="relative size-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M15 18L9 12L15 6" stroke="#fa6a20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <div className="bg-white box-border content-stretch flex gap-[15px] h-20 items-center justify-center px-7 py-5 relative rounded-[12px] shrink-0 hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="relative size-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M9 18L15 12L9 6" stroke="#fa6a20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="box-border content-stretch flex flex-col gap-[90px] items-center justify-center pb-[400px] pt-[152px] px-0 relative size-full">
        <div className="content-stretch flex flex-col gap-[90px] items-center justify-center max-w-[1638px] relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-10 items-center justify-center relative shrink-0 w-full">
            <div className="box-border content-stretch flex gap-2.5 items-center justify-center px-0 py-[18px] relative rounded-[9px] shrink-0">
              <div className="h-[13px] relative shrink-0 w-4">
                <svg width="16" height="13" viewBox="0 0 16 13" fill="none">
                  <path d="M8 1L10.5 6H15.5L11.5 9L13 12L8 9L3 12L4.5 9L0.5 6H5.5L8 1Z" fill="#fa6a20"/>
                </svg>
              </div>
              <div className="font-aptos font-semibold leading-[0] not-italic relative shrink-0 text-[#fa6a20] text-[20px] text-nowrap uppercase">
                <p className="leading-[24px] whitespace-pre">Blog</p>
              </div>
            </div>
            <div className="font-aptos font-semibold leading-[0] not-italic relative shrink-0 text-[#09141f] text-[64px] text-nowrap tracking-[-3.2px]">
              <p className="leading-[0.9] whitespace-pre">What's Happening in Energy</p>
            </div>
          </div>
          <div className="content-stretch flex gap-[50px] items-start justify-center relative shrink-0 w-full">
            <div className="basis-0 content-stretch flex flex-col gap-[30px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 box-border content-stretch flex flex-col gap-[30px] h-[292px] items-start justify-end overflow-clip pb-6 pt-10 px-6 relative rounded-[15px] shrink-0 w-full"></div>
              <div className="content-stretch flex flex-col gap-10 items-start justify-start relative shrink-0 w-full">
                <div className="font-aptos font-semibold leading-[0] not-italic relative shrink-0 text-[#09141f] text-[32px] tracking-[-0.96px] w-full">
                  <p className="leading-[1.2]">Why Speed Matters: How Faster Hiring Gives Energy Companies a Competitive Edge</p>
                </div>
                <div className="content-stretch flex font-aptos font-normal items-start justify-between leading-[0] not-italic relative shrink-0 text-[#121212] text-[16px] text-nowrap w-full">
                  <div className="relative shrink-0">
                    <p className="leading-[32px] text-nowrap whitespace-pre">Energy Team</p>
                  </div>
                  <div className="relative shrink-0">
                    <p className="leading-[32px] text-nowrap whitespace-pre">5m read</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="basis-0 content-stretch flex flex-col gap-[30px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
              <div className="bg-gradient-to-br from-green-600 to-green-800 box-border content-stretch flex flex-col gap-[30px] h-[292px] items-start justify-end overflow-clip pb-6 pt-10 px-6 relative rounded-[15px] shrink-0 w-full"></div>
              <div className="content-stretch flex flex-col gap-10 items-start justify-start relative shrink-0 w-full">
                <div className="font-aptos font-semibold leading-[0] not-italic relative shrink-0 text-[#09141f] text-[32px] tracking-[-0.96px] w-full">
                  <p className="leading-[1.2]">The Future of Energy: Renewable vs. Traditional Talent Needs</p>
                </div>
                <div className="content-stretch flex font-aptos font-normal items-start justify-between leading-[0] not-italic relative shrink-0 text-[#121212] text-[16px] text-nowrap w-full">
                  <div className="relative shrink-0">
                    <p className="leading-[32px] text-nowrap whitespace-pre">Energy Team</p>
                  </div>
                  <div className="relative shrink-0">
                    <p className="leading-[32px] text-nowrap whitespace-pre">4m read</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="basis-0 content-stretch flex flex-col gap-[30px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
              <div className="bg-gradient-to-br from-orange-600 to-red-700 box-border content-stretch flex flex-col gap-[30px] h-[292px] items-start justify-end overflow-clip pb-6 pt-10 px-6 relative rounded-[15px] shrink-0 w-full"></div>
              <div className="content-stretch flex flex-col gap-10 items-start justify-start relative shrink-0 w-full">
                <div className="font-aptos font-semibold leading-[0] not-italic relative shrink-0 text-[#09141f] text-[32px] tracking-[-0.96px] w-full">
                  <p className="leading-[1.2]">Safety First: Essential Hiring Practices for Energy Companies</p>
                </div>
                <div className="content-stretch flex font-aptos font-normal items-start justify-between leading-[0] not-italic relative shrink-0 text-[#121212] text-[16px] text-nowrap w-full">
                  <div className="relative shrink-0">
                    <p className="leading-[32px] text-nowrap whitespace-pre">Energy Team</p>
                  </div>
                  <div className="relative shrink-0">
                    <p className="leading-[32px] text-nowrap whitespace-pre">6m read</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Link href="/blog" className="content-stretch flex gap-2.5 items-center justify-center relative shrink-0 hover:opacity-80 transition-opacity">
            <div className="font-aptos font-semibold leading-[0] not-italic relative shrink-0 text-[#fa6a20] text-[24px] text-nowrap tracking-[-0.48px]">
              <p className="leading-[24px] whitespace-pre">See All Blog Posts</p>
            </div>
            <div className="relative shrink-0 size-[22px]">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M5 11H17M17 11L11 5M17 11L11 17" stroke="#fa6a20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}