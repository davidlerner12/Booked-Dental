import { useEffect, useMemo, useState } from "react";
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
    qualifierTitle: "Help us check fit faster",
    treatmentLabel: "Main growth focus",
    treatmentPlaceholder: "Select one",
    treatmentOptions: {
      fullArch: "Full-arch implants / All-on-4",
      veneers: "Veneers / cosmetic dentistry",
      both: "Both implant and cosmetic cases",
      other: "Other high-value dentistry",
    },
    capacityLabel: "Monthly capacity for new high-value cases",
    capacityPlaceholder: "Select capacity",
    capacityOptions: {
      oneToTwo: "1-2 cases",
      threeToFive: "3-5 cases",
      sixPlus: "6+ cases",
    },
    trackingLabel: "Can your team give feedback on lead quality?",
    trackingPlaceholder: "Select one",
    trackingOptions: {
      yes: "Yes, we can track qualified vs unqualified leads",
      partly: "Partly, but we need a cleaner process",
      no: "Not yet",
    },
    fitScoreLabel: "Fit score",
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
    proofTitle: "מה קורה אחרי שמשאירים פרטים",
    proofItems: [
      "בודקים אם האזור שלכם עדיין פנוי.",
      "בודקים אם המרפאה מתאימה למערכת גיוס מטופלים לשתלים או אסתטיקה.",
      "אם יש התאמה, ממפים את הדרך המהירה ביותר לפניות מסוננות ואיכותיות יותר.",
    ],
    fitTitle: "מיועד למרפאות שרוצות איכות, לא נפח.",
    fitBody:
      "המטרה היא לא עוד טפסים זולים. המטרה היא לזהות אילו מתעניינים נראים כמו מטופלים עתידיים אמיתיים, ואז להשתמש בפידבק הזה כדי לעזור לקמפיינים למצוא מטופלים במקום קליקים.",
    qualifierTitle: "עזרו לנו לבדוק התאמה מהר יותר",
    treatmentLabel: "תחום הצמיחה המרכזי",
    treatmentPlaceholder: "בחרו אפשרות",
    treatmentOptions: {
      fullArch: "שיקום מלא / All-on-4",
      veneers: "ציפויים / אסתטיקה דנטלית",
      both: "גם שתלים וגם אסתטיקה",
      other: "טיפולים דנטליים בעלי ערך גבוה",
    },
    capacityLabel: "קיבולת חודשית למקרים חדשים בעלי ערך גבוה",
    capacityPlaceholder: "בחרו קיבולת",
    capacityOptions: {
      oneToTwo: "1-2 מקרים",
      threeToFive: "3-5 מקרים",
      sixPlus: "6+ מקרים",
    },
    trackingLabel: "האם הצוות יכול לתת פידבק על איכות הפניות?",
    trackingPlaceholder: "בחרו אפשרות",
    trackingOptions: {
      yes: "כן, אפשר למדוד פניות מתאימות ולא מתאימות",
      partly: "חלקית, אבל צריך תהליך מסודר יותר",
      no: "עדיין לא",
    },
    fitScoreLabel: "ציון התאמה",
    faq: [
      {
        q: "האם זו בקשה לשיחת מכירה?",
        a: "לא. הטופס מתחיל בבדיקת אזור והתאמה. Booked.Dental עובדת עם מרפאה אחת בלבד בכל אזור, ולכן זמינות האזור חשובה לפני הכול.",
      },
      {
        q: "איזו מרפאה מתאימה למערכת?",
        a: "ההתאמה הטובה ביותר היא מרפאת שתלים או אסתטיקה עם קיבולת לעוד טיפולים בעלי ערך גבוה, וצוות שמוכן למדוד איכות פניות, כוונת מטופל ו-ROI.",
      },
      {
        q: "למה צריך לציין עיר?",
        a: "בלעדיות אזורית היא חלק מההצעה. אנחנו צריכים את העיר או האזור כדי לוודא שמרפאה אחרת לא כבר תפסה את האזור הזה.",
      },
    ],
  },
} as const;

type TreatmentFocus = "fullArch" | "veneers" | "both" | "other" | "";
type CaseCapacity = "oneToTwo" | "threeToFive" | "sixPlus" | "";
type TrackingReadiness = "yes" | "partly" | "no" | "";

function calculateFitScore(
  treatmentFocus: TreatmentFocus,
  caseCapacity: CaseCapacity,
  trackingReadiness: TrackingReadiness,
) {
  let score = 0;
  if (treatmentFocus === "fullArch" || treatmentFocus === "veneers") score += 25;
  if (treatmentFocus === "both") score += 30;
  if (treatmentFocus === "other") score += 12;
  if (caseCapacity === "oneToTwo") score += 15;
  if (caseCapacity === "threeToFive") score += 25;
  if (caseCapacity === "sixPlus") score += 30;
  if (trackingReadiness === "yes") score += 30;
  if (trackingReadiness === "partly") score += 18;
  return String(score);
}

const BookingPage = () => {
  const { t } = useTranslation();
  const { lang } = useParams();
  const pageLang = lang === "he" ? "he" : "en";
  const location = useLocation();
  const isMarketCheck = location.state?.source === "market-check";
  const isHebrew = pageLang === "he";
  const copy = isHebrew ? BOOKING_COPY.he : BOOKING_COPY.en;
  const [treatmentFocus, setTreatmentFocus] = useState<TreatmentFocus>("");
  const [caseCapacity, setCaseCapacity] = useState<CaseCapacity>("");
  const [trackingReadiness, setTrackingReadiness] = useState<TrackingReadiness>("");
  const fitScore = useMemo(
    () => calculateFitScore(treatmentFocus, caseCapacity, trackingReadiness),
    [caseCapacity, trackingReadiness, treatmentFocus],
  );
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
  const redirectUrl = `${redirectOrigin}/${lang}/thank-you?focus=${encodeURIComponent(treatmentFocus || "unknown")}&fit=${encodeURIComponent(fitScore)}`;
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    const formData = new FormData(event.currentTarget);
    trackMarketCheckFormSubmitted(
      String(formData.get("city") || ""),
      String(formData.get("email") || ""),
      fitScore,
      treatmentFocus,
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
            ? "בדקו אם האזור שלכם פנוי למערכת גיוס מטופלים בלעדית שמסננת פניות ומלמדת את ה-AI למצוא מטופלים, לא קליקים."
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
              <input type="hidden" name="fit_score" value={fitScore} />

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

              <div className="rounded-xl border border-primary/20 bg-primary/5 p-4">
                <h2 className="mb-4 font-display text-lg font-semibold">{copy.qualifierTitle}</h2>
                <div className="grid gap-4">
                  <div className="space-y-2 text-start">
                    <Label htmlFor="treatment_focus">{copy.treatmentLabel}</Label>
                    <select
                      id="treatment_focus"
                      name="treatment_focus"
                      required
                      value={treatmentFocus}
                      onChange={(event) => setTreatmentFocus(event.target.value as TreatmentFocus)}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="">{copy.treatmentPlaceholder}</option>
                      <option value="fullArch">{copy.treatmentOptions.fullArch}</option>
                      <option value="veneers">{copy.treatmentOptions.veneers}</option>
                      <option value="both">{copy.treatmentOptions.both}</option>
                      <option value="other">{copy.treatmentOptions.other}</option>
                    </select>
                  </div>

                  <div className="space-y-2 text-start">
                    <Label htmlFor="monthly_case_capacity">{copy.capacityLabel}</Label>
                    <select
                      id="monthly_case_capacity"
                      name="monthly_case_capacity"
                      required
                      value={caseCapacity}
                      onChange={(event) => setCaseCapacity(event.target.value as CaseCapacity)}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="">{copy.capacityPlaceholder}</option>
                      <option value="oneToTwo">{copy.capacityOptions.oneToTwo}</option>
                      <option value="threeToFive">{copy.capacityOptions.threeToFive}</option>
                      <option value="sixPlus">{copy.capacityOptions.sixPlus}</option>
                    </select>
                  </div>

                  <div className="space-y-2 text-start">
                    <Label htmlFor="tracking_readiness">{copy.trackingLabel}</Label>
                    <select
                      id="tracking_readiness"
                      name="tracking_readiness"
                      required
                      value={trackingReadiness}
                      onChange={(event) => setTrackingReadiness(event.target.value as TrackingReadiness)}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="">{copy.trackingPlaceholder}</option>
                      <option value="yes">{copy.trackingOptions.yes}</option>
                      <option value="partly">{copy.trackingOptions.partly}</option>
                      <option value="no">{copy.trackingOptions.no}</option>
                    </select>
                  </div>
                </div>
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
