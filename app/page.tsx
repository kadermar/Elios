import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import CaseStudies from "./components/CaseStudies";
import OurProcess from "./components/OurProcess";
import Services from "./components/Services";
import EliosDifference from "./components/EliosDifference";
import Testimonials from "./components/Testimonials";
import WhoWeAre from "./components/WhoWeAre";
import Faq from "./components/Faq";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <Navigation />
      <main className="pt-[174px] relative z-10">
        <Hero />
        <CaseStudies />
        <OurProcess />
        <Services />
        <EliosDifference />
        <Testimonials />
        <WhoWeAre />
        <Faq />
        <CTA />
        <Footer />
      </main>
    </div>
  );
}