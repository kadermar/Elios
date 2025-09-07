"use client";

import React from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

// Job detail page assets
const imgEliosLogo = "http://localhost:3845/assets/45fb82d91c1f8d6c272b7a05da7d8728eb3cf5db.svg";
const imgCarat = "http://localhost:3845/assets/573932348127699381859fe288dac033a32dfbc4.svg";
const imgNavArrow = "http://localhost:3845/assets/e0fbade973505445677298e8ee81b697bdef37ff.svg";
const imgCarat1 = "http://localhost:3845/assets/06dc1c9a9ef39425b34ab6d4636bc2f449e15c79.svg";
const imgUnion = "http://localhost:3845/assets/2ba8325838dddcc74ed6f59400fba2b0b0ae14ba.svg";
const imgFrame = "http://localhost:3845/assets/98d99b647a22d791128bf6d819358dfaa6c1dadf.svg";
const imgFrame1 = "http://localhost:3845/assets/ff3f2a2a1a6a4f4e2418232e8f90c465436d19ff.svg";

// Sample job data - in a real app this would come from an API or database
const jobData = {
  "engineering-tech": {
    title: "Engineering Tech",
    company: "Amplify Change",
    location: "Methuen, MA",
    type: "Full-time",
    salary: "$80,000 - $91,000",
    description: `At Amplify Change, we're building the next generation of scalable platforms that power global businesses. Our engineering team thrives at the intersection of hardware and software, solving complex technical problems with elegant, future-proof solutions.

Role Overview:
We are seeking a Technology Engineer to join our fast-growing team. You'll be responsible for designing, implementing, and optimizing systems that support both internal operations and customer-facing platforms. This role requires a blend of strong technical expertise, problem-solving skills, and a collaborative mindset.

Key Responsibilities:
• Design, develop, and maintain scalable systems and infrastructure.
• Collaborate with product and design teams to translate requirements into technical solutions.
• Debug, troubleshoot, and optimize code for performance and reliability.
• Support CI/CD pipelines, cloud deployments, and system monitoring tools.
• Stay up to date with emerging technologies and propose opportunities for innovation.
• Mentor junior engineers and contribute to technical best practices.

Qualifications:
• Bachelor's degree in Computer Science, Engineering, or equivalent experience.
• 3+ years of experience in software engineering, systems engineering, or related technical roles.
• Strong proficiency in at least one modern programming language (Python, Go, Java, or C++).
• Hands-on experience with cloud platforms (AWS, GCP, or Azure).
• Familiarity with containerization (Docker, Kubernetes).
• Excellent problem-solving, communication, and teamwork skills.

Nice to Have:
• Experience with edge computing or IoT systems.
• Background in performance tuning and distributed systems.
• Contributions to open-source projects.

What We Offer:
• Competitive salary and equity package.
• Flexible hybrid work environment.
• Health, dental, and vision insurance.
• Professional development budget for training, conferences, and certifications.
• Collaborative culture with opportunities to shape the company's technical direction.`
  }
};

interface JobPageProps {
  params: { slug: string };
}

export default function JobDetailPage({ params }: JobPageProps) {
  const job = jobData[params.slug as keyof typeof jobData] || jobData["engineering-tech"];

  return (
    <div className="bg-[#f4f4f4] content-stretch flex flex-col items-center justify-start relative size-full">
      <Navigation />
      
      {/* Breadcrumb and Job Header */}
      <div className="box-border content-stretch flex flex-col items-center justify-start px-4 md:px-0 py-[70px] relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-10 items-start justify-start relative shrink-0 w-full max-w-[1638px]">
          <div className="content-stretch flex gap-1.5 items-center justify-start relative shrink-0">
            <div className="font-aptos font-semibold leading-[0] not-italic relative shrink-0 text-[#535960] text-[16px] text-center text-nowrap">
              <p className="leading-[22px] whitespace-pre">Jobs</p>
            </div>
            <div className="relative shrink-0 size-3.5">
              <img alt="" className="block max-w-none size-full" src={imgCarat1} />
            </div>
            <div className="font-aptos font-semibold leading-[0] not-italic relative shrink-0 text-[#09141f] text-[16px] text-center text-nowrap">
              <p className="leading-[22px] whitespace-pre">{job.title}</p>
            </div>
          </div>
          
          <div className="content-stretch flex flex-col gap-4 items-start justify-start relative shrink-0 w-full">
            <div className="h-[35px] relative shrink-0 w-[36.53px]">
              <img alt="" className="block max-w-none size-full" src={imgUnion} />
            </div>
            <div className="content-stretch flex flex-col gap-5 items-start justify-start relative shrink-0 w-full">
              <div className="flex flex-col font-aptos font-semibold h-[82px] justify-center leading-[0] not-italic relative shrink-0 text-[#09141f] text-[32px] md:text-[48px] lg:text-[64px] tracking-[-1.9px] md:tracking-[-2.9px] lg:tracking-[-3.84px] w-full">
                <p className="leading-[48px] md:leading-[64px] lg:leading-[96px]">{job.title}</p>
              </div>
              <div className="content-stretch flex flex-col gap-5 items-start justify-start relative shrink-0 w-full">
                <div className="content-stretch flex flex-wrap gap-1 items-center justify-start relative shrink-0">
                  <div className="font-aptos leading-[0] not-italic relative shrink-0 text-[#09141f] text-[18px] md:text-[20px] text-nowrap">
                    <p className="leading-[24px] whitespace-pre">{job.company}</p>
                  </div>
                  <div className="font-inter font-normal leading-[0] not-italic relative shrink-0 text-[#535960] text-[14px] text-nowrap">
                    <p className="leading-[24px] whitespace-pre">·</p>
                  </div>
                  <div className="content-stretch flex gap-0.5 items-center justify-center relative shrink-0">
                    <div className="relative shrink-0 size-3.5">
                      <img alt="" className="block max-w-none size-full" src={imgFrame} />
                    </div>
                    <div className="font-aptos leading-[0] not-italic relative shrink-0 text-[#09141f] text-[18px] md:text-[20px] text-nowrap">
                      <p className="leading-[24px] whitespace-pre">{job.location}</p>
                    </div>
                  </div>
                  <div className="font-inter font-normal leading-[0] not-italic relative shrink-0 text-[#535960] text-[14px] text-nowrap">
                    <p className="leading-[24px] whitespace-pre">·</p>
                  </div>
                  <div className="content-stretch flex gap-0.5 items-center justify-center relative shrink-0">
                    <div className="font-aptos leading-[0] not-italic relative shrink-0 text-[#09141f] text-[18px] md:text-[20px] text-nowrap">
                      <p className="leading-[24px] whitespace-pre">{job.type}</p>
                    </div>
                  </div>
                </div>
                <div className="font-aptos leading-[0] min-w-full not-italic relative shrink-0 text-[#09141f] text-[18px] md:text-[20px]" style={{ width: "min-content" }}>
                  <p className="leading-[24px]">{job.salary}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="content-stretch flex gap-3 items-start justify-start relative shrink-0">
            <div className="bg-[#fa6a20] box-border content-stretch flex gap-2 items-center justify-center px-6 py-4 relative rounded-[8px] self-stretch shrink-0 cursor-pointer hover:bg-[#e85a10] transition-colors">
              <div className="font-aptos font-semibold leading-[0] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white">
                <p className="leading-[20px] whitespace-pre">Apply Now</p>
              </div>
            </div>
            <div className="bg-white box-border content-stretch flex gap-2 items-center justify-center px-6 py-4 relative rounded-[8px] shrink-0 cursor-pointer hover:bg-gray-50 transition-colors">
              <div className="relative shrink-0 size-6">
                <img alt="" className="block max-w-none size-full" src={imgFrame1} />
              </div>
              <div className="font-aptos font-semibold leading-[0] not-italic relative shrink-0 text-[#09141f] text-[14px] text-center text-nowrap">
                <p className="leading-[20px] whitespace-pre">View Company Site</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Job Description */}
      <div className="bg-white box-border content-stretch flex flex-col items-center justify-center px-4 md:px-0 py-[70px] relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[26px] items-start justify-start relative shrink-0 w-full max-w-[1638px]">
          <div className="font-inter font-normal leading-[0] not-italic relative shrink-0 text-[#404453] text-[16px] w-full max-w-[1074px] whitespace-pre-line">
            <div className="font-aptos leading-[24px] text-[#404453]">
              {job.description.split('\n').map((paragraph, index) => (
                <p key={index} className="mb-6 last:mb-0">
                  {paragraph.includes('•') ? (
                    <span>
                      {paragraph.split('•').map((item, itemIndex) => (
                        itemIndex === 0 ? (
                          <span key={itemIndex} className="font-aptos font-bold">{item}</span>
                        ) : (
                          <span key={itemIndex} className="block ml-4 mb-2">• {item}</span>
                        )
                      ))}
                    </span>
                  ) : (
                    paragraph.endsWith(':') ? (
                      <span className="font-aptos font-bold">{paragraph}</span>
                    ) : (
                      paragraph
                    )
                  )}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}