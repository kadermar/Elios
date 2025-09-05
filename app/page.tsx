import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import CaseStudies from "./components/CaseStudies";
import OurProcess from "./components/OurProcess";
import Services from "./components/Services";
import EliosDifference from "./components/EliosDifference";
import Testimonials from "./components/Testimonials";
import WhoWeAre from "./components/WhoWeAre";
import Faq from "./components/Faq";
import Cta from "./components/Cta";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F4F4F4]">
      <Navigation />
      <main className="pt-[174px]">
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
            <Cta />
          </div>
        </div>
      </main>
    </div>
  );
}