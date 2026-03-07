import { useEffect } from "react";
import { Link } from "react-router-dom";
import Cal from "@calcom/embed-react";
import { ArrowLeft } from "lucide-react";
import { trackBookingCTA } from "@/lib/analytics";

const BookingPage = () => {
  useEffect(() => {
    trackBookingCTA();
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm">
            <ArrowLeft className="h-4 w-4" />
            Back
          </Link>
          <div className="font-display text-xl font-bold">
            <span className="text-gradient-gold">Booked</span>
            <span className="text-foreground">.Dental</span>
          </div>
          <div className="w-16" />
        </div>
      </header>

      {/* Booking content */}
      <main className="flex-1 flex flex-col">
        <div className="container py-10 text-center">
          <h1 className="text-2xl font-bold tracking-tight md:text-3xl mb-2">
            Book Your <span className="text-gradient-gold">Free Strategy Call</span>
          </h1>
          <p className="text-muted-foreground text-sm">
            No contracts. No obligation. Just a clear conversation about growing your practice.
          </p>
        </div>

        <div className="flex-1 px-4 pb-10">
          <Cal
            calLink="david-israel-lerner/30min"
            style={{ width: "100%", height: "100%", minHeight: "600px", overflow: "scroll" }}
            config={{ layout: "month_view" }}
          />
        </div>
      </main>
    </div>
  );
};

export default BookingPage;
