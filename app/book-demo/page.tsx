"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Navigation from "../components/Navigation";

const imgFrame = "/request-talent-frame-icon.svg";
const imgNavArrow = "/book-demo-nav-arrow.svg";
const imgEliosLogo1 = "/request-talent-footer-logo.svg";
const imgFooterFacebook = "/request-talent-footer-facebook.svg";
const imgFooterTwitter = "/request-talent-footer-twitter.svg";
const imgFooterInstagram = "/book-demo-footer-instagram.svg";
const imgFooterLinkedIn = "/request-talent-footer-linkedin.svg";

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
      <div className="bg-white box-border content-stretch flex flex-col gap-[72px] items-center justify-end overflow-clip px-[167px] py-[140px] relative shrink-0 w-full" data-name="Footer V2" data-node-id="102:1806">
        <div className="content-stretch flex flex-col gap-[72px] items-start justify-start relative shrink-0 w-[1638px]" data-node-id="102:1807">
          <div className="content-stretch flex gap-60 items-start justify-start relative shrink-0 w-full" data-name="Footer Top" data-node-id="102:1808">
            <div className="content-stretch flex flex-col gap-[30px] items-start justify-start relative shrink-0 w-[516px]" data-node-id="102:1809">
              <div className="h-[60px] relative shrink-0 w-[151.443px]" data-name="Elios Logo" data-node-id="102:1810">
                <Image alt="Elios" src={imgEliosLogo1} width={151} height={60} className="block max-w-none size-full" />
              </div>
              <div className="font-aptos font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[#535960] text-[16px]" data-node-id="102:1843" style={{ width: "min-content" }}>
                <p className="leading-[1.4]">Elios is a technology-driven, human-centered recruiting firm committed to helping businesses scale with top talent. We connect leading companies with highly qualified professionals across key industries.</p>
              </div>
              <div className="content-stretch flex gap-4 items-start justify-start relative shrink-0" data-name="Social Media Wrapper" data-node-id="102:1844">
                <div className="relative shrink-0 size-[30px]" data-name="Social Media Icon Square/Facebook" data-node-id="102:1845">
                  <div className="absolute bg-white inset-0 rounded-[4px]" data-name="Social Media Icon" id="node-I102_1845-4933_33311" />
                  <div className="absolute bottom-1/4 left-[36.36%] right-[36.36%] top-1/4" data-name="Facebook" id="node-I102_1845-4933_33312">
                    <Image alt="Facebook" src={imgFooterFacebook} width={8} height={15} className="block max-w-none size-full" />
                  </div>
                </div>
                <div className="relative shrink-0 size-[30px]" data-name="Social Media Icon Square/Twitter" data-node-id="102:1846">
                  <div className="absolute bg-white inset-0 rounded-[4px]" data-name="Social Media Icon" id="node-I102_1846-4933_33314" />
                  <div className="absolute bottom-[29.72%] left-1/4 right-1/4 top-[29.72%]" data-name="Twitter" id="node-I102_1846-4933_33315">
                    <Image alt="Twitter" src={imgFooterTwitter} width={15} height={12} className="block max-w-none size-full" />
                  </div>
                </div>
                <div className="relative shrink-0 size-[30px]" data-name="Social Media Icon Square/Instagram" data-node-id="102:1847">
                  <div className="absolute bg-white inset-0 rounded-[4px]" data-name="Social Media Icon" id="node-I102_1847-4933_33317" />
                  <div className="absolute inset-1/4" data-name="Instagram" id="node-I102_1847-4933_33318">
                    <Image alt="Instagram" src={imgFooterInstagram} width={15} height={15} className="block max-w-none size-full" />
                  </div>
                </div>
                <div className="relative shrink-0 size-[30px]" data-name="Social Media Icon Square/LinkedIn" data-node-id="102:1848">
                  <Image alt="LinkedIn" src={imgFooterLinkedIn} width={30} height={30} className="block max-w-none size-full" />
                </div>
              </div>
            </div>
            <div className="basis-0 box-border content-stretch flex grow items-start justify-between min-h-px min-w-px pb-0 pt-7 px-0 relative shrink-0" data-node-id="102:1849">
              <div className="content-stretch flex flex-col gap-8 items-start justify-start relative shrink-0" data-name="Footer Column" data-node-id="102:1850">
                <div className="content-stretch flex flex-col gap-6 items-start justify-start relative shrink-0" data-name="Grid Column" data-node-id="102:1851">
                  <div className="content-stretch flex gap-1.5 items-center justify-start relative shrink-0" data-name="Link" data-node-id="102:1852">
                    <div className="font-aptos font-semibold leading-[0] not-italic relative shrink-0 text-[16px] text-black text-center text-nowrap" data-node-id="102:1853">
                      <p className="leading-[14px] whitespace-pre">For Hiring Managers</p>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-1.5 items-center justify-start relative shrink-0" data-name="Link" data-node-id="102:1854">
                    <div className="font-aptos font-normal leading-[0] not-italic relative shrink-0 text-[#535960] text-[16px] text-center text-nowrap" data-node-id="102:1855">
                      <p className="leading-[14px] whitespace-pre">Elios Talent</p>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-1.5 items-center justify-start relative shrink-0" data-name="Link" data-node-id="102:1856">
                    <div className="font-aptos font-normal leading-[0] not-italic relative shrink-0 text-[#535960] text-[16px] text-center text-nowrap" data-node-id="102:1857">
                      <p className="leading-[14px] whitespace-pre">Elios Insights</p>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-1.5 items-center justify-start relative shrink-0" data-name="Link" data-node-id="102:1858">
                    <div className="font-aptos font-normal leading-[0] not-italic relative shrink-0 text-[#535960] text-[16px] text-center text-nowrap" data-node-id="102:1859">
                      <p className="leading-[14px] whitespace-pre">Industries Served</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-6 items-start justify-start relative shrink-0" data-name="Grid Column" data-node-id="102:1860">
                <div className="content-stretch flex gap-1.5 items-center justify-start relative shrink-0 w-full" data-name="Link" data-node-id="102:1861">
                  <div className="font-aptos font-semibold leading-[0] not-italic relative shrink-0 text-[16px] text-black text-center text-nowrap" data-node-id="102:1862">
                    <p className="leading-[14px] whitespace-pre">For Candidates</p>
                  </div>
                </div>
                <div className="content-stretch flex gap-1.5 items-center justify-start relative shrink-0 w-full" data-name="Link" data-node-id="102:1863">
                  <div className="font-aptos font-normal leading-[0] not-italic relative shrink-0 text-[#535960] text-[16px] text-center text-nowrap" data-node-id="102:1864">
                    <p className="leading-[14px] whitespace-pre">Explore Jobs</p>
                  </div>
                </div>
                <div className="content-stretch flex gap-1.5 items-center justify-start relative shrink-0" data-name="Link" data-node-id="102:1865">
                  <div className="font-aptos font-normal leading-[0] not-italic relative shrink-0 text-[#535960] text-[16px] text-center text-nowrap" data-node-id="102:1866">
                    <p className="leading-[14px] whitespace-pre">Upload Resume</p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-6 items-start justify-start relative shrink-0" data-name="Grid Column" data-node-id="102:1867">
                <div className="content-stretch flex gap-1.5 items-center justify-start relative shrink-0" data-name="Link" data-node-id="102:1868">
                  <div className="font-aptos font-semibold leading-[0] not-italic relative shrink-0 text-[16px] text-black text-center text-nowrap" data-node-id="102:1869">
                    <p className="leading-[14px] whitespace-pre">Company</p>
                  </div>
                </div>
                <div className="content-stretch flex gap-1.5 items-center justify-start relative shrink-0" data-name="Link" data-node-id="102:1870">
                  <div className="font-aptos font-normal leading-[0] not-italic relative shrink-0 text-[#535960] text-[16px] text-center text-nowrap" data-node-id="102:1871">
                    <p className="leading-[14px] whitespace-pre">About Us</p>
                  </div>
                </div>
                <div className="content-stretch flex gap-1.5 items-center justify-start relative shrink-0" data-name="Link" data-node-id="102:1872">
                  <div className="font-aptos font-normal leading-[0] not-italic relative shrink-0 text-[#535960] text-[16px] text-center text-nowrap" data-node-id="102:1873">
                    <p className="leading-[14px] whitespace-pre">Connect</p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-6 items-start justify-start relative shrink-0" data-name="Grid Column" data-node-id="102:1874">
                <div className="content-stretch flex gap-1.5 items-center justify-start relative shrink-0" data-name="Link" data-node-id="102:1875">
                  <div className="font-aptos font-semibold leading-[0] not-italic relative shrink-0 text-[16px] text-black text-center text-nowrap" data-node-id="102:1876">
                    <p className="leading-[14px] whitespace-pre">Resources</p>
                  </div>
                </div>
                <div className="content-stretch flex gap-1.5 items-center justify-start relative shrink-0" data-name="Link" data-node-id="102:1877">
                  <div className="font-aptos font-normal leading-[0] not-italic relative shrink-0 text-[#535960] text-[16px] text-center text-nowrap" data-node-id="102:1878">
                    <p className="leading-[14px] whitespace-pre">Blog</p>
                  </div>
                </div>
                <div className="content-stretch flex gap-1.5 items-center justify-start relative shrink-0" data-name="Link" data-node-id="102:1879">
                  <div className="font-aptos font-normal leading-[0] not-italic relative shrink-0 text-[#535960] text-[16px] text-center text-nowrap" data-node-id="102:1880">
                    <p className="leading-[14px] whitespace-pre">Case Studies</p>
                  </div>
                </div>
                <div className="content-stretch flex gap-1.5 items-center justify-start relative shrink-0" data-name="Link" data-node-id="102:1881">
                  <div className="font-aptos font-normal leading-[0] not-italic relative shrink-0 text-[#535960] text-[16px] text-center text-nowrap" data-node-id="102:1882">
                    <p className="leading-[14px] whitespace-pre">FAQ</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="102:1883">
            <div className="flex flex-row items-center self-stretch">
              <div className="content-stretch flex gap-6 h-full items-center justify-start relative shrink-0" data-node-id="102:1884">
                <div className="font-aptos font-normal leading-[0] not-italic relative shrink-0 text-[#535960] text-[16px] text-nowrap" data-node-id="102:1885">
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