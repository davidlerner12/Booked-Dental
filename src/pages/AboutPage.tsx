import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import SEO from "@/components/SEO";

const TRUST_SOURCES = [
  "Hands-on dental patient acquisition campaigns",
  "Meta and Google campaign performance review",
  "Lead filtering and clinic intake feedback",
];

const TRUST_SOURCES_HE = [
  "ניסיון מעשי בקמפיינים לגיוס מטופלים למרפאות שיניים",
  "בדיקת ביצועי קמפיינים ב-Meta וב-Google",
  "פידבק מסינון לידים ותהליך הקליטה במרפאה",
];

export default function AboutPage() {
  const { t, i18n } = useTranslation();
  const { lang } = useParams();
  const isHebrew = i18n.language === "he";
  const sources = isHebrew ? TRUST_SOURCES_HE : TRUST_SOURCES;
  const pageTitle = isHebrew
    ? "אודות צוות Booked.Dental | שיווק דנטלי"
    : "About the Booked.Dental Team | Dental Marketing";
  const pageDescription = isHebrew
    ? "הכירו את צוות Booked.Dental ואת הדרך שבה אנחנו כותבים מדריכי שיווק דנטלי לפי ניסיון, מומחיות ושקיפות."
    : "Meet the Booked.Dental team and learn how our dental marketing guides are written with experience, expertise, and transparency.";
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: pageTitle,
    description: pageDescription,
    url: `https://booked.dental/${lang === "he" ? "he" : "en"}/about`,
    inLanguage: isHebrew ? "he" : "en-US",
    about: {
      "@type": "Organization",
      name: "Booked.Dental",
      url: "https://booked.dental",
      description:
        "Dental patient acquisition team focused on implant and cosmetic clinics, lead filtering, paid ads, and customer-intent measurement.",
    },
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        lang={lang}
        path="/about"
        title={pageTitle}
        description={pageDescription}
        structuredData={structuredData}
      />
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between">
          <Link to={`/${lang}`} className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
            <ArrowLeft className="h-4 w-4" />
            {isHebrew ? "חזרה לאתר" : "Back to site"}
          </Link>
          <Link to={`/${lang}`} className="font-display text-lg font-semibold">
            <span className="text-gradient-gold">{t("nav.booked")}</span>{t("nav.dental")}
          </Link>
          <LanguageSwitcher />
        </div>
      </header>

      <main>
        <section className="border-b border-border py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm text-primary">
                <ShieldCheck className="h-4 w-4" />
                {isHebrew ? "ניסיון, מומחיות ושקיפות" : "Experience, expertise, and transparency"}
              </span>
              <h1 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
                {isHebrew ? "מי כותב את מדריכי השיווק של Booked.Dental" : "Who Writes the Booked.Dental Marketing Guides"}
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                {isHebrew
                  ? "התוכן באתר נכתב עבור בעלי מרפאות שרוצים להבין איך להפוך פרסום לפניות מסוננות ממטופלים. אנחנו מתמקדים בפרסום דנטלי, סינון לידים, קריאייטיב UGC ומדידת כוונת לקוח."
                  : "The content on this site is written for clinic owners who want to understand how to turn ad traffic into filtered patient opportunities. We focus on dental ads, lead filtering, UGC creative, and customer-intent measurement."}
              </p>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="container">
            <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
              <div>
                <h2 className="font-display text-2xl font-semibold">
                  {isHebrew ? "איך אנחנו בודקים תוכן" : "How We Check Content"}
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  {isHebrew
                    ? "כל מדריך נבדק כדי לוודא שהוא מעשי, ברור, ולא נכתב רק כדי למשוך קליקים. אנחנו מחפשים עצות שאפשר להשתמש בהן בקמפיין אמיתי, במשפך סינון אמיתי ובתהליך קליטה אמיתי במרפאה."
                    : "Each guide is reviewed to make sure it is practical, clear, and not written just to attract clicks. We look for advice that can be used in a real campaign, a real filtering funnel, and a real clinic intake process."}
                </p>
                <ul className="mt-6 space-y-3">
                  {sources.map((source) => (
                    <li key={source} className="flex gap-3 text-sm text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{source}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border border-border bg-card p-6">
                <h2 className="font-display text-2xl font-semibold">
                  {isHebrew ? "מה התוכן אינו" : "What This Content Is Not"}
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  {isHebrew
                    ? "המאמרים באתר הם הדרכה שיווקית לבעלי מרפאות. הם אינם ייעוץ רפואי, משפטי או פיננסי, ואינם מחליפים בדיקה מקצועית של מצב המרפאה, התקציב או השוק המקומי שלכם."
                    : "The articles on this site are marketing guidance for clinic owners. They are not medical, legal, or financial advice, and they do not replace a professional review of your clinic, budget, or local market."}
                </p>
                <Link
                  to={`/${lang}/blog`}
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                >
                  {isHebrew ? "עברו למדריכים" : "Read the guides"}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
