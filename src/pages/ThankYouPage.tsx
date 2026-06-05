import { useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle2, ClipboardCheck, ShieldCheck, TrendingUp } from "lucide-react";
import { useTranslation } from "react-i18next";
import { trackBookingConfirmed } from "@/lib/analytics";
import { Button } from "@/components/ui/button";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import SEO from "@/components/SEO";

const THANK_YOU_COPY = {
  en: {
    title: "Your market check is in.",
    subtitle:
      "We received your details. Next, we review whether your market is available and whether the system is likely to fit your clinic.",
    reviewTitle: "What we will review next",
    focusMessages: {
      fullArch: "We will review your market around full-arch implants and All-on-4 demand.",
      veneers: "We will review your market around veneers and cosmetic dentistry demand.",
      both: "We will review your market around implant, veneer, and cosmetic dentistry demand.",
      other: "We will review your market around the high-value treatments you selected.",
      unknown: "We will review your local market and treatment-fit details.",
    },
    scoreStrong: "The initial details point to a strong fit for review.",
    scoreMedium: "We will review the fit and identify where a cleaner measurement process may be needed.",
    scoreLow: "We will review the details carefully and come back with a clearer picture.",
    nextStepsTitle: "What happens from here",
    nextSteps: [
      "Market availability is checked first because we work with one clinic per local market.",
      "We look for signs that your clinic can turn filtered opportunities into real consultations.",
      "If there is a fit, the next conversation is about patient acquisition strategy, lead filtering, and ROI measurement.",
    ],
    proofTitle: "While we review it",
    proofBody:
      "The core idea is simple: campaign feedback should come from qualified opportunities and booked treatment potential, not cheap clicks or raw form volume.",
    proofLink: "View proof examples",
    roiLink: "See the ROI calculator",
    homeLink: "Return home",
  },
  he: {
    title: "בדיקת השוק התקבלה.",
    subtitle: "קיבלנו את הפרטים. עכשיו נבדוק אם האזור פנוי ואם המערכת מתאימה למרפאה שלכם.",
    reviewTitle: "מה נבדוק עכשיו",
    focusMessages: {
      fullArch: "נבדוק את האזור שלכם סביב ביקוש לשיקום מלא ו-All-on-4.",
      veneers: "נבדוק את האזור שלכם סביב ביקוש לציפויים ואסתטיקה דנטלית.",
      both: "נבדוק את האזור שלכם סביב שתלים, ציפויים ואסתטיקה דנטלית.",
      other: "נבדוק את האזור שלכם סביב הטיפולים בעלי הערך הגבוה שציינתם.",
      unknown: "נבדוק את השוק המקומי ואת התאמת תחומי הטיפול.",
    },
    scoreStrong: "הפרטים הראשוניים מצביעים על התאמה חזקה לבדיקה.",
    scoreMedium: "נבדוק את ההתאמה ונזהה איפה צריך תהליך מדידה מסודר יותר.",
    scoreLow: "נבדוק את הפרטים בזהירות ונחזור עם תמונה ברורה יותר.",
    nextStepsTitle: "מה קורה מכאן",
    nextSteps: [
      "בודקים קודם זמינות אזור, כי אנחנו עובדים עם מרפאה אחת בלבד בכל שוק מקומי.",
      "בודקים אם המרפאה יכולה להפוך הזדמנויות מסוננות לפגישות ייעוץ אמיתיות.",
      "אם יש התאמה, השיחה הבאה עוסקת באסטרטגיית גיוס מטופלים, סינון פניות ומדידת ROI.",
    ],
    proofTitle: "בזמן שאנחנו בודקים",
    proofBody:
      "הרעיון המרכזי פשוט: הקמפיין צריך ללמוד מהזדמנויות איכותיות ומפוטנציאל טיפול אמיתי, לא מקליקים זולים או נפח טפסים גולמי.",
    proofLink: "ראו דוגמאות הוכחה",
    roiLink: "ראו את מחשבון ה-ROI",
    homeLink: "חזרה לעמוד הבית",
  },
} as const;

const ThankYouPage = () => {
  const { t } = useTranslation();
  const { lang } = useParams();
  const location = useLocation();
  const pageLang = lang === "he" ? "he" : "en";
  const isHebrew = pageLang === "he";
  const copy = isHebrew ? THANK_YOU_COPY.he : THANK_YOU_COPY.en;
  const searchParams = new URLSearchParams(location.search);
  const focus = searchParams.get("focus") || "unknown";
  const fit = Number(searchParams.get("fit") || "0");
  const focusMessage = copy.focusMessages[focus as keyof typeof copy.focusMessages] || copy.focusMessages.unknown;
  const scoreCopy = fit >= 75 ? copy.scoreStrong : fit >= 45 ? copy.scoreMedium : copy.scoreLow;

  useEffect(() => {
    trackBookingConfirmed();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        lang={pageLang}
        path="/thank-you"
        title={isHebrew ? "תודה | Booked.Dental" : "Thank You | Booked.Dental"}
        description={isHebrew ? "תודה שפניתם אל Booked.Dental." : "Thank you for contacting Booked.Dental."}
        noindex
      />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_top,hsl(42_100%_55%/0.06),transparent_55%)]" />
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="container flex h-16 items-center justify-between">
          <Link to={`/${pageLang}`} className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
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
      <main className="container relative z-10 py-20">
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <section className="text-center lg:text-start">
            <div className="mb-6 flex justify-center lg:justify-start">
              <div className="flex h-20 w-20 items-center justify-center rounded-full border border-primary/30 bg-primary/10 shadow-gold">
                <CheckCircle2 className="h-10 w-10 text-primary" />
              </div>
            </div>
            <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-5xl">
              <span className="text-gradient-gold">{copy.title}</span>
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground">{copy.subtitle}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:justify-start">
              <Button asChild size="lg" className="bg-gradient-gold text-primary-foreground shadow-gold hover:opacity-90">
                <Link to={`/${pageLang}/proof`}>
                  {copy.proofLink}
                  <ArrowRight className="ms-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to={`/${pageLang}`}>
                  {copy.homeLink}
                </Link>
              </Button>
            </div>
          </section>

          <section className="space-y-5">
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6">
              <div className="mb-3 flex items-center gap-2 text-primary">
                <ClipboardCheck className="h-5 w-5" />
                <h2 className="font-display text-xl font-semibold text-foreground">{copy.reviewTitle}</h2>
              </div>
              <div className="space-y-2 text-sm leading-relaxed text-muted-foreground">
                <p>{focusMessage}</p>
                {fit > 0 && <p>{scoreCopy}</p>}
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card/60 p-6 backdrop-blur-sm">
              <div className="mb-4 flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-primary" />
                <h2 className="font-display text-xl font-semibold">{copy.nextStepsTitle}</h2>
              </div>
              <ul className="space-y-3">
                {copy.nextSteps.map((step) => (
                  <li key={step} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-card/60 p-6 backdrop-blur-sm">
              <div className="mb-3 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                <h2 className="font-display text-xl font-semibold">{copy.proofTitle}</h2>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">{copy.proofBody}</p>
              <Link to={`/${pageLang}#roi`} className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary underline-offset-4 hover:underline">
                {copy.roiLink}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default ThankYouPage;
