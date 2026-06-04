import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { writeFile } from "node:fs/promises";
import { componentTagger } from "lovable-tagger";
import { supplementalBlogPosts } from "./src/data/supplemental-blog-posts";

interface SanityPostMeta {
  slug: string;
  title?: string;
  excerpt?: string;
  publishedAt?: string;
  mainImageAlt?: string;
  mainImageRef?: string;
}

async function getSanityBlogPosts() {
  const env = loadEnv(process.env.NODE_ENV || "production", process.cwd(), "");
  const projectId = env.VITE_SANITY_PROJECT_ID;
  const dataset = env.VITE_SANITY_DATASET;
  const apiVersion = env.VITE_SANITY_API_VERSION || "2024-07-01";
  const token = env.VITE_SANITY_READ_TOKEN;

  if (!projectId || !dataset) return [] as SanityPostMeta[];

  const query = encodeURIComponent(
    '*[_type == "post" && defined(slug.current)] | order(publishedAt desc){"slug": slug.current, title, excerpt, publishedAt, "mainImageAlt": mainImage.alt, "mainImageRef": mainImage.asset._ref}',
  );
  const endpoint = `https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}?query=${query}`;
  const response = await fetch(endpoint, {
    headers: token ? { Authorization: `Bearer ${token}` } : undefined,
  });

  if (!response.ok) {
    throw new Error(`Unable to fetch Sanity blog slugs (${response.status})`);
  }

  const payload = (await response.json()) as {
    result?: Array<{
      slug?: string;
      title?: string;
      excerpt?: string;
      publishedAt?: string;
      mainImageAlt?: string;
      mainImageRef?: string;
    }>;
  };
  return (payload.result || [])
    .map((item) => ({
      slug: item.slug || "",
      title: item.title,
      excerpt: item.excerpt,
      publishedAt: item.publishedAt,
      mainImageAlt: item.mainImageAlt,
      mainImageRef: item.mainImageRef,
    }))
    .filter((item) => item.slug.length > 0);
}

const SUPPORTED_LANGS = ["en", "he"];
const LOCALIZED_STATIC_PATHS = ["", "/book", "/blog", "/about", "/privacy", "/thank-you"];
const SERVICE_STATIC_PATHS = [
  "/services/dental-implant-marketing",
  "/services/dental-lead-quality-checklist",
  "/services/all-on-4-dental-implant-marketing",
  "/services/dental-implant-lead-generation",
  "/services/all-on-4-lead-generation",
  "/services/full-arch-implant-marketing",
  "/services/google-ads-for-dental-implants",
  "/services/facebook-ads-for-dentists",
  "/services/cosmetic-dentistry-marketing",
  "/services/veneers-marketing",
  "/services/cosmetic-dentist-marketing-agency",
  "/services/dental-lead-generation",
  "/services/dental-lead-filtering",
  "/services/ugc-dental-ads",
  "/services/roi-methodology",
  "/services/qualified-opportunity-methodology",
  "/services/booked-dental-vs-dental-marketing-agency",
  "/services/dental-lead-generation-vs-patient-acquisition",
];
const BLOG_CANONICAL_SLUGS: Record<string, string> = {
  "how-cosmetic-dentists-get-more-consults": "cosmetic-dentists-high-intent-patients",
  "how-to-get-more-cosmetic-consults-fast": "cosmetic-dentistry-patient-acquisition-fast",
  "generate-consultation-calls-for-dentists": "dental-lead-filtering-for-dentists",
  "how-dental-clinics-get-more-implant-consultations-2026": "how-to-get-more-dental-implant-patients",
};
const CONSOLIDATED_BLOG_DUPLICATES = new Set([
  "generate-consultation-calls-for-dentist",
  "implant-consult-booking-system",
  "affordable-dental-ads-that-book-consults",
  "dental-consultation-funnel",
  "how-to-reduce-no-show-consults",
  "implant-consultation-funnel",
  "cosmetic-consult-follow-up-scripts-that-book",
  "dentist-facebook-ads-that-book-consults",
  "קידום-בגוגל-לרופאי-שיניים-תוצאות-מהירות",
  "פרסום-בגוגל-לרופאי-שיניים-לידים-חדשים",
  "סוכנות-שיווק-לרופאי-שיניים-בחירת-חברה-מקצועית",
  "משרד-פרסום-לרופאי-שיניים-אסטרטגיה-דיגיטלית",
  "אורגני-לרופאי-שיניים-בגוגל",
  "קידום-אתרים-לרופאי-שיניים-עמוד-ראשון",
  "מרפאות-שיניים-חייבות-אתר-מקצועי",
  "אתר-למרפאת-שיניים-המרת-מטופלים",
  "בניית-אתרים-לרופאי-שיניים-הגדלת-מטופלים",
  "שיווק-לרופאי-שיניים-בניית-אמון-דיגיטלי",
  "שיווק-מרפאות-שיניים-בניית-מותג-דיגיטלי",
  "שיווק-דיגיטלי-לרופאי-שיניים-אסטרטגיית-צמיחה",
  "שיווק-קליניקת-שיניים-בדיגיטל",
  "פרסום-מרפאת-שיניים-משיכת-מטופלים",
  "פרסום-ממומן-לרופאי-שיניים-המרת-לידים",
  "ניהול-פרסום-לרופאי-שיניים-תוצאות-אמיתיות",
]);

function canonicalBlogSlug(slug: string) {
  return BLOG_CANONICAL_SLUGS[slug] || slug;
}

function isConsolidatedBlogDuplicate(slug: string) {
  return CONSOLIDATED_BLOG_DUPLICATES.has(slug);
}

function uniqueValues(values: string[]) {
  return Array.from(new Set(values));
}

function postLanguage(post: SanityPostMeta) {
  return /[\u0590-\u05FF]/.test(`${post.slug} ${post.title || ""} ${post.excerpt || ""}`)
    ? "he"
    : "en";
}

async function getBlogStaticRoutes() {
  const posts = await getSanityBlogPosts();
  return uniqueValues([
    ...posts
      .filter((post) => !isConsolidatedBlogDuplicate(post.slug))
      .map((post) => `/${postLanguage(post)}/blog/${canonicalBlogSlug(post.slug)}`),
    ...supplementalBlogPosts.map((post) => `/${postLanguage(post)}/blog/${post.slug}`),
  ]);
}

function toIsoDate(value?: string) {
  if (!value) return new Date().toISOString();
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? new Date().toISOString() : parsed.toISOString();
}

function xmlEscape(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function sanityImageUrl(assetRef?: string) {
  if (!assetRef) return null;
  const match = assetRef.match(/^image-([a-f0-9]+)-(\d+)x(\d+)-([a-z0-9]+)$/i);
  if (!match) return null;
  const [, id, width, height, extension] = match;
  const env = loadEnv(process.env.NODE_ENV || "production", process.cwd(), "");
  const projectId = env.VITE_SANITY_PROJECT_ID;
  const dataset = env.VITE_SANITY_DATASET;
  if (!projectId || !dataset) return null;
  return `https://cdn.sanity.io/images/${projectId}/${dataset}/${id}-${width}x${height}.${extension}`;
}

function urlNode(options: {
  loc: string;
  lastmod: string;
  changefreq: "daily" | "weekly" | "monthly" | "yearly";
  priority: string;
  alternates?: Record<string, string>;
  image?: { loc: string; title?: string; caption?: string };
}) {
  const { loc, lastmod, changefreq, priority, alternates, image } = options;
  const alternateNodes = alternates
    ? Object.entries(alternates).map(
        ([lang, href]) =>
          `    <xhtml:link rel="alternate" hreflang="${xmlEscape(lang)}" href="${xmlEscape(href)}" />`,
      )
    : [];
  const imageNodes = image
    ? [
        "    <image:image>",
        `      <image:loc>${xmlEscape(image.loc)}</image:loc>`,
        image.title ? `      <image:title>${xmlEscape(image.title)}</image:title>` : "",
        image.caption ? `      <image:caption>${xmlEscape(image.caption)}</image:caption>` : "",
        "    </image:image>",
      ].filter(Boolean)
    : [];
  return [
    "  <url>",
    `    <loc>${xmlEscape(loc)}</loc>`,
    `    <lastmod>${xmlEscape(lastmod)}</lastmod>`,
    `    <changefreq>${changefreq}</changefreq>`,
    `    <priority>${priority}</priority>`,
    ...alternateNodes,
    ...imageNodes,
    "  </url>",
  ].join("\n");
}

function localizedAlternates(siteUrl: string, path: string) {
  const cleanPath = path === "/" ? "" : path;
  return {
    en: `${siteUrl}/en${cleanPath}`,
    he: `${siteUrl}/he${cleanPath}`,
    "x-default": `${siteUrl}/en${cleanPath}`,
  };
}

async function generateSitemap(outDir: string) {
  const env = loadEnv(process.env.NODE_ENV || "production", process.cwd(), "");
  const siteUrl = (env.VITE_SITE_URL || "https://www.booked.dental").replace(/\/+$/, "");
  const now = new Date().toISOString();
  const posts = await getSanityBlogPosts();

  const staticUrls = SUPPORTED_LANGS.flatMap(lang => [
    urlNode({ loc: `${siteUrl}/${lang}`, lastmod: now, changefreq: "weekly", priority: "1.0", alternates: localizedAlternates(siteUrl, "/") }),
    urlNode({ loc: `${siteUrl}/${lang}/book`, lastmod: now, changefreq: "monthly", priority: "0.8", alternates: localizedAlternates(siteUrl, "/book") }),
    urlNode({ loc: `${siteUrl}/${lang}/blog`, lastmod: now, changefreq: "weekly", priority: "0.9", alternates: localizedAlternates(siteUrl, "/blog") }),
    urlNode({ loc: `${siteUrl}/${lang}/about`, lastmod: now, changefreq: "monthly", priority: "0.6", alternates: localizedAlternates(siteUrl, "/about") }),
    urlNode({ loc: `${siteUrl}/${lang}/privacy`, lastmod: now, changefreq: "yearly", priority: "0.2", alternates: localizedAlternates(siteUrl, "/privacy") }),
    ...SERVICE_STATIC_PATHS.map((servicePath) =>
      urlNode({
        loc: `${siteUrl}/${lang}${servicePath}`,
        lastmod: now,
        changefreq: "monthly",
        priority: "0.75",
        alternates: localizedAlternates(siteUrl, servicePath),
      }),
    ),
  ]);

  const seenBlogUrls = new Set<string>();
  const blogUrls = posts
    .filter((post) => !isConsolidatedBlogDuplicate(post.slug))
    .map((post) => {
    const lang = postLanguage(post);
    const slug = canonicalBlogSlug(post.slug);
    const imageUrl = sanityImageUrl(post.mainImageRef);
    const loc = `${siteUrl}/${lang}/blog/${slug}`;
    if (seenBlogUrls.has(loc)) return "";
    seenBlogUrls.add(loc);
    return urlNode({
      loc,
      lastmod: toIsoDate(post.publishedAt),
      changefreq: "monthly",
      priority: "0.8",
      image: imageUrl
        ? {
            loc: imageUrl,
            title: post.title,
            caption: post.mainImageAlt,
          }
        : undefined,
    });
  }).filter(Boolean);
  const supplementalBlogUrls = supplementalBlogPosts.map((post) =>
    urlNode({
      loc: `${siteUrl}/${postLanguage(post)}/blog/${post.slug}`,
      lastmod: toIsoDate(post.publishedAt),
      changefreq: "monthly",
      priority: "0.8",
      image: post.seoImage
        ? {
            loc: post.seoImage.startsWith("http") ? post.seoImage : `${siteUrl}${post.seoImage}`,
            title: post.title,
            caption: post.mainImageAlt,
          }
        : undefined,
    }),
  );

  const sitemapXml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">',
    ...staticUrls,
    ...blogUrls,
    ...supplementalBlogUrls,
    "</urlset>",
    "",
  ].join("\n");

  await writeFile(path.join(outDir, "sitemap.xml"), sitemapXml, "utf8");
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  ssgOptions: {
    dirStyle: "nested",
    includedRoutes: async () => {
      const staticRoutes = SUPPORTED_LANGS.flatMap((lang) =>
        [...LOCALIZED_STATIC_PATHS, ...SERVICE_STATIC_PATHS].map((route) => `/${lang}${route}`),
      );
      const blogPostRoutes = await getBlogStaticRoutes();
      return Array.from(new Set(["/", ...staticRoutes, ...blogPostRoutes]));
    },
    onFinished: async (outDir: string) => {
      await generateSitemap(outDir);
    },
  },
}));
