import { useState } from "react";
import { Phone, Target, DollarSign, ArrowRight, CheckCircle2, Zap, BarChart3, Users, Star, Quote, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackBookingCTA } from "@/lib/analytics";

const stats = [
  { value: "$1,000", label: "Monthly System Cost" },
  { value: "12x", label: "Average ROI" },
  { value: "14 Days", label: "Typical Time to First Consult" },
  { value: "10+", label: "Clinics Scaled" },
];

const services = [
  {
    icon: Target,
    title: "Authentic UGC Ads That Convert",
    description: "We use human-style ad creatives that feel real and relatable to patients. These ads stop the scroll and generate implant and cosmetic consult inquiries.",
  },
  {
    icon: Phone,
    title: "Qualified Calls, Not Weak Leads",
    description: "Our campaigns focus on generating real consult calls from patients interested in treatment — not low quality form leads.",
  },
  {
    icon: DollarSign,
    title: "Predictable Patient Acquisition",
    description: "A system designed to consistently fill your calendar with high ticket consults such as full arch implants and cosmetic veneers.",
  },
  {
    icon: BarChart3,
    title: "Transparent Performance Tracking",
    description: "You see the numbers that matter: consult calls, booked appointments, and revenue potential.",
  },
];

const steps = [
  { number: "01", title: "Market Availability Check & Strategy", description: "Before anything else, we confirm your market is open. We only work with one clinic per area, so your competitors can't access the same system. Once confirmed, we build a custom acquisition strategy around your treatments and local competition." },
  { number: "02", title: "UGC Creative Deployment", description: "We launch from a proven library of high-converting UGC-style ad creatives built specifically for implant and cosmetic dental clinics. No guesswork. No building from scratch. Your campaigns go live fast, typically within 48 hours of onboarding." },
  { number: "03", title: "Call Quality Optimization", description: "We optimize for one metric: qualified phone calls. Not clicks. Not impressions. We continuously refine targeting and creative to drive your cost per call down. You see the real numbers: calls, booked consults, revenue attributed. Nothing else." },
];

const testimonials = [
  {
    name: "Geoffrey Rubinshtein, DDS",
    clinic: "Bensonhurst Dental, Brooklyn",
    quote: "We went from 5 implant consults per month to 27 in under 90 days. The calls are legitimate and the patients are serious.",
    rating: 5,
  },
];

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


const Index = () => {
  const [implantValue, setImplantValue] = useState(20000);
  const [veneerValue, setVeneerValue] = useState(12000);
  const [implantCases, setImplantCases] = useState(1);
  const [veneerCases, setVeneerCases] = useState(1);

  const implantRevenue = implantCases * implantValue;
  const veneerRevenue = veneerCases * veneerValue;
  const totalRevenue = implantRevenue + veneerRevenue;

  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-display text-xl font-bold">
            <span className="text-gradient-gold">Booked</span>
            <span className="text-foreground">.Dental</span>
          </div>
          <Button variant="hero" size="sm" asChild>
            <a href="#cta" onClick={trackBookingCTA}>Book a Call</a>
          </Button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative flex min-h-screen items-center pt-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(42_100%_55%/0.06),transparent_60%)]" />
        <div className="container relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm text-primary opacity-0 animate-fade-up">
              <Zap className="h-4 w-4" />
              Meta Ads → Qualified Calls → Booked Cases
            </div>
            <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight opacity-0 animate-fade-up sm:text-5xl md:text-6xl lg:text-7xl" style={{ animationDelay: "0.1s" }}>
              Affordable Growth for{" "}
              <span className="text-gradient-gold">Implant and Cosmetic Dental Clinics</span>
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground opacity-0 animate-fade-up sm:text-xl" style={{ animationDelay: "0.2s" }}>
              Booked.Dental helps implant and veneer clinics generate qualified consult calls using UGC-style ads designed to feel natural and trustworthy, deployed across Meta and Google. Built from a proven creative library, these ads connect with patients considering high-ticket treatments. Our model is market-exclusive, so we partner with only one clinic per market.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 opacity-0 animate-fade-up sm:flex-row" style={{ animationDelay: "0.3s" }}>
              <Button variant="hero" size="lg" asChild>
                <a href="#cta" onClick={trackBookingCTA}>
                  Book a Call
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="#how">See How It Works</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
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

      {/* Problem */}
      <section className="py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">
              Most Dental Marketing <span className="text-gradient-gold">Doesn't Work</span>
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Many dental clinics waste money on boosted posts, generic agencies, and "brand awareness" campaigns that never turn into real treatment cases. High-ticket procedures require a different approach. Implants and cosmetic treatments depend on trust — patients need to see real stories, real people, and real outcomes before they book. Booked.Dental solves this by using authentic UGC-style advertising that creates real human connection before the patient ever contacts your clinic.
            </p>
            <div className="grid gap-4 text-left sm:grid-cols-3">
              {[
                "No more boosted post guessing",
                "No bloated marketing retainers",
                "No vanity metrics or confusing reports",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-lg border border-border bg-card p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
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

      {/* Services */}
      <section className="border-y border-border bg-card/50 py-24">
        <div className="container">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              What We <span className="text-gradient-gold">Build For Your Practice</span>
            </h2>
            <p className="mx-auto max-w-xl text-muted-foreground">
              A patient acquisition system designed specifically for high value treatments like implants and veneers.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2">
            {services.map((service) => (
              <div key={service.title} className="group rounded-xl border border-border bg-background p-8 transition-all hover:border-primary/30 hover:shadow-gold">
                <service.icon className="mb-4 h-8 w-8 text-primary transition-transform group-hover:scale-110" />
                <h3 className="mb-2 font-display text-xl font-semibold">{service.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Affordable by Design */}
      <section className="py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
                Affordable <span className="text-gradient-gold">by Design</span>
              </h2>
              <p className="text-muted-foreground">
                Most agencies charge large retainers because they build every campaign from scratch.
              </p>
            </div>

            <div className="mb-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-card p-6">
                <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Other Agencies</div>
                <p className="text-sm leading-relaxed text-muted-foreground">Build every campaign from scratch — charging you for the time, the testing, and the guesswork.</p>
              </div>
              <div className="rounded-xl border border-primary/30 bg-primary/5 p-6">
                <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">Booked.Dental</div>
                <p className="text-sm leading-relaxed text-muted-foreground">Works from a proven library of high performing UGC ad creatives built specifically for implant and cosmetic dental clinics.</p>
              </div>
            </div>

            <p className="mb-8 text-center text-sm leading-relaxed text-muted-foreground">
              Because the creative foundation already exists, we launch campaigns quickly and operate efficiently — and that efficiency gets passed directly to you.
            </p>

            <div className="rounded-xl border border-primary/30 bg-primary/5 p-8 text-center shadow-gold">
              <div className="font-display text-5xl font-bold text-gradient-gold md:text-6xl">$1,000<span className="text-2xl text-muted-foreground">/mo</span></div>
              <p className="mt-3 text-sm text-muted-foreground">Far less than most dental marketing agencies — with no bloated retainers and no wasted spend.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="border-y border-border bg-card/50 py-24">
        <div className="container">
          <div className="mb-16 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm text-primary">
              <TrendingUp className="h-4 w-4" />
              Revenue Impact Calculator
            </div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              See the Economics of <span className="text-gradient-gold">Implant Marketing</span>
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Implant and cosmetic dentistry are high-value treatments. That means even a small increase in consults can dramatically impact your monthly production. Use the calculator below to estimate how additional cases could affect your practice.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Inputs */}
            <div className="rounded-xl border border-border bg-background p-8">
              <h3 className="mb-8 font-display text-xl font-semibold">Your Practice Numbers</h3>
              <div className="space-y-8">
                <div>
                  <label className="mb-2 block text-sm font-medium text-muted-foreground">Average Full-Arch Case Value</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 font-semibold text-muted-foreground">$</span>
                    <input
                      type="number"
                      value={implantValue}
                      onChange={(e) => setImplantValue(Number(e.target.value))}
                      className="w-full rounded-lg border border-border bg-card py-3 pl-8 pr-4 font-display text-xl font-semibold text-foreground transition-colors focus:border-primary/50 focus:outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                      min={0}
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-muted-foreground">Average Veneer Case Value</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 font-semibold text-muted-foreground">$</span>
                    <input
                      type="number"
                      value={veneerValue}
                      onChange={(e) => setVeneerValue(Number(e.target.value))}
                      className="w-full rounded-lg border border-border bg-card py-3 pl-8 pr-4 font-display text-xl font-semibold text-foreground transition-colors focus:border-primary/50 focus:outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                      min={0}
                    />
                  </div>
                </div>
                <div>
                  <div className="mb-3 flex items-center justify-between">
                    <label className="text-sm font-medium text-muted-foreground">New Implant Cases Per Month</label>
                    <span className="rounded-md border border-primary/30 bg-primary/10 px-2.5 py-0.5 font-display text-sm font-bold text-primary">{implantCases}</span>
                  </div>
                  <input
                    type="range"
                    min={1}
                    max={10}
                    value={implantCases}
                    onChange={(e) => setImplantCases(Number(e.target.value))}
                    className="h-1.5 w-full cursor-pointer appearance-none rounded-full [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:shadow-gold"
                    style={{ background: `linear-gradient(to right, hsl(42 100% 55%) ${((implantCases - 1) / 9) * 100}%, hsl(220 15% 18%) ${((implantCases - 1) / 9) * 100}%)` }}
                  />
                  <div className="mt-1.5 flex justify-between text-xs text-muted-foreground">
                    <span>1 case</span><span>10 cases</span>
                  </div>
                </div>
                <div>
                  <div className="mb-3 flex items-center justify-between">
                    <label className="text-sm font-medium text-muted-foreground">New Veneer Cases Per Month</label>
                    <span className="rounded-md border border-primary/30 bg-primary/10 px-2.5 py-0.5 font-display text-sm font-bold text-primary">{veneerCases}</span>
                  </div>
                  <input
                    type="range"
                    min={1}
                    max={10}
                    value={veneerCases}
                    onChange={(e) => setVeneerCases(Number(e.target.value))}
                    className="h-1.5 w-full cursor-pointer appearance-none rounded-full [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:shadow-gold"
                    style={{ background: `linear-gradient(to right, hsl(42 100% 55%) ${((veneerCases - 1) / 9) * 100}%, hsl(220 15% 18%) ${((veneerCases - 1) / 9) * 100}%)` }}
                  />
                  <div className="mt-1.5 flex justify-between text-xs text-muted-foreground">
                    <span>1 case</span><span>10 cases</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Output */}
            <div className="flex flex-col gap-5">
              <div className="rounded-xl border border-border bg-background p-8">
                <h3 className="mb-6 font-display text-xl font-semibold">Example Calculation</h3>
                <div className="space-y-3">
                  <div className="rounded-lg border border-border bg-card p-4">
                    <p className="mb-1 text-xs text-muted-foreground">
                      {implantCases} Implant {implantCases === 1 ? "Case" : "Cases"} × ${implantValue.toLocaleString()}
                    </p>
                    <div className="font-display text-2xl font-bold text-gradient-gold">${implantRevenue.toLocaleString()}</div>
                    <p className="mt-0.5 text-xs text-muted-foreground">in additional monthly production</p>
                  </div>
                  <div className="rounded-lg border border-border bg-card p-4">
                    <p className="mb-1 text-xs text-muted-foreground">
                      {veneerCases} Veneer {veneerCases === 1 ? "Case" : "Cases"} × ${veneerValue.toLocaleString()}
                    </p>
                    <div className="font-display text-2xl font-bold text-gradient-gold">${veneerRevenue.toLocaleString()}</div>
                    <p className="mt-0.5 text-xs text-muted-foreground">in additional monthly production</p>
                  </div>
                </div>
                <div className="mt-5 rounded-xl border border-primary/30 bg-primary/5 p-6 text-center shadow-gold">
                  <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-primary">Total Estimated Monthly Production</div>
                  <div className="font-display text-4xl font-bold text-gradient-gold">${totalRevenue.toLocaleString()}</div>
                  <div className="mt-2 text-xs text-muted-foreground">
                    That's <span className="font-semibold text-foreground">{Math.round(totalRevenue / 1000)}×</span> your monthly investment
                  </div>
                </div>
              </div>
              <div className="rounded-xl border-l-2 border-l-primary/50 border border-border bg-background px-6 py-5">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  <span className="font-display font-semibold text-foreground">Even one additional high-ticket case can justify months of marketing investment.</span>
                  {" "}Booked.Dental focuses on generating qualified consult calls that can turn into these types of cases.
                </p>
              </div>
              <Button variant="hero" size="lg" className="w-full" asChild>
                <a href="#cta" onClick={trackBookingCTA}>
                  Start Generating These Cases
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why UGC Works */}
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

      {/* How It Works */}
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


      {/* Testimonials */}
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

      {/* Creatives Video */}
      <section className="relative border-y border-border bg-card/50 py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(42_100%_55%/0.04),transparent_70%)]" />
        <div className="container relative z-10">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm text-primary">
              <Zap className="h-4 w-4" />
              Real Creatives. Real Results.
            </div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              Have a Look at Our{" "}
              <span className="text-gradient-gold">Creatives</span>
            </h2>
            <p className="mx-auto max-w-xl text-muted-foreground">
              Real ad creatives engineered to stop the scroll and drive qualified implant &amp; veneer inquiries.            </p>
          </div>
          <div className="mx-auto max-w-3xl">
            <div className="overflow-hidden rounded-xl border border-primary/20 bg-card shadow-gold transition-shadow hover:shadow-[0_0_40px_hsl(42_100%_55%/0.25)]">
              <iframe
                className="aspect-video w-full"
                src="https://player.cloudinary.com/embed/?cloud_name=dlgykfmrf&public_id=Benson_Hurst_Dental_Care_video_final_440720_jom76d"
                allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                allowFullScreen
                loading="lazy"
                title="Booked.Dental Ad Creative"
              />
            </div>
            <p className="mt-4 text-center text-xs text-muted-foreground">
              Example UGC style ad creative that generated 27 qualified implant calls in under 90 days for Bensonhurst Dental in Brooklyn.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="relative border-t border-border py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(42_100%_55%/0.08),transparent_60%)]" />
        <div className="container relative z-10">
          <div className="mx-auto max-w-2xl text-center">
            <Users className="mx-auto mb-6 h-12 w-12 text-primary" />
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              Ready to Generate More <span className="text-gradient-gold">Implant and Cosmetic Consults?</span>
            </h2>
            <p className="mb-8 text-muted-foreground">
              If your practice has capacity for high value cases but your consult calendar isn't consistently full, Booked.Dental can help. Book a free strategy call to see how our system can generate qualified consult inquiries for your clinic.
            </p>
            <Button variant="hero" size="lg" asChild>
              <a href="https://cal.com/david-israel-lerner/30min" target="_blank" rel="noopener noreferrer" onClick={trackBookingCTA}>
                Book Your Free Strategy Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <p className="mt-4 text-xs text-muted-foreground">No contracts. No obligation. Just a clear conversation about growing your practice.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="font-display text-lg font-bold">
            <span className="text-gradient-gold">Booked</span>
            <span className="text-foreground">.Dental</span>
          </div>
          <p className="text-xs text-muted-foreground">
            Turning Meta ads into booked treatment plans.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
