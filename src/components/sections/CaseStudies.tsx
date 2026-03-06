const caseStudies = [
  {
    clinic: "Full Arch Implant Clinic — Phoenix, AZ",
    challenge: "Struggling to fill chairs despite $5K/mo in ad spend with a generic agency. Getting form leads that never converted.",
    result: "67 qualified calls in 90 days at $22/call. 18 full arch cases booked worth $540K+ in production.",
    metrics: [
      { label: "Cost Per Call", value: "$22" },
      { label: "Cases Booked", value: "18" },
      { label: "Revenue Generated", value: "$540K+" },
    ],
  },
  {
    clinic: "Cosmetic Veneer Practice — Austin, TX",
    challenge: "Brand new practice with zero patient base. Needed a fast, scalable system to build momentum.",
    result: "42 qualified calls in 60 days. 14 veneer cases closed averaging $12K each — $168K in revenue from $2,800 in ad spend.",
    metrics: [
      { label: "Ad Spend", value: "$2,800" },
      { label: "Cases Closed", value: "14" },
      { label: "Revenue Generated", value: "$168K" },
    ],
  },
];

const CaseStudies = () => (
  <section className="border-t border-border bg-card/50 py-24">
    <div className="container">
      <div className="mb-16 text-center">
        <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
          Case <span className="text-gradient-gold">Studies</span>
        </h2>
        <p className="mx-auto max-w-xl text-muted-foreground">
          The numbers behind real patient acquisition campaigns.
        </p>
      </div>
      <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
        {caseStudies.map((cs) => (
          <div key={cs.clinic} className="rounded-xl border border-border bg-card p-8">
            <h3 className="mb-4 font-display text-lg font-semibold text-gradient-gold">{cs.clinic}</h3>
            <div className="mb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Challenge</span>
              <p className="mt-1 text-sm text-muted-foreground">{cs.challenge}</p>
            </div>
            <div className="mb-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Result</span>
              <p className="mt-1 text-sm text-foreground">{cs.result}</p>
            </div>
            <div className="grid grid-cols-3 gap-4 border-t border-border pt-6">
              {cs.metrics.map((m) => (
                <div key={m.label} className="text-center">
                  <div className="font-display text-xl font-bold text-gradient-gold">{m.value}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CaseStudies;
