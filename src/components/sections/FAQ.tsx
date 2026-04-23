import { HelpCircle } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const { t } = useTranslation();
  const { lang } = useParams();
  const faqs = Array.from({ length: 8 }, (_, i) => ({
    question: t(`faq.q${i + 1}`),
    answer: t(`faq.a${i + 1}`),
  }));

  return (
    <section id="faq" className="relative border-y border-border py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(42_100%_55%/0.06),transparent_60%)]" />
      <div className="container relative z-10">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <div className="mb-5 flex justify-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-primary/30 bg-primary/10 shadow-gold">
                <HelpCircle className="h-7 w-7 text-primary" />
              </div>
            </div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1 text-sm text-primary">
              {t("faq.badge")}
            </div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              {t("faq.title_prefix")}<span className="text-gradient-gold">{t("faq.title_highlight")}</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">{t("faq.subtitle")}</p>
          </div>
          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="group rounded-xl border border-border bg-card/60 px-6 transition-colors duration-200 hover:border-primary/40 data-[state=open]:border-primary/40 data-[state=open]:bg-primary/5"
              >
                <AccordionTrigger className="text-start text-base font-semibold hover:no-underline hover:text-primary group-data-[state=open]:text-primary py-5 gap-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-[0.9375rem] leading-relaxed pb-5 pt-0">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <p className="mt-10 text-center text-sm text-muted-foreground">
            {t("faq.still_questions")}{" "}
            <Link to={`/${lang}/book`} className="font-medium text-primary underline-offset-4 hover:underline">
              {t("faq.check_market_link")}
            </Link>
            {t("faq.walk_through")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
