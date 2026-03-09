import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import { blogPosts } from "@/data/blog-posts";

export default function Blog() {
  useEffect(() => {
    const pageTitle = "Dental Marketing Blog | Booked.Dental";
    const pageDesc =
      "Dental marketing strategies for implant and cosmetic clinics. Learn how to get more qualified consults with Google Ads, Meta ads, UGC creative, and better lead handling.";
    const pageUrl = "https://booked.dental/blog";

    const prevTitle = document.title;
    document.title = pageTitle;

    const metaDesc = document.querySelector('meta[name="description"]');
    const prevDesc = metaDesc?.getAttribute("content") ?? "";
    if (metaDesc) metaDesc.setAttribute("content", pageDesc);

    type TagAttrs = Record<string, string>;
    const createdTags: Element[] = [];
    const restoredAttrs: { el: Element; attr: string; prev: string }[] = [];

    function upsertMeta(selector: string, attrs: TagAttrs) {
      let el = document.querySelector(selector);
      if (el) {
        Object.entries(attrs).forEach(([k, v]) => {
          restoredAttrs.push({ el: el!, attr: k, prev: el!.getAttribute(k) ?? "" });
          el!.setAttribute(k, v);
        });
      } else {
        const tag = selector.startsWith("link") ? "link" : "meta";
        el = document.createElement(tag);
        Object.entries(attrs).forEach(([k, v]) => el!.setAttribute(k, v));
        document.head.appendChild(el);
        createdTags.push(el);
      }
    }

    // Canonical
    upsertMeta('link[rel="canonical"]', { rel: "canonical", href: pageUrl });

    // Open Graph
    upsertMeta('meta[property="og:title"]', { property: "og:title", content: pageTitle });
    upsertMeta('meta[property="og:description"]', { property: "og:description", content: pageDesc });
    upsertMeta('meta[property="og:type"]', { property: "og:type", content: "website" });
    upsertMeta('meta[property="og:url"]', { property: "og:url", content: pageUrl });
    upsertMeta('meta[property="og:image"]', { property: "og:image", content: "https://booked.dental/og-image.png" });

    // Twitter / X
    upsertMeta('meta[name="twitter:card"]', { name: "twitter:card", content: "summary_large_image" });
    upsertMeta('meta[name="twitter:title"]', { name: "twitter:title", content: pageTitle });
    upsertMeta('meta[name="twitter:description"]', { name: "twitter:description", content: pageDesc });

    // Blog JSON-LD
    const script = document.createElement("script");
    script.id = "blog-listing-jsonld";
    script.type = "application/ld+json";
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Blog",
      name: "Dental Marketing Blog",
      url: pageUrl,
      description: pageDesc,
      publisher: {
        "@type": "Organization",
        name: "Booked.Dental",
        url: "https://booked.dental",
      },
    });
    document.head.appendChild(script);

    return () => {
      document.title = prevTitle;
      if (metaDesc) metaDesc.setAttribute("content", prevDesc);
      createdTags.forEach((el) => el.remove());
      restoredAttrs.forEach(({ el, attr, prev }) => el.setAttribute(attr, prev));
      document.getElementById("blog-listing-jsonld")?.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
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

      {/* Hero */}
      <section className="border-b border-border py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1 text-sm text-primary">
              Dental Marketing Blog
            </span>
            <h1 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
              Strategies for{" "}
              <span className="text-gradient-gold">Implant & Cosmetic</span>{" "}
              Clinics
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Practical guides on Google Ads, Meta campaigns, UGC creative, and
              patient acquisition systems that produce qualified consultation
              calls.
            </p>
          </div>
        </div>
      </section>

      {/* Posts grid */}
      <main className="container py-16 md:py-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-all duration-200 hover:border-primary/40 hover:bg-primary/5"
            >
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Clock className="h-3.5 w-3.5" />
                <span>{post.readTime}</span>
              </div>
              <h2 className="mt-3 font-display text-lg font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">
                {post.title}
              </h2>
              <p className="mt-2 flex-1 text-sm text-muted-foreground leading-relaxed">
                {post.excerpt}
              </p>
              <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary">
                Read article
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </main>

      {/* CTA */}
      <section className="border-t border-border py-16">
        <div className="container text-center">
          <p className="text-muted-foreground">
            Ready to turn your marketing into a qualified consult pipeline?
          </p>
          <Link
            to="/book"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Book a strategy call
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

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
