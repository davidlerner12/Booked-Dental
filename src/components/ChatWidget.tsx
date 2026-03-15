import { useState, useEffect, useRef, type FormEvent } from "react";
import { useLocation, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, ArrowRight, Bot } from "lucide-react";

const STORAGE_KEY = "bd_chat_city";
const MSG_DELAY = 1000;

const MSG_QUESTION = "Quick question — what city is your clinic in?";
const MSG_THANKS = "Thanks. We only work with one clinic per market.";
const MSG_STRATEGY =
  "Market availability is confirmed during a quick strategy call so we can also review whether the system is a fit for your practice.";

function getRestoredState(): { messages: Msg[]; step: "city" | "done" } {
  const saved = typeof localStorage !== "undefined" ? localStorage.getItem(STORAGE_KEY) : null;
  if (!saved) return { messages: [], step: "city" };
  return {
    messages: [
      { from: "bot", text: MSG_QUESTION },
      { from: "user", text: saved },
      { from: "bot", text: MSG_THANKS },
      { from: "bot", text: MSG_STRATEGY },
    ],
    step: "done",
  };
}

type Msg = { from: "bot" | "user"; text: string };

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
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.25 }}
    className="flex items-end gap-2"
  >
    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
      <Bot className="h-3.5 w-3.5 text-primary" />
    </div>
    <div className="max-w-[85%] rounded-xl rounded-bl-sm border border-border bg-card px-4 py-3 text-sm leading-relaxed text-foreground">
      {text}
    </div>
  </motion.div>
);

const UserBubble = ({ text }: { text: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.25 }}
    className="flex justify-end"
  >
    <div className="max-w-[85%] rounded-xl rounded-br-sm bg-gradient-gold px-4 py-3 text-sm font-medium leading-relaxed text-primary-foreground">
      {text}
    </div>
  </motion.div>
);

export default function ChatWidget() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>(() => getRestoredState().messages);
  const [typing, setTyping] = useState(false);
  const [step, setStep] = useState<"city" | "done">(() => getRestoredState().step);
  const [city, setCity] = useState("");
  const [error, setError] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const openedOnce = useRef(false);

  const scrollToBottom = () =>
    setTimeout(() => bottomRef.current?.scrollIntoView({ behavior: "smooth" }), 50);

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
    await pushBot(MSG_QUESTION);
  };

  const handleOpen = () => {
    if (openedOnce.current) {
      setOpen(true);
      return;
    }
    openedOnce.current = true;
    setOpen(true);
    if (localStorage.getItem(STORAGE_KEY)) {
      return;
    }
    startFlow();
  };

  useEffect(() => {
    if (pathname === "/book") return;
    const timer = setTimeout(() => {
      if (!openedOnce.current) handleOpen();
    }, 10000);
    return () => clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    if (open && step === "city" && !localStorage.getItem(STORAGE_KEY)) {
      setTimeout(() => inputRef.current?.focus(), 400);
    }
  }, [open, step, messages.length]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const trimmed = city.trim();
    if (!trimmed) {
      setError("Please enter your city");
      return;
    }
    setError("");
    localStorage.setItem(STORAGE_KEY, trimmed);
    setMessages((prev) => [...prev, { from: "user", text: trimmed }]);
    setStep("done");
    setCity("");
    scrollToBottom();
    await pushBot(MSG_THANKS);
    await pushBot(MSG_STRATEGY);
  };

  const showCTA =
    step === "done" &&
    !typing &&
    messages.some((m) => m.text === MSG_STRATEGY);

  const handleStartOver = (e: React.MouseEvent) => {
    e.preventDefault();
    localStorage.removeItem(STORAGE_KEY);
    setMessages([]);
    setStep("city");
    setError("");
    startFlow();
  };

  if (pathname === "/book") return null;

  return (
    <>
      {/* Toggle bubble */}
      <AnimatePresence>
        {!open && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            onClick={handleOpen}
            className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-gold shadow-gold transition-transform hover:scale-105 md:bottom-6 md:right-6"
            aria-label="Open chat"
          >
            <MessageCircle className="h-6 w-6 text-primary-foreground" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-4 right-3 z-50 flex w-[calc(100vw-1.5rem)] flex-col overflow-hidden rounded-xl border border-primary/20 bg-card shadow-gold sm:right-5 sm:w-[360px] md:bottom-6 md:right-6"
            style={{ maxHeight: "min(520px, calc(100dvh - 5rem))" }}
          >
            {/* Header */}
            <div className="flex shrink-0 items-center justify-between border-b border-border px-4 py-3">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-gold">
                  <Bot className="h-4 w-4 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-display text-sm font-semibold text-foreground">
                    Booked.Dental
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Typically replies instantly
                  </div>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                aria-label="Close chat"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
              {messages.map((msg, i) =>
                msg.from === "bot" ? (
                  <BotBubble key={i} text={msg.text} />
                ) : (
                  <UserBubble key={i} text={msg.text} />
                )
              )}
              {typing && <TypingDots />}
              {showCTA && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  className="space-y-2 pt-1"
                >
                  <Link
                    to="/book"
                    onClick={() => setOpen(false)}
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-gold px-5 py-3 font-display text-sm font-semibold text-primary-foreground shadow-gold transition-opacity hover:opacity-90"
                  >
                    Check Market Availability
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <p className="text-center text-xs text-muted-foreground">
                    Not your city?{" "}
                    <button
                      type="button"
                      onClick={handleStartOver}
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      Start over
                    </button>
                  </p>
                </motion.div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* City input */}
            {step === "city" && !localStorage.getItem(STORAGE_KEY) && (
              <form
                onSubmit={handleSubmit}
                className="shrink-0 border-t border-border px-3 pb-3 pt-2"
              >
                {error && (
                  <p className="mb-1.5 text-xs text-destructive">{error}</p>
                )}
                <div className="flex items-center gap-2">
                  <input
                    ref={inputRef}
                    type="text"
                    value={city}
                    onChange={(e) => {
                      setCity(e.target.value);
                      if (error) setError("");
                    }}
                    placeholder="e.g. Austin, TX"
                    className="flex-1 rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-gold text-primary-foreground transition-opacity hover:opacity-90"
                    aria-label="Send"
                  >
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
