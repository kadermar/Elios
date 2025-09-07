"use client";

import Image from "next/image";
import Link from "next/link";

const imgImage56 = "/dropdown-new-image-56.png";
const imgImage57 = "/dropdown-new-image-57.svg";
const imgCarat = "/dropdown-new-carat.svg";
const imgFrame = "/dropdown-new-frame1.svg";
const imgFrame1 = "/dropdown-new-frame2.svg";
const imgFrame2 = "/dropdown-new-frame3.svg";
const imgFrame3 = "/dropdown-new-frame4.svg";
const imgFrame4 = "/dropdown-new-frame5.svg";
const imgFrame5 = "/dropdown-new-frame6.svg";
const imgFrame6 = "/dropdown-new-frame7.svg";
const imgFrame7 = "/dropdown-new-frame8.svg";
const imgFrame8 = "/dropdown-new-frame9.svg";
const imgFrame9 = "/dropdown-new-frame10.svg";
const imgFrame10 = "/dropdown-new-frame11.svg";

export default function EliosTalentDropdown() {
  return (
    <div 
      className="bg-white box-border flex gap-[180px] items-center justify-center p-[60px] relative rounded-[15px] shadow-[166px_377px_115px_0px_rgba(0,0,0,0),106px_241px_105px_0px_rgba(0,0,0,0.01),60px_136px_89px_0px_rgba(0,0,0,0.05),27px_60px_66px_0px_rgba(0,0,0,0.09),7px_15px_36px_0px_rgba(0,0,0,0.1)] w-[1638px]" 
      style={{ 
        backdropFilter: 'none',
        backgroundColor: 'rgb(255, 255, 255)',
        opacity: 1
      }}
      data-node-id="98:668"
    >
      <div className="basis-0 content-stretch flex grow items-start justify-between max-w-[1638px] min-h-px min-w-px relative shrink-0" data-node-id="98:669">
        <div className="content-stretch flex flex-col gap-10 items-start justify-center leading-[0] relative shrink-0" data-node-id="98:670">
          <div className="content-stretch flex flex-col gap-[30px] items-start justify-start not-italic relative shrink-0" data-node-id="98:671">
            <div className="font-aptos font-bold relative shrink-0 text-[#09141f] text-[24px] text-nowrap" data-node-id="98:672">
              <p className="leading-[22px] whitespace-pre">Why Elios Talent?</p>
            </div>
            <div className="font-aptos font-normal relative shrink-0 text-[#535960] text-[16px] w-[300px]" data-node-id="98:673">
              <p className="leading-[22px]">Because finding the right people isn't about volume—it's about precision. Elios combines AI matching with human expertise to deliver top candidates faster, tailored to your industry's unique challenges.</p>
            </div>
          </div>
          <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-node-id="98:674">
            <div className="[grid-area:1_/_1] bg-stone-100 h-[198px] ml-0 mt-0 rounded-[15px] w-[205.379px]" data-node-id="98:675" />
            <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-0 mt-0 place-items-start relative" data-name="Mask group" data-node-id="98:676">
              <div className="[grid-area:1_/_1] bg-center bg-cover bg-no-repeat h-[316px] ml-px mt-0 rounded-[15px] w-[285px] relative overflow-hidden" data-name="image 56" data-node-id="98:699">
                <Image
                  src={imgImage56}
                  alt=""
                  fill
                  className="object-cover mix-blend-color-burn"
                  style={{ 
                    maskImage: `url('${imgImage57}')`,
                    maskSize: '205.379px 198px',
                    maskPosition: '-1px 0px',
                    maskRepeat: 'no-repeat'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-5 items-start justify-start relative shrink-0" data-node-id="98:700">
          <Link href="/staffing-services" className="content-stretch flex gap-1 items-center justify-start relative shrink-0 w-full cursor-pointer hover:shadow-[0_0_20px_rgba(250,106,32,0.5)] hover:bg-orange-50 transition-all duration-200 rounded-lg p-2 -m-2" data-node-id="98:701">
            <div className="font-aptos font-semibold leading-[0] not-italic relative shrink-0 text-[#09141f] text-[15px] text-nowrap" data-node-id="98:702">
              <p className="leading-[22px] whitespace-pre">Staffing Services</p>
            </div>
            <div className="relative shrink-0 size-3.5" data-name="Carat" data-node-id="98:703">
              <Image alt="" src={imgCarat} width={14} height={14} className="block max-w-none size-full" />
            </div>
          </Link>
          <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full" data-node-id="98:705">
            <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start p-[10px] relative shrink-0" data-node-id="98:706">
              <div className="content-stretch flex gap-[15px] items-center justify-start relative shrink-0" data-node-id="98:707">
                <div className="bg-[#f4f4f4] box-border content-stretch flex gap-2.5 items-center justify-start overflow-clip p-[14px] relative rounded-[6px] shrink-0" data-name="Frame" data-node-id="98:708">
                  <div className="relative shrink-0 size-5" data-name="Frame" data-node-id="98:709">
                    <Image alt="" src={imgFrame} width={20} height={20} className="block max-w-none size-full" />
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-3.5 items-start justify-start leading-[0] not-italic relative shrink-0 text-nowrap" data-name="Footer Column" data-node-id="98:711">
                  <div className="font-aptos font-semibold relative shrink-0 text-[#09141f] text-[16px]" data-node-id="98:712">
                    <p className="leading-[22px] text-nowrap whitespace-pre">Staff Augmentation</p>
                  </div>
                  <div className="font-aptos font-normal relative shrink-0 text-[#535960] text-[15px] text-center" data-node-id="98:713">
                    <p className="leading-[22px] text-nowrap whitespace-pre">Temporary skilled professionals</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start p-[10px] relative shrink-0" data-node-id="98:714">
              <div className="content-stretch flex gap-[15px] items-center justify-start relative shrink-0" data-node-id="98:715">
                <div className="bg-[#f4f4f4] box-border content-stretch flex gap-2.5 items-center justify-start overflow-clip p-[14px] relative rounded-[6px] shrink-0" data-name="Frame" data-node-id="98:716">
                  <div className="relative shrink-0 size-5" data-name="Frame" data-node-id="98:717">
                    <Image alt="" src={imgFrame1} width={20} height={20} className="block max-w-none size-full" />
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-3.5 items-start justify-start leading-[0] not-italic relative shrink-0 text-nowrap" data-name="Footer Column" data-node-id="98:719">
                  <div className="font-aptos font-semibold relative shrink-0 text-[#09141f] text-[16px]" data-node-id="98:720">
                    <p className="leading-[22px] text-nowrap whitespace-pre">Permanent Hire</p>
                  </div>
                  <div className="font-aptos font-normal relative shrink-0 text-[#535960] text-[15px] text-center" data-node-id="98:721">
                    <p className="leading-[22px] text-nowrap whitespace-pre">Full-time direct placements</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start p-[10px] relative shrink-0" data-node-id="98:722">
              <div className="content-stretch flex gap-[15px] items-center justify-start relative shrink-0" data-node-id="98:723">
                <div className="h-[47.856px] relative shrink-0 w-[46px]" data-name="Frame" data-node-id="98:724">
                  <Image alt="" src={imgFrame2} width={46} height={48} className="block max-w-none size-full" />
                </div>
                <div className="content-stretch flex flex-col gap-3.5 items-start justify-start leading-[0] not-italic relative shrink-0 text-nowrap" data-name="Footer Column" data-node-id="98:726">
                  <div className="font-aptos font-semibold relative shrink-0 text-[#09141f] text-[16px]" data-node-id="98:727">
                    <p className="leading-[22px] text-nowrap whitespace-pre">RPO</p>
                  </div>
                  <div className="font-aptos font-normal relative shrink-0 text-[#535960] text-[15px] text-center" data-node-id="98:728">
                    <p className="leading-[22px] text-nowrap whitespace-pre">Recruitment process outsourcing</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start p-[10px] relative shrink-0" data-node-id="98:729">
              <div className="content-stretch flex gap-[15px] items-center justify-start relative shrink-0" data-node-id="98:730">
                <div className="bg-[#f4f4f4] box-border content-stretch flex gap-2.5 items-center justify-start overflow-clip p-[14px] relative rounded-[6px] shrink-0" data-name="Frame" data-node-id="98:731">
                  <div className="relative shrink-0 size-5" data-name="Frame" data-node-id="98:732">
                    <Image alt="" src={imgFrame3} width={20} height={20} className="block max-w-none size-full" />
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-3.5 items-start justify-start leading-[0] not-italic relative shrink-0 text-nowrap" data-name="Footer Column" data-node-id="98:734">
                  <div className="font-aptos font-semibold relative shrink-0 text-[#09141f] text-[16px]" data-node-id="98:735">
                    <p className="leading-[22px] text-nowrap whitespace-pre">Executive Search</p>
                  </div>
                  <div className="font-aptos font-normal relative shrink-0 text-[#535960] text-[15px] text-center" data-node-id="98:736">
                    <p className="leading-[22px] text-nowrap whitespace-pre">C-level and senior leadership</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-5 items-start justify-start relative shrink-0" data-node-id="98:737">
          <Link href="/industries" className="content-stretch flex gap-1 items-center justify-start relative shrink-0 w-full cursor-pointer hover:shadow-[0_0_20px_rgba(250,106,32,0.5)] hover:bg-orange-50 transition-all duration-200 rounded-lg p-2 -m-2" data-node-id="98:738">
            <div className="font-aptos font-semibold leading-[0] not-italic relative shrink-0 text-[#09141f] text-[15px] text-nowrap" data-node-id="98:739">
              <p className="leading-[22px] whitespace-pre">Industries</p>
            </div>
            <div className="relative shrink-0 size-3.5" data-name="Carat" data-node-id="98:740">
              <Image alt="" src={imgCarat} width={14} height={14} className="block max-w-none size-full" />
            </div>
          </Link>
          <div className="content-stretch flex flex-col items-start justify-start relative shrink-0" data-node-id="98:742">
            <Link href="/technology" className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start p-[10px] relative shrink-0 w-full cursor-pointer hover:shadow-[0_0_20px_rgba(250,106,32,0.5)] hover:bg-orange-50 transition-all duration-200 rounded-lg" data-node-id="98:743">
              <div className="content-stretch flex gap-[15px] items-center justify-start relative shrink-0" data-node-id="98:744">
                <div className="bg-[#f4f4f4] box-border content-stretch flex gap-2.5 items-center justify-start overflow-clip p-[14px] relative rounded-[6px] shrink-0" data-name="Frame" data-node-id="98:745">
                  <div className="relative shrink-0 size-5" data-name="Frame" data-node-id="98:746">
                    <Image alt="" src={imgFrame4} width={20} height={20} className="block max-w-none size-full" />
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-3.5 items-start justify-start relative shrink-0" data-name="Footer Column" data-node-id="98:748">
                  <div className="font-aptos font-semibold leading-[0] not-italic relative shrink-0 text-[#09141f] text-[16px] text-nowrap" data-node-id="98:749">
                    <p className="leading-[22px] whitespace-pre">Technology</p>
                  </div>
                </div>
              </div>
            </Link>
            <Link href="/healthcare" className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start p-[10px] relative rounded-[5px] shrink-0 w-full cursor-pointer hover:shadow-[0_0_20px_rgba(250,106,32,0.5)] hover:bg-orange-50 transition-all duration-200" data-node-id="98:750">
              <div className="content-stretch flex gap-[15px] items-center justify-start relative shrink-0" data-node-id="98:751">
                <div className="bg-[#f4f4f4] box-border content-stretch flex gap-2.5 items-center justify-start overflow-clip p-[14px] relative rounded-[6px] shrink-0" data-name="Frame" data-node-id="98:752">
                  <div className="relative shrink-0 size-5" data-name="Frame" data-node-id="98:753">
                    <Image alt="" src={imgFrame5} width={20} height={20} className="block max-w-none size-full" />
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-3.5 items-start justify-start relative shrink-0" data-name="Footer Column" data-node-id="98:755">
                  <div className="font-aptos font-semibold leading-[0] not-italic relative shrink-0 text-[#09141f] text-[16px] text-nowrap" data-node-id="98:756">
                    <p className="leading-[22px] whitespace-pre">{`Healthcare & Life Sciences`}</p>
                  </div>
                </div>
              </div>
            </Link>
            <Link href="/engineering" className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start p-[10px] relative shrink-0 w-full cursor-pointer hover:shadow-[0_0_20px_rgba(250,106,32,0.5)] hover:bg-orange-50 transition-all duration-200 rounded-lg" data-node-id="98:757">
              <div className="content-stretch flex gap-[15px] items-center justify-start relative shrink-0" data-node-id="98:758">
                <div className="bg-[#f4f4f4] box-border content-stretch flex gap-2.5 items-center justify-start overflow-clip p-[14px] relative rounded-[6px] shrink-0" data-name="Frame" data-node-id="98:759">
                  <div className="relative shrink-0 size-5" data-name="Frame" data-node-id="98:760">
                    <Image alt="" src={imgFrame6} width={20} height={20} className="block max-w-none size-full" />
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-3.5 items-start justify-start relative shrink-0" data-name="Footer Column" data-node-id="98:762">
                  <div className="font-aptos font-semibold leading-[0] not-italic relative shrink-0 text-[#09141f] text-[16px] text-nowrap" data-node-id="98:763">
                    <p className="leading-[22px] whitespace-pre">{`Engineering`}</p>
                  </div>
                </div>
              </div>
            </Link>
            <Link href="/energy" className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start p-[10px] relative shrink-0 w-full cursor-pointer hover:shadow-[0_0_20px_rgba(250,106,32,0.5)] hover:bg-orange-50 transition-all duration-200 rounded-lg" data-node-id="98:764">
              <div className="content-stretch flex gap-[15px] items-center justify-start relative shrink-0" data-node-id="98:765">
                <div className="bg-[#f4f4f4] box-border content-stretch flex gap-2.5 items-center justify-start overflow-clip p-[14px] relative rounded-[6px] shrink-0" data-name="Frame" data-node-id="98:766">
                  <div className="relative shrink-0 size-5" data-name="Frame" data-node-id="98:767">
                    <Image alt="" src={imgFrame7} width={20} height={20} className="block max-w-none size-full" />
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-3.5 items-start justify-start relative shrink-0" data-name="Footer Column" data-node-id="98:769">
                  <div className="font-aptos font-semibold leading-[0] not-italic relative shrink-0 text-[#09141f] text-[16px] text-nowrap" data-node-id="98:770">
                    <p className="leading-[22px] whitespace-pre">{`Energy`}</p>
                  </div>
                </div>
              </div>
            </Link>
            <Link href="/private-equity" className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start p-[10px] relative shrink-0 w-full cursor-pointer hover:shadow-[0_0_20px_rgba(250,106,32,0.5)] hover:bg-orange-50 transition-all duration-200 rounded-lg" data-node-id="98:771">
              <div className="content-stretch flex gap-[15px] items-center justify-start relative shrink-0" data-node-id="98:772">
                <div className="bg-[#f4f4f4] box-border content-stretch flex gap-2.5 items-center justify-start overflow-clip p-[14px] relative rounded-[6px] shrink-0" data-name="Frame" data-node-id="98:773">
                  <div className="relative shrink-0 size-5" data-name="Frame" data-node-id="98:774">
                    <Image alt="" src={imgFrame8} width={20} height={20} className="block max-w-none size-full" />
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-3.5 items-start justify-start relative shrink-0" data-name="Footer Column" data-node-id="98:776">
                  <div className="font-aptos font-semibold leading-[0] not-italic relative shrink-0 text-[#09141f] text-[16px] text-nowrap" data-node-id="98:777">
                    <p className="leading-[22px] whitespace-pre">{`Private Equity`}</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-5 items-start justify-start relative shrink-0" data-node-id="98:778">
          <Link href="/explore-jobs" className="content-stretch flex gap-1 items-center justify-start relative shrink-0 w-full cursor-pointer hover:shadow-[0_0_20px_rgba(250,106,32,0.5)] hover:bg-orange-50 transition-all duration-200 rounded-lg p-2 -m-2" data-node-id="98:779">
            <div className="font-aptos font-semibold leading-[0] not-italic relative shrink-0 text-[#09141f] text-[15px] text-nowrap" data-node-id="98:780">
              <p className="leading-[22px] whitespace-pre">Explore Jobs</p>
            </div>
            <div className="relative shrink-0 size-3.5" data-name="Carat" data-node-id="98:781">
              <Image alt="" src={imgCarat} width={14} height={14} className="block max-w-none size-full" />
            </div>
          </Link>
          <div className="content-stretch flex flex-col items-start justify-start relative shrink-0" data-node-id="98:783">
            <Link href="/explore-jobs" className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start p-[10px] relative shrink-0 w-full cursor-pointer hover:shadow-[0_0_20px_rgba(250,106,32,0.5)] hover:bg-orange-50 transition-all duration-200 rounded-lg" data-node-id="98:784">
              <div className="content-stretch flex gap-[15px] items-center justify-start relative shrink-0" data-node-id="98:785">
                <div className="bg-[#f4f4f4] box-border content-stretch flex gap-2.5 items-center justify-start overflow-clip p-[14px] relative rounded-[6px] shrink-0" data-name="Frame" data-node-id="98:786">
                  <div className="relative shrink-0 size-5" data-name="Frame" data-node-id="98:787">
                    <Image alt="" src={imgFrame9} width={20} height={20} className="block max-w-none size-full" />
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-3.5 items-start justify-start leading-[0] not-italic relative shrink-0 text-nowrap" data-name="Footer Column" data-node-id="98:789">
                  <div className="font-aptos font-semibold relative shrink-0 text-[#09141f] text-[16px]" data-node-id="98:790">
                    <p className="leading-[22px] text-nowrap whitespace-pre">Explore Opportunities</p>
                  </div>
                  <div className="font-aptos font-normal relative shrink-0 text-[#535960] text-[15px] text-center" data-node-id="98:791">
                    <p className="leading-[22px] text-nowrap whitespace-pre">Job Board</p>
                  </div>
                </div>
              </div>
            </Link>
            <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start p-[10px] relative shrink-0" data-node-id="98:792">
              <div className="content-stretch flex gap-[15px] items-center justify-start relative shrink-0" data-node-id="98:793">
                <div className="bg-[#f4f4f4] box-border content-stretch flex gap-2.5 items-center justify-start overflow-clip p-[14px] relative rounded-[6px] shrink-0" data-name="Frame" data-node-id="98:794">
                  <div className="relative shrink-0 size-5" data-name="Frame" data-node-id="98:795">
                    <Image alt="" src={imgFrame10} width={20} height={20} className="block max-w-none size-full" />
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-3.5 items-start justify-start leading-[0] not-italic relative shrink-0 text-nowrap" data-name="Footer Column" data-node-id="98:797">
                  <div className="font-aptos font-semibold relative shrink-0 text-[#09141f] text-[16px]" data-node-id="98:798">
                    <p className="leading-[22px] text-nowrap whitespace-pre">Submit Your Resume</p>
                  </div>
                  <div className="font-aptos font-normal relative shrink-0 text-[#535960] text-[15px] text-center" data-node-id="98:799">
                    <p className="leading-[22px] text-nowrap whitespace-pre">Get recommended jobs based on your skills</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}