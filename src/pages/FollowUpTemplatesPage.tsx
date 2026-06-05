import { ArrowLeft, Copy, MailCheck } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import SEO from "@/components/SEO";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const templates = [
  {
    title: "Immediate reply",
    subject: "Quick next step for your Booked.Dental market check",
    body:
      "Hi [Name], thanks for sending over the market check for [Clinic]. I’m reviewing the city, treatment focus, capacity, and current lead-quality issue now. The main thing I’m looking for is whether we can build a system that filters for real patient opportunities, not just cheaper form fills. I’ll come back with the clearest next step shortly.",
  },
  {
    title: "No-response follow-up",
    subject: "Should I keep reviewing [City] for you?",
    body:
      "Hi [Name], quick follow-up. I’m checking whether [City] is still open and whether your clinic looks like a fit for implant/cosmetic patient acquisition. The biggest factor is whether your team wants to measure qualified opportunities and booked consult potential, not only lead volume. Should I keep this market open while I finish the review?",
  },
  {
    title: "Proof follow-up",
    subject: "Why we track lead quality before scaling",
    body:
      "Hi [Name], one reason Booked.Dental is different from a normal dental marketing agency is that we track what happens after the form submit. A cheap lead is not useful if the person is not reachable, not qualified, or not serious about treatment. The goal is to help the campaign learn from qualified opportunities so the system gets better at finding patients instead of clicks.",
  },
];

export default function FollowUpTemplatesPage() {
  const { lang } = useParams();
  const pageLang = lang === "he" ? "he" : "en";

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        lang={pageLang}
        path="/follow-up-templates"
        title="Lead Follow-Up Templates | Booked.Dental"
        description="Internal follow-up templates for Booked.Dental market check leads."
        noindex
      />
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between">
          <Link to={`/${pageLang}`} className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
            <ArrowLeft className="h-4 w-4" />
            Back to site
          </Link>
          <span className="font-display text-lg font-semibold">
            <span className="text-gradient-gold">Booked.</span>Dental Follow-Up
          </span>
          <LanguageSwitcher />
        </div>
      </header>

      <main className="container py-10">
        <div className="mb-8 max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-primary">Internal noindex tool</p>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight">Follow-up copy for market-check leads.</h1>
          <p className="mt-4 text-muted-foreground">
            Use these when a dentist submits the form but has not yet moved into a real sales conversation. The angle is lead quality, market exclusivity, and patient acquisition instead of generic marketing.
          </p>
        </div>

        <div className="grid gap-5">
          {templates.map((template) => (
            <article key={template.title} className="rounded-xl border border-border bg-card p-6">
              <div className="mb-4 flex items-center gap-2">
                <MailCheck className="h-5 w-5 text-primary" />
                <h2 className="font-display text-2xl font-semibold">{template.title}</h2>
              </div>
              <div className="rounded-lg border border-border bg-background p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-primary">Subject</p>
                <p className="mt-2 text-sm text-foreground">{template.subject}</p>
              </div>
              <div className="mt-4 rounded-lg border border-border bg-background p-4">
                <p className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-primary">
                  <Copy className="h-3.5 w-3.5" />
                  Body
                </p>
                <p className="whitespace-pre-line text-sm leading-relaxed text-muted-foreground">{template.body}</p>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
