import { ShieldCheck } from "lucide-react";
import { useParams } from "react-router-dom";

export default function MarketMicroBanner() {
  const { lang } = useParams();
  const isHebrew = lang === "he";

  return (
    <div className="border-y border-primary/20 bg-primary/5 py-3">
      <div className="container flex flex-col items-center justify-center gap-2 text-center text-sm text-primary sm:flex-row">
        <ShieldCheck className="h-4 w-4 shrink-0" />
        <span className="font-medium">
          {isHebrew
            ? "Booked.Dental עובדת עם מרפאה אחת בלבד בכל אזור מקומי."
            : "Booked.Dental works with one clinic per local market."}
        </span>
        <span className="text-primary/80">
          {isHebrew
            ? "זמינות אזור נבדקת לפני כל דבר אחר."
            : "Market availability is checked before anything else."}
        </span>
      </div>
    </div>
  );
}
