import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Link from "next/link";
import Image from "next/image";

// Image assets from Figma design
const imgArrow = "http://localhost:3845/assets/d3a1d909dee7b61121f7aff4eab1215678c614c0.svg";
const imgVector622 = "http://localhost:3845/assets/18721c6591626d2156d2f18b97a5158dcf117d0c.svg";

// Role icons
const imgRoleIcon1 = "http://localhost:3845/assets/f9becc39556f19b76fe3d1893249d930fd0cf94b.svg";
const imgRoleIcon2 = "http://localhost:3845/assets/0de014e050de3c2b50b7e0a9af78dad7dc9b6903.svg";
const imgRoleIcon3 = "http://localhost:3845/assets/f64e3c2ec7315354912c1e39e9ca2989e1847472.svg";
const imgRoleIcon4 = "http://localhost:3845/assets/dbbdd0064514dd3a996da1ef2a8e58ec131d25fc.svg";
const imgRoleIcon5 = "http://localhost:3845/assets/6b964d71438fc53e316e1aa3c8d1cd8a42059e52.svg";
const imgRoleIcon6 = "http://localhost:3845/assets/87e317f1dc4aec445e5e27145c2a765f54978313.svg";
const imgRoleIcon7 = "http://localhost:3845/assets/98700ffcf29e2110d95463acc5208fd775d3b5a2.svg";
const imgRoleIcon8 = "http://localhost:3845/assets/b64f969f39907a24eed4ca1a6939e355f22c84cc.svg";
const imgRoleIcon9 = "http://localhost:3845/assets/ad102752587397d7cfeab12ddc6d4010965944d4.svg";
const imgRoleIcon10 = "http://localhost:3845/assets/2c34eb31a1ff30b9e0d96bfc2d5c835dc82eb97d.svg";
const imgRoleIcon11 = "http://localhost:3845/assets/a7f873589bf63d67d4ccf8dbad45d412afb48885.svg";
const imgRoleIcon12 = "http://localhost:3845/assets/40baa75e8887566cb3df7b18e0320923e08f2dab.svg";

// Case study images
const imgAmplifyChange = "http://localhost:3845/assets/d6fa8ccf04c6cec63c738de7bd38c50b2074718b.svg";
const imgWeatherford = "http://localhost:3845/assets/c2d5f71db181ef4e21bcc3648272db190c76715f.svg";
const imgDrata = "http://localhost:3845/assets/6067f9ed3d170a726d2ea02fd539a0b56c337a04.svg";
const imgSamsung = "http://localhost:3845/assets/d676c6942966e9ae4c171de327666f398754e82e.svg";
const imgGoldmanSachs = "http://localhost:3845/assets/4dcd68412e554c3ce6741fe77bd1164877d15f2ef.svg";

// Blog images
const imgBlogImage = "http://localhost:3845/assets/4fb884a0cef509b72695d5aa4be91f4a2d5135e0.png";

// Arrow icons
const imgLeftArrow = "http://localhost:3845/assets/2d56d273687f7ca7f8f80d7ae6ef37db0161556a.svg";
const imgRightArrow = "http://localhost:3845/assets/3b127c2618ad07524cc9b5abe9358a26d932a3f2.svg";
const imgBlogArrow = "http://localhost:3845/assets/fc77663448a36794eefa1cf9abfa2313454af665.svg";

export default function HealthcarePage() {
  return (
    <div className="min-h-screen bg-[#F4F4F4]">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-[174px] pb-[100px]">
        <div className="max-w-[1638px] mx-auto px-4 flex items-center justify-between gap-[140px]">
          <div className="max-w-[694px]">
            <div className="mb-[100px]">
              <h1 className="font-aptos-semibold text-[96px] leading-[96px] tracking-[-5.76px] text-[#09141f] mb-10">
                Strengthen healthcare and life sciences hiring
              </h1>
              <p className="font-aptos-regular text-[24px] leading-[32px] text-[#09141f] mb-10">
                Elios delivers credentialed, patient-centered professionals who bring both expertise and compassion—helping you stabilize teams, reduce burnout, and improve quality of care.
              </p>
              <div className="flex gap-3">
                <Link href="/book-demo" className="bg-[#fa6a20] flex items-center gap-4 px-[22px] py-3.5 rounded-[12px] hover:bg-[#e85a10] transition-colors">
                  <span className="font-aptos-semibold text-[16px] text-white">Book a Demo</span>
                  <div className="bg-white rounded-[7px] p-[10px]">
                    <Image src={imgArrow} alt="Arrow" width={16} height={16} />
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

      {/* Healthcare Roles Section */}
      <section className="py-[152px]">
        <div className="max-w-[1638px] mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-[90px]">
            <div className="flex items-center justify-center gap-2.5 mb-10">
              <Image src={imgVector622} alt="" width={16} height={13} />
              <span className="font-aptos-semibold text-[20px] text-[#fa6a20] uppercase tracking-[-0.4px]">
                ROLES & SPECIALTIES
              </span>
            </div>
            <h2 className="font-aptos-semibold text-[64px] leading-[0.9] tracking-[-3.2px] text-[#09141f]">
              Healthcare & life science roles we'll help you find
            </h2>
          </div>

          <div className="space-y-40">
            {/* Healthcare Section */}
            <div className="space-y-[60px]">
              <h3 className="font-aptos-semibold text-[40px] tracking-[-2px] text-[#09141f]">
                Healthcare
              </h3>
              <div className="grid grid-cols-3 gap-6">
                {/* Row 1 */}
                <div className="bg-white rounded-[6px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.02),0px_2px_4px_0px_rgba(0,0,0,0.08)] p-9">
                  <div className="flex flex-col justify-between h-[225px]">
                    <Image src={imgRoleIcon1} alt="" width={46} height={46} />
                    <div className="px-2.5 space-y-7">
                      <h4 className="font-aptos-semibold text-[28px] leading-[36px] tracking-[-1.4px] text-[#09141f]">
                        Registered Nurses
                      </h4>
                      <ul className="font-aptos-regular text-[20px] text-[#535960] space-y-1 list-disc list-inside">
                        <li>Critical Care RN</li>
                        <li>Emergency Room RN</li>
                        <li>Labor & Delivery RN</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-[6px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.02),0px_2px_4px_0px_rgba(0,0,0,0.08)] p-9">
                  <div className="flex flex-col justify-between h-[225px]">
                    <Image src={imgRoleIcon2} alt="" width={46} height={46} />
                    <div className="px-2.5 space-y-7">
                      <h4 className="font-aptos-semibold text-[28px] leading-[36px] tracking-[-1.4px] text-[#09141f]">
                        Nurse Practitioners (NP)
                      </h4>
                      <ul className="font-aptos-regular text-[20px] text-[#535960] space-y-1 list-disc list-inside">
                        <li>Family NP</li>
                        <li>Acute Care NP</li>
                        <li>Pediatric NP</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-[6px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.02),0px_2px_4px_0px_rgba(0,0,0,0.08)] p-9">
                  <div className="flex flex-col justify-between h-[225px]">
                    <Image src={imgRoleIcon3} alt="" width={46} height={46} />
                    <div className="px-2.5 space-y-7">
                      <h4 className="font-aptos-semibold text-[28px] leading-[36px] tracking-[-1.4px] text-[#09141f]">
                        Physician Assistants (PA-C)
                      </h4>
                      <ul className="font-aptos-regular text-[20px] text-[#535960] space-y-1 list-disc list-inside">
                        <li>Orthopedic Surgery PA</li>
                        <li>Emergency Medicine PA</li>
                        <li>Cardiology PA</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Row 2 */}
                <div className="bg-white rounded-[6px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.02),0px_2px_4px_0px_rgba(0,0,0,0.08)] p-9">
                  <div className="flex flex-col justify-between h-[225px]">
                    <Image src={imgRoleIcon4} alt="" width={46} height={46} />
                    <div className="px-2.5 space-y-7">
                      <h4 className="font-aptos-semibold text-[28px] leading-[36px] tracking-[-1.4px] text-[#09141f]">
                        Allied-Health & Therapists
                      </h4>
                      <ul className="font-aptos-regular text-[20px] text-[#535960] space-y-1 list-disc list-inside">
                        <li>Respiratory Therapist</li>
                        <li>Physical Therapist</li>
                        <li>Diagnostic Sonographer</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-[6px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.02),0px_2px_4px_0px_rgba(0,0,0,0.08)] p-9">
                  <div className="flex flex-col justify-between h-[225px]">
                    <Image src={imgRoleIcon5} alt="" width={46} height={46} />
                    <div className="px-2.5 space-y-7">
                      <h4 className="font-aptos-semibold text-[28px] leading-[36px] tracking-[-1.4px] text-[#09141f]">
                        Nurse Leaders & Managers
                      </h4>
                      <ul className="font-aptos-regular text-[20px] text-[#535960] space-y-1 list-disc list-inside">
                        <li>Nurse Manager (ICU)</li>
                        <li>Chief Nursing Officer</li>
                        <li>Clinical Director</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-[6px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.02),0px_2px_4px_0px_rgba(0,0,0,0.08)] p-9">
                  <div className="flex flex-col justify-between h-[225px]">
                    <Image src={imgRoleIcon6} alt="" width={46} height={46} />
                    <div className="px-2.5 space-y-7">
                      <h4 className="font-aptos-semibold text-[28px] leading-[36px] tracking-[-1.4px] text-[#09141f]">
                        Surgical Technologists
                      </h4>
                      <ul className="font-aptos-regular text-[20px] text-[#535960] space-y-1 list-disc list-inside">
                        <li>Endoscopy Technician</li>
                        <li>Orthopedic OR Technician</li>
                        <li>Surgical Assistant</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Life Sciences Section */}
            <div className="space-y-[60px]">
              <h3 className="font-aptos-semibold text-[40px] tracking-[-2px] text-[#09141f]">
                Life Sciences (Biotech, Pharma, Med Device)
              </h3>
              <div className="grid grid-cols-3 gap-6">
                {/* Row 1 */}
                <div className="bg-white rounded-[6px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.02),0px_2px_4px_0px_rgba(0,0,0,0.08)] p-9">
                  <div className="flex flex-col justify-between h-[225px]">
                    <Image src={imgRoleIcon7} alt="" width={46} height={46} />
                    <div className="px-2.5 space-y-7">
                      <h4 className="font-aptos-semibold text-[28px] leading-[36px] tracking-[-1.4px] text-[#09141f]">
                        Research & Discovery
                      </h4>
                      <ul className="font-aptos-regular text-[20px] text-[#535960] space-y-1 list-disc list-inside">
                        <li>Lab Technician</li>
                        <li>Research Scientist</li>
                        <li>R&D Project Lead</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-[6px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.02),0px_2px_4px_0px_rgba(0,0,0,0.08)] p-9">
                  <div className="flex flex-col justify-between h-[225px]">
                    <Image src={imgRoleIcon8} alt="" width={46} height={46} />
                    <div className="px-2.5 space-y-7">
                      <h4 className="font-aptos-semibold text-[28px] leading-[36px] tracking-[-1.4px] text-[#09141f]">
                        Clinical Development
                      </h4>
                      <ul className="font-aptos-regular text-[20px] text-[#535960] space-y-1 list-disc list-inside">
                        <li>Clinical Research Associate</li>
                        <li>Clinical Trial Manager</li>
                        <li>Biostatistician</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-[6px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.02),0px_2px_4px_0px_rgba(0,0,0,0.08)] p-9">
                  <div className="flex flex-col justify-between h-[225px]">
                    <Image src={imgRoleIcon9} alt="" width={46} height={46} />
                    <div className="px-2.5 space-y-7">
                      <h4 className="font-aptos-semibold text-[28px] leading-[36px] tracking-[-1.4px] text-[#09141f]">
                        Quality & Compliance
                      </h4>
                      <ul className="font-aptos-regular text-[20px] text-[#535960] space-y-1 list-disc list-inside">
                        <li>Quality Assurance Specialist</li>
                        <li>Validation Engineer</li>
                        <li>Compliance Manager</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Row 2 */}
                <div className="bg-white rounded-[6px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.02),0px_2px_4px_0px_rgba(0,0,0,0.08)] p-9">
                  <div className="flex flex-col justify-between h-[225px]">
                    <Image src={imgRoleIcon10} alt="" width={46} height={46} />
                    <div className="px-2.5 space-y-7">
                      <h4 className="font-aptos-semibold text-[28px] leading-[36px] tracking-[-1.4px] text-[#09141f]">
                        Regulatory Affairs
                      </h4>
                      <ul className="font-aptos-regular text-[20px] text-[#535960] space-y-1 list-disc list-inside">
                        <li>Regulatory Affairs SME</li>
                        <li>Regulatory Affairs Manager</li>
                        <li>Medical Writer</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-[6px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.02),0px_2px_4px_0px_rgba(0,0,0,0.08)] p-9">
                  <div className="flex flex-col justify-between h-[225px]">
                    <Image src={imgRoleIcon11} alt="" width={46} height={46} />
                    <div className="px-2.5 space-y-7">
                      <h4 className="font-aptos-semibold text-[28px] leading-[36px] tracking-[-1.4px] text-[#09141f]">
                        Manufacturing & Operations
                      </h4>
                      <ul className="font-aptos-regular text-[20px] text-[#535960] space-y-1 list-disc list-inside">
                        <li>Process Development Engineer</li>
                        <li>Manufacturing Scientist</li>
                        <li>QC Analyst</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-[6px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.02),0px_2px_4px_0px_rgba(0,0,0,0.08)] p-9">
                  <div className="flex flex-col justify-between h-[225px]">
                    <Image src={imgRoleIcon12} alt="" width={46} height={46} />
                    <div className="px-2.5 space-y-7">
                      <h4 className="font-aptos-semibold text-[28px] leading-[36px] tracking-[-1.4px] text-[#09141f]">
                        Medical Affairs & Drug Safety
                      </h4>
                      <ul className="font-aptos-regular text-[20px] text-[#535960] space-y-1 list-disc list-inside">
                        <li>Medical Science Liaison</li>
                        <li>Pharmacovigilance Specialist</li>
                        <li>Clinical Data Manager</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-[152px]">
        <div className="max-w-[1638px] mx-auto px-4">
          {/* Header */}
          <div className="mb-[90px]">
            <div className="flex items-center gap-2.5 mb-10">
              <Image src={imgVector622} alt="" width={16} height={13} />
              <span className="font-aptos-semibold text-[20px] text-[#fa6a20] uppercase tracking-[-0.4px]">
                CASE STUDIES
              </span>
            </div>
            <h2 className="font-aptos-semibold text-[64px] leading-[0.9] tracking-[-3.2px] text-[#09141f]">
              Healthcare & Life Sciences Case Studies
            </h2>
          </div>

          {/* Case Study Cards */}
          <div className="flex gap-5 mb-[90px] overflow-x-auto">
            {/* AmplifyChange Case Study */}
            <div className="min-w-[480px] h-[564px] rounded-[15px] overflow-hidden relative bg-gradient-to-br from-purple-900 to-blue-900">
              <div className="absolute top-10 left-6 right-6 flex justify-start">
                <Image src={imgAmplifyChange} alt="AmplifyChange" width={162} height={50} />
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white rounded-[4px] p-[30px]">
                  <div className="space-y-[50px]">
                    <p className="font-aptos-semibold text-[32px] leading-[32px] tracking-[-0.96px] text-[#09141f]">
                      "We cannot believe how much we needed the Insights platform.
                    </p>
                    <p className="font-aptos-regular text-[16px] leading-[32px] text-[#121212]">
                      Darren Styles, CEO of Amplify Change
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Weatherford Case Study */}
            <div className="min-w-[480px] h-[564px] rounded-[15px] overflow-hidden relative bg-gradient-to-br from-orange-800 to-yellow-600">
              <div className="absolute top-10 left-6 right-6 flex justify-start">
                <Image src={imgWeatherford} alt="Weatherford" width={144} height={60} />
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-[#fae6a4] rounded-[4px] p-[30px]">
                  <div className="space-y-[50px]">
                    <p className="font-aptos-semibold text-[32px] leading-[32px] tracking-[-0.96px] text-[#09141f]">
                      "Elios simplified our entire hiring process."
                    </p>
                    <p className="font-aptos-regular text-[16px] leading-[32px] text-[#121212]">
                      Darren Styles, CEO of Amplify Change
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Drata Case Study */}
            <div className="min-w-[480px] h-[564px] rounded-[15px] overflow-hidden relative bg-gradient-to-br from-blue-600 to-red-600">
              <div className="absolute top-10 left-6 right-6 flex justify-start">
                <Image src={imgDrata} alt="Drata" width={154} height={27} />
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-[#e0f1fe] rounded-[4px] p-[30px]">
                  <div className="space-y-[50px]">
                    <p className="font-aptos-semibold text-[32px] leading-[32px] tracking-[-0.96px] text-[#09141f]">
                      "We cannot believe how much we needed the Insights platform."
                    </p>
                    <p className="font-aptos-regular text-[16px] leading-[32px] text-[#121212]">
                      Darren Styles, CEO of Amplify Change
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Samsung Case Study */}
            <div className="min-w-[480px] h-[564px] rounded-[15px] overflow-hidden relative bg-gradient-to-br from-gray-800 to-blue-900">
              <div className="absolute top-10 left-6 right-6 flex justify-start">
                <Image src={imgSamsung} alt="Samsung" width={189} height={29} />
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white rounded-[4px] px-[30px] py-[50px]">
                  <div className="space-y-[50px]">
                    <p className="font-aptos-semibold text-[32px] leading-[32px] tracking-[-0.96px] text-[#404453]">
                      "Wow. There's so many words."
                    </p>
                    <p className="font-aptos-regular text-[20px] leading-[32px] text-[#404453]">
                      * Darren Styles, CEO of Amplify Change
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Goldman Sachs Case Study */}
            <div className="min-w-[480px] h-[564px] rounded-[15px] overflow-hidden relative bg-gradient-to-br from-blue-800 to-gray-700">
              <div className="absolute top-10 left-6 right-6 flex justify-start">
                <Image src={imgGoldmanSachs} alt="Goldman Sachs" width={120} height={50} />
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-[#fae6a4] rounded-[4px] px-[30px] py-[50px]">
                  <div className="space-y-[50px]">
                    <p className="font-aptos-semibold text-[32px] leading-[32px] tracking-[-0.96px] text-[#09141f]">
                      "Elios simplified our entire hiring process."
                    </p>
                    <p className="font-aptos-regular text-[20px] leading-[32px] text-[#404453]">
                      * Darren Styles, CEO of Amplify Change
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel Navigation */}
          <div className="flex gap-5">
            <button className="bg-white rounded-[12px] p-7 shadow-sm hover:shadow-md transition-shadow">
              <Image src={imgLeftArrow} alt="Previous" width={24} height={24} />
            </button>
            <button className="bg-white rounded-[12px] p-7 shadow-sm hover:shadow-md transition-shadow">
              <Image src={imgRightArrow} alt="Next" width={24} height={24} />
            </button>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="pt-[152px] pb-[400px]">
        <div className="max-w-[1638px] mx-auto px-4">
          <div className="flex flex-col gap-[90px] items-center justify-center">
            <div className="flex flex-col gap-10 items-center justify-center w-full">
              <div className="flex gap-2.5 items-center justify-center px-0 py-[18px] rounded-[9px]">
                <div className="h-[13px] w-4 relative">
                  <div className="absolute inset-[-3.99%_-8.8%_-11.36%_-1.63%]">
                    <Image src={imgVector622} alt="" width={16} height={13} className="block max-w-none size-full" />
                  </div>
                </div>
                <div className="font-aptos-semibold text-[#fa6a20] text-[20px] uppercase leading-[24px]">
                  BLOG
                </div>
              </div>
              <div className="font-aptos-semibold text-[#09141f] text-[64px] text-nowrap tracking-[-3.2px] leading-[0.9]">
                What's Happening in Healthcare & Life Sciences
              </div>
            </div>
            <div className="flex gap-[50px] items-start justify-center w-full">
              <div className="basis-0 flex flex-col gap-[30px] grow items-start justify-center min-h-px min-w-px">
                <div className="flex flex-col gap-[30px] h-[292px] items-start justify-end overflow-clip pb-6 pt-10 px-6 rounded-[15px] w-full relative">
                  <div className="absolute contents left-[-22px] top-0">
                    <div className="absolute contents left-[-6px] top-0">
                      <div className="[mask-clip:no-clip,_no-clip] [mask-composite:intersect,_intersect] [mask-mode:alpha,_alpha] [mask-repeat:no-repeat,_no-repeat] absolute bg-center bg-cover bg-no-repeat h-[867.031px] left-[-379px] mask-position-[363px,_379px_250.932px,_250.932px] mask-size-[685px_426px,_636.284px_483px] top-[-250.93px] w-[1300.55px]" style={{ backgroundImage: `url('http://localhost:3845/assets/626fed97cfe088a057d058501a853d0a1698ff9f.png')`, maskImage: `url('http://localhost:3845/assets/71b862066df77941d15b89c106c291ddcd888a00.svg'), url('http://localhost:3845/assets/0a0207dcb81ea8967c2f8357fe47599a302f9767.svg')` }} />
                    </div>
                  </div>
                  <div className="absolute bg-center bg-cover bg-no-repeat h-[705px] left-[-382px] top-[-176px] w-[1057px]" style={{ backgroundImage: `url('http://localhost:3845/assets/4fb884a0cef509b72695d5aa4be91f4a2d5135e0.png')` }} />
                </div>
                <div className="flex flex-col gap-10 items-start justify-start w-full">
                  <div className="font-aptos-semibold text-[#09141f] text-[32px] tracking-[-0.96px] w-full leading-[1.2]">
                    Why Speed Matters: How Faster Hiring Gives Companies a Competitive Edge
                  </div>
                  <div className="flex font-aptos-regular items-start justify-between text-[#121212] text-[16px] text-nowrap w-full leading-[32px]">
                    <div>
                      Duran Workman
                    </div>
                    <div>
                      4m read
                    </div>
                  </div>
                </div>
              </div>
              <div className="basis-0 flex flex-col gap-[30px] grow items-start justify-center min-h-px min-w-px">
                <div className="flex flex-col gap-[30px] h-[292px] items-start justify-end overflow-clip pb-6 pt-10 px-6 rounded-[15px] w-full relative">
                  <div className="absolute contents left-[-22px] top-0">
                    <div className="absolute contents left-[-6px] top-0">
                      <div className="[mask-clip:no-clip,_no-clip] [mask-composite:intersect,_intersect] [mask-mode:alpha,_alpha] [mask-repeat:no-repeat,_no-repeat] absolute bg-center bg-cover bg-no-repeat h-[867.031px] left-[-379px] mask-position-[363px,_379px_250.932px,_250.932px] mask-size-[685px_426px,_636.284px_483px] top-[-250.93px] w-[1300.55px]" style={{ backgroundImage: `url('http://localhost:3845/assets/626fed97cfe088a057d058501a853d0a1698ff9f.png')`, maskImage: `url('http://localhost:3845/assets/71b862066df77941d15b89c106c291ddcd888a00.svg'), url('http://localhost:3845/assets/0a0207dcb81ea8967c2f8357fe47599a302f9767.svg')` }} />
                    </div>
                  </div>
                  <div className="absolute bg-center bg-cover bg-no-repeat h-[705px] left-[-382px] top-[-176px] w-[1057px]" style={{ backgroundImage: `url('http://localhost:3845/assets/4fb884a0cef509b72695d5aa4be91f4a2d5135e0.png')` }} />
                </div>
                <div className="flex flex-col gap-10 items-start justify-start w-full">
                  <div className="font-aptos-semibold text-[#09141f] text-[32px] tracking-[-0.96px] w-full leading-[1.2]">
                    AI + Human Expertise: The Winning Formula for Smarter Recruiting
                  </div>
                  <div className="flex font-aptos-regular items-start justify-between text-[#121212] text-[16px] text-nowrap w-full leading-[32px]">
                    <div>
                      Duran Workman
                    </div>
                    <div>
                      4m read
                    </div>
                  </div>
                </div>
              </div>
              <div className="basis-0 flex flex-col gap-[30px] grow items-start justify-center min-h-px min-w-px">
                <div className="flex flex-col gap-[30px] h-[292px] items-start justify-end overflow-clip pb-6 pt-10 px-6 rounded-[15px] w-full relative">
                  <div className="absolute contents left-[-22px] top-0">
                    <div className="absolute contents left-[-6px] top-0">
                      <div className="[mask-clip:no-clip,_no-clip] [mask-composite:intersect,_intersect] [mask-mode:alpha,_alpha] [mask-repeat:no-repeat,_no-repeat] absolute bg-center bg-cover bg-no-repeat h-[867.031px] left-[-379px] mask-position-[363px,_379px_250.932px,_250.932px] mask-size-[685px_426px,_636.284px_483px] top-[-250.93px] w-[1300.55px]" style={{ backgroundImage: `url('http://localhost:3845/assets/626fed97cfe088a057d058501a853d0a1698ff9f.png')`, maskImage: `url('http://localhost:3845/assets/71b862066df77941d15b89c106c291ddcd888a00.svg'), url('http://localhost:3845/assets/0a0207dcb81ea8967c2f8357fe47599a302f9767.svg')` }} />
                    </div>
                  </div>
                  <div className="absolute bg-center bg-cover bg-no-repeat h-[705px] left-[-382px] top-[-176px] w-[1057px]" style={{ backgroundImage: `url('http://localhost:3845/assets/4fb884a0cef509b72695d5aa4be91f4a2d5135e0.png')` }} />
                </div>
                <div className="flex flex-col gap-10 items-start justify-start w-full">
                  <div className="font-aptos-semibold text-[#09141f] text-[32px] tracking-[-0.96px] w-full leading-[1.2]">
                    Top 5 Hiring Trends Every Business Should Watch in 2025
                  </div>
                  <div className="flex font-aptos-regular items-start justify-between text-[#121212] text-[16px] text-nowrap w-full leading-[32px]">
                    <div>
                      Duran Workman
                    </div>
                    <div>
                      4m read
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Link href="/blog" className="flex gap-2.5 items-center justify-center hover:opacity-70 transition-opacity">
              <div className="font-aptos-semibold text-[#fa6a20] text-[24px] text-nowrap tracking-[-0.48px] leading-[24px]">
                See All Blog Posts
              </div>
              <div className="size-[22px] relative">
                <div className="absolute inset-[15.67%_15%]">
                  <div className="absolute inset-[-5.67%_-5.57%_-5.68%_-5.57%]">
                    <Image src="http://localhost:3845/assets/fc77663448a36794eefa1cf9abfa2313454af665.svg" alt="Arrow" width={22} height={22} className="block max-w-none size-full" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}