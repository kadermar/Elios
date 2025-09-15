"use client";

import React from 'react';
import Tagline from './Tagline';

export default function StaffingSubhead() {
  return (
    <div className="content-stretch flex flex-col gap-6 items-center justify-center relative w-full">
      {/* Top Section with Tagline and Title */}
      <div className="content-stretch flex flex-col gap-4 items-center justify-center relative shrink-0 w-full">
        <Tagline text="talent solutions" />
        <div className="font-aptos-semibold leading-[0] not-italic relative shrink-0 text-[#0f1012] text-[54px] text-center text-nowrap tracking-[-3.24px]">
          <p className="leading-[54px] whitespace-pre">Staffing services we provide</p>
        </div>
      </div>

      {/* Description Text */}
      <div className="font-aptos-regular not-italic relative shrink-0 text-[#595959] text-[20px] text-center w-[635px] leading-[24px]">
        No two hiring needs are alike. Elios delivers a full suite of staffing services powered by an AI-enabled outcome-first process. Our recruiters calibrate intake to your goals, use explainable matching, and keep recruiters in the loop so speed, quality, and fairness move together.
        <br /><br />
        We tailor our method to your context so every hire advances your goals and fuels growth. Whether you need critical roles filled now, flexible capacity, transformational talent, or proven leadership, each placement is built for measurable impact. Explore the options below to find the best fit.
      </div>
    </div>
  );
}