import { lazy, Suspense } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SEO from "@/components/SEO";
import Nav from "@/components/sections/Nav";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";

// Lazy load below-the-fold sections for better initial load performance
const Problem = lazy(() => import("@/components/sections/Problem"));
const FounderTrustBlock = lazy(() => import("@/components/sections/FounderTrustBlock"));
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
const ServiceLinks = lazy(() => import("@/components/sections/ServiceLinks"));
const CTA = lazy(() => import("@/components/sections/CTA"));
const Footer = lazy(() => import("@/components/sections/Footer"));

const Index = () => {
  const { t } = useTranslation();
  const { lang } = useParams();
  const pageLang = lang === "he" ? "he" : "en";
  const isHebrew = pageLang === "he";
  const faqs = Array.from({ length: 8 }, (_, i) => ({
    question: t(`faq.q${i + 1}`),
    answer: t(`faq.a${i + 1}`),
  })).filter((faq) => faq.question && faq.answer);
  const organizationStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Booked.Dental",
    url: "https://www.booked.dental",
    logo: "https://www.booked.dental/favicon.png",
    description:
      "Booked.Dental provides market-exclusive UGC ad campaigns, lead filtering, and AI learning loops for implant and cosmetic dental clinics.",
    areaServed: "US",
    serviceType: ["Dental Marketing", "Patient Acquisition", "UGC Advertising"],
  };
  const serviceStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Dental patient acquisition for implant and cosmetic clinics",
    provider: { "@type": "Organization", name: "Booked.Dental", url: "https://www.booked.dental" },
    description:
      "Market-exclusive Meta and Google ad campaigns, UGC creative, lead filtering, and AI learning loops for implant and cosmetic dental clinics.",
    areaServed: "US",
    audience: {
      "@type": "Audience",
      audienceType: "Implant dental clinics and cosmetic dental practices",
    },
  };
  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Booked.Dental",
    url: "https://www.booked.dental",
    inLanguage: isHebrew ? "he" : "en-US",
  };
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: isHebrew ? "he" : "en-US",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        lang={pageLang}
        title={
          isHebrew
            ? "שיווק חכם למרפאות שתלים וציפויים | Booked.Dental"
            : "Dental Marketing That Finds Customers, Not Clicks | Booked.Dental"
        }
        description={
          isHebrew
            ? "Booked.Dental עוזרת למרפאות שתלים וציפויים להפוך פרסום להזדמנויות מטופלים מסוננות, כך שה-AI לומד למצוא לקוחות ולא קליקים."
            : "Booked.Dental helps implant and veneer clinics turn ad traffic into filtered patient opportunities, so the AI learns to find customers instead of clicks."
        }
        structuredData={[
          organizationStructuredData,
          serviceStructuredData,
          websiteStructuredData,
          faqStructuredData,
        ]}
      />
      <Nav />
      <Hero />
      <Stats />

      <Suspense fallback={<div className="min-h-screen" />}>
        <Problem />
        <ROICalculator />
        <FounderTrustBlock />
        <HowItWorks />
        <BookedDentalDifference />
        <AdvancedCallTracking />
        <MarketExclusivity />
        <Services />
        <CreativesVideo />
        <WhoItsFor />
        <WhoItsNotFor />
        <Testimonials />
        <RiskFreeTrial />
        <FAQ />
        <CTA />
        <ServiceLinks />
        <BlogPreview />
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
