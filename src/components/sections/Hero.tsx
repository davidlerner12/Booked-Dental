import { ArrowRight, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center pt-16">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(42_100%_55%/0.06),transparent_60%)]" />
      <div className="container relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm text-primary opacity-0 animate-fade-up">
            <Zap className="h-4 w-4" />
            Meta Ads → Qualified Calls → Booked Cases
          </div>
          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight opacity-0 animate-fade-up sm:text-5xl md:text-6xl lg:text-7xl" style={{ animationDelay: "0.1s" }}>
            Affordable Growth for{" "}
            <span className="text-gradient-gold">Implant and Cosmetic Dental Clinics</span>
          </h1>
          <p className="mx-auto mb-6 max-w-2xl text-lg text-muted-foreground opacity-0 animate-fade-up sm:text-xl" style={{ animationDelay: "0.2s" }}>
            Booked.Dental helps implant and veneer clinics generate qualified consult calls from dental implant patients using UGC-style ads deployed across Meta and Google. We partner with only one clinic per local market.
          </p>
          <p className="mx-auto mb-8 max-w-xl text-sm text-muted-foreground opacity-0 animate-fade-up" style={{ animationDelay: "0.25s" }}>
            We only work with one implant or cosmetic clinic per local market.{" "}
            <span className="text-primary font-medium">Check if your area is still available.</span>
          </p>
          <div className="flex flex-col items-center justify-center gap-4 opacity-0 animate-fade-up sm:flex-row" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="lg" asChild>
              <a href="#market-check">
                Check Market Availability
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <Link to="/book">Book a Call</Link>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="#how">See How It Works</a>
            </Button>
          </div>
          <p className="mt-6 text-xs text-muted-foreground/60 opacity-0 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            Free 14-Day Trial &nbsp;·&nbsp; No contracts required &nbsp;·&nbsp; See consult call quality before committing.
          </p>
        </div>
      </div>

    </section>
  );
}

export default Hero;
