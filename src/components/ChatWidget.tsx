import { useEffect, useRef, useState, type FormEvent, type MouseEvent } from "react";
import { useLocation, Link, useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, ArrowRight, Bot, CheckCircle2 } from "lucide-react";
import { trackBookingCTA, trackEvent } from "@/lib/analytics";

const STORAGE_KEY = "bd_chat_market_check";
const MSG_DELAY = 700;

type Step = "treatment" | "city" | "done";
type Treatment = "fullArch" | "veneers" | "both";
type Msg = { from: "bot" | "user"; text: string };

const COPY = {
  en: {
    header: "Booked.Dental",
    subheader: "Market fit assistant",
    opener: "Want a quick market-fit check before filling out the full form?",
    treatmentQuestion: "Which treatment do you want more qualified opportunities for?",
    cityQuestion: "Great. What city or market is your clinic in?",
    cityPlaceholder: "e.g. Austin, TX",
    cityError: "Please enter your city or market.",
    treatmentLabels: {
      fullArch: "Full-arch / All-on-4",
      veneers: "Veneers / cosmetic dentistry",
      both: "Both",
    },
    thanks: "Thanks. We only work with one clinic per local market.",
    strategy:
      "The next step is a proper fit check: market availability, clinic capacity, lead quality tracking, and whether the system can teach the ads to find patients instead of clicks.",
    cta: "Continue Market Check",
    resetPrompt: "Need to check another market?",
    reset: "Start over",
  },
  he: {
    header: "Booked.Dental",
    subheader: "בדיקת התאמה מהירה",
    opener: "רוצים בדיקת התאמה קצרה לפני מילוי הטופס המלא?",
    treatmentQuestion: "לאיזה תחום טיפול אתם רוצים יותר הזדמנויות איכותיות?",
    cityQuestion: "מצוין. באיזו עיר או אזור נמצאת המרפאה?",
    cityPlaceholder: "לדוגמה: תל אביב, חיפה",
    cityError: "נא להזין עיר או אזור.",
    treatmentLabels: {
      fullArch: "שיקום מלא / All-on-4",
      veneers: "ציפויים / אסתטיקה דנטלית",
      both: "גם וגם",
    },
    thanks: "תודה. אנחנו עובדים עם מרפאה אחת בלבד בכל אזור מקומי.",
    strategy:
      "השלב הבא הוא בדיקת התאמה אמיתית: זמינות אזור, קיבולת המרפאה, מדידת איכות פניות והאם המערכת יכולה ללמד את הפרסום למצוא מטופלים במקום קליקים.",
    cta: "המשיכו לבדיקת התאמה",
    resetPrompt: "רוצים לבדוק אזור אחר?",
    reset: "התחילו מחדש",
  },
} as const;

function loadSaved(pageLang: "en" | "he") {
  if (typeof localStorage === "undefined") return null;
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return null;
    const parsed = JSON.parse(saved) as { treatment?: Treatment; city?: string };
    if (!parsed.treatment || !parsed.city) return null;
    const copy = COPY[pageLang];
    return {
      treatment: parsed.treatment,
      city: parsed.city,
      messages: [
        { from: "bot" as const, text: copy.opener },
        { from: "bot" as const, text: copy.treatmentQuestion },
        { from: "user" as const, text: copy.treatmentLabels[parsed.treatment] },
        { from: "bot" as const, text: copy.cityQuestion },
        { from: "user" as const, text: parsed.city },
        { from: "bot" as const, text: copy.thanks },
        { from: "bot" as const, text: copy.strategy },
      ],
    };
  } catch {
    return null;
  }
}

const TypingDots = () => (
  <div className="flex items-end gap-2">
    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
      <Bot className="h-3.5 w-3.5 text-primary" />
    </div>
    <div className="flex gap-1 rounded-xl rounded-bl-sm border border-border bg-card px-4 py-3">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="block h-1.5 w-1.5 rounded-full bg-muted-foreground"
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.15 }}
        />
      ))}
    </div>
  </div>
);

const BotBubble = ({ text }: { text: string }) => (
  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }} className="flex items-end gap-2">
    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
      <Bot className="h-3.5 w-3.5 text-primary" />
    </div>
    <div className="max-w-[85%] rounded-xl rounded-bl-sm border border-border bg-card px-4 py-3 text-sm leading-relaxed text-foreground">{text}</div>
  </motion.div>
);

const UserBubble = ({ text }: { text: string }) => (
  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }} className="flex justify-end">
    <div className="max-w-[85%] rounded-xl rounded-br-sm bg-gradient-gold px-4 py-3 text-sm font-medium leading-relaxed text-primary-foreground">{text}</div>
  </motion.div>
);

export default function ChatWidget() {
  const { pathname } = useLocation();
  const { lang } = useParams();
  const pageLang = lang === "he" ? "he" : "en";
  const copy = COPY[pageLang];
  const saved = loadSaved(pageLang);
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>(saved?.messages || []);
  const [typing, setTyping] = useState(false);
  const [step, setStep] = useState<Step>(saved ? "done" : "treatment");
  const [treatment, setTreatment] = useState<Treatment | null>(saved?.treatment || null);
  const [city, setCity] = useState("");
  const [error, setError] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const started = useRef(Boolean(saved));

  const scrollToBottom = () => setTimeout(() => bottomRef.current?.scrollIntoView({ behavior: "smooth" }), 50);

  const pushBot = (text: string) => {
    setTyping(true);
    scrollToBottom();
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        setTyping(false);
        setMessages((prev) => [...prev, { from: "bot", text }]);
        scrollToBottom();
        resolve();
      }, MSG_DELAY);
    });
  };

  const startFlow = async () => {
    started.current = true;
    trackEvent("Chat", "market_check_chat_started", pageLang);
    await pushBot(copy.opener);
    await pushBot(copy.treatmentQuestion);
  };

  const handleOpen = () => {
    setOpen(true);
    if (!started.current) void startFlow();
  };

  useEffect(() => {
    if (open && step === "city") {
      setTimeout(() => inputRef.current?.focus(), 350);
    }
  }, [open, step]);

  const handleTreatment = async (selected: Treatment) => {
    setTreatment(selected);
    setMessages((prev) => [...prev, { from: "user", text: copy.treatmentLabels[selected] }]);
    setStep("city");
    trackEvent("Chat", "market_check_chat_treatment_selected", selected);
    scrollToBottom();
    await pushBot(copy.cityQuestion);
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const trimmed = city.trim();
    if (!trimmed) {
      setError(copy.cityError);
      return;
    }
    setError("");
    const selectedTreatment = treatment || "both";
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ treatment: selectedTreatment, city: trimmed }));
    setMessages((prev) => [...prev, { from: "user", text: trimmed }]);
    setStep("done");
    setCity("");
    trackEvent("Chat", "market_check_chat_city_entered", trimmed);
    scrollToBottom();
    await pushBot(copy.thanks);
    await pushBot(copy.strategy);
  };

  const handleStartOver = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    localStorage.removeItem(STORAGE_KEY);
    setMessages([]);
    setTreatment(null);
    setStep("treatment");
    setError("");
    void startFlow();
  };

  if (pathname.endsWith("/book") || pathname.endsWith("/thank-you") || pathname.endsWith("/lead-tracker") || pathname.endsWith("/follow-up-templates")) {
    return null;
  }

  const showTreatmentButtons = step === "treatment" && !typing && messages.some((message) => message.text === copy.treatmentQuestion);
  const showCTA = step === "done" && !typing && messages.some((message) => message.text === copy.strategy);

  return (
    <>
      <AnimatePresence>
        {!open && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            onClick={handleOpen}
            className="fixed bottom-5 end-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-gold shadow-gold transition-transform hover:scale-105 md:bottom-6 md:end-6"
            aria-label="Open market fit assistant"
          >
            <MessageCircle className="h-6 w-6 text-primary-foreground" />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-4 end-3 z-50 flex w-[calc(100vw-1.5rem)] flex-col overflow-hidden rounded-xl border border-primary/20 bg-card shadow-gold sm:end-5 sm:w-[380px] md:bottom-6 md:end-6"
            style={{ maxHeight: "min(560px, calc(100dvh - 5rem))" }}
          >
            <div className="flex shrink-0 items-center justify-between border-b border-border px-4 py-3">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-gold">
                  <Bot className="h-4 w-4 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-display text-sm font-semibold text-foreground">{copy.header}</div>
                  <div className="text-xs text-muted-foreground">{copy.subheader}</div>
                </div>
              </div>
              <button onClick={() => setOpen(false)} className="rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground" aria-label="Close chat">
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
              {messages.map((msg, index) => (msg.from === "bot" ? <BotBubble key={index} text={msg.text} /> : <UserBubble key={index} text={msg.text} />))}
              {typing && <TypingDots />}

              {showTreatmentButtons && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-2 ps-9">
                  {(Object.keys(copy.treatmentLabels) as Treatment[]).map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => void handleTreatment(option)}
                      className="flex w-full items-center gap-2 rounded-lg border border-border bg-background px-4 py-3 text-start text-sm text-foreground transition-colors hover:border-primary/40 hover:bg-primary/5"
                    >
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                      {copy.treatmentLabels[option]}
                    </button>
                  ))}
                </motion.div>
              )}

              {showCTA && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.15 }} className="space-y-2 pt-1">
                  <Link
                    to={`/${pageLang}/book`}
                    state={{ source: "market-check-chat", treatment }}
                    onClick={() => {
                      trackBookingCTA();
                      setOpen(false);
                    }}
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-gold px-5 py-3 font-display text-sm font-semibold text-primary-foreground shadow-gold transition-opacity hover:opacity-90"
                  >
                    {copy.cta}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <p className="text-center text-xs text-muted-foreground">
                    {copy.resetPrompt}{" "}
                    <button type="button" onClick={handleStartOver} className="font-medium text-primary underline-offset-4 hover:underline">
                      {copy.reset}
                    </button>
                  </p>
                </motion.div>
              )}
              <div ref={bottomRef} />
            </div>

            {step === "city" && (
              <form onSubmit={handleSubmit} className="shrink-0 border-t border-border px-3 pb-3 pt-2">
                {error && <p className="mb-1.5 text-xs text-destructive">{error}</p>}
                <div className="flex items-center gap-2">
                  <input
                    ref={inputRef}
                    type="text"
                    value={city}
                    onChange={(event) => {
                      setCity(event.target.value);
                      if (error) setError("");
                    }}
                    placeholder={copy.cityPlaceholder}
                    className="flex-1 rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none"
                  />
                  <button type="submit" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-gold text-primary-foreground transition-opacity hover:opacity-90" aria-label="Send">
                    <Send className="h-4 w-4" />
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
