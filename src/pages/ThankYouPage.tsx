import { useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { Head } from "vite-react-ssg";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import { useTranslation } from "react-i18next";
import { trackBookingConfirmed } from "@/lib/analytics";
import { Button } from "@/components/ui/button";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import SEO from "@/components/SEO";

const ThankYouPage = () => {
  const { t } = useTranslation();
  const { lang } = useParams();
  const location = useLocation();
  const isHebrew = lang === "he";
  const searchParams = new URLSearchParams(location.search);
  const focus = searchParams.get("focus") || "";
  const fit = Number(searchParams.get("fit") || "0");
  const focusCopy = isHebrew
    ? {
        fullArch: "נבדוק את האזור שלכם סביב שיקום מלא ו-All-on-4.",
        veneers: "נבדוק את האזור שלכם סביב ציפויים ואסתטיקה דנטלית.",
        both: "נבדוק את האזור שלכם סביב שתלים, ציפויים ואסתטיקה דנטלית.",
        other: "נבדוק את האזור שלכם סביב הטיפולים בעלי הערך הגבוה שציינתם.",
      }
    : {
        fullArch: "We will review your market around full-arch implants and All-on-4 demand.",
        veneers: "We will review your market around veneers and cosmetic dentistry demand.",
        both: "We will review your market around implant, veneer, and cosmetic dentistry demand.",
        other: "We will review your market around the high-value treatments you selected.",
      };
  const scoreCopy = isHebrew
    ? fit >= 75
      ? "הפרטים הראשוניים מצביעים על התאמה חזקה לבדיקה."
      : fit >= 45
        ? "נבדוק את ההתאמה ונראה איפה צריך תהליך מדידה מסודר יותר."
        : "נבדוק את הפרטים בזהירות ונחזור עם תמונה ברורה יותר."
    : fit >= 75
      ? "The initial details point to a strong fit for review."
      : fit >= 45
        ? "We will review the fit and identify where a cleaner measurement process may be needed."
        : "We will review the details carefully and come back with a clearer picture.";
  const focusMessage = focusCopy[focus as keyof typeof focusCopy] || "";

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
      <Head>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            if (!window.sessionStorage || !window.sessionStorage.getItem('bookedDentalLeadConversionSent')) {
              try { window.sessionStorage && window.sessionStorage.setItem('bookedDentalLeadConversionSent', 'true'); } catch (error) {}
              gtag('event', 'conversion', {'send_to': 'AW-18212559239/ksECCPr16LgcEIeztuxD'});
            }
          `}
        </script>
      </Head>
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
          {(focusMessage || fit > 0) && (
            <div className="mb-8 rounded-xl border border-primary/20 bg-primary/5 p-5 text-start">
              <h2 className="font-display text-lg font-semibold">
                {isHebrew ? "מה נבדוק עכשיו" : "What we will review next"}
              </h2>
              <div className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
                {focusMessage && <p>{focusMessage}</p>}
                {fit > 0 && <p>{scoreCopy}</p>}
              </div>
            </div>
          )}
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
