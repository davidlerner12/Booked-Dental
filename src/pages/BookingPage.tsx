import { useEffect } from "react";
import type { FormEvent } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { ArrowLeft, CheckCircle2, Clock, MapPin, SearchCheck, Shield, Users } from "lucide-react";
import { useTranslation } from "react-i18next";
import { trackMarketCheckFormSubmitted, trackMarketCheckStarted } from "@/lib/analytics";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const BOOKING_COPY = {
  en: {
    proofTitle: "What happens after you submit",
    proofItems: [
      "We check whether your market is still open.",
      "We review whether your clinic is a fit for implant or cosmetic patient acquisition.",
      "If there is a match, we map the fastest path to filtered patient opportunities.",
    ],
    fitTitle: "This is for clinics that want quality over volume.",
    fitBody:
      "The goal is not more cheap forms. The goal is to identify which prospects look like real future patients, then use that feedback to help campaigns find customers instead of clicks.",
    faq: [
      {
        q: "Is this a sales call request?",
        a: "No. The form starts with a market and fit check. Booked.Dental works with one clinic per local market, so availability matters before anything else.",
      },
      {
        q: "What makes a clinic a good fit?",
        a: "The best fit is an implant or cosmetic clinic with capacity for more high-value treatment plans and a team willing to track lead quality, patient intent, and ROI.",
      },
      {
        q: "Why do you ask for the city?",
        a: "Market exclusivity is part of the offer. We need the city or local market to confirm whether another clinic has already taken that area.",
      },
    ],
  },
  he: {
    proofTitle: "מה קורה אחרי השארת הפרטים",
    proofItems: [
      "אנחנו בודקים אם האזור שלכם עדיין פתוח.",
      "אנחנו בודקים אם המרפאה מתאימה למערכת גיוס מטופלים לשתלים או אסתטיקה.",
      "אם יש התאמה, נבנה את הדרך המהירה ביותר להזדמנויות מטופלים מסוננות.",
    ],
    fitTitle: "זה מיועד למרפאות שרוצות איכות, לא נפח.",
    fitBody:
      "המטרה היא לא עוד טפסים זולים. המטרה היא לזהות אילו מתעניינים נראים כמו מטופלים עתידיים אמיתיים, ואז להשתמש בפידבק הזה כדי לעזור לקמפיינים למצוא לקוחות במקום קליקים.",
    faq: [
      {
        q: "האם זו בקשה לשיחת מכירה?",
        a: "לא. הטופס מתחיל בבדיקת אזור והתאמה. Booked.Dental עובדת עם מרפאה אחת בלבד בכל אזור, ולכן זמינות האזור חשובה לפני הכול.",
      },
      {
        q: "איזו מרפאה מתאימה למערכת?",
        a: "ההתאמה הטובה ביותר היא מרפאת שתלים או אסתטיקה עם קיבולת לעוד תוכניות טיפול בעלות ערך גבוה, וצוות שמוכן למדוד איכות לידים, כוונת מטופל ו-ROI.",
      },
      {
        q: "למה צריך לציין עיר?",
        a: "בלעדיות אזורית היא חלק מההצעה. אנחנו צריכים את העיר או האזור כדי לוודא שמרפאה אחרת לא כבר תפסה את השוק הזה.",
      },
    ],
  },
} as const;

const BookingPage = () => {
  const { t } = useTranslation();
  const { lang } = useParams();
  const pageLang = lang === "he" ? "he" : "en";
  const location = useLocation();
  const isMarketCheck = location.state?.source === "market-check";
  const isHebrew = pageLang === "he";
  const copy = isHebrew ? BOOKING_COPY.he : BOOKING_COPY.en;
  const bookingUrl = `https://www.booked.dental/${pageLang}/book`;
  const bookingStructuredData = [
    {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      name: isHebrew
        ? "בדיקת זמינות אזור למרפאת שיניים"
        : "Dental marketing territory availability check",
      url: bookingUrl,
      inLanguage: isHebrew ? "he" : "en-US",
      about: {
        "@type": "Service",
        name: "Dental patient acquisition for implant and cosmetic clinics",
        provider: {
          "@type": "Organization",
          name: "Booked.Dental",
          url: "https://www.booked.dental",
        },
      },
      potentialAction: {
        "@type": "ContactAction",
        target: bookingUrl,
        name: isHebrew ? "בדקו זמינות אזור" : "Check territory availability",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      inLanguage: isHebrew ? "he" : "en-US",
      mainEntity: copy.faq.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.a,
        },
      })),
    },
  ];

  useEffect(() => {
    trackMarketCheckStarted(location.pathname);
  }, [location.pathname]);

  const redirectOrigin = typeof window === "undefined" ? "https://www.booked.dental" : window.location.origin;
  const redirectUrl = `${redirectOrigin}/${lang}/thank-you`;
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    const formData = new FormData(event.currentTarget);
    trackMarketCheckFormSubmitted(
      String(formData.get("city") || ""),
      String(formData.get("email") || ""),
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        lang={pageLang}
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
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <aside className="relative z-10 space-y-5">
            <div className="rounded-2xl border border-border bg-card/60 p-6 backdrop-blur-sm">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <SearchCheck className="h-5 w-5" />
              </div>
              <h2 className="font-display text-2xl font-semibold">{copy.proofTitle}</h2>
              <ul className="mt-5 space-y-4">
                {copy.proofItems.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6">
              <h2 className="font-display text-xl font-semibold">{copy.fitTitle}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{copy.fitBody}</p>
            </div>
          </aside>

          <div className="rounded-2xl border border-border bg-card/60 p-8 shadow-gold relative z-10 backdrop-blur-sm">
            <form action="https://formsubmit.co/David@Booked.Dental" method="POST" className="space-y-6" onSubmit={handleSubmit}>
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
