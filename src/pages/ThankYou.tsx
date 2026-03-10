import { useEffect } from "react";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import { trackBookingConfirmed } from "@/lib/analytics";

const ThankYou = () => {
  useEffect(() => {
    trackBookingConfirmed();
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center text-center px-4">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_top,hsl(42_100%_55%/0.06),transparent_55%)]" />
      <CheckCircle className="h-16 w-16 text-primary mb-6" />
      <h1 className="font-display text-4xl font-bold mb-3">
        You're <span className="text-gradient-gold">Booked</span>
      </h1>
      <p className="text-muted-foreground max-w-md mb-8">
        Your strategy call is confirmed. Check your email for the calendar invite. We'll talk soon.
      </p>
      <Link
        to="/"
        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        ← Back to site
      </Link>
    </div>
  );
};

export default ThankYou;
