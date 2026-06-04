import { ArrowRight, CheckCircle2, Scale, ShieldCheck } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

const HEADSHOT_SRC = "/images/david-lerner-headshot.jpg";

const copy = {
  en: {
    badge: "Founder-led system",
    title: "Built by someone who thinks in evidence, persuasion, and patient intent.",
    body:
      "Booked.Dental is led by David Lerner, who applies a legal background in trust, precision, and evidence to dental performance marketing. The system is built to help clinics understand which prospects are serious, then teach campaigns to find more people like them.",
    cta: "Meet David",
    bullets: [
      "Focused on implant and cosmetic patient acquisition",
      "Campaign decisions tied to filtered opportunities and ROI",
      "Lead quality feedback used to improve AI targeting signals",
    ],
    alt: "David Lerner, founder of Booked.Dental",
  },
  he: {
    badge: "מערכת בהובלת המייסד",
    title: "נבנה על חשיבה של ראיות, שכנוע וכוונת מטופל.",
    body:
      "Booked.Dental מובלת על ידי דיוויד לרנר, שמיישם רקע משפטי באמון, דיוק וראיות בתוך שיווק ביצועים למרפאות שיניים. המערכת בנויה כדי לעזור למרפאות להבין אילו מתעניינים באמת רציניים, ואז ללמד את הקמפיינים למצוא עוד אנשים דומים.",
    cta: "הכירו את דיוויד",
    bullets: [
      "התמקדות בגיוס מטופלים לשתלים ואסתטיקה דנטלית",
      "החלטות קמפיין לפי הזדמנויות מסוננות ו-ROI",
      "פידבק על איכות לידים שמשפר את אותות הטירגוט של ה-AI",
    ],
    alt: "דיוויד לרנר, מייסד Booked.Dental",
  },
} as const;

export default function FounderTrustBlock() {
  const { i18n } = useTranslation();
  const { lang } = useParams();
  const isHebrew = i18n.language === "he";
  const text = isHebrew ? copy.he : copy.en;

  return (
    <section className="border-y border-border bg-card/40 py-16 md:py-20">
      <div className="container">
        <div className="mx-auto grid max-w-6xl items-center gap-8 md:grid-cols-[0.9fr_1.1fr]">
          <div className="mx-auto w-full max-w-xs md:max-w-sm">
            <img
              src={HEADSHOT_SRC}
              alt={text.alt}
              className="aspect-[4/5] w-full rounded-xl border border-border object-cover object-top shadow-2xl shadow-black/20"
              width={640}
              height={800}
              loading="lazy"
            />
          </div>
          <div>
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm text-primary">
              <ShieldCheck className="h-4 w-4" />
              {text.badge}
            </span>
            <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
              {text.title}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              {text.body}
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-3">
              {text.bullets.map((bullet, index) => {
                const Icon = index === 0 ? Scale : CheckCircle2;
                return (
                  <li key={bullet} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                    <Icon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{bullet}</span>
                  </li>
                );
              })}
            </ul>
            <Link
              to={`/${lang}/about`}
              className="mt-7 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
            >
              {text.cta}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
