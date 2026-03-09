import { HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How quickly can we start receiving consult calls?",
    answer:
      "Most clinics begin receiving consult inquiries within about 7 days of campaign launch, depending on market conditions and ad approval timelines.",
  },
  {
    question: "How much ad spend should we expect?",
    answer:
      "Ad spend varies by market and competition, but most clinics start between $1,000 and $3,000 per month in ad budget. The goal is to generate high-value cases where even a single treatment can cover months of marketing.",
  },
  {
    question: "Do you guarantee exclusivity in my market?",
    answer:
      "Yes. Booked.Dental works with only one clinic per local market. Once a clinic secures a market, we do not work with competing practices in that area.",
  },
  {
    question: "What types of clinics does Booked.Dental work with?",
    answer:
      "We work with clinics focused on high-ticket treatments such as full-arch implants, All-on-4 procedures, and cosmetic veneers that have capacity for additional consults.",
  },
  {
    question: "How are consult calls tracked?",
    answer:
      "We use call tracking and campaign attribution to monitor incoming consult calls and campaign performance so you can see exactly how many inquiries your campaigns generate.",
  },
  {
    question: "Is there a long-term contract?",
    answer:
      "No. Qualified clinics can start with a trial period to evaluate the system before committing long term.",
  },
];

const FAQ = () => (
  <section id="faq" className="relative border-y border-border py-24 overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(42_100%_55%/0.06),transparent_60%)]" />
    <div className="container relative z-10">
      <div className="mx-auto max-w-3xl">

        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-5 flex justify-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-primary/30 bg-primary/10 shadow-gold">
              <HelpCircle className="h-7 w-7 text-primary" />
            </div>
          </div>
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1 text-sm text-primary">
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Common Questions <span className="text-gradient-gold">Answered</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Everything you need to know about how Booked.Dental works before booking your strategy call.
          </p>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="w-full space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="group rounded-xl border border-border bg-card/60 px-6 transition-colors duration-200 hover:border-primary/40 data-[state=open]:border-primary/40 data-[state=open]:bg-primary/5"
            >
              <AccordionTrigger className="text-left text-base font-semibold hover:no-underline hover:text-primary group-data-[state=open]:text-primary py-5 gap-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-[0.9375rem] leading-relaxed pb-5 pt-0">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Footer nudge */}
        <p className="mt-10 text-center text-sm text-muted-foreground">
          Still have questions?{" "}
          <Link
            to="/book"
            className="font-medium text-primary underline-offset-4 hover:underline"
          >
            Book a free strategy call
          </Link>{" "}
          and we'll walk you through everything.
        </p>

      </div>
    </div>
  </section>
);

export default FAQ;
