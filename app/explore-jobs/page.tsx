import React from 'react';
import Navigation from '../components/Navigation';
import JobListings from '../components/JobListings';
import Footer from '../components/Footer';

export default function ExploreJobsPage() {
  return (
    <div className="min-h-screen">
      <div className="pt-[174px]"> {/* Account for fixed navigation height */}
        <Navigation />
        
        {/* Hero Section */}
        <div className="box-border content-stretch flex flex-col items-center justify-start px-0 py-[70px] relative size-full bg-[#F4F4F4]" data-name="Hero">
          <div className="content-stretch flex gap-[140px] items-center justify-start max-w-[1638px] relative shrink-0 w-full px-[141px]" data-name="Wrapper">
            <div className="content-stretch flex flex-col gap-10 items-start justify-start relative shrink-0 w-[1638px]" data-name="Top">
              <div className="font-aptos font-semibold leading-[0] not-italic relative shrink-0 text-[#09141f] text-[64px] tracking-[-3.84px] w-full">
                <p className="leading-[96px]">Explore Jobs</p>
              </div>
            </div>
          </div>
        </div>
        
        <JobListings />
        <Footer />
      </div>
    </div>
  );
}