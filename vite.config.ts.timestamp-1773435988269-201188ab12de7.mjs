// vite.config.ts
import { defineConfig, loadEnv } from "file:///E:/Upwork/David/Booked-Dental/node_modules/vite/dist/node/index.js";
import react from "file:///E:/Upwork/David/Booked-Dental/node_modules/@vitejs/plugin-react-swc/index.js";
import path from "path";
import { writeFile } from "node:fs/promises";
import { componentTagger } from "file:///E:/Upwork/David/Booked-Dental/node_modules/lovable-tagger/dist/index.js";
var __vite_injected_original_dirname = "e:\\Upwork\\David\\Booked-Dental";
async function getSanityBlogPosts() {
  const env = loadEnv(process.env.NODE_ENV || "production", process.cwd(), "");
  const projectId = env.VITE_SANITY_PROJECT_ID;
  const dataset = env.VITE_SANITY_DATASET;
  const apiVersion = env.VITE_SANITY_API_VERSION || "2024-07-01";
  const token = env.VITE_SANITY_READ_TOKEN;
  if (!projectId || !dataset) return [];
  const query = encodeURIComponent(
    '*[_type == "post" && defined(slug.current)] | order(publishedAt desc){"slug": slug.current, publishedAt}'
  );
  const endpoint = `https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}?query=${query}`;
  const response = await fetch(endpoint, {
    headers: token ? { Authorization: `Bearer ${token}` } : void 0
  });
  if (!response.ok) {
    throw new Error(`Unable to fetch Sanity blog slugs (${response.status})`);
  }
  const payload = await response.json();
  return (payload.result || []).map((item) => ({
    slug: item.slug || "",
    publishedAt: item.publishedAt
  })).filter((item) => item.slug.length > 0);
}
async function getBlogStaticRoutes() {
  const posts = await getSanityBlogPosts();
  return posts.map((post) => `/blog/${post.slug}`);
}
function toIsoDate(value) {
  if (!value) return (/* @__PURE__ */ new Date()).toISOString();
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? (/* @__PURE__ */ new Date()).toISOString() : parsed.toISOString();
}
function xmlEscape(value) {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&apos;");
}
function urlNode(options) {
  const { loc, lastmod, changefreq, priority } = options;
  return [
    "  <url>",
    `    <loc>${xmlEscape(loc)}</loc>`,
    `    <lastmod>${xmlEscape(lastmod)}</lastmod>`,
    `    <changefreq>${changefreq}</changefreq>`,
    `    <priority>${priority}</priority>`,
    "  </url>"
  ].join("\n");
}
async function generateSitemap(outDir) {
  const env = loadEnv(process.env.NODE_ENV || "production", process.cwd(), "");
  const siteUrl = (env.VITE_SITE_URL || "https://booked.dental").replace(/\/+$/, "");
  const now = (/* @__PURE__ */ new Date()).toISOString();
  const posts = await getSanityBlogPosts();
  const staticUrls = [
    urlNode({ loc: `${siteUrl}/`, lastmod: now, changefreq: "weekly", priority: "1.0" }),
    urlNode({ loc: `${siteUrl}/book`, lastmod: now, changefreq: "monthly", priority: "0.8" }),
    urlNode({ loc: `${siteUrl}/privacy`, lastmod: now, changefreq: "monthly", priority: "0.3" }),
    urlNode({ loc: `${siteUrl}/blog`, lastmod: now, changefreq: "weekly", priority: "0.9" })
  ];
  const blogUrls = posts.map(
    (post) => urlNode({
      loc: `${siteUrl}/blog/${post.slug}`,
      lastmod: toIsoDate(post.publishedAt),
      changefreq: "monthly",
      priority: "0.8"
    })
  );
  const sitemapXml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...staticUrls,
    ...blogUrls,
    "</urlset>",
    ""
  ].join("\n");
  await writeFile(path.join(outDir, "sitemap.xml"), sitemapXml, "utf8");
}
var vite_config_default = defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false
    }
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    }
  },
  ssgOptions: {
    dirStyle: "nested",
    includedRoutes: async (paths) => {
      const staticRoutes = paths.filter((route) => !route.includes(":"));
      const blogPostRoutes = await getBlogStaticRoutes();
      return Array.from(/* @__PURE__ */ new Set([...staticRoutes, ...blogPostRoutes]));
    },
    onFinished: async (outDir) => {
      await generateSitemap(outDir);
    }
  }
}));
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJlOlxcXFxVcHdvcmtcXFxcRGF2aWRcXFxcQm9va2VkLURlbnRhbFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiZTpcXFxcVXB3b3JrXFxcXERhdmlkXFxcXEJvb2tlZC1EZW50YWxcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2U6L1Vwd29yay9EYXZpZC9Cb29rZWQtRGVudGFsL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnLCBsb2FkRW52IH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdC1zd2NcIjtcclxuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcclxuaW1wb3J0IHsgd3JpdGVGaWxlIH0gZnJvbSBcIm5vZGU6ZnMvcHJvbWlzZXNcIjtcclxuaW1wb3J0IHsgY29tcG9uZW50VGFnZ2VyIH0gZnJvbSBcImxvdmFibGUtdGFnZ2VyXCI7XHJcblxyXG5pbnRlcmZhY2UgU2FuaXR5UG9zdE1ldGEge1xyXG4gIHNsdWc6IHN0cmluZztcclxuICBwdWJsaXNoZWRBdD86IHN0cmluZztcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0U2FuaXR5QmxvZ1Bvc3RzKCkge1xyXG4gIGNvbnN0IGVudiA9IGxvYWRFbnYocHJvY2Vzcy5lbnYuTk9ERV9FTlYgfHwgXCJwcm9kdWN0aW9uXCIsIHByb2Nlc3MuY3dkKCksIFwiXCIpO1xyXG4gIGNvbnN0IHByb2plY3RJZCA9IGVudi5WSVRFX1NBTklUWV9QUk9KRUNUX0lEO1xyXG4gIGNvbnN0IGRhdGFzZXQgPSBlbnYuVklURV9TQU5JVFlfREFUQVNFVDtcclxuICBjb25zdCBhcGlWZXJzaW9uID0gZW52LlZJVEVfU0FOSVRZX0FQSV9WRVJTSU9OIHx8IFwiMjAyNC0wNy0wMVwiO1xyXG4gIGNvbnN0IHRva2VuID0gZW52LlZJVEVfU0FOSVRZX1JFQURfVE9LRU47XHJcblxyXG4gIGlmICghcHJvamVjdElkIHx8ICFkYXRhc2V0KSByZXR1cm4gW10gYXMgU2FuaXR5UG9zdE1ldGFbXTtcclxuXHJcbiAgY29uc3QgcXVlcnkgPSBlbmNvZGVVUklDb21wb25lbnQoXHJcbiAgICAnKltfdHlwZSA9PSBcInBvc3RcIiAmJiBkZWZpbmVkKHNsdWcuY3VycmVudCldIHwgb3JkZXIocHVibGlzaGVkQXQgZGVzYyl7XCJzbHVnXCI6IHNsdWcuY3VycmVudCwgcHVibGlzaGVkQXR9JyxcclxuICApO1xyXG4gIGNvbnN0IGVuZHBvaW50ID0gYGh0dHBzOi8vJHtwcm9qZWN0SWR9LmFwaS5zYW5pdHkuaW8vdiR7YXBpVmVyc2lvbn0vZGF0YS9xdWVyeS8ke2RhdGFzZXR9P3F1ZXJ5PSR7cXVlcnl9YDtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGVuZHBvaW50LCB7XHJcbiAgICBoZWFkZXJzOiB0b2tlbiA/IHsgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAgfSA6IHVuZGVmaW5lZCxcclxuICB9KTtcclxuXHJcbiAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKGBVbmFibGUgdG8gZmV0Y2ggU2FuaXR5IGJsb2cgc2x1Z3MgKCR7cmVzcG9uc2Uuc3RhdHVzfSlgKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHBheWxvYWQgPSAoYXdhaXQgcmVzcG9uc2UuanNvbigpKSBhcyB7XHJcbiAgICByZXN1bHQ/OiBBcnJheTx7IHNsdWc/OiBzdHJpbmc7IHB1Ymxpc2hlZEF0Pzogc3RyaW5nIH0+O1xyXG4gIH07XHJcbiAgcmV0dXJuIChwYXlsb2FkLnJlc3VsdCB8fCBbXSlcclxuICAgIC5tYXAoKGl0ZW0pID0+ICh7XHJcbiAgICAgIHNsdWc6IGl0ZW0uc2x1ZyB8fCBcIlwiLFxyXG4gICAgICBwdWJsaXNoZWRBdDogaXRlbS5wdWJsaXNoZWRBdCxcclxuICAgIH0pKVxyXG4gICAgLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5zbHVnLmxlbmd0aCA+IDApO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRCbG9nU3RhdGljUm91dGVzKCkge1xyXG4gIGNvbnN0IHBvc3RzID0gYXdhaXQgZ2V0U2FuaXR5QmxvZ1Bvc3RzKCk7XHJcbiAgcmV0dXJuIHBvc3RzLm1hcCgocG9zdCkgPT4gYC9ibG9nLyR7cG9zdC5zbHVnfWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiB0b0lzb0RhdGUodmFsdWU/OiBzdHJpbmcpIHtcclxuICBpZiAoIXZhbHVlKSByZXR1cm4gbmV3IERhdGUoKS50b0lTT1N0cmluZygpO1xyXG4gIGNvbnN0IHBhcnNlZCA9IG5ldyBEYXRlKHZhbHVlKTtcclxuICByZXR1cm4gTnVtYmVyLmlzTmFOKHBhcnNlZC5nZXRUaW1lKCkpID8gbmV3IERhdGUoKS50b0lTT1N0cmluZygpIDogcGFyc2VkLnRvSVNPU3RyaW5nKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHhtbEVzY2FwZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgcmV0dXJuIHZhbHVlXHJcbiAgICAucmVwbGFjZUFsbChcIiZcIiwgXCImYW1wO1wiKVxyXG4gICAgLnJlcGxhY2VBbGwoXCI8XCIsIFwiJmx0O1wiKVxyXG4gICAgLnJlcGxhY2VBbGwoXCI+XCIsIFwiJmd0O1wiKVxyXG4gICAgLnJlcGxhY2VBbGwoJ1wiJywgXCImcXVvdDtcIilcclxuICAgIC5yZXBsYWNlQWxsKFwiJ1wiLCBcIiZhcG9zO1wiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdXJsTm9kZShvcHRpb25zOiB7XHJcbiAgbG9jOiBzdHJpbmc7XHJcbiAgbGFzdG1vZDogc3RyaW5nO1xyXG4gIGNoYW5nZWZyZXE6IFwiZGFpbHlcIiB8IFwid2Vla2x5XCIgfCBcIm1vbnRobHlcIjtcclxuICBwcmlvcml0eTogc3RyaW5nO1xyXG59KSB7XHJcbiAgY29uc3QgeyBsb2MsIGxhc3Rtb2QsIGNoYW5nZWZyZXEsIHByaW9yaXR5IH0gPSBvcHRpb25zO1xyXG4gIHJldHVybiBbXHJcbiAgICBcIiAgPHVybD5cIixcclxuICAgIGAgICAgPGxvYz4ke3htbEVzY2FwZShsb2MpfTwvbG9jPmAsXHJcbiAgICBgICAgIDxsYXN0bW9kPiR7eG1sRXNjYXBlKGxhc3Rtb2QpfTwvbGFzdG1vZD5gLFxyXG4gICAgYCAgICA8Y2hhbmdlZnJlcT4ke2NoYW5nZWZyZXF9PC9jaGFuZ2VmcmVxPmAsXHJcbiAgICBgICAgIDxwcmlvcml0eT4ke3ByaW9yaXR5fTwvcHJpb3JpdHk+YCxcclxuICAgIFwiICA8L3VybD5cIixcclxuICBdLmpvaW4oXCJcXG5cIik7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdlbmVyYXRlU2l0ZW1hcChvdXREaXI6IHN0cmluZykge1xyXG4gIGNvbnN0IGVudiA9IGxvYWRFbnYocHJvY2Vzcy5lbnYuTk9ERV9FTlYgfHwgXCJwcm9kdWN0aW9uXCIsIHByb2Nlc3MuY3dkKCksIFwiXCIpO1xyXG4gIGNvbnN0IHNpdGVVcmwgPSAoZW52LlZJVEVfU0lURV9VUkwgfHwgXCJodHRwczovL2Jvb2tlZC5kZW50YWxcIikucmVwbGFjZSgvXFwvKyQvLCBcIlwiKTtcclxuICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCk7XHJcbiAgY29uc3QgcG9zdHMgPSBhd2FpdCBnZXRTYW5pdHlCbG9nUG9zdHMoKTtcclxuXHJcbiAgY29uc3Qgc3RhdGljVXJscyA9IFtcclxuICAgIHVybE5vZGUoeyBsb2M6IGAke3NpdGVVcmx9L2AsIGxhc3Rtb2Q6IG5vdywgY2hhbmdlZnJlcTogXCJ3ZWVrbHlcIiwgcHJpb3JpdHk6IFwiMS4wXCIgfSksXHJcbiAgICB1cmxOb2RlKHsgbG9jOiBgJHtzaXRlVXJsfS9ib29rYCwgbGFzdG1vZDogbm93LCBjaGFuZ2VmcmVxOiBcIm1vbnRobHlcIiwgcHJpb3JpdHk6IFwiMC44XCIgfSksXHJcbiAgICB1cmxOb2RlKHsgbG9jOiBgJHtzaXRlVXJsfS9wcml2YWN5YCwgbGFzdG1vZDogbm93LCBjaGFuZ2VmcmVxOiBcIm1vbnRobHlcIiwgcHJpb3JpdHk6IFwiMC4zXCIgfSksXHJcbiAgICB1cmxOb2RlKHsgbG9jOiBgJHtzaXRlVXJsfS9ibG9nYCwgbGFzdG1vZDogbm93LCBjaGFuZ2VmcmVxOiBcIndlZWtseVwiLCBwcmlvcml0eTogXCIwLjlcIiB9KSxcclxuICBdO1xyXG5cclxuICBjb25zdCBibG9nVXJscyA9IHBvc3RzLm1hcCgocG9zdCkgPT5cclxuICAgIHVybE5vZGUoe1xyXG4gICAgICBsb2M6IGAke3NpdGVVcmx9L2Jsb2cvJHtwb3N0LnNsdWd9YCxcclxuICAgICAgbGFzdG1vZDogdG9Jc29EYXRlKHBvc3QucHVibGlzaGVkQXQpLFxyXG4gICAgICBjaGFuZ2VmcmVxOiBcIm1vbnRobHlcIixcclxuICAgICAgcHJpb3JpdHk6IFwiMC44XCIsXHJcbiAgICB9KSxcclxuICApO1xyXG5cclxuICBjb25zdCBzaXRlbWFwWG1sID0gW1xyXG4gICAgJzw/eG1sIHZlcnNpb249XCIxLjBcIiBlbmNvZGluZz1cIlVURi04XCI/PicsXHJcbiAgICAnPHVybHNldCB4bWxucz1cImh0dHA6Ly93d3cuc2l0ZW1hcHMub3JnL3NjaGVtYXMvc2l0ZW1hcC8wLjlcIj4nLFxyXG4gICAgLi4uc3RhdGljVXJscyxcclxuICAgIC4uLmJsb2dVcmxzLFxyXG4gICAgXCI8L3VybHNldD5cIixcclxuICAgIFwiXCIsXHJcbiAgXS5qb2luKFwiXFxuXCIpO1xyXG5cclxuICBhd2FpdCB3cml0ZUZpbGUocGF0aC5qb2luKG91dERpciwgXCJzaXRlbWFwLnhtbFwiKSwgc2l0ZW1hcFhtbCwgXCJ1dGY4XCIpO1xyXG59XHJcblxyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKHsgbW9kZSB9KSA9PiAoe1xyXG4gIHNlcnZlcjoge1xyXG4gICAgaG9zdDogXCI6OlwiLFxyXG4gICAgcG9ydDogODA4MCxcclxuICAgIGhtcjoge1xyXG4gICAgICBvdmVybGF5OiBmYWxzZSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBwbHVnaW5zOiBbcmVhY3QoKSwgbW9kZSA9PT0gXCJkZXZlbG9wbWVudFwiICYmIGNvbXBvbmVudFRhZ2dlcigpXS5maWx0ZXIoQm9vbGVhbiksXHJcbiAgcmVzb2x2ZToge1xyXG4gICAgYWxpYXM6IHtcclxuICAgICAgXCJAXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9zcmNcIiksXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgc3NnT3B0aW9uczoge1xyXG4gICAgZGlyU3R5bGU6IFwibmVzdGVkXCIsXHJcbiAgICBpbmNsdWRlZFJvdXRlczogYXN5bmMgKHBhdGhzOiBzdHJpbmdbXSkgPT4ge1xyXG4gICAgICBjb25zdCBzdGF0aWNSb3V0ZXMgPSBwYXRocy5maWx0ZXIoKHJvdXRlKSA9PiAhcm91dGUuaW5jbHVkZXMoXCI6XCIpKTtcclxuICAgICAgY29uc3QgYmxvZ1Bvc3RSb3V0ZXMgPSBhd2FpdCBnZXRCbG9nU3RhdGljUm91dGVzKCk7XHJcbiAgICAgIHJldHVybiBBcnJheS5mcm9tKG5ldyBTZXQoWy4uLnN0YXRpY1JvdXRlcywgLi4uYmxvZ1Bvc3RSb3V0ZXNdKSk7XHJcbiAgICB9LFxyXG4gICAgb25GaW5pc2hlZDogYXN5bmMgKG91dERpcjogc3RyaW5nKSA9PiB7XHJcbiAgICAgIGF3YWl0IGdlbmVyYXRlU2l0ZW1hcChvdXREaXIpO1xyXG4gICAgfSxcclxuICB9LFxyXG59KSk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBaVIsU0FBUyxjQUFjLGVBQWU7QUFDdlQsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sVUFBVTtBQUNqQixTQUFTLGlCQUFpQjtBQUMxQixTQUFTLHVCQUF1QjtBQUpoQyxJQUFNLG1DQUFtQztBQVd6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
