import { CheckCircle2 } from "lucide-react";
import { useTranslation } from "react-i18next";

const CaseStudies = () => {
  const { t, i18n } = useTranslation();
  const isHe = i18n.language === "he";

  if (isHe) {
    return (
      <section className="border-t border-border bg-card/50 py-24">
        <div className="container">
          <div className="mb-16 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm text-primary">
              {t("case_studies.badge")}
            </div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              <span className="text-gradient-gold">{t("case_studies.title_highlight")}</span>
            </h2>
            <p className="mx-auto max-w-xl text-muted-foreground">{t("case_studies.subtitle")}</p>
          </div>
          {/* Single clinic banner */}
          <div className="mx-auto max-w-4xl">
            <div className="rounded-xl border border-primary/30 bg-card/80 p-8 flex items-center gap-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                <CheckCircle2 className="h-6 w-6 text-primary" />
              </div>
              <div>
                <span className="font-display text-lg font-bold text-foreground">{t("case_studies.clinic1_name")}</span>
                <span className="mx-3 text-muted-foreground">—</span>
                <span className="text-muted-foreground">{t("case_studies.clinic1_desc")}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // English version (unchanged)
  const caseStudies = [
    {
      clinic: t("case_studies.clinic1_name"),
      challenge: t("case_studies.clinic1_challenge"),
      result: t("case_studies.clinic1_result"),
      metrics: [
        { label: t("case_studies.clinic1_metric1_label"), value: t("case_studies.clinic1_metric1_value") },
        { label: t("case_studies.clinic1_metric2_label"), value: t("case_studies.clinic1_metric2_value") },
        { label: t("case_studies.clinic1_metric3_label"), value: t("case_studies.clinic1_metric3_value") },
      ],
    },
    {
      clinic: t("case_studies.clinic2_name"),
      challenge: t("case_studies.clinic2_challenge"),
      result: t("case_studies.clinic2_result"),
      metrics: [
        { label: t("case_studies.clinic2_metric1_label"), value: t("case_studies.clinic2_metric1_value") },
        { label: t("case_studies.clinic2_metric2_label"), value: t("case_studies.clinic2_metric2_value") },
        { label: t("case_studies.clinic2_metric3_label"), value: t("case_studies.clinic2_metric3_value") },
      ],
    },
  ];

  return (
    <section className="border-t border-border bg-card/50 py-24">
      <div className="container">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            {t("case_studies.title_prefix")}<span className="text-gradient-gold">{t("case_studies.title_highlight")}</span>
          </h2>
          <p className="mx-auto max-w-xl text-muted-foreground">{t("case_studies.subtitle")}</p>
        </div>
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          {caseStudies.map((cs) => (
            <div key={cs.clinic} className="rounded-xl border border-border bg-card p-8">
              <h3 className="mb-4 font-display text-lg font-semibold text-gradient-gold">{cs.clinic}</h3>
              <div className="mb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{t("case_studies.challenge")}</span>
                <p className="mt-1 text-sm text-muted-foreground">{cs.challenge}</p>
              </div>
              <div className="mb-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{t("case_studies.result")}</span>
                <p className="mt-1 text-sm text-foreground">{cs.result}</p>
              </div>
              <div className="grid grid-cols-3 gap-4 border-t border-border pt-6">
                {cs.metrics.map((m) => (
                  <div key={m.label} className="text-center">
                    <div className="font-display text-xl font-bold text-gradient-gold">{m.value}</div>
                    <div className="mt-1 text-xs text-muted-foreground">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
