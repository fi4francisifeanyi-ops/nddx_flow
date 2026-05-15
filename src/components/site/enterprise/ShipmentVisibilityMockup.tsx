import { AlertTriangle, ChevronDown, Clock, FileText, MapPin, Radio, Search, Ship } from "lucide-react";

const rows = [
  {
    ref: "NDX-26-044821",
    route: "Apapa (LOS) → Rotterdam (RTM)",
    mode: "FCL · 40' HC",
    milestone: "Transshipment · Tema",
    eta: "11 Jun 2026",
    status: "In transit",
    statusTone: "emerald" as const,
  },
  {
    ref: "NDX-26-044756",
    route: "DXB Free Zone → ORD",
    mode: "Air · Priority",
    milestone: "Export clearance filed",
    eta: "02 Jun 2026",
    status: "Docs",
    statusTone: "gold" as const,
  },
  {
    ref: "NDX-26-044702",
    route: "Houston → Lagos (bonded)",
    mode: "Breakbulk",
    milestone: "Berth window confirmed",
    eta: "18 Jun 2026",
    status: "Scheduled",
    statusTone: "muted" as const,
  },
];

const exceptions = [
  { id: "EX-908", text: "COO pending chamber stamp — supplier SLA 6h", sev: "medium" as const },
  { id: "EX-905", text: "Carrier rolled 48h — alternate sailing proposed", sev: "low" as const },
];

function StatusPill({ label, tone }: { label: string; tone: "emerald" | "gold" | "muted" }) {
  const cls =
    tone === "emerald"
      ? "bg-[var(--emerald)]/12 text-[var(--emerald)] ring-[var(--emerald)]/25"
      : tone === "gold"
        ? "bg-[var(--gold)]/10 text-[var(--gold)] ring-[var(--gold)]/20"
        : "bg-white/5 text-muted-foreground ring-white/10";
  return <span className={`inline-flex items-center rounded-md px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ring-1 ring-inset ${cls}`}>{label}</span>;
}

export function ShipmentVisibilityMockup() {
  return (
    <div className="rounded-2xl border border-white/10 bg-[oklch(0.08_0.03_260)] shadow-[0_40px_100px_-40px_oklch(0_0_0/0.75)] overflow-hidden ring-1 ring-white/[0.04]">
      {/* App chrome */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 bg-[oklch(0.1_0.035_260)] px-4 py-3 sm:px-5">
        <div className="flex items-center gap-3 min-w-0">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--royal)]/25 ring-1 ring-[var(--royal)]/30">
            <Radio className="h-4 w-4 text-[var(--gold)]" aria-hidden />
          </div>
          <div className="min-w-0">
            <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">NDDXtra · Control tower</div>
            <div className="truncate text-sm font-medium text-foreground">Program: West Africa → EU Q2</div>
          </div>
        </div>
        <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
          <span className="hidden sm:inline">Last sync</span>
          <span className="tabular-nums rounded-md bg-white/5 px-2 py-1 ring-1 ring-white/10">UTC 14:32</span>
          <span className="inline-flex items-center gap-1 rounded-md bg-[var(--emerald)]/10 px-2 py-1 font-medium text-[var(--emerald)] ring-1 ring-[var(--emerald)]/20">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--emerald)] opacity-60 animate-ping" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--emerald)]" />
            </span>
            Live
          </span>
        </div>
      </div>

      <div className="grid lg:grid-cols-[1fr_280px]">
        {/* Main workspace */}
        <div className="border-b border-white/10 lg:border-b-0 lg:border-r">
          <div className="flex flex-wrap items-center gap-2 border-b border-white/10 px-4 py-2.5 sm:px-5">
            {["Shipments", "Documents", "Exceptions", "Finance"].map((t, i) => (
              <button
                key={t}
                type="button"
                className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                  i === 0 ? "bg-white/10 text-foreground ring-1 ring-white/10" : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                }`}
              >
                {t}
              </button>
            ))}
            <div className="ml-auto hidden sm:flex items-center gap-2 text-muted-foreground">
              <div className="flex items-center gap-1.5 rounded-md bg-white/5 px-2 py-1 ring-1 ring-white/10">
                <Search className="h-3.5 w-3.5" />
                <span className="text-[11px]">Search reference, BL, HS…</span>
              </div>
              <button type="button" className="inline-flex items-center gap-1 rounded-md bg-white/5 px-2 py-1 text-[11px] ring-1 ring-white/10">
                Filters <ChevronDown className="h-3 w-3" />
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] text-left text-[12px]">
              <thead>
                <tr className="border-b border-white/10 text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                  <th className="px-4 py-3 font-medium sm:px-5">Reference</th>
                  <th className="px-4 py-3 font-medium">Route</th>
                  <th className="px-4 py-3 font-medium">Mode</th>
                  <th className="px-4 py-3 font-medium">Milestone</th>
                  <th className="px-4 py-3 font-medium">ETA (ETA/ATA)</th>
                  <th className="px-4 py-3 font-medium sm:pr-5">Status</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                {rows.map((r) => (
                  <tr key={r.ref} className="border-b border-white/[0.06] hover:bg-white/[0.03]">
                    <td className="px-4 py-3.5 font-mono text-foreground/90 sm:px-5">{r.ref}</td>
                    <td className="px-4 py-3.5">
                      <span className="inline-flex items-center gap-1.5 text-foreground/85">
                        <MapPin className="h-3.5 w-3.5 text-[var(--gold)] shrink-0" />
                        {r.route}
                      </span>
                    </td>
                    <td className="px-4 py-3.5">{r.mode}</td>
                    <td className="px-4 py-3.5">{r.milestone}</td>
                    <td className="px-4 py-3.5 tabular-nums text-foreground/80">{r.eta}</td>
                    <td className="px-4 py-3.5 sm:pr-5">
                      <StatusPill label={r.status} tone={r.statusTone} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid gap-3 border-t border-white/10 p-4 sm:grid-cols-3 sm:p-5">
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Active exceptions</div>
              <div className="mt-2 text-2xl font-display font-semibold tabular-nums text-foreground">2</div>
              <div className="mt-1 text-[11px] text-muted-foreground">Owner-assigned · SLA tracked</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">On-time (rolling 90d)</div>
              <div className="mt-2 text-2xl font-display font-semibold tabular-nums text-[var(--emerald)]">99.1%</div>
              <div className="mt-1 text-[11px] text-muted-foreground">Port congestion adjusted</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Documents due (7d)</div>
              <div className="mt-2 text-2xl font-display font-semibold tabular-nums text-foreground">14</div>
              <div className="mt-1 text-[11px] text-muted-foreground">SI / VGM / certificates</div>
            </div>
          </div>
        </div>

        {/* Exception queue — operations sidebar */}
        <aside className="bg-[oklch(0.085_0.03_260)] p-4 sm:p-5">
          <div className="flex items-center justify-between gap-2">
            <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">Exception queue</div>
            <FileText className="h-4 w-4 text-muted-foreground" aria-hidden />
          </div>
          <ul className="mt-4 space-y-3">
            {exceptions.map((ex) => (
              <li key={ex.id} className="rounded-xl border border-white/10 bg-white/[0.02] p-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-[11px] text-foreground/80">{ex.id}</span>
                  <span className="inline-flex items-center gap-1 text-[10px] font-medium uppercase tracking-wide text-[var(--gold)]">
                    <AlertTriangle className="h-3 w-3" />
                    {ex.sev}
                  </span>
                </div>
                <p className="mt-2 text-[12px] leading-snug text-muted-foreground">{ex.text}</p>
                <div className="mt-3 flex items-center gap-1.5 text-[10px] text-muted-foreground">
                  <Clock className="h-3 w-3 shrink-0" />
                  Owner: Trade desk · Lagos
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-5 rounded-xl border border-dashed border-white/15 bg-white/[0.02] p-3 text-[11px] leading-relaxed text-muted-foreground">
            <div className="flex items-center gap-2 text-foreground/90 font-medium">
              <Ship className="h-3.5 w-3.5 text-[var(--royal)]" />
              Lane briefing
            </div>
            <p className="mt-2">
              Vessel <span className="text-foreground/90">MSK NEXUS</span> — weekly string maintained with carrier ops. Transshipment risk flagged for Tema window.
            </p>
          </div>
        </aside>
      </div>

      <div className="border-t border-white/10 bg-[oklch(0.09_0.03_260)] px-4 py-2.5 text-[10px] text-muted-foreground sm:px-5">
        Illustrative workspace · figures shown are representative of a coordinated multi-shipment program, not a live client feed.
      </div>
    </div>
  );
}
