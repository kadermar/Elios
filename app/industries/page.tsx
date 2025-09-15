import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import IndustryHero from "../components/IndustryHero";
import IndustriesSection from "../components/IndustriesSection";
import Testimonials from "../components/Testimonials";
import Tagline from "../components/Tagline";
import Button from "../components/Button";
import CTA from "../components/CTA";


export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-[#faf8f5]">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-[174px] pb-[100px] bg-[#faf8f5] relative overflow-hidden">
        <div className="max-w-[1638px] mx-auto h-[600px]">
          <IndustryHero />
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-[100px] bg-[#faf8f5]">
        <div className="max-w-[1638px] mx-auto">
          <IndustriesSection />
        </div>
      </section>

      {/* Industry Case Studies */}
      <section className="py-[152px]">
        <div className="max-w-[1638px] mx-auto px-4">
          <div className="space-y-[120px]">
            
            {/* Technology */}
            <div className="flex items-center">
              <div className="flex-1 h-[628px] rounded-[15px] bg-cover bg-center" style={{ backgroundImage: 'url(/assets/industries/grid-technology.png)' }}></div>
              <div className="flex-1 px-[100px]">
                <h3 className="font-aptos-semibold text-[48px] leading-[0.9] tracking-[-2.4px] text-[#09141f] mb-[42px]">
                  Technology
                </h3>
                <p className="font-aptos-regular text-[20px] leading-[1.45] text-[#535960] mb-[42px]">
                  In technology, the competition for talent is constant and fast-moving. Elios recruiters specialize in sourcing software engineers, data scientists, DevOps specialists, and cybersecurity experts across emerging stacks and multi-cloud environments. By combining AI-driven matching with industry-specific recruiters who understand evolving tech markets, we help clients secure top candidates quickly while ensuring cultural and team fit. The result: faster hires, lower attrition, and the confidence to accelerate innovation.
                </p>
                <Button href="/technology" variant="tertiary" size="lg" showArrow={true}>
                  See Technology
                </Button>
              </div>
            </div>

            {/* Healthcare & Life Sciences */}
            <div className="flex items-center">
              <div className="flex-1 h-[628px] rounded-[15px] bg-cover bg-center" style={{ backgroundImage: 'url(/assets/industries/grid-healthcare.png)' }}></div>
              <div className="flex-1 px-[100px]">
                <h3 className="font-aptos-semibold text-[48px] leading-[0.9] tracking-[-2.4px] text-[#09141f] mb-[42px]">
                  Healthcare & Life Sciences
                </h3>
                <p className="font-aptos-regular text-[20px] leading-[1.45] text-[#535960] mb-[42px]">
                  Healthcare hiring impacts patient outcomes, so precision and speed matter. Elios recruiters bring deep healthcare domain expertise, connecting clinicians, researchers, administrators, and health-tech professionals to the organizations that need them most. Our process accounts for strict credentialing, compliance, and licensure requirements while balancing workforce stability and cost. By blending healthcare-savvy recruiters with AI tools, we deliver credential-verified talent quickly—helping clients reduce dependence on travelers, stabilize units, and improve patient-centered care.
                </p>
                <Button href="/healthcare" variant="tertiary" size="lg" showArrow={true}>
                  See Healthcare & Life Sciences
                </Button>
              </div>
            </div>

            {/* Engineering */}
            <div className="flex items-center">
              <div className="flex-1 h-[628px] rounded-[15px] bg-cover bg-center" style={{ backgroundImage: 'url(/assets/industries/grid-engineering.png)' }}></div>
              <div className="flex-1 px-[100px]">
                <h3 className="font-aptos-semibold text-[48px] leading-[0.9] tracking-[-2.4px] text-[#09141f] mb-[42px]">
                  Engineering
                </h3>
                <div className="font-aptos-regular text-[20px] leading-[1.45] text-[#535960] mb-[42px]">
                  <p className="mb-4">
                    Engineering hiring directly impacts project timelines, safety standards, and delivery quality. Elios recruiters focus on sourcing proven professionals across mechanical, civil, electrical, chemical, and process engineering disciplines, as well as quality and reliability specialists.
                  </p>
                  <p>
                    Our approach blends deep industry expertise with AI-enabled matching, ensuring candidates are not only credential-verified but also aligned to project scope, compliance requirements, and cultural fit. By combining recruiter judgment with smart technology, Elios helps organizations close critical vacancies faster, reduce costly project delays, and keep complex engineering initiatives on track.
                  </p>
                </div>
                <Button href="/engineering" variant="tertiary" size="lg" showArrow={true}>
                  See Engineering
                </Button>
              </div>
            </div>

            {/* Energy */}
            <div className="flex items-center">
              <div className="flex-1 h-[628px] rounded-[15px] bg-cover bg-center" style={{ backgroundImage: 'url(/assets/industries/grid-energy.png)' }}></div>
              <div className="flex-1 px-[100px]">
                <h3 className="font-aptos-semibold text-[48px] leading-[0.9] tracking-[-2.4px] text-[#09141f] mb-[42px]">
                  Energy
                </h3>
                <div className="font-aptos-regular text-[20px] leading-[1.45] text-[#535960] mb-[42px]">
                  <p className="mb-4">
                    Energy projects—especially in oil and gas—require talent that can deliver in high-stakes, highly regulated environments. Elios recruiters specialize in sourcing drilling engineers, HSE specialists, integrity inspectors, and operations leaders who ensure safety, reliability, and efficiency across upstream and downstream operations.
                  </p>
                  <p>
                    Our deep industry expertise, combined with AI-enabled matching, helps clients fill roles quickly while meeting strict compliance and certification standards. Beyond oil and gas, we also support emerging renewable energy initiatives, connecting organizations to professionals in alternative energy who bring innovation and adaptability. With Elios, energy companies secure the talent needed to keep production moving, safeguard operations, and drive progress into the future.
                  </p>
                </div>
                <Button href="/energy" variant="tertiary" size="lg" showArrow={true}>
                  See Energy
                </Button>
              </div>
            </div>

            {/* Private Equity */}
            <div className="flex items-center">
              <div className="flex-1 h-[628px] rounded-[15px] bg-cover bg-center" style={{ backgroundImage: 'url(/assets/industries/grid-private-equity.png)' }}></div>
              <div className="flex-1 px-[100px]">
                <h3 className="font-aptos-semibold text-[48px] leading-[0.9] tracking-[-2.4px] text-[#09141f] mb-[42px]">
                  Private Equity
                </h3>
                <p className="font-aptos-regular text-[20px] leading-[1.45] text-[#535960] mb-[42px]">
                  In private equity, success depends on building high-performing portfolio companies quickly and confidently. Elios connects funds with the talent needed to execute growth strategies—from CFOs and controllers to operating partners, technology leaders, and functional executives. Our recruiters understand the urgency and discretion required in private equity hiring, sourcing candidates who not only meet the technical and financial requirements but also thrive in fast-paced, transformation-driven environments. Leveraging AI-enabled matching and deep recruiter expertise, we help firms staff leadership and operational roles that drive immediate value creation while positioning portfolio companies for long-term success.
                </p>
                <Button href="/private-equity" variant="tertiary" size="lg" showArrow={true}>
                  See Private Equity
                </Button>
              </div>
            </div>
          </div>
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