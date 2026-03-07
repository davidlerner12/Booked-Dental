import { useEffect } from "react";
import { Link } from "react-router-dom";
import Cal from "@calcom/embed-react";
import { ArrowLeft, Shield, Clock, Users } from "lucide-react";
import { trackBookingCTA } from "@/lib/analytics";

const BookingPage = () => {
  useEffect(() => {
    trackBookingCTA();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Radial gold glow — top */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_top,hsl(42_100%_55%/0.06),transparent_55%)]" />

      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="container flex h-16 items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to site
          </Link>
          <div className="font-display text-xl font-bold">
            <span className="text-gradient-gold">Booked</span>
            <span className="text-foreground">.Dental</span>
          </div>
          <div className="w-24" />
        </div>
      </header>

      <main className="container py-14">
        {/* Heading block */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm text-primary">
            <Clock className="h-4 w-4" />
            30-minute strategy call · Free
          </div>
          <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            Book Your{" "}
            <span className="text-gradient-gold">Free Strategy Call</span>
          </h1>
          <p className="text-muted-foreground">
            Pick a time that works for you. We'll walk through your market, your goals, and whether Booked.Dental is the right fit — no pressure, no obligation.
          </p>
        </div>

        {/* Calendar card */}
        <div className="mx-auto max-w-4xl rounded-2xl border border-border bg-card/60 p-2 shadow-gold">
          <Cal
            calLink="david-israel-lerner/30min"
            style={{ width: "100%", minHeight: "660px", overflow: "scroll" }}
            config={{
              theme: "dark",
              brandColor: "#FFBA1A",
              layout: "month_view",
            }}
          />
        </div>

        {/* Trust badges */}
        <div className="mx-auto mt-10 flex max-w-2xl flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Shield className="h-4 w-4 text-primary" />
            No contracts or obligation
          </div>
          <div className="hidden h-4 w-px bg-border sm:block" />
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4 text-primary" />
            30 minutes, fully focused on your practice
          </div>
          <div className="hidden h-4 w-px bg-border sm:block" />
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Users className="h-4 w-4 text-primary" />
            One clinic per local market
          </div>
        </div>
      </main>
    </div>
  );
};

export default BookingPage;
