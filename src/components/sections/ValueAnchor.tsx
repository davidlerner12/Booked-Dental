import { DollarSign, TrendingUp } from "lucide-react";
import { Link, useParams } from "react-router-dom";

export default function ValueAnchor() {
  const { lang } = useParams();
  const isHebrew = lang === "he";
  const pageLang = isHebrew ? "he" : "en";
  const anchors = isHebrew
    ? [
        {
          value: "$20k-$30k+",
          label: "מקרה Full-Arch אחד בארה״ב יכול להיות שווה הרבה יותר מעשרות לידים חלשים.",
        },
        {
          value: "$10k-$20k+",
          label: "מקרה ציפויים או עיצוב חיוך איכותי יכול לשנות חודש שלם למרפאה.",
        },
      ]
    : [
        {
          value: "$20k-$30k+",
          label: "One full-arch case can be worth more than dozens of weak leads.",
        },
        {
          value: "$10k-$20k+",
          label: "One premium veneer or smile makeover case can change an entire month.",
        },
      ];

  return (
    <section className="border-b border-border py-16 md:py-20">
      <div className="container">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[0.8fr_1fr] md:items-center">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm text-primary">
              <TrendingUp className="h-4 w-4" />
              {isHebrew ? "עוגן ערך" : "Value anchor"}
            </div>
            <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
              {isHebrew
                ? "לא צריך אינסוף לידים. צריך כמה פניות שמתאימות לטיפול הנכון."
                : "You do not need endless leads. You need a few that fit the right treatment."}
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              {isHebrew
                ? "הכלכלה של שתלים, Full-Arch וציפויים שונה לגמרי מפרסום כללי למרפאת שיניים. לכן Booked.Dental מתמקדת באיכות הפנייה ובפוטנציאל הטיפול, לא רק בכמות."
                : "The economics of implants, full-arch treatment, and veneers are different from general dental advertising. That is why Booked.Dental focuses on patient quality and case potential, not volume alone."}
            </p>
            <Link
              to={`/${pageLang}/services/roi-methodology`}
              className="mt-5 inline-flex text-sm font-semibold text-primary underline-offset-4 hover:underline"
            >
              {isHebrew ? "איך אנחנו חושבים על ROI" : "How we think about ROI"}
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {anchors.map((item) => (
              <div key={item.value} className="rounded-xl border border-primary/20 bg-primary/5 p-6">
                <DollarSign className="mb-4 h-6 w-6 text-primary" />
                <div className="font-display text-3xl font-bold text-primary">{item.value}</div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
