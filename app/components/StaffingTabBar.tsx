"use client";

import React, { useState } from 'react';
import Icon from './Icon';

interface Tab {
  id: string;
  label: string;
  icon: string;
}

interface StaffingTabBarProps {
  activeTab?: string;
  onTabChange?: (tabId: string) => void;
  className?: string;
}

const tabs: Tab[] = [
  { id: 'staff-augmentation', label: 'Staff Augmentation', icon: 'user-plus' },
  { id: 'permanent-hire', label: 'Permanent Hire', icon: 'handshake' },
  { id: 'rpo', label: 'RPO', icon: 'gear' },
  { id: 'executive-search', label: 'Executive Search', icon: 'search' }
];

export default function StaffingTabBar({
  activeTab,
  onTabChange,
  className = ""
}: StaffingTabBarProps) {
  const [selectedTab, setSelectedTab] = useState(activeTab || tabs[0]?.id);

  const handleTabClick = (tabId: string) => {
    setSelectedTab(tabId);
    if (onTabChange) {
      onTabChange(tabId);
    }
  };

  return (
    <div className={`content-stretch flex items-center justify-center relative w-full ${className}`}>
      {/* Bottom border line */}
      <div aria-hidden="true" className="absolute border-[#d5d5d5] border-b border-solid inset-0 pointer-events-none" />

      {/* Tab buttons */}
      <div className="flex gap-0 items-center justify-center relative">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={`
              box-border flex gap-4 h-[63px] items-center justify-center px-6 py-[26px] relative shrink-0
              transition-colors duration-200 hover:bg-gray-50
              ${selectedTab === tab.id
                ? 'border-b-2 border-[#fb5d0b]'
                : 'border-b-2 border-transparent'
              }
            `}
          >
            {/* Icon placeholder - using simple div for now since icons aren't specified */}
            <div className="shrink-0 size-4 bg-[#595959] rounded-sm opacity-60" />

            {/* Tab label */}
            <div className="content-stretch flex gap-3 items-center justify-start relative shrink-0">
              <div className={`
                font-aptos-semibold leading-[0] not-italic relative shrink-0 text-[14px] text-center text-nowrap
                ${selectedTab === tab.id ? 'text-[#0f1012]' : 'text-[#595959]'}
              `}>
                <p className="leading-[18px] whitespace-pre">{tab.label}</p>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}