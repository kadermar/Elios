"use client";

import Image from "next/image";
import Link from "next/link";
import Tagline from "./Tagline";
import Button from "./Button";

const imgImage56 = "/services-image-56.png";
const imgImage58 = "/services-image-58.png";
const imgVector622 = "/services-vector-622.svg";
const imgImage57 = "/services-image-57.svg";
const imgUnion = "/services-union.svg";
const img = "/services-arrow.svg";

export default function Services() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[60px] md:gap-[90px] items-center justify-center px-4 md:px-0 py-[80px] md:py-[152px] relative size-full" data-name="Services" data-node-id="65:1164">
      <div className="content-stretch flex flex-col gap-[80px] md:gap-[120px] items-center justify-center max-w-full lg:max-w-[1638px] relative shrink-0 w-full" data-name="Wrapper" data-node-id="65:1191">
        <div className="content-stretch flex flex-col gap-10 items-start justify-center relative shrink-0 w-full" data-name="Subhead Section" data-node-id="65:1192">
          <Tagline text="services" className="px-0 py-[18px]" />
          <div className="font-semibold leading-[1.1] md:leading-[0.9] not-italic relative shrink-0 text-[#09141f] text-[32px] md:text-[48px] lg:text-[64px] text-center md:text-left tracking-[-1.6px] md:tracking-[-2.4px] lg:tracking-[-3.2px] w-full" data-node-id="65:1196">
            <p className="whitespace-pre-wrap md:whitespace-pre">Two Offerings, One Mission</p>
          </div>
        </div>
        <div className="content-stretch flex flex-col lg:flex-row gap-[40px] lg:gap-[60px] items-stretch justify-start relative shrink-0 w-full" data-node-id="65:1197">
          <div className="bg-white box-border content-stretch flex flex-col gap-[30px] md:gap-[46px] h-auto lg:h-[1019px] items-center justify-center overflow-clip pb-8 md:pb-12 pt-6 px-4 md:px-6 relative rounded-[15px] shrink-0 w-full lg:w-[789px]" data-node-id="65:1198">
            <div className="relative w-full aspect-[741/409] rounded-[4px] overflow-hidden bg-stone-100" data-node-id="65:1199">
              <Image 
                src={imgImage56}
                alt="Elios Talent"
                fill
                className="object-cover"
                style={{ mixBlendMode: 'color-burn' }}
              />
            </div>
            <div className="basis-0 box-border content-stretch flex flex-col grow items-start justify-between min-h-px min-w-px px-5 py-0 relative shrink-0 w-full" data-node-id="65:1225">
              <div className="content-stretch flex flex-col gap-[42px] items-start justify-start relative shrink-0 w-full" data-node-id="65:1226">
                <div className="content-stretch flex gap-2.5 items-center justify-center relative shrink-0 w-full" data-node-id="65:1227">
                  <div className="basis-0 font-semibold grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#09141f] text-[28px] md:text-[32px] lg:text-[40px] tracking-[-1.4px] md:tracking-[-1.6px] lg:tracking-[-2px]" data-node-id="65:1228">
                    <p className="leading-[0.9]">Elios Talent</p>
                  </div>
                  <div className="h-[40.001px] relative shrink-0 w-[39.993px]" data-name="Union" data-node-id="65:1229">
                    <Image alt="" src={imgUnion} width={40} height={40} className="block max-w-none size-full" />
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[42px] items-start justify-start relative shrink-0 w-full" data-node-id="65:1254">
                  <div className="font-normal leading-[0] not-italic relative shrink-0 text-[#535960] text-[16px] md:text-[18px] lg:text-[20px] w-full" data-node-id="65:1255">
                    <p className="leading-[1.45]">Elios Talent is our high-touch recruiting service, powered by experienced recruiters who work side-by-side with clients to fill critical roles. Blending deep industry knowledge with proven processes, we deliver a human-centered experience that ensures the right fit, every time.</p>
                  </div>
                  <div className="content-stretch flex flex-col gap-[30px] items-start justify-start relative shrink-0 w-full" data-node-id="65:1256">
                    <div className="content-stretch flex gap-[18px] items-center justify-start relative shrink-0 w-full" data-node-id="65:1257">
                      <div className="bg-black rounded-[40px] shrink-0 size-[7px]" data-node-id="65:1258" />
                      <div className="basis-0 content-stretch flex flex-col gap-[18px] grow items-start justify-center min-h-px min-w-px relative shrink-0" data-node-id="65:1259">
                        <div className="font-semibold leading-[0] not-italic relative shrink-0 text-[16px] md:text-[18px] lg:text-[20px] text-black tracking-[-0.32px] md:tracking-[-0.36px] lg:tracking-[-0.4px] w-full" data-node-id="65:1260">
                          <p className="leading-[1.4] md:leading-[24px]">Dedicated recruiters who know your industry inside and out</p>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[18px] items-center justify-start relative shrink-0 w-full" data-node-id="65:1261">
                      <div className="bg-black rounded-[40px] shrink-0 size-[7px]" data-node-id="65:1262" />
                      <div className="basis-0 content-stretch flex flex-col gap-[18px] grow items-start justify-center min-h-px min-w-px relative shrink-0" data-node-id="65:1263">
                        <div className="font-semibold leading-[0] not-italic relative shrink-0 text-[16px] md:text-[18px] lg:text-[20px] text-black tracking-[-0.32px] md:tracking-[-0.36px] lg:tracking-[-0.4px] w-full" data-node-id="65:1264">
                          <p className="leading-[1.4] md:leading-[24px]">A curated talent network built from thousands of successful placements</p>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[18px] items-center justify-start relative shrink-0 w-full" data-node-id="65:1265">
                      <div className="bg-black rounded-[40px] shrink-0 size-[7px]" data-node-id="65:1266" />
                      <div className="basis-0 content-stretch flex flex-col gap-[18px] grow items-start justify-center min-h-px min-w-px relative shrink-0" data-node-id="65:1267">
                        <div className="font-semibold leading-[0] not-italic relative shrink-0 text-[16px] md:text-[18px] lg:text-[20px] text-black tracking-[-0.32px] md:tracking-[-0.36px] lg:tracking-[-0.4px] w-full" data-node-id="65:1268">
                          <p className="leading-[1.4] md:leading-[24px]">Structured process for intake, shortlisting, and interview prep</p>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[18px] items-center justify-start relative shrink-0 w-full" data-node-id="65:1269">
                      <div className="bg-black rounded-[40px] shrink-0 size-[7px]" data-node-id="65:1270" />
                      <div className="basis-0 content-stretch flex flex-col gap-[18px] grow items-start justify-center min-h-px min-w-px relative shrink-0" data-node-id="65:1271">
                        <div className="font-semibold leading-[0] not-italic relative shrink-0 text-[16px] md:text-[18px] lg:text-[20px] text-black tracking-[-0.32px] md:tracking-[-0.36px] lg:tracking-[-0.4px] w-full" data-node-id="65:1272">
                          <p className="leading-[1.4] md:leading-[24px]">Human judgment supported by data and market insights</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Button 
                variant="secondary" 
                href="/request-talent" 
                showArrow={true}
                className="text-[#fb5d0b] hover:text-[#d45413] bg-transparent hover:bg-transparent text-[24px] px-0 py-0"
              >
                Request Talent
              </Button>
            </div>
          </div>
          <div className="bg-white box-border content-stretch flex flex-col gap-[30px] md:gap-[46px] h-auto lg:h-auto items-center justify-center overflow-clip pb-8 md:pb-12 pt-6 px-4 md:px-6 relative rounded-[15px] w-full lg:flex-1 shrink-0" data-node-id="65:1276">
            <div className="relative w-full aspect-[741/409] rounded-[4px] overflow-hidden bg-stone-100" data-node-id="65:1277">
              <Image 
                src={imgImage58}
                alt="Elios Insights"
                fill
                className="object-cover"
                style={{ mixBlendMode: 'color-burn' }}
              />
            </div>
            <div className="basis-0 box-border content-stretch flex flex-col grow items-start justify-between min-h-px min-w-px px-5 py-0 relative shrink-0 w-full" data-node-id="65:1303">
              <div className="content-stretch flex flex-col gap-9 items-start justify-start relative shrink-0 w-full" data-node-id="65:1304">
                <div className="content-stretch flex gap-2.5 items-center justify-center relative shrink-0 w-full" data-node-id="65:1305">
                  <div className="basis-0 font-semibold grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#09141f] text-[40px] tracking-[-2px]" data-node-id="65:1306">
                    <p className="leading-[0.9]">Elios Insights</p>
                  </div>
                  <div className="h-[40.001px] relative shrink-0 w-[39.993px]" data-name="Union" data-node-id="65:1307">
                    <Image alt="" src={imgUnion} width={40} height={40} className="block max-w-none size-full" />
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[42px] items-start justify-start relative shrink-0 w-full" data-node-id="65:1332">
                  <div className="font-normal leading-[0] not-italic relative shrink-0 text-[#535960] text-[20px] w-full" data-node-id="65:1333">
                    <p className="leading-[1.45]">Elios Insights is our platform&mdash;an intelligence layer that reimagines the end-to-end recruiter workflow. By automating manual steps and surfacing smarter shortlists, it frees teams to focus on high-impact conversations and better hiring decisions.</p>
                  </div>
                  <div className="content-stretch flex flex-col gap-[30px] items-start justify-start relative shrink-0 w-full" data-node-id="65:1334">
                    <div className="content-stretch flex gap-[18px] items-center justify-start relative shrink-0 w-full" data-node-id="65:1335">
                      <div className="bg-black rounded-[40px] shrink-0 size-[7px]" data-node-id="65:1336" />
                      <div className="basis-0 content-stretch flex flex-col gap-[18px] grow items-start justify-center min-h-px min-w-px relative shrink-0" data-node-id="65:1337">
                        <div className="font-semibold leading-[0] not-italic relative shrink-0 text-[20px] text-black tracking-[-0.4px] w-full" data-node-id="65:1338">
                          <p className="leading-[24px]">AI-powered candidate matching layered on your ATS</p>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[18px] items-center justify-start relative shrink-0 w-full" data-node-id="65:1339">
                      <div className="bg-black rounded-[40px] shrink-0 size-[7px]" data-node-id="65:1340" />
                      <div className="basis-0 content-stretch flex flex-col gap-[18px] grow items-start justify-center min-h-px min-w-px relative shrink-0" data-node-id="65:1341">
                        <div className="font-semibold leading-[0] not-italic relative shrink-0 text-[20px] text-black tracking-[-0.4px] w-full" data-node-id="65:1342">
                          <p className="leading-[24px]">Automated scheduling, feedback collection, and coordination</p>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[18px] items-center justify-start relative shrink-0 w-full" data-node-id="65:1343">
                      <div className="bg-black rounded-[40px] shrink-0 size-[7px]" data-node-id="65:1344" />
                      <div className="basis-0 content-stretch flex flex-col gap-[18px] grow items-start justify-center min-h-px min-w-px relative shrink-0" data-node-id="65:1345">
                        <div className="font-semibold leading-[0] not-italic relative shrink-0 text-[20px] text-black tracking-[-0.4px] w-full" data-node-id="65:1346">
                          <p className="leading-[24px]">Real-time dashboards to track funnel health and hiring metrics</p>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[18px] items-center justify-start relative shrink-0 w-full" data-node-id="65:1347">
                      <div className="bg-black rounded-[40px] shrink-0 size-[7px]" data-node-id="65:1348" />
                      <div className="basis-0 content-stretch flex flex-col gap-[18px] grow items-start justify-center min-h-px min-w-px relative shrink-0" data-node-id="65:1349">
                        <div className="font-semibold leading-[0] not-italic relative shrink-0 text-[20px] text-black tracking-[-0.4px] w-full" data-node-id="65:1350">
                          <p className="leading-[24px]">Recruiter-in-the-loop design that keeps humans in control</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Button 
                variant="secondary" 
                href="/book-demo" 
                showArrow={true}
                className="text-[#fb5d0b] hover:text-[#d45413] bg-transparent hover:bg-transparent text-[24px] px-0 py-0"
              >
                Book a Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}