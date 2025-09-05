"use client";

import Image from "next/image";
import Link from "next/link";

const imgCarat = "/caret.svg";
const imgBookDemo = "/connect-book-demo.svg";
const imgRequestTalent = "/connect-request-talent.svg";
const imgStrategySession = "/connect-strategy-session.svg";
const imgSubmitResume = "/connect-submit-resume.svg";

export default function ConnectDropdown() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[180px] items-center justify-center p-[30px] relative rounded-[15px] shadow-[166px_377px_115px_0px_rgba(0,0,0,0),106px_241px_105px_0px_rgba(0,0,0,0.01),60px_136px_89px_0px_rgba(0,0,0,0.05),27px_60px_66px_0px_rgba(0,0,0,0.09),7px_15px_36px_0px_rgba(0,0,0,0.1)] size-full">
      <div className="content-stretch flex gap-[110px] items-start justify-start max-w-[1638px] relative shrink-0">
        <div className="content-stretch flex items-start justify-start relative shrink-0">
          <div className="content-stretch flex flex-col gap-[30px] items-start justify-start relative shrink-0">
            <div className="content-stretch flex gap-1 items-center justify-start relative shrink-0 w-full">
              <div className="font-aptos font-semibold leading-[0] not-italic relative shrink-0 text-[#09141f] text-[15px] text-nowrap">
                <p className="leading-[22px] whitespace-pre">Connect with Elios</p>
              </div>
              <div className="relative shrink-0 size-3.5">
                <Image
                  alt="Dropdown"
                  src={imgCarat}
                  width={14}
                  height={14}
                  className="block max-w-none size-full"
                />
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-1 items-start justify-start relative shrink-0 w-full">
              <Link href="/book-demo" className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start p-[10px] relative shrink-0 w-full hover:bg-gray-50 rounded-[8px] transition-colors">
                <div className="content-stretch flex gap-[15px] items-center justify-start relative shrink-0">
                  <div className="bg-[#f4f4f4] box-border content-stretch flex gap-2.5 items-center justify-start overflow-clip p-[14px] relative rounded-[6px] shrink-0">
                    <div className="relative shrink-0 size-5">
                      <Image
                        alt="Book a Demo"
                        src={imgBookDemo}
                        width={20}
                        height={20}
                        className="block max-w-none size-full"
                      />
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-3.5 items-start justify-start leading-[0] not-italic relative shrink-0 text-nowrap">
                    <div className="font-aptos font-semibold relative shrink-0 text-[#09141f] text-[16px]">
                      <p className="leading-[22px] text-nowrap whitespace-pre">Book a Demo</p>
                    </div>
                    <div className="font-aptos font-normal relative shrink-0 text-[#535960] text-[15px] text-center">
                      <p className="leading-[22px] text-nowrap whitespace-pre">See Elios Insights in action</p>
                    </div>
                  </div>
                </div>
              </Link>
              <Link href="/request-talent" className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start p-[10px] relative shrink-0 w-full hover:bg-gray-50 rounded-[8px] transition-colors">
                <div className="content-stretch flex gap-[15px] items-center justify-start relative shrink-0">
                  <div className="bg-[#f4f4f4] box-border content-stretch flex gap-2.5 items-center justify-start overflow-clip p-[14px] relative rounded-[6px] shrink-0">
                    <div className="relative shrink-0 size-5">
                      <Image
                        alt="Request Talent"
                        src={imgRequestTalent}
                        width={20}
                        height={20}
                        className="block max-w-none size-full"
                      />
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-3.5 items-start justify-start leading-[0] not-italic relative shrink-0 text-nowrap">
                    <div className="font-aptos font-semibold relative shrink-0 text-[#09141f] text-[16px]">
                      <p className="leading-[22px] text-nowrap whitespace-pre">Request Talent</p>
                    </div>
                    <div className="font-aptos font-normal relative shrink-0 text-[#535960] text-[15px] text-center">
                      <p className="leading-[22px] text-nowrap whitespace-pre">Get top talent based on your needs</p>
                    </div>
                  </div>
                </div>
              </Link>
              <Link href="/book-strategy-session" className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start p-[10px] relative shrink-0 w-full hover:bg-gray-50 rounded-[8px] transition-colors">
                <div className="content-stretch flex gap-[15px] items-center justify-start relative shrink-0">
                  <div className="bg-[#f4f4f4] box-border content-stretch flex gap-2.5 items-center justify-start overflow-clip p-[14px] relative rounded-[6px] shrink-0">
                    <div className="relative shrink-0 size-5">
                      <Image
                        alt="Book Strategy Session"
                        src={imgStrategySession}
                        width={20}
                        height={20}
                        className="block max-w-none size-full"
                      />
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-3.5 items-start justify-start leading-[0] not-italic relative shrink-0 text-nowrap">
                    <div className="font-aptos font-semibold relative shrink-0 text-[#09141f] text-[16px]">
                      <p className="leading-[22px] text-nowrap whitespace-pre">Book Strategy Session</p>
                    </div>
                    <div className="font-aptos font-normal relative shrink-0 text-[#535960] text-[15px] text-center">
                      <p className="leading-[22px] text-nowrap whitespace-pre">Get a talent strategy or career session</p>
                    </div>
                  </div>
                </div>
              </Link>
              <Link href="/submit-resume" className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start p-[10px] relative shrink-0 hover:bg-gray-50 rounded-[8px] transition-colors">
                <div className="content-stretch flex gap-[15px] items-center justify-start relative shrink-0">
                  <div className="bg-[#f4f4f4] box-border content-stretch flex gap-2.5 items-center justify-start overflow-clip p-[14px] relative rounded-[6px] shrink-0">
                    <div className="relative shrink-0 size-5">
                      <Image
                        alt="Submit Your Resume"
                        src={imgSubmitResume}
                        width={20}
                        height={20}
                        className="block max-w-none size-full"
                      />
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-3.5 items-start justify-start leading-[0] not-italic relative shrink-0 text-nowrap">
                    <div className="font-aptos font-semibold relative shrink-0 text-[#09141f] text-[16px]">
                      <p className="leading-[22px] text-nowrap whitespace-pre">Submit Your Resume</p>
                    </div>
                    <div className="font-aptos font-normal relative shrink-0 text-[#535960] text-[15px] text-center">
                      <p className="leading-[22px] text-nowrap whitespace-pre">Get recommended jobs based on your skills</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}