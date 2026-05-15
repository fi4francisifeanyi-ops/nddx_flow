import { BadgeCheck, FileStack, Globe2, Shield, Users } from "lucide-react";

const governance = [
  { title: "Document control", body: "Versioned BL drafts, certificate registers, and filing receipts retained for audit and insurance." },
  { title: "Segregation of duties", body: "Commercial, operations, and compliance checkpoints on high-value or controlled lanes." },
  { title: "Exception discipline", body: "Named owners, SLA clocks, and carrier escalation paths — not ad-hoc inbox threads." },
];

const credentials = [
  { icon: Shield, label: "Security & continuity", text: "Operational security practices aligned to supply-chain risk management (ISO 28000 family) where contracted." },
  { icon: BadgeCheck, label: "Trusted trader alignment", text: "Programs coordinated with AEO / C-TPAT-style frameworks via licensed brokerage partners at origin and destination." },
  { icon: FileStack, label: "Trade record integrity", text: "HS classification support, valuation methodology, and origin documentation managed with traceability." },
  { icon: Globe2, label: "Regional desks", text: "Time-zone coverage across Lagos, Dubai, Rotterdam, Singapore, Houston, and New York trade desks." },
  { icon: Users, label: "Named accountability", text: "Program manager + documentation lead assigned per shipment file — not anonymous chat queues." },
];

export function OperationalCredibility() {
  return (
    <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
      <div className="lg:col-span-5 surface-panel rounded-2xl p-6 sm:p-8 lg:p-10">
        <div className="text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">Governance</div>
        <h3 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">How decisions are controlled</h3>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          International forwarding involves multiple legal entities, carriers, and regulators. NDDXtra structures accountability so approvals, filings, and handoffs are explicit — not implied.
        </p>
        <ul className="mt-8 space-y-5">
          {governance.map((g) => (
            <li key={g.title} className="border-l-2 border-[var(--gold)]/40 pl-4">
              <div className="text-sm font-semibold text-foreground">{g.title}</div>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{g.body}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="lg:col-span-7 space-y-4">
        <div className="surface-panel rounded-2xl p-6 sm:p-8">
          <div className="text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">Operational credibility</div>
          <h3 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">Built for regulated, cross-border movement</h3>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {credentials.map((c) => (
            <div key={c.label} className="surface-panel rounded-2xl p-5 sm:p-6 flex flex-col gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                <c.icon className="h-4 w-4 text-[var(--gold)]" aria-hidden />
              </div>
              <div>
                <div className="text-sm font-semibold text-foreground">{c.label}</div>
                <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">{c.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
