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
        <div className="relative">
          <Footer />
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 px-4 md:px-0">
            <CTA />
          </div>
        </div>
      </main>
    </div>
  );
}