"use client";

import Tagline from './Tagline';
import TabBar from './TabBar';
import { useState } from 'react';

export default function IndustriesSection() {
  const [activeTab, setActiveTab] = useState('technology');

  return (
    <div className="flex flex-col gap-6 items-center justify-center relative w-full">
      {/* Header */}
      <div className="flex flex-col gap-4 items-center justify-center relative shrink-0 w-full">
        <Tagline text="industries served" />
        <div className="font-['Aptos:Semibold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#0f1012] text-[54px] text-center text-nowrap tracking-[-3.24px]">
          <p className="leading-[54px] whitespace-pre">Industries we serve</p>
        </div>
      </div>
      <div className="font-['Aptos:Regular',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#595959] text-[20px] text-center w-[635px]">
        <p className="mb-0">At Elios, we know that every industry has its own talent dynamics, and hiring challenges can look very different from one sector to the next. That's why we don't apply a one-size-fits-all approach. Instead, our recruiters specialize by industry, bringing years of experience and cultivated relationships within their fields to deliver the right talent at the right time.</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">We study the supply-and-demand trends, credential requirements, and career pathways unique to each market, allowing us to tailor our process for maximum impact. Whether it's finding specialized engineers in energy, nurses in healthcare, or developers in technology, we adapt our strategy to the realities of each sector. The result is a smarter, more targeted hiring experience that consistently delivers quality candidates aligned to your business needs.</p>
      </div>

      {/* Tab Bar */}
      <TabBar
        tabs={[
          { id: 'technology', label: 'Technology', icon: '/assets/ed20a5b5871d5471661917089862185541b64acc.svg' },
          { id: 'healthcare', label: 'Healthcare & Life Sciences', icon: '/assets/60c7142738da60dadcbe2ff0624215123d0a873d.svg' },
          { id: 'engineering', label: 'Engineering', icon: '/assets/1c5c457543dead4d930eb84e293016c37e44ac4b.svg' },
          { id: 'energy', label: 'Energy', icon: '/assets/be7de6960d2ca82797aadbc5aaf7abc21495d8f0.svg' },
          { id: 'private-equity', label: 'Private Equity', icon: '/assets/60c7142738da60dadcbe2ff0624215123d0a873d.svg' }
        ]}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        className="mb-12"
      />
    </div>
  );
}