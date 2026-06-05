import { useState } from "react";
import { ArrowRight, TrendingUp } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

const ROICalculator = () => {
  const { t, i18n } = useTranslation();
  const { lang } = useParams();
  const isHe = i18n.language === "he";

  const implantValue = isHe ? 40000 : 30000;
  const veneerValue = isHe ? 30000 : 12000;
  const currencySymbol = isHe ? "\u20aa" : "$";
  const currencyCode = isHe ? "ILS" : "USD";
  const [implantCases, setImplantCases] = useState(2);
  const [veneerCases, setVeneerCases] = useState(1);

  const implantRevenue = implantCases * implantValue;
  const veneerRevenue = veneerCases * veneerValue;
  const totalRevenue = implantRevenue + veneerRevenue;

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat(isHe ? "he-IL" : "en-US", {
      style: "currency",
      currency: currencyCode,
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section id="roi" className="border-y border-border bg-card/50 py-24">
      <div className="container">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm text-primary">
            <TrendingUp className="h-4 w-4" />
            {t("roi_calculator.badge")}
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            {t("roi_calculator.title_prefix")}<span className="text-gradient-gold">{t("roi_calculator.title_highlight")}</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">{t("roi_calculator.subtitle")}</p>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="rounded-xl border border-border bg-background p-8">
            <h3 className="mb-8 font-display text-xl font-semibold">{t("roi_calculator.inputs_title")}</h3>
            <div className="space-y-8">
              <div>
                <label htmlFor="implant-value" className="mb-2 block text-sm font-medium text-muted-foreground">{t("roi_calculator.implant_value_label")}</label>
                <div className="relative">
                  <span className="absolute start-4 top-1/2 -translate-y-1/2 font-semibold text-muted-foreground">{currencySymbol}</span>
                  <input id="implant-value" type="number" value={implantValue} readOnly className="w-full rounded-lg border border-border bg-card py-3 ps-8 pe-4 font-display text-xl font-semibold text-foreground transition-colors focus:border-primary/50 focus:outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none" min={0} />
                </div>
              </div>
              <div>
                <label htmlFor="veneer-value" className="mb-2 block text-sm font-medium text-muted-foreground">{t("roi_calculator.veneer_value_label")}</label>
                <div className="relative">
                  <span className="absolute start-4 top-1/2 -translate-y-1/2 font-semibold text-muted-foreground">{currencySymbol}</span>
                  <input id="veneer-value" type="number" value={veneerValue} readOnly className="w-full rounded-lg border border-border bg-card py-3 ps-8 pe-4 font-display text-xl font-semibold text-foreground transition-colors focus:border-primary/50 focus:outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none" min={0} />
                </div>
              </div>
              <div>
                <div className="mb-3 flex items-center justify-between">
                  <label htmlFor="implant-cases" className="text-sm font-medium text-muted-foreground">{t("roi_calculator.implant_cases_label")}</label>
                  <span className="rounded-md border border-primary/30 bg-primary/10 px-2.5 py-0.5 font-display text-sm font-bold text-primary">{implantCases}</span>
                </div>
                <input id="implant-cases" type="range" min={1} max={10} value={implantCases} onChange={(e) => setImplantCases(Number(e.target.value))} className="h-1.5 w-full cursor-pointer appearance-none rounded-full [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:shadow-gold" style={{ background: `linear-gradient(to right, hsl(42 100% 55%) ${((implantCases - 1) / 9) * 100}%, hsl(220 15% 18%) ${((implantCases - 1) / 9) * 100}%)` }} />
                <div className="mt-1.5 flex justify-between text-xs text-muted-foreground">
                  <span>1 {t("roi_calculator.case_singular")}</span><span>10 {t("roi_calculator.cases_plural")}</span>
                </div>
              </div>
              <div>
                <div className="mb-3 flex items-center justify-between">
                  <label htmlFor="veneer-cases" className="text-sm font-medium text-muted-foreground">{t("roi_calculator.veneer_cases_label")}</label>
                  <span className="rounded-md border border-primary/30 bg-primary/10 px-2.5 py-0.5 font-display text-sm font-bold text-primary">{veneerCases}</span>
                </div>
                <input id="veneer-cases" type="range" min={1} max={10} value={veneerCases} onChange={(e) => setVeneerCases(Number(e.target.value))} className="h-1.5 w-full cursor-pointer appearance-none rounded-full [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:shadow-gold" style={{ background: `linear-gradient(to right, hsl(42 100% 55%) ${((veneerCases - 1) / 9) * 100}%, hsl(220 15% 18%) ${((veneerCases - 1) / 9) * 100}%)` }} />
                <div className="mt-1.5 flex justify-between text-xs text-muted-foreground">
                  <span>1 {t("roi_calculator.case_singular")}</span><span>10 {t("roi_calculator.cases_plural")}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="rounded-xl border border-border bg-background p-8">
              <h3 className="mb-6 font-display text-xl font-semibold">{t("roi_calculator.calculation_title")}</h3>
              <div className="space-y-3">
                <div className="rounded-lg border border-border bg-card p-4">
                  <p className="mb-1 text-xs text-muted-foreground">
                    {implantCases} {t("roi_calculator.implant")} {implantCases === 1 ? t("roi_calculator.case_label_singular") : t("roi_calculator.case_label_plural")} x {formatCurrency(implantValue)}
                  </p>
                  <div className="font-display text-2xl font-bold text-gradient-gold">{formatCurrency(implantRevenue)}</div>
                  <p className="mt-0.5 text-xs text-muted-foreground">{t("roi_calculator.additional_monthly")}</p>
                </div>
                <div className="rounded-lg border border-border bg-card p-4">
                  <p className="mb-1 text-xs text-muted-foreground">
                    {veneerCases} {t("roi_calculator.veneer")} {veneerCases === 1 ? t("roi_calculator.case_label_singular") : t("roi_calculator.case_label_plural")} x {formatCurrency(veneerValue)}
                  </p>
                  <div className="font-display text-2xl font-bold text-gradient-gold">{formatCurrency(veneerRevenue)}</div>
                  <p className="mt-0.5 text-xs text-muted-foreground">{t("roi_calculator.additional_monthly")}</p>
                </div>
              </div>
              <div className="mt-5 rounded-xl border border-primary/30 bg-primary/5 p-6 text-center shadow-gold">
                <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-primary">{t("roi_calculator.total_label")}</div>
                <div className="font-display text-4xl font-bold text-gradient-gold">{formatCurrency(totalRevenue)}</div>
                <div className="mt-2 text-xs text-muted-foreground">{t("roi_calculator.impact_note")}</div>
              </div>
            </div>
            <div className="rounded-xl border-l-2 border-l-primary/50 border border-border bg-background px-6 py-5">
              <p className="text-sm leading-relaxed text-muted-foreground">
                <span className="font-display font-semibold text-foreground">{t("roi_calculator.insight_bold")}</span>
                {t("roi_calculator.insight_rest")}
              </p>
            </div>
            <Button variant="hero" size="lg" className="w-full" asChild>
              <Link to={`/${lang}/book`}>
                {t("roi_calculator.cta")}
                <ArrowRight className="ms-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;
