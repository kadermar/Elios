"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function SubmitResume() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    receiveEmails: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="bg-[#f4f4f4] content-stretch flex flex-col items-center justify-start relative size-full">
      <Navigation />
      <div className="content-stretch flex flex-col h-[1002px] items-center justify-center mt-[174px] relative shrink-0 w-full">
        <div className="content-stretch flex gap-[140px] items-center justify-start max-w-[1638px] relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-[70px] items-start justify-start relative shrink-0 w-[694px]">
            <div className="content-stretch flex flex-col gap-10 items-start justify-start leading-[0] not-italic relative shrink-0 text-[#09141f] w-full">
              <div className="font-aptos font-semibold relative shrink-0 text-[96px] tracking-[-5.76px] w-full">
                <p className="leading-[96px]">Submit Your Resume</p>
              </div>
              <div className="font-aptos font-normal relative shrink-0 text-[24px] w-full">
                <p className="leading-[32px]">Submit your resume once and let Elios do the work. You'll receive personalized job alerts and exclusive opportunities directly by email—so you never miss your next career move.</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-9 items-start justify-start relative shrink-0 w-[549px]">
              <div className="content-stretch flex gap-4 items-center justify-center relative shrink-0 w-full">
                <div className="bg-[#ffdc6a] box-border content-stretch flex flex-col gap-2.5 items-center justify-center overflow-clip px-1 py-1.5 relative rounded-[100px] shrink-0 size-[26px]">
                  <div className="relative shrink-0 size-3">
                    <Image alt="" src="/request-talent-frame-icon.svg" width={12} height={12} className="block max-w-none size-full" />
                  </div>
                </div>
                <div className="basis-0 content-stretch flex flex-col gap-4 grow items-start justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[18px]">
                  <div className="font-aptos font-bold relative shrink-0 text-[#09141f] w-full">
                    <p className="leading-[24px]">Stay Ahead of Openings</p>
                  </div>
                  <div className="font-aptos font-normal relative shrink-0 text-[#535960] w-full">
                    <p className="leading-[24px]">Get instant job notifications tailored to your skills and career goals.</p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-4 items-center justify-center relative shrink-0 w-full">
                <div className="bg-[#ffdc6a] box-border content-stretch flex flex-col gap-2.5 items-center justify-center overflow-clip px-1 py-1.5 relative rounded-[100px] shrink-0 size-[26px]">
                  <div className="relative shrink-0 size-3">
                    <Image alt="" src="/request-talent-frame-icon.svg" width={12} height={12} className="block max-w-none size-full" />
                  </div>
                </div>
                <div className="basis-0 content-stretch flex flex-col gap-4 grow items-start justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[18px]">
                  <div className="font-aptos font-bold relative shrink-0 text-[#09141f] w-full">
                    <p className="leading-[24px]">Access Exclusive Opportunities</p>
                  </div>
                  <div className="font-aptos font-normal relative shrink-0 text-[#535960] w-full">
                    <p className="leading-[24px]">Be considered for roles not always posted publicly.</p>
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
                    placeholder="Albert"
                    className="basis-0 font-aptos font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#707579] text-[16px] leading-[24px] bg-transparent border-none outline-none placeholder:text-[#707579] w-full"
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
                    placeholder="Einstein"
                    className="basis-0 font-aptos font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#707579] text-[16px] leading-[24px] bg-transparent border-none outline-none placeholder:text-[#707579] w-full"
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
                    placeholder="albert.einstein@email.com"
                    className="basis-0 font-aptos font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#707579] text-[16px] leading-[24px] bg-transparent border-none outline-none placeholder:text-[#707579] w-full"
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
                    className="basis-0 font-aptos font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#707579] text-[16px] leading-[24px] bg-transparent border-none outline-none placeholder:text-[#707579] w-full"
                  />
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-3 items-start justify-start relative shrink-0 w-full">
              <div className="basis-0 content-stretch flex flex-col gap-2.5 grow items-start justify-start min-h-px min-w-px relative shrink-0">
                <div className="font-aptos font-bold leading-[0] not-italic relative shrink-0 text-[#09141f] text-[16px] w-full">
                  <p className="leading-[24px]">Upload Resume</p>
                </div>
                <label className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-5 py-[26px] relative rounded-[15px] shrink-0 w-full cursor-pointer">
                  <div aria-hidden="true" className="absolute border border-[#d5d5d5] border-dashed inset-0 pointer-events-none rounded-[15px]" />
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file && file.size <= 5 * 1024 * 1024) {
                        console.log('File selected:', file.name);
                      } else if (file) {
                        alert('File size must be less than 5MB');
                      }
                    }}
                  />
                  <div className="relative shrink-0 size-6">
                    <Image alt="" src="/upload-icon.svg" width={24} height={24} className="block max-w-none size-full" />
                  </div>
                  <div className="font-aptos font-bold leading-[0] min-w-full not-italic relative shrink-0 text-[#09141f] text-[16px] text-center" style={{ width: "min-content" }}>
                    <p className="leading-[24px]">Drag or drop your resume here</p>
                  </div>
                  <div className="font-aptos font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[#707579] text-[16px] text-center" style={{ width: "min-content" }}>
                    <p className="leading-[24px]">Accepted file types: .pdf, .doc, .docx (5MB Max)</p>
                  </div>
                </label>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-3 items-start justify-start relative shrink-0 w-full">
              <div className="content-stretch flex gap-3 items-center justify-center relative shrink-0 w-full">
                <div className="bg-white relative rounded-[4px] shrink-0 size-[26px]">
                  <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center overflow-clip px-1 py-1.5 size-[26px]" />
                  <div aria-hidden="true" className="absolute border border-[#d5d5d5] border-solid inset-0 pointer-events-none rounded-[4px]" />
                  <input
                    type="checkbox"
                    name="receiveEmails"
                    checked={formData.receiveEmails}
                    onChange={handleInputChange}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />
                  {formData.receiveEmails && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                        <path d="M1 5L5 9L13 1" stroke="#09141f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  )}
                </div>
                <div className="basis-0 font-aptos font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#09141f] text-[14px]">
                  <p className="leading-[24px]">Yes, I want to receive emails of job offers</p>
                </div>
              </div>
            </div>
            <button type="submit" className="bg-[#fa6a20] box-border content-stretch flex gap-2 items-center justify-center px-5 py-4 relative rounded-[8px] shrink-0 hover:bg-[#e85a10] transition-colors">
              <div className="font-aptos font-semibold leading-[0] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white">
                <p className="leading-[20px] whitespace-pre">Submit Resume</p>
              </div>
              <div className="relative shrink-0 size-3">
                <div className="absolute inset-[15.67%_15%]">
                  <div className="absolute inset-[-7.8%_-7.65%_-7.8%_-7.64%]">
                    <Image alt="" src="/book-demo-nav-arrow.svg" width={12} height={12} className="block max-w-none size-full" />
                  </div>
                </div>
              </div>
            </button>
            <div className="font-aptos font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[#535960] text-[14px]" style={{ width: "min-content" }}>
              <p className="leading-[22px]">
                <span className>{`By clicking "Submit" I agree to the terms and conditions of our `}</span>
                <a className="[text-decoration-skip-ink:none] [text-underline-position:from-font] cursor-pointer decoration-solid underline hover:text-[#fa6a20]" href="/privacy">
                  <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid leading-[22px] text-[#535960]">
                    Privacy Statement
                  </span>
                </a>
                <span className>. You can opt-out at any time. By opting in to email and/or text message alerts, you agree to receive job notifications and career opportunities from Elios. Message and data rates may apply. You can opt out at any time</span>
              </p>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}