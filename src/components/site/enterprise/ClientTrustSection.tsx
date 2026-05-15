const quotes = [
  {
    text: "We stopped chasing carriers in spreadsheets. One file owner, one timeline — that alone paid for the relationship in the first quarter.",
    role: "Supply chain director",
    sector: "Industrial components · EU ↔ West Africa",
  },
  {
    text: "Customs holds used to blindside us. Now we see filings, dependencies, and who is accountable before the container hits the port.",
    role: "Head of imports",
    sector: "Consumer durables · Asia hub",
  },
  {
    text: "Their documentation discipline is closer to a bank operations team than a traditional forwarder.",
    role: "CFO",
    sector: "Agricultural exports · multi-origin program",
  },
];

const sectors = ["Industrial & MRO", "Consumer & retail", "Energy & project", "Pharma-compliant lanes (partner-led)", "Agriculture & perishables"];

export function ClientTrustSection() {
  return (
    <div className="surface-panel rounded-2xl p-6 sm:p-8 lg:p-10">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-7">
          <div className="text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">Client references</div>
          <h3 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">What operators say about the desk</h3>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
            We typically work with importers, exporters, and distributors running recurring international programs. Identities are withheld under standard confidentiality — the quotes below are paraphrased from client feedback.
          </p>
          <ul className="mt-8 space-y-6">
            {quotes.map((q) => (
              <li key={q.role} className="border-l-2 border-[var(--gold)]/40 pl-5">
                <blockquote className="text-sm leading-relaxed text-foreground/90">“{q.text}”</blockquote>
                <div className="mt-3 text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
                  {q.role} · <span className="text-foreground/70 normal-case tracking-normal">{q.sector}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <aside className="lg:col-span-5 flex flex-col justify-between gap-6 rounded-xl border border-white/10 bg-white/[0.02] p-6 sm:p-7">
          <div>
            <div className="text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">Where we add leverage</div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Programs with multiple origins, bonded movements, or recurring customs exposure benefit most from a coordinated control tower — especially when finance needs landed-cost certainty.
            </p>
          </div>
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">Representative sectors</div>
            <ul className="mt-3 space-y-2.5 text-sm text-foreground/85">
              {sectors.map((s) => (
                <li key={s} className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-[var(--emerald)]" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <p className="text-[11px] leading-relaxed text-muted-foreground border-t border-white/10 pt-5">
            NDDXtra coordinates freight and trade documentation; licensed customs brokers and carriers remain the legal filers and performing carriers unless otherwise contracted in writing.
          </p>
        </aside>
      </div>
    </div>
  );
}
