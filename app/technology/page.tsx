import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Link from "next/link";
import Image from "next/image";
import TechnologyHero from "../components/TechnologyHero";
import TechnologyRoles from "../components/TechnologyRoles";

// Placeholder images - these would be replaced with actual assets from Figma
const imgVector622 = "/vector-622.svg";
const imgArrowRight = "/arrow-right.svg";
const imgCtaArrow = "/cta-arrow.svg";

export default function TechnologyPage() {
  return (
    <div className="min-h-screen bg-[#faf8f5]">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-[174px] pb-[100px] bg-[#faf8f5] relative overflow-hidden">
        <div className="max-w-[1638px] mx-auto h-[700px] px-0">
          <TechnologyHero />
        </div>
      </section>

      {/* Technology Roles Section */}
      <TechnologyRoles />

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