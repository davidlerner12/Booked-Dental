import Nav from "@/components/sections/Nav";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Problem from "@/components/sections/Problem";
import CaseStudies from "@/components/sections/CaseStudies";
import Services from "@/components/sections/Services";
import AffordableByDesign from "@/components/sections/AffordableByDesign";
import ROICalculator from "@/components/sections/ROICalculator";
import WhyUGCWorks from "@/components/sections/WhyUGCWorks";
import HowItWorks from "@/components/sections/HowItWorks";
import Testimonials from "@/components/sections/Testimonials";
import CreativesVideo from "@/components/sections/CreativesVideo";
import MarketExclusivity from "@/components/sections/MarketExclusivity";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <Hero />
      <Stats />
      <Problem />
      <CaseStudies />
      <Services />
      <AffordableByDesign />
      <ROICalculator />
      <WhyUGCWorks />
      <HowItWorks />
      <Testimonials />
      <CreativesVideo />
      <MarketExclusivity />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
