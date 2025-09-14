import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Link from "next/link";
import Image from "next/image";

// Placeholder images - these would be replaced with actual assets from Figma
const imgVector622 = "/vector-622.svg";
const imgArrowRight = "/arrow-right.svg";
const imgCtaArrow = "/cta-arrow.svg";

export default function TechnologyPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-[208px] pb-[80px]">
        <div className="max-w-[1638px] mx-auto px-4">
          <div className="max-w-[694px]">
            <h1 className="font-aptos-semibold text-[96px] leading-[96px] tracking-[-5.76px] text-[#09141f] mb-10">
              Accelerate technology hiring
            </h1>
            <p className="font-aptos-regular text-[24px] leading-[32px] text-[#09141f] mb-12 max-w-[694px]">
              From startups looking for their first dev to multi-billion dollar enterprises scaling teams, we deliver the right tech talent when you need it most.
            </p>
            <div className="flex gap-3">
              <Link href="/book-demo" className="bg-[#fa6a20] flex items-center gap-4 px-[22px] py-3.5 rounded-[12px] hover:bg-[#e85a10] transition-colors">
                <span className="font-aptos-semibold text-[16px] text-white">Book a Demo</span>
                <div className="bg-white rounded-[7px] p-[10px]">
                  <Image src={imgCtaArrow} alt="Arrow" width={16} height={16} />
                </div>
              </Link>
              <Link href="/request-talent" className="flex items-center px-[22px] py-[18px] rounded-[12px] hover:bg-gray-50 transition-colors">
                <span className="font-aptos-semibold text-[16px] text-black">Get Tech Talent</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Roles Section - Exact Figma Design */}
      <section className="box-border content-stretch flex flex-col gap-[90px] items-center justify-center px-0 pt-[80px] pb-[152px] relative size-full">
        <div className="content-stretch flex flex-col gap-[120px] items-start justify-start max-w-[1638px] relative shrink-0 w-full px-4">
          <div className="content-stretch flex flex-col gap-10 items-center justify-center relative shrink-0 w-full">
            <div className="box-border content-stretch flex gap-2.5 items-center justify-center px-0 py-[18px] relative rounded-[9px] shrink-0">
              <div className="h-[13px] relative shrink-0 w-4">
                <div className="absolute inset-[-3.99%_-8.8%_-11.36%_-1.63%]">
                  <Image alt="" src="/vector-622.svg" width={16} height={13} className="block max-w-none size-full" />
                </div>
              </div>
              <div className="font-aptos font-semibold leading-[0] not-italic relative shrink-0 text-[#fa6a20] text-[20px] text-nowrap uppercase">
                <p className="leading-[24px] whitespace-pre">roles & specialties</p>
              </div>
            </div>
            <div className="font-aptos font-semibold leading-[0] not-italic relative shrink-0 text-[#09141f] text-[64px] text-nowrap tracking-[-3.2px]">
              <p className="leading-[0.9] whitespace-pre">Technology roles we'll help you find</p>
            </div>
          </div>
          <div className="gap-6 grid grid-cols-[repeat(3,_minmax(0px,_1fr))] grid-rows-[repeat(2,_minmax(0px,_1fr))] relative size-full">
            <div className="[grid-area:1_/_1] bg-white box-border content-stretch flex flex-col gap-[50px] items-start justify-start overflow-clip px-9 py-[46px] relative rounded-[6px] self-start shadow-[0px_0px_6px_0px_rgba(0,0,0,0.02),0px_2px_4px_0px_rgba(0,0,0,0.08)] shrink-0">
              <div className="content-stretch flex flex-col gap-[60px] items-start justify-start relative shrink-0 w-full">
                <div className="relative shrink-0 size-[46px]">
                  <Image alt="" src="/tech-roles/software-development.svg" width={46} height={46} className="block max-w-none size-full" />
                </div>
                <div className="box-border content-stretch flex flex-col gap-7 items-start justify-center leading-[0] not-italic px-2.5 py-0 relative shrink-0 w-full">
                  <div className="font-aptos font-semibold relative shrink-0 text-[#09141f] text-[28px] tracking-[-1.4px] w-full">
                    <p className="leading-[36px]">Software & Web Development</p>
                  </div>
                  <div className="font-aptos relative shrink-0 text-[#535960] text-[20px] w-full">
                    <ul className="list-disc">
                      <li className="mb-0 ms-[30px]">
                        <span className="leading-[1.5]">Software Engineer</span>
                      </li>
                      <li className="mb-0 ms-[30px]">
                        <span className="leading-[1.5]">Front-End Developer</span>
                      </li>
                      <li className="ms-[30px]">
                        <span className="leading-[1.5]">Full-Stack Developer</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="[grid-area:1_/_2] bg-white box-border content-stretch flex flex-col gap-[50px] items-start justify-start overflow-clip px-9 py-[46px] relative rounded-[6px] self-start shadow-[0px_0px_6px_0px_rgba(0,0,0,0.02),0px_2px_4px_0px_rgba(0,0,0,0.08)] shrink-0">
              <div className="content-stretch flex flex-col gap-[60px] items-start justify-start relative shrink-0 w-full">
                <div className="relative shrink-0 size-[46px]">
                  <Image alt="" src="/tech-roles/data-science.svg" width={46} height={46} className="block max-w-none size-full" />
                </div>
                <div className="box-border content-stretch flex flex-col gap-7 items-start justify-center leading-[0] not-italic px-2.5 py-0 relative shrink-0 w-full">
                  <div className="font-aptos font-semibold relative shrink-0 text-[#09141f] text-[28px] tracking-[-1.4px] w-full">
                    <p className="leading-[36px]">Data Science & AI</p>
                  </div>
                  <div className="font-aptos relative shrink-0 text-[#535960] text-[20px] w-full">
                    <ul className="list-disc">
                      <li className="mb-0 ms-[30px]">
                        <span className="leading-[1.5]">Data Scientist</span>
                      </li>
                      <li className="mb-0 ms-[30px]">
                        <span className="leading-[1.5]">Machine Learning</span>
                      </li>
                      <li className="ms-[30px]">
                        <span className="leading-[1.5]">BI/Data Analyst</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="[grid-area:1_/_3] bg-white box-border content-stretch flex flex-col gap-[50px] items-start justify-start overflow-clip px-9 py-[46px] relative rounded-[6px] self-start shadow-[0px_0px_6px_0px_rgba(0,0,0,0.02),0px_2px_4px_0px_rgba(0,0,0,0.08)] shrink-0">
              <div className="content-stretch flex flex-col gap-[60px] items-start justify-start relative shrink-0 w-full">
                <div className="relative shrink-0 size-[46px]">
                  <Image alt="" src="/tech-roles/cloud-devops.svg" width={46} height={46} className="block max-w-none size-full" />
                </div>
                <div className="box-border content-stretch flex flex-col gap-7 items-start justify-center leading-[0] not-italic px-2.5 py-0 relative shrink-0 w-full">
                  <div className="font-aptos font-semibold relative shrink-0 text-[#09141f] text-[28px] tracking-[-1.4px] w-full">
                    <p className="leading-[36px]">Cloud & DevOps</p>
                  </div>
                  <div className="font-aptos relative shrink-0 text-[#535960] text-[20px] w-full">
                    <ul className="list-disc">
                      <li className="mb-0 ms-[30px]">
                        <span className="leading-[1.5]">Cloud Architect</span>
                      </li>
                      <li className="mb-0 ms-[30px]">
                        <span className="leading-[1.5]">DevOps Engineer</span>
                      </li>
                      <li className="ms-[30px]">
                        <span className="leading-[1.5]">Site Reliability Engineer (SRE)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="[grid-area:2_/_1] bg-white box-border content-stretch flex flex-col gap-[50px] items-start justify-start overflow-clip px-9 py-[46px] relative rounded-[6px] self-start shadow-[0px_0px_6px_0px_rgba(0,0,0,0.02),0px_2px_4px_0px_rgba(0,0,0,0.08)] shrink-0">
              <div className="content-stretch flex flex-col gap-[60px] items-start justify-start relative shrink-0 w-full">
                <div className="relative shrink-0 size-[46px]">
                  <Image alt="" src="/tech-roles/cybersecurity.svg" width={46} height={46} className="block max-w-none size-full" />
                </div>
                <div className="box-border content-stretch flex flex-col gap-7 items-start justify-center leading-[0] not-italic px-2.5 py-0 relative shrink-0 w-full">
                  <div className="font-aptos font-semibold relative shrink-0 text-[#09141f] text-[28px] tracking-[-1.4px] w-full">
                    <p className="leading-[36px]">Cybersecurity</p>
                  </div>
                  <div className="font-aptos relative shrink-0 text-[#535960] text-[20px] w-full">
                    <ul className="list-disc">
                      <li className="mb-0 ms-[30px]">
                        <span className="leading-[1.5]">Cybersecurity Analyst</span>
                      </li>
                      <li className="mb-0 ms-[30px]">
                        <span className="leading-[1.5]">Network Security Engineer</span>
                      </li>
                      <li className="ms-[30px]">
                        <span className="leading-[1.5]">Penetration Tester</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="[grid-area:2_/_2] bg-white box-border content-stretch flex flex-col gap-[50px] items-start justify-start overflow-clip px-9 py-[46px] relative rounded-[6px] self-start shadow-[0px_0px_6px_0px_rgba(0,0,0,0.02),0px_2px_4px_0px_rgba(0,0,0,0.08)] shrink-0">
              <div className="content-stretch flex flex-col gap-[60px] items-start justify-start relative shrink-0 w-full">
                <div className="relative shrink-0 size-[46px]">
                  <Image alt="" src="/tech-roles/it-infrastructure.svg" width={46} height={46} className="block max-w-none size-full" />
                </div>
                <div className="box-border content-stretch flex flex-col gap-7 items-start justify-center leading-[0] not-italic px-2.5 py-0 relative shrink-0 w-full">
                  <div className="font-aptos font-semibold relative shrink-0 text-[#09141f] text-[28px] tracking-[-1.4px] w-full">
                    <p className="leading-[36px]">IT Infrastructure & Support</p>
                  </div>
                  <div className="font-aptos relative shrink-0 text-[#535960] text-[20px] w-full">
                    <ul className="list-disc">
                      <li className="mb-0 ms-[30px]">
                        <span className="leading-[1.5]">Systems Administrator</span>
                      </li>
                      <li className="mb-0 ms-[30px]">
                        <span className="leading-[1.5]">Network Engineer</span>
                      </li>
                      <li className="ms-[30px]">
                        <span className="leading-[1.5]">IT Support Specialist</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="[grid-area:2_/_3] bg-white box-border content-stretch flex flex-col gap-[50px] items-start justify-start overflow-clip px-9 py-[46px] relative rounded-[6px] self-start shadow-[0px_0px_6px_0px_rgba(0,0,0,0.02),0px_2px_4px_0px_rgba(0,0,0,0.08)] shrink-0">
              <div className="content-stretch flex flex-col gap-[60px] items-start justify-start relative shrink-0 w-full">
                <div className="relative shrink-0 size-[46px]">
                  <Image alt="" src="/tech-roles/product-management.svg" width={46} height={46} className="block max-w-none size-full" />
                </div>
                <div className="box-border content-stretch flex flex-col gap-7 items-start justify-center leading-[0] not-italic px-2.5 py-0 relative shrink-0 w-full">
                  <div className="font-aptos font-semibold relative shrink-0 text-[#09141f] text-[28px] tracking-[-1.4px] w-full">
                    <p className="leading-[36px]">Product & Project Managers</p>
                  </div>
                  <div className="font-aptos relative shrink-0 text-[#535960] text-[20px] w-full">
                    <ul className="list-disc">
                      <li className="mb-0 ms-[30px]">
                        <span className="leading-[1.5]">Product Manager</span>
                      </li>
                      <li className="mb-0 ms-[30px]">
                        <span className="leading-[1.5]">Technical Project Manager</span>
                      </li>
                      <li className="ms-[30px]">
                        <span className="leading-[1.5]">Business Analyst</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Case Studies Section */}
      <section className="py-[152px]">
        <div className="max-w-[1638px] mx-auto px-4">
          {/* Header */}
          <div className="mb-[120px]">
            <div className="flex items-center gap-2.5 mb-10">
              <Image src={imgVector622} alt="" width={16} height={13} />
              <span className="font-aptos-semibold text-[20px] text-[#fa6a20] uppercase">CASE STUDIES</span>
            </div>
            <h2 className="font-aptos-semibold text-[64px] leading-[57.6px] tracking-[-3.2px] text-[#09141f]">
              Technology Case Studies
            </h2>
          </div>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-4 gap-[20px]">
            {/* Case Study 1 - AmplifyChange */}
            <div className="bg-white rounded-[15px] overflow-hidden">
              <div className="h-[292px] bg-gradient-to-br from-purple-900 to-purple-700 relative">
                <div className="absolute top-[40px] left-[24px]">
                  <div className="text-white font-aptos-semibold text-[14px] mb-2">AMPLIFY CHANGE</div>
                </div>
                <div className="absolute bottom-[30px] left-[30px] right-[30px]">
                  <p className="text-white font-aptos-regular text-[16px] leading-[20px] mb-2">
                    "We expanded beyond hiring to 
                    finding the right team partners."
                  </p>
                  <p className="text-white font-aptos-regular text-[11px] opacity-75">- Alicia Thomas, CEO</p>
                </div>
              </div>
            </div>

            {/* Case Study 2 - Weatherford */}
            <div className="bg-white rounded-[15px] overflow-hidden">
              <div className="h-[292px] bg-gradient-to-br from-orange-600 to-yellow-500 relative">
                <div className="absolute top-[40px] left-[24px]">
                  <div className="text-white font-aptos-semibold text-[14px] mb-2">WEATHERFORD</div>
                </div>
                <div className="absolute bottom-[30px] left-[30px] right-[30px]">
                  <p className="text-white font-aptos-regular text-[16px] leading-[20px] mb-2">
                    "Elios transformed our entire 
                    hiring process."
                  </p>
                  <p className="text-white font-aptos-regular text-[11px] opacity-75">- Thomas Johnson, VP</p>
                </div>
              </div>
            </div>

            {/* Case Study 3 - Drata */}
            <div className="bg-white rounded-[15px] overflow-hidden">
              <div className="h-[292px] bg-gradient-to-br from-slate-800 to-slate-600 relative">
                <div className="absolute top-[40px] left-[24px]">
                  <div className="text-white font-aptos-semibold text-[14px] mb-2">DRATA</div>
                </div>
                <div className="absolute bottom-[30px] left-[30px] right-[30px]">
                  <p className="text-white font-aptos-regular text-[16px] leading-[20px] mb-2">
                    "We couldn't believe how 
                    targeted these positions."
                  </p>
                  <p className="text-white font-aptos-regular text-[11px] opacity-75">- Sarah Kim, Director</p>
                </div>
              </div>
            </div>

            {/* Case Study 4 - Samsung */}
            <div className="bg-white rounded-[15px] overflow-hidden">
              <div className="h-[292px] bg-gradient-to-br from-blue-900 to-blue-700 relative">
                <div className="absolute top-[40px] left-[24px]">
                  <div className="text-white font-aptos-semibold text-[14px] mb-2">SAMSUNG</div>
                </div>
                <div className="absolute bottom-[30px] left-[30px] right-[30px]">
                  <p className="text-white font-aptos-regular text-[16px] leading-[20px] mb-2">
                    "Every Think big."
                  </p>
                  <p className="text-white font-aptos-regular text-[11px] opacity-75">- Innovation Team</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Happening in Technology Section */}
      <section className="py-[152px] pb-[400px]">
        <div className="max-w-[1638px] mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-[90px]">
            <div className="flex items-center justify-center gap-2.5 mb-10">
              <Image src={imgVector622} alt="" width={16} height={13} />
              <span className="font-aptos-semibold text-[20px] text-[#fa6a20] uppercase">INSIGHTS</span>
            </div>
            <h2 className="font-aptos-semibold text-[64px] leading-[57.6px] tracking-[-3.2px] text-[#09141f]">
              What's Happening in Technology
            </h2>
          </div>

          {/* Blog Articles */}
          <div className="grid grid-cols-3 gap-[50px] mb-[90px]">
            {/* Article 1 */}
            <div className="flex flex-col">
              <div className="h-[292px] bg-gradient-to-br from-slate-900 to-slate-700 rounded-[15px] mb-[30px] overflow-hidden relative flex items-center justify-center">
                <div className="text-white font-aptos-semibold text-[18px] text-center px-8">
                  Speed Matters
                </div>
              </div>
              <h3 className="font-aptos-semibold text-[32px] leading-[38.4px] tracking-[-0.96px] text-[#09141f] mb-10">
                Why Speed Matters: How Faster Hiring Gives Companies a Competitive Edge
              </h3>
              <div className="flex items-center gap-2.5 text-[#121212] text-[16px]">
                <span className="font-aptos-regular">Duran Workman</span>
                <span>·</span>
                <span className="font-aptos-regular">4m read</span>
              </div>
            </div>

            {/* Article 2 */}
            <div className="flex flex-col">
              <div className="h-[292px] bg-gradient-to-br from-slate-900 to-slate-700 rounded-[15px] mb-[30px] overflow-hidden relative flex items-center justify-center">
                <div className="text-white font-aptos-semibold text-[18px] text-center px-8">
                  AI + Human Expertise
                </div>
              </div>
              <h3 className="font-aptos-semibold text-[32px] leading-[32px] tracking-[-0.96px] text-[#09141f] mb-10">
                AI + Human Expertise: The Winning Formula for Smarter Recruiting
              </h3>
              <div className="flex items-center gap-2.5 text-[#121212] text-[16px]">
                <span className="font-aptos-regular">Duran Workman</span>
                <span>·</span>
                <span className="font-aptos-regular">4m read</span>
              </div>
            </div>

            {/* Article 3 */}
            <div className="flex flex-col">
              <div className="h-[292px] bg-gradient-to-br from-slate-900 to-slate-700 rounded-[15px] mb-[30px] overflow-hidden relative flex items-center justify-center">
                <div className="text-white font-aptos-semibold text-[18px] text-center px-8">
                  Top 5 Hiring Trends
                </div>
              </div>
              <h3 className="font-aptos-semibold text-[32px] leading-[32px] tracking-[-0.96px] text-[#09141f] mb-10">
                Top 5 Hiring Trends Every Business Should Watch in 2025
              </h3>
              <div className="flex items-center gap-2.5 text-[#121212] text-[16px]">
                <span className="font-aptos-regular">Duran Workman</span>
                <span>·</span>
                <span className="font-aptos-regular">4m read</span>
              </div>
            </div>
          </div>

          {/* See All Link */}
          <div className="flex items-center justify-center">
            <Link href="/blog" className="flex items-center gap-2.5">
              <span className="font-aptos-semibold text-[24px] text-[#fa6a20] tracking-[-0.48px]">See All Blog Posts</span>
              <Image src={imgArrowRight} alt="Arrow" width={22} height={22} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}