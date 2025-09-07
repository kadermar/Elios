import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Link from "next/link";
import Image from "next/image";

// Image assets from Figma design
const imgVector622 = "http://localhost:3845/assets/18721c6591626d2156d2f18b97a5158dcf117d0c.svg";
const imgTechIcon = "http://localhost:3845/assets/ed20a5b5871d5471661917089862185541b64acc.svg";
const imgHealthcareIcon = "http://localhost:3845/assets/60c7142738da60dadcbe2ff0624215123d0a873d.svg";
const imgEngineeringIcon = "http://localhost:3845/assets/1c5c457543dead4d930eb84e293016c37e44ac4b.svg";
const imgEnergyIcon = "http://localhost:3845/assets/be7de6960d2ca82797aadbc5aaf7abc21495d8f0.svg";
const imgArrowRight = "http://localhost:3845/assets/d30f514f5135aa681851286d93d37f2d1c4b351c.svg";
const imgBlogImage = "http://localhost:3845/assets/4fb884a0cef509b72695d5aa4be91f4a2d5135e0.png";
const imgCtaBackground = "http://localhost:3845/assets/941d1e71b7568930660afa0b73e67105fc6cbf40.png";
const imgCtaArrow = "http://localhost:3845/assets/af95064ccab6ee359bc75f7a09db40c0162fd9cd.svg";

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-[174px] pb-[100px] bg-[#f8f9fa]">
        <div className="max-w-[1638px] mx-auto px-4 flex items-center justify-between gap-[140px]">
          <div className="max-w-[694px]">
            <div className="mb-[100px]">
              <h1 className="font-aptos-semibold text-[96px] leading-[96px] tracking-[-5.76px] text-[#09141f] mb-10">
                Industry knowledge meets hiring precision
              </h1>
              <p className="font-aptos-regular text-[24px] leading-[32px] text-[#09141f] mb-10">
                From fintech to healthcare to energy, Elios adapts to the unique hiring challenges of each industry.
              </p>
              <div className="flex gap-3">
                <Link href="/book-demo" className="bg-[#fa6a20] flex items-center gap-4 px-[22px] py-3.5 rounded-[12px] hover:bg-[#e85a10] transition-colors">
                  <span className="font-aptos-semibold text-[16px] text-white">Book a Demo</span>
                  <div className="bg-white rounded-[7px] p-[10px]">
                    <Image src={imgCtaArrow} alt="Arrow" width={16} height={16} />
                  </div>
                </Link>
                <Link href="/request-talent" className="flex items-center px-[22px] py-[18px] rounded-[12px] hover:bg-gray-50 transition-colors">
                  <span className="font-aptos-semibold text-[16px] text-black">Request Talent</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Overview Section */}
      <section className="py-[100px]">
        <div className="max-w-[1638px] mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-[120px]">
            <div className="flex items-center justify-center gap-2.5 mb-10">
              <Image src={imgVector622} alt="" width={16} height={13} />
              <span className="font-aptos-semibold text-[20px] text-[#fa6a20] uppercase tracking-[-0.4px]">
                CORE INDUSTRIES
              </span>
            </div>
            <h2 className="font-aptos-semibold text-[64px] leading-[0.9] tracking-[-3.2px] text-[#09141f]">
              Industries We Serve
            </h2>
          </div>

          {/* Description */}
          <div className="flex gap-10 mb-[120px] text-[#535960] text-[20px] leading-[1.45]">
            <div className="flex-1">
              <p className="font-aptos-regular">
                At Elios, we know that every industry has its own talent dynamics, and hiring challenges can look very different from one sector to the next. That's why we don't apply a one-size-fits-all approach. Instead, our recruiters specialize by industry, bringing years of experience and cultivated relationships within their fields to deliver the right talent at the right time.
              </p>
            </div>
            <div className="flex-1">
              <p className="font-aptos-regular">
                We study the supply-and-demand trends, credential requirements, and career pathways unique to each market, allowing us to tailor our process for maximum impact. Whether it's finding specialized engineers in energy, nurses in healthcare, or developers in technology, we adapt our strategy to the realities of each sector. The result is a smarter, more targeted hiring experience that consistently delivers quality candidates aligned to your business needs.
              </p>
            </div>
          </div>

          {/* Industry Navigation */}
          <div className="flex items-center justify-center">
            <div className="bg-white flex rounded-[15px] shadow-sm">
              <div className="flex items-center gap-3 px-[30px] py-[26px] rounded-l-[15px]">
                <Image src={imgTechIcon} alt="Technology" width={24} height={24} />
                <span className="font-aptos-semibold text-[16px] text-[#595959]">Technology</span>
              </div>
              <div className="flex items-center gap-3 px-5 py-[26px]">
                <Image src={imgHealthcareIcon} alt="Healthcare" width={24} height={24} />
                <span className="font-aptos-semibold text-[16px] text-[#595959]">Healthcare & Life Sciences</span>
              </div>
              <div className="flex items-center gap-3 px-5 py-[26px]">
                <Image src={imgEngineeringIcon} alt="Engineering" width={24} height={24} />
                <span className="font-aptos-semibold text-[16px] text-[#595959]">Engineering</span>
              </div>
              <div className="flex items-center gap-3 px-5 py-[26px]">
                <Image src={imgEnergyIcon} alt="Energy" width={24} height={24} />
                <span className="font-aptos-semibold text-[16px] text-[#595959]">Energy</span>
              </div>
              <div className="flex items-center gap-3 px-[30px] py-[26px] rounded-r-[15px]">
                <Image src={imgHealthcareIcon} alt="Private Equity" width={24} height={24} />
                <span className="font-aptos-semibold text-[16px] text-[#595959]">Private Equity</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Case Studies */}
      <section className="py-[152px]">
        <div className="max-w-[1638px] mx-auto px-4">
          <div className="space-y-[120px]">
            
            {/* Technology */}
            <div className="flex items-center">
              <div className="flex-1 bg-white h-[628px] rounded-[15px]"></div>
              <div className="flex-1 px-[100px]">
                <h3 className="font-aptos-semibold text-[48px] leading-[0.9] tracking-[-2.4px] text-[#09141f] mb-[42px]">
                  Technology
                </h3>
                <p className="font-aptos-regular text-[20px] leading-[1.45] text-[#535960] mb-[42px]">
                  In technology, the competition for talent is constant and fast-moving. Elios recruiters specialize in sourcing software engineers, data scientists, DevOps specialists, and cybersecurity experts across emerging stacks and multi-cloud environments. By combining AI-driven matching with industry-specific recruiters who understand evolving tech markets, we help clients secure top candidates quickly while ensuring cultural and team fit. The result: faster hires, lower attrition, and the confidence to accelerate innovation.
                </p>
                <Link href="/technology" className="flex items-center gap-2.5">
                  <span className="font-aptos-semibold text-[24px] text-[#fa6a20] tracking-[-0.48px]">See Technology</span>
                  <Image src={imgArrowRight} alt="Arrow" width={22} height={22} />
                </Link>
              </div>
            </div>

            {/* Healthcare & Life Sciences */}
            <div className="flex items-center">
              <div className="flex-1 bg-white h-[628px] rounded-[15px]"></div>
              <div className="flex-1 px-[100px]">
                <h3 className="font-aptos-semibold text-[48px] leading-[0.9] tracking-[-2.4px] text-[#09141f] mb-[42px]">
                  Healthcare & Life Sciences
                </h3>
                <p className="font-aptos-regular text-[20px] leading-[1.45] text-[#535960] mb-[42px]">
                  Healthcare hiring impacts patient outcomes, so precision and speed matter. Elios recruiters bring deep healthcare domain expertise, connecting clinicians, researchers, administrators, and health-tech professionals to the organizations that need them most. Our process accounts for strict credentialing, compliance, and licensure requirements while balancing workforce stability and cost. By blending healthcare-savvy recruiters with AI tools, we deliver credential-verified talent quickly—helping clients reduce dependence on travelers, stabilize units, and improve patient-centered care.
                </p>
                <Link href="/healthcare" className="flex items-center gap-2.5">
                  <span className="font-aptos-semibold text-[24px] text-[#fa6a20] tracking-[-0.48px]">See Healthcare & Life Sciences</span>
                  <Image src={imgArrowRight} alt="Arrow" width={22} height={22} />
                </Link>
              </div>
            </div>

            {/* Engineering */}
            <div className="flex items-center">
              <div className="flex-1 bg-white h-[628px] rounded-[15px]"></div>
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
                <Link href="/engineering" className="flex items-center gap-2.5">
                  <span className="font-aptos-semibold text-[24px] text-[#fa6a20] tracking-[-0.48px]">See Engineering</span>
                  <Image src={imgArrowRight} alt="Arrow" width={22} height={22} />
                </Link>
              </div>
            </div>

            {/* Energy */}
            <div className="flex items-center">
              <div className="flex-1 bg-white h-[628px] rounded-[15px]"></div>
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
                <Link href="/energy" className="flex items-center gap-2.5">
                  <span className="font-aptos-semibold text-[24px] text-[#fa6a20] tracking-[-0.48px]">See Energy</span>
                  <Image src={imgArrowRight} alt="Arrow" width={22} height={22} />
                </Link>
              </div>
            </div>

            {/* Private Equity */}
            <div className="flex items-center">
              <div className="flex-1 bg-white h-[628px] rounded-[15px]"></div>
              <div className="flex-1 px-[100px]">
                <h3 className="font-aptos-semibold text-[48px] leading-[0.9] tracking-[-2.4px] text-[#09141f] mb-[42px]">
                  Private Equity
                </h3>
                <p className="font-aptos-regular text-[20px] leading-[1.45] text-[#535960] mb-[42px]">
                  In private equity, success depends on building high-performing portfolio companies quickly and confidently. Elios connects funds with the talent needed to execute growth strategies—from CFOs and controllers to operating partners, technology leaders, and functional executives. Our recruiters understand the urgency and discretion required in private equity hiring, sourcing candidates who not only meet the technical and financial requirements but also thrive in fast-paced, transformation-driven environments. Leveraging AI-enabled matching and deep recruiter expertise, we help firms staff leadership and operational roles that drive immediate value creation while positioning portfolio companies for long-term success.
                </p>
                <Link href="/private-equity" className="flex items-center gap-2.5">
                  <span className="font-aptos-semibold text-[24px] text-[#fa6a20] tracking-[-0.48px]">See Private Equity</span>
                  <Image src={imgArrowRight} alt="Arrow" width={22} height={22} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog/Knowledge Section */}
      <section className="py-[152px] pb-[400px]">
        <div className="max-w-[1638px] mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-[90px]">
            <div className="flex items-center justify-center gap-2.5 mb-10">
              <Image src={imgVector622} alt="" width={16} height={13} />
              <span className="font-aptos-semibold text-[20px] text-[#fa6a20] uppercase">BLOG</span>
            </div>
            <h2 className="font-aptos-semibold text-[64px] leading-[0.9] tracking-[-3.2px] text-[#09141f]">
              Level Up Your Talent Knowledge
            </h2>
          </div>

          {/* Blog Articles */}
          <div className="grid grid-cols-3 gap-[50px] mb-[90px]">
            {/* Article 1 */}
            <div className="flex flex-col">
              <div className="h-[292px] bg-cover bg-center rounded-[15px] mb-[30px] overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <h3 className="font-aptos-semibold text-[32px] leading-[1.2] tracking-[-0.96px] text-[#09141f] mb-10">
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
              <div className="h-[292px] bg-cover bg-center rounded-[15px] mb-[30px] overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
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
              <div className="h-[292px] bg-cover bg-center rounded-[15px] mb-[30px] overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
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

      {/* Final CTA Section */}
      <section className="py-0 pb-[152px]">
        <div className="max-w-[1638px] mx-auto px-4">
          <div className="bg-[#e0f1fe] rounded-[25px] px-[120px] py-[118px] flex items-center gap-[100px] overflow-hidden relative">
            {/* Content */}
            <div className="flex flex-col gap-20 max-w-[726px]">
              <h2 className="font-aptos-semibold text-[64px] leading-none tracking-[-3.2px] text-[#292626]">
                Let's Build Your Dream Team of Tomorrow
              </h2>
              <div className="flex gap-3">
                <Link href="/book-demo" className="bg-[#fa6a20] flex items-center gap-4 px-[22px] py-3.5 rounded-[12px] hover:bg-[#e85a10] transition-colors">
                  <span className="font-aptos-semibold text-[16px] text-white">Book a Demo</span>
                  <div className="bg-white rounded-[7px] p-[10px]">
                    <Image src={imgCtaArrow} alt="Arrow" width={16} height={16} />
                  </div>
                </Link>
                <Link href="/request-talent" className="flex items-center px-[22px] py-[18px] rounded-[12px] hover:bg-black/5 transition-colors">
                  <span className="font-aptos-semibold text-[16px] text-black">Get Talent</span>
                </Link>
              </div>
            </div>
            {/* Background Image */}
            <div 
              className="absolute right-0 top-0 w-[1396.6px] h-[1396.6px] bg-cover bg-center mix-blend-screen"
              style={{ backgroundImage: `url(${imgCtaBackground})` }}
            ></div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}