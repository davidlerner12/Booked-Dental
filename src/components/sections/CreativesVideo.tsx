import { Zap } from "lucide-react";

const CreativesVideo = () => (
  <section className="relative border-y border-border bg-card/50 py-24">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(42_100%_55%/0.04),transparent_70%)]" />
    <div className="container relative z-10">
      <div className="mb-12 text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm text-primary">
          <Zap className="h-4 w-4" />
          Real Creatives. Real Results.
        </div>
        <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
          Have a Look at Our{" "}
          <span className="text-gradient-gold">Creatives</span>
        </h2>
        <p className="mx-auto max-w-xl text-muted-foreground">
          Real ad creatives engineered to stop the scroll and drive qualified implant &amp; veneer inquiries.
        </p>
      </div>
      <div className="mx-auto max-w-3xl">
        <div className="overflow-hidden rounded-xl border border-primary/20 bg-card shadow-gold transition-shadow hover:shadow-[0_0_40px_hsl(42_100%_55%/0.25)]">
          <iframe
            className="aspect-video w-full"
            src="https://player.cloudinary.com/embed/?cloud_name=dlgykfmrf&public_id=Benson_Hurst_Dental_Care_video_final_440720_jom76d"
            allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
            allowFullScreen
            loading="lazy"
            title="Booked.Dental Ad Creative"
          />
        </div>
        <p className="mt-4 text-center text-xs text-muted-foreground">
          Example UGC style ad creative that generated 27 qualified implant calls in under 90 days for Bensonhurst Dental in Brooklyn.
        </p>
      </div>
    </div>
  </section>
);

export default CreativesVideo;
