import { ShieldCheck } from "lucide-react";

const RiskFreeTrial = () => (
  <section className="relative border-t border-border py-24 overflow-hidden bg-card/50">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(42_100%_55%/0.07),transparent_60%)]" />
    <div className="container relative z-10">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10 shadow-gold">
            <ShieldCheck className="h-7 w-7 text-primary" />
          </div>
          <div>
            <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1 text-sm text-primary">
              Risk-Free Trial
            </div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Try the System <span className="text-gradient-gold">Before You Commit</span>
            </h2>
          </div>
        </div>

        <div className="mb-8 rounded-xl border border-primary/20 bg-primary/5 px-8 py-8">
          <p className="mb-4 text-lg text-muted-foreground leading-relaxed">
            For qualified clinics, Booked.Dental offers a free trial so you can evaluate the system inside your practice before committing long term.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            This allows you to see the quality of consult calls and patient interest with{" "}
            <span className="font-semibold text-foreground">zero risk</span>.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default RiskFreeTrial;
