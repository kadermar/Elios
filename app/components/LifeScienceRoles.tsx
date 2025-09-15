"use client";

import Image from "next/image";

// Assets from Figma
const imgBeamVector = "/assets/life-science-beam-vector.svg";
const imgCFlare = "/assets/life-science-c-flare.svg";

// Life science role data matching Figma design
const lifeScienceRoles = [
  {
    title: "Research & Discovery",
    icon: "/icons/user-circle.svg", // Using existing icon
    roles: [
      "Software Engineer",
      "Front-End Developer",
      "Full-Stack Developer"
    ]
  },
  {
    title: "Clinical Development",
    icon: "/icons/shield-check.svg", // Using existing icon
    roles: [
      "Data Scientist",
      "Machine Learning",
      "BI/Data Analyst"
    ]
  },
  {
    title: "Quality & Compliance",
    icon: "/icons/briefcase-02.svg", // Using existing icon
    roles: [
      "Cloud Architect ",
      "DevOps Engineer",
      "Site Reliability Engineer (SRE)"
    ]
  },
  {
    title: "Regulatory Affairs",
    icon: "/icons/tool.svg", // Using existing icon
    roles: [
      "Regulatory Affairs SME",
      "Regulatory Affairs Manager",
      "Medical Writer"
    ]
  },
  {
    title: "Manufacturing & Operations",
    icon: "/icons/data.svg", // Using existing icon
    roles: [
      "Process Development Engineer",
      "Manufacturing Scientist",
      "QC Analyst"
    ]
  },
  {
    title: "Medical Affairs & Drug Safety",
    icon: "/icons/code.svg", // Using existing icon
    roles: [
      "Medical Science Liaison",
      "Pharmacovigilance Specialist",
      "Clinical Data Manager"
    ]
  }
];

export default function LifeScienceRoles() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center px-16 py-36 relative size-full overflow-visible" data-name="Section">
      <div className="content-stretch flex flex-col gap-[104px] items-center justify-end relative shrink-0 w-full" data-name="Content">
        {/* Header Section */}
        <div className="content-stretch flex flex-col gap-6 items-center justify-center relative shrink-0 w-full" data-name="Subhead Section">
          <div className="content-stretch flex flex-col gap-4 items-center justify-center relative shrink-0 w-full" data-name="Top">
            {/* Custom Tagline without using Tagline component */}
            <div className="content-stretch flex gap-2.5 items-center justify-center relative rounded-[9px] shrink-0" data-name="Tagline">
              <div className="h-[6.001px] relative shrink-0 w-[15px]" data-name="Beam Vector">
                <div className="absolute bottom-[-16.66%] left-0 right-[-6.67%] top-0">
                  <Image alt="" className="block max-w-none size-full" src={imgBeamVector} width={15} height={6} />
                </div>
              </div>
              <div className="font-['Aptos:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#fb5d0b] text-[16px] text-nowrap uppercase">
                <p className="leading-[20px] whitespace-pre">roles & specialties</p>
              </div>
            </div>
            <div className="font-['Aptos:Semibold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#0f1012] text-[54px] text-center text-nowrap tracking-[-3.24px]">
              <p className="leading-[54px] whitespace-pre">Life Science roles we'll help you find</p>
            </div>
          </div>
        </div>

        {/* Grid Section - Exact Figma Layout */}
        <div className="gap-6 grid grid-cols-[repeat(3,_minmax(0px,_1fr))] grid-rows-[repeat(2,_minmax(0px,_1fr))] h-[547px] relative shrink-0 w-full" data-name="Grid">
          {/* C Flare Background */}
          <div className="absolute h-[577px] left-[-331px] top-[-145px] w-[591px] pointer-events-none z-0" data-name="C Flare">
            <div className="absolute inset-[-19.76%_-19.29%]">
              <Image alt="" className="block max-w-none size-full" src={imgCFlare} width={591} height={577} />
            </div>
          </div>

          {/* Life Science Role Cards */}
          {lifeScienceRoles.map((role, index) => (
            <div
              key={index}
              className={`[grid-area:${Math.floor(index / 3) + 1}_/_${(index % 3) + 1}] bg-white box-border content-stretch flex flex-col h-[260px] items-start justify-between overflow-clip px-8 py-10 relative rounded-[6px] shrink-0 transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer group`}
              data-name="Testimonial Card"
            >
              {/* Icon */}
              <div className="shrink-0 size-6 group-hover:scale-110 transition-transform duration-300">
                <Image src={role.icon} alt={role.title} width={24} height={24} className="w-full h-full" />
              </div>

              {/* Content */}
              <div className="content-stretch flex flex-col gap-4 items-start justify-start leading-[0] not-italic relative shrink-0 text-[#0f1012] w-full">
                <div className="font-['Aptos:Semibold',_sans-serif] relative shrink-0 text-[22px] text-nowrap tracking-[-0.66px]">
                  <p className="leading-[22px] whitespace-pre">{role.title}</p>
                </div>
                <div className="font-['Aptos:Regular',_sans-serif] min-w-full relative shrink-0 text-[16px]" style={{ width: "min-content" }}>
                  <ul className="list-disc">
                    {role.roles.map((roleName, roleIndex) => (
                      <li key={roleIndex} className={`${roleIndex < role.roles.length - 1 ? 'mb-0' : ''} ms-6`}>
                        <span className="leading-[20px]">{roleName}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}