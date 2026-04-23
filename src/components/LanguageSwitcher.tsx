import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom";
import { Globe } from "lucide-react";

export default function LanguageSwitcher() {
  const { i18n, t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const currentLang = i18n.language;
  const nextLang = currentLang === "he" ? "en" : "he";

  const handleSwitch = () => {
    // Strip current lang prefix from path
    const pathWithoutLang = location.pathname.replace(/^\/(en|he)/, "") || "/";
    i18n.changeLanguage(nextLang);
    navigate(`/${nextLang}${pathWithoutLang === "/" ? "" : pathWithoutLang}${location.search}`);
  };

  return (
    <button
      onClick={handleSwitch}
      className="flex items-center gap-1.5 rounded-full border border-border bg-card/80 px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
      aria-label={`Switch to ${t(`language_switcher.${nextLang}`)}`}
    >
      <Globe className="h-3.5 w-3.5" />
      {t(`language_switcher.${nextLang}`)}
    </button>
  );
}
