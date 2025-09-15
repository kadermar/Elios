import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import TechnologyHero from "../components/TechnologyHero";
import TechnologyRoles from "../components/TechnologyRoles";
import CaseStudies from "../components/CaseStudies";
import BlogSection, { defaultTechnologyArticles } from "../components/BlogSection";
import CTA from "../components/CTA";


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
      <CaseStudies title="Technology Case Studies" taglineText="case studies" />

      {/* What's Happening in Technology Section */}
      <BlogSection
        title="What's Happening in Technology"
        tagline="insights"
        articles={defaultTechnologyArticles}
      />

      {/* CTA Section */}
      <CTA />

      <Footer />
    </div>
  );
}