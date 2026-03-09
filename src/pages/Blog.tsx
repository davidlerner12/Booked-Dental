import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import { blogPosts } from "@/data/blog-posts";

export default function Blog() {
  useEffect(() => {
    document.title = "Dental Marketing Blog | Booked.Dental";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Dental marketing strategies for implant and cosmetic clinics. Learn how to get more qualified consults with Google Ads, Meta ads, UGC creative, and better lead handling."
      );
    }
    return () => {
      document.title =
        "Booked.Dental — Implant & Cosmetic Patient Acquisition";
      if (metaDesc) {
        metaDesc.setAttribute(
          "content",
          "Booked.Dental helps implant and cosmetic dental clinics get more qualified consultation calls through Meta and Google ads, UGC creative, and performance-focused patient acquisition."
        );
      }
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
