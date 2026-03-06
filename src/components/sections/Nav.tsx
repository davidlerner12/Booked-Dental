import { Button } from "@/components/ui/button";
import { trackBookingCTA } from "@/lib/analytics";

const Nav = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
    <div className="container flex h-16 items-center justify-between">
      <div className="font-display text-xl font-bold">
        <span className="text-gradient-gold">Booked</span>
        <span className="text-foreground">.Dental</span>
      </div>
      <Button variant="hero" size="sm" asChild>
        <a href="#cta" onClick={trackBookingCTA}>Book a Call</a>
      </Button>
    </div>
  </nav>
);

export default Nav;
