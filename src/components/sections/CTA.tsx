import { ArrowRight, Users } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

const CTA = () => {
  const { t } = useTranslation();
  const { lang } = useParams();
  const isHebrew = lang === "he";
  const proofItems = isHebrew
    ? [
        { value: "38x", label: "ROI ממוצע מעוגל בדוגמת קמפיין" },
        { value: "7 ימים", label: "זמן טיפוסי להזדמנות ראשונה" },
        { value: "1", label: "מרפאה אחת בכל אזור" },
      ]
    : [
        { value: "38x", label: "Rounded average ROI example" },
        { value: "7 days", label: "Typical time to first opportunity" },
        { value: "1", label: "Clinic per market" },
      ];
  const objectionItems = isHebrew
    ? [
        "בלי חוזה ארוך טווח",
        "מרפאה אחת בלבד בכל אזור",
        "בודקים איכות פניות לפני שמתחייבים",
        "בנוי לשתלים, Full-Arch, ציפויים ואסתטיקה",
      ]
    : [
        "No long-term contract",
        "One clinic per local market",
        "See lead quality before committing",
        "Built for implants, full-arch, veneers, and cosmetics",
      ];
  return (
    <section id="cta" className="relative border-t border-border py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(42_100%_55%/0.08),transparent_60%)]" />
      <div className="container relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <Users className="mx-auto mb-6 h-12 w-12 text-primary" />
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            {t("cta.title_prefix")}<span className="text-gradient-gold">{t("cta.title_highlight")}</span>
          </h2>
          <p className="mb-8 text-muted-foreground">{t("cta.subtitle")}</p>
          <div className="mb-8 grid gap-3 sm:grid-cols-3">
            {proofItems.map((item) => (
              <div key={item.label} className="rounded-lg border border-primary/20 bg-primary/5 p-4">
                <div className="text-2xl font-bold text-primary">{item.value}</div>
                <div className="mt-1 text-xs leading-snug text-muted-foreground">{item.label}</div>
              </div>
            ))}
          </div>
          <div className="mb-8 grid gap-2 text-start sm:grid-cols-2">
            {objectionItems.map((item) => (
              <div key={item} className="rounded-lg border border-border bg-card px-4 py-3 text-sm text-muted-foreground">
                {item}
              </div>
            ))}
          </div>
          <Button
            variant="hero"
            size="lg"
            asChild
            className="h-auto w-full max-w-full whitespace-normal px-4 py-3 text-center sm:w-auto sm:whitespace-nowrap"
          >
            <Link to={`/${lang}/book`}>
              {t("cta.button")}
              <ArrowRight className="ms-2 h-5 w-5" />
            </Link>
          </Button>
          <p className="mt-4 text-xs text-muted-foreground">{t("cta.footer")}</p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
