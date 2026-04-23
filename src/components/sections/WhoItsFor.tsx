import { CheckCircle2, Target } from "lucide-react";
import { useTranslation } from "react-i18next";

const WhoItsFor = () => {
  const { t } = useTranslation();
  const bullets = [t("who_its_for.bullet1"), t("who_its_for.bullet2"), t("who_its_for.bullet3"), t("who_its_for.bullet4")];

  return (
    <section className="relative border-t border-border py-24 overflow-hidden bg-card/50">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,hsl(42_100%_55%/0.07),transparent_60%)]" />
      <div className="container relative z-10">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10 shadow-gold">
              <Target className="h-7 w-7 text-primary" />
            </div>
            <div>
              <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1 text-sm text-primary">
                {t("who_its_for.badge")}
              </div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                {t("who_its_for.title_prefix")}<span className="text-gradient-gold">{t("who_its_for.title_highlight")}</span>
              </h2>
            </div>
          </div>
          <p className="mb-10 text-lg text-muted-foreground max-w-2xl">{t("who_its_for.subtitle")}</p>
          <div className="grid gap-4 sm:grid-cols-2">
            {bullets.map((bullet) => (
              <div key={bullet} className="flex items-start gap-4 rounded-xl border border-primary/20 bg-primary/5 px-6 py-5 transition-all hover:border-primary/40 hover:shadow-gold">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <p className="text-sm leading-relaxed text-foreground">{bullet}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoItsFor;
