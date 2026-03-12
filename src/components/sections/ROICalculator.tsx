import { useState } from "react";
import { ArrowRight, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ROICalculator = () => {
  const [implantValue, setImplantValue] = useState(20000);
  const [veneerValue, setVeneerValue] = useState(12000);
  const [implantCases, setImplantCases] = useState(1);
  const [veneerCases, setVeneerCases] = useState(1);

  const implantRevenue = implantCases * implantValue;
  const veneerRevenue = veneerCases * veneerValue;
  const totalRevenue = implantRevenue + veneerRevenue;

  return (
    <section className="border-y border-border bg-card/50 py-24">
      <div className="container">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm text-primary">
            <TrendingUp className="h-4 w-4" />
            Revenue Impact Calculator
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            See the Economics of <span className="text-gradient-gold">Implant Marketing</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Implant and cosmetic dentistry are high-value treatments. That means even a small increase in consults can dramatically impact your monthly production. Use the calculator below to estimate how additional cases could affect your practice.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Inputs */}
          <div className="rounded-xl border border-border bg-background p-8">
            <h3 className="mb-8 font-display text-xl font-semibold">Your Practice Numbers</h3>
            <div className="space-y-8">
              <div>
                <label className="mb-2 block text-sm font-medium text-muted-foreground">Average Full-Arch Case Value</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 font-semibold text-muted-foreground">$</span>
                  <input
                    type="number"
                    value={implantValue}
                    onChange={(e) => setImplantValue(Number(e.target.value))}
                    className="w-full rounded-lg border border-border bg-card py-3 pl-8 pr-4 font-display text-xl font-semibold text-foreground transition-colors focus:border-primary/50 focus:outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                    min={0}
                  />
                </div>
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-muted-foreground">Average Veneer Case Value</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 font-semibold text-muted-foreground">$</span>
                  <input
                    type="number"
                    value={veneerValue}
                    onChange={(e) => setVeneerValue(Number(e.target.value))}
                    className="w-full rounded-lg border border-border bg-card py-3 pl-8 pr-4 font-display text-xl font-semibold text-foreground transition-colors focus:border-primary/50 focus:outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                    min={0}
                  />
                </div>
              </div>
              <div>
                <div className="mb-3 flex items-center justify-between">
                  <label className="text-sm font-medium text-muted-foreground">New Implant Cases Per Month</label>
                  <span className="rounded-md border border-primary/30 bg-primary/10 px-2.5 py-0.5 font-display text-sm font-bold text-primary">{implantCases}</span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={10}
                  value={implantCases}
                  onChange={(e) => setImplantCases(Number(e.target.value))}
                  className="h-1.5 w-full cursor-pointer appearance-none rounded-full [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:shadow-gold"
                  style={{ background: `linear-gradient(to right, hsl(42 100% 55%) ${((implantCases - 1) / 9) * 100}%, hsl(220 15% 18%) ${((implantCases - 1) / 9) * 100}%)` }}
                />
                <div className="mt-1.5 flex justify-between text-xs text-muted-foreground">
                  <span>1 case</span><span>10 cases</span>
                </div>
              </div>
              <div>
                <div className="mb-3 flex items-center justify-between">
                  <label className="text-sm font-medium text-muted-foreground">New Veneer Cases Per Month</label>
                  <span className="rounded-md border border-primary/30 bg-primary/10 px-2.5 py-0.5 font-display text-sm font-bold text-primary">{veneerCases}</span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={10}
                  value={veneerCases}
                  onChange={(e) => setVeneerCases(Number(e.target.value))}
                  className="h-1.5 w-full cursor-pointer appearance-none rounded-full [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:shadow-gold"
                  style={{ background: `linear-gradient(to right, hsl(42 100% 55%) ${((veneerCases - 1) / 9) * 100}%, hsl(220 15% 18%) ${((veneerCases - 1) / 9) * 100}%)` }}
                />
                <div className="mt-1.5 flex justify-between text-xs text-muted-foreground">
                  <span>1 case</span><span>10 cases</span>
                </div>
              </div>
            </div>
          </div>

          {/* Output */}
          <div className="flex flex-col gap-5">
            <div className="rounded-xl border border-border bg-background p-8">
              <h3 className="mb-6 font-display text-xl font-semibold">Calculation</h3>
              <div className="space-y-3">
                <div className="rounded-lg border border-border bg-card p-4">
                  <p className="mb-1 text-xs text-muted-foreground">
                    {implantCases} Implant {implantCases === 1 ? "Case" : "Cases"} × ${implantValue.toLocaleString()}
                  </p>
                  <div className="font-display text-2xl font-bold text-gradient-gold">${implantRevenue.toLocaleString()}</div>
                  <p className="mt-0.5 text-xs text-muted-foreground">in additional monthly production</p>
                </div>
                <div className="rounded-lg border border-border bg-card p-4">
                  <p className="mb-1 text-xs text-muted-foreground">
                    {veneerCases} Veneer {veneerCases === 1 ? "Case" : "Cases"} × ${veneerValue.toLocaleString()}
                  </p>
                  <div className="font-display text-2xl font-bold text-gradient-gold">${veneerRevenue.toLocaleString()}</div>
                  <p className="mt-0.5 text-xs text-muted-foreground">in additional monthly production</p>
                </div>
              </div>
              <div className="mt-5 rounded-xl border border-primary/30 bg-primary/5 p-6 text-center shadow-gold">
                <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-primary">Total Estimated Monthly Production</div>
                <div className="font-display text-4xl font-bold text-gradient-gold">${totalRevenue.toLocaleString()}</div>
                <div className="mt-2 text-xs text-muted-foreground">
                  That's <span className="font-semibold text-foreground">{Math.round(totalRevenue / 1000)}×</span> your monthly investment
                </div>
              </div>
            </div>
            <div className="rounded-xl border-l-2 border-l-primary/50 border border-border bg-background px-6 py-5">
              <p className="text-sm leading-relaxed text-muted-foreground">
                <span className="font-display font-semibold text-foreground">Even one additional high-ticket case can justify months of marketing investment.</span>
                {" "}Booked.Dental focuses on generating qualified consult calls that can turn into these types of cases.
              </p>
            </div>
            <Button variant="hero" size="lg" className="w-full" asChild>
              <Link to="/book">
                Check If Your Market Is Available
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;
