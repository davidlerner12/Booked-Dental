import { CheckCircle2, Users } from "lucide-react";

const bullets = [
  "Shows real people and authentic experiences instead of corporate messaging",
  "Creates human connection before the patient contacts your clinic",
  "Feels trustworthy and relatable to potential patients",
  "Builds confidence for high-ticket treatment decisions",
];

const WhyUGCWorks = () => (
  <section className="relative border-y border-border py-24 overflow-hidden bg-card/50">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(42_100%_55%/0.07),transparent_60%)]" />
    <div className="container relative z-10">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10 shadow-gold">
            <Users className="h-7 w-7 text-primary" />
          </div>
          <div>
            <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1 text-sm text-primary">
              Why Authentic UGC Ads Work
            </div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Why UGC Advertising Drives More{" "}
              <span className="text-gradient-gold">Consult Calls</span>
            </h2>
          </div>
        </div>

        <div className="mb-8 space-y-3 text-lg text-muted-foreground max-w-2xl">
          <p>
            Patients considering implants or cosmetic dentistry need trust before they commit to treatment.
          </p>
          <p>
            Traditional dental ads often look like marketing. Patients recognize them immediately and scroll past.
          </p>
          <p className="font-medium text-foreground">UGC advertising works differently.</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 mb-10">
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

        <div className="relative overflow-hidden rounded-xl border border-primary/30 bg-primary/5 px-8 py-6 shadow-gold">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(42_100%_55%/0.08),transparent_60%)]" />
          <p className="relative z-10 text-base font-display font-semibold text-foreground">
            This trust is what turns scrolling patients into real consultation calls.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default WhyUGCWorks;
