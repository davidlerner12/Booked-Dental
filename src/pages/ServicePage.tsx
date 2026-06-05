import { ArrowLeft, ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SEO from "@/components/SEO";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { getServicePage } from "@/lib/service-pages";
import { buildLocalizedUrl } from "@/lib/seo";
import { getProofForService } from "@/lib/proof";

const GUIDE_TITLES = {
  en: {
    "how-to-get-more-dental-implant-patients": "How to get more dental implant patients",
    "dental-lead-filtering-for-dentists": "Dental lead filtering for dentists",
    "why-dental-ads-fail": "Why dental ads fail",
    "cosmetic-dentists-high-intent-patients": "How cosmetic dentists attract high-intent patients",
    "cosmetic-dentistry-patient-acquisition-fast": "Cosmetic dentistry patient acquisition",
    "ugc-dental-ads-examples": "UGC dental ads examples",
    "best-dental-lead-sources": "Best dental lead sources",
    "google-ads-vs-facebook-ads-dentists": "Google Ads vs Facebook Ads for dentists",
    "dental-office-marketing": "Dental office marketing",
  },
  he: {
    "how-to-get-more-dental-implant-patients": "איך להשיג יותר מטופלי שתלים",
    "dental-lead-filtering-for-dentists": "סינון לידים למרפאות שיניים",
    "why-dental-ads-fail": "למה פרסום דנטלי נכשל",
    "cosmetic-dentists-high-intent-patients": "איך מרפאות אסתטיקה מושכות מטופלים רציניים",
    "cosmetic-dentistry-patient-acquisition-fast": "גיוס מטופלים לאסתטיקה דנטלית",
    "ugc-dental-ads-examples": "דוגמאות למודעות UGC דנטליות",
    "best-dental-lead-sources": "מקורות הלידים הטובים למרפאות",
    "google-ads-vs-facebook-ads-dentists": "Google Ads מול Facebook Ads לרופאי שיניים",
    "dental-office-marketing": "שיווק למרפאות שיניים",
  },
} as const;

function getPageFaqs(pageTitle: string, isHebrew: boolean) {
  if (isHebrew) {
    return [
      {
        question: `למי מתאים ${pageTitle}?`,
        answer:
          "העמוד מיועד למרפאות שתלים ואסתטיקה שרוצות למשוך מתעניינים עם כוונת טיפול ברורה יותר, לסנן לידים ולמדוד הזדמנויות אמיתיות במקום קליקים או טפסים גולמיים.",
      },
      {
        question: "איך סינון לידים עוזר לקמפיינים להשתפר?",
        answer:
          "סינון יוצר פידבק על איכות הפניות. כשהמערכת יודעת אילו מתעניינים מתאימים ואילו לא, קל יותר ללמד את הקמפיין למצוא אנשים שדומים למטופלים עתידיים.",
      },
      {
        question: "מה ההבדל בין ליד רגיל להזדמנות מתאימה?",
        answer:
          "ליד רגיל הוא רק מילוי טופס. הזדמנות מתאימה מראה עניין טיפולי, התאמה לאזור, זמינות להמשך ותמונה ברורה יותר של כוונת המטופל.",
      },
    ];
  }

  return [
    {
      question: `Who is ${pageTitle} for?`,
      answer:
        "It is for implant and cosmetic dental clinics that want better-qualified patient opportunities, cleaner lead filtering, and reporting focused on real treatment intent instead of clicks or raw form volume.",
    },
    {
      question: "How does lead filtering improve campaign performance?",
      answer:
        "Filtering creates feedback about lead quality. When the system knows which prospects are approved or rejected, it can help campaigns learn toward future patients instead of easy form fills.",
    },
    {
      question: "What is the difference between a lead and a qualified opportunity?",
      answer:
        "A lead is a form submission. A qualified opportunity shows relevant treatment interest, local market fit, reachability, and enough intent to justify focused follow-up.",
    },
  ];
}

export default function ServicePage() {
  const { lang, serviceSlug } = useParams();
  const { t, i18n } = useTranslation();
  const isHebrew = i18n.language === "he";
  const page = getServicePage(lang, serviceSlug);
  const guideTitles = isHebrew ? GUIDE_TITLES.he : GUIDE_TITLES.en;

  if (!page) return <Navigate to={`/${lang || "en"}`} replace />;

  const path = `/services/${page.slug}`;
  const pageFaqs = page.faqs || getPageFaqs(page.title, isHebrew);
  const proofExample = getProofForService(page.slug, lang);
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: page.title,
      description: page.description,
      url: buildLocalizedUrl(lang, path),
      inLanguage: isHebrew ? "he" : "en-US",
      provider: {
        "@type": "Organization",
        name: "Booked.Dental",
        url: "https://www.booked.dental",
      },
      audience: {
        "@type": "Audience",
        audienceType: isHebrew
          ? "מרפאות שתלים ואסתטיקה דנטלית"
          : "Implant and cosmetic dental clinics",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: buildLocalizedUrl(lang),
        },
        {
          "@type": "ListItem",
          position: 2,
          name: page.title,
          item: buildLocalizedUrl(lang, path),
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      inLanguage: isHebrew ? "he" : "en-US",
      mainEntity: pageFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        lang={lang}
        path={path}
        title={page.metaTitle}
        description={page.description}
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
            <div className="mx-auto max-w-4xl text-center">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm text-primary">
                <ShieldCheck className="h-4 w-4" />
                {page.eyebrow}
              </span>
              <h1 className="font-display text-4xl font-bold leading-tight tracking-tight md:text-6xl">
                {page.h1}
              </h1>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
                {page.intro}
              </p>
              <Link
                to={`/${lang}/book`}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                {isHebrew ? "בדקו את האזור שלכם" : "Check Your Market"}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {proofExample && (
          <section className="border-b border-border bg-card/30 py-12">
            <div className="container">
              <div className="mx-auto grid max-w-6xl gap-8 rounded-xl border border-primary/20 bg-background p-6 md:grid-cols-[1fr_0.8fr] md:p-8">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.14em] text-primary">
                    {isHebrew ? "דוגמת הוכחה אנונימית" : "Anonymized proof example"}
                  </p>
                  <h2 className="mt-3 font-display text-2xl font-semibold md:text-3xl">
                    {proofExample.title}
                  </h2>
                  <p className="mt-3 leading-relaxed text-muted-foreground">
                    {proofExample.result}
                  </p>
                  <Link
                    to={`/${lang}/proof`}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary underline-offset-4 hover:underline"
                  >
                    {isHebrew ? "ראו את עמוד ההוכחות" : "View the proof page"}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
                <div className="grid gap-3 sm:grid-cols-3 md:grid-cols-1">
                  {proofExample.metrics.map((metric) => (
                    <div key={metric.label} className="rounded-lg border border-border bg-card p-4">
                      <div className="text-2xl font-bold text-primary">{metric.value}</div>
                      <div className="mt-1 text-xs text-muted-foreground">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        <section className="py-14 md:py-20">
          <div className="container">
            <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1fr_0.85fr]">
              <div className="space-y-6">
                {page.sections.map((section) => (
                  <div key={section.title} className="rounded-xl border border-border bg-card p-6">
                    <h2 className="font-display text-2xl font-semibold">{section.title}</h2>
                    <p className="mt-3 leading-relaxed text-muted-foreground">{section.body}</p>
                  </div>
                ))}
              </div>
              <aside className="rounded-xl border border-primary/20 bg-primary/5 p-6">
                <h2 className="font-display text-2xl font-semibold">
                  {isHebrew ? "מה כלול במערכת" : "What the system includes"}
                </h2>
                <ul className="mt-5 space-y-3">
                  {page.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </aside>
            </div>
          </div>
        </section>

        <section className="border-t border-border py-14">
          <div className="container">
            <div className="mx-auto max-w-4xl">
              <h2 className="font-display text-2xl font-semibold">
                {isHebrew ? "המשיכו לקרוא" : "Related guides"}
              </h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {page.relatedPosts.map((slug) => (
                  <Link
                    key={slug}
                    to={`/${lang}/blog/${slug}`}
                    className="rounded-xl border border-border bg-card p-4 text-sm font-semibold text-foreground transition-colors hover:border-primary/40 hover:text-primary"
                  >
                    {guideTitles[slug as keyof typeof guideTitles] || slug.split("-").join(" ")}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-border py-14">
          <div className="container">
            <div className="mx-auto max-w-4xl">
              <h2 className="font-display text-2xl font-semibold">
                {isHebrew ? "שאלות נפוצות" : "Frequently asked questions"}
              </h2>
              <div className="mt-5 grid gap-4">
                {pageFaqs.map((faq) => (
                  <div key={faq.question} className="rounded-xl border border-border bg-card p-5">
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      {faq.question}
                    </h3>
                    <p className="mt-2 leading-relaxed text-muted-foreground">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
