import { ArrowLeft, ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import SEO from "@/components/SEO";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { getProofExamples } from "@/lib/proof";
import { SERVICE_PAGES } from "@/lib/service-pages";
import { buildLocalizedUrl } from "@/lib/seo";

export default function ProofPage() {
  const { lang } = useParams();
  const pageLang = lang === "he" ? "he" : "en";
  const isHebrew = pageLang === "he";
  const examples = getProofExamples(pageLang);
  const servicePages = SERVICE_PAGES[pageLang];
  const path = "/proof";
  const title = isHebrew
    ? "הוכחות אנונימיות למערכת גיוס מטופלים | Booked.Dental"
    : "Anonymized Dental Marketing Proof Examples | Booked.Dental";
  const description = isHebrew
    ? "דוגמאות אנונימיות לקמפיינים של שתלים, ציפויים וסינון לידים שמודדים הזדמנויות מטופלים ולא קליקים."
    : "Anonymized proof examples showing how Booked.Dental measures implant, veneer, and lead filtering campaigns by qualified patient opportunities, not clicks.";
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: title,
      description,
      url: buildLocalizedUrl(pageLang, path),
      inLanguage: isHebrew ? "he" : "en-US",
      about: {
        "@type": "Service",
        name: "Dental patient acquisition proof examples",
        provider: { "@type": "Organization", name: "Booked.Dental" },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: isHebrew ? "דוגמאות הוכחה אנונימיות" : "Anonymized proof examples",
      itemListElement: examples.map((example, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: example.title,
      })),
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        lang={pageLang}
        path={path}
        title={title}
        description={description}
        structuredData={structuredData}
      />
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between">
          <Link to={`/${pageLang}`} className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
            <ArrowLeft className="h-4 w-4" />
            {isHebrew ? "חזרה לאתר" : "Back to site"}
          </Link>
          <Link to={`/${pageLang}`} className="font-display text-lg font-semibold">
            <span className="text-gradient-gold">Booked.</span>Dental
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
                {isHebrew ? "דוגמאות אנונימיות" : "Anonymized proof"}
              </span>
              <h1 className="font-display text-4xl font-bold leading-tight tracking-tight md:text-6xl">
                {isHebrew
                  ? "איך Booked.Dental מודדת הזדמנויות מטופלים אמיתיות."
                  : "How Booked.Dental measures real patient opportunities."}
              </h1>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
                {isHebrew
                  ? "הדוגמאות כאן אנונימיות ושמרניות. הן נועדו להראות את צורת החשיבה: סינון, מעקב ולמידה סביב איכות מטופלים, לא סביב קליקים או נפח טפסים."
                  : "These examples are anonymized and conservative. They show the operating principle: filter, track, and learn from patient quality instead of optimizing around clicks or raw form volume."}
              </p>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="container">
            <div className="mx-auto grid max-w-6xl gap-6">
              {examples.map((example) => {
                const related = example.relatedServices
                  .map((slug) => servicePages.find((service) => service.slug === slug))
                  .filter(Boolean)
                  .slice(0, 3);

                return (
                  <article key={example.id} className="rounded-xl border border-border bg-card p-6 md:p-8">
                    <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr]">
                      <div>
                        <p className="text-xs font-medium uppercase tracking-[0.14em] text-primary">
                          {example.treatment}
                        </p>
                        <h2 className="mt-3 font-display text-2xl font-semibold md:text-3xl">
                          {example.title}
                        </h2>
                        <p className="mt-3 text-muted-foreground">{example.subtitle}</p>

                        <div className="mt-6 grid gap-4">
                          <div>
                            <h3 className="font-display text-lg font-semibold">
                              {isHebrew ? "האתגר" : "Challenge"}
                            </h3>
                            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                              {example.challenge}
                            </p>
                          </div>
                          <div>
                            <h3 className="font-display text-lg font-semibold">
                              {isHebrew ? "הגישה" : "Approach"}
                            </h3>
                            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                              {example.approach}
                            </p>
                          </div>
                          <div>
                            <h3 className="font-display text-lg font-semibold">
                              {isHebrew ? "מה למדנו" : "What this shows"}
                            </h3>
                            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                              {example.result}
                            </p>
                          </div>
                        </div>
                      </div>

                      <aside className="rounded-xl border border-primary/20 bg-primary/5 p-5">
                        <h3 className="font-display text-xl font-semibold">
                          {isHebrew ? "מדדי דוגמה" : "Example signals"}
                        </h3>
                        <div className="mt-5 grid gap-4">
                          {example.metrics.map((metric) => (
                            <div key={metric.label} className="rounded-lg border border-border bg-background/70 p-4">
                              <div className="text-3xl font-bold text-primary">{metric.value}</div>
                              <div className="mt-1 text-sm text-muted-foreground">{metric.label}</div>
                            </div>
                          ))}
                        </div>
                        <div className="mt-6">
                          <p className="text-xs font-medium uppercase tracking-[0.14em] text-primary">
                            {isHebrew ? "עמודים קשורים" : "Related services"}
                          </p>
                          <div className="mt-3 grid gap-2">
                            {related.map((service) => (
                              <Link
                                key={service?.slug}
                                to={`/${pageLang}/services/${service?.slug}`}
                                className="flex items-center justify-between rounded-lg border border-border bg-background/70 p-3 text-sm font-semibold transition-colors hover:border-primary/40 hover:text-primary"
                              >
                                {service?.title}
                                <ArrowRight className="h-4 w-4" />
                              </Link>
                            ))}
                          </div>
                        </div>
                      </aside>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="border-t border-border py-14">
          <div className="container">
            <div className="mx-auto max-w-4xl rounded-xl border border-primary/20 bg-primary/5 p-6 text-center md:p-8">
              <CheckCircle2 className="mx-auto h-8 w-8 text-primary" />
              <h2 className="mt-4 font-display text-2xl font-semibold">
                {isHebrew
                  ? "רוצים לבדוק אם השוק שלכם פנוי?"
                  : "Want to see whether your market is open?"}
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                {isHebrew
                  ? "הבדיקה מתחילה באזור, התאמת המרפאה וסוג הטיפולים שאתם רוצים לגדול בהם."
                  : "The check starts with your territory, clinic fit, and which high-value treatments you want to grow."}
              </p>
              <Link
                to={`/${pageLang}/book`}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                {isHebrew ? "בדקו את השוק שלכם" : "Check Your Market"}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
