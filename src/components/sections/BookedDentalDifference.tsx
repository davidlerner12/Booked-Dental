import { Layers } from "lucide-react";

const BookedDentalDifference = () => (
  <section className="relative border-y border-border py-24 overflow-hidden bg-card/50">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,hsl(42_100%_55%/0.07),transparent_60%)]" />
    <div className="container relative z-10">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10 shadow-gold">
            <Layers className="h-7 w-7 text-primary" />
          </div>
          <div>
            <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1 text-sm text-primary">
              The Booked.Dental Difference
            </div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Built for <span className="text-gradient-gold">Efficiency and Affordability</span>
            </h2>
          </div>
        </div>

        <div className="mb-10 space-y-3 text-lg text-muted-foreground max-w-2xl">
          <p>
            Most agencies start every campaign from scratch. That means higher retainers, longer testing phases, and more wasted ad spend.
          </p>
          <p>
            Booked.Dental works from a proven library of high-performing UGC creatives designed specifically for implant and cosmetic dentistry.
          </p>
          <p className="font-medium text-foreground">
            Because the creative foundation already exists, campaigns launch faster and operate more efficiently.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-xl border border-primary/30 bg-primary/5 px-8 py-6 shadow-gold">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,hsl(42_100%_55%/0.08),transparent_60%)]" />
          <p className="relative z-10 text-base font-display font-semibold text-foreground">
            That efficiency allows us to offer our system for just $1,000 per month — far less than most dental marketing agencies.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default BookedDentalDifference;
