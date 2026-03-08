const stats = [
  { value: "$1,000", label: "Monthly System Cost" },
  { value: "12x", label: "Average ROI" },
  { value: "7 Days", label: "Typical Time to First Consult" },
  { value: "10+", label: "Clinics Scaled" },
];

const Stats = () => (
  <section className="border-y border-border bg-card py-16">
    <div className="container">
      <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="font-display text-3xl font-bold text-gradient-gold md:text-4xl">{stat.value}</div>
            <div className="mt-2 text-sm text-muted-foreground">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Stats;
