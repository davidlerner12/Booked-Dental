import { useState, useEffect } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

const testimonials = [
  { name: "Dr. David Ashmore", quote: "Booked.Dental helped us move away from broad traffic and focus on people who were actually serious about implant treatment. The filtering process made the opportunities feel much more intentional than the leads we were getting before." },
  { name: "Dr. Sunghee Park", quote: "What impressed me most was how the system learns from lead quality. Instead of chasing every click, Booked.Dental helped us identify which prospects were ready to discuss veneers and implant treatment." },
  { name: "Dr. Bob Bakshian", quote: "The biggest difference was the quality of the prospects. The filtering questions helped separate real patient intent from casual browsing, so our team could focus on people with actual treatment potential." },
  { name: "Tate Anderson, DDS", quote: "Before Booked.Dental, implants were mostly referrals and occasional inquiries. Now our marketing has a clearer system for finding people who already match the type of patient we want." },
  { name: "Dr. Nagesh", quote: "Booked.Dental gave us a more disciplined way to evaluate patient interest. The AI learning loop gets stronger as prospects move through the filter, which makes the campaign feel smarter over time." },
];

const Testimonials = () => {
  const { t } = useTranslation();
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  useEffect(() => {
    if (!api) return;
    const interval = setInterval(() => api.scrollNext(), 8000);
    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="relative border-y border-border bg-secondary py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(42_100%_55%/0.04),transparent_55%)]" />
      <div className="container relative z-10">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm text-primary">
            <Quote className="h-4 w-4" />
            {t("testimonials.badge")}
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            {t("testimonials.title_prefix")}<span className="text-gradient-gold">{t("testimonials.title_highlight")}</span>
          </h2>
          <p className="mx-auto max-w-xl text-muted-foreground">{t("testimonials.subtitle")}</p>
        </div>
        <div className="mx-auto max-w-3xl" dir="ltr">
          <Carousel setApi={setApi} opts={{ loop: true, align: "center" }}>
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((item, i) => (
                <CarouselItem key={i} className="pl-2 md:pl-4">
                  <div className="rounded-xl border border-border bg-card/80 p-8 md:p-10">
                    <Quote className="mb-4 h-10 w-10 text-primary/60" aria-hidden />
                    <blockquote className="text-lg leading-relaxed text-foreground md:text-xl">
                      &ldquo;{item.quote}&rdquo;
                    </blockquote>
                    <footer className="mt-6 border-t border-border pt-6">
                      <cite className="font-display text-base font-semibold not-italic text-primary">{item.name}</cite>
                    </footer>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6">
            <div className="flex items-center gap-2">
              <button type="button" onClick={() => api?.scrollPrev()} aria-label={t("testimonials.prev")} className="rounded-full border border-border bg-card p-2 text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div className="flex items-center gap-1.5">
                {testimonials.map((_, i) => (
                  <button key={i} type="button" onClick={() => api?.scrollTo(i)} aria-label={`Go to testimonial ${i + 1}`} className="h-2 rounded-full transition-all duration-300" style={{ width: i === current ? 24 : 8, background: i === current ? "hsl(42 100% 55%)" : "hsl(220 10% 40%)" }} />
                ))}
              </div>
              <button type="button" onClick={() => api?.scrollNext()} aria-label={t("testimonials.next")} className="rounded-full border border-border bg-card p-2 text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
