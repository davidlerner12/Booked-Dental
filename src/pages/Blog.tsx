import { Link, useLoaderData, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ArrowLeft, ArrowRight, CalendarDays } from "lucide-react";
import { useTranslation } from "react-i18next";
import type { BlogPostListItem } from "@/lib/blog";
import { urlFor } from "@/lib/sanity";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const BLOG_SEO_KEYWORDS = [
  "dental implant marketing", "dental marketing agency", "dental implant lead generation",
  "get dental implant patients", "implant patient acquisition", "dental patient acquisition",
  "dental marketing for implants", "cosmetic dentistry marketing", "veneer patient leads",
  "dental implant advertising", "meta ads for dentists", "google ads for dentists",
  "dental clinic lead generation", "implant patient marketing", "dental practice marketing",
  "dental marketing services", "dental marketing system", "dental patient lead generation",
  "implant clinic marketing", "cosmetic dental marketing",
];

export default function Blog() {
  const { t, i18n } = useTranslation();
  const { lang } = useParams();
  const data = useLoaderData() as BlogPostListItem[];
  const dateLocale = i18n.language === "he" ? "he-IL" : "en-US";
  const pageTitle = "Dental Marketing Blog | Booked.Dental";
  const pageDescription = "Dental marketing strategies for implant and cosmetic clinics. Learn how to get more qualified consults with Google Ads, Meta ads, UGC creative, and better lead handling.";
  const pageUrl = "https://booked.dental/blog";
  const pageImage = "https://booked.dental/social-preview.png";
  const blogListStructuredData = {
    "@context": "https://schema.org", "@type": "Blog", name: "Booked.Dental Marketing Blog", url: pageUrl, description: pageDescription, inLanguage: i18n.language === "he" ? "he" : "en-US",
    publisher: { "@type": "Organization", name: "Booked.Dental", url: "https://booked.dental" },
    blogPost: data.slice(0, 20).map((post) => ({ "@type": "BlogPosting", headline: post.title, datePublished: post.publishedAt, url: `${pageUrl}/${post.slug}` })),
  };
  const itemListStructuredData = {
    "@context": "https://schema.org", "@type": "ItemList",
    itemListElement: data.map((post, idx) => ({ "@type": "ListItem", position: idx + 1, url: `${pageUrl}/${post.slug}`, name: post.title })),
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={BLOG_SEO_KEYWORDS.join(", ")} />
        <meta name="robots" content="index,follow,max-image-preview:large" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Booked.Dental" />
        <meta property="og:locale" content={i18n.language === "he" ? "he_IL" : "en_US"} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={pageImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={pageImage} />
        <link rel="canonical" href={pageUrl} />
        <script type="application/ld+json">{JSON.stringify(blogListStructuredData)}</script>
        <script type="application/ld+json">{JSON.stringify(itemListStructuredData)}</script>
      </Helmet>
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between">
          <Link to={`/${lang}`} className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
            <ArrowLeft className="h-4 w-4" />
            {t("blog_page.back")}
          </Link>
          <Link to={`/${lang}`} className="font-display text-lg font-semibold">
            <span className="text-gradient-gold">{t("nav.booked")}</span>{t("nav.dental")}
          </Link>
          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <Link to={`/${lang}/book`} className="hidden rounded-full bg-primary px-4 py-1.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 sm:inline-flex">
              {t("blog_page.cta_button")}
            </Link>
          </div>
        </div>
      </header>
      <section className="border-b border-border py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1 text-sm text-primary">{t("blog_page.badge")}</span>
            <h1 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
              {t("blog_page.title_prefix")}<span className="text-gradient-gold">{t("blog_page.title_highlight")}</span>{t("blog_page.title_suffix")}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">{t("blog_page.subtitle")}</p>
          </div>
        </div>
      </section>
      <main className="container py-16 md:py-24">
        {data.length === 0 ? (
          <div className="mx-auto max-w-2xl rounded-xl border border-border bg-card p-10 text-center">
            <p className="text-muted-foreground">{t("blog_page.no_posts")}</p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {data.map((post) => (
              <Link key={post._id} to={`/${lang}/blog/${post.slug}`} className="group overflow-hidden rounded-xl border border-border bg-card transition-all duration-200 hover:border-primary/40 hover:bg-primary/5">
                {post.mainImage ? <img src={urlFor(post.mainImage).width(900).height(506).fit("crop").auto("format").url()} alt={post.mainImageAlt || post.title} className="h-44 w-full object-cover" loading="lazy" /> : null}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <CalendarDays className="h-3.5 w-3.5" />
                    <time dateTime={post.publishedAt}>{new Date(post.publishedAt).toLocaleDateString(dateLocale, { year: "numeric", month: "long", day: "numeric" })}</time>
                  </div>
                  <h2 className="mt-3 font-display text-lg font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">{post.title}</h2>
                  <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
                  <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary">
                    {t("blog_page.read_article")}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>
      <section className="border-t border-border py-16">
        <div className="container text-center">
          <p className="text-muted-foreground">{t("blog_page.cta_text")}</p>
          <Link to={`/${lang}/book`} className="mt-4 inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 sm:px-6 sm:py-3 sm:text-base">
            {t("blog_page.cta_button")}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
      <footer className="border-t border-border py-8">
        <div className="container flex flex-col items-center justify-between gap-4 sm:flex-row">
          <span className="font-display text-sm font-semibold"><span className="text-gradient-gold">{t("nav.booked")}</span>{t("nav.dental")}</span>
          <p className="text-xs text-muted-foreground">{t("footer.tagline")}</p>
        </div>
      </footer>
    </div>
  );
}
