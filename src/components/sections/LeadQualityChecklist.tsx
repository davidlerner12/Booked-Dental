import { ArrowRight, ClipboardCheck } from "lucide-react";
import { Link, useParams } from "react-router-dom";

export default function LeadQualityChecklist() {
  const { lang } = useParams();
  const isHebrew = lang === "he";
  const pageLang = isHebrew ? "he" : "en";
  const items = isHebrew
    ? ["כוונת טיפול", "התאמה לאזור", "זמינות למעקב", "יכולת כלכלית", "פידבק לקמפיין"]
    : ["Treatment intent", "Local fit", "Reachability", "Financial readiness", "Campaign feedback"];

  return (
    <section className="border-y border-border bg-card/30 py-16 md:py-20">
      <div className="container">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[0.9fr_1fr] md:items-center">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm text-primary">
              <ClipboardCheck className="h-4 w-4" />
              {isHebrew ? "משאב שימושי" : "Useful resource"}
            </div>
            <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
              {isHebrew
                ? "צ׳קליסט איכות לידים למרפאות שתלים ואסתטיקה"
                : "Lead quality checklist for implant and cosmetic clinics"}
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              {isHebrew
                ? "משאב קצר שמראה איך להפריד בין פנייה שמבזבזת זמן לבין פנייה שיכולה להפוך לטיפול בעל ערך גבוה."
                : "A practical resource that shows how to separate time-wasting forms from opportunities that can become high-value treatment."}
            </p>
            <Link
              to={`/${pageLang}/services/dental-lead-quality-checklist`}
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary/30 px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
            >
              {isHebrew ? "פתחו את הצ׳קליסט" : "Open the checklist"}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-3">
            {items.map((item, index) => (
              <div key={item} className="flex items-center gap-4 rounded-xl border border-border bg-background p-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                  {index + 1}
                </div>
                <p className="font-medium text-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
