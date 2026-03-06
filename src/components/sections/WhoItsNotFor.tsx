import { XCircle, Ban } from "lucide-react";

const bullets = [
  "General cleaning-focused practices",
  "Clinics looking for cheap leads instead of real consult calls",
  "Offices only \"testing marketing\" with minimal budget",
  "Practices without capacity for implant or cosmetic consults",
];

const WhoItsNotFor = () => (
  <section className="relative border-b border-border py-24 overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,hsl(0_0%_50%/0.04),transparent_60%)]" />
    <div className="container relative z-10">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-border bg-muted/50">
            <Ban className="h-7 w-7 text-muted-foreground" />
          </div>
          <div>
            <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-1 text-sm text-muted-foreground">
              Who This Is Not For
            </div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Not Designed for <span className="text-muted-foreground">Every Practice</span>
            </h2>
          </div>
        </div>

        <p className="mb-10 text-lg text-muted-foreground max-w-2xl">
          Our system is optimized for high-value treatments and clinics ready to grow.
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          {bullets.map((bullet) => (
            <div
              key={bullet}
              className="flex items-start gap-4 rounded-xl border border-border bg-muted/20 px-6 py-5"
            >
              <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-destructive/70" />
              <p className="text-sm leading-relaxed text-muted-foreground">{bullet}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default WhoItsNotFor;
