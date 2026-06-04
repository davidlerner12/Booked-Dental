import { Bot, BrainCircuit, Library, Rocket, TrendingDown, Users } from "lucide-react";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();

  const services = [
    { icon: Library, title: t("services.creative_library_title"), description: t("services.creative_library_desc") },
    { icon: Rocket, title: t("services.fast_launch_title"), description: t("services.fast_launch_desc") },
    { icon: Users, title: t("services.quality_inquiries_title"), description: t("services.quality_inquiries_desc") },
    { icon: TrendingDown, title: t("services.efficient_costs_title"), description: t("services.efficient_costs_desc") },
    { icon: BrainCircuit, title: t("services.call_tracking_title"), description: t("services.call_tracking_desc") },
    { icon: Bot, title: t("services.ai_booking_title"), description: t("services.ai_booking_desc") },
  ];

  return (
    <section className="border-y border-border bg-card/50 py-24">
      <div className="container">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            {t("services.title_prefix")}<span className="text-gradient-gold">{t("services.title_highlight")}</span>
          </h2>
          <p className="mx-auto max-w-xl text-muted-foreground">{t("services.subtitle")}</p>
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
};

export default Services;
