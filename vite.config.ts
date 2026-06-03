import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { writeFile } from "node:fs/promises";
import { componentTagger } from "lovable-tagger";

interface SanityPostMeta {
  slug: string;
  publishedAt?: string;
}

async function getSanityBlogPosts() {
  const env = loadEnv(process.env.NODE_ENV || "production", process.cwd(), "");
  const projectId = env.VITE_SANITY_PROJECT_ID;
  const dataset = env.VITE_SANITY_DATASET;
  const apiVersion = env.VITE_SANITY_API_VERSION || "2024-07-01";
  const token = env.VITE_SANITY_READ_TOKEN;

  if (!projectId || !dataset) return [] as SanityPostMeta[];

  const query = encodeURIComponent(
    '*[_type == "post" && defined(slug.current)] | order(publishedAt desc){"slug": slug.current, publishedAt}',
  );
  const endpoint = `https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}?query=${query}`;
  const response = await fetch(endpoint, {
    headers: token ? { Authorization: `Bearer ${token}` } : undefined,
  });

  if (!response.ok) {
    throw new Error(`Unable to fetch Sanity blog slugs (${response.status})`);
  }

  const payload = (await response.json()) as {
    result?: Array<{ slug?: string; publishedAt?: string }>;
  };
  return (payload.result || [])
    .map((item) => ({
      slug: item.slug || "",
      publishedAt: item.publishedAt,
    }))
    .filter((item) => item.slug.length > 0);
}

const SUPPORTED_LANGS = ["en", "he"];

async function getBlogStaticRoutes() {
  const posts = await getSanityBlogPosts();
  return posts.flatMap((post) => SUPPORTED_LANGS.map((lang) => `/${lang}/blog/${post.slug}`));
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

function urlNode(options: {
  loc: string;
  lastmod: string;
  changefreq: "daily" | "weekly" | "monthly";
  priority: string;
  alternates?: Record<string, string>;
}) {
  const { loc, lastmod, changefreq, priority, alternates } = options;
  const alternateNodes = alternates
    ? Object.entries(alternates).map(
        ([lang, href]) =>
          `    <xhtml:link rel="alternate" hreflang="${xmlEscape(lang)}" href="${xmlEscape(href)}" />`,
      )
    : [];
  return [
    "  <url>",
    `    <loc>${xmlEscape(loc)}</loc>`,
    `    <lastmod>${xmlEscape(lastmod)}</lastmod>`,
    `    <changefreq>${changefreq}</changefreq>`,
    `    <priority>${priority}</priority>`,
    ...alternateNodes,
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
  const siteUrl = (env.VITE_SITE_URL || "https://booked.dental").replace(/\/+$/, "");
  const now = new Date().toISOString();
  const posts = await getSanityBlogPosts();

  const staticUrls = SUPPORTED_LANGS.flatMap(lang => [
    urlNode({ loc: `${siteUrl}/${lang}`, lastmod: now, changefreq: "weekly", priority: "1.0", alternates: localizedAlternates(siteUrl, "/") }),
    urlNode({ loc: `${siteUrl}/${lang}/book`, lastmod: now, changefreq: "monthly", priority: "0.8", alternates: localizedAlternates(siteUrl, "/book") }),
    urlNode({ loc: `${siteUrl}/${lang}/blog`, lastmod: now, changefreq: "weekly", priority: "0.9", alternates: localizedAlternates(siteUrl, "/blog") }),
  ]);

  const blogUrls = posts.flatMap((post) =>
    SUPPORTED_LANGS.map(lang => 
      urlNode({
        loc: `${siteUrl}/${lang}/blog/${post.slug}`,
        lastmod: toIsoDate(post.publishedAt),
        changefreq: "monthly",
        priority: "0.8",
        alternates: localizedAlternates(siteUrl, `/blog/${post.slug}`),
      })
    )
  );

  const sitemapXml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    ...staticUrls,
    ...blogUrls,
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
    includedRoutes: async (paths: string[]) => {
      const baseStaticRoutes = paths.filter((route) => !route.includes(":"));
      const staticRoutes = baseStaticRoutes.flatMap(route => 
        route === "/" ? SUPPORTED_LANGS.map(lang => `/${lang}`) : SUPPORTED_LANGS.map(lang => `/${lang}${route}`)
      );
      const blogPostRoutes = await getBlogStaticRoutes();
      return Array.from(new Set(["/", ...staticRoutes, ...blogPostRoutes]));
    },
    onFinished: async (outDir: string) => {
      await generateSitemap(outDir);
    },
  },
}));
