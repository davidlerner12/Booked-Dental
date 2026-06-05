import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, Download, Plus, Trash2 } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import SEO from "@/components/SEO";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type LeadStatus = "new" | "qualified" | "bad_fit" | "unreachable" | "booked" | "closed";

type LeadRecord = {
  id: string;
  createdAt: string;
  name: string;
  clinic: string;
  email: string;
  phone: string;
  city: string;
  treatmentFocus: string;
  fitScore: string;
  status: LeadStatus;
  caseValue: string;
  notes: string;
};

const STORAGE_KEY = "bookedDentalLeadTracker";

const emptyLead: Omit<LeadRecord, "id" | "createdAt" | "status"> = {
  name: "",
  clinic: "",
  email: "",
  phone: "",
  city: "",
  treatmentFocus: "",
  fitScore: "",
  caseValue: "",
  notes: "",
};

const STATUS_LABELS: Record<LeadStatus, string> = {
  new: "New",
  qualified: "Qualified",
  bad_fit: "Bad fit",
  unreachable: "Unreachable",
  booked: "Booked",
  closed: "Closed",
};

function csvEscape(value: string) {
  return `"${value.replace(/"/g, '""')}"`;
}

function downloadCsv(leads: LeadRecord[]) {
  const headers = [
    "created_at",
    "name",
    "clinic",
    "email",
    "phone",
    "city",
    "treatment_focus",
    "fit_score",
    "status",
    "case_value",
    "notes",
  ];
  const rows = leads.map((lead) => [
    lead.createdAt,
    lead.name,
    lead.clinic,
    lead.email,
    lead.phone,
    lead.city,
    lead.treatmentFocus,
    lead.fitScore,
    STATUS_LABELS[lead.status],
    lead.caseValue,
    lead.notes,
  ]);
  const csv = [headers, ...rows].map((row) => row.map(csvEscape).join(",")).join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `booked-dental-lead-tracker-${new Date().toISOString().slice(0, 10)}.csv`;
  link.click();
  URL.revokeObjectURL(url);
}

export default function LeadTrackerPage() {
  const { lang } = useParams();
  const pageLang = lang === "he" ? "he" : "en";
  const [leads, setLeads] = useState<LeadRecord[]>([]);
  const [draft, setDraft] = useState(emptyLead);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored) setLeads(JSON.parse(stored) as LeadRecord[]);
    } catch {
      setLeads([]);
    }
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(leads));
    } catch {
      // Local storage can be unavailable in private contexts.
    }
  }, [leads]);

  const metrics = useMemo(() => {
    const total = leads.length;
    const qualified = leads.filter((lead) => lead.status === "qualified" || lead.status === "booked" || lead.status === "closed").length;
    const booked = leads.filter((lead) => lead.status === "booked" || lead.status === "closed").length;
    const closed = leads.filter((lead) => lead.status === "closed").length;
    const pipelineValue = leads.reduce((sum, lead) => {
      const value = Number(String(lead.caseValue).replace(/[^0-9.]/g, ""));
      return sum + (Number.isFinite(value) ? value : 0);
    }, 0);
    return {
      total,
      qualified,
      booked,
      closed,
      qualifiedRate: total ? Math.round((qualified / total) * 100) : 0,
      bookedRate: total ? Math.round((booked / total) * 100) : 0,
      pipelineValue,
    };
  }, [leads]);

  const addLead = () => {
    if (!draft.name && !draft.clinic && !draft.email && !draft.phone) return;
    setLeads((current) => [
      {
        ...draft,
        id: crypto.randomUUID(),
        createdAt: new Date().toISOString(),
        status: "new",
      },
      ...current,
    ]);
    setDraft(emptyLead);
  };

  const updateLead = (id: string, updates: Partial<LeadRecord>) => {
    setLeads((current) =>
      current.map((lead) => (lead.id === id ? { ...lead, ...updates } : lead)),
    );
  };

  const deleteLead = (id: string) => {
    setLeads((current) => current.filter((lead) => lead.id !== id));
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        lang={pageLang}
        path="/lead-tracker"
        title="Lead Quality Tracker | Booked.Dental"
        description="Internal lead status tracker for Booked.Dental."
        noindex
      />
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between">
          <Link to={`/${pageLang}`} className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
            <ArrowLeft className="h-4 w-4" />
            Back to site
          </Link>
          <span className="font-display text-lg font-semibold">
            <span className="text-gradient-gold">Booked.</span>Dental Lead Tracker
          </span>
          <LanguageSwitcher />
        </div>
      </header>

      <main className="container py-10">
        <div className="mb-8 max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-primary">
            Internal noindex tool
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight">
            Track lead quality, not just lead volume.
          </h1>
          <p className="mt-4 text-muted-foreground">
            Add each FormSubmit lead, update its status, and export the CSV when you want to review campaign quality. Data is stored only in this browser.
          </p>
        </div>

        <section className="mb-8 grid gap-4 md:grid-cols-5">
          {[
            ["Total", metrics.total],
            ["Qualified", `${metrics.qualified} (${metrics.qualifiedRate}%)`],
            ["Booked", `${metrics.booked} (${metrics.bookedRate}%)`],
            ["Closed", metrics.closed],
            ["Pipeline", `$${metrics.pipelineValue.toLocaleString()}`],
          ].map(([label, value]) => (
            <div key={label} className="rounded-xl border border-border bg-card p-4">
              <div className="text-xs text-muted-foreground">{label}</div>
              <div className="mt-2 font-display text-2xl font-bold text-primary">{value}</div>
            </div>
          ))}
        </section>

        <section className="mb-8 rounded-xl border border-border bg-card p-5">
          <h2 className="font-display text-2xl font-semibold">Add lead</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <div className="space-y-2">
              <Label>Name</Label>
              <Input value={draft.name} onChange={(event) => setDraft({ ...draft, name: event.target.value })} />
            </div>
            <div className="space-y-2">
              <Label>Clinic</Label>
              <Input value={draft.clinic} onChange={(event) => setDraft({ ...draft, clinic: event.target.value })} />
            </div>
            <div className="space-y-2">
              <Label>Email</Label>
              <Input value={draft.email} onChange={(event) => setDraft({ ...draft, email: event.target.value })} />
            </div>
            <div className="space-y-2">
              <Label>Phone</Label>
              <Input value={draft.phone} onChange={(event) => setDraft({ ...draft, phone: event.target.value })} />
            </div>
            <div className="space-y-2">
              <Label>City / market</Label>
              <Input value={draft.city} onChange={(event) => setDraft({ ...draft, city: event.target.value })} />
            </div>
            <div className="space-y-2">
              <Label>Treatment focus</Label>
              <Input value={draft.treatmentFocus} placeholder="Full-arch, veneers, both..." onChange={(event) => setDraft({ ...draft, treatmentFocus: event.target.value })} />
            </div>
            <div className="space-y-2">
              <Label>Fit score</Label>
              <Input value={draft.fitScore} onChange={(event) => setDraft({ ...draft, fitScore: event.target.value })} />
            </div>
            <div className="space-y-2">
              <Label>Potential case value</Label>
              <Input value={draft.caseValue} placeholder="25000" onChange={(event) => setDraft({ ...draft, caseValue: event.target.value })} />
            </div>
            <div className="space-y-2 md:col-span-3">
              <Label>Notes</Label>
              <Textarea value={draft.notes} onChange={(event) => setDraft({ ...draft, notes: event.target.value })} />
            </div>
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button onClick={addLead}>
              <Plus className="h-4 w-4" />
              Add lead
            </Button>
            <Button variant="outline" onClick={() => downloadCsv(leads)} disabled={leads.length === 0}>
              <Download className="h-4 w-4" />
              Export CSV
            </Button>
          </div>
        </section>

        <section className="mb-8 rounded-xl border border-primary/20 bg-primary/5 p-5">
          <h2 className="font-display text-xl font-semibold">Status definitions</h2>
          <div className="mt-4 grid gap-3 text-sm text-muted-foreground md:grid-cols-3">
            <p><strong className="text-foreground">Qualified:</strong> local, reachable, relevant treatment interest, enough fit for focused follow-up.</p>
            <p><strong className="text-foreground">Booked:</strong> the clinic scheduled the prospect for a real evaluation or next step.</p>
            <p><strong className="text-foreground">Closed:</strong> the prospect accepted treatment or became revenue.</p>
          </div>
        </section>

        <section className="overflow-hidden rounded-xl border border-border bg-card">
          <div className="flex items-center justify-between border-b border-border p-5">
            <h2 className="font-display text-2xl font-semibold">Leads</h2>
            <span className="text-sm text-muted-foreground">{leads.length} records</span>
          </div>
          <div className="grid gap-0">
            {leads.length === 0 ? (
              <p className="p-5 text-sm text-muted-foreground">No leads yet. Add your first lead from a FormSubmit email.</p>
            ) : (
              leads.map((lead) => (
                <article key={lead.id} className="grid gap-4 border-b border-border p-5 lg:grid-cols-[1fr_180px_140px_44px]">
                  <div>
                    <div className="font-display text-lg font-semibold">{lead.name || lead.clinic || "Unnamed lead"}</div>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {[lead.clinic, lead.city, lead.treatmentFocus].filter(Boolean).join(" / ")}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {[lead.email, lead.phone].filter(Boolean).join(" / ")}
                    </p>
                    {lead.notes && <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{lead.notes}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label>Status</Label>
                    <select
                      value={lead.status}
                      onChange={(event) => updateLead(lead.id, { status: event.target.value as LeadStatus })}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    >
                      {Object.entries(STATUS_LABELS).map(([value, label]) => (
                        <option key={value} value={value}>{label}</option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label>Case value</Label>
                    <Input value={lead.caseValue} onChange={(event) => updateLead(lead.id, { caseValue: event.target.value })} />
                  </div>
                  <button
                    type="button"
                    onClick={() => deleteLead(lead.id)}
                    className="flex h-10 w-10 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-destructive/50 hover:text-destructive"
                    aria-label="Delete lead"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </article>
              ))
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
