import { ArrowRight, ShieldCheck } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { getProofExamples } from "@/lib/proof";

type ProofSnapshotProps = {
  variant?: "home" | "compact";
};

export default function ProofSnapshot({ variant = "home" }: ProofSnapshotProps) {
  const { lang } = useParams();
  const pageLang = lang === "he" ? "he" : "en";
  const isHebrew = pageLang === "he";
  const examples = getProofExamples(pageLang);
  const compact = variant === "compact";

  return (
    <section className={`${compact ? "py-12" : "border-y border-border py-16 md:py-20"} bg-card/30`}>
      <div className="container">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm text-primary">
              <ShieldCheck className="h-4 w-4" />
              {isHebrew ? "הוכחות אנונימיות" : "Anonymized proof"}
            </div>
            <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
              {isHebrew
                ? "דוגמאות שמראות איך מודדים פניות איכותיות, לא קליקים."
                : "Proof examples built around opportunities, not clicks."}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              {isHebrew
                ? "התוצאות משתנות לפי אזור, הצעה, צוות מעקב וקיבולת המרפאה. לכן אנחנו מציגים דוגמאות שמרניות ואנונימיות, לא הבטחות."
                : "Results vary by market, offer, follow-up, and clinic capacity. These examples are anonymized and conservative, so the proof supports trust without overpromising."}
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {examples.map((example) => (
              <article key={example.id} className="rounded-xl border border-border bg-background p-5">
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-primary">
                  {example.treatment}
                </p>
                <h3 className="mt-3 font-display text-xl font-semibold">{example.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {example.subtitle}
                </p>
                <div className="mt-5 grid gap-3">
                  {example.metrics.map((metric) => (
                    <div key={metric.label} className="border-t border-border pt-3">
                      <div className="text-2xl font-bold text-primary">{metric.value}</div>
                      <div className="text-xs text-muted-foreground">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8">
            <Link
              to={`/${pageLang}/proof`}
              className="inline-flex items-center gap-2 rounded-full border border-primary/30 px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
            >
              {isHebrew ? "ראו את עמוד ההוכחות" : "View proof examples"}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
