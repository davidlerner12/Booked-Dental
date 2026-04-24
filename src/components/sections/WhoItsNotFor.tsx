import { XCircle, Ban } from "lucide-react";
import { useTranslation } from "react-i18next";

const WhoItsNotFor = () => {
  const { t, i18n } = useTranslation();

  // In Hebrew, this section is merged into WhoItsFor component
  if (i18n.language === "he") return null;

  const bullets = [t("who_its_not_for.bullet1"), t("who_its_not_for.bullet2"), t("who_its_not_for.bullet3"), t("who_its_not_for.bullet4")];

  return (
    <section className="relative border-b border-border py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,hsl(0_0%_50%/0.04),transparent_60%)]" />
      <div className="container relative z-10">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-border bg-muted/50">
              <Ban className="h-7 w-7 text-muted-foreground" />
            </div>
            <div>
              <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-1 text-sm text-muted-foreground">
                {t("who_its_not_for.badge")}
              </div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                {t("who_its_not_for.title_prefix")}<span className="text-muted-foreground">{t("who_its_not_for.title_highlight")}</span>
              </h2>
            </div>
          </div>
          <p className="mb-10 text-lg text-muted-foreground max-w-2xl">{t("who_its_not_for.subtitle")}</p>
          <div className="grid gap-4 sm:grid-cols-2">
            {bullets.map((bullet) => (
              <div key={bullet} className="flex items-start gap-4 rounded-xl border border-border bg-muted/20 px-6 py-5">
                <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-destructive/70" />
                <p className="text-sm leading-relaxed text-muted-foreground">{bullet}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoItsNotFor;
