"use client";

import Image from "next/image";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import CTA from "../components/CTA";
import EnergyHero from "../components/EnergyHero";
import EnergyRoles from "../components/EnergyRoles";
import CaseStudies from "../components/CaseStudies";
import BlogSection from "../components/BlogSection";

export default function Energy() {
  return (
      <div className="min-h-screen bg-[#faf8f5]">
        <Navigation />
      
      {/* Hero Section */}
      <section className="pt-[174px] pb-[100px] bg-[#faf8f5] relative overflow-hidden">
        <div className="w-full h-[700px]">
          <EnergyHero />
        </div>
      </section>

      {/* Roles Section */}
      <section className="bg-[#faf8f5] relative overflow-hidden">
        <EnergyRoles />
      </section>

      {/* Case Studies Section */}
      <CaseStudies
        title="Energy Case Studies"
        taglineText="Case Studies"
      />

      {/* Blog Section */}
      <BlogSection
        title="What's Happening in Energy"
        tagline="insights"
      />

      {/* CTA Section */}
      <CTA />

      <Footer />
    </div>
  );
}