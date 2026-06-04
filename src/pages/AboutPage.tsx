import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  ShieldCheck,
  Target,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import SEO from "@/components/SEO";

const HEADSHOT_SRC = "/images/david-lerner-headshot.jpg";

const COPY = {
  en: {
    pageTitle: "About David Lerner | Booked.Dental",
    pageDescription:
      "Meet David Lerner, founder of Booked.Dental, and learn how the dental patient acquisition system is built around intent, filtering, and measurable ROI.",
    badge: "Founder-led dental patient acquisition",
    h1: "Built to help dental ads find patients, not clicks.",
    intro:
      "I’m David Lerner, founder of Booked.Dental. I build patient acquisition systems for implant and cosmetic dental clinics that want real booked consults, not just clicks, impressions, or raw form fills.",
    bio:
      "Booked.Dental combines targeted Meta and Google campaigns, high-converting UGC-style creative, lead filtering, advanced tracking, and AI-assisted intake so clinics can move budget toward people with real treatment intent.",
    law:
      "My background in law shaped how I think about trust, persuasion, precision, and evidence. Today I apply that discipline to performance marketing, patient psychology, data, and execution so dental practices can build more predictable patient flow and measurable ROI.",
    imageAlt: "David Lerner, founder of Booked.Dental",
    principlesTitle: "What the system is built around",
    cta: "Check Your Market",
    readGuides: "Read the guides",
    disclaimerTitle: "Content standards",
    disclaimer:
      "The articles on this site are practical marketing guidance for clinic owners. They are not medical, legal, or financial advice, and they do not replace a professional review of your clinic, market, or budget.",
    principles: [
      {
        title: "Intent over activity",
        description:
          "The goal is not cheaper clicks. The goal is to identify people who are actually considering high-value treatment.",
      },
      {
        title: "Filtering that teaches the AI",
        description:
          "Qualified and rejected leads become feedback signals, helping campaigns optimize toward customers instead of traffic.",
      },
      {
        title: "Measurable patient flow",
        description:
          "Campaigns are judged by serious opportunities, booked consults, accepted treatment plans, and ROI.",
      },
    ],
    expertise: [
      "Implant and cosmetic dental campaign strategy",
      "Meta and Google performance marketing",
      "Lead filtering, intake quality, and customer-intent measurement",
      "UGC-style creative for high-value treatment categories",
    ],
  },
  he: {
    pageTitle: "אודות דיוויד לרנר | Booked.Dental",
    pageDescription:
      "הכירו את דיוויד לרנר, מייסד Booked.Dental, ואת הדרך שבה מערכת גיוס המטופלים בנויה סביב כוונה, סינון ו-ROI מדיד.",
    badge: "מערכת גיוס מטופלים בהובלת המייסד",
    h1: "נבנה כדי ללמד פרסום דנטלי למצוא מטופלים, לא קליקים.",
    intro:
      "אני דיוויד לרנר, מייסד Booked.Dental. אני בונה מערכות גיוס מטופלים למרפאות שתלים ואסתטיקה דנטלית שרוצות ייעוצים אמיתיים שנקבעים ביומן, ולא רק קליקים, חשיפות או טפסים גולמיים.",
    bio:
      "Booked.Dental משלבת קמפיינים ממוקדים ב-Meta וב-Google, קריאייטיב בסגנון UGC, סינון לידים, מעקב מתקדם ותהליך קליטה נתמך AI, כדי שהתקציב יעבור לאנשים עם כוונת טיפול אמיתית.",
    law:
      "הרקע שלי במשפטים עיצב את הדרך שבה אני חושב על אמון, שכנוע, דיוק וראיות. היום אני מיישם את אותה משמעת בשיווק ביצועים, פסיכולוגיית מטופלים, דאטה וביצוע, כדי לעזור למרפאות לבנות זרם מטופלים צפוי יותר ו-ROI מדיד.",
    imageAlt: "דיוויד לרנר, מייסד Booked.Dental",
    principlesTitle: "על מה המערכת בנויה",
    cta: "בדקו את האזור שלכם",
    readGuides: "עברו למדריכים",
    disclaimerTitle: "סטנדרט התוכן",
    disclaimer:
      "המאמרים באתר הם הדרכה שיווקית מעשית לבעלי מרפאות. הם אינם ייעוץ רפואי, משפטי או פיננסי, ואינם מחליפים בדיקה מקצועית של המרפאה, השוק או התקציב שלכם.",
    principles: [
      {
        title: "כוונה לפני פעילות",
        description:
          "המטרה היא לא קליקים זולים יותר. המטרה היא לזהות אנשים שבאמת שוקלים טיפול בעל ערך גבוה.",
      },
      {
        title: "סינון שמלמד את ה-AI",
        description:
          "לידים שאושרו או נדחו הופכים לאותות למידה, ועוזרים לקמפיינים להתמקד בלקוחות במקום בתנועה.",
      },
      {
        title: "זרם מטופלים שאפשר למדוד",
        description:
          "קמפיינים נמדדים לפי הזדמנויות רציניות, ייעוצים שנקבעו, תוכניות טיפול שנסגרו ו-ROI.",
      },
    ],
    expertise: [
      "אסטרטגיית קמפיינים לשתלים ואסתטיקה דנטלית",
      "שיווק ביצועים ב-Meta וב-Google",
      "סינון לידים, איכות קליטה ומדידת כוונת לקוח",
      "קריאייטיב בסגנון UGC לטיפולים בעלי ערך גבוה",
    ],
  },
} as const;

export default function AboutPage() {
  const { t, i18n } = useTranslation();
  const { lang } = useParams();
  const isHebrew = i18n.language === "he";
  const copy = isHebrew ? COPY.he : COPY.en;
  const pageLang = lang === "he" ? "he" : "en";
  const pageUrl = `https://booked.dental/${pageLang}/about`;
  const imageUrl = `https://booked.dental${HEADSHOT_SRC}`;
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      name: copy.pageTitle,
      description: copy.pageDescription,
      url: pageUrl,
      inLanguage: isHebrew ? "he" : "en-US",
      mainEntity: {
        "@type": "Person",
        name: "David Lerner",
        jobTitle: "Founder, Booked.Dental",
        image: imageUrl,
        url: pageUrl,
        worksFor: {
          "@type": "Organization",
          name: "Booked.Dental",
          url: "https://booked.dental",
        },
        knowsAbout: [
          "Dental patient acquisition",
          "Dental implant marketing",
          "Cosmetic dentistry marketing",
          "Lead filtering",
          "Meta Ads",
          "Google Ads",
          "Patient intake optimization",
        ],
      },
      about: {
        "@type": "Organization",
        name: "Booked.Dental",
        url: "https://booked.dental",
        description:
          "Dental patient acquisition system focused on implant and cosmetic clinics, lead filtering, paid ads, AI-assisted intake, and customer-intent measurement.",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "David Lerner",
      jobTitle: "Founder, Booked.Dental",
      image: imageUrl,
      url: pageUrl,
      worksFor: {
        "@type": "Organization",
        name: "Booked.Dental",
        url: "https://booked.dental",
      },
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        lang={lang}
        path="/about"
        title={copy.pageTitle}
        description={copy.pageDescription}
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
        <section className="border-b border-border py-14 md:py-20">
          <div className="container">
            <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[0.95fr_1.05fr]">
              <div className="mx-auto w-full max-w-sm md:max-w-none">
                <img
                  src={HEADSHOT_SRC}
                  alt={copy.imageAlt}
                  className="aspect-[4/5] w-full rounded-xl border border-border object-cover object-top shadow-2xl shadow-black/20"
                  width={720}
                  height={900}
                  fetchPriority="high"
                />
              </div>
              <div className="text-center md:text-start">
                <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm text-primary">
                  <ShieldCheck className="h-4 w-4" />
                  {copy.badge}
                </span>
                <h1 className="font-display text-4xl font-bold leading-tight tracking-tight md:text-5xl">
                  {copy.h1}
                </h1>
                <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
                  <p>{copy.intro}</p>
                  <p>{copy.bio}</p>
                  <p>{copy.law}</p>
                </div>
                <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row md:justify-start">
                  <Link
                    to={`/${lang}/book`}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                  >
                    {copy.cta}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    to={`/${lang}/blog`}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/40 hover:text-primary"
                  >
                    {copy.readGuides}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="container">
            <div className="mx-auto max-w-6xl">
              <div className="max-w-3xl">
                <h2 className="font-display text-3xl font-semibold">
                  {copy.principlesTitle}
                </h2>
              </div>
              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {copy.principles.map((principle, index) => {
                  const Icon = index === 0 ? Target : index === 1 ? BrainCircuit : CheckCircle2;
                  return (
                    <div key={principle.title} className="rounded-xl border border-border bg-card p-6">
                      <Icon className="h-6 w-6 text-primary" />
                      <h3 className="mt-4 font-display text-xl font-semibold">
                        {principle.title}
                      </h3>
                      <p className="mt-3 leading-relaxed text-muted-foreground">
                        {principle.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-10 grid gap-8 md:grid-cols-[1fr_0.85fr]">
                <div className="rounded-xl border border-border bg-card p-6">
                  <h2 className="font-display text-2xl font-semibold">
                    {isHebrew ? "תחומי מומחיות" : "Areas of expertise"}
                  </h2>
                  <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                    {copy.expertise.map((item) => (
                      <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl border border-border bg-card p-6">
                  <h2 className="font-display text-2xl font-semibold">
                    {copy.disclaimerTitle}
                  </h2>
                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    {copy.disclaimer}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
