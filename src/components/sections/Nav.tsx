import { useTranslation } from "react-i18next";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const Nav = () => {
  const { t } = useTranslation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        <div className="font-display text-xl font-bold">
          <span className="text-gradient-gold">{t("nav.booked")}</span>
          <span className="text-foreground">{t("nav.dental")}</span>
        </div>
        <LanguageSwitcher />
      </div>
    </nav>
  );
};

export default Nav;
