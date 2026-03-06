import { CheckCircle2 } from "lucide-react";

const Problem = () => (
  <section className="py-24">
    <div className="container">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">
          Most Dental Marketing <span className="text-gradient-gold">Doesn't Work</span>
        </h2>
        <p className="mb-8 text-lg text-muted-foreground">
          Many dental clinics run ads but struggle to turn them into real treatment cases. High-ticket procedures like implants and veneers require trust before patients contact the clinic. Booked.Dental uses UGC-style ads that build that trust and drive consultation calls.
        </p>
        <div className="grid gap-4 text-left sm:grid-cols-3">
          {[
            "No more boosted post guessing",
            "No bloated marketing retainers",
            "No vanity metrics or confusing reports",
          ].map((item) => (
            <div key={item} className="flex items-start gap-3 rounded-lg border border-border bg-card p-4">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <span className="text-sm text-foreground">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Problem;
