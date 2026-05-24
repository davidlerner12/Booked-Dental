import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const { lang } = useParams();

  return (
    <footer className="border-t border-border py-8 pb-20 md:pb-8">
      <div className="container flex flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="font-display text-lg font-bold">
          <span className="text-gradient-gold">{t("nav.booked")}</span>
          <span className="text-foreground">{t("nav.dental")}</span>
        </div>
        <div className="flex items-center gap-4">
          <p className="text-xs text-muted-foreground">{t("footer.tagline")}</p>
          <span className="hidden h-3 w-px bg-border sm:block" />
          <Link to={`/${lang}/privacy`} className="text-xs text-muted-foreground transition-colors hover:text-foreground">
            {t("footer.privacy")}
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
