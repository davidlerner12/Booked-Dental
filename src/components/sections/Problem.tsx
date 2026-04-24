import { CheckCircle2 } from "lucide-react";
import { useTranslation } from "react-i18next";

const Problem = () => {
  const { t, i18n } = useTranslation();
  const isHe = i18n.language === "he";

  if (isHe) {
    return (
      <section className="py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">
              {t("problem.title_line1")}
              <span className="text-gradient-gold">{t("problem.title_highlight")}</span>
            </h2>
            <p className="mb-6 text-lg text-muted-foreground">{t("problem.description")}</p>
            <p className="mb-10 text-lg font-semibold text-primary">
              {t("problem.highlight_text")}
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              {/* Trap 1 */}
              <div className="rounded-xl border border-border bg-card p-8 text-center">
                <div className="mb-4 text-4xl">{t("problem.trap1_icon")}</div>
                <h3 className="mb-3 font-display text-lg font-bold text-foreground">
                  {t("problem.trap1_title")}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {t("problem.trap1_desc")}
                </p>
              </div>
              {/* Trap 2 */}
              <div className="rounded-xl border border-border bg-card p-8 text-center">
                <div className="mb-4 text-4xl">{t("problem.trap2_icon")}</div>
                <h3 className="mb-3 font-display text-lg font-bold text-foreground">
                  {t("problem.trap2_title")}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {t("problem.trap2_desc")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // English version (unchanged)
  const bullets = [t("problem.bullet1"), t("problem.bullet2"), t("problem.bullet3")];

  return (
    <section className="py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">
            {t("problem.title_line1")}
            <span className="text-gradient-gold">{t("problem.title_highlight")}</span>
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">{t("problem.description")}</p>
          <div className="grid gap-4 text-start sm:grid-cols-3">
            {bullets.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-lg border border-border bg-card p-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
