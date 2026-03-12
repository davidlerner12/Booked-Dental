import { ArrowRight, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CTA = () => (
  <section id="cta" className="relative border-t border-border py-24">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(42_100%_55%/0.08),transparent_60%)]" />
    <div className="container relative z-10">
      <div className="mx-auto max-w-2xl text-center">
        <Users className="mx-auto mb-6 h-12 w-12 text-primary" />
        <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
          Ready to Generate More <span className="text-gradient-gold">Implant and Cosmetic Consults?</span>
        </h2>
        <p className="mb-8 text-muted-foreground">
          If your clinic has capacity for more implant or veneer cases, check if your market is still available. Booked.Dental partners with only one clinic per local market.
        </p>
        <Button
          variant="hero"
          size="lg"
          asChild
          className="h-auto w-full max-w-full whitespace-normal px-4 py-3 text-center sm:w-auto sm:whitespace-nowrap"
        >
          <Link to="/book">
            Check Your Market
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
        <p className="mt-4 text-xs text-muted-foreground">No contracts. No obligation. Just a clear conversation about growing your practice.</p>
      </div>
    </div>
  </section>
);

export default CTA;
