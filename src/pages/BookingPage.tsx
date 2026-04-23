import { useEffect, useRef } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { ArrowLeft, Shield, Clock, Users, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";
import { trackBookingCTA, trackBookingConfirmed } from "@/lib/analytics";
import LanguageSwitcher from "@/components/LanguageSwitcher";

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
  const { t } = useTranslation();
  const { lang } = useParams();
  const location = useLocation();
  const isMarketCheck = location.state?.source === "market-check";
  const calInitialized = useRef(false);

  useEffect(() => {
    trackBookingCTA();
    if (calInitialized.current) return;
    calInitialized.current = true;

    (function (C: Window, A: string, L: string) {
      const p = function (a: { q: unknown[][] }, ar: unknown[]) { a.q.push(ar); };
      const d = C.document;
      C.Cal = C.Cal || (function () {
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
          const api = function () { p(api as unknown as { q: unknown[][] }, Array.from(arguments)); } as unknown as ((...a: unknown[]) => void) & { q: unknown[][] };
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
    window.Cal!.ns!["15min"]("ui", { hideEventTypeDetails: false, layout: "month_view" });
    window.Cal!.ns!["15min"]("on", { action: "bookingSuccessful", callback: () => { trackBookingConfirmed(); } });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_top,hsl(42_100%_55%/0.06),transparent_55%)]" />
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="container flex h-16 items-center justify-between">
          <Link to={`/${lang}`} className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
            <ArrowLeft className="h-4 w-4" />
            {t("booking.back")}
          </Link>
          <div className="font-display text-xl font-bold">
            <span className="text-gradient-gold">{t("nav.booked")}</span>
            <span className="text-foreground">{t("nav.dental")}</span>
          </div>
          <LanguageSwitcher />
        </div>
      </header>
      <main className="container py-14">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm text-primary">
            {isMarketCheck ? <MapPin className="h-4 w-4" /> : <Clock className="h-4 w-4" />}
            {t("booking.badge_market")}
          </div>
          <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            {t("booking.title_prefix")}<span className="text-gradient-gold">{t("booking.title_highlight")}</span>
          </h1>
          <p className="text-muted-foreground">{t("booking.subtitle")}</p>
        </div>
        <div className="mx-auto max-w-4xl rounded-2xl border border-border bg-card/60 p-2 shadow-gold">
          <div id="my-cal-inline-15min" style={{ width: "100%", minHeight: "660px", overflow: "scroll" }} />
        </div>
        <div className="mx-auto mt-10 flex max-w-2xl flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Shield className="h-4 w-4 text-primary" />
            {t("booking.trust_no_contracts")}
          </div>
          <div className="hidden h-4 w-px bg-border sm:block" />
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4 text-primary" />
            {t("booking.trust_15min")}
          </div>
          <div className="hidden h-4 w-px bg-border sm:block" />
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Users className="h-4 w-4 text-primary" />
            {t("booking.trust_one_clinic")}
          </div>
        </div>
      </main>
    </div>
  );
};

export default BookingPage;
