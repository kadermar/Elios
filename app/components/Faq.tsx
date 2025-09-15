"use client";

import Accordion from "./Accordion";
import Tagline from "./Tagline";
import Link from "./Link";

const faqData = [
  {
    question: "What is Elios?",
    answer: "Elios is a hybrid recruiting company with two offerings and one mission: help teams hire faster without sacrificing fit. Elios Talent is our high-touch staffing service run by experienced recruiters who partner with you end-to-end. Elios Insights is our platform—an intelligence layer that sits on top of your ATS to streamline matching, scheduling, and feedback while keeping humans in control. Together, they turn hiring from a bottleneck into an enabler: fewer, better candidates, clearer decisions, and cleaner close plans. Clients keep their existing systems and gain the speed, structure, and visibility they've been missing. Candidates get a transparent, respectful experience with timely prep and feedback.",
  },
  {
    question: "How does Elios Insights work with our ATS and process?",
    answer: "Elios Insights layers on top of your ATS—you don't have to rip and replace. We translate each role into a structured brief, use job-relevant signals to rank candidates, and automate orchestration like scheduling and feedback capture. Recruiters review every recommendation and make the calls—human-in-the-loop by design. The platform writes back the right data so your ATS remains the source of record, while dashboards show funnel health, time-to-decision, and bottlenecks. Teams spend less time coordinating and more time with finalists. The result is faster cycles, stronger fits, and a process that improves with every search.",
    isOpenByDefault: true,
  },
  {
    question: "What industries do you serve?",
    answer: "We specialize in technology, healthcare, energy, private equity, and financial services. Our recruiters have deep domain expertise in each sector, understanding the unique challenges, regulatory requirements, and talent landscapes. Whether you're scaling a SaaS company, building a healthcare innovation team, or staffing energy infrastructure projects, we bring industry-specific knowledge to every search.",
  },
  {
    question: "What is your recruitment process?",
    answer: "Our process begins with a deep-dive consultation to understand your role requirements, team dynamics, and culture. We then leverage our network and sourcing tools to identify qualified candidates, conduct thorough screenings, and present only the most relevant profiles. Throughout the process, we provide regular updates, facilitate interviews, and support negotiations to ensure a successful placement.",
  },
  {
    question: "I'm a candidate looking for my next job, how can you help?",
    answer: "We work with top-tier companies across multiple industries and can connect you with opportunities that align with your career goals. Our team provides personalized guidance throughout the interview process, helps you understand company cultures, and negotiates on your behalf. Whether you're actively searching or open to the right opportunity, we're here to help you find your next career move.",
  },
];

export default function Faq() {
  return (
    <section className="w-full py-24 md:py-[152px] pb-[400px]">
      <div className="max-w-[1638px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-[162px] items-start">
          {/* Left Side - Header Content */}
          <div className="flex flex-col gap-12 lg:gap-[50px] max-w-[668px] w-full lg:flex-shrink-0">
            <div className="flex flex-col gap-6 lg:gap-[30px]">
              <Tagline text="FAQ" />
              <h2 className="font-semibold text-[#09141f] text-[48px] md:text-[64px] lg:text-[72px] leading-[1.1] md:leading-none tracking-[-2.4px] md:tracking-[-3.6px]">
                Questions?<br />
                We've got answers.
              </h2>
            </div>
            
            <p className="text-[#535960] text-[20px] md:text-[24px] leading-[28px] md:leading-[32px] max-w-[550px]">
              Find quick answers to common questions about Elios. Still curious? We can help.
            </p>
            
            <Link 
              href="/connect" 
              className="inline-flex items-center gap-2 text-[#09141f] text-[20px] font-semibold underline hover:text-[#fb5d0b] transition-colors"
            >
              <svg width="19" height="17" viewBox="0 0 19 17" fill="none" className="flex-shrink-0">
                <path 
                  d="M2 8.5L17 8.5M17 8.5L10 1.5M17 8.5L10 15.5" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
              Connect With Us
            </Link>
          </div>

          {/* Right Side - Accordion */}
          <div className="flex-1 w-full">
            <div className="flex flex-col gap-3">
              {faqData.map((faq, index) => (
                <Accordion
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpenByDefault={faq.isOpenByDefault || false}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}