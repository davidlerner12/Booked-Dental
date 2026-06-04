import { PortableText } from "@portabletext/react";
import { Helmet } from "react-helmet";
import { Link, Navigate, useLoaderData, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";
import type { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { useQuery } from "@tanstack/react-query";
import type { BlogPostLoaderData } from "./blog-loaders";
import { getBlogPostBySlug, getAllBlogPosts } from "@/lib/blog";
import { urlFor } from "@/lib/sanity";
import { buildLocalizedUrl } from "@/lib/seo";
import {
  getAbsoluteBlogImageUrl,
  getBlogSeoImage,
  getBlogSeoKeywords,
  getInternalBlogLinks,
} from "@/lib/blog-seo-overrides";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const BLOG_SEO_KEYWORDS = [
  "dental implant marketing",
  "dental marketing agency",
  "dental implant lead generation",
  "get dental implant patients",
  "implant patient acquisition",
  "dental patient acquisition",
  "dental marketing for implants",
  "cosmetic dentistry marketing",
  "veneer patient leads",
  "dental implant advertising",
  "meta ads for dentists",
  "google ads for dentists",
  "dental clinic lead generation",
  "implant patient marketing",
  "dental practice marketing",
  "dental marketing services",
  "dental marketing system",
  "dental patient lead generation",
  "implant clinic marketing",
  "cosmetic dental marketing",
];

const TRUST_SOURCES = [
  {
    name: "Google Search Central: Helpful, reliable, people-first content",
    url: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content",
  },
  {
    name: "Google Search Central: E-E-A-T and quality rater guidance",
    url: "https://developers.google.com/search/blog/2022/12/google-raters-guidelines-e-e-a-t",
  },
  {
    name: "Google Search Central: Structured data guidelines",
    url: "https://developers.google.com/search/docs/appearance/structured-data/sd-policies",
  },
];

function toEmbedUrl(url: string) {
  if (url.includes("youtube.com/watch?v=")) {
    const id = new URL(url).searchParams.get("v");
    return id ? `https://www.youtube.com/embed/${id}` : url;
  }
  if (url.includes("youtu.be/")) {
    const id = url.split("youtu.be/")[1]?.split("?")[0];
    return id ? `https://www.youtube.com/embed/${id}` : url;
  }
  if (url.includes("vimeo.com/")) {
    const id = url.split("vimeo.com/")[1]?.split("?")[0];
    return id ? `https://player.vimeo.com/video/${id}` : url;
  }
  // Already a Cloudinary player URL
  if (url.includes("player.cloudinary.com/embed/")) {
    return url;
  }
  // Convert Cloudinary delivery URL to player URL when possible.
  // Example input:
  // https://res.cloudinary.com/<cloud>/video/upload/.../public_id.mp4
  if (url.includes("res.cloudinary.com/") && url.includes("/video/upload/")) {
    try {
      const parsed = new URL(url);
      const cloudName = parsed.pathname.split("/")[1];
      const uploadIndex = parsed.pathname.indexOf("/video/upload/");
      const afterUpload = parsed.pathname.slice(uploadIndex + "/video/upload/".length);
      const segments = afterUpload.split("/").filter(Boolean);
      const publicIdParts = segments.filter((segment) => {
        const isVersion = /^v\d+$/.test(segment);
        const looksLikeTransformation =
          segment.includes(",") || segment.includes("_") || segment.startsWith("q_");
        return !isVersion && !looksLikeTransformation;
      });
      const publicId = publicIdParts.join("/").replace(/\.[a-zA-Z0-9]+$/, "");
      if (cloudName && publicId) {
        return `https://player.cloudinary.com/embed/?cloud_name=${cloudName}&public_id=${publicId}`;
      }
    } catch {
      return url;
    }
  }
  return url;
}

function getVideoRenderData(url: string) {
  const embedUrl = toEmbedUrl(url);
  const isIframe =
    embedUrl.includes("youtube.com/embed/") ||
    embedUrl.includes("player.vimeo.com/video/") ||
    embedUrl.includes("player.cloudinary.com/embed/");
  return { src: embedUrl, isIframe };
}

function estimateReadingMinutes(body: unknown) {
  if (!Array.isArray(body)) return 1;
  const text = body
    .map((block) => {
      if (!block || typeof block !== "object") return "";
      const maybeChildren = (block as { children?: unknown[] }).children;
      if (!Array.isArray(maybeChildren)) return "";
      return maybeChildren
        .map((child) => {
          if (!child || typeof child !== "object") return "";
          return (child as { text?: string }).text || "";
        })
        .join(" ");
    })
    .join(" ");
  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(wordCount / 180));
}

function getTrustCopy(isHebrew: boolean) {
  return isHebrew
    ? {
        label: "נבדק לפי עקרונות E-E-A-T",
        title: "איך המדריך הזה נכתב ונבדק",
        experience:
          "מבוסס על ניסיון מעשי בבניית מערכות גיוס מטופלים למרפאות שתלים ואסתטיקה דנטלית.",
        expertise:
          "נכתב על ידי צוות Booked.Dental, שמתמקד בפרסום דנטלי, סינון לידים ומדידת כוונת לקוח.",
        trust:
          "התוכן מיועד לקבלת החלטות שיווקיות. הוא אינו ייעוץ רפואי, משפטי או פיננסי.",
        updated: "עודכן ונבדק",
        sources: "מקורות ושקיפות",
      }
    : {
        label: "Reviewed for E-E-A-T signals",
        title: "How this guide was written and checked",
        experience:
          "Based on hands-on patient acquisition work for implant and cosmetic dental clinics.",
        expertise:
          "Written by the Booked.Dental growth team, focused on dental ads, lead filtering, and customer-intent measurement.",
        trust:
          "This is marketing guidance for clinic owners. It is not medical, legal, or financial advice.",
        updated: "Updated and reviewed",
        sources: "Sources and transparency",
      };
}

const portableTextComponents = {
  types: {
    inlineImage: ({
      value,
    }: {
      value: { alt?: string; caption?: string } & Record<string, unknown>;
    }) => {
      const imageUrl = urlFor(value).width(1200).fit("max").auto("format").url();
      return (
        <figure className="my-8">
          <img
            src={imageUrl}
            alt={value.alt || "Dental marketing example for patient acquisition and lead filtering"}
            className="w-full rounded-xl object-cover"
            loading="lazy"
          />
          {value.caption ? (
            <figcaption className="mt-2 text-center text-sm text-muted-foreground">
              {value.caption}
            </figcaption>
          ) : null}
        </figure>
      );
    },
    // Fallback for datasets where body image blocks are stored as _type: "image"
    image: ({ value }: { value: { alt?: string; caption?: string } & Record<string, unknown> }) => {
      const imageUrl = urlFor(value).width(1200).fit("max").auto("format").url();
      return (
        <figure className="my-8">
          <img
            src={imageUrl}
            alt={value.alt || "Dental marketing example for patient acquisition and lead filtering"}
            className="w-full rounded-xl object-cover"
            loading="lazy"
          />
          {value.caption ? (
            <figcaption className="mt-2 text-center text-sm text-muted-foreground">
              {value.caption}
            </figcaption>
          ) : null}
        </figure>
      );
    },
    videoEmbed: ({ value }: { value: { url?: string; caption?: string } }) => {
      if (!value?.url) return null;
      const { src, isIframe } = getVideoRenderData(value.url);
      return (
        <figure className="my-8">
          <div className="overflow-hidden rounded-xl border border-border">
            {isIframe ? (
              <iframe
                src={src}
                title={value.caption || "Embedded video"}
                className="h-[320px] w-full md:h-[420px]"
                loading="lazy"
                allow="autoplay; fullscreen; encrypted-media; picture-in-picture; accelerometer; clipboard-write; gyroscope"
              />
            ) : (
              <video
                src={src}
                className="w-full"
                controls
                playsInline
                preload="metadata"
              />
            )}
          </div>
          {value.caption ? (
            <figcaption className="mt-2 text-center text-sm text-muted-foreground">
              {value.caption}
            </figcaption>
          ) : null}
        </figure>
      );
    },
  },
  block: {
    normal: ({ children }: { children?: ReactNode }) => (
      <p className="mb-5 text-base leading-relaxed text-muted-foreground last:mb-0">{children}</p>
    ),
    h2: ({ children }: { children?: ReactNode }) => (
      <h2 className="mb-4 mt-10 font-display text-2xl font-semibold text-foreground">{children}</h2>
    ),
    h3: ({ children }: { children?: ReactNode }) => (
      <h3 className="mb-3 mt-8 font-display text-xl font-semibold text-foreground">{children}</h3>
    ),
  },
  list: {
    bullet: ({ children }: { children?: ReactNode }) => (
      <ul className="mb-6 list-disc space-y-2 pl-5 text-muted-foreground">{children}</ul>
    ),
    number: ({ children }: { children?: ReactNode }) => (
      <ol className="mb-6 list-decimal space-y-2 pl-5 text-muted-foreground">{children}</ol>
    ),
  },
  marks: {
    link: ({ children, value }: { children?: ReactNode; value?: { href?: string } }) => {
      const href = value?.href ?? "#";
      return (
        <a
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noreferrer noopener" : undefined}
          className="text-primary underline underline-offset-4"
        >
          {children}
        </a>
      );
    },
  },
};

export default function BlogPost() {
  const loaderData = useLoaderData() as BlogPostLoaderData | null;
  const { t, i18n } = useTranslation();
  const { lang, slug } = useParams();
  const dateLocale = i18n.language === "he" ? "he-IL" : "en-US";
  const isHebrew = i18n.language === "he";

  // SSG loaders embed data at build time; on client-side navigation
  // useLoaderData() returns null, so we fall back to fetching directly.
  const needsClientFetch = !loaderData;

  const { data: clientPost, isLoading: postLoading } = useQuery({
    queryKey: ["blog-post", lang, slug],
    queryFn: () => getBlogPostBySlug(slug!, lang),
    enabled: needsClientFetch && !!slug,
  });

  const { data: clientAllPosts } = useQuery({
    queryKey: ["blog-all-posts", lang],
    queryFn: () => getAllBlogPosts(lang),
    enabled: needsClientFetch && !!slug,
  });

  const post = loaderData?.post ?? clientPost ?? null;
  const related = loaderData?.related ?? (
    post && clientAllPosts
      ? clientAllPosts.filter((item) => item.slug !== post.slug)
      : []
  );

  if (postLoading && needsClientFetch) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    );
  }

  if (!post) return <Navigate to={`/${lang}/blog`} replace />;

  const postPath = `/blog/${post.slug}`;
  const postUrl = buildLocalizedUrl(lang, postPath);
  const metaTitle = `${post.title} | Booked.Dental`;
  const heroImage = getBlogSeoImage(post);
  const ogImage = getAbsoluteBlogImageUrl(post);
  const seoKeywords = Array.from(new Set([...getBlogSeoKeywords(post), ...BLOG_SEO_KEYWORDS]));
  const prioritizedKeywords = seoKeywords.slice(0, 6);
  const readingMinutes = estimateReadingMinutes(post.body);
  const internalLinkSlugs = getInternalBlogLinks(post.slug).filter((linkSlug) => linkSlug !== post.slug);
  const internalLinkPosts = internalLinkSlugs
    .map((linkSlug) => related.find((item) => item.slug === linkSlug))
    .filter(Boolean)
    .slice(0, 3);
  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: [ogImage],
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    inLanguage: i18n.language === "he" ? "he" : "en-US",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "Booked.Dental",
      url: "https://booked.dental",
      logo: {
        "@type": "ImageObject",
        url: "https://booked.dental/social-preview.png",
      },
    },
    author: {
      "@type": "Organization",
      name: "Booked.Dental",
      url: "https://booked.dental",
      description:
        "Dental marketing team specializing in implant and cosmetic patient acquisition, lead filtering, UGC creative, Google Ads, and Meta Ads.",
    },
    reviewedBy: {
      "@type": "Organization",
      name: "Booked.Dental",
      url: "https://booked.dental",
    },
    isAccessibleForFree: true,
    citation: TRUST_SOURCES.map((source) => source.url),
    articleSection: "Dental marketing",
    about: prioritizedKeywords.map((keyword) => ({
      "@type": "Thing",
      name: keyword,
    })),
    keywords: seoKeywords.join(", "),
    timeRequired: `PT${readingMinutes}M`,
  };
  const trustCopy = getTrustCopy(isHebrew);
  const breadcrumbStructuredData = {
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
        name: "Blog",
        item: buildLocalizedUrl(lang, "/blog"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: postUrl,
      },
    ],
  };
  const internalLinksStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Related dental marketing articles",
    itemListElement: internalLinkSlugs.slice(0, 3).map((linkSlug, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: buildLocalizedUrl(lang, `/blog/${linkSlug}`),
    })),
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={seoKeywords.join(", ")} />
        <meta name="robots" content="index,follow,max-image-preview:large" />
        <meta property="og:site_name" content="Booked.Dental" />
        <meta property="og:locale" content={i18n.language === "he" ? "he_IL" : "en_US"} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={postUrl} />
        <meta property="article:published_time" content={post.publishedAt} />
        <meta property="article:modified_time" content={post.publishedAt} />
        <meta property="article:section" content="Dental Marketing" />
        {prioritizedKeywords.map((keyword) => (
          <meta key={keyword} property="article:tag" content={keyword} />
        ))}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta name="twitter:image" content={ogImage} />
        <link rel="canonical" href={postUrl} />
        <link rel="alternate" hrefLang={isHebrew ? "he" : "en"} href={postUrl} />
        {!isHebrew && <link rel="alternate" hrefLang="x-default" href={postUrl} />}
        <script type="application/ld+json">{JSON.stringify(articleStructuredData)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbStructuredData)}</script>
        <script type="application/ld+json">{JSON.stringify(internalLinksStructuredData)}</script>
      </Helmet>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between">
          <Link
            to={`/${lang}/blog`}
            className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            {t("blog_post.all_articles")}
          </Link>
          <Link to={`/${lang}`} className="font-display text-lg font-semibold">
            <span className="text-gradient-gold">{t("nav.booked")}</span>{t("nav.dental")}
          </Link>
          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <Link
              to={`/${lang}/book`}
              className="hidden rounded-full bg-primary px-4 py-1.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 sm:inline-flex"
            >
              {t("blog_post.check_market")}
            </Link>
          </div>
        </div>
      </header>

      <main>
        {/* Article hero */}
        <section className="border-b border-border py-12 md:py-16">
          <div className="container">
            <div className="mx-auto max-w-3xl">
              {/* Breadcrumb */}
              <nav
                aria-label="Breadcrumb"
                className="mb-6 flex items-center gap-1.5 text-xs text-muted-foreground"
              >
                <Link to={`/${lang}`} className="transition-colors hover:text-foreground">
                  {t("blog_post.home")}
                </Link>
                <ChevronRight className="h-3 w-3" />
                <Link
                  to={`/${lang}/blog`}
                  className="transition-colors hover:text-foreground"
                >
                  {t("blog_post.blog")}
                </Link>
                <ChevronRight className="h-3 w-3" />
                <span className="line-clamp-1 text-foreground">{post.title}</span>
              </nav>

              {/* Meta */}
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <CalendarDays className="h-4 w-4" />
                <time dateTime={post.publishedAt}>
                  {new Date(post.publishedAt).toLocaleDateString(dateLocale, {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>

              {/* Title */}
              <h1 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-5xl">
                {post.title}
              </h1>
              <div className="mt-5 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-primary">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  {trustCopy.label}
                </span>
                <span>
                  {trustCopy.updated}:{" "}
                  {new Date(post.publishedAt).toLocaleDateString(dateLocale, {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Article body */}
        <article className="py-12 md:py-16">
          <div className="container">
            <div className="mx-auto max-w-3xl">
              <figure className="mb-10">
                <img
                  src={heroImage.src}
                  alt={heroImage.alt}
                  className="w-full rounded-xl object-cover"
                  width={896}
                  height={504}
                />
              </figure>
              <aside className="mb-10 rounded-xl border border-border bg-card p-5 sm:p-6">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="font-display text-lg font-semibold text-foreground">
                      {trustCopy.title}
                    </h2>
                    <div className="mt-4 grid gap-3 text-sm leading-relaxed text-muted-foreground sm:grid-cols-3">
                      {[trustCopy.experience, trustCopy.expertise, trustCopy.trust].map((item) => (
                        <div key={item} className="flex gap-2">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <p>{item}</p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 border-t border-border pt-4">
                      <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
                        {trustCopy.sources}
                      </p>
                      <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                        {TRUST_SOURCES.map((source) => (
                          <li key={source.url}>
                            <a
                              href={source.url}
                              target="_blank"
                              rel="noreferrer noopener"
                              className="underline-offset-4 transition-colors hover:text-primary hover:underline"
                            >
                              {source.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </aside>
              {internalLinkPosts.length > 0 && (
                <aside className="mb-10 rounded-xl border border-primary/20 bg-primary/5 p-5 sm:p-6">
                  <p className="text-xs font-medium uppercase tracking-[0.14em] text-primary">
                    {isHebrew ? "קריאה מומלצת" : "Related reading"}
                  </p>
                  <h2 className="mt-2 font-display text-xl font-semibold text-foreground">
                    {isHebrew
                      ? "המשיכו לנושאים שמחזקים את אסטרטגיית השיווק"
                      : "Keep building the patient acquisition system"}
                  </h2>
                  <div className="mt-4 grid gap-3">
                    {internalLinkPosts.map((item) => (
                      <Link
                        key={item._id}
                        to={`/${lang}/blog/${item.slug}`}
                        className="group rounded-lg border border-border bg-background/70 p-4 transition-colors hover:border-primary/40 hover:bg-background"
                      >
                        <p className="font-display text-sm font-semibold text-foreground transition-colors group-hover:text-primary">
                          {item.title}
                        </p>
                        <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
                          {item.excerpt}
                        </p>
                      </Link>
                    ))}
                  </div>
                </aside>
              )}
              <PortableText value={post.body || []} components={portableTextComponents} />

              {/* In-article CTA */}
              <div className="mt-12 rounded-xl border border-primary/20 bg-primary/5 p-6 text-center sm:p-8">
                <h3 className="font-display text-xl font-semibold md:text-2xl">
                  {t("blog_post.ready_title")}
                </h3>
                <p className="mt-2 text-muted-foreground">
                  {t("blog_post.ready_subtitle")}
                </p>
                <Link
                  to={`/${lang}/book`}
                  className="mt-6 inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 sm:px-6 sm:py-3 sm:text-base"
                >
                  {t("blog_post.check_market")}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </article>

        {/* Related posts */}
        {related.length > 0 && (
          <section className="border-t border-border py-12 md:py-16">
            <div className="container">
              <div className="mx-auto max-w-3xl">
                <h2 className="mb-6 font-display text-lg font-semibold">
                  {t("blog_post.more_articles")}
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {related.slice(0, 2).map((rp) => (
                    <Link
                      key={rp._id}
                      to={`/${lang}/blog/${rp.slug}`}
                      className="group rounded-xl border border-border bg-card p-5 transition-all duration-200 hover:border-primary/40 hover:bg-primary/5"
                    >
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <CalendarDays className="h-3 w-3" />
                        <time dateTime={rp.publishedAt}>
                          {new Date(rp.publishedAt).toLocaleDateString(dateLocale)}
                        </time>
                      </div>
                      <p className="mt-2 font-display text-sm font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">
                        {rp.title}
                      </p>
                      <div className="mt-3 flex items-center gap-1 text-xs font-medium text-primary">
                        {t("blog_post.read")}
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <Link
                    to={`/${lang}/blog`}
                    className="text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
                  >
                    {t("blog_post.view_all")}
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container flex flex-col items-center justify-between gap-4 sm:flex-row">
          <span className="font-display text-sm font-semibold">
            <span className="text-gradient-gold">{t("nav.booked")}</span>{t("nav.dental")}
          </span>
          <p className="text-xs text-muted-foreground">
            {t("footer.tagline")}
          </p>
        </div>
      </footer>
    </div>
  );
}
