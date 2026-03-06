const AffordableByDesign = () => (
  <section className="py-24">
    <div className="container">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            Affordable <span className="text-gradient-gold">by Design</span>
          </h2>
          <p className="text-muted-foreground">
            Most agencies charge large retainers because they build every campaign from scratch.
          </p>
        </div>

        <div className="mb-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-6">
            <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Other Agencies</div>
            <p className="text-sm leading-relaxed text-muted-foreground">Build every campaign from scratch — charging you for the time, the testing, and the guesswork.</p>
          </div>
          <div className="rounded-xl border border-primary/30 bg-primary/5 p-6">
            <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">Booked.Dental</div>
            <p className="text-sm leading-relaxed text-muted-foreground">Works from a proven library of high performing UGC ad creatives built specifically for implant and cosmetic dental clinics.</p>
          </div>
        </div>

        <p className="mb-8 text-center text-sm leading-relaxed text-muted-foreground">
          Because the creative foundation already exists, we launch campaigns quickly and operate efficiently — and that efficiency gets passed directly to you.
        </p>

        <div className="rounded-xl border border-primary/30 bg-primary/5 p-8 text-center shadow-gold">
          <div className="font-display text-5xl font-bold text-gradient-gold md:text-6xl">$1,000<span className="text-2xl text-muted-foreground">/mo</span></div>
          <p className="mt-3 text-sm text-muted-foreground">Far less than most dental marketing agencies — with no bloated retainers and no wasted spend.</p>
        </div>
      </div>
    </div>
  </section>
);

export default AffordableByDesign;
