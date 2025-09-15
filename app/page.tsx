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
    <div className="relative min-h-screen flex flex-col">
      <Navigation />
      <main className="pt-[174px] relative z-10 flex-grow">
        <Hero />
        <CaseStudies />
        <OurProcess />
        <Services />
        <EliosDifference />
        <Testimonials />
        <WhoWeAre />
        <Faq />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}