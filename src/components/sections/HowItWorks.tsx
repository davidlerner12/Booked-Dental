const steps = [
  { number: "01", title: "Market Availability Check & Strategy", description: "Before anything else, we confirm your market is open. We only work with one clinic per area, so your competitors can't access the same system. Once confirmed, we build a custom acquisition strategy around your treatments and local competition." },
  { number: "02", title: "Creative Deployment", description: "We launch from a proven library of high-converting ad creatives built specifically for implant and cosmetic dental clinics. No guesswork. No building from scratch. Your campaigns go live fast, typically within 48 hours of onboarding." },
  { number: "03", title: "Call Quality Optimization", description: "Campaigns are optimized using advanced call tracking focused on consultation calls lasting 2+ minutes. AI phone agents answer incoming calls and automatically book consultation appointments so your team can stay focused on patients in the clinic." },
];

const HowItWorks = () => (
  <section id="how" className="py-24">
    <div className="container">
      <div className="mb-16 text-center">
        <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
          How <span className="text-gradient-gold">It Works</span>
        </h2>
      </div>
      <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-3">
        {steps.map((step) => (
          <div key={step.number} className="relative">
            <div className="mb-4 font-display text-5xl font-bold text-primary/20">{step.number}</div>
            <h3 className="mb-2 font-display text-xl font-semibold">{step.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
