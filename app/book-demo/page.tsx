"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const imgFrame = "/request-talent-frame-icon.svg";
const imgNavArrow = "/book-demo-nav-arrow.svg";

export default function BookDemo() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="bg-[#f4f4f4] content-stretch flex flex-col items-center justify-start relative size-full" data-name="Elios - Book Demo" data-node-id="102:1595">
      <Navigation />
      <div className="content-stretch flex flex-col h-[1002px] items-center justify-center mt-[174px] relative shrink-0 w-full" data-name="Hero" data-node-id="102:1651">
        <div className="content-stretch flex gap-[140px] items-center justify-start max-w-[1638px] relative shrink-0 w-full" data-name="Wrapper" data-node-id="102:1652">
          <div className="content-stretch flex flex-col gap-[70px] items-start justify-start relative shrink-0 w-[694px]" data-name="Hero Text" data-node-id="102:1674">
            <div className="content-stretch flex flex-col gap-10 items-start justify-start leading-[0] not-italic relative shrink-0 text-[#09141f] w-full" data-name="Top" data-node-id="102:1675">
              <div className="font-aptos font-semibold relative shrink-0 text-[96px] tracking-[-5.76px] w-full" data-node-id="102:1676">
                <p className="leading-[96px]">Book a Demo</p>
              </div>
              <div className="font-aptos font-normal relative shrink-0 text-[24px] w-full" data-node-id="102:1677">
                <p className="leading-[32px]">See Elios Insights in action and learn how it transforms hiring with speed, clarity, and confidence.</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-9 items-start justify-start relative shrink-0 w-[549px]" data-node-id="102:1678">
              <div className="content-stretch flex gap-4 items-center justify-center relative shrink-0 w-full" data-node-id="102:1679">
                <div className="bg-[#ffdc6a] box-border content-stretch flex flex-col gap-2.5 items-center justify-center overflow-clip px-1 py-1.5 relative rounded-[100px] shrink-0 size-[26px]" data-name="Frame" data-node-id="102:1680">
                  <div className="relative shrink-0 size-3" data-name="Frame" data-node-id="102:1681">
                    <Image alt="" src={imgFrame} width={12} height={12} className="block max-w-none size-full" />
                  </div>
                </div>
                <div className="basis-0 content-stretch flex flex-col gap-4 grow items-start justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[18px]" data-node-id="102:1683">
                  <div className="font-aptos font-bold relative shrink-0 text-[#09141f] w-full" data-node-id="102:1684">
                    <p className="leading-[24px]">Turn Static Data into Actionable Insights</p>
                  </div>
                  <div className="font-aptos font-normal relative shrink-0 text-[#535960] w-full" data-node-id="102:1685">
                    <p className="leading-[24px]">Watch how Elios transforms your ATS into a living intelligence engine that surfaces match-ready candidates and recruiter guidance you can act on instantly.</p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-4 items-center justify-center relative shrink-0 w-full" data-node-id="102:1686">
                <div className="bg-[#ffdc6a] box-border content-stretch flex flex-col gap-2.5 items-center justify-center overflow-clip px-1 py-1.5 relative rounded-[100px] shrink-0 size-[26px]" data-name="Frame" data-node-id="102:1687">
                  <div className="relative shrink-0 size-3" data-name="Frame" data-node-id="102:1688">
                    <Image alt="" src={imgFrame} width={12} height={12} className="block max-w-none size-full" />
                  </div>
                </div>
                <div className="basis-0 content-stretch flex flex-col gap-4 grow items-start justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[18px]" data-node-id="102:1690">
                  <div className="font-aptos font-bold relative shrink-0 text-[#09141f] w-full" data-node-id="102:1691">
                    <p className="leading-[24px]">Make Smarter, Data-Driven Decisions</p>
                  </div>
                  <div className="font-aptos font-normal relative shrink-0 text-[#535960] w-full" data-node-id="102:1692">
                    <p className="leading-[24px]">See how patterns in pipelines, feedback, and performance data translate into decisions that improve quality of hire and ROI.</p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-4 items-center justify-center relative shrink-0 w-full" data-node-id="102:1693">
                <div className="bg-[#ffdc6a] box-border content-stretch flex flex-col gap-2.5 items-center justify-center overflow-clip px-1 py-1.5 relative rounded-[100px] shrink-0 size-[26px]" data-name="Frame" data-node-id="102:1694">
                  <div className="relative shrink-0 size-3" data-name="Frame" data-node-id="102:1695">
                    <Image alt="" src={imgFrame} width={12} height={12} className="block max-w-none size-full" />
                  </div>
                </div>
                <div className="basis-0 content-stretch flex flex-col gap-4 grow items-start justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[18px]" data-node-id="102:1697">
                  <div className="font-aptos font-bold relative shrink-0 text-[#09141f] w-full" data-node-id="102:1698">
                    <p className="leading-[24px]">Experience a Streamlined Workflow</p>
                  </div>
                  <div className="font-aptos font-normal relative shrink-0 text-[#535960] w-full" data-node-id="102:1699">
                    <p className="leading-[24px]">From intake to offer, discover how Elios centralizes job requests, shortlists, scheduling, and reporting into one seamless recruiter experience.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="bg-white box-border content-stretch flex flex-col gap-9 items-start justify-start p-[60px] relative rounded-[20px] shrink-0 w-[756px]" data-node-id="102:1700">
            <div className="content-stretch flex gap-3 items-start justify-start relative shrink-0 w-full" data-node-id="102:1701">
              <div className="basis-0 content-stretch flex flex-col gap-2.5 grow items-start justify-start min-h-px min-w-px relative shrink-0" data-node-id="102:1702">
                <div className="font-aptos font-bold leading-[0] not-italic relative shrink-0 text-[#09141f] text-[16px] w-full" data-node-id="102:1703">
                  <p className="leading-[24px]">First Name</p>
                </div>
                <div className="bg-[#fcfcfc] box-border content-stretch flex gap-2.5 items-center justify-center px-5 py-[26px] relative rounded-[15px] shrink-0 w-full" data-node-id="102:1704">
                  <div aria-hidden="true" className="absolute border border-[#d5d5d5] border-solid inset-0 pointer-events-none rounded-[15px]" />
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="Albert"
                    className="basis-0 font-aptos font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#707579] text-[16px] leading-[24px] bg-transparent border-none outline-none placeholder:text-[#707579]"
                  />
                </div>
              </div>
              <div className="basis-0 content-stretch flex flex-col gap-2.5 grow items-start justify-start min-h-px min-w-px relative shrink-0" data-node-id="102:1706">
                <div className="font-aptos font-bold leading-[0] not-italic relative shrink-0 text-[#09141f] text-[16px] w-full" data-node-id="102:1707">
                  <p className="leading-[24px]">Last Name</p>
                </div>
                <div className="bg-[#fcfcfc] box-border content-stretch flex gap-2.5 items-center justify-center px-5 py-[26px] relative rounded-[15px] shrink-0 w-full" data-node-id="102:1708">
                  <div aria-hidden="true" className="absolute border border-[#d5d5d5] border-solid inset-0 pointer-events-none rounded-[15px]" />
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Einstein"
                    className="basis-0 font-aptos font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#707579] text-[16px] leading-[24px] bg-transparent border-none outline-none placeholder:text-[#707579]"
                  />
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-3 items-start justify-start relative shrink-0 w-full" data-node-id="102:1710">
              <div className="basis-0 content-stretch flex flex-col gap-2.5 grow items-start justify-start min-h-px min-w-px relative shrink-0" data-node-id="102:1711">
                <div className="font-aptos font-bold leading-[0] not-italic relative shrink-0 text-[#09141f] text-[16px] w-full" data-node-id="102:1712">
                  <p className="leading-[24px]">Email Address</p>
                </div>
                <div className="bg-[#fcfcfc] box-border content-stretch flex gap-2.5 items-center justify-center px-5 py-[26px] relative rounded-[15px] shrink-0 w-full" data-node-id="102:1713">
                  <div aria-hidden="true" className="absolute border border-[#d5d5d5] border-solid inset-0 pointer-events-none rounded-[15px]" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="albert.einstein@email.com"
                    className="basis-0 font-aptos font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#707579] text-[16px] leading-[24px] bg-transparent border-none outline-none placeholder:text-[#707579]"
                  />
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-3 items-start justify-start relative shrink-0 w-full" data-node-id="102:1715">
              <div className="basis-0 content-stretch flex flex-col gap-2.5 grow items-start justify-start min-h-px min-w-px relative shrink-0" data-node-id="102:1716">
                <div className="font-aptos font-bold leading-[0] not-italic relative shrink-0 text-[#09141f] text-[16px] w-full" data-node-id="102:1717">
                  <p className="leading-[24px]">Phone Number</p>
                </div>
                <div className="bg-[#fcfcfc] box-border content-stretch flex gap-2.5 items-center justify-center px-5 py-[26px] relative rounded-[15px] shrink-0 w-full" data-node-id="102:1718">
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
            <div className="content-stretch flex gap-3 items-start justify-start relative shrink-0 w-full" data-node-id="102:1720">
              <div className="basis-0 content-stretch flex flex-col gap-2.5 grow items-start justify-start min-h-px min-w-px relative shrink-0" data-node-id="102:1721">
                <div className="font-aptos font-bold leading-[0] not-italic relative shrink-0 text-[#09141f] text-[16px] w-full" data-node-id="102:1722">
                  <p className="leading-[24px]">How can we help?</p>
                </div>
                <div className="bg-[#fcfcfc] box-border content-stretch flex gap-2.5 items-center justify-center px-5 py-[26px] relative rounded-[15px] shrink-0 w-full" data-node-id="102:1723">
                  <div aria-hidden="true" className="absolute border border-[#d5d5d5] border-solid inset-0 pointer-events-none rounded-[15px]" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Let us know what we can help you with"
                    rows={4}
                    className="basis-0 font-aptos font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#707579] text-[16px] leading-[24px] bg-transparent border-none outline-none resize-none placeholder:text-[#707579]"
                  />
                </div>
              </div>
            </div>
            <button type="submit" className="bg-[#fa6a20] box-border content-stretch flex gap-2 items-center justify-center px-5 py-4 relative rounded-[8px] shrink-0 hover:bg-[#e85a10] transition-colors" data-name="Min Primary Button" data-node-id="102:1725">
              <div className="font-aptos font-semibold leading-[0] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white" data-node-id="102:1726">
                <p className="leading-[20px] whitespace-pre">Submit</p>
              </div>
              <div className="relative shrink-0 size-3" data-name="Line Rounded/Arrow rigth" data-node-id="102:1727">
                <div className="absolute inset-[15.67%_15%]" data-name="Arrow rigth" id="node-I102_1727-4940_34491">
                  <div className="absolute inset-[-7.8%_-7.65%_-7.8%_-7.64%]">
                    <Image alt="" src={imgNavArrow} width={12} height={12} className="block max-w-none size-full" />
                  </div>
                </div>
              </div>
            </button>
            <div className="font-aptos font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[#535960] text-[14px]" data-node-id="102:1728" style={{ width: "min-content" }}>
              <p className="leading-[22px]">
                <span className>By clicking "Submit" I agree to the terms and conditions of our </span>
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