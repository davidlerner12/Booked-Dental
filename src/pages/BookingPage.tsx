import { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowLeft, Shield, Clock, Users, MapPin } from "lucide-react";
import { trackBookingCTA, trackBookingConfirmed } from "@/lib/analytics";

declare global {
  interface Window {
    Cal?: ((...args: unknown[]) => void) & {
      loaded?: boolean;
      ns?: Record<string, ((...args: unknown[]) => void) & { q?: unknown[][] }>;
      q?: unknown[][];
    };
  }
}

const BookingPage = () => {
  const location = useLocation();
  const isMarketCheck = location.state?.source === "market-check";
  const calInitialized = useRef(false);

  useEffect(() => {
    trackBookingCTA();

    // Prevent double-init in React strict mode
    if (calInitialized.current) return;
    calInitialized.current = true;

    // --- Cal.com vanilla embed (bookeddental/15min) ---
    (function (C: Window, A: string, L: string) {
      const p = function (a: { q: unknown[][] }, ar: unknown[]) {
        a.q.push(ar);
      };
      const d = C.document;
      C.Cal =
        C.Cal ||
        (function () {
          const cal = C.Cal!;
          const ar = arguments;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            const s = d.head.appendChild(d.createElement("script"));
            (s as HTMLScriptElement).src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api = function () {
              p(api as unknown as { q: unknown[][] }, Array.from(arguments));
            } as unknown as ((...a: unknown[]) => void) & { q: unknown[][] };
            const namespace = ar[1] as string;
            api.q = api.q || [];
            if (typeof namespace === "string") {
              cal.ns![namespace] = cal.ns![namespace] || api;
              p(cal.ns![namespace] as unknown as { q: unknown[][] }, Array.from(ar));
              p(cal as unknown as { q: unknown[][] }, ["initNamespace", namespace]);
            } else {
              p(cal as unknown as { q: unknown[][] }, Array.from(ar));
            }
            return;
          }
          p(cal as unknown as { q: unknown[][] }, Array.from(ar));
        } as unknown as typeof C.Cal);
    })(window, "https://app.cal.com/embed/embed.js", "init");

    window.Cal!("init", "15min", { origin: "https://app.cal.com" });

    window.Cal!.ns!["15min"]("inline", {
      elementOrSelector: "#my-cal-inline-15min",
      config: { layout: "month_view", useSlotsViewOnSmallScreen: "true" },
      calLink: "bookeddental/15min",
    });

    window.Cal!.ns!["15min"]("ui", {
      hideEventTypeDetails: false,
      layout: "month_view",
    });

    // Listen for booking success
    window.Cal!.ns!["15min"]("on", {
      action: "bookingSuccessful",
      callback: () => {
        trackBookingConfirmed();
      },
    });
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
          {isMarketCheck ? (
            <>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm text-primary">
                <MapPin className="h-4 w-4" />
                Market Availability Check · Free
              </div>
              <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
                Check If Your{" "}
                <span className="text-gradient-gold">Market Is Available</span>
              </h1>
            </>
          ) : (
            <>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm text-primary">
                <Clock className="h-4 w-4" />
                Market Availability Check · Free
              </div>
              <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
                Check If Your{" "}
                <span className="text-gradient-gold">Market Is Available</span>
              </h1>
            </>
          )}
          <p className="text-muted-foreground">
            Pick a time to confirm whether your city is still open. Booked.Dental
            works with only one implant or cosmetic clinic per local market. If
            your market is available, you can secure it before another clinic does.
          </p>
        </div>

        {/* Calendar card */}
        <div className="mx-auto max-w-4xl rounded-2xl border border-border bg-card/60 p-2 shadow-gold">
          <div
            id="my-cal-inline-15min"
            style={{ width: "100%", minHeight: "660px", overflow: "scroll" }}
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
            15 minutes, fully focused on your practice
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
