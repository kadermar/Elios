"use client";

import Link from "next/link";
import Icon from "./Icon";

// Image asset from Figma
const imgTalentGlobeColorized = "http://localhost:3845/assets/f1c68406f7a69ed9c6ff479d0bd02aa5f87c042b.png";

export default function EliosTalentDropdown() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[180px] items-center justify-center p-[32px] relative rounded-[8px] shadow-[166px_377px_115px_0px_rgba(0,0,0,0),106px_241px_105px_0px_rgba(0,0,0,0.01),60px_136px_89px_0px_rgba(0,0,0,0.05),27px_60px_66px_0px_rgba(0,0,0,0.09),7px_15px_36px_0px_rgba(0,0,0,0.1)] w-full">
      <div className="basis-0 content-stretch flex gap-8 grow items-start justify-start w-full min-h-px min-w-px relative shrink-0">

        {/* Why Elios Talent Section */}
        <div className="basis-0 box-border content-stretch flex flex-col gap-6 grow items-start justify-center min-h-px min-w-px pl-0 pr-6 py-0 relative shrink-0">
          <div className="font-aptos font-semibold leading-[0] min-w-full not-italic relative shrink-0 text-[#09141f] text-[22px] tracking-[-0.66px]" style={{ width: "min-content" }}>
            <p className="leading-[22px]">Why Elios Talent?</p>
          </div>
          <div className="font-aptos font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[#535960] text-[14px]" style={{ width: "min-content" }}>
            <p className="leading-[18px]">Because finding the right people isn't about volume—it's about precision. Elios combines AI matching with human expertise to deliver top candidates faster, tailored to your industry's unique challenges.</p>
          </div>
          <div className="box-border content-stretch flex gap-2.5 h-[118px] items-start justify-start overflow-clip px-0 py-1 relative shrink-0 w-[213px]">
            <div
              className="aspect-[1682/1682] basis-0 bg-center bg-cover bg-no-repeat grow min-h-px min-w-px shrink-0"
              style={{ backgroundImage: `url('${imgTalentGlobeColorized}')` }}
            />
          </div>
        </div>

        {/* Staffing Services Column */}
        <div className="basis-0 content-stretch flex flex-col gap-4 grow items-start justify-start min-h-px min-w-px relative shrink-0">
          <Link href="/staffing-services" className="content-stretch flex gap-1 items-center justify-center relative shrink-0">
            <div className="font-aptos font-semibold leading-[0] not-italic relative shrink-0 text-[#595959] text-[14px] text-center text-nowrap">
              <p className="leading-[18px] whitespace-pre">Staffing Services</p>
            </div>
            <div className="shrink-0 size-4" />
          </Link>
          <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full">

            {/* Staff Augmentation */}
            <Link href="/staff-augmentation" className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start px-0 py-2 relative shrink-0 w-[310px] hover:bg-gray-50 rounded transition-colors">
              <div className="content-stretch flex items-center justify-start relative shrink-0 w-[310px]">
                <div className="box-border content-stretch flex gap-2.5 items-center justify-center overflow-clip p-[14px] relative rounded-[2px] shrink-0 size-11">
                  <Icon type="users-02" size="regular" />
                </div>
                <div className="basis-0 content-stretch flex flex-col gap-1 grow items-start justify-start leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[14px]">
                  <div className="font-aptos font-semibold relative shrink-0 text-[#09141f] w-full">
                    <p className="leading-[18px]">Staff Augmentation</p>
                  </div>
                  <div className="font-aptos font-normal relative shrink-0 text-[#535960] w-full">
                    <p className="leading-[18px]">Temporary skilled professionals</p>
                  </div>
                </div>
              </div>
            </Link>

            {/* Permanent Hire */}
            <Link href="/permanent-hire" className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start px-0 py-2 relative shrink-0 w-[310px] hover:bg-gray-50 rounded transition-colors">
              <div className="content-stretch flex items-center justify-start relative shrink-0 w-[310px]">
                <div className="box-border content-stretch flex gap-2.5 items-center justify-center overflow-clip p-[14px] relative rounded-[2px] shrink-0 size-11">
                  <Icon type="briefcase-02" size="regular" />
                </div>
                <div className="basis-0 content-stretch flex flex-col gap-1 grow items-start justify-start leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[14px]">
                  <div className="font-aptos font-semibold relative shrink-0 text-[#09141f] w-full">
                    <p className="leading-[18px]">Permanent Hire</p>
                  </div>
                  <div className="font-aptos font-normal relative shrink-0 text-[#535960] w-full">
                    <p className="leading-[18px]">Temporary skilled professionals</p>
                  </div>
                </div>
              </div>
            </Link>

            {/* RPO */}
            <Link href="/rpo" className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start px-0 py-2 relative shrink-0 w-[310px] hover:bg-gray-50 rounded transition-colors">
              <div className="content-stretch flex items-center justify-start relative shrink-0 w-[310px]">
                <div className="box-border content-stretch flex gap-2.5 items-center justify-center overflow-clip p-[14px] relative rounded-[2px] shrink-0 size-11">
                  <Icon type="network" size="regular" />
                </div>
                <div className="basis-0 content-stretch flex flex-col gap-1 grow items-start justify-start leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[14px]">
                  <div className="font-aptos font-semibold relative shrink-0 text-[#09141f] w-full">
                    <p className="leading-[18px]">RPO</p>
                  </div>
                  <div className="font-aptos font-normal relative shrink-0 text-[#535960] w-full">
                    <p className="leading-[18px]">Temporary skilled professionals</p>
                  </div>
                </div>
              </div>
            </Link>

            {/* Executive Search */}
            <Link href="/executive-search" className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start px-0 py-2 relative shrink-0 w-[310px] hover:bg-gray-50 rounded transition-colors">
              <div className="content-stretch flex items-center justify-start relative shrink-0 w-[310px]">
                <div className="box-border content-stretch flex gap-2.5 items-center justify-center overflow-clip p-[14px] relative rounded-[2px] shrink-0 size-11">
                  <Icon type="search-md" size="regular" />
                </div>
                <div className="basis-0 content-stretch flex flex-col gap-1 grow items-start justify-start leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[14px]">
                  <div className="font-aptos font-semibold relative shrink-0 text-[#09141f] w-full">
                    <p className="leading-[18px]">Executive Search</p>
                  </div>
                  <div className="font-aptos font-normal relative shrink-0 text-[#535960] w-full">
                    <p className="leading-[18px]">Temporary skilled professionals</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Industries Column */}
        <div className="basis-0 content-stretch flex flex-col gap-4 grow items-start justify-start min-h-px min-w-px relative shrink-0">
          <div className="content-stretch flex gap-1 items-center justify-center relative shrink-0">
            <div className="font-aptos font-semibold leading-[0] not-italic relative shrink-0 text-[#595959] text-[14px] text-center text-nowrap">
              <p className="leading-[18px] whitespace-pre">Industries</p>
            </div>
            <div className="shrink-0 size-4" />
          </div>
          <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full">

            {/* Technology */}
            <Link href="/technology" className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start px-0 py-2 relative shrink-0 w-full hover:bg-gray-50 rounded transition-colors">
              <div className="content-stretch flex items-center justify-start relative shrink-0 w-full">
                <div className="box-border content-stretch flex gap-2.5 items-center justify-center overflow-clip p-[14px] relative rounded-[2px] shrink-0 size-11">
                  <Icon type="laptop-01" size="regular" />
                </div>
                <div className="basis-0 content-stretch flex flex-col gap-1 grow items-start justify-start min-h-px min-w-px relative shrink-0">
                  <div className="font-aptos font-semibold leading-[0] not-italic relative shrink-0 text-[#09141f] text-[14px] w-full">
                    <p className="leading-[18px]">Technology</p>
                  </div>
                </div>
              </div>
            </Link>

            {/* Healthcare & Life Sciences */}
            <Link href="/healthcare" className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start px-0 py-2 relative shrink-0 w-full hover:bg-gray-50 rounded transition-colors">
              <div className="content-stretch flex items-center justify-start relative shrink-0 w-full">
                <div className="box-border content-stretch flex gap-2.5 items-center justify-center overflow-clip p-[14px] relative rounded-[2px] shrink-0 size-11">
                  <Icon type="heart-hand" size="regular" />
                </div>
                <div className="basis-0 content-stretch flex flex-col gap-1 grow items-start justify-start min-h-px min-w-px relative shrink-0">
                  <div className="font-aptos font-semibold leading-[0] not-italic relative shrink-0 text-[#09141f] text-[14px] w-full">
                    <p className="leading-[18px]">Healthcare & Life Sciences</p>
                  </div>
                </div>
              </div>
            </Link>

            {/* Engineering */}
            <Link href="/engineering" className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start px-0 py-2 relative shrink-0 w-full hover:bg-gray-50 rounded transition-colors">
              <div className="content-stretch flex items-center justify-start relative shrink-0 w-full">
                <div className="box-border content-stretch flex gap-2.5 items-center justify-center overflow-clip p-[14px] relative rounded-[2px] shrink-0 size-11">
                  <Icon type="cog" size="regular" />
                </div>
                <div className="basis-0 content-stretch flex flex-col gap-1 grow items-start justify-start min-h-px min-w-px relative shrink-0">
                  <div className="font-aptos font-semibold leading-[0] not-italic relative shrink-0 text-[#09141f] text-[14px] w-full">
                    <p className="leading-[18px]">Engineering</p>
                  </div>
                </div>
              </div>
            </Link>

            {/* Energy */}
            <Link href="/energy" className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start px-0 py-2 relative shrink-0 w-full hover:bg-gray-50 rounded transition-colors">
              <div className="content-stretch flex items-center justify-start relative shrink-0 w-full">
                <div className="box-border content-stretch flex gap-2.5 items-center justify-center overflow-clip p-[14px] relative rounded-[2px] shrink-0 size-11">
                  <Icon type="sun" size="regular" />
                </div>
                <div className="basis-0 content-stretch flex flex-col gap-1 grow items-start justify-start min-h-px min-w-px relative shrink-0">
                  <div className="font-aptos font-semibold leading-[0] not-italic relative shrink-0 text-[#09141f] text-[14px] w-full">
                    <p className="leading-[18px]">Energy</p>
                  </div>
                </div>
              </div>
            </Link>

            {/* Private Equity */}
            <Link href="/private-equity" className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start px-0 py-2 relative shrink-0 w-full hover:bg-gray-50 rounded transition-colors">
              <div className="content-stretch flex items-center justify-start relative shrink-0 w-full">
                <div className="box-border content-stretch flex gap-2.5 items-center justify-center overflow-clip p-[14px] relative rounded-[2px] shrink-0 size-11">
                  <Icon type="bank-note-03" size="regular" />
                </div>
                <div className="basis-0 content-stretch flex flex-col gap-1 grow items-start justify-start min-h-px min-w-px relative shrink-0">
                  <div className="font-aptos font-semibold leading-[0] not-italic relative shrink-0 text-[#09141f] text-[14px] w-full">
                    <p className="leading-[18px]">Private Equity</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Candidates Column */}
        <div className="basis-0 content-stretch flex flex-col gap-4 grow items-start justify-start min-h-px min-w-px relative shrink-0">
          <div className="content-stretch flex gap-1 items-center justify-center relative shrink-0">
            <div className="font-aptos font-semibold leading-[0] not-italic relative shrink-0 text-[#595959] text-[14px] text-center text-nowrap">
              <p className="leading-[18px] whitespace-pre">Candidates</p>
            </div>
            <div className="shrink-0 size-4" />
          </div>
          <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full">

            {/* Explore Opportunities */}
            <Link href="/explore-jobs" className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start px-0 py-2 relative shrink-0 w-full hover:bg-gray-50 rounded transition-colors">
              <div className="content-stretch flex items-center justify-start relative shrink-0 w-full">
                <div className="box-border content-stretch flex gap-2.5 items-center justify-center overflow-clip p-[14px] relative rounded-[2px] shrink-0 size-11">
                  <Icon type="search-md" size="regular" />
                </div>
                <div className="basis-0 content-stretch flex flex-col gap-1 grow items-start justify-start leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[14px]">
                  <div className="font-aptos font-semibold relative shrink-0 text-[#09141f] w-full">
                    <p className="leading-[18px]">Explore Opportunities</p>
                  </div>
                  <div className="font-aptos font-normal relative shrink-0 text-[#535960] w-full">
                    <p className="leading-[18px]">See the Job Board</p>
                  </div>
                </div>
              </div>
            </Link>

            {/* Submit Your Resume */}
            <Link href="/submit-resume" className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start px-0 py-2 relative shrink-0 w-full hover:bg-gray-50 rounded transition-colors">
              <div className="content-stretch flex items-center justify-start relative shrink-0 w-full">
                <div className="box-border content-stretch flex gap-2.5 items-center justify-center overflow-clip p-[14px] relative rounded-[2px] shrink-0 size-11">
                  <Icon type="send-01" size="regular" />
                </div>
                <div className="basis-0 content-stretch flex flex-col gap-1 grow items-start justify-start leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[14px]">
                  <div className="font-aptos font-semibold relative shrink-0 text-[#09141f] w-full">
                    <p className="leading-[18px]">Submit Your Resume</p>
                  </div>
                  <div className="font-aptos font-normal relative shrink-0 text-[#535960] w-full">
                    <p className="leading-[18px]">Get recommended jobs based on skills</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}