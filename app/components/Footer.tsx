"use client";

import Image from "next/image";

const imgEliosLogo = "/elios-logo.svg";
const img = "/footer-facebook-icon.svg";
const img1 = "/footer-twitter-icon.svg";
const img2 = "/footer-instagram-icon.svg";
const imgSocialMediaIconSquareLinkedIn = "/footer-linkedin-icon.svg";

export default function Footer() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[72px] items-center justify-end pb-[140px] pt-[440px] px-[167px] relative size-full" data-name="Footer V1" data-node-id="65:1719">
      <div className="content-stretch flex flex-col gap-[72px] items-start justify-start relative shrink-0 w-[1638px]" data-node-id="65:1720">
        <div className="content-stretch flex gap-60 items-start justify-start relative shrink-0 w-full" data-name="Footer Top" data-node-id="65:1721">
          <div className="content-stretch flex flex-col gap-[30px] items-start justify-start relative shrink-0 w-[516px]" data-node-id="65:1722">
            <div className="h-[60px] relative shrink-0 w-[151.443px]" data-name="Elios Logo" data-node-id="65:1723">
              <Image alt="Elios" src={imgEliosLogo} width={151} height={60} className="block max-w-none size-full" />
            </div>
            <div className="font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[#535960] text-[16px]" data-node-id="65:1756" style={{ width: "min-content" }}>
              <p className="leading-[1.4]">Elios is a technology-driven, human-centered recruiting firm committed to helping businesses scale with top talent. We connect leading companies with highly qualified professionals across key industries.</p>
            </div>
            <div className="content-stretch flex gap-4 items-start justify-start relative shrink-0" data-name="Social Media Wrapper" data-node-id="65:1757">
              <div className="relative shrink-0 size-[30px]" data-name="Social Media Icon Square/Facebook" data-node-id="65:1758">
                <div className="absolute bg-white inset-0 rounded-[4px]" data-name="Social Media Icon" id="node-I65_1758-4933_33311" />
                <div className="absolute bottom-1/4 left-[36.36%] right-[36.36%] top-1/4" data-name="Facebook" id="node-I65_1758-4933_33312">
                  <Image alt="Facebook" src={img} width={8} height={15} className="block max-w-none size-full" />
                </div>
              </div>
              <div className="relative shrink-0 size-[30px]" data-name="Social Media Icon Square/Twitter" data-node-id="65:1759">
                <div className="absolute bg-white inset-0 rounded-[4px]" data-name="Social Media Icon" id="node-I65_1759-4933_33314" />
                <div className="absolute bottom-[29.72%] left-1/4 right-1/4 top-[29.72%]" data-name="Twitter" id="node-I65_1759-4933_33315">
                  <Image alt="Twitter" src={img1} width={15} height={12} className="block max-w-none size-full" />
                </div>
              </div>
              <div className="relative shrink-0 size-[30px]" data-name="Social Media Icon Square/Instagram" data-node-id="65:1760">
                <div className="absolute bg-white inset-0 rounded-[4px]" data-name="Social Media Icon" id="node-I65_1760-4933_33317" />
                <div className="absolute inset-1/4" data-name="Instagram" id="node-I65_1760-4933_33318">
                  <Image alt="Instagram" src={img2} width={15} height={15} className="block max-w-none size-full" />
                </div>
              </div>
              <div className="relative shrink-0 size-[30px]" data-name="Social Media Icon Square/LinkedIn" data-node-id="65:1761">
                <Image alt="LinkedIn" src={imgSocialMediaIconSquareLinkedIn} width={30} height={30} className="block max-w-none size-full" />
              </div>
            </div>
          </div>
          <div className="basis-0 box-border content-stretch flex grow items-start justify-between min-h-px min-w-px pb-0 pt-7 px-0 relative shrink-0" data-node-id="65:1762">
            <div className="content-stretch flex flex-col gap-8 items-start justify-start relative shrink-0" data-name="Footer Column" data-node-id="65:1763">
              <div className="content-stretch flex flex-col gap-6 items-start justify-start relative shrink-0" data-name="Grid Column" data-node-id="65:1764">
                <div className="content-stretch flex gap-1.5 items-center justify-start relative shrink-0" data-name="Link" data-node-id="65:1765">
                  <div className="font-semibold leading-[0] not-italic relative shrink-0 text-[16px] text-black text-center text-nowrap" data-node-id="65:1766">
                    <p className="leading-[14px] whitespace-pre">For Hiring Managers</p>
                  </div>
                </div>
                <div className="content-stretch flex gap-1.5 items-center justify-start relative shrink-0" data-name="Link" data-node-id="65:1767">
                  <div className="font-normal leading-[0] not-italic relative shrink-0 text-[#535960] text-[16px] text-center text-nowrap" data-node-id="65:1768">
                    <p className="leading-[14px] whitespace-pre">Elios Talent</p>
                  </div>
                </div>
                <div className="content-stretch flex gap-1.5 items-center justify-start relative shrink-0" data-name="Link" data-node-id="65:1769">
                  <div className="font-normal leading-[0] not-italic relative shrink-0 text-[#535960] text-[16px] text-center text-nowrap" data-node-id="65:1770">
                    <p className="leading-[14px] whitespace-pre">Elios Insights</p>
                  </div>
                </div>
                <div className="content-stretch flex gap-1.5 items-center justify-start relative shrink-0" data-name="Link" data-node-id="65:1771">
                  <div className="font-normal leading-[0] not-italic relative shrink-0 text-[#535960] text-[16px] text-center text-nowrap" data-node-id="65:1772">
                    <p className="leading-[14px] whitespace-pre">Industries Served</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-6 items-start justify-start relative shrink-0" data-name="Grid Column" data-node-id="65:1773">
              <div className="content-stretch flex gap-1.5 items-center justify-start relative shrink-0 w-full" data-name="Link" data-node-id="65:1774">
                <div className="font-semibold leading-[0] not-italic relative shrink-0 text-[16px] text-black text-center text-nowrap" data-node-id="65:1775">
                  <p className="leading-[14px] whitespace-pre">For Candidates</p>
                </div>
              </div>
              <div className="content-stretch flex gap-1.5 items-center justify-start relative shrink-0 w-full" data-name="Link" data-node-id="65:1776">
                <div className="font-normal leading-[0] not-italic relative shrink-0 text-[#535960] text-[16px] text-center text-nowrap" data-node-id="65:1777">
                  <p className="leading-[14px] whitespace-pre">Explore Jobs</p>
                </div>
              </div>
              <div className="content-stretch flex gap-1.5 items-center justify-start relative shrink-0" data-name="Link" data-node-id="65:1778">
                <div className="font-normal leading-[0] not-italic relative shrink-0 text-[#535960] text-[16px] text-center text-nowrap" data-node-id="65:1779">
                  <p className="leading-[14px] whitespace-pre">Upload Resume</p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-6 items-start justify-start relative shrink-0" data-name="Grid Column" data-node-id="65:1780">
              <div className="content-stretch flex gap-1.5 items-center justify-start relative shrink-0" data-name="Link" data-node-id="65:1781">
                <div className="font-semibold leading-[0] not-italic relative shrink-0 text-[16px] text-black text-center text-nowrap" data-node-id="65:1782">
                  <p className="leading-[14px] whitespace-pre">Company</p>
                </div>
              </div>
              <div className="content-stretch flex gap-1.5 items-center justify-start relative shrink-0" data-name="Link" data-node-id="65:1783">
                <div className="font-normal leading-[0] not-italic relative shrink-0 text-[#535960] text-[16px] text-center text-nowrap" data-node-id="65:1784">
                  <p className="leading-[14px] whitespace-pre">About Us</p>
                </div>
              </div>
              <div className="content-stretch flex gap-1.5 items-center justify-start relative shrink-0" data-name="Link" data-node-id="65:1785">
                <div className="font-normal leading-[0] not-italic relative shrink-0 text-[#535960] text-[16px] text-center text-nowrap" data-node-id="65:1786">
                  <p className="leading-[14px] whitespace-pre">Connect</p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-6 items-start justify-start relative shrink-0" data-name="Grid Column" data-node-id="65:1787">
              <div className="content-stretch flex gap-1.5 items-center justify-start relative shrink-0" data-name="Link" data-node-id="65:1788">
                <div className="font-semibold leading-[0] not-italic relative shrink-0 text-[16px] text-black text-center text-nowrap" data-node-id="65:1789">
                  <p className="leading-[14px] whitespace-pre">Resources</p>
                </div>
              </div>
              <div className="content-stretch flex gap-1.5 items-center justify-start relative shrink-0" data-name="Link" data-node-id="65:1790">
                <div className="font-normal leading-[0] not-italic relative shrink-0 text-[#535960] text-[16px] text-center text-nowrap" data-node-id="65:1791">
                  <p className="leading-[14px] whitespace-pre">Blog</p>
                </div>
              </div>
              <div className="content-stretch flex gap-1.5 items-center justify-start relative shrink-0" data-name="Link" data-node-id="65:1792">
                <div className="font-normal leading-[0] not-italic relative shrink-0 text-[#535960] text-[16px] text-center text-nowrap" data-node-id="65:1793">
                  <p className="leading-[14px] whitespace-pre">Case Studies</p>
                </div>
              </div>
              <div className="content-stretch flex gap-1.5 items-center justify-start relative shrink-0" data-name="Link" data-node-id="65:1794">
                <div className="font-normal leading-[0] not-italic relative shrink-0 text-[#535960] text-[16px] text-center text-nowrap" data-node-id="65:1795">
                  <p className="leading-[14px] whitespace-pre">FAQ</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="65:1796">
          <div className="flex flex-row items-center self-stretch">
            <div className="content-stretch flex gap-6 h-full items-center justify-start relative shrink-0" data-node-id="65:1797">
              <div className="font-normal leading-[0] not-italic relative shrink-0 text-[#535960] text-[16px] text-nowrap" data-node-id="65:1798">
                <p className="leading-[22px] whitespace-pre">© 2025 Elios, Inc. All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}