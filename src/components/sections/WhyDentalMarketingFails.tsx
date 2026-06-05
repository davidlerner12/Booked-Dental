import { AlertTriangle, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";

const COPY = {
  en: {
    badge: "Why most campaigns stall",
    title: "Dental marketing fails when the algorithm learns from the wrong signals.",
    body:
      "Cheap clicks, impressions, and raw form fills can make a report look active while the clinic still gets weak conversations. Booked.Dental is built around the feedback loop that matters: which prospects were reachable, qualified, booked, and worth the team’s time.",
    mistakes: [
      "Optimizing for the lowest lead cost instead of treatment intent.",
      "Treating every form fill as equal, even when the person is not financially or clinically ready.",
      "Scaling campaigns before the clinic knows which sources create real patient opportunities.",
    ],
    fixTitle: "The higher-ROI fix",
    fix:
      "Filter leads before they reach the clinic, track what happens after submission, and feed those quality signals back into the campaign. That teaches the system to find patients, not clicks.",
    cta: "Check Clinic Fit",
  },
  he: {
    badge: "למה רוב הקמפיינים נתקעים",
    title: "שיווק דנטלי נכשל כשהאלגוריתם לומד מהסימנים הלא נכונים.",
    body:
      "קליקים זולים, חשיפות וטפסים גולמיים יכולים להיראות טוב בדוח, בזמן שהמרפאה עדיין מקבלת שיחות חלשות. Booked.Dental בנויה סביב לולאת הפידבק החשובה באמת: מי היה זמין, מתאים, קבע פגישה והיה שווה את הזמן של הצוות.",
    mistakes: [
      "אופטימיזציה למחיר ליד נמוך במקום לכוונת טיפול.",
      "התייחסות לכל טופס כאילו הוא שווה, גם כשהאדם לא מוכן כלכלית או טיפולית.",
      "הגדלת תקציב לפני שיודעים אילו מקורות מייצרים הזדמנויות מטופלים אמיתיות.",
    ],
    fixTitle: "התיקון שמעלה ROI",
    fix:
      "מסננים פניות לפני שהן מגיעות למרפאה, מודדים מה קורה אחרי ההשארה, ומחזירים את סימני האיכות האלה לקמפיין. כך המערכת לומדת למצוא מטופלים, לא קליקים.",
    cta: "בדקו התאמת מרפאה",
  },
} as const;

export default function WhyDentalMarketingFails() {
  const { lang } = useParams();
  const pageLang = lang === "he" ? "he" : "en";
  const copy = pageLang === "he" ? COPY.he : COPY.en;

  return (
    <section className="border-y border-border bg-card/40 py-24">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm text-primary">
              <AlertTriangle className="h-4 w-4" />
              {copy.badge}
            </div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{copy.title}</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{copy.body}</p>
          </div>

          <div className="space-y-4">
            {copy.mistakes.map((mistake) => (
              <div key={mistake} className="flex gap-3 rounded-xl border border-border bg-background p-5">
                <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <p className="text-sm leading-relaxed text-muted-foreground">{mistake}</p>
              </div>
            ))}
            <div className="rounded-xl border border-primary/30 bg-primary/5 p-6">
              <div className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <h3 className="font-display text-xl font-semibold">{copy.fixTitle}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{copy.fix}</p>
                </div>
              </div>
              <Button asChild className="mt-6 bg-gradient-gold text-primary-foreground shadow-gold hover:opacity-90">
                <Link to={`/${pageLang}/book`}>
                  {copy.cta}
                  <ArrowRight className="ms-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
