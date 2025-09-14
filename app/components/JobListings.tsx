"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Job, JobAPI, JobUtils } from '../lib/jobsData';

export default function JobListings() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [locationQuery, setLocationQuery] = useState('');
  const [selectedFilters, setSelectedFilters] = useState({
    department: '',
    experience: '',
    type: ''
  });
  const [sortBy, setSortBy] = useState('Most Relevant');

  // Fetch jobs on component mount
  useEffect(() => {
    loadJobs();
  }, []);

  // Apply filters when search or filters change
  useEffect(() => {
    applyFilters();
  }, [searchQuery, locationQuery, selectedFilters, jobs]);

  const loadJobs = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await JobAPI.getAllJobs();
      setJobs(data);
      setFilteredJobs(data);
    } catch (err) {
      setError('Unable to load jobs. Please try again later.');
      console.error('Error loading jobs:', err);
      // For now, set empty array when API fails
      setJobs([]);
      setFilteredJobs([]);
    } finally {
      setLoading(false);
    }
  };

  const applyFilters = () => {
    let filtered = [...jobs];

    // Apply search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(job =>
        job.title?.toLowerCase().includes(query) ||
        job.company?.toLowerCase().includes(query) ||
        job.description?.toLowerCase().includes(query) ||
        job.skills?.some(skill => skill.toLowerCase().includes(query)) ||
        job.tags?.some(tag => tag.toLowerCase().includes(query))
      );
    }

    // Apply location query
    if (locationQuery) {
      const locationSearch = locationQuery.toLowerCase();
      filtered = filtered.filter(job =>
        job.location?.toLowerCase().includes(locationSearch)
      );
    }

    // Apply department filter
    if (selectedFilters.department) {
      filtered = filtered.filter(job => job.department === selectedFilters.department);
    }

    setFilteredJobs(filtered);
  };

  const handleFilterToggle = (filterType: string, value: string) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filterType]: prev[filterType] === value ? '' : value
    }));
  };

  const handleSearch = () => {
    // This could trigger additional API calls if your API supports advanced search
    applyFilters();
  };

  // Get unique department values for filters
  const departments = ['Technology', 'Healthcare', 'Engineering', 'Finance & Accounting', 'Life Sciences', 'Private Equity'];
  const departmentCounts = {
    'Technology': 24,
    'Healthcare': 210, 
    'Engineering': 220,
    'Finance & Accounting': 220,
    'Life Sciences': 220,
    'Private Equity': 220
  };

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
                      className="font-aptos leading-[0] not-italic text-[#535960] text-[20px] text-center text-nowrap tracking-[-0.4px] border-none outline-none bg-transparent placeholder:text-[#535960] flex-1"
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
                    value={locationQuery}
                    onChange={(e) => setLocationQuery(e.target.value)}
                    className="font-aptos leading-[0] not-italic text-[#535960] text-base lg:text-[20px] text-center lg:text-nowrap border-none outline-none bg-transparent placeholder:text-[#535960] flex-1"
                  />
                </div>
                
                {/* Search Button */}
                <button 
                  onClick={handleSearch}
                  className="bg-black box-border content-stretch flex gap-2 h-11 lg:h-[58px] items-center justify-center px-4 md:px-6 py-3 md:py-4 relative rounded-[8px] shrink-0 w-full lg:w-auto hover:bg-gray-800 transition-colors"
                >
                  <div className="font-aptos font-semibold leading-[0] not-italic text-[16px] text-center text-nowrap text-white">
                    <p className="leading-[20px] whitespace-pre">Search</p>
                  </div>
                </button>
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
                    {departments.map((dept) => (
                      <div key={dept} className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                        <button
                          onClick={() => handleFilterToggle('department', dept)}
                          className="content-stretch flex gap-2 items-center justify-start relative shrink-0 hover:bg-gray-50 transition-colors p-1 rounded"
                        >
                          <div className="box-border content-stretch flex items-start justify-center px-0 py-0.5 relative shrink-0">
                            <div className={`relative rounded-[4px] shrink-0 size-4 ${selectedFilters.department === dept ? 'bg-[#FF7B38]' : 'bg-white'}`}>
                              <div aria-hidden="true" className={`absolute border border-solid inset-0 pointer-events-none rounded-[4px] ${selectedFilters.department === dept ? 'border-[#FF7B38]' : 'border-[#9b9b9b]'}`} />
                              {selectedFilters.department === dept && (
                                <div className="absolute inset-0 flex items-center justify-center">
                                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                  </svg>
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="content-stretch flex gap-1 items-baseline justify-start relative shrink-0">
                            <div className="font-aptos font-semibold leading-[0] not-italic relative shrink-0 text-[#09141f] text-[16px] text-nowrap">
                              <p className="leading-[22px] whitespace-pre">{dept}</p>
                            </div>
                          </div>
                        </button>
                        <div className="bg-[#ececec] box-border content-stretch flex gap-2 items-center justify-start p-[2px] relative rounded-[3px] shrink-0">
                          <div className="content-stretch flex gap-1 items-baseline justify-start relative shrink-0">
                            <div className="content-stretch flex flex-col gap-2.5 items-center justify-center relative shrink-0 w-[18px]">
                              <div className="font-aptos font-semibold leading-[0] not-italic relative shrink-0 text-[#3a4252] text-[12px] text-center w-full">
                                <p className="leading-[1.4]">{departmentCounts[dept]}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Job Listings */}
          <div className="content-stretch flex flex-col gap-6 lg:gap-[31px] items-start justify-start relative flex-1 w-full">
            <div className="content-stretch flex flex-col sm:flex-row items-start sm:items-center justify-between relative shrink-0 w-full gap-4">
              <div className="font-aptos font-semibold leading-[0] not-italic relative shrink-0 text-[#09141f] text-lg lg:text-[20px] text-nowrap">
                <p className="leading-[22px] whitespace-pre">
                  {loading ? 'Loading...' : error ? 'No results' : `${filteredJobs.length} Result${filteredJobs.length !== 1 ? 's' : ''}`}
                </p>
              </div>
              <div className="content-stretch flex gap-2.5 items-center justify-center relative shrink-0">
                <div className="font-aptos leading-[0] not-italic relative shrink-0 text-[#09141f] text-sm lg:text-[16px] text-nowrap">
                  <p className="leading-[22px] whitespace-pre">Sort: Most Relevant</p>
                </div>
                <div className="relative shrink-0 size-3.5">
                  <img alt="" className="block max-w-none size-full" src="/assets/573932348127699381859fe288dac033a32dfbc4.svg" />
                </div>
              </div>
            </div>
            
            <div className="content-stretch flex flex-col gap-[18px] items-start justify-start relative shrink-0 w-full">
              {/* Loading State */}
              {loading && (
                <>
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="bg-white box-border content-stretch flex flex-col sm:flex-row gap-4 sm:gap-[18px] items-start justify-start p-4 sm:p-6 lg:p-[30px] relative rounded-[8px] shrink-0 w-full animate-pulse">
                      <div className="bg-gray-200 shrink-0 size-12 sm:size-14 lg:size-16 rounded-lg"></div>
                      <div className="flex-1 space-y-3">
                        <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                        <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                      </div>
                    </div>
                  ))}
                </>
              )}

              {/* Error State */}
              {error && (
                <div className="bg-white box-border content-stretch flex flex-col items-center justify-center p-8 relative rounded-[8px] shrink-0 w-full text-center">
                  <p className="text-red-500 mb-4">{error}</p>
                  <button 
                    onClick={loadJobs}
                    className="px-6 py-3 bg-[#FF7B38] text-white rounded-lg hover:bg-[#ff6a23] transition-colors"
                  >
                    Try Again
                  </button>
                </div>
              )}

              {/* Empty State */}
              {!loading && !error && filteredJobs.length === 0 && (
                <div className="bg-white box-border content-stretch flex flex-col items-center justify-center p-8 relative rounded-[8px] shrink-0 w-full text-center">
                  <p className="text-gray-500 mb-4">No jobs found matching your criteria.</p>
                  {(selectedFilters.department || searchQuery || locationQuery) && (
                    <button 
                      onClick={() => {
                        setSelectedFilters({ department: '', experience: '', type: '' });
                        setSearchQuery('');
                        setLocationQuery('');
                      }}
                      className="px-6 py-3 bg-[#FF7B38] text-white rounded-lg hover:bg-[#ff6a23] transition-colors"
                    >
                      Clear All Filters
                    </button>
                  )}
                </div>
              )}

              {/* Dynamic Job Listings */}
              {!loading && !error && filteredJobs.map((job) => (
                <Link key={job.id} href={`/jobs/${job.id}`} className="bg-white box-border content-stretch flex flex-col sm:flex-row gap-4 sm:gap-[18px] items-start justify-start p-4 sm:p-6 lg:p-[30px] relative rounded-[8px] shrink-0 w-full cursor-pointer hover:shadow-md transition-shadow">
                  <div aria-hidden="true" className="absolute border border-[#c8c8c8] border-solid inset-0 pointer-events-none rounded-[8px]" />
                  <div className="w-full sm:basis-0 content-stretch flex flex-col sm:flex-row gap-4 sm:gap-[18px] sm:grow items-start justify-start relative shrink-0">
                    <div className="bg-center bg-cover bg-no-repeat shrink-0 size-12 sm:size-14 lg:size-16 rounded-lg flex items-center justify-center bg-gray-100">
                      {job.companyLogo ? (
                        <img src={job.companyLogo} alt={job.company} className="w-full h-full object-contain rounded-lg" />
                      ) : (
                        <div className="font-aptos font-semibold text-gray-600 text-sm">
                          {job.company?.charAt(0)?.toUpperCase() || 'C'}
                        </div>
                      )}
                    </div>
                    <div className="flex-1 content-stretch flex flex-col gap-3 lg:gap-[15px] items-start justify-center relative shrink-0">
                      <div className="content-stretch flex flex-col gap-2 lg:gap-3.5 items-start justify-start relative shrink-0 w-full">
                        <div className="font-aptos font-semibold leading-[0] min-w-full not-italic relative shrink-0 text-[#211f1f] text-lg lg:text-[20px] tracking-[-0.8px]">
                          <p className="leading-[24px]">{job.title || 'Job Title'}</p>
                        </div>
                        <div className="content-stretch flex flex-wrap gap-1 items-center justify-start relative shrink-0">
                          <div className="font-aptos-display leading-[0] not-italic relative shrink-0 text-[#535960] text-[14px] text-nowrap">
                            <p className="leading-[24px] whitespace-pre">{job.company || 'Company'}</p>
                          </div>
                          {job.location && (
                            <>
                              <div className="font-inter font-normal leading-[0] not-italic relative shrink-0 text-[#535960] text-[14px] text-nowrap">
                                <p className="leading-[24px] whitespace-pre">·</p>
                              </div>
                              <div className="content-stretch flex gap-0.5 items-center justify-center relative shrink-0">
                                <div className="relative shrink-0 size-3.5">
                                  <svg className="w-full h-full text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 2C7.239 2 5 4.239 5 7c0 4.418 5 9 5 9s5-4.582 5-9c0-2.761-2.239-5-5-5zm0 7a2 2 0 110-4 2 2 0 010 4z"/>
                                  </svg>
                                </div>
                                <div className="font-aptos leading-[0] not-italic relative shrink-0 text-[#535960] text-[14px] text-nowrap">
                                  <p className="leading-[24px] whitespace-pre">{job.location}</p>
                                </div>
                              </div>
                            </>
                          )}
                          {job.type && (
                            <>
                              <div className="font-inter font-normal leading-[0] not-italic relative shrink-0 text-[#535960] text-[14px] text-nowrap">
                                <p className="leading-[24px] whitespace-pre">·</p>
                              </div>
                              <div className="content-stretch flex gap-0.5 items-center justify-center relative shrink-0">
                                <div className="font-aptos leading-[0] not-italic relative shrink-0 text-[#535960] text-[14px] text-nowrap">
                                  <p className="leading-[24px] whitespace-pre">{job.type}</p>
                                </div>
                              </div>
                            </>
                          )}
                          {job.locationType && (
                            <>
                              <div className="font-inter font-normal leading-[0] not-italic relative shrink-0 text-[#535960] text-[14px] text-nowrap">
                                <p className="leading-[24px] whitespace-pre">·</p>
                              </div>
                              <div className="content-stretch flex gap-0.5 items-center justify-center relative shrink-0">
                                <div className="font-aptos leading-[0] not-italic relative shrink-0 text-[#535960] text-[14px] text-nowrap">
                                  <p className="leading-[24px] whitespace-pre">{JobUtils.getLocationTypeIcon(job.locationType)} {job.locationType}</p>
                                </div>
                              </div>
                            </>
                          )}
                        </div>
                        {job.salary && (
                          <div className="content-stretch flex gap-4 items-start justify-start relative shrink-0">
                            <div className="font-aptos leading-[0] not-italic relative shrink-0 text-[#7e858d] text-[14px] text-nowrap">
                              <p className="leading-[24px] whitespace-pre">{JobUtils.formatSalary(job.salary)}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-4 items-start justify-center relative shrink-0">
                    <div className="h-[9px] shrink-0 w-[60px]" />
                  </div>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            {!loading && !error && filteredJobs.length > 10 && (
              <div className="box-border content-stretch flex items-start justify-between px-0 py-3.5 relative shrink-0 w-full">
                <button className="content-stretch flex gap-2.5 items-center justify-center relative shrink-0 hover:bg-gray-50 transition-colors p-2 rounded">
                  <svg className="w-6 h-6 text-[#09141f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  <div className="font-aptos leading-[0] not-italic relative shrink-0 text-[#09141f] text-[16px] text-nowrap">
                    <p className="leading-[22px] whitespace-pre">Previous Page</p>
                  </div>
                </button>
                <div className="content-stretch flex gap-2.5 items-center justify-center relative shrink-0">
                  <div className="content-stretch flex gap-2.5 items-center justify-start relative shrink-0">
                    <button className="bg-[#fa6f26] content-stretch flex flex-col gap-2.5 items-center justify-center relative rounded-[5px] shrink-0 size-6 hover:bg-[#e85a15] transition-colors">
                      <div className="font-aptos leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white w-full">
                        <p className="leading-[22px]">1</p>
                      </div>
                    </button>
                    <button className="bg-white border border-gray-200 content-stretch flex flex-col gap-2.5 items-center justify-center relative rounded-[5px] shrink-0 size-6 hover:bg-gray-50 transition-colors">
                      <div className="font-aptos leading-[0] not-italic relative shrink-0 text-[#09141f] text-[16px] text-center w-full">
                        <p className="leading-[22px]">2</p>
                      </div>
                    </button>
                    <button className="bg-white border border-gray-200 content-stretch flex flex-col gap-2.5 items-center justify-center relative rounded-[5px] shrink-0 size-6 hover:bg-gray-50 transition-colors">
                      <div className="font-aptos leading-[0] not-italic relative shrink-0 text-[#09141f] text-[16px] text-center w-full">
                        <p className="leading-[22px]">3</p>
                      </div>
                    </button>
                    <button className="bg-white border border-gray-200 content-stretch flex flex-col gap-2.5 items-center justify-center relative rounded-[5px] shrink-0 size-6 hover:bg-gray-50 transition-colors">
                      <div className="font-aptos leading-[0] not-italic relative shrink-0 text-[#09141f] text-[16px] text-center w-full">
                        <p className="leading-[22px]">4</p>
                      </div>
                    </button>
                  </div>
                </div>
                <button className="content-stretch flex gap-2.5 items-center justify-center relative shrink-0 hover:bg-gray-50 transition-colors p-2 rounded">
                  <div className="font-aptos leading-[0] not-italic relative shrink-0 text-[#09141f] text-[16px] text-nowrap">
                    <p className="leading-[22px] whitespace-pre">Next Page</p>
                  </div>
                  <svg className="w-6 h-6 text-[#09141f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}