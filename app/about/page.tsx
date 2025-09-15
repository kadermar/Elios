"use client";

import Navigation from "../components/Navigation";
import AboutHero from "../components/AboutHero";
import CeoLetter from "../components/CeoLetter";
import Team from "../components/Team";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="bg-[#F4F4F4] min-h-screen">
      <Navigation />
      <main className="pt-[174px]">
        {/* Hero Section */}
        <AboutHero />

        {/* CEO Letter Section */}
        <CeoLetter />

        {/* Team Section */}
        <Team />

        {/* CTA Section */}
        <CTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}