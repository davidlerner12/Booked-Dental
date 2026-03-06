import { Library, Rocket, Users, TrendingDown, CalendarCheck } from "lucide-react";

const services = [
  {
    icon: Library,
    title: "Proven UGC Creative Library",
    description: "Our campaigns use a library of high-performing UGC-style ads built specifically for implant and cosmetic dental clinics. These proven formats stop the scroll and attract patients already considering treatment.",
  },
  {
    icon: Rocket,
    title: "Fast Campaign Launch",
    description: "Because the creative foundation already exists, campaigns launch quickly without long testing phases.",
  },
  {
    icon: Users,
    title: "Higher Quality Patient Inquiries",
    description: "Our ads attract patients already considering implants or veneers, generating consult calls from people ready for treatment.",
  },
  {
    icon: TrendingDown,
    title: "More Efficient Marketing Costs",
    description: "Using proven creatives allows us to operate more efficiently than agencies that build campaigns from scratch, allowing us to offer a powerful patient acquisition system for just $1,000 per month.",
  }
];

const Services = () => (
  <section className="border-y border-border bg-card/50 py-24">
    <div className="container">
      <div className="mb-16 text-center">
        <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
          What We <span className="text-gradient-gold">Build For Your Practice</span>
        </h2>
        <p className="mx-auto max-w-xl text-muted-foreground">
          A patient acquisition system designed specifically for high-value treatments like implants and veneers.
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
