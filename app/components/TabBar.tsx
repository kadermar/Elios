"use client";

import { useState } from 'react';

interface Tab {
  id: string;
  label: string;
  icon?: string;
}

interface TabBarProps {
  tabs: Tab[];
  activeTab?: string;
  onTabChange?: (tabId: string) => void;
  className?: string;
}

export default function TabBar({ tabs, activeTab, onTabChange, className = "" }: TabBarProps) {
  const [selectedTab, setSelectedTab] = useState(activeTab || tabs[0]?.id);

  const handleTabClick = (tabId: string) => {
    setSelectedTab(tabId);
    onTabChange?.(tabId);
  };

  return (
    <div className={`flex items-center justify-center relative w-full ${className}`}>
      <div className="absolute border-[#d5d5d5] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex gap-0 items-center justify-center relative">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={`box-border flex gap-4 h-[63px] items-center justify-center px-6 py-[26px] relative shrink-0 transition-colors duration-200 ${
              selectedTab === tab.id
                ? 'border-b-2 border-[#314BFF] bg-white'
                : 'hover:bg-gray-50'
            }`}
          >
            {tab.icon && (
              <div className="shrink-0 size-4">
                <img src={tab.icon} alt="" className="w-4 h-4" />
              </div>
            )}
            <div className="flex gap-3 items-center justify-start relative shrink-0">
              <div className={`font-['Aptos:SemiBold',_sans-serif] leading-[18px] not-italic relative shrink-0 text-[14px] text-center text-nowrap ${
                selectedTab === tab.id ? 'text-[#314BFF]' : 'text-[#595959]'
              }`}>
                {tab.label}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}