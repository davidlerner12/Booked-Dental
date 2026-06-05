import { CheckCircle2, XCircle } from "lucide-react";
import { useParams } from "react-router-dom";

export default function AgencyComparison() {
  const { lang } = useParams();
  const isHebrew = lang === "he";
  const typical = isHebrew
    ? [
        "מדווחים על קליקים, חשיפות וטפסים",
        "מנסים להוריד עלות לליד בלי לבדוק התאמה",
        "משתמשים באותו משפך לכל סוגי הטיפולים",
        "לא מחזירים לקמפיין מידע על איכות הפניות",
      ]
    : [
        "Reports clicks, impressions, and raw form fills",
        "Tries to lower cost per lead without checking fit",
        "Uses the same funnel for every treatment type",
        "Does not feed lead quality back into campaign learning",
      ];
  const booked = isHebrew
    ? [
        "מודדת פניות מסוננות, התאמה ו-ROI",
        "מלמדת את ה-AI מי נראה כמו מטופל אמיתי",
        "בונה מסר שונה לשתלים, Full-Arch, ציפויים ואסתטיקה",
        "עובדת עם מרפאה אחת בלבד בכל אזור",
      ]
    : [
        "Measures filtered opportunities, fit, and ROI",
        "Teaches the AI who looks like a real future patient",
        "Uses different messaging for implants, full-arch, veneers, and cosmetics",
        "Works with one clinic per local market",
      ];

  return (
    <section className="border-y border-border bg-card/40 py-16 md:py-20">
      <div className="container">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-primary">
              {isHebrew ? "השוואה ברורה" : "Clear comparison"}
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight md:text-4xl">
              {isHebrew
                ? "Booked.Dental מול סוכנות שיווק דנטלית רגילה"
                : "Booked.Dental vs a typical dental marketing agency"}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              {isHebrew
                ? "רוב המרפאות לא צריכות עוד דוח יפה. הן צריכות לדעת אילו קמפיינים מייצרים פניות שמתאימות לטיפולים בעלי ערך גבוה."
                : "Most clinics do not need another polished report. They need to know which campaigns are producing people who fit high-value treatment."}
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-xl border border-border bg-background p-6">
              <h3 className="font-display text-xl font-semibold text-muted-foreground">
                {isHebrew ? "סוכנות רגילה" : "Typical agency"}
              </h3>
              <ul className="mt-5 space-y-3">
                {typical.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-destructive/70" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-primary/30 bg-primary/5 p-6 shadow-gold">
              <h3 className="font-display text-xl font-semibold text-primary">Booked.Dental</h3>
              <ul className="mt-5 space-y-3">
                {booked.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
