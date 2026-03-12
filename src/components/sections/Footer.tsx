import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border py-8 pb-20 md:pb-8">
    <div className="container flex flex-col items-center justify-between gap-4 sm:flex-row">
      <div className="font-display text-lg font-bold">
        <span className="text-gradient-gold">Booked</span>
        <span className="text-foreground">.Dental</span>
      </div>
      <div className="flex items-center gap-4">
        <p className="text-xs text-muted-foreground">
          Turning Meta ads into booked treatment plans.
        </p>
        <span className="hidden h-3 w-px bg-border sm:block" />
        <Link to="/privacy" className="text-xs text-muted-foreground transition-colors hover:text-foreground">
          Privacy Policy
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
