import { Shield, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const MarketExclusivity = () => (
  <section className="relative border-y border-border py-24 overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(42_100%_55%/0.06),transparent_65%)]" />
    <div className="container relative z-10">
      <div className="mx-auto max-w-2xl text-center">
        <div className="mb-6 flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full border border-primary/30 bg-primary/10 shadow-gold">
            <Shield className="h-8 w-8 text-primary" />
          </div>
        </div>
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm text-primary">
          One Clinic Per Market
        </div>
        <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">
          Market <span className="text-gradient-gold">Exclusivity</span>
        </h2>
        <p className="mb-8 text-lg text-muted-foreground">
Booked.Dental works with only one clinic per local market. Once a clinic secures a market, we do not work with competing practices in that area.
Market availability is confirmed on the strategy call. If your market is open, you can secure it before another clinic does.</p>
        <div className="rounded-xl border border-primary/30 bg-primary/5 p-8 shadow-gold text-left">
          <div className="flex items-start gap-4">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <div>
              <p className="font-display font-semibold text-foreground mb-1">Your competitors can't buy in once you do.</p>
              <p className="text-sm text-muted-foreground">When your market is secured, no competing practice in your area gains access to our system, our creatives, or our campaigns.</p>
            </div>
          </div>
          <div className="my-5 border-t border-border" />
          <div className="flex items-start gap-4">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <div>
              <p className="font-display font-semibold text-foreground mb-1">Market availability is confirmed on the strategy call.</p>
              <p className="text-sm text-muted-foreground">If your market is open, you can secure it during the call — before another clinic in your area does.</p>
            </div>
          </div>
        </div>
        <Button asChild size="lg" className="mt-10 bg-gradient-gold text-primary-foreground hover:opacity-90 shadow-gold">
          <Link to="/book">
            Check If Your Market Is Available
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  </section>
);

export default MarketExclusivity;
