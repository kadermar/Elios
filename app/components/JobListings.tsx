"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function JobListings() {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('Most Relevant');

  return (
    <>
      {/* Search Bar Section */}
      <div className="w-full bg-white py-8 md:py-[42px] overflow-hidden">
        <div className="mx-auto px-4 md:px-8 lg:px-[141px] max-w-screen-2xl">
          <div className="max-w-full lg:max-w-[1638px] mx-auto">
            <div className="bg-white box-border flex w-full max-w-full h-auto lg:h-[84px] px-4 md:px-[20px] pr-2 md:pr-[10px] flex-col justify-center items-start gap-[10px] absolute left-1/2 transform -translate-x-1/2 top-[368px] rounded-[13px] shadow-[0px_66px_18px_0px_rgba(0,0,0,0),0px_42px_17px_0px_rgba(0,0,0,0.01),0px_24px_14px_0px_rgba(0,0,0,0.02),0px_10px_10px_0px_rgba(0,0,0,0.03),0px_3px_6px_0px_rgba(0,0,0,0.04)]">
              <div className="content-stretch flex flex-col lg:flex-row gap-3 items-start lg:items-center justify-start relative shrink-0 w-full min-h-[58px] lg:h-[58px]">
                {/* Job Search Input */}
                <div className="flex-1 bg-white box-border content-stretch flex h-11 items-center justify-between px-3 md:px-5 py-3.5 relative rounded-[8px] shrink-0">
                  <div className="content-stretch flex gap-2.5 items-center justify-start relative shrink-0">
                    <div className="relative shrink-0 size-5">
                      <svg width="20" height="20" viewBox="0 0 20 20" className="text-gray-400">
                        <path d="M19 19l-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <input
                      type="text"
                      placeholder="Search job title"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="font-aptos leading-[0] not-italic text-[#535960] text-[20px] text-center text-nowrap tracking-[-0.4px] border-none outline-none bg-transparent placeholder:text-[#535960]"
                    />
                  </div>
                  <div className="relative shrink-0 size-3">
                    <svg width="12" height="12" viewBox="0 0 12 12" className="text-gray-400">
                      <path d="M9 3L3 9M3 3l6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                
                {/* Divider */}
                <div className="flex h-[0px] items-center justify-center relative shrink-0 w-[0px]">
                  <div className="flex-none rotate-[90deg]">
                    <div className="h-0 relative w-6">
                      <div className="absolute bottom-0 left-0 right-0 top-[-2px] border-t border-gray-300"></div>
                    </div>
                  </div>
                </div>
                
                {/* Location Search Input */}
                <div className="bg-white box-border content-stretch flex gap-2.5 h-11 items-center justify-start px-3 md:px-5 py-3.5 relative rounded-[8px] shrink-0 w-full lg:w-[378px]">
                  <div className="relative shrink-0 size-5">
                    <svg width="20" height="20" viewBox="0 0 20 20" className="text-gray-400">
                      <path d="M10 2C7.239 2 5 4.239 5 7c0 4.418 5 9 5 9s5-4.582 5-9c0-2.761-2.239-5-5-5zm0 7a2 2 0 110-4 2 2 0 010 4z" fill="currentColor"/>
                    </svg>
                  </div>
                  <input
                    type="text"
                    placeholder="Search by city or country"
                    className="font-aptos leading-[0] not-italic text-[#535960] text-base lg:text-[20px] text-center lg:text-nowrap border-none outline-none bg-transparent placeholder:text-[#535960] flex-1"
                  />
                </div>
                
                {/* Search Button */}
                <div className="bg-black box-border content-stretch flex gap-2 h-11 lg:h-[58px] items-center justify-center px-4 md:px-6 py-3 md:py-4 relative rounded-[8px] shrink-0 w-full lg:w-auto">
                  <div className="font-aptos font-semibold leading-[0] not-italic text-[16px] text-center text-nowrap text-white">
                    <p className="leading-[20px] whitespace-pre">Search</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white box-border content-stretch flex flex-col items-center justify-center pb-[70px] pt-[120px] px-4 md:px-8 lg:px-0 relative size-full overflow-hidden">
        <div className="content-stretch flex flex-col lg:flex-row gap-6 lg:gap-10 items-start justify-start max-w-full lg:max-w-[1638px] relative shrink-0 w-full lg:px-[141px]">
          {/* Left Sidebar - Filters */}
          <div className="content-stretch flex flex-col gap-8 lg:gap-20 items-start justify-center relative shrink-0 w-full lg:w-auto">
            <div className="bg-white content-stretch flex gap-[18px] items-start justify-start relative rounded-[12px] shrink-0 w-full lg:w-[315px]">
              <div className="basis-0 content-stretch flex flex-col gap-6 grow items-start justify-start min-h-px min-w-px relative shrink-0">
                <div className="font-aptos font-semibold leading-[0] not-italic relative shrink-0 text-[#09141f] text-[24px] tracking-[-1.44px] w-full">
                  <p className="leading-[96px]">Filters</p>
                </div>
                <div className="content-stretch flex flex-col gap-4 items-start justify-start relative shrink-0 w-full">
                  <div className="content-stretch flex flex-col gap-2 items-start justify-start relative shrink-0 w-full">
                    {/* Technology */}
                    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                      <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0">
                        <div className="box-border content-stretch flex items-start justify-center px-0 py-0.5 relative shrink-0">
                          <div className="relative rounded-[4px] shrink-0 size-4">
                            <div aria-hidden="true" className="absolute border border-[#9b9b9b] border-solid inset-0 pointer-events-none rounded-[4px]" />
                          </div>
                        </div>
                        <div className="content-stretch flex gap-1 items-baseline justify-start relative shrink-0">
                          <div className="font-aptos font-semibold leading-[0] not-italic relative shrink-0 text-[#09141f] text-[16px] text-nowrap">
                            <p className="leading-[22px] whitespace-pre">Technology</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-[#ececec] box-border content-stretch flex gap-2 items-center justify-start p-[2px] relative rounded-[3px] shrink-0">
                        <div className="content-stretch flex gap-1 items-baseline justify-start relative shrink-0">
                          <div className="content-stretch flex flex-col gap-2.5 items-center justify-center relative shrink-0 w-[18px]">
                            <div className="font-aptos font-semibold leading-[0] not-italic relative shrink-0 text-[#3a4252] text-[12px] text-center w-full">
                              <p className="leading-[1.4]">24</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Healthcare */}
                    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                      <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0">
                        <div className="box-border content-stretch flex items-start justify-center px-0 py-0.5 relative shrink-0">
                          <div className="relative rounded-[4px] shrink-0 size-4">
                            <div aria-hidden="true" className="absolute border border-[#9b9b9b] border-solid inset-0 pointer-events-none rounded-[4px]" />
                          </div>
                        </div>
                        <div className="content-stretch flex gap-1 items-baseline justify-start relative shrink-0">
                          <div className="font-aptos font-semibold leading-[0] not-italic relative shrink-0 text-[#09141f] text-[16px] text-nowrap">
                            <p className="leading-[1.4] whitespace-pre">Healthcare</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-[#ececec] box-border content-stretch flex gap-2 items-center justify-start p-[2px] relative rounded-[3px] shrink-0">
                        <div className="content-stretch flex gap-1 items-baseline justify-start relative shrink-0">
                          <div className="content-stretch flex flex-col gap-2.5 items-center justify-center relative shrink-0 w-[18px]">
                            <div className="font-aptos font-semibold leading-[0] not-italic relative shrink-0 text-[#3a4252] text-[12px] text-center text-nowrap">
                              <p className="leading-[1.4] whitespace-pre">210</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Engineering */}
                    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                      <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0">
                        <div className="box-border content-stretch flex items-start justify-center px-0 py-0.5 relative shrink-0">
                          <div className="relative rounded-[4px] shrink-0 size-4">
                            <div aria-hidden="true" className="absolute border border-[#9b9b9b] border-solid inset-0 pointer-events-none rounded-[4px]" />
                          </div>
                        </div>
                        <div className="content-stretch flex gap-1 items-baseline justify-start relative shrink-0">
                          <div className="font-aptos font-semibold leading-[0] not-italic relative shrink-0 text-[#09141f] text-[16px] text-nowrap">
                            <p className="leading-[1.4] whitespace-pre">Engineering</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-[#ececec] box-border content-stretch flex gap-2 items-center justify-center p-[2px] relative rounded-[3px] shrink-0 w-[30px]">
                        <div className="content-stretch flex gap-1 items-baseline justify-start relative shrink-0">
                          <div className="content-stretch flex flex-col gap-2.5 items-center justify-center relative shrink-0 w-[18px]">
                            <div className="font-aptos font-semibold leading-[0] not-italic relative shrink-0 text-[#3a4252] text-[12px] text-center text-nowrap">
                              <p className="leading-[1.4] whitespace-pre">220</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Finance & Accounting */}
                    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                      <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0">
                        <div className="box-border content-stretch flex items-start justify-center px-0 py-0.5 relative shrink-0">
                          <div className="relative rounded-[4px] shrink-0 size-4">
                            <div aria-hidden="true" className="absolute border border-[#9b9b9b] border-solid inset-0 pointer-events-none rounded-[4px]" />
                          </div>
                        </div>
                        <div className="content-stretch flex gap-1 items-baseline justify-start relative shrink-0">
                          <div className="font-aptos font-semibold leading-[0] not-italic relative shrink-0 text-[#09141f] text-[16px] text-nowrap">
                            <p className="leading-[1.4] whitespace-pre">Finance & Accounting</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-[#ececec] box-border content-stretch flex gap-2 items-center justify-center p-[2px] relative rounded-[3px] shrink-0 w-[30px]">
                        <div className="content-stretch flex gap-1 items-baseline justify-start relative shrink-0">
                          <div className="content-stretch flex flex-col gap-2.5 items-center justify-center relative shrink-0 w-[18px]">
                            <div className="font-aptos font-semibold leading-[0] not-italic relative shrink-0 text-[#3a4252] text-[12px] text-center text-nowrap">
                              <p className="leading-[1.4] whitespace-pre">220</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Life Sciences */}
                    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                      <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0">
                        <div className="box-border content-stretch flex items-start justify-center px-0 py-0.5 relative shrink-0">
                          <div className="relative rounded-[4px] shrink-0 size-4">
                            <div aria-hidden="true" className="absolute border border-[#9b9b9b] border-solid inset-0 pointer-events-none rounded-[4px]" />
                          </div>
                        </div>
                        <div className="content-stretch flex gap-1 items-baseline justify-start relative shrink-0">
                          <div className="font-aptos font-semibold leading-[0] not-italic relative shrink-0 text-[#09141f] text-[16px] text-nowrap">
                            <p className="leading-[1.4] whitespace-pre">Life Sciences</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-[#ececec] box-border content-stretch flex gap-2 items-center justify-center p-[2px] relative rounded-[3px] shrink-0 w-[30px]">
                        <div className="content-stretch flex gap-1 items-baseline justify-start relative shrink-0">
                          <div className="content-stretch flex flex-col gap-2.5 items-center justify-center relative shrink-0 w-[18px]">
                            <div className="font-aptos font-semibold leading-[0] not-italic relative shrink-0 text-[#3a4252] text-[12px] text-center text-nowrap">
                              <p className="leading-[1.4] whitespace-pre">220</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Private Equity */}
                    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                      <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0">
                        <div className="box-border content-stretch flex items-start justify-center px-0 py-0.5 relative shrink-0">
                          <div className="relative rounded-[4px] shrink-0 size-4">
                            <div aria-hidden="true" className="absolute border border-[#9b9b9b] border-solid inset-0 pointer-events-none rounded-[4px]" />
                          </div>
                        </div>
                        <div className="content-stretch flex gap-1 items-baseline justify-start relative shrink-0">
                          <div className="font-aptos font-semibold leading-[0] not-italic relative shrink-0 text-[#09141f] text-[16px] text-nowrap">
                            <p className="leading-[1.4] whitespace-pre">Private Equity</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-[#ececec] box-border content-stretch flex gap-2 items-center justify-center p-[2px] relative rounded-[3px] shrink-0 w-[30px]">
                        <div className="content-stretch flex gap-1 items-baseline justify-start relative shrink-0">
                          <div className="content-stretch flex flex-col gap-2.5 items-center justify-center relative shrink-0 w-[18px]">
                            <div className="font-aptos font-semibold leading-[0] not-italic relative shrink-0 text-[#3a4252] text-[12px] text-center text-nowrap">
                              <p className="leading-[1.4] whitespace-pre">220</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Job Listings */}
          <div className="content-stretch flex flex-col gap-6 lg:gap-[31px] items-start justify-start relative flex-1 w-full">
            <div className="content-stretch flex flex-col sm:flex-row items-start sm:items-center justify-between relative shrink-0 w-full gap-4">
              <div className="font-aptos font-semibold leading-[0] not-italic relative shrink-0 text-[#09141f] text-lg lg:text-[20px] text-nowrap">
                <p className="leading-[22px] whitespace-pre">200 Results</p>
              </div>
              <div className="content-stretch flex gap-2.5 items-center justify-center relative shrink-0">
                <div className="font-aptos leading-[0] not-italic relative shrink-0 text-[#09141f] text-sm lg:text-[16px] text-nowrap">
                  <p className="leading-[22px] whitespace-pre">Sort: Most Relevant</p>
                </div>
                <div className="relative shrink-0 size-3.5">
                  <img alt="" className="block max-w-none size-full" src="http://localhost:3845/assets/573932348127699381859fe288dac033a32dfbc4.svg" />
                </div>
              </div>
            </div>
            
            <div className="content-stretch flex flex-col gap-[18px] items-start justify-start relative shrink-0 w-full">
              {/* Meta Job */}
              <Link href="/jobs/engineering-tech" className="bg-white box-border content-stretch flex flex-col sm:flex-row gap-4 sm:gap-[18px] items-start justify-start p-4 sm:p-6 lg:p-[30px] relative rounded-[8px] shrink-0 w-full cursor-pointer hover:shadow-md transition-shadow">
                <div aria-hidden="true" className="absolute border border-[#c8c8c8] border-solid inset-0 pointer-events-none rounded-[8px]" />
                <div className="w-full sm:basis-0 content-stretch flex flex-col sm:flex-row gap-4 sm:gap-[18px] sm:grow items-start justify-start relative shrink-0">
                  <div className="bg-center bg-cover bg-no-repeat shrink-0 size-12 sm:size-14 lg:size-16 rounded-lg" style={{ backgroundImage: `url('http://localhost:3845/assets/d88bfafc52e742749dd7ad47c6a4a5d6f36195a8.png')` }} />
                  <div className="flex-1 content-stretch flex flex-col gap-3 lg:gap-[15px] items-start justify-center relative shrink-0">
                    <div className="content-stretch flex flex-col gap-2 lg:gap-3.5 items-start justify-start relative shrink-0 w-full">
                      <div className="font-aptos font-semibold leading-[0] min-w-full not-italic relative shrink-0 text-[#211f1f] text-lg lg:text-[20px] tracking-[-0.8px]">
                        <p className="leading-[24px]">Engineering Tech</p>
                      </div>
                      <div className="content-stretch flex flex-wrap gap-1 items-center justify-start relative shrink-0">
                        <div className="font-aptos-display leading-[0] not-italic relative shrink-0 text-[#535960] text-[14px] text-nowrap">
                          <p className="leading-[24px] whitespace-pre">Meta</p>
                        </div>
                        <div className="font-inter font-normal leading-[0] not-italic relative shrink-0 text-[#535960] text-[14px] text-nowrap">
                          <p className="leading-[24px] whitespace-pre">·</p>
                        </div>
                        <div className="content-stretch flex gap-0.5 items-center justify-center relative shrink-0">
                          <div className="relative shrink-0 size-3.5">
                            <img alt="" className="block max-w-none size-full" src="http://localhost:3845/assets/13006796ec1995b8f866331117040530b0ff456d.svg" />
                          </div>
                          <div className="font-aptos leading-[0] not-italic relative shrink-0 text-[#535960] text-[14px] text-nowrap">
                            <p className="leading-[24px] whitespace-pre">Methuen, MA</p>
                          </div>
                        </div>
                        <div className="font-inter font-normal leading-[0] not-italic relative shrink-0 text-[#535960] text-[14px] text-nowrap">
                          <p className="leading-[24px] whitespace-pre">·</p>
                        </div>
                        <div className="content-stretch flex gap-0.5 items-center justify-center relative shrink-0">
                          <div className="font-aptos leading-[0] not-italic relative shrink-0 text-[#535960] text-[14px] text-nowrap">
                            <p className="leading-[24px] whitespace-pre">Full-time</p>
                          </div>
                        </div>
                        <div className="font-inter font-normal leading-[0] not-italic relative shrink-0 text-[#535960] text-[14px] text-nowrap">
                          <p className="leading-[24px] whitespace-pre">·</p>
                        </div>
                        <div className="content-stretch flex gap-0.5 items-center justify-center relative shrink-0">
                          <div className="font-aptos leading-[0] not-italic relative shrink-0 text-[#535960] text-[14px] text-nowrap">
                            <p className="leading-[24px] whitespace-pre">Viewed</p>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex gap-4 items-start justify-start relative shrink-0">
                        <div className="font-aptos leading-[0] not-italic relative shrink-0 text-[#7e858d] text-[14px] text-nowrap">
                          <p className="leading-[24px] whitespace-pre">$80,000 - $91,000</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-4 items-start justify-center relative shrink-0">
                  <div className="h-[9px] shrink-0 w-[60px]" />
                </div>
              </Link>

              {/* Swisscom Job */}
              <Link href="/jobs/engineering-tech" className="bg-white box-border content-stretch flex flex-col sm:flex-row gap-4 sm:gap-[18px] items-start justify-start p-4 sm:p-6 lg:p-[30px] relative rounded-[8px] shrink-0 w-full cursor-pointer hover:shadow-md transition-shadow">
                <div aria-hidden="true" className="absolute border border-[#c8c8c8] border-solid inset-0 pointer-events-none rounded-[8px]" />
                <div className="w-full sm:basis-0 content-stretch flex flex-col sm:flex-row gap-4 sm:gap-[18px] sm:grow items-start justify-start relative shrink-0">
                  <div className="bg-center bg-cover bg-no-repeat shrink-0 size-12 sm:size-14 lg:size-16 rounded-lg" style={{ backgroundImage: `url('http://localhost:3845/assets/653136f32614a9aa3d7fa154e29366f317167f15.png')` }} />
                  <div className="flex-1 content-stretch flex flex-col gap-3 lg:gap-[15px] items-start justify-center relative shrink-0">
                    <div className="content-stretch flex flex-col gap-2 lg:gap-3.5 items-start justify-start relative shrink-0 w-full">
                      <div className="font-aptos font-semibold leading-[0] min-w-full not-italic relative shrink-0 text-[#211f1f] text-lg lg:text-[20px] tracking-[-0.8px]" style={{ width: "min-content" }}>
                        <p className="leading-[24px]">Engineering Tech</p>
                      </div>
                      <div className="content-stretch flex flex-wrap gap-1 items-center justify-start relative shrink-0">
                        <div className="font-aptos-display leading-[0] not-italic relative shrink-0 text-[#535960] text-[14px] text-nowrap">
                          <p className="leading-[24px] whitespace-pre">Swisscom</p>
                        </div>
                        <div className="font-inter font-normal leading-[0] not-italic relative shrink-0 text-[#535960] text-[14px] text-nowrap">
                          <p className="leading-[24px] whitespace-pre">·</p>
                        </div>
                        <div className="content-stretch flex gap-0.5 items-center justify-center relative shrink-0">
                          <div className="relative shrink-0 size-3.5">
                            <img alt="" className="block max-w-none size-full" src="http://localhost:3845/assets/13006796ec1995b8f866331117040530b0ff456d.svg" />
                          </div>
                          <div className="font-aptos leading-[0] not-italic relative shrink-0 text-[#535960] text-[14px] text-nowrap">
                            <p className="leading-[24px] whitespace-pre">Methuen, MA</p>
                          </div>
                        </div>
                        <div className="font-inter font-normal leading-[0] not-italic relative shrink-0 text-[#535960] text-[14px] text-nowrap">
                          <p className="leading-[24px] whitespace-pre">·</p>
                        </div>
                        <div className="content-stretch flex gap-0.5 items-center justify-center relative shrink-0">
                          <div className="font-aptos leading-[0] not-italic relative shrink-0 text-[#535960] text-[14px] text-nowrap">
                            <p className="leading-[24px] whitespace-pre">Full-time</p>
                          </div>
                        </div>
                        <div className="font-inter font-normal leading-[0] not-italic relative shrink-0 text-[#535960] text-[14px] text-nowrap">
                          <p className="leading-[24px] whitespace-pre">·</p>
                        </div>
                        <div className="content-stretch flex gap-0.5 items-center justify-center relative shrink-0">
                          <div className="font-aptos leading-[0] not-italic relative shrink-0 text-[#535960] text-[14px] text-nowrap">
                            <p className="leading-[24px] whitespace-pre">Viewed</p>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex gap-4 items-start justify-start relative shrink-0">
                        <div className="font-aptos leading-[0] not-italic relative shrink-0 text-[#7e858d] text-[14px] text-nowrap">
                          <p className="leading-[24px] whitespace-pre">$80,000 - $91,000</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-4 items-start justify-center relative shrink-0">
                  <div className="h-[9px] shrink-0 w-[60px]" />
                </div>
              </Link>

              {/* Lacoste Job */}
              <Link href="/jobs/engineering-tech" className="bg-white box-border content-stretch flex flex-col sm:flex-row gap-4 sm:gap-[18px] items-start justify-start p-4 sm:p-6 lg:p-[30px] relative rounded-[8px] shrink-0 w-full cursor-pointer hover:shadow-md transition-shadow">
                <div aria-hidden="true" className="absolute border border-[#c8c8c8] border-solid inset-0 pointer-events-none rounded-[8px]" />
                <div className="w-full sm:basis-0 content-stretch flex flex-col sm:flex-row gap-4 sm:gap-[18px] sm:grow items-start justify-start relative shrink-0">
                  <div className="bg-white box-border content-stretch flex flex-col gap-2.5 items-start justify-start px-px py-[19px] relative shrink-0 size-16">
                    <div className="h-[25px] overflow-clip relative shrink-0 w-[61px]">
                      <div className="absolute bottom-[0.34%] contents left-[0.01%] right-[0.41%] top-0">
                        <img alt="" className="block max-w-none size-full" src="http://localhost:3845/assets/3969afc3b6833353639d35e38c9c7664e743cb43.svg" />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 content-stretch flex flex-col gap-3 lg:gap-[15px] items-start justify-center relative shrink-0">
                    <div className="content-stretch flex flex-col gap-2 lg:gap-3.5 items-start justify-start relative shrink-0 w-full">
                      <div className="font-aptos font-semibold leading-[0] min-w-full not-italic relative shrink-0 text-[#211f1f] text-lg lg:text-[20px] tracking-[-0.8px]" style={{ width: "min-content" }}>
                        <p className="leading-[24px]">Engineering Tech</p>
                      </div>
                      <div className="content-stretch flex flex-wrap gap-1 items-center justify-start relative shrink-0">
                        <div className="font-aptos-display leading-[0] not-italic relative shrink-0 text-[#535960] text-[14px] text-nowrap">
                          <p className="leading-[24px] whitespace-pre">Lacoste</p>
                        </div>
                        <div className="font-inter font-normal leading-[0] not-italic relative shrink-0 text-[#535960] text-[14px] text-nowrap">
                          <p className="leading-[24px] whitespace-pre">·</p>
                        </div>
                        <div className="content-stretch flex gap-0.5 items-center justify-center relative shrink-0">
                          <div className="relative shrink-0 size-3.5">
                            <img alt="" className="block max-w-none size-full" src="http://localhost:3845/assets/13006796ec1995b8f866331117040530b0ff456d.svg" />
                          </div>
                          <div className="font-aptos leading-[0] not-italic relative shrink-0 text-[#535960] text-[14px] text-nowrap">
                            <p className="leading-[24px] whitespace-pre">Methuen, MA</p>
                          </div>
                        </div>
                        <div className="font-inter font-normal leading-[0] not-italic relative shrink-0 text-[#535960] text-[14px] text-nowrap">
                          <p className="leading-[24px] whitespace-pre">·</p>
                        </div>
                        <div className="content-stretch flex gap-0.5 items-center justify-center relative shrink-0">
                          <div className="font-aptos leading-[0] not-italic relative shrink-0 text-[#535960] text-[14px] text-nowrap">
                            <p className="leading-[24px] whitespace-pre">Full-time</p>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex gap-4 items-start justify-start relative shrink-0">
                        <div className="font-aptos leading-[0] not-italic relative shrink-0 text-[#7e858d] text-[14px] text-nowrap">
                          <p className="leading-[24px] whitespace-pre">$80,000 - $91,000</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-4 items-start justify-center relative shrink-0">
                  <div className="h-[9px] shrink-0 w-[60px]" />
                </div>
              </Link>

              {/* Ferguson Job */}
              <Link href="/jobs/engineering-tech" className="bg-white box-border content-stretch flex flex-col sm:flex-row gap-4 sm:gap-[18px] items-start justify-start p-4 sm:p-6 lg:p-[30px] relative rounded-[8px] shrink-0 w-full cursor-pointer hover:shadow-md transition-shadow">
                <div aria-hidden="true" className="absolute border border-[#c8c8c8] border-solid inset-0 pointer-events-none rounded-[8px]" />
                <div className="w-full sm:basis-0 content-stretch flex flex-col sm:flex-row gap-4 sm:gap-[18px] sm:grow items-start justify-start relative shrink-0">
                  <div className="bg-white box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-px py-[19px] relative shrink-0 size-16">
                    <div className="h-[34.052px] relative shrink-0 w-[34px]">
                      <img alt="" className="block max-w-none size-full" src="http://localhost:3845/assets/4d7733e5252073017364b756170ed73adfacb07f.svg" />
                    </div>
                  </div>
                  <div className="flex-1 content-stretch flex flex-col gap-3 lg:gap-[15px] items-start justify-center relative shrink-0">
                    <div className="content-stretch flex flex-col gap-2 lg:gap-3.5 items-start justify-start relative shrink-0 w-full">
                      <div className="font-aptos font-semibold leading-[0] min-w-full not-italic relative shrink-0 text-[#211f1f] text-lg lg:text-[20px] tracking-[-0.8px]" style={{ width: "min-content" }}>
                        <p className="leading-[24px]">Engineering Tech</p>
                      </div>
                      <div className="content-stretch flex flex-wrap gap-1 items-center justify-start relative shrink-0">
                        <div className="font-aptos-display leading-[0] not-italic relative shrink-0 text-[#535960] text-[14px] text-nowrap">
                          <p className="leading-[24px] whitespace-pre">Ferguson</p>
                        </div>
                        <div className="font-inter font-normal leading-[0] not-italic relative shrink-0 text-[#535960] text-[14px] text-nowrap">
                          <p className="leading-[24px] whitespace-pre">·</p>
                        </div>
                        <div className="content-stretch flex gap-0.5 items-center justify-center relative shrink-0">
                          <div className="relative shrink-0 size-3.5">
                            <img alt="" className="block max-w-none size-full" src="http://localhost:3845/assets/13006796ec1995b8f866331117040530b0ff456d.svg" />
                          </div>
                          <div className="font-aptos leading-[0] not-italic relative shrink-0 text-[#535960] text-[14px] text-nowrap">
                            <p className="leading-[24px] whitespace-pre">Methuen, MA</p>
                          </div>
                        </div>
                        <div className="font-inter font-normal leading-[0] not-italic relative shrink-0 text-[#535960] text-[14px] text-nowrap">
                          <p className="leading-[24px] whitespace-pre">·</p>
                        </div>
                        <div className="content-stretch flex gap-0.5 items-center justify-center relative shrink-0">
                          <div className="font-aptos leading-[0] not-italic relative shrink-0 text-[#535960] text-[14px] text-nowrap">
                            <p className="leading-[24px] whitespace-pre">Full-time</p>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex gap-4 items-start justify-start relative shrink-0">
                        <div className="font-aptos leading-[0] not-italic relative shrink-0 text-[#7e858d] text-[14px] text-nowrap">
                          <p className="leading-[24px] whitespace-pre">$80,000 - $91,000</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-4 items-start justify-center relative shrink-0">
                  <div className="h-[9px] shrink-0 w-[60px]" />
                </div>
              </Link>

              {/* Hunter Job */}
              <Link href="/jobs/engineering-tech" className="bg-white box-border content-stretch flex flex-col sm:flex-row gap-4 sm:gap-[18px] items-start justify-start p-4 sm:p-6 lg:p-[30px] relative rounded-[8px] shrink-0 w-full cursor-pointer hover:shadow-md transition-shadow">
                <div aria-hidden="true" className="absolute border border-[#c8c8c8] border-solid inset-0 pointer-events-none rounded-[8px]" />
                <div className="w-full sm:basis-0 content-stretch flex flex-col sm:flex-row gap-4 sm:gap-[18px] sm:grow items-start justify-start relative shrink-0">
                  <div className="bg-white box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-px py-[19px] relative shrink-0 size-16">
                    <div className="h-10 relative shrink-0 w-[42px]">
                      <img alt="" className="block max-w-none size-full" src="http://localhost:3845/assets/42bc253874d842c9fff5560d2b3bcf8d8ae420d7.svg" />
                    </div>
                  </div>
                  <div className="flex-1 content-stretch flex flex-col gap-3 lg:gap-[15px] items-start justify-center relative shrink-0">
                    <div className="content-stretch flex flex-col gap-2 lg:gap-3.5 items-start justify-start relative shrink-0 w-full">
                      <div className="font-aptos font-semibold leading-[0] min-w-full not-italic relative shrink-0 text-[#211f1f] text-lg lg:text-[20px] tracking-[-0.8px]" style={{ width: "min-content" }}>
                        <p className="leading-[24px]">Engineering Tech</p>
                      </div>
                      <div className="content-stretch flex flex-wrap gap-1 items-center justify-start relative shrink-0">
                        <div className="font-aptos-display leading-[0] not-italic relative shrink-0 text-[#535960] text-[14px] text-nowrap">
                          <p className="leading-[24px] whitespace-pre">Hunter</p>
                        </div>
                        <div className="font-inter font-normal leading-[0] not-italic relative shrink-0 text-[#535960] text-[14px] text-nowrap">
                          <p className="leading-[24px] whitespace-pre">·</p>
                        </div>
                        <div className="content-stretch flex gap-0.5 items-center justify-center relative shrink-0">
                          <div className="relative shrink-0 size-3.5">
                            <img alt="" className="block max-w-none size-full" src="http://localhost:3845/assets/13006796ec1995b8f866331117040530b0ff456d.svg" />
                          </div>
                          <div className="font-aptos leading-[0] not-italic relative shrink-0 text-[#535960] text-[14px] text-nowrap">
                            <p className="leading-[24px] whitespace-pre">Methuen, MA</p>
                          </div>
                        </div>
                        <div className="font-inter font-normal leading-[0] not-italic relative shrink-0 text-[#535960] text-[14px] text-nowrap">
                          <p className="leading-[24px] whitespace-pre">·</p>
                        </div>
                        <div className="content-stretch flex gap-0.5 items-center justify-center relative shrink-0">
                          <div className="font-aptos leading-[0] not-italic relative shrink-0 text-[#535960] text-[14px] text-nowrap">
                            <p className="leading-[24px] whitespace-pre">Full-time</p>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex gap-4 items-start justify-start relative shrink-0">
                        <div className="font-aptos leading-[0] not-italic relative shrink-0 text-[#7e858d] text-[14px] text-nowrap">
                          <p className="leading-[24px] whitespace-pre">$80,000 - $91,000</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-4 items-start justify-center relative shrink-0">
                  <div className="h-[9px] shrink-0 w-[60px]" />
                </div>
              </Link>

              {/* Amplify Change Job */}
              <Link href="/jobs/engineering-tech" className="bg-white box-border content-stretch flex flex-col sm:flex-row gap-4 sm:gap-[18px] items-start justify-start p-4 sm:p-6 lg:p-[30px] relative rounded-[8px] shrink-0 w-full cursor-pointer hover:shadow-md transition-shadow">
                <div aria-hidden="true" className="absolute border border-[#c8c8c8] border-solid inset-0 pointer-events-none rounded-[8px]" />
                <div className="w-full sm:basis-0 content-stretch flex flex-col sm:flex-row gap-4 sm:gap-[18px] sm:grow items-start justify-start relative shrink-0">
                  <div className="bg-center bg-cover bg-no-repeat shrink-0 size-12 sm:size-14 lg:size-16 rounded-lg" style={{ backgroundImage: `url('http://localhost:3845/assets/86e61fd17879c8027e8173bfdd1233016ed6c01a.png')` }} />
                  <div className="flex-1 content-stretch flex flex-col gap-3 lg:gap-[15px] items-start justify-center relative shrink-0">
                    <div className="content-stretch flex flex-col gap-2 lg:gap-3.5 items-start justify-start relative shrink-0 w-full">
                      <div className="font-aptos font-semibold leading-[0] min-w-full not-italic relative shrink-0 text-[#211f1f] text-lg lg:text-[20px] tracking-[-0.8px]" style={{ width: "min-content" }}>
                        <p className="leading-[24px]">Engineering Tech</p>
                      </div>
                      <div className="content-stretch flex flex-wrap gap-1 items-center justify-start relative shrink-0">
                        <div className="font-aptos-display leading-[0] not-italic relative shrink-0 text-[#535960] text-[14px] text-nowrap">
                          <p className="leading-[24px] whitespace-pre">Amplify Change</p>
                        </div>
                        <div className="font-inter font-normal leading-[0] not-italic relative shrink-0 text-[#535960] text-[14px] text-nowrap">
                          <p className="leading-[24px] whitespace-pre">·</p>
                        </div>
                        <div className="content-stretch flex gap-0.5 items-center justify-center relative shrink-0">
                          <div className="relative shrink-0 size-3.5">
                            <img alt="" className="block max-w-none size-full" src="http://localhost:3845/assets/13006796ec1995b8f866331117040530b0ff456d.svg" />
                          </div>
                          <div className="font-aptos leading-[0] not-italic relative shrink-0 text-[#535960] text-[14px] text-nowrap">
                            <p className="leading-[24px] whitespace-pre">Methuen, MA</p>
                          </div>
                        </div>
                        <div className="font-inter font-normal leading-[0] not-italic relative shrink-0 text-[#535960] text-[14px] text-nowrap">
                          <p className="leading-[24px] whitespace-pre">·</p>
                        </div>
                        <div className="content-stretch flex gap-0.5 items-center justify-center relative shrink-0">
                          <div className="font-aptos leading-[0] not-italic relative shrink-0 text-[#535960] text-[14px] text-nowrap">
                            <p className="leading-[24px] whitespace-pre">Full-time</p>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex gap-4 items-start justify-start relative shrink-0">
                        <div className="font-aptos leading-[0] not-italic relative shrink-0 text-[#7e858d] text-[14px] text-nowrap">
                          <p className="leading-[24px] whitespace-pre">$80,000 - $91,000</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-4 items-start justify-center relative shrink-0">
                  <div className="h-[9px] shrink-0 w-[60px]" />
                </div>
              </Link>

              {/* Drata Job */}
              <Link href="/jobs/engineering-tech" className="bg-white box-border content-stretch flex flex-col sm:flex-row gap-4 sm:gap-[18px] items-start justify-start p-4 sm:p-6 lg:p-[30px] relative rounded-[8px] shrink-0 w-full cursor-pointer hover:shadow-md transition-shadow">
                <div aria-hidden="true" className="absolute border border-[#c8c8c8] border-solid inset-0 pointer-events-none rounded-[8px]" />
                <div className="w-full sm:basis-0 content-stretch flex flex-col sm:flex-row gap-4 sm:gap-[18px] sm:grow items-start justify-start relative shrink-0">
                  <div className="bg-center bg-cover bg-no-repeat shrink-0 size-12 sm:size-14 lg:size-16 rounded-lg" style={{ backgroundImage: `url('http://localhost:3845/assets/64b6d2e7032f50d99d2f6e201469a5f93d4a3355.png')` }} />
                  <div className="flex-1 content-stretch flex flex-col gap-3 lg:gap-[15px] items-start justify-center relative shrink-0">
                    <div className="content-stretch flex flex-col gap-2 lg:gap-3.5 items-start justify-start relative shrink-0 w-full">
                      <div className="font-aptos font-semibold leading-[0] min-w-full not-italic relative shrink-0 text-[#211f1f] text-lg lg:text-[20px] tracking-[-0.8px]" style={{ width: "min-content" }}>
                        <p className="leading-[24px]">Engineering Tech</p>
                      </div>
                      <div className="content-stretch flex flex-wrap gap-1 items-center justify-start relative shrink-0">
                        <div className="font-aptos-display leading-[0] not-italic relative shrink-0 text-[#535960] text-[14px] text-nowrap">
                          <p className="leading-[24px] whitespace-pre">Drata</p>
                        </div>
                        <div className="font-inter font-normal leading-[0] not-italic relative shrink-0 text-[#535960] text-[14px] text-nowrap">
                          <p className="leading-[24px] whitespace-pre">·</p>
                        </div>
                        <div className="content-stretch flex gap-0.5 items-center justify-center relative shrink-0">
                          <div className="relative shrink-0 size-3.5">
                            <img alt="" className="block max-w-none size-full" src="http://localhost:3845/assets/13006796ec1995b8f866331117040530b0ff456d.svg" />
                          </div>
                          <div className="font-aptos leading-[0] not-italic relative shrink-0 text-[#535960] text-[14px] text-nowrap">
                            <p className="leading-[24px] whitespace-pre">Methuen, MA</p>
                          </div>
                        </div>
                        <div className="font-inter font-normal leading-[0] not-italic relative shrink-0 text-[#535960] text-[14px] text-nowrap">
                          <p className="leading-[24px] whitespace-pre">·</p>
                        </div>
                        <div className="content-stretch flex gap-0.5 items-center justify-center relative shrink-0">
                          <div className="font-aptos leading-[0] not-italic relative shrink-0 text-[#535960] text-[14px] text-nowrap">
                            <p className="leading-[24px] whitespace-pre">Full-time</p>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex gap-4 items-start justify-start relative shrink-0">
                        <div className="font-aptos leading-[0] not-italic relative shrink-0 text-[#7e858d] text-[14px] text-nowrap">
                          <p className="leading-[24px] whitespace-pre">$80,000 - $91,000</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-4 items-start justify-center relative shrink-0">
                  <div className="h-[9px] shrink-0 w-[60px]" />
                </div>
              </Link>
            </div>

            {/* Pagination */}
            <div className="box-border content-stretch flex items-start justify-between px-0 py-3.5 relative shrink-0 w-full">
              <div className="content-stretch flex gap-2.5 items-center justify-center relative shrink-0">
                <div className="relative shrink-0 size-6">
                  <img alt="" className="block max-w-none size-full" src="http://localhost:3845/assets/09ae9fc4491e2a7a1290d27f33b2678ff7fb0ab8.svg" />
                </div>
                <div className="font-aptos leading-[0] not-italic relative shrink-0 text-[#09141f] text-[16px] text-nowrap">
                  <p className="leading-[22px] whitespace-pre">Previous Page</p>
                </div>
              </div>
              <div className="content-stretch flex gap-2.5 items-center justify-center relative shrink-0">
                <div className="content-stretch flex gap-2.5 items-center justify-start relative shrink-0">
                  <div className="bg-[#fa6f26] content-stretch flex flex-col gap-2.5 items-center justify-center relative rounded-[5px] shrink-0 size-6">
                    <div className="font-aptos leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white w-full">
                      <p className="leading-[22px]">1</p>
                    </div>
                  </div>
                  <div className="bg-white content-stretch flex flex-col gap-2.5 items-center justify-center relative rounded-[5px] shrink-0 size-6">
                    <div className="font-aptos leading-[0] not-italic relative shrink-0 text-[#09141f] text-[16px] text-center w-full">
                      <p className="leading-[22px]">2</p>
                    </div>
                  </div>
                  <div className="bg-white content-stretch flex flex-col gap-2.5 items-center justify-center relative rounded-[5px] shrink-0 size-6">
                    <div className="font-aptos leading-[0] not-italic relative shrink-0 text-[#09141f] text-[16px] text-center w-full">
                      <p className="leading-[22px]">3</p>
                    </div>
                  </div>
                  <div className="bg-white content-stretch flex flex-col gap-2.5 items-center justify-center relative rounded-[5px] shrink-0 size-6">
                    <div className="font-aptos leading-[0] not-italic relative shrink-0 text-[#09141f] text-[16px] text-center w-full">
                      <p className="leading-[22px]">4</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-2.5 items-center justify-center relative shrink-0">
                <div className="font-aptos leading-[0] not-italic relative shrink-0 text-[#09141f] text-[16px] text-nowrap">
                  <p className="leading-[22px] whitespace-pre">Next Page</p>
                </div>
                <div className="relative shrink-0 size-6">
                  <img alt="" className="block max-w-none size-full" src="http://localhost:3845/assets/659c6b9dbcd6d9893c611b18601044d09b92252a.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}