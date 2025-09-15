"use client";

import React, { useState } from 'react';
import Image from 'next/image';

interface GridContent {
  id: string;
  title: string;
  description: string;
  image: string;
  bulletPoints: {
    title: string;
    description: string;
  }[];
}

const gridContent: GridContent[] = [
  {
    id: 'staff-augmentation',
    title: 'Staff Augmentation',
    description: 'Elios provides fast, flexible staff augmentation to help you meet urgent project deadlines or cover short-term resource gaps. Our recruiters move quickly to identify qualified talent, ensuring you have the right skills on your team exactly when you need them—without long delays or overcommitment.',
    image: '/assets/staffing-warp-1.png',
    bulletPoints: [
      {
        title: 'Rapid response:',
        description: ' Curated shortlists delivered quickly to minimize downtime.'
      },
      {
        title: 'Flexible contracts:',
        description: ' Scale talent up or down as your projects demand.'
      },
      {
        title: 'Skill precision:',
        description: ' Recruiters stay engaged to ensure smooth onboarding and performance.'
      }
    ]
  },
  {
    id: 'permanent-hire',
    title: 'Permanent Hire',
    description: 'Permanent hires require a different level of care—finding not just the right skills, but the right cultural and long-term fit. Elios recruiters focus on understanding what success looks like today and how the role will evolve, ensuring candidates are positioned to thrive now and in the future.',
    image: '/assets/staffing-warp-2.png',
    bulletPoints: [
      {
        title: 'Cultural alignment:',
        description: ' Deep understanding of company values and team dynamics.'
      },
      {
        title: 'Long-term focus:',
        description: ' Candidates positioned for growth and career advancement.'
      },
      {
        title: 'Comprehensive vetting:',
        description: ' Multi-layered evaluation process for lasting success.'
      }
    ]
  },
  {
    id: 'rpo',
    title: 'RPO',
    description: 'Our RPO model integrates Elios recruiters and processes directly into your team, providing scale and consistency without the overhead of managing everything internally. We tailor workflows to your business, combining recruiter expertise and our Insights platform to give you speed, visibility, and efficiency at scale.',
    image: '/assets/staffing-warp-3.png',
    bulletPoints: [
      {
        title: 'Embedded recruiters:',
        description: ' Experienced specialists function as an extension of your HR/TA team.'
      },
      {
        title: 'Scalable delivery:',
        description: ' Handle large volumes of hiring without compromising quality.'
      },
      {
        title: 'Standardized process:',
        description: ' Structured workflows for intake, interviews, and feedback capture.'
      },
      {
        title: 'Data-driven visibility:',
        description: ' Real-time dashboards for funnel health, time-to-fill, and bottlenecks.'
      }
    ]
  },
  {
    id: 'executive-search',
    title: 'Executive Search',
    description: 'Executive and leadership hires require discretion, rigor, and a tailored approach. Elios delivers a white-glove search process—combining deep networks, structured evaluations, and careful relationship-building to secure leaders who will shape the future of your business.',
    image: '/assets/staffing-warp-4.png',
    bulletPoints: [
      {
        title: 'Discreet outreach:',
        description: ' Engaging top leadership candidates with professionalism and care.'
      },
      {
        title: 'Proven methodology:',
        description: ' Multi-step evaluations with strengths/risks analysis for each finalist.'
      },
      {
        title: 'Leadership fit:',
        description: ' Focus on vision, strategic alignment, and organizational impact.'
      },
      {
        title: 'High-touch service:',
        description: ' Personalized support throughout sourcing, interviews, and offer close.'
      }
    ]
  }
];

interface StaffingGridProps {
  activeTab?: string;
}

export default function StaffingGrid({ activeTab = 'staff-augmentation' }: StaffingGridProps) {
  const [selectedContent] = useState(gridContent);

  return (
    <div className="relative w-full overflow-visible">
      {/* Background C Flare */}
      <div className="absolute h-[727px] left-[-233px] top-[137px] w-[745px] pointer-events-none">
        <div className="absolute inset-[-15.68%_-15.3%]">
          <Image
            src="/assets/staffing-c-flare.svg"
            alt=""
            width={745}
            height={727}
            className="w-full h-full object-contain opacity-80"
          />
        </div>
      </div>

      {/* Grid Content */}
      <div className="gap-6 grid grid-cols-2 grid-rows-4 relative w-full">
        {selectedContent.map((content, index) => (
          <React.Fragment key={content.id}>
            {/* Image Column */}
            <div className={`${index === 0 ? '[grid-area:1_/_1]' : index === 1 ? '[grid-area:2_/_1]' : index === 2 ? '[grid-area:3_/_1]' : '[grid-area:4_/_1]'} box-border flex flex-col gap-8 items-start justify-start overflow-clip p-[16px] relative rounded-[6px] shrink-0`}>
              <div className="basis-0 bg-center bg-cover bg-no-repeat grow min-h-px min-w-px rounded-[4px] shrink-0 w-full h-[584px]">
                <Image
                  src={content.image}
                  alt={content.title}
                  width={612}
                  height={552}
                  className="w-full h-full object-cover rounded-[4px]"
                />
              </div>
            </div>

            {/* Text Column */}
            <div className={`${index === 0 ? '[grid-area:1_/_2]' : index === 1 ? '[grid-area:2_/_2]' : index === 2 ? '[grid-area:3_/_2]' : '[grid-area:4_/_2]'} box-border flex flex-col gap-9 items-start justify-center px-6 py-0 relative shrink-0`}>
              {/* Title */}
              <div className="font-aptos-semibold leading-[44px] not-italic relative shrink-0 text-[#0f1012] text-[44px] tracking-[-2.64px]">
                {content.title}
              </div>

              {/* Description */}
              <div className="font-aptos-regular leading-[24px] not-italic relative shrink-0 text-[#595959] text-[20px]">
                {content.description}
              </div>

              {/* Bullet Points */}
              <div className="flex flex-col gap-6 items-start justify-start relative shrink-0 w-full">
                {content.bulletPoints.map((point, pointIndex) => (
                  <div key={pointIndex} className="relative shrink-0 w-full">
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-[#0f1012] rounded-full mt-2 flex-shrink-0" />
                      <div className="leading-[24px] text-[20px] text-[#0f1012]">
                        <span className="font-aptos-semibold">{point.title}</span>
                        <span className="font-aptos-regular">{point.description}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}