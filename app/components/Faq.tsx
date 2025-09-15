"use client";

import Accordion from "./Accordion";
import Tagline from "./Tagline";
import Link from "./Link";
import Icon from "./Icon";

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
    <section className="box-border content-stretch flex flex-col items-center justify-center px-16 py-36 relative size-full">
      <div className="gap-6 grid grid-cols-[repeat(4,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[508px] max-w-[1700px] relative shrink-0 w-full">
        <div className="[grid-area:1_/_1_/_auto_/_span_2] content-stretch flex flex-col gap-6 items-start justify-start relative self-start shrink-0">
          {/* Left Side - Header Content */}
          <div className="content-stretch flex flex-col gap-6 items-start justify-start relative size-full">
            <div className="content-stretch flex flex-col gap-6 h-[164px] items-start justify-center relative shrink-0 w-full">
              <div className="content-stretch flex flex-col gap-4 items-start justify-center relative shrink-0 w-full">
                <Tagline text="frequently asked questions" />
                <div
                  className="min-w-full relative shrink-0"
                  style={{
                    color: '#0f1012',
                    fontFeatureSettings: "'liga' off, 'clig' off",
                    fontFamily: 'var(--Typeface-Family-Heading, Aptos)',
                    fontSize: 'var(--Typeface-Size-H2, 54px)',
                    fontStyle: 'normal',
                    fontWeight: 600,
                    lineHeight: '54px',
                    letterSpacing: '-3.24px',
                    width: 'min-content'
                  }}
                >
                  <p>
                    Questions?<br />
                    We've got answers.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="min-w-full relative shrink-0"
              style={{
                color: '#595959',
                fontFeatureSettings: "'liga' off, 'clig' off",
                fontFamily: 'var(--Typeface-Family-Body, Aptos)',
                fontSize: 'var(--Typeface-Size-Paragraph-lg, 20px)',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '24px',
                width: 'min-content'
              }}
            >
              <p>
                Find quick answers to common questions about Elios.<br />
                Still curious? We can help.
              </p>
            </div>

            <Link
              href="/connect"
              className="box-border content-stretch flex gap-2 items-center justify-center p-[8px] relative rounded-[12px] shrink-0 hover:bg-gray-50 transition-colors"
            >
              <div className="shrink-0 size-6">
                <Icon type="message-chat-square" size="regular" />
              </div>
              <div
                className="relative shrink-0 text-center text-nowrap"
                style={{
                  color: '#0f1012',
                  fontFeatureSettings: "'liga' off, 'clig' off",
                  fontFamily: 'var(--Typeface-Family-Body, Aptos)',
                  fontSize: '16px',
                  fontStyle: 'normal',
                  fontWeight: 600,
                  lineHeight: '20px'
                }}
              >
                <p className="whitespace-pre">Connect With Us</p>
              </div>
            </Link>
          </div>
        </div>

        {/* Right Side - Accordion */}
        <div className="[grid-area:1_/_3_/_auto_/_span_2] content-stretch cursor-pointer flex flex-col gap-2 items-start justify-center relative self-start shrink-0">
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
    </section>
  );
}