import { CheckCircle2, Target } from "lucide-react";

const bullets = [
  "Clinics offering full-arch implants, All-on-4, or All-on-6 procedures",
  "Practices focused on cosmetic dentistry such as veneers",
  "Offices with surgical capacity for additional consults",
  "Clinics that want predictable patient acquisition instead of random leads",
];

const WhoItsFor = () => (
  <section className="relative border-t border-border py-24 overflow-hidden bg-card/50">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,hsl(42_100%_55%/0.07),transparent_60%)]" />
    <div className="container relative z-10">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10 shadow-gold">
            <Target className="h-7 w-7 text-primary" />
          </div>
          <div>
            <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1 text-sm text-primary">
              Who This System Is For
            </div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Designed for <span className="text-gradient-gold">High-Value Dental Clinics</span>
            </h2>
          </div>
        </div>

        <p className="mb-10 text-lg text-muted-foreground max-w-2xl">
          Booked.Dental is built specifically for clinics focused on high-ticket treatments that want predictable consult flow.
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          {bullets.map((bullet) => (
            <div
              key={bullet}
              className="flex items-start gap-4 rounded-xl border border-primary/20 bg-primary/5 px-6 py-5 transition-all hover:border-primary/40 hover:shadow-gold"
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <p className="text-sm leading-relaxed text-foreground">{bullet}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default WhoItsFor;
