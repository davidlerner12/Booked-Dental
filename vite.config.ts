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

async function getBlogStaticRoutes() {
  const posts = await getSanityBlogPosts();
  return posts.map((post) => `/blog/${post.slug}`);
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
}) {
  const { loc, lastmod, changefreq, priority } = options;
  return [
    "  <url>",
    `    <loc>${xmlEscape(loc)}</loc>`,
    `    <lastmod>${xmlEscape(lastmod)}</lastmod>`,
    `    <changefreq>${changefreq}</changefreq>`,
    `    <priority>${priority}</priority>`,
    "  </url>",
  ].join("\n");
}

async function generateSitemap(outDir: string) {
  const env = loadEnv(process.env.NODE_ENV || "production", process.cwd(), "");
  const siteUrl = (env.VITE_SITE_URL || "https://booked.dental").replace(/\/+$/, "");
  const now = new Date().toISOString();
  const posts = await getSanityBlogPosts();

  const staticUrls = [
    urlNode({ loc: `${siteUrl}/`, lastmod: now, changefreq: "weekly", priority: "1.0" }),
    urlNode({ loc: `${siteUrl}/book`, lastmod: now, changefreq: "monthly", priority: "0.8" }),
    urlNode({ loc: `${siteUrl}/privacy`, lastmod: now, changefreq: "monthly", priority: "0.3" }),
    urlNode({ loc: `${siteUrl}/blog`, lastmod: now, changefreq: "weekly", priority: "0.9" }),
  ];

  const blogUrls = posts.map((post) =>
    urlNode({
      loc: `${siteUrl}/blog/${post.slug}`,
      lastmod: toIsoDate(post.publishedAt),
      changefreq: "monthly",
      priority: "0.8",
    }),
  );

  const sitemapXml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
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
      const staticRoutes = paths.filter((route) => !route.includes(":"));
      const blogPostRoutes = await getBlogStaticRoutes();
      return Array.from(new Set([...staticRoutes, ...blogPostRoutes]));
    },
    onFinished: async (outDir: string) => {
      await generateSitemap(outDir);
    },
  },
}));
