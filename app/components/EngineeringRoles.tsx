"use client";

import Image from "next/image";
import Tagline from "./Tagline";

// Assets from Figma
const imgCFlare = "/assets/engineering-c-flare.svg";

// Engineering role data matching Figma design
const engineeringRoles = [
  {
    title: "Mechanical & Manufacturing",
    icon: "/icons/user-circle.svg", // Using existing icon
    roles: [
      "Mechanical Engineer",
      "Manufacturing Engineer",
      "Industrial Engineer"
    ]
  },
  {
    title: "Electrical & Electronics",
    icon: "/icons/shield-check.svg", // Using existing icon
    roles: [
      "Electrical Engineer",
      "Electronics Engineer",
      "Controls Engineer"
    ]
  },
  {
    title: "Civil & Construction",
    icon: "/icons/briefcase-02.svg", // Using existing icon
    roles: [
      "Civil Engineer",
      "Structural Engineer",
      "Construction Project Engineer"
    ]
  },
  {
    title: "Chemical & Process",
    icon: "/icons/tool.svg", // Using existing icon
    roles: [
      "Chemical Engineer",
      "Process Engineer",
      "Process Safety Engineer"
    ]
  },
  {
    title: "Quality & Safety",
    icon: "/icons/data.svg", // Using existing icon
    roles: [
      "Quality Assurance Engineer",
      "Reliability Engineer",
      "Safety Engineer"
    ]
  },
  {
    title: "Program & Program Management",
    icon: "/icons/code.svg", // Using existing icon
    roles: [
      "Project Manager",
      "Engineering Manager",
      "Technical Program Manager"
    ]
  }
];

export default function EngineeringRoles() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center px-16 py-36 relative size-full overflow-visible" data-name="Section">
      <div className="content-stretch flex flex-col gap-[104px] items-center justify-end relative shrink-0 w-full" data-name="Content">
        {/* Header Section */}
        <div className="content-stretch flex flex-col gap-6 items-center justify-center relative shrink-0 w-full" data-name="Subhead Section">
          <div className="content-stretch flex flex-col gap-4 items-center justify-center relative shrink-0 w-full" data-name="Top">
            <Tagline text="roles & specialties" />
            <div className="font-['Aptos:Semibold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#0f1012] text-[54px] text-center text-nowrap tracking-[-3.24px]">
              <p className="leading-[54px] whitespace-pre">Engineering roles we'll help you find</p>
            </div>
          </div>
        </div>

        {/* Grid Section - 3x2 CSS Grid Layout */}
        <div className="gap-6 grid grid-cols-[repeat(3,_minmax(0px,_1fr))] grid-rows-[repeat(2,_minmax(0px,_1fr))] h-[547px] relative shrink-0 w-full" data-name="Grid">
          {/* C Flare Background */}
          <div className="absolute h-[577px] left-[-331px] top-[-145px] w-[591px] pointer-events-none z-0" data-name="C Flare">
            <div className="absolute inset-[-19.76%_-19.29%]">
              <Image alt="" className="block max-w-none size-full" src={imgCFlare} width={591} height={577} />
            </div>
          </div>

          {/* Engineering Role Cards */}
          {engineeringRoles.map((role, index) => {
            const gridPositions = [
              "[grid-area:1_/_1]", // row 1, col 1
              "[grid-area:1_/_2]", // row 1, col 2
              "[grid-area:1_/_3]", // row 1, col 3
              "[grid-area:2_/_1]", // row 2, col 1
              "[grid-area:2_/_2]", // row 2, col 2
              "[grid-area:2_/_3]"  // row 2, col 3
            ];

            return (
              <div
                key={index}
                className={`${gridPositions[index]} bg-white box-border content-stretch flex flex-col items-start justify-between overflow-clip px-8 py-10 relative rounded-[6px] shrink-0 transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer group`}
                data-name="Engineering Role Card"
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
            );
          })}
        </div>
      </div>
    </div>
  );
}