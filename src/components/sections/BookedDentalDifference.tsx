import { Layers } from "lucide-react";
import { useTranslation } from "react-i18next";

const BookedDentalDifference = () => {
  const { t } = useTranslation();
  return (
    <section className="relative border-y border-border py-24 overflow-hidden bg-card/50">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,hsl(42_100%_55%/0.07),transparent_60%)]" />
      <div className="container relative z-10">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10 shadow-gold">
              <Layers className="h-7 w-7 text-primary" />
            </div>
            <div>
              <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1 text-sm text-primary">
                {t("booked_dental_difference.badge")}
              </div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                {t("booked_dental_difference.title_prefix")}<span className="text-gradient-gold">{t("booked_dental_difference.title_highlight")}</span>
              </h2>
            </div>
          </div>
          <div className="mb-10 space-y-3 text-lg text-muted-foreground max-w-2xl">
            <p>{t("booked_dental_difference.para1")}</p>
            <p>{t("booked_dental_difference.para2")}</p>
            <p className="font-medium text-foreground">{t("booked_dental_difference.para3")}</p>
          </div>
          <div className="relative overflow-hidden rounded-xl border border-primary/30 bg-primary/5 px-8 py-6 shadow-gold">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,hsl(42_100%_55%/0.08),transparent_60%)]" />
            <p className="relative z-10 text-base font-display font-semibold text-foreground">{t("booked_dental_difference.callout")}</p>
          </div>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">{t("booked_dental_difference.footer")}</p>
        </div>
      </div>
    </section>
  );
};

export default BookedDentalDifference;
