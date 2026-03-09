import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Clock } from "lucide-react";
import { blogPosts } from "@/data/blog-posts";

const featured = blogPosts.slice(0, 3);

export default function BlogPreview() {
  return (
    <section className="relative border-y border-border py-24 overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 100%, hsl(42 100% 55% / 0.08), transparent)",
        }}
      />

      <div className="container relative z-10">
        {/* Section header */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <div className="mb-4 flex justify-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-primary/30 bg-primary/10 shadow-gold">
              <BookOpen className="h-6 w-6 text-primary" />
            </div>
          </div>
          <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1 text-sm text-primary">
            From the Blog
          </span>
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
            Dental Marketing{" "}
            <span className="text-gradient-gold">Insights</span>
          </h2>
          <p className="mt-3 text-muted-foreground">
            Practical guides on ads, lead handling, and patient acquisition for
            implant and cosmetic clinics.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-all duration-200 hover:border-primary/40 hover:bg-primary/5"
            >
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Clock className="h-3.5 w-3.5" />
                <span>{post.readTime}</span>
              </div>
              <h3 className="mt-3 font-display text-base font-semibold leading-snug text-foreground transition-colors group-hover:text-primary md:text-lg">
                {post.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {post.excerpt}
              </p>
              <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary">
                Read article
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>

        {/* View all */}
        <div className="mt-10 text-center">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-6 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
          >
            View all articles
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
