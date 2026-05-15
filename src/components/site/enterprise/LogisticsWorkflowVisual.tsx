import { Anchor, ClipboardCheck, Container, FileInput, Landmark, PackageOpen, Plane, Truck } from "lucide-react";

const phases = [
  {
    k: "01",
    title: "Commercial & routing",
    detail: "Incoterms, carrier selection, booking confirmation, SI cut-offs.",
    icon: ClipboardCheck,
  },
  {
    k: "02",
    title: "Export documentation",
    detail: "BL draft, certificates, packing lists, export filings where applicable.",
    icon: FileInput,
  },
  {
    k: "03",
    title: "Origin execution",
    detail: "Gate-out, VGM, CY handover, airside acceptance, inland milestones.",
    icon: Truck,
  },
  {
    k: "04",
    title: "Main carriage",
    detail: "Ocean sailings / air uplift with milestone pings and transshipment watch.",
    icon: Container,
  },
  {
    k: "05",
    title: "Import & regulatory",
    detail: "Pre-arrival filing, duties & taxes, inspections, holds management.",
    icon: Landmark,
  },
  {
    k: "06",
    title: "Final delivery",
    detail: "Devanning, bonded moves if required, POD, proof & cost close-out.",
    icon: PackageOpen,
  },
];

export function LogisticsWorkflowVisual() {
  return (
    <div className="rounded-2xl border border-white/10 bg-[oklch(0.085_0.03_260)] p-6 sm:p-8 lg:p-10 ring-1 ring-white/[0.04]">
      <div className="flex flex-col gap-2 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <div className="text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">Operating model</div>
          <h3 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">End-to-end shipment governance</h3>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            A single accountable program manager aligns carrier milestones with customs and finance checkpoints — so exceptions surface early and resolve with audit context.
          </p>
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-3 text-[11px] text-muted-foreground lg:mt-0">
          <span className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/5 px-2.5 py-1.5">
            <Anchor className="h-3.5 w-3.5 text-[var(--gold)]" />
            Incoterms-aware routing
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/5 px-2.5 py-1.5">
            <Plane className="h-3.5 w-3.5 text-[var(--royal)]" />
            Multimodal handoffs
          </span>
        </div>
      </div>

      {/* Desktop: horizontal pipeline */}
      <div className="mt-10 hidden lg:block">
        <div className="relative px-[5%]">
          <div className="absolute left-[5%] right-[5%] top-[22px] h-px bg-gradient-to-r from-transparent via-white/18 to-transparent" aria-hidden />
          <ol className="relative grid grid-cols-6 gap-3">
            {phases.map((p) => (
              <li key={p.k} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-[oklch(0.1_0.035_260)] ring-2 ring-[oklch(0.09_0.03_260)]">
                    <p.icon className="h-4 w-4 text-[var(--gold)]" aria-hidden />
                  </div>
                  <div className="mt-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">Phase {p.k}</div>
                  <div className="mt-1.5 text-xs font-semibold leading-snug text-foreground">{p.title}</div>
                  <p className="mt-2 text-[11px] leading-relaxed text-muted-foreground">{p.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* Mobile / tablet: vertical timeline */}
      <ol className="mt-8 space-y-0 lg:hidden">
        {phases.map((p, i) => (
          <li key={p.k} className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-[oklch(0.1_0.035_260)]">
                <p.icon className="h-4 w-4 text-[var(--gold)]" aria-hidden />
              </div>
              {i < phases.length - 1 ? <div className="my-1 w-px flex-1 min-h-[12px] bg-white/10" aria-hidden /> : null}
            </div>
            <div className={`pb-8 ${i === phases.length - 1 ? "pb-0" : ""}`}>
              <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">Phase {p.k}</div>
              <div className="mt-1 text-sm font-semibold text-foreground">{p.title}</div>
              <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">{p.detail}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
