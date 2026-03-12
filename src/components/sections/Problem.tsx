import { CheckCircle2 } from "lucide-react";

const Problem = () => (
  <section className="py-24">
    <div className="container">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">
          Most Implant Clinics{" "}
          <span className="text-gradient-gold">
            Don't Have a Consistent Flow of Consult Calls
          </span>
        </h2>
        <p className="mb-8 text-lg text-muted-foreground">
          Great clinics often rely on referrals or inconsistent marketing, leaving
          their implant and veneer consult calendars half full. Booked.Dental
          focuses on generating qualified consultation calls from patients already
          considering treatment.
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
