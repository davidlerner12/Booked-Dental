import { useTranslation } from "react-i18next";

const HowItWorks = () => {
  const { t } = useTranslation();
  const steps = [
    { number: "01", title: t("how_it_works.step1_title"), description: t("how_it_works.step1_desc") },
    { number: "02", title: t("how_it_works.step2_title"), description: t("how_it_works.step2_desc") },
    { number: "03", title: t("how_it_works.step3_title"), description: t("how_it_works.step3_desc") },
  ];

  return (
    <section id="how" className="py-24">
      <div className="container">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            {t("how_it_works.title_prefix")}<span className="text-gradient-gold">{t("how_it_works.title_highlight")}</span>
          </h2>
        </div>
        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <div className="mb-4 font-display text-5xl font-bold text-primary/20">{step.number}</div>
              <h3 className="mb-2 font-display text-xl font-semibold">{step.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
