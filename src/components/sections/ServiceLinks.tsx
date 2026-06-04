import { ArrowRight } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { SERVICE_PAGES } from "@/lib/service-pages";

export default function ServiceLinks() {
  const { i18n } = useTranslation();
  const { lang } = useParams();
  const isHebrew = i18n.language === "he";
  const pages = isHebrew ? SERVICE_PAGES.he : SERVICE_PAGES.en;

  return (
    <section className="border-y border-border py-16">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1 text-sm text-primary">
            {isHebrew ? "תחומי התמחות" : "High-intent services"}
          </span>
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
            {isHebrew
              ? "עמודי עומק למרפאות שרוצות מטופלים מתאימים"
              : "Deeper pages for clinics that want qualified patients"}
          </h2>
        </div>
        <div className="mx-auto mt-8 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pages.map((page) => (
            <Link
              key={page.slug}
              to={`/${lang}/services/${page.slug}`}
              className="group flex min-h-44 flex-col justify-between rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/40 hover:bg-primary/5"
            >
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-primary">
                  {page.eyebrow}
                </p>
                <h3 className="mt-3 font-display text-lg font-semibold text-foreground">
                  {page.title}
                </h3>
              </div>
              <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                {isHebrew ? "לקריאה" : "Learn more"}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
