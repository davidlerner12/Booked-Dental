import { CheckCircle2, PhoneCall } from "lucide-react";
import { useTranslation } from "react-i18next";

const AdvancedCallTracking = () => {
  const { t } = useTranslation();
  const items = Array.from({ length: 6 }, (_, i) => t(`advanced_call_tracking.item${i + 1}`));

  return (
    <section className="relative border-y border-border bg-background py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(42_100%_55%/0.05),transparent_60%)]" />
      <div className="container relative z-10">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm text-primary">
              <PhoneCall className="h-4 w-4" />
              {t("advanced_call_tracking.badge")}
            </div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              {t("advanced_call_tracking.title_prefix")}<span className="text-gradient-gold">{t("advanced_call_tracking.title_highlight")}</span>
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground">{t("advanced_call_tracking.subtitle")}</p>
          </div>
          <div className="rounded-xl border border-border bg-card/70 p-8 md:p-10">
            <ul className="grid gap-4 text-start md:grid-cols-2">
              {items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm leading-relaxed text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedCallTracking;
