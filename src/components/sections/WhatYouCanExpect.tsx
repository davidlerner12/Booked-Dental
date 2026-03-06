import { BarChart2 } from "lucide-react";

const metrics = [
  {
    label: "Cost per Qualified Consult Call",
    value: "$50–60",
    description: "Per booked consult call",
  },
  {
    label: "Consult Show Rate",
    value: "50–70%",
    description: "Of booked calls attend",
  },
  {
    label: "Case Acceptance Rate",
    value: "20–35%",
    description: "Of consults convert to cases",
  },
];

const WhatYouCanExpect = () => (
  <section className="relative border-t border-border py-24 overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(42_100%_55%/0.06),transparent_60%)]" />
    <div className="container relative z-10">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10 shadow-gold">
            <BarChart2 className="h-7 w-7 text-primary" />
          </div>
          <div>
            <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1 text-sm text-primary">
              What You Can Expect
            </div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Typical <span className="text-gradient-gold">Marketing Benchmarks</span>
            </h2>
          </div>
        </div>

        <p className="mb-10 text-lg text-muted-foreground max-w-2xl">
          High-value dental treatments produce strong returns when patient acquisition is done correctly.
        </p>

        <div className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Typical Campaign Performance
        </div>

        <div className="mb-8 grid gap-4 sm:grid-cols-3">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="flex flex-col gap-2 rounded-xl border border-primary/20 bg-primary/5 px-6 py-6 transition-all hover:border-primary/40 hover:shadow-gold"
            >
              <div className="font-display text-4xl font-bold text-gradient-gold">{metric.value}</div>
              <div className="text-sm font-medium text-foreground">{metric.label}</div>
              <div className="text-xs text-muted-foreground">{metric.description}</div>
            </div>
          ))}
        </div>

        <div className="rounded-xl border-l-2 border-l-primary/50 border border-border bg-card px-6 py-5">
          <p className="text-sm leading-relaxed text-muted-foreground">
            <span className="font-display font-semibold text-foreground">Use the calculator below to see the exact impact for your practice.</span>
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default WhatYouCanExpect;
