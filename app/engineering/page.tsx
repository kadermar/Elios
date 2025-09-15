"use client";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import EngineeringHero from "../components/EngineeringHero";
import EngineeringRoles from "../components/EngineeringRoles";
import CaseStudies from "../components/CaseStudies";
import BlogSection from "../components/BlogSection";
import CTA from "../components/CTA";

export default function Engineering() {
  return (
    <div className="min-h-screen bg-[#faf8f5]">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-[174px] pb-[100px] bg-[#faf8f5] relative overflow-hidden">
        <div className="w-full h-[700px]">
          <EngineeringHero />
        </div>
      </section>

      {/* Engineering Roles Section */}
      <EngineeringRoles />

      {/* Case Studies Section */}
      <CaseStudies
        title="Engineering Case Studies"
        taglineText="Case Studies"
      />

      {/* Blog Section */}
      <BlogSection
        title="What's Happening in Engineering"
        tagline="insights"
      />

      {/* CTA Section */}
      <CTA />

      <Footer />
    </div>
  );
}