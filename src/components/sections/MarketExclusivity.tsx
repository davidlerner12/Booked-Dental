import { Shield, CheckCircle2, ArrowRight } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

const MarketExclusivity = () => {
  const { t, i18n } = useTranslation();
  const { lang } = useParams();
  const isHe = i18n.language === "he";

  if (isHe) {
    return (
      <section className="relative border-y border-border py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(42_100%_55%/0.06),transparent_65%)]" />
        <div className="container relative z-10">
          <div className="mx-auto max-w-5xl grid gap-12 md:grid-cols-2 items-center">
            {/* Left: text + CTA */}
            <div>
              <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-5xl leading-tight">
                {t("market_exclusivity.title_line1")}{" "}
                {t("market_exclusivity.title_line2")}
              </h2>
              <p className="mb-8 text-md text-muted-foreground leading-relaxed">
                {t("market_exclusivity.description")}
              </p>
              <Button asChild size="lg" className="bg-gradient-gold text-primary-foreground hover:opacity-90 shadow-gold">
                <Link to={`/${lang}/book`}>
                  {t("market_exclusivity.cta")}
                  <ArrowRight className="ms-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            {/* Right: stat cards */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 rounded-xl border border-primary/30 bg-card p-6">
                <span className="font-display text-4xl font-bold text-gradient-gold">{t("market_exclusivity.stat1_value")}</span>
                <span className="text-foreground font-medium">{t("market_exclusivity.stat1_label")}</span>
              </div>
              <div className="flex items-center gap-4 rounded-xl border border-primary/30 bg-card p-6">
                <span className="font-display text-4xl font-bold text-gradient-gold">{t("market_exclusivity.stat2_value")}</span>
                <span className="text-foreground font-medium">{t("market_exclusivity.stat2_label")}</span>
              </div>
              <div className="flex items-center gap-4 rounded-xl border border-primary/30 bg-card p-6">
                <span className="font-display text-4xl font-bold text-gradient-gold">{t("market_exclusivity.stat3_value")}</span>
                <span className="text-foreground font-medium">{t("market_exclusivity.stat3_label")}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // English version (unchanged)
  return (
    <section className="relative border-y border-border py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(42_100%_55%/0.06),transparent_65%)]" />
      <div className="container relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-6 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-primary/30 bg-primary/10 shadow-gold">
              <Shield className="h-8 w-8 text-primary" />
            </div>
          </div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm text-primary">
            {t("market_exclusivity.badge")}
          </div>
          <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">
            {t("market_exclusivity.title_prefix")}<span className="text-gradient-gold">{t("market_exclusivity.title_highlight")}</span>
          </h2>
          <p className="mb-8 text-md text-muted-foreground">{t("market_exclusivity.description")}</p>
          <div className="rounded-xl border border-primary/30 bg-primary/5 p-8 shadow-gold text-start">
            <div className="flex items-start gap-4">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className="font-display font-semibold text-foreground mb-1">{t("market_exclusivity.point1_title")}</p>
                <p className="text-sm text-muted-foreground">{t("market_exclusivity.point1_desc")}</p>
              </div>
            </div>
            <div className="my-5 border-t border-border" />
            <div className="flex items-start gap-4">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className="font-display font-semibold text-foreground mb-1">{t("market_exclusivity.point2_title")}</p>
                <p className="text-sm text-muted-foreground">{t("market_exclusivity.point2_desc")}</p>
              </div>
            </div>
          </div>
          <Button asChild size="lg" className="mt-10 bg-gradient-gold text-primary-foreground hover:opacity-90 shadow-gold">
            <Link to={`/${lang}/book`}>
              {t("market_exclusivity.cta")}
              <ArrowRight className="ms-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MarketExclusivity;
