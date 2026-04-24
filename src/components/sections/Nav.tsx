import { ArrowRight } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const Nav = () => {
  const { t, i18n } = useTranslation();
  const { lang } = useParams();
  const isHe = i18n.language === "he";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        <div className="font-display text-xl font-bold">
          <span className="text-gradient-gold">{t("nav.booked")}</span>
          <span className="text-foreground">{t("nav.dental")}</span>
        </div>
        {isHe ? (
          <Link
            to={`/${lang}/book`}
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-gold px-5 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            {t("nav.cta_button")}
          </Link>
        ) : (
          <LanguageSwitcher />
        )}
      </div>
    </nav>
  );
};

export default Nav;
