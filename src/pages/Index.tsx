import Nav from "@/components/sections/Nav";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Problem from "@/components/sections/Problem";
import CaseStudies from "@/components/sections/CaseStudies";
import Services from "@/components/sections/Services";
import BookedDentalDifference from "@/components/sections/BookedDentalDifference";
import ROICalculator from "@/components/sections/ROICalculator";
import HowItWorks from "@/components/sections/HowItWorks";
import WhoItsFor from "@/components/sections/WhoItsFor";
import WhoItsNotFor from "@/components/sections/WhoItsNotFor";
import Testimonials from "@/components/sections/Testimonials";
import CreativesVideo from "@/components/sections/CreativesVideo";
import MarketExclusivity from "@/components/sections/MarketExclusivity";
import RiskFreeTrial from "@/components/sections/RiskFreeTrial";
import FAQ from "@/components/sections/FAQ";
import BlogPreview from "@/components/sections/BlogPreview";
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
      <MarketExclusivity />
      <Services />
      <BookedDentalDifference />
      <ROICalculator />
      <HowItWorks />
      <WhoItsFor />
      <WhoItsNotFor />
      <Testimonials />
      <CreativesVideo />
      <RiskFreeTrial />
      <CTA />
      <FAQ />
      <BlogPreview />
      <Footer />
    </div>
  );
};

export default Index;
