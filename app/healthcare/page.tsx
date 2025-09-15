import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Link from "next/link";
import Image from "next/image";
import HealthcareHero from "../components/HealthcareHero";
import HealthcareRoles from "../components/HealthcareRoles";
import LifeScienceRoles from "../components/LifeScienceRoles";
import CaseStudies from "../components/CaseStudies";
import BlogSection, { defaultHealthcareArticles } from "../components/BlogSection";
import CTA from "../components/CTA";

// Image assets from Figma design
const imgArrow = "/assets/d3a1d909dee7b61121f7aff4eab1215678c614c0.svg";
const imgVector622 = "/assets/18721c6591626d2156d2f18b97a5158dcf117d0c.svg";

// Role icons
const imgRoleIcon1 = "/assets/f9becc39556f19b76fe3d1893249d930fd0cf94b.svg";
const imgRoleIcon2 = "/assets/0de014e050de3c2b50b7e0a9af78dad7dc9b6903.svg";
const imgRoleIcon3 = "/assets/f64e3c2ec7315354912c1e39e9ca2989e1847472.svg";
const imgRoleIcon4 = "/assets/dbbdd0064514dd3a996da1ef2a8e58ec131d25fc.svg";
const imgRoleIcon5 = "/assets/6b964d71438fc53e316e1aa3c8d1cd8a42059e52.svg";
const imgRoleIcon6 = "/assets/87e317f1dc4aec445e5e27145c2a765f54978313.svg";
const imgRoleIcon7 = "/assets/98700ffcf29e2110d95463acc5208fd775d3b5a2.svg";
const imgRoleIcon8 = "/assets/b64f969f39907a24eed4ca1a6939e355f22c84cc.svg";
const imgRoleIcon9 = "/assets/ad102752587397d7cfeab12ddc6d4010965944d4.svg";
const imgRoleIcon10 = "/assets/2c34eb31a1ff30b9e0d96bfc2d5c835dc82eb97d.svg";
const imgRoleIcon11 = "/assets/a7f873589bf63d67d4ccf8dbad45d412afb48885.svg";
const imgRoleIcon12 = "/assets/40baa75e8887566cb3df7b18e0320923e08f2dab.svg";

// Case study images
const imgAmplifyChange = "/assets/d6fa8ccf04c6cec63c738de7bd38c50b2074718b.svg";
const imgWeatherford = "/assets/c2d5f71db181ef4e21bcc3648272db190c76715f.svg";
const imgDrata = "/assets/6067f9ed3d170a726d2ea02fd539a0b56c337a04.svg";
const imgSamsung = "/assets/d676c6942966e9ae4c171de327666f398754e82e.svg";
const imgGoldmanSachs = "/assets/4dcd68412e554c3ce6741fe77bd1164877d15f2ef.svg";

// Blog images
const imgBlogImage = "/assets/4fb884a0cef509b72695d5aa4be91f4a2d5135e0.png";

// Arrow icons
const imgLeftArrow = "/assets/2d56d273687f7ca7f8f80d7ae6ef37db0161556a.svg";
const imgRightArrow = "/assets/3b127c2618ad07524cc9b5abe9358a26d932a3f2.svg";
const imgBlogArrow = "/arrow-right.svg";

export default function HealthcarePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-[174px] pb-[100px] bg-[#faf8f5] relative overflow-hidden">
        <div className="max-w-[1638px] mx-auto h-[700px] px-0">
          <HealthcareHero />
        </div>
      </section>

      {/* Healthcare Roles Section */}
      <HealthcareRoles />

      {/* Life Science Roles Section */}
      <LifeScienceRoles />

      {/* Case Studies Section */}
      <CaseStudies
        title="Healthcare & Life Sciences Case Studies"
        taglineText="Case Studies"
      />

      {/* What's Happening in Healthcare & Life Sciences Section */}
      <BlogSection
        title="What's Happening in Healthcare & Life Sciences"
        tagline="insights"
        articles={defaultHealthcareArticles}
      />

      {/* CTA Section */}
      <CTA />

      <Footer />
    </div>
  );
}