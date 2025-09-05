"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import BookDemoNavigation from "../components/BookDemoNavigation";

const imgFrame = "/request-talent-frame-icon.svg";
const imgNavArrow = "/book-demo-nav-arrow.svg";
const imgEliosLogo1 = "/request-talent-footer-logo.svg";
const imgFooterFacebook = "/request-talent-footer-facebook.svg";
const imgFooterTwitter = "/request-talent-footer-twitter.svg";
const imgFooterInstagram = "/book-demo-footer-instagram.svg";
const imgFooterLinkedIn = "/request-talent-footer-linkedin.svg";

export default function SubmitResume() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    currentRole: "",
    experienceLevel: "",
    interestedRoles: "",
    location: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="bg-[#f4f4f4] content-stretch flex flex-col items-center justify-start relative size-full" data-name="Elios - Submit Resume">
      <BookDemoNavigation />
      <div className="content-stretch flex flex-col h-[1002px] items-center justify-center relative shrink-0 w-full" data-name="Hero">
        <div className="content-stretch flex gap-[140px] items-center justify-start max-w-[1638px] relative shrink-0 w-full" data-name="Wrapper">
          <div className="content-stretch flex flex-col gap-[70px] items-start justify-start relative shrink-0 w-[694px]" data-name="Hero Text">
            <div className="content-stretch flex flex-col gap-10 items-start justify-start leading-[0] not-italic relative shrink-0 text-[#09141f] w-full" data-name="Top">
              <div className="font-aptos font-semibold relative shrink-0 text-[96px] tracking-[-5.76px] w-full">
                <p className="leading-[96px]">Submit Your Resume</p>
              </div>
              <div className="font-aptos font-normal relative shrink-0 text-[24px] w-full">
                <p className="leading-[32px]">Get matched with top opportunities that align with your skills, experience, and career goals.</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-9 items-start justify-start relative shrink-0 w-[549px]">
              <div className="content-stretch flex gap-4 items-center justify-center relative shrink-0 w-full">
                <div className="bg-[#ffdc6a] box-border content-stretch flex flex-col gap-2.5 items-center justify-center overflow-clip px-1 py-1.5 relative rounded-[100px] shrink-0 size-[26px]" data-name="Frame">
                  <div className="relative shrink-0 size-3" data-name="Frame">
                    <Image alt="" src={imgFrame} width={12} height={12} className="block max-w-none size-full" />
                  </div>
                </div>
                <div className="basis-0 content-stretch flex flex-col gap-4 grow items-start justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[18px]">
                  <div className="font-aptos font-bold relative shrink-0 text-[#09141f] w-full">
                    <p className="leading-[24px]">AI-Powered Job Matching</p>
                  </div>
                  <div className="font-aptos font-normal relative shrink-0 text-[#535960] w-full">
                    <p className="leading-[24px]">Our advanced matching algorithm analyzes your skills, experience, and preferences to recommend the most relevant opportunities.</p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-4 items-center justify-center relative shrink-0 w-full">
                <div className="bg-[#ffdc6a] box-border content-stretch flex flex-col gap-2.5 items-center justify-center overflow-clip px-1 py-1.5 relative rounded-[100px] shrink-0 size-[26px]" data-name="Frame">
                  <div className="relative shrink-0 size-3" data-name="Frame">
                    <Image alt="" src={imgFrame} width={12} height={12} className="block max-w-none size-full" />
                  </div>
                </div>
                <div className="basis-0 content-stretch flex flex-col gap-4 grow items-start justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[18px]">
                  <div className="font-aptos font-bold relative shrink-0 text-[#09141f] w-full">
                    <p className="leading-[24px]">Access Hidden Opportunities</p>
                  </div>
                  <div className="font-aptos font-normal relative shrink-0 text-[#535960] w-full">
                    <p className="leading-[24px]">Get exclusive access to roles not advertised elsewhere, with direct connections to hiring managers and decision makers.</p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-4 items-center justify-center relative shrink-0 w-full">
                <div className="bg-[#ffdc6a] box-border content-stretch flex flex-col gap-2.5 items-center justify-center overflow-clip px-1 py-1.5 relative rounded-[100px] shrink-0 size-[26px]" data-name="Frame">
                  <div className="relative shrink-0 size-3" data-name="Frame">
                    <Image alt="" src={imgFrame} width={12} height={12} className="block max-w-none size-full" />
                  </div>
                </div>
                <div className="basis-0 content-stretch flex flex-col gap-4 grow items-start justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[18px]">
                  <div className="font-aptos font-bold relative shrink-0 text-[#09141f] w-full">
                    <p className="leading-[24px]">Personalized Career Support</p>
                  </div>
                  <div className="font-aptos font-normal relative shrink-0 text-[#535960] w-full">
                    <p className="leading-[24px]">Receive personalized guidance from our expert recruiters throughout your job search and interview process.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="bg-white box-border content-stretch flex flex-col gap-9 items-start justify-start p-[60px] relative rounded-[20px] shrink-0 w-[756px]">
            <div className="content-stretch flex gap-3 items-start justify-start relative shrink-0 w-full">
              <div className="basis-0 content-stretch flex flex-col gap-2.5 grow items-start justify-start min-h-px min-w-px relative shrink-0">
                <div className="font-aptos font-bold leading-[0] not-italic relative shrink-0 text-[#09141f] text-[16px] w-full">
                  <p className="leading-[24px]">First Name</p>
                </div>
                <div className="bg-[#fcfcfc] box-border content-stretch flex gap-2.5 items-center justify-center px-5 py-[26px] relative rounded-[15px] shrink-0 w-full">
                  <div aria-hidden="true" className="absolute border border-[#d5d5d5] border-solid inset-0 pointer-events-none rounded-[15px]" />
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="First Name"
                    className="basis-0 font-aptos font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#707579] text-[16px] leading-[24px] bg-transparent border-none outline-none placeholder:text-[#707579]"
                  />
                </div>
              </div>
              <div className="basis-0 content-stretch flex flex-col gap-2.5 grow items-start justify-start min-h-px min-w-px relative shrink-0">
                <div className="font-aptos font-bold leading-[0] not-italic relative shrink-0 text-[#09141f] text-[16px] w-full">
                  <p className="leading-[24px]">Last Name</p>
                </div>
                <div className="bg-[#fcfcfc] box-border content-stretch flex gap-2.5 items-center justify-center px-5 py-[26px] relative rounded-[15px] shrink-0 w-full">
                  <div aria-hidden="true" className="absolute border border-[#d5d5d5] border-solid inset-0 pointer-events-none rounded-[15px]" />
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Last Name"
                    className="basis-0 font-aptos font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#707579] text-[16px] leading-[24px] bg-transparent border-none outline-none placeholder:text-[#707579]"
                  />
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-3 items-start justify-start relative shrink-0 w-full">
              <div className="basis-0 content-stretch flex flex-col gap-2.5 grow items-start justify-start min-h-px min-w-px relative shrink-0">
                <div className="font-aptos font-bold leading-[0] not-italic relative shrink-0 text-[#09141f] text-[16px] w-full">
                  <p className="leading-[24px]">Email Address</p>
                </div>
                <div className="bg-[#fcfcfc] box-border content-stretch flex gap-2.5 items-center justify-center px-5 py-[26px] relative rounded-[15px] shrink-0 w-full">
                  <div aria-hidden="true" className="absolute border border-[#d5d5d5] border-solid inset-0 pointer-events-none rounded-[15px]" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@domain.com"
                    className="basis-0 font-aptos font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#707579] text-[16px] leading-[24px] bg-transparent border-none outline-none placeholder:text-[#707579]"
                  />
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-3 items-start justify-start relative shrink-0 w-full">
              <div className="basis-0 content-stretch flex flex-col gap-2.5 grow items-start justify-start min-h-px min-w-px relative shrink-0">
                <div className="font-aptos font-bold leading-[0] not-italic relative shrink-0 text-[#09141f] text-[16px] w-full">
                  <p className="leading-[24px]">Phone Number</p>
                </div>
                <div className="bg-[#fcfcfc] box-border content-stretch flex gap-2.5 items-center justify-center px-5 py-[26px] relative rounded-[15px] shrink-0 w-full">
                  <div aria-hidden="true" className="absolute border border-[#d5d5d5] border-solid inset-0 pointer-events-none rounded-[15px]" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="000-000-0000"
                    className="basis-0 font-aptos font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#707579] text-[16px] leading-[24px] bg-transparent border-none outline-none placeholder:text-[#707579]"
                  />
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-3 items-start justify-start relative shrink-0 w-full">
              <div className="basis-0 content-stretch flex flex-col gap-2.5 grow items-start justify-start min-h-px min-w-px relative shrink-0">
                <div className="font-aptos font-bold leading-[0] not-italic relative shrink-0 text-[#09141f] text-[16px] w-full">
                  <p className="leading-[24px]">Current Role</p>
                </div>
                <div className="bg-[#fcfcfc] box-border content-stretch flex gap-2.5 items-center justify-center px-5 py-[26px] relative rounded-[15px] shrink-0 w-full">
                  <div aria-hidden="true" className="absolute border border-[#d5d5d5] border-solid inset-0 pointer-events-none rounded-[15px]" />
                  <input
                    type="text"
                    name="currentRole"
                    value={formData.currentRole}
                    onChange={handleInputChange}
                    placeholder="e.g. Senior Software Engineer"
                    className="basis-0 font-aptos font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#707579] text-[16px] leading-[24px] bg-transparent border-none outline-none placeholder:text-[#707579]"
                  />
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-3 items-start justify-start relative shrink-0 w-full">
              <div className="basis-0 content-stretch flex flex-col gap-2.5 grow items-start justify-start min-h-px min-w-px relative shrink-0">
                <div className="font-aptos font-bold leading-[0] not-italic relative shrink-0 text-[#09141f] text-[16px] w-full">
                  <p className="leading-[24px]">Experience Level</p>
                </div>
                <div className="bg-[#fcfcfc] box-border content-stretch flex gap-2.5 items-center justify-center px-5 py-[26px] relative rounded-[15px] shrink-0 w-full">
                  <div aria-hidden="true" className="absolute border border-[#d5d5d5] border-solid inset-0 pointer-events-none rounded-[15px]" />
                  <select
                    name="experienceLevel"
                    value={formData.experienceLevel}
                    onChange={handleInputChange}
                    className="basis-0 font-aptos font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#707579] text-[16px] leading-[24px] bg-transparent border-none outline-none"
                  >
                    <option value="">Select Experience Level</option>
                    <option value="entry-level">Entry Level (0-2 years)</option>
                    <option value="mid-level">Mid Level (3-5 years)</option>
                    <option value="senior-level">Senior Level (6-10 years)</option>
                    <option value="executive">Executive (10+ years)</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-3 items-start justify-start relative shrink-0 w-full">
              <div className="basis-0 content-stretch flex flex-col gap-2.5 grow items-start justify-start min-h-px min-w-px relative shrink-0">
                <div className="font-aptos font-bold leading-[0] not-italic relative shrink-0 text-[#09141f] text-[16px] w-full">
                  <p className="leading-[24px]">Location Preference</p>
                </div>
                <div className="bg-[#fcfcfc] box-border content-stretch flex gap-2.5 items-center justify-center px-5 py-[26px] relative rounded-[15px] shrink-0 w-full">
                  <div aria-hidden="true" className="absolute border border-[#d5d5d5] border-solid inset-0 pointer-events-none rounded-[15px]" />
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="e.g. New York, NY or Remote"
                    className="basis-0 font-aptos font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#707579] text-[16px] leading-[24px] bg-transparent border-none outline-none placeholder:text-[#707579]"
                  />
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-3 items-start justify-start relative shrink-0 w-full">
              <div className="basis-0 content-stretch flex flex-col gap-2.5 grow items-start justify-start min-h-px min-w-px relative shrink-0">
                <div className="font-aptos font-bold leading-[0] not-italic relative shrink-0 text-[#09141f] text-[16px] w-full">
                  <p className="leading-[24px]">Types of Roles You're Interested In</p>
                </div>
                <div className="bg-[#fcfcfc] box-border content-stretch flex gap-2.5 items-center justify-center px-5 py-[26px] relative rounded-[15px] shrink-0 w-full">
                  <div aria-hidden="true" className="absolute border border-[#d5d5d5] border-solid inset-0 pointer-events-none rounded-[15px]" />
                  <textarea
                    name="interestedRoles"
                    value={formData.interestedRoles}
                    onChange={handleInputChange}
                    placeholder="e.g. Full Stack Development, Product Management, Data Science"
                    rows={3}
                    className="basis-0 font-aptos font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#707579] text-[16px] leading-[24px] bg-transparent border-none outline-none resize-none placeholder:text-[#707579]"
                  />
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-3 items-start justify-start relative shrink-0 w-full">
              <div className="basis-0 content-stretch flex flex-col gap-2.5 grow items-start justify-start min-h-px min-w-px relative shrink-0">
                <div className="font-aptos font-bold leading-[0] not-italic relative shrink-0 text-[#09141f] text-[16px] w-full">
                  <p className="leading-[24px]">Tell us about yourself</p>
                </div>
                <div className="bg-[#fcfcfc] box-border content-stretch flex gap-2.5 items-center justify-center px-5 py-[26px] relative rounded-[15px] shrink-0 w-full">
                  <div aria-hidden="true" className="absolute border border-[#d5d5d5] border-solid inset-0 pointer-events-none rounded-[15px]" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Share your key skills, achievements, and what you're looking for in your next role"
                    rows={4}
                    className="basis-0 font-aptos font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#707579] text-[16px] leading-[24px] bg-transparent border-none outline-none resize-none placeholder:text-[#707579]"
                  />
                </div>
              </div>
            </div>
            <button type="submit" className="bg-[#fa6a20] box-border content-stretch flex gap-2 items-center justify-center px-5 py-4 relative rounded-[8px] shrink-0 hover:bg-[#e85a10] transition-colors" data-name="Min Primary Button">
              <div className="font-aptos font-semibold leading-[0] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white">
                <p className="leading-[20px] whitespace-pre">Submit Resume</p>
              </div>
              <div className="relative shrink-0 size-3" data-name="Line Rounded/Arrow rigth">
                <div className="absolute inset-[15.67%_15%]" data-name="Arrow rigth">
                  <div className="absolute inset-[-7.8%_-7.65%_-7.8%_-7.64%]">
                    <Image alt="" src={imgNavArrow} width={12} height={12} className="block max-w-none size-full" />
                  </div>
                </div>
              </div>
            </button>
            <div className="font-aptos font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[#535960] text-[14px]" style={{ width: "min-content" }}>
              <p className="leading-[22px]">
                <span className>By clicking "Submit Resume" I agree to the terms and conditions of our </span>
                <a className="[text-decoration-skip-ink:none] [text-underline-position:from-font] cursor-pointer decoration-solid underline hover:text-[#fa6a20]" href="/privacy">
                  <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid leading-[22px] text-[#535960]">
                    Privacy Statement
                  </span>
                </a>
                <span className>. You can opt-out at any time. By opting in to email and/or text message alerts, you agree to receive job opportunities and career updates from Elios.</span>
              </p>
            </div>
          </form>
        </div>
      </div>
      <div className="bg-white box-border content-stretch flex flex-col gap-[72px] items-center justify-end overflow-clip px-[167px] py-[140px] relative shrink-0 w-full" data-name="Footer V2">
        <div className="content-stretch flex flex-col gap-[72px] items-start justify-start relative shrink-0 w-[1638px]">
          <div className="content-stretch flex gap-60 items-start justify-start relative shrink-0 w-full" data-name="Footer Top">
            <div className="content-stretch flex flex-col gap-[30px] items-start justify-start relative shrink-0 w-[516px]">
              <div className="h-[60px] relative shrink-0 w-[151.443px]" data-name="Elios Logo">
                <Image alt="Elios" src={imgEliosLogo1} width={151} height={60} className="block max-w-none size-full" />
              </div>
              <div className="font-aptos font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[#535960] text-[16px]" style={{ width: "min-content" }}>
                <p className="leading-[1.4]">Elios is a technology-driven, human-centered recruiting firm committed to helping businesses scale with top talent. We connect leading companies with highly qualified professionals across key industries.</p>
              </div>
              <div className="content-stretch flex gap-4 items-start justify-start relative shrink-0" data-name="Social Media Wrapper">
                <div className="relative shrink-0 size-[30px]" data-name="Social Media Icon Square/Facebook">
                  <div className="absolute bg-white inset-0 rounded-[4px]" data-name="Social Media Icon" />
                  <div className="absolute bottom-1/4 left-[36.36%] right-[36.36%] top-1/4" data-name="Facebook">
                    <Image alt="Facebook" src={imgFooterFacebook} width={8} height={15} className="block max-w-none size-full" />
                  </div>
                </div>
                <div className="relative shrink-0 size-[30px]" data-name="Social Media Icon Square/Twitter">
                  <div className="absolute bg-white inset-0 rounded-[4px]" data-name="Social Media Icon" />
                  <div className="absolute bottom-[29.72%] left-1/4 right-1/4 top-[29.72%]" data-name="Twitter">
                    <Image alt="Twitter" src={imgFooterTwitter} width={15} height={12} className="block max-w-none size-full" />
                  </div>
                </div>
                <div className="relative shrink-0 size-[30px]" data-name="Social Media Icon Square/Instagram">
                  <div className="absolute bg-white inset-0 rounded-[4px]" data-name="Social Media Icon" />
                  <div className="absolute inset-1/4" data-name="Instagram">
                    <Image alt="Instagram" src={imgFooterInstagram} width={15} height={15} className="block max-w-none size-full" />
                  </div>
                </div>
                <div className="relative shrink-0 size-[30px]" data-name="Social Media Icon Square/LinkedIn">
                  <Image alt="LinkedIn" src={imgFooterLinkedIn} width={30} height={30} className="block max-w-none size-full" />
                </div>
              </div>
            </div>
            <div className="basis-0 box-border content-stretch flex grow items-start justify-between min-h-px min-w-px pb-0 pt-7 px-0 relative shrink-0">
              <div className="content-stretch flex flex-col gap-8 items-start justify-start relative shrink-0" data-name="Footer Column">
                <div className="content-stretch flex flex-col gap-6 items-start justify-start relative shrink-0" data-name="Grid Column">
                  <div className="content-stretch flex gap-1.5 items-center justify-start relative shrink-0" data-name="Link">
                    <div className="font-aptos font-semibold leading-[0] not-italic relative shrink-0 text-[16px] text-black text-center text-nowrap">
                      <p className="leading-[14px] whitespace-pre">For Hiring Managers</p>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-1.5 items-center justify-start relative shrink-0" data-name="Link">
                    <div className="font-aptos font-normal leading-[0] not-italic relative shrink-0 text-[#535960] text-[16px] text-center text-nowrap">
                      <p className="leading-[14px] whitespace-pre">Elios Talent</p>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-1.5 items-center justify-start relative shrink-0" data-name="Link">
                    <div className="font-aptos font-normal leading-[0] not-italic relative shrink-0 text-[#535960] text-[16px] text-center text-nowrap">
                      <p className="leading-[14px] whitespace-pre">Elios Insights</p>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-1.5 items-center justify-start relative shrink-0" data-name="Link">
                    <div className="font-aptos font-normal leading-[0] not-italic relative shrink-0 text-[#535960] text-[16px] text-center text-nowrap">
                      <p className="leading-[14px] whitespace-pre">Industries Served</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-6 items-start justify-start relative shrink-0" data-name="Grid Column">
                <div className="content-stretch flex gap-1.5 items-center justify-start relative shrink-0 w-full" data-name="Link">
                  <div className="font-aptos font-semibold leading-[0] not-italic relative shrink-0 text-[16px] text-black text-center text-nowrap">
                    <p className="leading-[14px] whitespace-pre">For Candidates</p>
                  </div>
                </div>
                <div className="content-stretch flex gap-1.5 items-center justify-start relative shrink-0 w-full" data-name="Link">
                  <div className="font-aptos font-normal leading-[0] not-italic relative shrink-0 text-[#535960] text-[16px] text-center text-nowrap">
                    <p className="leading-[14px] whitespace-pre">Explore Jobs</p>
                  </div>
                </div>
                <div className="content-stretch flex gap-1.5 items-center justify-start relative shrink-0" data-name="Link">
                  <div className="font-aptos font-normal leading-[0] not-italic relative shrink-0 text-[#535960] text-[16px] text-center text-nowrap">
                    <p className="leading-[14px] whitespace-pre">Upload Resume</p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-6 items-start justify-start relative shrink-0" data-name="Grid Column">
                <div className="content-stretch flex gap-1.5 items-center justify-start relative shrink-0" data-name="Link">
                  <div className="font-aptos font-semibold leading-[0] not-italic relative shrink-0 text-[16px] text-black text-center text-nowrap">
                    <p className="leading-[14px] whitespace-pre">Company</p>
                  </div>
                </div>
                <div className="content-stretch flex gap-1.5 items-center justify-start relative shrink-0" data-name="Link">
                  <div className="font-aptos font-normal leading-[0] not-italic relative shrink-0 text-[#535960] text-[16px] text-center text-nowrap">
                    <p className="leading-[14px] whitespace-pre">About Us</p>
                  </div>
                </div>
                <div className="content-stretch flex gap-1.5 items-center justify-start relative shrink-0" data-name="Link">
                  <div className="font-aptos font-normal leading-[0] not-italic relative shrink-0 text-[#535960] text-[16px] text-center text-nowrap">
                    <p className="leading-[14px] whitespace-pre">Connect</p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-6 items-start justify-start relative shrink-0" data-name="Grid Column">
                <div className="content-stretch flex gap-1.5 items-center justify-start relative shrink-0" data-name="Link">
                  <div className="font-aptos font-semibold leading-[0] not-italic relative shrink-0 text-[16px] text-black text-center text-nowrap">
                    <p className="leading-[14px] whitespace-pre">Resources</p>
                  </div>
                </div>
                <div className="content-stretch flex gap-1.5 items-center justify-start relative shrink-0" data-name="Link">
                  <div className="font-aptos font-normal leading-[0] not-italic relative shrink-0 text-[#535960] text-[16px] text-center text-nowrap">
                    <p className="leading-[14px] whitespace-pre">Blog</p>
                  </div>
                </div>
                <div className="content-stretch flex gap-1.5 items-center justify-start relative shrink-0" data-name="Link">
                  <div className="font-aptos font-normal leading-[0] not-italic relative shrink-0 text-[#535960] text-[16px] text-center text-nowrap">
                    <p className="leading-[14px] whitespace-pre">Case Studies</p>
                  </div>
                </div>
                <div className="content-stretch flex gap-1.5 items-center justify-start relative shrink-0" data-name="Link">
                  <div className="font-aptos font-normal leading-[0] not-italic relative shrink-0 text-[#535960] text-[16px] text-center text-nowrap">
                    <p className="leading-[14px] whitespace-pre">FAQ</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
            <div className="flex flex-row items-center self-stretch">
              <div className="content-stretch flex gap-6 h-full items-center justify-start relative shrink-0">
                <div className="font-aptos font-normal leading-[0] not-italic relative shrink-0 text-[#535960] text-[16px] text-nowrap">
                  <p className="leading-[22px] whitespace-pre">© 2025 Elios, Inc. All Rights Reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}