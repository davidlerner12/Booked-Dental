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
            Predictable Implant and{" "}
            <span className="text-gradient-gold">Veneer Consultation Calls for Your Clinic</span>
          </h1>
          <p className="mx-auto mb-6 max-w-2xl text-lg text-muted-foreground opacity-0 animate-fade-up sm:text-xl" style={{ animationDelay: "0.2s" }}>
            Booked.Dental helps implant and veneer clinics generate qualified consultation calls through paid campaigns across Meta and Google. We partner with only one clinic per local market.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 opacity-0 animate-fade-up sm:flex-row" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="lg" asChild>
              <Link to="/book">Check If Your Market Is Available
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
           
          </div>
          <p className="mt-6 text-xs text-muted-foreground/60 opacity-0 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            Trusted by implant and cosmetic dental clinics across the United States.
          </p>
          <p className="mt-2 text-xs text-muted-foreground/60 opacity-0 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            Free 14-Day Trial &nbsp;·&nbsp; No contracts required &nbsp;·&nbsp; See consult call quality before committing.
          </p>
        </div>
      </div>

    </section>
  );
}

export default Hero;
