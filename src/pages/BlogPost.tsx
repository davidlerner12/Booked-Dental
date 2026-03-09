import { useEffect } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Clock, ChevronRight } from "lucide-react";
import { getBlogPost, blogPosts } from "@/data/blog-posts";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPost(slug) : undefined;

  useEffect(() => {
    if (!post) return;

    const postUrl = `https://booked.dental/blog/${post.slug}`;
    const postTitle = `${post.title} | Booked.Dental`;

    // --- Title ---
    const prevTitle = document.title;
    document.title = postTitle;

    // --- Meta description ---
    const metaDesc = document.querySelector('meta[name="description"]');
    const prevDesc = metaDesc?.getAttribute("content") ?? "";
    if (metaDesc) metaDesc.setAttribute("content", post.metaDescription);

    // Helper: upsert a <meta> or <link> tag; returns a cleanup fn
    type TagAttrs = Record<string, string>;
    const createdTags: Element[] = [];
    const restoredAttrs: { el: Element; attr: string; prev: string }[] = [];

    function upsertMeta(selector: string, attrs: TagAttrs) {
      let el = document.querySelector(selector);
      if (el) {
        // update each attribute, tracking old value for cleanup
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

    // --- Canonical ---
    upsertMeta('link[rel="canonical"]', { rel: "canonical", href: postUrl });

    // --- Open Graph ---
    upsertMeta('meta[property="og:title"]', { property: "og:title", content: postTitle });
    upsertMeta('meta[property="og:description"]', { property: "og:description", content: post.metaDescription });
    upsertMeta('meta[property="og:type"]', { property: "og:type", content: "article" });
    upsertMeta('meta[property="og:url"]', { property: "og:url", content: postUrl });
    upsertMeta('meta[property="og:image"]', { property: "og:image", content: "https://booked.dental/og-image.png" });

    // --- Twitter / X ---
    upsertMeta('meta[name="twitter:card"]', { name: "twitter:card", content: "summary_large_image" });
    upsertMeta('meta[name="twitter:title"]', { name: "twitter:title", content: postTitle });
    upsertMeta('meta[name="twitter:description"]', { name: "twitter:description", content: post.metaDescription });

    // --- Article JSON-LD ---
    const script = document.createElement("script");
    script.id = "blog-post-jsonld";
    script.type = "application/ld+json";
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: post.title,
      description: post.metaDescription,
      datePublished: post.publishDate,
      dateModified: post.publishDate,
      author: { "@type": "Organization", name: "Booked.Dental", url: "https://booked.dental" },
      publisher: { "@type": "Organization", name: "Booked.Dental", url: "https://booked.dental" },
      mainEntityOfPage: { "@type": "WebPage", "@id": postUrl },
    });
    document.head.appendChild(script);

    return () => {
      document.title = prevTitle;
      if (metaDesc) metaDesc.setAttribute("content", prevDesc);
      // Remove tags we created
      createdTags.forEach((el) => el.remove());
      // Restore attributes we overwrote
      restoredAttrs.forEach(({ el, attr, prev }) => el.setAttribute(attr, prev));
      document.getElementById("blog-post-jsonld")?.remove();
    };
  }, [post]);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // Related posts (up to 2 others)
  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
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
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
                <span>·</span>
                <time dateTime={post.publishDate}>
                  {new Date(post.publishDate).toLocaleDateString("en-US", {
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
              {post.sections.map((section, i) => (
                <div key={i} className="mb-10">
                  {section.heading && (
                    <h2 className="mb-4 font-display text-xl font-semibold md:text-2xl">
                      {section.heading}
                    </h2>
                  )}
                  {section.paragraphs.map((para, j) => (
                    <p
                      key={j}
                      className="mb-4 text-base leading-relaxed text-muted-foreground last:mb-0"
                    >
                      {para}
                    </p>
                  ))}
                </div>
              ))}

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
                      key={rp.slug}
                      to={`/blog/${rp.slug}`}
                      className="group rounded-xl border border-border bg-card p-5 transition-all duration-200 hover:border-primary/40 hover:bg-primary/5"
                    >
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        {rp.readTime}
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
