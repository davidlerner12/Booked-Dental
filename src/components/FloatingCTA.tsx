import { Link, useLocation } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const FloatingCTA = () => {
  const { pathname } = useLocation();

  if (pathname === "/book") return null;

  return (
    <>
      {/* Desktop: bottom-right floating button */}
      <div className="fixed bottom-6 right-6 z-50 hidden md:block">
        <Link
          to="/book"
          className="flex items-center gap-3 rounded-xl border border-white/10 bg-background/10 px-5 py-3 shadow-gold backdrop-blur-sm transition-colors hover:border-primary/40"
        >
          <div>
            <div className="font-display text-sm font-semibold text-foreground">
              Check Your Market
            </div>
            <div className="text-xs text-muted-foreground">
              One clinic per city.
            </div>
          </div>
          <ArrowRight className="h-4 w-4 shrink-0 text-primary" />
        </Link>
      </div>

      {/* Mobile: sticky bottom bar */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/40 bg-background/10 backdrop-blur-sm md:hidden">
        <div className="container flex items-center justify-between gap-3 py-3">
          <div className="min-w-0">
            <div className="font-display text-sm font-semibold text-foreground">
              Check Your Market
            </div>
            <div className="text-xs text-muted-foreground">
              One clinic per city.
            </div>
          </div>
          <Link
            to="/book"
            className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-gradient-gold px-4 py-2.5 text-sm font-semibold text-primary-foreground"
          >
            Check Now
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default FloatingCTA;
