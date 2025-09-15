"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const imgFrame = "/request-talent-frame-icon.svg";
const imgNavArrow = "/request-talent-nav-arrow.svg";

export default function RequestTalent() {
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
    <div className="bg-[#f4f4f4] content-stretch flex flex-col items-center justify-start relative size-full" data-name="Elios - Request Talent" data-node-id="102:1304">
      <Navigation />
      <div className="content-stretch flex flex-col h-[1002px] items-center justify-center mt-[174px] relative shrink-0 w-full" data-name="Hero" data-node-id="102:1360">
        <div className="content-stretch flex gap-[140px] items-center justify-start max-w-[1638px] relative shrink-0 w-full" data-name="Wrapper" data-node-id="102:1361">
          <div className="content-stretch flex flex-col gap-[70px] items-start justify-start relative shrink-0 w-[694px]" data-name="Hero Text" data-node-id="102:1383">
            <div className="content-stretch flex flex-col gap-10 items-start justify-start leading-[0] not-italic relative shrink-0 text-[#09141f] w-full" data-name="Top" data-node-id="102:1384">
              <div className="font-aptos font-semibold relative shrink-0 text-[96px] tracking-[-5.76px] w-full" data-node-id="102:1385">
                <p className="leading-[96px]">Request Talent</p>
              </div>
              <div className="font-aptos font-normal relative shrink-0 text-[24px] w-full" data-node-id="102:1386">
                <p className="leading-[32px]">See how Elios can help you discover the right talent, opportunity, or career move fast with Elios Talent and Elios Insights.</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-9 items-start justify-start relative shrink-0 w-[549px]" data-node-id="102:1387">
              <div className="content-stretch flex gap-4 items-center justify-center relative shrink-0 w-full" data-node-id="102:1388">
                <div className="bg-[#ffdc6a] box-border content-stretch flex flex-col gap-2.5 items-center justify-center overflow-clip px-1 py-1.5 relative rounded-[100px] shrink-0 size-[26px]" data-name="Frame" data-node-id="102:1389">
                  <div className="relative shrink-0 size-3" data-name="Frame" data-node-id="102:1390">
                    <Image alt="" src={imgFrame} width={12} height={12} className="block max-w-none size-full" />
                  </div>
                </div>
                <div className="basis-0 content-stretch flex flex-col gap-4 grow items-start justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[18px]" data-node-id="102:1392">
                  <div className="font-aptos font-bold relative shrink-0 text-[#09141f] w-full" data-node-id="102:1393">
                    <p className="leading-[24px]">Faster Hires, Less Downtime</p>
                  </div>
                  <div className="font-aptos font-normal relative shrink-0 text-[#535960] w-full" data-node-id="102:1394">
                    <p className="leading-[24px]">Fill critical roles in days, not months, so your team can stay focused on delivery instead of waiting on hires.</p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-4 items-center justify-center relative shrink-0 w-full" data-node-id="102:1395">
                <div className="bg-[#ffdc6a] box-border content-stretch flex flex-col gap-2.5 items-center justify-center overflow-clip px-1 py-1.5 relative rounded-[100px] shrink-0 size-[26px]" data-name="Frame" data-node-id="102:1396">
                  <div className="relative shrink-0 size-3" data-name="Frame" data-node-id="102:1397">
                    <Image alt="" src={imgFrame} width={12} height={12} className="block max-w-none size-full" />
                  </div>
                </div>
                <div className="basis-0 content-stretch flex flex-col gap-4 grow items-start justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[18px]" data-node-id="102:1399">
                  <div className="font-aptos font-bold relative shrink-0 text-[#09141f] w-full" data-node-id="102:1400">
                    <p className="leading-[24px]">Access to Specialized Talent</p>
                  </div>
                  <div className="font-aptos font-normal relative shrink-0 text-[#535960] w-full" data-node-id="102:1401">
                    <p className="leading-[24px]">Tap into Elios' curated network of industry-vetted professionals who bring the exact expertise and experience you need.</p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-4 items-center justify-center relative shrink-0 w-full" data-node-id="102:1402">
                <div className="bg-[#ffdc6a] box-border content-stretch flex flex-col gap-2.5 items-center justify-center overflow-clip px-1 py-1.5 relative rounded-[100px] shrink-0 size-[26px]" data-name="Frame" data-node-id="102:1403">
                  <div className="relative shrink-0 size-3" data-name="Frame" data-node-id="102:1404">
                    <Image alt="" src={imgFrame} width={12} height={12} className="block max-w-none size-full" />
                  </div>
                </div>
                <div className="basis-0 content-stretch flex flex-col gap-4 grow items-start justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[18px]" data-node-id="102:1406">
                  <div className="font-aptos font-bold relative shrink-0 text-[#09141f] w-full" data-node-id="102:1407">
                    <p className="leading-[24px]">Smarter Matching with AI + Human Expertise</p>
                  </div>
                  <div className="font-aptos font-normal relative shrink-0 text-[#535960] w-full" data-node-id="102:1408">
                    <p className="leading-[24px]">Our blend of advanced AI and recruiter insight ensures you don't just get qualified candidates, but the ones who are the best fit for your culture, goals, and long-term success.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="bg-white box-border content-stretch flex flex-col gap-9 items-start justify-start p-[60px] relative rounded-[15px] shrink-0 w-[756px]" data-node-id="102:1409">
            <div className="content-stretch flex gap-3 items-start justify-start relative shrink-0 w-full" data-node-id="102:1410">
              <div className="basis-0 content-stretch flex flex-col gap-2.5 grow items-start justify-start min-h-px min-w-px relative shrink-0" data-node-id="102:1411">
                <div className="font-aptos font-bold leading-[0] not-italic relative shrink-0 text-[#09141f] text-[16px] w-full" data-node-id="102:1412">
                  <p className="leading-[24px]">First Name</p>
                </div>
                <div className="bg-[#fcfcfc] box-border content-stretch flex gap-2.5 items-center justify-center px-5 py-[26px] relative rounded-[15px] shrink-0 w-full" data-node-id="102:1413">
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
              <div className="basis-0 content-stretch flex flex-col gap-2.5 grow items-start justify-start min-h-px min-w-px relative shrink-0" data-node-id="102:1415">
                <div className="font-aptos font-bold leading-[0] not-italic relative shrink-0 text-[#09141f] text-[16px] w-full" data-node-id="102:1416">
                  <p className="leading-[24px]">Last Name</p>
                </div>
                <div className="bg-[#fcfcfc] box-border content-stretch flex gap-2.5 items-center justify-center px-5 py-[26px] relative rounded-[15px] shrink-0 w-full" data-node-id="102:1417">
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
            <div className="content-stretch flex gap-3 items-start justify-start relative shrink-0 w-full" data-node-id="102:1419">
              <div className="basis-0 content-stretch flex flex-col gap-2.5 grow items-start justify-start min-h-px min-w-px relative shrink-0" data-node-id="102:1420">
                <div className="font-aptos font-bold leading-[0] not-italic relative shrink-0 text-[#09141f] text-[16px] w-full" data-node-id="102:1421">
                  <p className="leading-[24px]">Email Address</p>
                </div>
                <div className="bg-[#fcfcfc] box-border content-stretch flex gap-2.5 items-center justify-center px-5 py-[26px] relative rounded-[15px] shrink-0 w-full" data-node-id="102:1422">
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
            <div className="content-stretch flex gap-3 items-start justify-start relative shrink-0 w-full" data-node-id="102:1424">
              <div className="basis-0 content-stretch flex flex-col gap-2.5 grow items-start justify-start min-h-px min-w-px relative shrink-0" data-node-id="102:1425">
                <div className="font-aptos font-bold leading-[0] not-italic relative shrink-0 text-[#09141f] text-[16px] w-full" data-node-id="102:1426">
                  <p className="leading-[24px]">Phone Number</p>
                </div>
                <div className="bg-[#fcfcfc] box-border content-stretch flex gap-2.5 items-center justify-center px-5 py-[26px] relative rounded-[15px] shrink-0 w-full" data-node-id="102:1427">
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
            <div className="content-stretch flex gap-3 items-start justify-start relative shrink-0 w-full" data-node-id="102:1429">
              <div className="basis-0 content-stretch flex flex-col gap-2.5 grow items-start justify-start min-h-px min-w-px relative shrink-0" data-node-id="102:1430">
                <div className="font-aptos font-bold leading-[0] not-italic relative shrink-0 text-[#09141f] text-[16px] w-full" data-node-id="102:1431">
                  <p className="leading-[24px]">How can we help?</p>
                </div>
                <div className="bg-[#fcfcfc] box-border content-stretch flex gap-2.5 items-center justify-center px-5 py-[26px] relative rounded-[15px] shrink-0 w-full" data-node-id="102:1432">
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
            <button type="submit" className="bg-[#fa6a20] box-border content-stretch flex gap-2 items-center justify-center px-5 py-4 relative rounded-[8px] shrink-0 hover:bg-[#e85a10] transition-colors" data-name="Min Primary Button" data-node-id="102:1434">
              <div className="font-aptos font-semibold leading-[0] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white" data-node-id="102:1435">
                <p className="leading-[20px] whitespace-pre">Submit</p>
              </div>
              <div className="relative shrink-0 size-3" data-name="Line Rounded/Arrow rigth" data-node-id="102:1436">
                <div className="absolute inset-[15.67%_15%]" data-name="Arrow rigth" id="node-I102_1436-4940_34491">
                  <div className="absolute inset-[-7.8%_-7.65%]">
                    <Image alt="" src={imgNavArrow} width={12} height={12} className="block max-w-none size-full" />
                  </div>
                </div>
              </div>
            </button>
            <div className="font-aptos font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[#535960] text-[14px]" data-node-id="102:1437" style={{ width: "min-content" }}>
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