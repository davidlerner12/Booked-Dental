import { Phone, Target, DollarSign, BarChart3 } from "lucide-react";

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

const Services = () => (
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
);

export default Services;
