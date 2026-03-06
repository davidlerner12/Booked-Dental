import { Users } from "lucide-react";

const WhyUGCWorks = () => (
  <section className="border-y border-border bg-card/50 py-24">
    <div className="container">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            Why UGC Works for <span className="text-gradient-gold">Dental Patients</span>
          </h2>
        </div>

        <div className="mb-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-border bg-background p-6">
            <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Polished Corporate Ads</div>
            <p className="text-sm leading-relaxed text-muted-foreground">Feel like marketing. Patients recognize them instantly — and don't trust them. They scroll past.</p>
          </div>
          <div className="rounded-xl border border-primary/30 bg-primary/5 p-6">
            <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">Authentic UGC Ads</div>
            <p className="text-sm leading-relaxed text-muted-foreground">Show real people, real experiences, and real outcomes — creating the human connection patients need before they commit to a high ticket treatment.</p>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-xl border border-primary/20 bg-background p-8">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(42_100%_55%/0.06),transparent_60%)]" />
          <div className="relative z-10 flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="mb-1 font-display text-lg font-semibold text-foreground">Trust drives treatment decisions.</p>
              <p className="text-sm leading-relaxed text-muted-foreground">When patients trust what they see, they are far more likely to call your clinic for a consultation. UGC is the most effective way to build that trust before they ever pick up the phone.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default WhyUGCWorks;
