"use client";

import Image from "next/image";
import Tagline from "./Tagline";

const imgCFlare = "/assets/energy-roles-c-flare.svg";

export default function EnergyRoles() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center px-16 py-36 relative size-full" data-name="Section">
      <div className="content-stretch flex flex-col gap-[104px] items-center justify-end relative shrink-0 w-full" data-name="Content">
        <div className="content-stretch flex flex-col gap-6 items-center justify-center relative shrink-0 w-full" data-name="Subhead Section">
          <div className="content-stretch flex flex-col gap-4 items-center justify-center relative shrink-0 w-full" data-name="Top">
            <Tagline text="roles & specialties" />
            <div className="font-aptos-semibold leading-[0] not-italic relative shrink-0 text-[#0f1012] text-[54px] text-center text-nowrap tracking-[-3.24px]">
              <p className="leading-[54px] whitespace-pre">Energy roles we'll help you find</p>
            </div>
          </div>
        </div>
        <div className="gap-6 grid grid-cols-3 grid-rows-2 relative shrink-0 w-full" data-name="Grid">
          <div className="absolute h-[577px] left-[-331px] top-[-145px] w-[591px]" data-name="C Flare">
            <div className="absolute inset-[-19.76%_-19.29%]">
              <Image alt="" src={imgCFlare} width={591} height={577} className="block max-w-none size-full" />
            </div>
          </div>
          <div className="bg-white box-border content-stretch flex flex-col h-[260px] items-start justify-between overflow-clip px-8 py-10 relative rounded-[6px] shrink-0" data-name="Role Card">
            <div className="shrink-0 size-6">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z" stroke="#fb5d0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="content-stretch flex flex-col gap-4 items-start justify-start leading-[0] not-italic relative shrink-0 text-[#0f1012] w-full">
              <div className="font-aptos-semibold relative shrink-0 text-[22px] text-nowrap tracking-[-0.66px]">
                <p className="leading-[22px] whitespace-pre">Drilling & Exploration</p>
              </div>
              <div className="font-aptos-regular min-w-full relative shrink-0 text-[16px]" style={{ width: "min-content" }}>
                <ul className="list-disc">
                  <li className="mb-0 ms-6">
                    <span className="leading-[20px]">Drilling Engineer</span>
                  </li>
                  <li className="mb-0 ms-6">
                    <span className="leading-[20px]">Reservoir Engineer</span>
                  </li>
                  <li className="ms-6">
                    <span className="leading-[20px]">Petroleum Geologist</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-white box-border content-stretch flex flex-col h-[260px] items-start justify-between overflow-clip px-8 py-10 relative rounded-[6px] shrink-0" data-name="Role Card">
            <div className="shrink-0 size-6">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#fb5d0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="#fb5d0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="#fb5d0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="content-stretch flex flex-col gap-4 items-start justify-start leading-[0] not-italic relative shrink-0 text-[#0f1012] w-full">
              <div className="font-aptos-semibold relative shrink-0 text-[22px] text-nowrap tracking-[-0.66px]">
                <p className="leading-[22px] whitespace-pre">Operations & Production</p>
              </div>
              <div className="font-aptos-regular min-w-full relative shrink-0 text-[16px]" style={{ width: "min-content" }}>
                <ul className="list-disc">
                  <li className="mb-0 ms-6">
                    <span className="leading-[20px]">Product Engineer</span>
                  </li>
                  <li className="mb-0 ms-6">
                    <span className="leading-[20px]">Offshore Operations Manager</span>
                  </li>
                  <li className="ms-6">
                    <span className="leading-[20px]">Field Operator</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-white box-border content-stretch flex flex-col h-[260px] items-start justify-between overflow-clip px-8 py-10 relative rounded-[6px] shrink-0" data-name="Role Card">
            <div className="shrink-0 size-6">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M22 12H18L15 21L9 3L6 12H2" stroke="#fb5d0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="content-stretch flex flex-col gap-4 items-start justify-start leading-[0] not-italic relative shrink-0 text-[#0f1012] w-full">
              <div className="font-aptos-semibold relative shrink-0 text-[22px] text-nowrap tracking-[-0.66px]">
                <p className="leading-[22px] whitespace-pre">Health, Safety & Environment (HSE)</p>
              </div>
              <div className="font-aptos-regular min-w-full relative shrink-0 text-[16px]" style={{ width: "min-content" }}>
                <ul className="list-disc">
                  <li className="mb-0 ms-6">
                    <span className="leading-[20px]">HSE Specialist</span>
                  </li>
                  <li className="mb-0 ms-6">
                    <span className="leading-[20px]">Environmental Engineer</span>
                  </li>
                  <li className="ms-6">
                    <span className="leading-[20px]">Safety Officer</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-white box-border content-stretch flex flex-col h-[260px] items-start justify-between overflow-clip px-8 py-10 relative rounded-[6px] shrink-0" data-name="Role Card">
            <div className="shrink-0 size-6">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M14.7 6.3C15.0928 6.69277 15.0928 7.30723 14.7 7.7L12.9 9.5L14.5 11.1C14.8 11.4 14.8 12 14.5 12.3L12.3 14.5C12 14.8 11.4 14.8 11.1 14.5L9.5 12.9L7.7 14.7C7.30723 15.0928 6.69277 15.0928 6.3 14.7L1.3 9.7C0.907233 9.30723 0.907233 8.69277 1.3 8.3L6.3 3.3C6.69277 2.90723 7.30723 2.90723 7.7 3.3L9.5 5.1L11.1 3.5C11.4 3.2 12 3.2 12.3 3.5L14.5 5.7C14.8 6 14.8 6.6 14.5 6.9L12.9 8.5L14.7 6.3Z" stroke="#fb5d0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9.5 12L12 14.5" stroke="#fb5d0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 22L18 18" stroke="#fb5d0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="content-stretch flex flex-col gap-4 items-start justify-start leading-[0] not-italic relative shrink-0 text-[#0f1012] w-full">
              <div className="font-aptos-semibold relative shrink-0 text-[22px] text-nowrap tracking-[-0.66px]">
                <p className="leading-[22px] whitespace-pre">Integrity & Maintenance</p>
              </div>
              <div className="font-aptos-regular min-w-full relative shrink-0 text-[16px]" style={{ width: "min-content" }}>
                <ul className="list-disc">
                  <li className="mb-0 ms-6">
                    <span className="leading-[20px]">Integrity Inspector</span>
                  </li>
                  <li className="mb-0 ms-6">
                    <span className="leading-[20px]">Reliability Engineer</span>
                  </li>
                  <li className="ms-6">
                    <span className="leading-[20px]">Maintenance Supervisor</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-white box-border content-stretch flex flex-col h-[260px] items-start justify-between overflow-clip px-8 py-10 relative rounded-[6px] shrink-0" data-name="Role Card">
            <div className="shrink-0 size-6">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="#fb5d0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14 2V8H20" stroke="#fb5d0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 13H8" stroke="#fb5d0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 17H8" stroke="#fb5d0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 9H9H8" stroke="#fb5d0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="content-stretch flex flex-col gap-4 items-start justify-start leading-[0] not-italic relative shrink-0 text-[#0f1012] w-full">
              <div className="font-aptos-semibold relative shrink-0 text-[22px] text-nowrap tracking-[-0.66px]">
                <p className="leading-[22px] whitespace-pre">Project & Facilities Engineering</p>
              </div>
              <div className="font-aptos-regular min-w-full relative shrink-0 text-[16px]" style={{ width: "min-content" }}>
                <ul className="list-disc">
                  <li className="mb-0 ms-6">
                    <span className="leading-[20px]">Project Engineer</span>
                  </li>
                  <li className="mb-0 ms-6">
                    <span className="leading-[20px]">Facilities Engineer</span>
                  </li>
                  <li className="ms-6">
                    <span className="leading-[20px]">Construction Manager (Energy Projects)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-white box-border content-stretch flex flex-col h-[260px] items-start justify-between overflow-clip px-8 py-10 relative rounded-[6px] shrink-0" data-name="Role Card">
            <div className="shrink-0 size-6">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="5" stroke="#fb5d0b" strokeWidth="2"/>
                <path d="M12 1V3" stroke="#fb5d0b" strokeWidth="2" strokeLinecap="round"/>
                <path d="M12 21V23" stroke="#fb5d0b" strokeWidth="2" strokeLinecap="round"/>
                <path d="M4.22 4.22L5.64 5.64" stroke="#fb5d0b" strokeWidth="2" strokeLinecap="round"/>
                <path d="M18.36 18.36L19.78 19.78" stroke="#fb5d0b" strokeWidth="2" strokeLinecap="round"/>
                <path d="M1 12H3" stroke="#fb5d0b" strokeWidth="2" strokeLinecap="round"/>
                <path d="M21 12H23" stroke="#fb5d0b" strokeWidth="2" strokeLinecap="round"/>
                <path d="M4.22 19.78L5.64 18.36" stroke="#fb5d0b" strokeWidth="2" strokeLinecap="round"/>
                <path d="M18.36 5.64L19.78 4.22" stroke="#fb5d0b" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="content-stretch flex flex-col gap-4 items-start justify-start leading-[0] not-italic relative shrink-0 text-[#0f1012] w-full">
              <div className="font-aptos-semibold relative shrink-0 text-[22px] text-nowrap tracking-[-0.66px]">
                <p className="leading-[22px] whitespace-pre">Renewable & Alternative Energy</p>
              </div>
              <div className="font-aptos-regular min-w-full relative shrink-0 text-[16px]" style={{ width: "min-content" }}>
                <ul className="list-disc">
                  <li className="mb-0 ms-6">
                    <span className="leading-[20px]">Wind Energy Engineer</span>
                  </li>
                  <li className="mb-0 ms-6">
                    <span className="leading-[20px]">Solar PV Specialist</span>
                  </li>
                  <li className="ms-6">
                    <span className="leading-[20px]">Energy Transition Analyst</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}