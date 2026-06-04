import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import { useTranslation } from "react-i18next";
import { trackBookingConfirmed } from "@/lib/analytics";
import { Button } from "@/components/ui/button";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import SEO from "@/components/SEO";

const ThankYouPage = () => {
  const { t } = useTranslation();
  const { lang } = useParams();

  useEffect(() => {
    trackBookingConfirmed();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        lang={lang}
        path="/thank-you"
        title="Thank You | Booked.Dental"
        description="Thank you for contacting Booked.Dental."
        noindex
      />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_top,hsl(42_100%_55%/0.06),transparent_55%)]" />
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="container flex h-16 items-center justify-between">
          <Link to={`/${lang}`} className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
            <ArrowLeft className="h-4 w-4" />
            {t("booking.back")}
          </Link>
          <div className="font-display text-xl font-bold">
            <span className="text-gradient-gold">{t("nav.booked")}</span>
            <span className="text-foreground">{t("nav.dental")}</span>
          </div>
          <LanguageSwitcher />
        </div>
      </header>
      <main className="container py-24 relative z-10">
        <div className="mx-auto max-w-lg text-center">
          <div className="mb-6 flex justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full border border-primary/30 bg-primary/10 shadow-gold">
              <CheckCircle2 className="h-10 w-10 text-primary" />
            </div>
          </div>
          <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-5xl">
            <span className="text-gradient-gold">{t("booking.thankyou_title")}</span>
          </h1>
          <p className="mb-8 text-lg text-muted-foreground">
            {t("booking.thankyou_subtitle")}
          </p>
          <Button asChild size="lg" className="bg-gradient-gold text-primary-foreground hover:opacity-90 shadow-gold">
            <Link to={`/${lang}`}>
              {t("booking.return_home")}
            </Link>
          </Button>
        </div>
      </main>
    </div>
  );
};

export default ThankYouPage;
