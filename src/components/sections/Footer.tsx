import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const { lang } = useParams();
  const isHebrew = lang === "he";

  return (
    <footer className="border-t border-border py-8 pb-20 md:pb-8">
      <div className="container flex flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="font-display text-lg font-bold">
          <span className="text-gradient-gold">{t("nav.booked")}</span>
          <span className="text-foreground">{t("nav.dental")}</span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <p className="text-xs text-muted-foreground">{t("footer.tagline")}</p>
          <span className="hidden h-3 w-px bg-border sm:block" />
          <Link to={`/${lang}/services/dental-implant-marketing`} className="text-xs text-muted-foreground transition-colors hover:text-foreground">
            {isHebrew ? "שיווק שתלים" : "Implant marketing"}
          </Link>
          <span className="hidden h-3 w-px bg-border sm:block" />
          <Link to={`/${lang}/services/dental-lead-filtering`} className="text-xs text-muted-foreground transition-colors hover:text-foreground">
            {isHebrew ? "סינון לידים" : "Lead filtering"}
          </Link>
          <span className="hidden h-3 w-px bg-border sm:block" />
          <Link to={`/${lang}/about`} className="text-xs text-muted-foreground transition-colors hover:text-foreground">
            {isHebrew ? "אודות" : "About"}
          </Link>
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
