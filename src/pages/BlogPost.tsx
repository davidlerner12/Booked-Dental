import { PortableText } from "@portabletext/react";
import { Helmet } from "react-helmet";
import { Link, Navigate, useLoaderData } from "react-router-dom";
import { ArrowLeft, ArrowRight, CalendarDays, ChevronRight } from "lucide-react";
import type { ReactNode } from "react";
import type { BlogPostLoaderData } from "./blog-loaders";
import { urlFor } from "@/lib/sanity";

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
            alt={value.alt || "Blog image"}
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
            alt={value.alt || "Blog image"}
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
                allowFullScreen
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
  const { post, related } = useLoaderData() as BlogPostLoaderData;

  if (!post) return <Navigate to="/blog" replace />;

  const postUrl = `https://booked.dental/blog/${post.slug}`;
  const metaTitle = `${post.title} | Booked.Dental`;
  const ogImage = post.mainImage
    ? urlFor(post.mainImage).width(1200).height(630).fit("crop").auto("format").url()
    : "https://booked.dental/og-image.png";
  const prioritizedKeywords = BLOG_SEO_KEYWORDS.slice(0, 4);
  const readingMinutes = estimateReadingMinutes(post.body);
  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: [ogImage],
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    inLanguage: "en-US",
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
        url: "https://booked.dental/og-image.png",
      },
    },
    keywords: BLOG_SEO_KEYWORDS.join(", "),
    timeRequired: `PT${readingMinutes}M`,
  };
  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://booked.dental/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://booked.dental/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: postUrl,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={BLOG_SEO_KEYWORDS.join(", ")} />
        <meta name="robots" content="index,follow,max-image-preview:large" />
        <meta property="og:site_name" content="Booked.Dental" />
        <meta property="og:locale" content="en_US" />
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
        <script type="application/ld+json">{JSON.stringify(articleStructuredData)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbStructuredData)}</script>
      </Helmet>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between">
          <Link
            to="/blog"
            className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            All articles
          </Link>
          <Link to="/" className="font-display text-lg font-semibold">
            <span className="text-gradient-gold">Booked</span>.Dental
          </Link>
          <Link
            to="/book"
            className="rounded-full bg-primary px-4 py-1.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Book a call
          </Link>
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
                <Link to="/" className="transition-colors hover:text-foreground">
                  Home
                </Link>
                <ChevronRight className="h-3 w-3" />
                <Link
                  to="/blog"
                  className="transition-colors hover:text-foreground"
                >
                  Blog
                </Link>
                <ChevronRight className="h-3 w-3" />
                <span className="line-clamp-1 text-foreground">{post.title}</span>
              </nav>

              {/* Meta */}
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <CalendarDays className="h-4 w-4" />
                <time dateTime={post.publishedAt}>
                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
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
            </div>
          </div>
        </section>

        {/* Article body */}
        <article className="py-12 md:py-16">
          <div className="container">
            <div className="mx-auto max-w-3xl">
              {post.mainImage && (
                <figure className="mb-10">
                  <img
                    src={urlFor(post.mainImage).width(1200).height(680).fit("crop").auto("format").url()}
                    alt={post.mainImageAlt || post.title}
                    className="w-full rounded-xl object-cover"
                    width={896}
                    height={504}
                  />
                </figure>
              )}
              <PortableText value={post.body || []} components={portableTextComponents} />

              {/* In-article CTA */}
              <div className="mt-12 rounded-xl border border-primary/20 bg-primary/5 p-8 text-center">
                <h3 className="font-display text-xl font-semibold md:text-2xl">
                  Ready to book more implant &amp; cosmetic consults?
                </h3>
                <p className="mt-2 text-muted-foreground">
                  See how Booked.Dental turns Meta and Google into a reliable
                  pipeline of qualified consultation calls.
                </p>
                <Link
                  to="/book"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Book a strategy call
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
                  More articles
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {related.map((rp) => (
                    <Link
                      key={rp._id}
                      to={`/blog/${rp.slug}`}
                      className="group rounded-xl border border-border bg-card p-5 transition-all duration-200 hover:border-primary/40 hover:bg-primary/5"
                    >
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <CalendarDays className="h-3 w-3" />
                        <time dateTime={rp.publishedAt}>
                          {new Date(rp.publishedAt).toLocaleDateString("en-US")}
                        </time>
                      </div>
                      <p className="mt-2 font-display text-sm font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">
                        {rp.title}
                      </p>
                      <div className="mt-3 flex items-center gap-1 text-xs font-medium text-primary">
                        Read
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <Link
                    to="/blog"
                    className="text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
                  >
                    View all articles →
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
            <span className="text-gradient-gold">Booked</span>.Dental
          </span>
          <p className="text-xs text-muted-foreground">
            Turning Meta ads into booked treatment plans.
          </p>
        </div>
      </footer>
    </div>
  );
}
