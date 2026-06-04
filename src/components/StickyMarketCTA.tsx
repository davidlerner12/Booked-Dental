import { ArrowRight } from "lucide-react";
import { Link, useLocation, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

const copy = {
  en: {
    label: "One clinic per market",
    button: "Check Your Market",
  },
  he: {
    label: "מרפאה אחת בכל אזור",
    button: "בדקו את האזור",
  },
} as const;

export default function StickyMarketCTA() {
  const { i18n } = useTranslation();
  const { lang } = useParams();
  const location = useLocation();
  const isHebrew = i18n.language === "he";
  const text = isHebrew ? copy.he : copy.en;

  if (location.pathname.includes("/book") || location.pathname.includes("/thank-you")) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/92 px-4 py-3 shadow-2xl backdrop-blur md:hidden">
      <div className="mx-auto flex max-w-md items-center justify-between gap-3">
        <p className="text-xs font-medium text-muted-foreground">{text.label}</p>
        <Link
          to={`/${lang}/book`}
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
        >
          {text.button}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
