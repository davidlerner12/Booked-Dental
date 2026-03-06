import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Geoffrey Rubinshtein, DDS",
    clinic: "Bensonhurst Dental, Brooklyn",
    quote: "We went from 5 implant consults per month to 27 in under 90 days. The calls are legitimate and the patients are serious.",
    rating: 5,
  },
];

const Testimonials = () => (
  <section className="border-y border-border bg-card/50 py-24">
    <div className="container">
      <div className="mb-16 text-center">
        <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
          What Clinics Are <span className="text-gradient-gold">Saying</span>
        </h2>
        <p className="mx-auto max-w-xl text-muted-foreground">
          Real results from real clinics. No fluff.
        </p>
      </div>
      <div className="mx-auto grid max-w-xl gap-6">
        {testimonials.map((t) => (
          <div key={t.name} className="flex flex-col rounded-xl border border-border bg-background p-8">
            <div className="mb-4 flex gap-1">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-primary text-primary" />
              ))}
            </div>
            <Quote className="mb-3 h-6 w-6 text-primary/30" />
            <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">{t.quote}</p>
            <div>
              <div className="font-display font-semibold text-foreground">{t.name}</div>
              <div className="text-xs text-muted-foreground">{t.clinic}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
