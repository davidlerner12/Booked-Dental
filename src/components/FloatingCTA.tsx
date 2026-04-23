import { Link, useParams } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const FloatingCTA = () => {
  const { t } = useTranslation();
  const { lang } = useParams();

  return (
    <>
      <div className="fixed bottom-6 end-6 z-50 hidden md:block">
        <Link
          to={`/${lang}/book`}
          className="flex items-center gap-3 rounded-xl border border-white/10 bg-background/10 px-6 py-4 shadow-gold backdrop-blur-sm transition-colors hover:border-primary/40"
        >
          <div>
            <div className="font-display text-md font-semibold text-foreground">{t("floating_cta.title")}</div>
            <div className="text-sm text-muted-foreground">{t("floating_cta.subtitle")}</div>
          </div>
          <ArrowRight className="h-4 w-4 shrink-0 text-primary" />
        </Link>
      </div>
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/40 bg-background/10 backdrop-blur-sm md:hidden">
        <div className="flex items-center justify-between gap-3 py-3 px-2">
          <div className="min-w-0">
            <div className="font-display text-sm font-semibold text-foreground">{t("floating_cta.title")}</div>
            <div className="text-xs text-muted-foreground">{t("floating_cta.subtitle")}</div>
          </div>
          <Link
            to={`/${lang}/book`}
            className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-gradient-gold px-4 py-2.5 text-sm font-semibold text-primary-foreground"
          >
            {t("floating_cta.button")}
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default FloatingCTA;
