import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import StaffingHero from "../components/StaffingHero";
import StaffingSubhead from "../components/StaffingSubhead";
import StaffingTabBar from "../components/StaffingTabBar";
import StaffingGrid from "../components/StaffingGrid";
import Testimonials from "../components/Testimonials";
import Tagline from "../components/Tagline";
import Button from "../components/Button";
import CTA from "../components/CTA";

export default function StaffingServicesPage() {
  return (
    <div className="min-h-screen bg-[#faf8f5]">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-[174px] pb-[100px] bg-[#faf8f5] relative overflow-hidden">
        <div className="max-w-[1638px] mx-auto h-[700px] px-16">
          <StaffingHero />
        </div>
      </section>

      {/* Subhead Section */}
      <section className="py-[100px] bg-[#faf8f5]">
        <div className="max-w-[1638px] mx-auto px-4">
          <StaffingSubhead />
        </div>
      </section>

      {/* Tab Bar Section */}
      <section className="bg-[#faf8f5]">
        <div className="max-w-[1638px] mx-auto px-16">
          <StaffingTabBar />
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-[152px] bg-[#faf8f5] overflow-visible">
        <div className="max-w-[1638px] mx-auto px-16 overflow-visible">
          <StaffingGrid />
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Blog/Knowledge Section */}
      <section className="py-36">
        <div className="max-w-[1700px] mx-auto px-16">
          {/* Header */}
          <div className="flex flex-col gap-6 items-center justify-center mb-16">
            <div className="flex flex-col gap-4 items-center justify-center">
              <Tagline text="featured blog posts" />
              <div className="font-['Aptos:Semibold',_sans-serif] leading-[54px] not-italic relative shrink-0 text-[#0f1012] text-[54px] text-center text-nowrap tracking-[-3.24px]">
                Latest Insights from Elios
              </div>
            </div>
          </div>

          {/* Blog Articles */}
          <div className="flex gap-6 items-start justify-start mb-16">
            {/* Article 1 */}
            <div className="flex-1 flex flex-col gap-6">
              <div className="h-[280px] bg-cover bg-center rounded-[6px] overflow-hidden relative" style={{ backgroundImage: 'url(/assets/blog/woman-speaking.png)' }}>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="font-['Aptos:Semibold',_sans-serif] leading-[28px] not-italic relative shrink-0 text-[#09141f] text-[28px] tracking-[-0.84px]">
                  Why speed matters: How faster hiring gives companies a Competitive Edge
                </h3>
                <div className="flex font-['Aptos:Regular',_sans-serif] gap-1 items-center justify-start leading-[20px] not-italic relative shrink-0 text-[#121212] text-[16px] text-nowrap">
                  <span>Duran Workman</span>
                  <span>·</span>
                  <span>4m read</span>
                </div>
              </div>
            </div>

            {/* Article 2 */}
            <div className="flex-1 flex flex-col gap-6">
              <div className="h-[280px] bg-cover bg-center rounded-[6px] overflow-hidden relative" style={{ backgroundImage: 'url(/assets/blog/woman-speaking.png)' }}>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="font-['Aptos:Semibold',_sans-serif] leading-[28px] not-italic relative shrink-0 text-[#09141f] text-[28px] tracking-[-0.84px]">
                  How to supercharge your hiring
                </h3>
                <div className="flex font-['Aptos:Regular',_sans-serif] gap-1 items-center justify-start leading-[20px] not-italic relative shrink-0 text-[#121212] text-[16px] text-nowrap">
                  <span>Duran Workman</span>
                  <span>·</span>
                  <span>4m read</span>
                </div>
              </div>
            </div>

            {/* Article 3 */}
            <div className="flex-1 flex flex-col gap-6">
              <div className="h-[280px] bg-cover bg-center rounded-[6px] overflow-hidden relative" style={{ backgroundImage: 'url(/assets/blog/woman-speaking.png)' }}>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="font-['Aptos:Semibold',_sans-serif] leading-[28px] not-italic relative shrink-0 text-[#09141f] text-[28px] tracking-[-0.84px]">
                  Where have all the good talents gone?
                </h3>
                <div className="flex font-['Aptos:Regular',_sans-serif] gap-1 items-center justify-start leading-[20px] not-italic relative shrink-0 text-[#121212] text-[16px] text-nowrap">
                  <span>Duran Workman</span>
                  <span>·</span>
                  <span>4m read</span>
                </div>
              </div>
            </div>
          </div>

          {/* See All Button */}
          <div className="flex items-center justify-center">
            <Button href="/blog" variant="tertiary" size="lg" showArrow={true}>
              See All Blog Posts
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA />

      <Footer />
    </div>
  );
}