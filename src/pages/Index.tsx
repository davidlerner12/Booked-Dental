import { lazy, Suspense } from "react";
import Nav from "@/components/sections/Nav";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";

// Lazy load below-the-fold sections for better initial load performance
const Problem = lazy(() => import("@/components/sections/Problem"));
const CaseStudies = lazy(() => import("@/components/sections/CaseStudies"));
const Services = lazy(() => import("@/components/sections/Services"));
const BookedDentalDifference = lazy(() => import("@/components/sections/BookedDentalDifference"));
const AdvancedCallTracking = lazy(() => import("@/components/sections/AdvancedCallTracking"));
const ROICalculator = lazy(() => import("@/components/sections/ROICalculator"));
const HowItWorks = lazy(() => import("@/components/sections/HowItWorks"));
const WhoItsFor = lazy(() => import("@/components/sections/WhoItsFor"));
const WhoItsNotFor = lazy(() => import("@/components/sections/WhoItsNotFor"));
const CreativesVideo = lazy(() => import("@/components/sections/CreativesVideo"));
const Testimonials = lazy(() => import("@/components/sections/Testimonials"));
const MarketExclusivity = lazy(() => import("@/components/sections/MarketExclusivity"));
const RiskFreeTrial = lazy(() => import("@/components/sections/RiskFreeTrial"));
const FAQ = lazy(() => import("@/components/sections/FAQ"));
const BlogPreview = lazy(() => import("@/components/sections/BlogPreview"));
const CTA = lazy(() => import("@/components/sections/CTA"));
const Footer = lazy(() => import("@/components/sections/Footer"));

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <Hero />
      <Stats />

      <Suspense fallback={<div className="min-h-screen" />}>
        <Problem />
        <CaseStudies />
        <MarketExclusivity />
        <Services />
        <BookedDentalDifference />
        <AdvancedCallTracking />
        <ROICalculator />
        <HowItWorks />
        <WhoItsFor />
        <WhoItsNotFor />
        <CreativesVideo />
        <Testimonials />
        <RiskFreeTrial />
        <CTA />
        <FAQ />
        <BlogPreview />
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
