import { useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { ArrowLeft, Shield, Clock, Users, MapPin, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";
import { trackBookingCTA } from "@/lib/analytics";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const BookingPage = () => {
  const { t, i18n } = useTranslation();
  const { lang } = useParams();
  const location = useLocation();
  const isMarketCheck = location.state?.source === "market-check";
  const isHebrew = i18n.language === "he";
  const bookingStructuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: isHebrew
      ? "בדיקת זמינות אזור למרפאת שיניים"
      : "Dental marketing territory availability check",
    url: `https://booked.dental/${lang === "he" ? "he" : "en"}/book`,
    inLanguage: isHebrew ? "he" : "en-US",
    about: {
      "@type": "Service",
      name: "Dental patient acquisition for implant and cosmetic clinics",
      provider: {
        "@type": "Organization",
        name: "Booked.Dental",
        url: "https://booked.dental",
      },
    },
    potentialAction: {
      "@type": "ContactAction",
      target: `https://booked.dental/${lang === "he" ? "he" : "en"}/book`,
      name: isHebrew ? "בדקו זמינות אזור" : "Check territory availability",
    },
  };

  useEffect(() => {
    trackBookingCTA();
  }, []);

  // Formsubmit requires full URL for redirect
  const redirectUrl = `${window.location.origin}/${lang}/thank-you`;

  return (
    <div className="min-h-screen bg-background">
      <SEO
        lang={lang}
        path="/book"
        title={
          isHebrew
            ? "בדיקת זמינות אזור למרפאת שיניים | Booked.Dental"
            : "Check Your Dental Marketing Territory | Booked.Dental"
        }
        description={
          isHebrew
            ? "בדקו אם האזור שלכם פנוי למערכת גיוס מטופלים בלעדית שמסננת לידים ומלמדת את ה-AI למצוא לקוחות, לא קליקים."
            : "Check whether your market is available for an exclusive patient acquisition system that filters leads and teaches AI to find customers, not clicks."
        }
        structuredData={bookingStructuredData}
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
      <main className="container py-14">
        <div className="mx-auto mb-12 max-w-2xl text-center relative z-10">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm text-primary">
            {isMarketCheck ? <MapPin className="h-4 w-4" /> : <Clock className="h-4 w-4" />}
            {t("booking.badge_market")}
          </div>
          <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            {t("booking.title_prefix")}<span className="text-gradient-gold">{t("booking.title_highlight")}</span>
          </h1>
          <p className="text-muted-foreground mb-6">{t("booking.subtitle")}</p>
          
          <div className="inline-flex items-center gap-2 text-lg font-medium text-foreground bg-secondary/50 px-6 py-3 rounded-full border border-border shadow-sm">
            <Phone className="h-5 w-5 text-primary" />
            {t("booking.prefer_to_call")} <a href="tel:0546790378" className="text-gradient-gold hover:underline" dir="ltr">0546790378</a>
          </div>
        </div>

        <div className="mx-auto max-w-xl rounded-2xl border border-border bg-card/60 p-8 shadow-gold relative z-10 backdrop-blur-sm">
          {/* Use formsubmit.co for no-backend email sending. Change action URL to your actual email. */}
          <form action="https://formsubmit.co/David@Booked.Dental" method="POST" className="space-y-6">
            <input type="hidden" name="_next" value={redirectUrl} />
            <input type="hidden" name="_subject" value="New Market Check Submission!" />
            <input type="hidden" name="_captcha" value="false" />
            
            <div className="space-y-2 text-start">
              <Label htmlFor="name">{t("booking.form_name_label")}</Label>
              <Input id="name" name="name" required placeholder={t("booking.form_name_placeholder")} className="bg-background" />
            </div>
            
            <div className="space-y-2 text-start">
              <Label htmlFor="email">{t("booking.form_email_label")}</Label>
              <Input id="email" name="email" type="email" required placeholder={t("booking.form_email_placeholder")} className="bg-background" />
            </div>
            
            <div className="space-y-2 text-start">
              <Label htmlFor="phone">{t("booking.form_phone_label")}</Label>
              <Input id="phone" name="phone" type="tel" required placeholder={t("booking.form_phone_placeholder")} className="bg-background" dir="ltr" />
            </div>
            
            <div className="space-y-2 text-start">
              <Label htmlFor="city">{t("booking.form_city_label")}</Label>
              <Input id="city" name="city" required placeholder={t("booking.form_city_placeholder")} className="bg-background" />
            </div>

            <Button type="submit" size="lg" className="w-full bg-gradient-gold text-primary-foreground hover:opacity-90 shadow-gold mt-4">
              {t("booking.form_submit")}
            </Button>
          </form>
        </div>

        <div className="mx-auto mt-10 flex max-w-2xl flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8 relative z-10">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Shield className="h-4 w-4 text-primary" />
            {t("booking.trust_no_contracts")}
          </div>
          <div className="hidden h-4 w-px bg-border sm:block" />
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Users className="h-4 w-4 text-primary" />
            {t("booking.trust_one_clinic")}
          </div>
        </div>
      </main>
    </div>
  );
};

export default BookingPage;
