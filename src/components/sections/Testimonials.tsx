import { useState, useEffect } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Dr. David Ashmore",
    quote:
      "Booked.Dental helped us finally create a steady stream of implant consultations instead of relying on occasional referrals. Within the first couple of months our phone started ringing with patients specifically asking about implants. The calls have been far more qualified than the leads we were getting before.",
  },
  {
    name: "Dr. Sunghee Park",
    quote:
      "What impressed me most about Booked.Dental was how focused the system is on real consultation calls. Instead of random form inquiries, we started receiving patients who were already ready to discuss veneers and implant treatment. The AI call system also helps capture and book inquiries automatically when our team is busy.",
  },
  {
    name: "Dr. Bob Bakshian",
    quote:
      "The biggest difference was the quality of the conversations. We started getting real calls from patients interested in implants instead of just website leads that never go anywhere. The AI booking feature also helps make sure inquiries actually turn into scheduled consults.",
  },
  {
    name: "Tate Anderson, DDS",
    quote:
      "Before Booked.Dental, implants were mostly referrals and occasional inquiries. Now we see a much more consistent flow of consultation calls from patients already interested in treatment.",
  },
  {
    name: "Dr. Nagesh",
    quote:
      "Booked.Dental helped us generate qualified implant consultation calls much faster than expected. The system is straightforward and the calls coming in are clearly from patients already considering treatment. The automated booking support is also helpful for handling inquiries outside normal office hours.",
  },
];

const Testimonials = () => {
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
            From the practice
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            What Clinics Say About <span className="text-gradient-gold">Booked.Dental</span>
          </h2>
          <p className="mx-auto max-w-xl text-muted-foreground">
            Real feedback from implant and cosmetic practices using the system.
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <Carousel setApi={setApi} opts={{ loop: true, align: "center" }}>
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((t, i) => (
                <CarouselItem key={i} className="pl-2 md:pl-4">
                  <div className="rounded-xl border border-border bg-card/80 p-8 md:p-10">
                    <Quote className="mb-4 h-10 w-10 text-primary/60" aria-hidden />
                    <blockquote className="text-lg leading-relaxed text-foreground md:text-xl">
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>
                    <footer className="mt-6 border-t border-border pt-6">
                      <cite className="font-display text-base font-semibold not-italic text-primary">
                        {t.name}
                      </cite>
                    </footer>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Dots + arrows */}
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => api?.scrollPrev()}
                aria-label="Previous testimonial"
                className="rounded-full border border-border bg-card p-2 text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div className="flex items-center gap-1.5">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => api?.scrollTo(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                    className="h-2 rounded-full transition-all duration-300"
                    style={{
                      width: i === current ? 24 : 8,
                      background:
                        i === current
                          ? "hsl(42 100% 55%)"
                          : "hsl(220 10% 40%)",
                    }}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={() => api?.scrollNext()}
                aria-label="Next testimonial"
                className="rounded-full border border-border bg-card p-2 text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
              >
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
