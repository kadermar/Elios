"use client";

import Image from "next/image";
import Tagline from "./Tagline";

interface RoleCardProps {
  title: string;
  roles: string[];
}

function RoleCard({ title, roles }: RoleCardProps) {
  return (
    <div className="bg-white box-border content-stretch flex flex-col h-[260px] items-start justify-between overflow-clip px-8 py-10 relative rounded-[6px] shrink-0 transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer group">
      {/* Icon placeholder - exact Figma size */}
      <div className="shrink-0 size-6 group-hover:scale-110 transition-transform duration-300" />

      {/* Content - exact Figma structure */}
      <div className="content-stretch flex flex-col gap-4 items-start justify-start leading-[0] not-italic relative shrink-0 text-[#0f1012] w-full">
        <div className="font-['Aptos:Semibold',_sans-serif] relative shrink-0 text-[22px] text-nowrap tracking-[-0.66px]">
          <p className="leading-[22px] whitespace-pre">{title}</p>
        </div>
        <div className="font-['Aptos:Regular',_sans-serif] min-w-full relative shrink-0 text-[16px]" style={{ width: "min-content" }}>
          <ul className="list-disc">
            {roles.map((role, index) => (
              <li key={index} className={`${index < roles.length - 1 ? 'mb-0' : ''} ms-6`}>
                <span className="leading-[20px]">{role}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function TechnologyRoles() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center px-16 py-36 relative size-full overflow-visible">
      <div className="content-stretch flex flex-col gap-[104px] items-center justify-end relative shrink-0 w-full">
        {/* Header Section */}
        <div className="content-stretch flex flex-col gap-6 items-center justify-center relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-4 items-center justify-center relative shrink-0 w-full">
            <Tagline text="roles & specialties" />
            <div className="font-aptos-semibold leading-[54px] not-italic relative shrink-0 text-[#0f1012] text-[54px] text-center text-nowrap tracking-[-3.24px]">
              Technology roles we'll help you find
            </div>
          </div>
        </div>

        {/* Grid Section - Exact Figma Layout */}
        <div className="gap-6 grid grid-cols-[repeat(3,_minmax(0px,_1fr))] grid-rows-[repeat(2,_minmax(0px,_1fr))] relative size-full">
          {/* C Flare Background */}
          <div className="absolute h-[577px] left-[-331px] top-[-145px] w-[591px]">
            <div className="absolute inset-[-19.76%_-19.29%]">
              <Image
                src="/assets/technology-roles-c-flare.svg"
                alt=""
                width={591}
                height={577}
                className="block max-w-none size-full"
              />
            </div>
          </div>

          {/* Row 1 */}
          <div className="[grid-area:1_/_1] bg-white box-border content-stretch flex flex-col h-[260px] items-start justify-between overflow-clip px-8 py-10 relative rounded-[6px] shrink-0 transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer group">
            <div className="shrink-0 size-6 group-hover:scale-110 transition-transform duration-300">
              <Image src="/assets/tech-icons/software-development.svg" alt="Software Development" width={24} height={24} className="w-full h-full" />
            </div>
            <div className="content-stretch flex flex-col gap-4 items-start justify-start leading-[0] not-italic relative shrink-0 text-[#0f1012] w-full">
              <div className="font-['Aptos:Semibold',_sans-serif] relative shrink-0 text-[22px] text-nowrap tracking-[-0.66px]">
                <p className="leading-[22px] whitespace-pre">Software & Web Development</p>
              </div>
              <div className="font-['Aptos:Regular',_sans-serif] min-w-full relative shrink-0 text-[16px]" style={{ width: "min-content" }}>
                <ul className="list-disc">
                  <li className="mb-0 ms-6">
                    <span className="leading-[20px]">Software Engineer</span>
                  </li>
                  <li className="mb-0 ms-6">
                    <span className="leading-[20px]">Front-End Developer</span>
                  </li>
                  <li className="ms-6">
                    <span className="leading-[20px]">Full-Stack Developer</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="[grid-area:1_/_2] bg-white box-border content-stretch flex flex-col h-[260px] items-start justify-between overflow-clip px-8 py-10 relative rounded-[6px] shrink-0 transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer group">
            <div className="shrink-0 size-6 group-hover:scale-110 transition-transform duration-300">
              <Image src="/assets/tech-icons/data-science.svg" alt="Data Science & AI" width={24} height={24} className="w-full h-full" />
            </div>
            <div className="content-stretch flex flex-col gap-4 items-start justify-start leading-[0] not-italic relative shrink-0 text-[#0f1012] w-full">
              <div className="font-['Aptos:Semibold',_sans-serif] relative shrink-0 text-[22px] text-nowrap tracking-[-0.66px]">
                <p className="leading-[22px] whitespace-pre">Data Science & AI</p>
              </div>
              <div className="font-['Aptos:Regular',_sans-serif] min-w-full relative shrink-0 text-[16px]" style={{ width: "min-content" }}>
                <ul className="list-disc">
                  <li className="mb-0 ms-6">
                    <span className="leading-[20px]">Data Scientist</span>
                  </li>
                  <li className="mb-0 ms-6">
                    <span className="leading-[20px]">Machine Learning</span>
                  </li>
                  <li className="ms-6">
                    <span className="leading-[20px]">BI/Data Analyst</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="[grid-area:1_/_3] bg-white box-border content-stretch flex flex-col h-[260px] items-start justify-between overflow-clip px-8 py-10 relative rounded-[6px] shrink-0 transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer group">
            <div className="shrink-0 size-6 group-hover:scale-110 transition-transform duration-300">
              <Image src="/assets/tech-icons/cloud-devops.svg" alt="Cloud & DevOps" width={24} height={24} className="w-full h-full" />
            </div>
            <div className="content-stretch flex flex-col gap-4 items-start justify-start leading-[0] not-italic relative shrink-0 text-[#0f1012] w-full">
              <div className="font-['Aptos:Semibold',_sans-serif] relative shrink-0 text-[22px] text-nowrap tracking-[-0.66px]">
                <p className="leading-[22px] whitespace-pre">Cloud & DevOps</p>
              </div>
              <div className="font-['Aptos:Regular',_sans-serif] min-w-full relative shrink-0 text-[16px]" style={{ width: "min-content" }}>
                <ul className="list-disc">
                  <li className="mb-0 ms-6">
                    <span className="leading-[20px]">Cloud Architect</span>
                  </li>
                  <li className="mb-0 ms-6">
                    <span className="leading-[20px]">DevOps Engineer</span>
                  </li>
                  <li className="ms-6">
                    <span className="leading-[20px]">Site Reliability Engineer (SRE)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="[grid-area:2_/_1] bg-white box-border content-stretch flex flex-col h-[260px] items-start justify-between overflow-clip px-8 py-10 relative rounded-[6px] shrink-0 transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer group">
            <div className="shrink-0 size-6 group-hover:scale-110 transition-transform duration-300">
              <Image src="/assets/tech-icons/cybersecurity.svg" alt="Cybersecurity" width={24} height={24} className="w-full h-full" />
            </div>
            <div className="content-stretch flex flex-col gap-4 items-start justify-start leading-[0] not-italic relative shrink-0 text-[#0f1012] w-full">
              <div className="font-['Aptos:Semibold',_sans-serif] relative shrink-0 text-[22px] text-nowrap tracking-[-0.66px]">
                <p className="leading-[22px] whitespace-pre">Cybersecurity</p>
              </div>
              <div className="font-['Aptos:Regular',_sans-serif] min-w-full relative shrink-0 text-[16px]" style={{ width: "min-content" }}>
                <ul className="list-disc">
                  <li className="mb-0 ms-6">
                    <span className="leading-[20px]">Cybersecurity Analyst</span>
                  </li>
                  <li className="mb-0 ms-6">
                    <span className="leading-[20px]">Network Security Engineer</span>
                  </li>
                  <li className="ms-6">
                    <span className="leading-[20px]">Penetration Tester</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="[grid-area:2_/_2] bg-white box-border content-stretch flex flex-col h-[260px] items-start justify-between overflow-clip px-8 py-10 relative rounded-[6px] shrink-0 transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer group">
            <div className="shrink-0 size-6 group-hover:scale-110 transition-transform duration-300">
              <Image src="/assets/tech-icons/product-management.svg" alt="Product & Project Managers" width={24} height={24} className="w-full h-full" />
            </div>
            <div className="content-stretch flex flex-col gap-4 items-start justify-start leading-[0] not-italic relative shrink-0 text-[#0f1012] w-full">
              <div className="font-['Aptos:Semibold',_sans-serif] relative shrink-0 text-[22px] text-nowrap tracking-[-0.66px]">
                <p className="leading-[22px] whitespace-pre">Product & Project Managers</p>
              </div>
              <div className="font-['Aptos:Regular',_sans-serif] min-w-full relative shrink-0 text-[16px]" style={{ width: "min-content" }}>
                <ul className="list-disc">
                  <li className="mb-0 ms-6">
                    <span className="leading-[20px]">Product Manager</span>
                  </li>
                  <li className="mb-0 ms-6">
                    <span className="leading-[20px]">Technical Project Manager</span>
                  </li>
                  <li className="ms-6">
                    <span className="leading-[20px]">Business Analyst</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="[grid-area:2_/_3] bg-white box-border content-stretch flex flex-col h-[260px] items-start justify-between overflow-clip px-8 py-10 relative rounded-[6px] shrink-0 transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer group">
            <div className="shrink-0 size-6 group-hover:scale-110 transition-transform duration-300">
              <Image src="/assets/tech-icons/it-infrastructure.svg" alt="IT Infrastructure & Support" width={24} height={24} className="w-full h-full" />
            </div>
            <div className="content-stretch flex flex-col gap-4 items-start justify-start leading-[0] not-italic relative shrink-0 text-[#0f1012] w-full">
              <div className="font-['Aptos:Semibold',_sans-serif] relative shrink-0 text-[22px] text-nowrap tracking-[-0.66px]">
                <p className="leading-[22px] whitespace-pre">IT Infrastructure & Support</p>
              </div>
              <div className="font-['Aptos:Regular',_sans-serif] min-w-full relative shrink-0 text-[16px]" style={{ width: "min-content" }}>
                <ul className="list-disc">
                  <li className="mb-0 ms-6">
                    <span className="leading-[20px]">Systems Administrator</span>
                  </li>
                  <li className="mb-0 ms-6">
                    <span className="leading-[20px]">Network Engineer</span>
                  </li>
                  <li className="ms-6">
                    <span className="leading-[20px]">IT Support Specialist</span>
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