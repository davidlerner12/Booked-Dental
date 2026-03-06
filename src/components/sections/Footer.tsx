const Footer = () => (
  <footer className="border-t border-border py-8">
    <div className="container flex flex-col items-center justify-between gap-4 sm:flex-row">
      <div className="font-display text-lg font-bold">
        <span className="text-gradient-gold">Booked</span>
        <span className="text-foreground">.Dental</span>
      </div>
      <p className="text-xs text-muted-foreground">
        Turning Meta ads into booked treatment plans.
      </p>
    </div>
  </footer>
);

export default Footer;
