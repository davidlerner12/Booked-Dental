import { Library, Rocket, Users, TrendingDown, PhoneCall, Bot, Target, Zap } from "lucide-react";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t, i18n } = useTranslation();
  const isHe = i18n.language === "he";

  if (isHe) {
    const heServices = [
      { icon: Target, title: t("services.creative_library_title"), description: t("services.creative_library_desc") },
      { icon: Zap, title: t("services.fast_launch_title"), description: t("services.fast_launch_desc") },
      { icon: PhoneCall, title: t("services.call_tracking_title"), description: t("services.call_tracking_desc") },
    ];

    return (
      <section className="border-y border-border bg-card/50 py-24">
        <div className="container">
          <div className="mb-16 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm text-primary">
              {t("services.title_prefix")}{t("services.title_highlight")}
            </div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              {t("services.subtitle")}
            </h2>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
            {heServices.map((service) => (
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
  }

  // English version (unchanged)
  const services = [
    { icon: Library, title: t("services.creative_library_title"), description: t("services.creative_library_desc") },
    { icon: Rocket, title: t("services.fast_launch_title"), description: t("services.fast_launch_desc") },
    { icon: Users, title: t("services.quality_inquiries_title"), description: t("services.quality_inquiries_desc") },
    { icon: TrendingDown, title: t("services.efficient_costs_title"), description: t("services.efficient_costs_desc") },
    { icon: PhoneCall, title: t("services.call_tracking_title"), description: t("services.call_tracking_desc") },
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
