import { useState, useEffect, useRef } from "react";
import { Zap, ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const TRANSITION = "all 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94)";

const CreativesVideo = () => {
  const { t } = useTranslation();

  const slides = [
    { src: "https://www.youtube.com/embed/26Z26z8kcFA?si=n3yzTsCZZVloi9hd", thumbnail: "/images/video-thumb-1.jpg", caption: t("creatives_video.caption1") },
    { src: "https://www.youtube.com/embed/6ywdF4ruKeQ?si=zJE-AuaRE7UBPv8n", thumbnail: "/images/video-thumb-2.jpg", caption: t("creatives_video.caption2") },
    { src: "https://www.youtube.com/embed/qMZOpnaFIRA", thumbnail: "/images/video-thumb-3.jpg", caption: t("creatives_video.caption3") },
  ];

  const [active, setActive] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const paused = useRef(false);
  const timerRef = useRef<ReturnType<typeof setInterval>>();

  const next = () => setActive((p) => (p + 1) % slides.length);
  const prev = () => setActive((p) => (p - 1 + slides.length) % slides.length);

  function getCardStyle(offset: number, mobile: boolean): React.CSSProperties {
    if (mobile) {
      if (offset === 0) return { transform: "translateX(0) scale(1)", zIndex: 3, opacity: 1, transition: TRANSITION };
      return { transform: "translateX(0) scale(0.96)", zIndex: 0, opacity: 0, pointerEvents: "none", transition: TRANSITION };
    }
    if (offset === 0) return { transform: "translateX(0) scale(1.08) rotateY(0deg)", zIndex: 3, opacity: 1, transition: TRANSITION };
    if (offset === -1 || offset === slides.length - 1) return { transform: "translateX(-65%) scale(0.82) rotateY(25deg)", zIndex: 2, opacity: 0.5, cursor: "pointer", transition: TRANSITION };
    if (offset === 1 || offset === -(slides.length - 1)) return { transform: "translateX(65%) scale(0.82) rotateY(-25deg)", zIndex: 2, opacity: 0.5, cursor: "pointer", transition: TRANSITION };
    return { transform: "translateX(0) scale(0.6)", zIndex: 0, opacity: 0, pointerEvents: "none", transition: TRANSITION };
  }

  useEffect(() => {
    timerRef.current = setInterval(() => { if (!paused.current) next(); }, 5000);
    return () => clearInterval(timerRef.current);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const updateMobile = () => setIsMobile(mediaQuery.matches);
    updateMobile();
    mediaQuery.addEventListener("change", updateMobile);
    return () => mediaQuery.removeEventListener("change", updateMobile);
  }, []);

  return (
    <section className="relative overflow-x-hidden border-y border-border bg-card/50 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(42_100%_55%/0.04),transparent_70%)]" />
      <div className="container relative z-10">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm text-primary">
            <Zap className="h-4 w-4" />
            {t("creatives_video.badge")}
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            {t("creatives_video.title_prefix")}<span className="text-gradient-gold">{t("creatives_video.title_highlight")}</span>
          </h2>
          <p className="mx-auto max-w-xl text-muted-foreground">{t("creatives_video.subtitle")}</p>
        </div>
        <div className="relative mx-auto w-full max-w-full overflow-hidden px-2 md:max-w-3xl md:overflow-visible md:px-0" onMouseEnter={() => (paused.current = true)} onMouseLeave={() => (paused.current = false)}>
          <button onClick={prev} aria-label="Previous slide" className="absolute left-1 top-1/2 z-10 -translate-y-1/2 rounded-full bg-background/80 p-1.5 text-muted-foreground shadow-md transition-colors hover:bg-background hover:text-primary md:left-0 md:-translate-x-10 md:bg-transparent md:p-0 md:shadow-none">
            <ChevronLeft className="h-7 w-7 md:h-8 md:w-8" />
          </button>
          <button onClick={next} aria-label="Next slide" className="absolute right-1 top-1/2 z-10 -translate-y-1/2 rounded-full bg-background/80 p-1.5 text-muted-foreground shadow-md transition-colors hover:bg-background hover:text-primary md:right-0 md:translate-x-10 md:bg-transparent md:p-0 md:shadow-none">
            <ChevronRight className="h-7 w-7 md:h-8 md:w-8" />
          </button>
          <div className="relative mx-auto w-full max-w-full md:max-w-none" style={{ perspective: isMobile ? "none" : "1200px", height: isMobile ? "clamp(200px, 52vh, 320px)" : "clamp(220px, 42vw, 420px)" }}>
            {slides.map((slide, i) => {
              const offset = i - active;
              const style = getCardStyle(offset, isMobile);
              const isActive = offset === 0;
              const isLeft = offset === -1 || offset === slides.length - 1;
              const isRight = offset === 1 || offset === -(slides.length - 1);
              return (
                <div key={i} onClick={() => { if (isLeft) prev(); if (isRight) next(); }} className={`absolute inset-0 mx-auto overflow-hidden md:w-[75%] ${isMobile ? "w-full" : "w-[86%]"}`} style={{ ...style, transformStyle: "preserve-3d", borderRadius: 12, overflow: "hidden", boxShadow: isActive ? "0 0 40px hsl(42 100% 55% / 0.35)" : "0 4px 20px rgba(0,0,0,0.4)" }}>
                  <div className="border border-primary/20 bg-card" style={{ borderRadius: 12, overflow: "hidden", width: "100%", height: "100%" }}>
                    {isActive ? (
                      <iframe className="aspect-video w-full" style={{ display: "block", width: "100%", height: "100%" }} src={slide.src} allow="autoplay; fullscreen; encrypted-media; picture-in-picture; clipboard-write" loading="lazy" title={`Booked.Dental Ad Creative ${i + 1}`} />
                    ) : (
                      <img className="aspect-video w-full object-cover" src={slide.thumbnail} alt={`Booked.Dental Ad Creative ${i + 1} preview`} loading="lazy" />
                    )}
                  </div>
                  {!isActive && <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.55)", borderRadius: 12, pointerEvents: "none" }} />}
                </div>
              );
            })}
          </div>
          <div className="mt-6 flex items-center justify-center gap-1.5">
            {slides.map((_, i) => (
              <button key={i} onClick={() => setActive(i)} aria-label={`Go to slide ${i + 1}`} className="flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60" style={{ background: "transparent" }}>
                <span aria-hidden style={{ width: i === active ? 10 : 7, height: i === active ? 10 : 7, borderRadius: "50%", background: i === active ? "hsl(42 100% 55%)" : "hsl(220 12% 58%)" }} />
              </button>
            ))}
          </div>
          <div className="mt-4 h-8">
            {slides.map((slide, i) => (
              <p key={i} className="text-center text-xs text-muted-foreground transition-opacity duration-500" style={{ opacity: i === active ? 1 : 0, position: i === active ? "relative" : "absolute", pointerEvents: i === active ? "auto" : "none" }}>
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
