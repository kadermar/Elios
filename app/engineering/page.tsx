"use client";

import Image from "next/image";
import Link from "next/link";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function Engineering() {
  return (
    <div className="bg-[#F4F4F4] content-stretch flex flex-col items-center justify-start relative size-full">
      <Navigation />
      
      <div className="content-stretch flex flex-col items-center justify-center mt-[174px] relative size-full">
        <div className="content-stretch flex gap-[140px] items-center justify-start max-w-[1638px] relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-[70px] items-start justify-start relative shrink-0 w-[694px]">
            <div className="content-stretch flex flex-col gap-10 items-start justify-start leading-[0] not-italic relative shrink-0 text-[#09141f] w-full">
              <div className="font-aptos font-semibold relative shrink-0 text-[96px] tracking-[-5.76px] w-full">
                <p className="leading-[96px]">Power engineering hiring</p>
              </div>
              <div className="font-aptos font-normal relative shrink-0 text-[24px] w-full">
                <p className="leading-[32px]">We source credentialed, project-ready engineers who meet compliance standards and deliver results without delay.</p>
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
              <p className="leading-[0.9] whitespace-pre">Engineering roles we'll help you find</p>
            </div>
          </div>
          <div className="gap-6 grid grid-cols-[repeat(3,_minmax(0px,_1fr))] grid-rows-[repeat(2,_minmax(0px,_1fr))] h-[680px] relative shrink-0 w-full">
            <div className="[grid-area:1_/_1] bg-white box-border content-stretch flex flex-col gap-[50px] items-start justify-start overflow-clip px-9 py-[46px] relative rounded-[6px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.02),0px_2px_4px_0px_rgba(0,0,0,0.08)] shrink-0">
              <div className="basis-0 content-stretch flex flex-col grow items-start justify-between min-h-px min-w-px relative shrink-0 w-full">
                <div className="bg-[#f4f4f4] rounded-full p-3 relative shrink-0 size-[46px] flex items-center justify-center">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2V12L20 8L12 2Z" stroke="#fa6a20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 12V22L20 18V8L12 12Z" stroke="#fa6a20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 12L4 8L12 2V12Z" stroke="#fa6a20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 12V22L4 18V8L12 12Z" stroke="#fa6a20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="box-border content-stretch flex flex-col gap-7 items-start justify-center leading-[0] not-italic px-2.5 py-0 relative shrink-0 w-full">
                  <div className="font-aptos font-semibold relative shrink-0 text-[#09141f] text-[28px] tracking-[-1.4px] w-full">
                    <p className="leading-[36px]">Mechanical & Manufacturing</p>
                  </div>
                  <div className="font-aptos font-normal relative shrink-0 text-[#535960] text-[20px] w-full">
                    <ul className="list-disc ml-[30px]">
                      <li className="leading-[1.5]">Mechanical Engineer</li>
                      <li className="leading-[1.5]">Manufacturing Engineer</li>
                      <li className="leading-[1.5]">Industrial Engineer</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="[grid-area:1_/_2] bg-white box-border content-stretch flex flex-col gap-[50px] items-start justify-start overflow-clip px-9 py-[46px] relative rounded-[6px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.02),0px_2px_4px_0px_rgba(0,0,0,0.08)] shrink-0">
              <div className="basis-0 content-stretch flex flex-col grow items-start justify-between min-h-px min-w-px relative shrink-0 w-full">
                <div className="bg-[#f4f4f4] rounded-full p-3 relative shrink-0 size-[46px] flex items-center justify-center">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="#fa6a20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="box-border content-stretch flex flex-col gap-7 items-start justify-center leading-[0] not-italic px-2.5 py-0 relative shrink-0 w-full">
                  <div className="font-aptos font-semibold relative shrink-0 text-[#09141f] text-[28px] tracking-[-1.4px] w-full">
                    <p className="leading-[36px]">Electrical & Electronics</p>
                  </div>
                  <div className="font-aptos font-normal relative shrink-0 text-[#535960] text-[20px] w-full">
                    <ul className="list-disc ml-[30px]">
                      <li className="leading-[1.5]">Electrical Engineer</li>
                      <li className="leading-[1.5]">Electronics Engineer</li>
                      <li className="leading-[1.5]">Controls Engineer</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="[grid-area:1_/_3] bg-white box-border content-stretch flex flex-col gap-[50px] items-start justify-start overflow-clip px-9 py-[46px] relative rounded-[6px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.02),0px_2px_4px_0px_rgba(0,0,0,0.08)] shrink-0">
              <div className="basis-0 content-stretch flex flex-col grow items-start justify-between min-h-px min-w-px relative shrink-0 w-full">
                <div className="bg-[#f4f4f4] rounded-full p-3 relative shrink-0 size-[46px] flex items-center justify-center">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M21 16V8C20.9996 7.64927 20.9071 7.30481 20.7315 7.00116C20.556 6.69751 20.3037 6.44536 20 6.27L13 2.27C12.696 2.09446 12.3511 2.00205 12 2.00205C11.6489 2.00205 11.304 2.09446 11 2.27L4 6.27C3.69626 6.44536 3.44398 6.69751 3.26846 7.00116C3.09294 7.30481 3.00036 7.64927 3 8V16C3.00036 16.3507 3.09294 16.6952 3.26846 16.9988C3.44398 17.3025 3.69626 17.5546 4 17.73L11 21.73C11.304 21.9055 11.6489 21.9979 12 21.9979C12.3511 21.9979 12.696 21.9055 13 21.73L20 17.73C20.3037 17.5546 20.556 17.3025 20.7315 16.9988C20.9071 16.6952 20.9996 16.3507 21 16Z" stroke="#fa6a20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3.27 6.96L12 12.01L20.73 6.96" stroke="#fa6a20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 22.08V12" stroke="#fa6a20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="box-border content-stretch flex flex-col gap-7 items-start justify-center leading-[0] not-italic px-2.5 py-0 relative shrink-0 w-full">
                  <div className="font-aptos font-semibold relative shrink-0 text-[#09141f] text-[28px] tracking-[-1.4px] w-full">
                    <p className="leading-[36px]">Civil & Construction</p>
                  </div>
                  <div className="font-aptos font-normal relative shrink-0 text-[#535960] text-[20px] w-full">
                    <ul className="list-disc ml-[30px]">
                      <li className="leading-[1.5]">Civil Engineer</li>
                      <li className="leading-[1.5]">Structural Engineer</li>
                      <li className="leading-[1.5]">Construction Project Engineer</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="[grid-area:2_/_1] bg-white box-border content-stretch flex flex-col gap-[50px] items-start justify-start overflow-clip px-9 py-[46px] relative rounded-[6px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.02),0px_2px_4px_0px_rgba(0,0,0,0.08)] shrink-0">
              <div className="basis-0 content-stretch flex flex-col grow items-start justify-between min-h-px min-w-px relative shrink-0 w-full">
                <div className="bg-[#f4f4f4] rounded-full p-3 relative shrink-0 size-[46px] flex items-center justify-center">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M10 2V10H14V2" stroke="#fa6a20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 10C8 10 7 14 5 16C3 18 3 22 3 22H21C21 22 21 18 19 16C17 14 16 10 16 10" stroke="#fa6a20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 22V18" stroke="#fa6a20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 22V18" stroke="#fa6a20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="box-border content-stretch flex flex-col gap-7 items-start justify-center leading-[0] not-italic px-2.5 py-0 relative shrink-0 w-full">
                  <div className="font-aptos font-semibold relative shrink-0 text-[#09141f] text-[28px] tracking-[-1.4px] w-full">
                    <p className="leading-[36px]">Chemical & Process</p>
                  </div>
                  <div className="font-aptos font-normal relative shrink-0 text-[#535960] text-[20px] w-full">
                    <ul className="list-disc ml-[30px]">
                      <li className="leading-[1.5]">Chemical Engineer</li>
                      <li className="leading-[1.5]">Process Engineer</li>
                      <li className="leading-[1.5]">Process Safety Engineer</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="[grid-area:2_/_2] bg-white box-border content-stretch flex flex-col gap-[50px] items-start justify-start overflow-clip px-9 py-[46px] relative rounded-[6px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.02),0px_2px_4px_0px_rgba(0,0,0,0.08)] shrink-0">
              <div className="basis-0 content-stretch flex flex-col grow items-start justify-between min-h-px min-w-px relative shrink-0 w-full">
                <div className="bg-[#f4f4f4] rounded-full p-3 relative shrink-0 size-[46px] flex items-center justify-center">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L2 7V12C2 16.5 4.23 20.68 8 22.19C9.23 22.68 10.5 22.93 11.77 22.93C13.04 22.93 14.31 22.68 15.54 22.19C19.31 20.68 21.54 16.5 21.54 12V7L12 2Z" stroke="#fa6a20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 12L11 14L15 10" stroke="#fa6a20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="box-border content-stretch flex flex-col gap-7 items-start justify-center leading-[0] not-italic px-2.5 py-0 relative shrink-0 w-full">
                  <div className="font-aptos font-semibold relative shrink-0 text-[#09141f] text-[28px] tracking-[-1.4px] w-full">
                    <p className="leading-[36px]">Quality & Safety</p>
                  </div>
                  <div className="font-aptos font-normal relative shrink-0 text-[#535960] text-[20px] w-full">
                    <ul className="list-disc ml-[30px]">
                      <li className="leading-[1.5]">Quality Assurance Engineer</li>
                      <li className="leading-[1.5]">Reliability Engineer</li>
                      <li className="leading-[1.5]">Safety Engineer</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="[grid-area:2_/_3] bg-white box-border content-stretch flex flex-col gap-[50px] items-start justify-start overflow-clip px-9 py-[46px] relative rounded-[6px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.02),0px_2px_4px_0px_rgba(0,0,0,0.08)] shrink-0">
              <div className="basis-0 content-stretch flex flex-col grow items-start justify-between min-h-px min-w-px relative shrink-0 w-full">
                <div className="bg-[#f4f4f4] rounded-full p-3 relative shrink-0 size-[46px] flex items-center justify-center">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M20 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7Z" stroke="#fa6a20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 21V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V21" stroke="#fa6a20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="box-border content-stretch flex flex-col gap-7 items-start justify-center leading-[0] not-italic px-2.5 py-0 relative shrink-0 w-full">
                  <div className="font-aptos font-semibold relative shrink-0 text-[#09141f] text-[28px] tracking-[-1.4px] w-full">
                    <p className="leading-[36px]">Project & Program Management</p>
                  </div>
                  <div className="font-aptos font-normal relative shrink-0 text-[#535960] text-[20px] w-full">
                    <ul className="list-disc ml-[30px]">
                      <li className="leading-[1.5]">Project Manager</li>
                      <li className="leading-[1.5]">Engineering Manager</li>
                      <li className="leading-[1.5]">Technical Program Manager</li>
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
              <p className="leading-[0.9] whitespace-pre">Engineering Case Studies</p>
            </div>
          </div>
          <div className="content-stretch flex gap-5 h-[564px] items-center justify-start relative shrink-0 w-full overflow-x-auto">
            <div className="bg-gradient-to-br from-purple-500 to-purple-700 box-border content-stretch flex flex-col h-full items-start justify-between overflow-clip pb-6 pt-10 px-6 relative rounded-[15px] shrink-0 w-[480px]">
              <div className="box-border content-stretch flex flex-col gap-5 items-start justify-start px-2.5 py-0 relative shrink-0 w-full">
                <div className="bg-white p-3 rounded-lg">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2V12L20 8L12 2Z" stroke="#fa6a20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 12V22L20 18V8L12 12Z" stroke="#fa6a20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <div className="bg-white box-border content-stretch flex flex-col gap-2.5 items-start justify-start p-[30px] relative rounded-[4px] shrink-0 w-full">
                <div className="content-stretch flex flex-col gap-[50px] items-start justify-start leading-[0] not-italic relative shrink-0 w-full">
                  <div className="font-aptos font-semibold relative shrink-0 text-[#09141f] text-[32px] tracking-[-0.96px] w-full">
                    <p className="leading-[32px]">"Elios found us the perfect mechanical engineer in just 2 weeks."</p>
                  </div>
                  <div className="font-aptos font-normal relative shrink-0 text-[#121212] text-[16px] w-full">
                    <p className="leading-[32px]">Engineering Director, Manufacturing Company</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-teal-500 to-teal-700 box-border content-stretch flex flex-col h-full items-start justify-between overflow-clip pb-6 pt-10 px-6 relative rounded-[15px] shrink-0 w-[480px]">
              <div className="box-border content-stretch flex flex-col gap-5 h-[50px] items-start justify-start px-2.5 py-0 relative shrink-0 w-full">
                <div className="bg-white p-3 rounded-lg">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="#fa6a20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <div className="bg-[#fae6a4] box-border content-stretch flex flex-col gap-2.5 items-start justify-start p-[30px] relative rounded-[4px] shrink-0 w-full">
                <div className="content-stretch flex flex-col gap-[50px] items-start justify-start leading-[0] not-italic relative shrink-0 w-full">
                  <div className="font-aptos font-semibold relative shrink-0 text-[#09141f] text-[32px] tracking-[-0.96px] w-full">
                    <p className="leading-[32px]">"Outstanding technical screening saved us months of work."</p>
                  </div>
                  <div className="font-aptos font-normal relative shrink-0 text-[#121212] text-[16px] w-full">
                    <p className="leading-[32px]">VP of Engineering, Tech Company</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-indigo-500 to-blue-700 box-border content-stretch flex flex-col h-full items-start justify-between overflow-clip pb-6 pt-10 px-6 relative rounded-[15px] shrink-0 w-[480px]">
              <div className="box-border content-stretch flex flex-col gap-5 h-[52px] items-start justify-center px-2.5 py-0 relative shrink-0 w-full">
                <div className="bg-white p-3 rounded-lg">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                    <path d="M21 16V8C21 7.46957 20.7893 6.96086 20.4142 6.58579C20.0391 6.21071 19.5304 6 19 6H5C4.46957 6 3.96086 6.21071 3.58579 6.58579C3.21071 6.96086 3 7.46957 3 8V16" stroke="#fa6a20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 16L21 16" stroke="#fa6a20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <div className="bg-[#e0f1fe] box-border content-stretch flex flex-col gap-2.5 items-start justify-start p-[30px] relative rounded-[4px] shrink-0 w-full">
                <div className="content-stretch flex flex-col gap-[50px] items-start justify-start leading-[0] not-italic relative shrink-0 w-full">
                  <div className="font-aptos font-semibold relative shrink-0 text-[#09141f] text-[32px] tracking-[-0.96px] w-full">
                    <p className="leading-[32px]">"Compliance-ready engineers for our infrastructure projects."</p>
                  </div>
                  <div className="font-aptos font-normal relative shrink-0 text-[#121212] text-[16px] w-full">
                    <p className="leading-[32px]">Project Manager, Construction Firm</p>
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
              <p className="leading-[0.9] whitespace-pre">What's Happening in Engineering</p>
            </div>
          </div>
          <div className="content-stretch flex gap-[50px] items-start justify-center relative shrink-0 w-full">
            <div className="basis-0 content-stretch flex flex-col gap-[30px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
              <div className="bg-gradient-to-br from-purple-600 to-purple-800 box-border content-stretch flex flex-col gap-[30px] h-[292px] items-start justify-end overflow-clip pb-6 pt-10 px-6 relative rounded-[15px] shrink-0 w-full"></div>
              <div className="content-stretch flex flex-col gap-10 items-start justify-start relative shrink-0 w-full">
                <div className="font-aptos font-semibold leading-[0] not-italic relative shrink-0 text-[#09141f] text-[32px] tracking-[-0.96px] w-full">
                  <p className="leading-[1.2]">The Engineering Talent Shortage: How to Navigate the Crisis</p>
                </div>
                <div className="content-stretch flex font-aptos font-normal items-start justify-between leading-[0] not-italic relative shrink-0 text-[#121212] text-[16px] text-nowrap w-full">
                  <div className="relative shrink-0">
                    <p className="leading-[32px] text-nowrap whitespace-pre">Engineering Team</p>
                  </div>
                  <div className="relative shrink-0">
                    <p className="leading-[32px] text-nowrap whitespace-pre">5m read</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="basis-0 content-stretch flex flex-col gap-[30px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
              <div className="bg-gradient-to-br from-teal-600 to-teal-800 box-border content-stretch flex flex-col gap-[30px] h-[292px] items-start justify-end overflow-clip pb-6 pt-10 px-6 relative rounded-[15px] shrink-0 w-full"></div>
              <div className="content-stretch flex flex-col gap-10 items-start justify-start relative shrink-0 w-full">
                <div className="font-aptos font-semibold leading-[0] not-italic relative shrink-0 text-[#09141f] text-[32px] tracking-[-0.96px] w-full">
                  <p className="leading-[1.2]">Remote vs. On-Site: Engineering Team Building Strategies</p>
                </div>
                <div className="content-stretch flex font-aptos font-normal items-start justify-between leading-[0] not-italic relative shrink-0 text-[#121212] text-[16px] text-nowrap w-full">
                  <div className="relative shrink-0">
                    <p className="leading-[32px] text-nowrap whitespace-pre">Engineering Team</p>
                  </div>
                  <div className="relative shrink-0">
                    <p className="leading-[32px] text-nowrap whitespace-pre">4m read</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="basis-0 content-stretch flex flex-col gap-[30px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
              <div className="bg-gradient-to-br from-indigo-600 to-blue-800 box-border content-stretch flex flex-col gap-[30px] h-[292px] items-start justify-end overflow-clip pb-6 pt-10 px-6 relative rounded-[15px] shrink-0 w-full"></div>
              <div className="content-stretch flex flex-col gap-10 items-start justify-start relative shrink-0 w-full">
                <div className="font-aptos font-semibold leading-[0] not-italic relative shrink-0 text-[#09141f] text-[32px] tracking-[-0.96px] w-full">
                  <p className="leading-[1.2]">Compliance Standards Every Engineering Hire Must Meet</p>
                </div>
                <div className="content-stretch flex font-aptos font-normal items-start justify-between leading-[0] not-italic relative shrink-0 text-[#121212] text-[16px] text-nowrap w-full">
                  <div className="relative shrink-0">
                    <p className="leading-[32px] text-nowrap whitespace-pre">Engineering Team</p>
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