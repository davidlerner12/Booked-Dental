import { useState, useEffect, useRef } from "react";
import { Zap, ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    src: "https://player.cloudinary.com/embed/?cloud_name=dlgykfmrf&public_id=Benson_Hurst_Dental_Care_video_final_440720_jom76d",
    thumbnail:
      "https://res.cloudinary.com/dlgykfmrf/video/upload/so_0/Benson_Hurst_Dental_Care_video_final_440720_jom76d.jpg",
    caption:
      "Bensonhurst Dental — increased consultation calls from 5/mo to 27 in under 90 days.",
  },
  {
    src: "https://player.cloudinary.com/embed/?cloud_name=do6gwyitk&public_id=916dentures_vp4scc",
    thumbnail:
      "https://res.cloudinary.com/do6gwyitk/video/upload/so_0/916dentures_vp4scc.jpg",
    caption:
      "High-converting ad creative built for implant and cosmetic dental clinics.",
  },
  {
    src: "https://player.cloudinary.com/embed/?cloud_name=do6gwyitk&public_id=916veneers_datfik",
    thumbnail:
      "https://res.cloudinary.com/do6gwyitk/video/upload/so_0/916veneers_datfik.jpg",
    caption:
      "Scroll-stopping creatives designed to drive qualified patient inquiries.",
  },
];

const TRANSITION = "all 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94)";

function getCardStyle(offset: number): React.CSSProperties {
  if (offset === 0) {
    return {
      transform: "translateX(0) scale(1.08) rotateY(0deg)",
      zIndex: 3,
      opacity: 1,
      transition: TRANSITION,
    };
  }
  if (offset === -1 || offset === slides.length - 1) {
    return {
      transform: "translateX(-65%) scale(0.82) rotateY(25deg)",
      zIndex: 2,
      opacity: 0.5,
      cursor: "pointer",
      transition: TRANSITION,
    };
  }
  if (offset === 1 || offset === -(slides.length - 1)) {
    return {
      transform: "translateX(65%) scale(0.82) rotateY(-25deg)",
      zIndex: 2,
      opacity: 0.5,
      cursor: "pointer",
      transition: TRANSITION,
    };
  }
  return {
    transform: "translateX(0) scale(0.6)",
    zIndex: 0,
    opacity: 0,
    pointerEvents: "none",
    transition: TRANSITION,
  };
}

const CreativesVideo = () => {
  const [active, setActive] = useState(0);
  const paused = useRef(false);
  const timerRef = useRef<ReturnType<typeof setInterval>>();

  const next = () => setActive((p) => (p + 1) % slides.length);
  const prev = () => setActive((p) => (p - 1 + slides.length) % slides.length);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      if (!paused.current) next();
    }, 5000);
    return () => clearInterval(timerRef.current);
  }, []);

  return (
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
            Real ad creatives engineered to stop the scroll and drive qualified
            implant &amp; veneer inquiries.
          </p>
        </div>

        {/* Slider */}
        <div
          className="relative mx-auto max-w-4xl"
          onMouseEnter={() => (paused.current = true)}
          onMouseLeave={() => (paused.current = false)}
        >
          {/* Arrows */}
          <button
            onClick={prev}
            aria-label="Previous slide"
            className="absolute left-0 top-1/2 z-10 -translate-x-4 -translate-y-1/2 text-muted-foreground transition-colors hover:text-primary md:-translate-x-10"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>
          <button
            onClick={next}
            aria-label="Next slide"
            className="absolute right-0 top-1/2 z-10 translate-x-4 -translate-y-1/2 text-muted-foreground transition-colors hover:text-primary md:translate-x-10"
          >
            <ChevronRight className="h-8 w-8" />
          </button>

          {/* Cards */}
          <div
            className="relative mx-auto"
            style={{ perspective: "1200px", height: "clamp(220px, 42vw, 420px)" }}
          >
            {slides.map((slide, i) => {
              const offset = i - active;
              const style = getCardStyle(offset);
              const isActive = offset === 0;
              const isLeft = offset === -1 || offset === slides.length - 1;
              const isRight = offset === 1 || offset === -(slides.length - 1);

              return (
                <div
                  key={i}
                  onClick={() => {
                    if (isLeft) prev();
                    if (isRight) next();
                  }}
                  className="absolute inset-0 mx-auto w-[75%]"
                  style={{
                    ...style,
                    transformStyle: "preserve-3d",
                    borderRadius: 12,
                    overflow: "hidden",
                    boxShadow: isActive
                      ? "0 0 40px hsl(42 100% 55% / 0.35)"
                      : "0 4px 20px rgba(0,0,0,0.4)",
                  }}
                >
                  <div
                    className="border border-primary/20 bg-card"
                    style={{
                      borderRadius: 12,
                      overflow: "hidden",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    {isActive ? (
                      <iframe
                        className="aspect-video w-full"
                        style={{ display: "block", width: "100%", height: "100%" }}
                        src={slide.src}
                        allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                        allowFullScreen
                        loading="lazy"
                        title={`Booked.Dental Ad Creative ${i + 1}`}
                      />
                    ) : (
                      <img
                        className="aspect-video w-full object-cover"
                        src={slide.thumbnail}
                        alt={`Booked.Dental Ad Creative ${i + 1} preview`}
                        loading="lazy"
                      />
                    )}
                  </div>
                  {/* Dark overlay for non-active cards */}
                  {!isActive && (
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: "rgba(0,0,0,0.55)",
                        borderRadius: 12,
                        pointerEvents: "none",
                      }}
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* Dots */}
          <div className="mt-6 flex items-center justify-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Go to slide ${i + 1}`}
                className="transition-all duration-300"
                style={{
                  width: i === active ? 10 : 7,
                  height: i === active ? 10 : 7,
                  borderRadius: "50%",
                  background:
                    i === active
                      ? "hsl(42 100% 55%)"
                      : "hsl(220 10% 40%)",
                }}
              />
            ))}
          </div>

          {/* Caption */}
          <div className="mt-4 h-8">
            {slides.map((slide, i) => (
              <p
                key={i}
                className="text-center text-xs text-muted-foreground transition-opacity duration-500"
                style={{
                  opacity: i === active ? 1 : 0,
                  position: i === active ? "relative" : "absolute",
                  pointerEvents: i === active ? "auto" : "none",
                }}
              >
                {slide.caption}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreativesVideo;
