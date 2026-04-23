import { useTranslation } from "react-i18next";

const Stats = () => {
  const { t } = useTranslation();
  const stats = [
    { value: t("stats.monthly_cost_value"), label: t("stats.monthly_cost_label") },
    { value: t("stats.roi_value"), label: t("stats.roi_label") },
    { value: t("stats.time_value"), label: t("stats.time_label") },
    { value: t("stats.clinics_value"), label: t("stats.clinics_label") },
  ];

  return (
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
};

export default Stats;
