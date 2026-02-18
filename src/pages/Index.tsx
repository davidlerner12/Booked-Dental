import { Phone, TrendingUp, Target, DollarSign, ArrowRight, CheckCircle2, Zap, BarChart3, Users, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { value: "$20–$30", label: "Cost Per Qualified Call" },
  { value: "12x", label: "Average ROI" },
  { value: "14 Days", label: "To First Booked Consult" },
  { value: "100+", label: "Clinics Scaled" },
];

const services = [
  {
    icon: Target,
    title: "High-Converting Meta Ads",
    description: "UGC-powered creatives engineered to stop the scroll and drive qualified implant & veneer inquiries — not likes.",
  },
  {
    icon: Phone,
    title: "Qualified Calls, Not Leads",
    description: "We optimize for phone calls from patients ready to book, not form fills that ghost your front desk.",
  },
  {
    icon: DollarSign,
    title: "Predictable Patient Acquisition",
    description: "A system that fills your chairs with high-ticket cases — full-arch, no-prep veneers, and premium treatments.",
  },
  {
    icon: BarChart3,
    title: "Transparent Reporting",
    description: "Real numbers. Cost per call, booked consults, revenue attributed. No vanity metrics, no fluff.",
  },
];

const steps = [
  { number: "01", title: "Audit & Strategy", description: "We analyze your market, competition, and current patient flow to build a custom acquisition plan." },
  { number: "02", title: "Creative & Launch", description: "UGC-powered ad creatives go live on Meta — designed to convert scrollers into callers." },
  { number: "03", title: "Optimize & Scale", description: "We continuously refine targeting, creative, and landing pages to drive cost per call down." },
];

const testimonials = [
  {
    name: "Dr. Michael Torres",
    clinic: "Torres Implant Center, Miami",
    quote: "We went from 4 implant consults a month to 22 in 60 days. Booked.Dental completely transformed our patient pipeline. The calls are real, qualified, and ready to move forward.",
    rating: 5,
  },
  {
    name: "Dr. Sarah Chen",
    clinic: "Premier Smile Studio, Dallas",
    quote: "I was spending $8K/month with another agency and getting nothing but form fills that never picked up the phone. With Booked.Dental, I'm getting 30+ qualified calls a month at $24 each.",
    rating: 5,
  },
  {
    name: "Dr. James Whitfield",
    clinic: "Whitfield Dental Aesthetics, LA",
    quote: "Our veneer cases tripled in the first quarter. The UGC ads they create actually resonate with patients — it's not generic stock photo garbage. This is the real deal.",
    rating: 5,
  },
];

const caseStudies = [
  {
    clinic: "Full-Arch Implant Clinic — Phoenix, AZ",
    challenge: "Struggling to fill chairs despite $5K/mo in ad spend with a generic agency. Getting form leads that never converted.",
    result: "67 qualified calls in 90 days at $22/call. 18 full-arch cases booked worth $540K+ in production.",
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
            <a href="#cta">Book a Call</a>
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
              Stop Wasting Ad Spend.{" "}
              <span className="text-gradient-gold">Start Booking Implant Cases.</span>
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground opacity-0 animate-fade-up sm:text-xl" style={{ animationDelay: "0.2s" }}>
              We help implant and veneer-focused clinics generate qualified calls at $20–$30 per call using high-converting Meta ads powered by UGC. No vanity metrics. No bloated retainers.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 opacity-0 animate-fade-up sm:flex-row" style={{ animationDelay: "0.3s" }}>
              <Button variant="hero" size="lg" asChild>
                <a href="#cta">
                  Get More Booked Cases
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
              Your Clinic Doesn't Have a <span className="text-gradient-gold">Lead Problem</span>
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              It has a conversion problem. Boosted posts, generic agencies, and "brand awareness" campaigns don't fill chairs with high-ticket cases. You need a system built for patient acquisition — not impressions.
            </p>
            <div className="grid gap-4 text-left sm:grid-cols-3">
              {[
                "No more \"boosted post\" guessing",
                "No bloated marketing retainers",
                "No vanity metrics or fluff reports",
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

      {/* Services */}
      <section className="border-y border-border bg-card/50 py-24">
        <div className="container">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              What We <span className="text-gradient-gold">Build For You</span>
            </h2>
            <p className="mx-auto max-w-xl text-muted-foreground">
              A complete patient acquisition system designed to book high-ticket cases — not generate vanity leads.
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
              What Doctors Are <span className="text-gradient-gold">Saying</span>
            </h2>
            <p className="mx-auto max-w-xl text-muted-foreground">
              Real results from real clinics. No fluff.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
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

      {/* Case Studies */}
      <section className="py-24">
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

      {/* CTA */}
      <section id="cta" className="relative border-t border-border py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(42_100%_55%/0.08),transparent_60%)]" />
        <div className="container relative z-10">
          <div className="mx-auto max-w-2xl text-center">
            <Users className="mx-auto mb-6 h-12 w-12 text-primary" />
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              Ready to Fill Your Chairs With <span className="text-gradient-gold">Qualified Consults?</span>
            </h2>
            <p className="mb-8 text-muted-foreground">
              If your chairs aren't consistently filled with qualified consults, we fix that. Book a free strategy call and see how we can build your patient acquisition system.
            </p>
            <Button variant="hero" size="lg" asChild>
              <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                Book Your Free Strategy Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <p className="mt-4 text-xs text-muted-foreground">No contracts. No obligation. Just a real conversation about growing your practice.</p>
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
