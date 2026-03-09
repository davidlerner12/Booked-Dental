import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import emailjs from "@emailjs/browser";
import { trackMarketAvailabilitySubmit } from "@/lib/analytics";

const schema = z.object({
  cityState: z.string().min(2, "Please enter your city and state"),
  email: z.string().email("Please enter a valid email address"),
});

type FormValues = z.infer<typeof schema>;

function MarketAvailabilitySection() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FormValues) => {
    trackMarketAvailabilitySubmit(data.cityState, data.email);
    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      { city_state: data.cityState, from_email: data.email },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    ).catch(() => {});
    fetch(import.meta.env.VITE_GOOGLE_SHEET_URL, {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify({ city_state: data.cityState, from_email: data.email }),
    }).catch(() => {});
    navigate("/book", { state: { source: "market-check" } });
  };

  return (
    <section id="market-check" className="relative border-t border-border py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(42_100%_55%/0.06),transparent_60%)]" />
      <div className="container relative z-10">
        <div className="mx-auto max-w-md text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            Check If Your <span className="text-gradient-gold">Market Is Available</span>
          </h2>
          <p className="mb-8 text-muted-foreground">
            We partner with only one implant or cosmetic clinic per local market. Enter your details and we'll confirm if your area is still open.
          </p>
          <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-4 text-left">
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="city-state">City and State</Label>
              <Input id="city-state" {...register("cityState")} />
              {errors.cityState && (
                <p className="text-xs text-destructive">{errors.cityState.message}</p>
              )}
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" {...register("email")} />
              {errors.email && (
                <p className="text-xs text-destructive">{errors.email.message}</p>
              )}
            </div>
            <Button type="submit" variant="hero" size="lg" className="mt-2 w-full" disabled={isSubmitting}>
              {isSubmitting ? "Checking..." : "Check My Market"}
              {!isSubmitting && <ArrowRight className="ml-2 h-5 w-5" />}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default MarketAvailabilitySection;
