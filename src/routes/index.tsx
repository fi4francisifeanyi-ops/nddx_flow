import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { ShipmentVisibilityMockup } from "@/components/site/enterprise/ShipmentVisibilityMockup";
import { LogisticsWorkflowVisual } from "@/components/site/enterprise/LogisticsWorkflowVisual";
import { OperationalCredibility } from "@/components/site/enterprise/OperationalCredibility";
import { ClientTrustSection } from "@/components/site/enterprise/ClientTrustSection";
import { PremiumCtaSection } from "@/components/site/PremiumCtaSection";
import dashboard from "@/assets/dashboard.jpg";
import port from "@/assets/port.jpg";
import {
  ArrowRight, ShieldCheck, Boxes, Plane, Ship, Truck,
  FileCheck2, BarChart3, Building2, Headphones, Zap,
  Activity, Container, TrendingUp, MapPin, ClipboardList, PackageCheck,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NDDXtra — Premium Logistics & Trade Facilitation" },
      { name: "description", content: "Coordinate cross-border logistics, customs, and trade compliance with NDDXtra. Built for importers, exporters, distributors, and SMEs." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <SiteLayout>
      <Hero />
      <Trustbar />
      <PremiumCtaSection
        density="compact"
        eyebrow="Importers & inbound programs"
        title="Coordinate your imports efficiently"
        subtitle="Single file ownership, pre-arrival filings, and milestone SLAs across bonded and free-domiciled moves — fewer surprises at the port."
        primary={{ label: "Request Shipment Coordination", to: "/contact" }}
        secondary={{ label: "Review service scope", to: "/services" }}
      />
      <OperationalGovernanceSection />
      <Capabilities />
      <PremiumCtaSection
        density="compact"
        footnote={null}
        eyebrow="Talk to the desk"
        title="Get an orientation on your lanes before you commit"
        subtitle="A program manager reviews volumes, HS exposure, and carrier fit — then proposes a governed execution plan."
        primary={{ label: "Speak With NDDXtra", to: "/contact" }}
        secondary={{ label: "Explore solutions", to: "/solutions" }}
      />
      <PlatformShowcase />
      <VisibilityProgramSection />
      <LogisticsWorkflowSection />
      <PremiumCtaSection
        variant="centered"
        density="compact"
        footnote={null}
        eyebrow="Activation"
        title="Start your shipment process with a governed coordination file"
        subtitle="Share origin, destination, incoterms, and cargo profile — we return scope, assumptions, and next steps."
        primary={{ label: "Start Your Shipment Process", to: "/contact" }}
        secondary={{ label: "Why NDDXtra", to: "/about" }}
      />
      <Modes />
      <HowItWorks />
      <ClientTrustBlock />
      <Stats />
      <CTA />
    </SiteLayout>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero min-h-[92vh] flex items-center">
      {/* Cinematic depth layers */}
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,oklch(0.5_0.2_264/0.35),transparent_60%)]" />
      <div className="absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-[var(--royal)]/25 blur-[140px]" />
      <div className="absolute -bottom-40 -left-40 h-[460px] w-[460px] rounded-full bg-[var(--emerald)]/12 blur-[140px]" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-[200px] w-[500px] rounded-full bg-[var(--gold)]/[0.04] blur-[120px]" />

      {/* Scan line shimmer */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent,oklch(1_0_0/0.02)_50%,transparent)] bg-[length:100%_8px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-16 pb-24 lg:pt-24 lg:pb-32 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left — copy */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 glass rounded-full px-3.5 py-1.5 text-xs">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--emerald)] opacity-75 animate-ping" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--emerald)]" />
              </span>
              <span className="text-muted-foreground">NDDX Limited · Multi-region trade desks</span>
            </div>

            <p className="mt-4 max-w-xl text-[13px] leading-relaxed text-muted-foreground/90 sm:text-sm">
              International freight coordination · Licensed brokerage partnerships at origin/destination · Document-controlled handoffs and milestone governance
            </p>

            <h1 className="mt-6 text-5xl sm:text-6xl lg:text-[5.25rem] font-bold leading-[0.98] tracking-[-0.035em]">
              The intelligence
              <br />
              <span className="text-foreground/95">layer of global</span>
              <br />
              <span className="text-gradient-gold">trade.</span>
            </h1>

            <p className="mt-6 text-lg text-muted-foreground/90 max-w-xl leading-relaxed">
              <span className="text-foreground font-medium">NDDXtra</span> coordinates cross-border logistics, customs, and trade compliance for importers, exporters, distributors, and SMEs — with the controls, records, and escalation paths you would expect from an international trade desk, not a lightweight booking tool.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="group relative inline-flex min-h-[48px] items-center gap-2 rounded-xl bg-gold-gradient px-8 py-3.5 text-sm font-semibold text-[oklch(0.12_0.04_260)] shadow-luxury glow-gold ring-1 ring-[oklch(0.88_0.12_88/0.35)] transition-all hover:brightness-[1.04] active:scale-[0.99]"
              >
                Request Shipment Coordination <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/services"
                className="inline-flex min-h-[48px] items-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-8 py-3.5 text-sm font-semibold backdrop-blur-sm transition-all hover:border-white/25 hover:bg-white/[0.08] active:scale-[0.99]"
              >
                Explore the platform
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6 max-w-lg">
              {[
                { v: "180+", l: "Country corridors" },
                { v: "99.4%", l: "On-time performance" },
                { v: "24/7", l: "Desk coverage" },
              ].map((s) => (
                <div key={s.l} className="border-l border-white/15 pl-4">
                  <div className="text-3xl font-display font-semibold text-foreground tabular-nums">{s.v}</div>
                  <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground mt-1.5">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — animated globe + dashboards */}
          <div className="lg:col-span-6 relative h-[560px] lg:h-[640px]">
            <GlobeRoutes />

            {/* Floating dashboard — top right */}
            <div className="absolute top-2 right-0 lg:right-2 w-[260px] glass-strong rounded-2xl p-4 shadow-luxury animate-float-subtle ring-1 ring-white/10 z-20">
              <div className="flex items-center justify-between">
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Active lane</div>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-[var(--emerald)]/15 text-[var(--emerald)] font-medium">Live</span>
              </div>
              <div className="mt-2.5 flex items-center gap-2">
                <Ship className="h-4 w-4 text-[var(--royal)]" />
                <div className="text-sm font-semibold">Lagos → Rotterdam</div>
              </div>
              <div className="mt-3 h-1.5 rounded-full bg-white/5 overflow-hidden">
                <div className="h-full w-[68%] bg-gradient-to-r from-[var(--royal)] to-[var(--emerald)] rounded-full" />
              </div>
              <div className="mt-2.5 flex justify-between text-[11px] text-muted-foreground">
                <span>ETA 14d · cleared</span>
                <span className="text-foreground/80">68%</span>
              </div>
            </div>

            {/* Floating KPI — middle left */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 lg:-left-4 w-[210px] glass-strong rounded-2xl p-4 shadow-luxury animate-float-subtle z-20" style={{ animationDelay: "1.2s" }}>
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-muted-foreground">
                <Activity className="h-3 w-3 text-[var(--emerald)]" /> Throughput
              </div>
              <div className="mt-2 text-2xl font-display font-bold text-foreground tabular-nums">2,847</div>
              <div className="mt-0.5 text-[11px] text-muted-foreground">containers · 24h</div>
              <div className="mt-3 flex items-end gap-1 h-8">
                {[40, 65, 50, 80, 60, 90, 75, 95].map((h, i) => (
                  <div key={i} className="flex-1 rounded-sm bg-gradient-to-t from-[var(--royal)]/40 to-[var(--emerald)]/70" style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>

            {/* Floating compliance — bottom right */}
            <div className="absolute bottom-4 right-2 lg:right-10 w-[230px] glass-strong rounded-2xl p-4 shadow-luxury animate-float-subtle z-20" style={{ animationDelay: "2.4s" }}>
              <div className="flex items-center justify-between">
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Compliance</div>
                <ShieldCheck className="h-3.5 w-3.5 text-[var(--emerald)]" />
              </div>
              <div className="mt-2 text-sm font-semibold flex items-center gap-1.5">
                AEO · ISO 28000
              </div>
              <div className="mt-3 grid grid-cols-3 gap-1.5">
                {["HS", "C/O", "BL"].map((t) => (
                  <div key={t} className="text-center py-1.5 rounded-md bg-white/5 text-[10px] font-medium text-foreground/80 ring-1 ring-white/5">{t}</div>
                ))}
              </div>
            </div>

            {/* Floating mini badge — bottom left */}
            <div className="absolute bottom-16 left-6 hidden md:flex items-center gap-2 glass rounded-full px-3 py-1.5 text-[11px] z-20 animate-float-subtle" style={{ animationDelay: "0.6s" }}>
              <TrendingUp className="h-3 w-3 text-[var(--emerald)]" />
              <span className="text-muted-foreground">Cost <span className="text-[var(--emerald)] font-medium">-18%</span></span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}

function GlobeRoutes() {
  // Curved routes between hub coordinates on a stylized globe
  const hubs = [
    { x: 180, y: 180, name: "Rotterdam" },
    { x: 320, y: 280, name: "Lagos" },
    { x: 420, y: 220, name: "Dubai" },
    { x: 130, y: 300, name: "New York" },
    { x: 480, y: 320, name: "Singapore" },
    { x: 380, y: 390, name: "Cape Town" },
  ];
  const routes = [
    { from: 1, to: 0 }, // Lagos -> Rotterdam
    { from: 1, to: 2 }, // Lagos -> Dubai
    { from: 3, to: 0 }, // NY -> Rotterdam
    { from: 2, to: 4 }, // Dubai -> Singapore
    { from: 1, to: 5 }, // Lagos -> Cape Town
    { from: 3, to: 1 }, // NY -> Lagos
  ];

  const arc = (a: { x: number; y: number }, b: { x: number; y: number }) => {
    const mx = (a.x + b.x) / 2;
    const my = (a.y + b.y) / 2 - Math.hypot(b.x - a.x, b.y - a.y) * 0.35;
    return `M ${a.x} ${a.y} Q ${mx} ${my} ${b.x} ${b.y}`;
  };

  return (
    <div className="absolute inset-0 grid place-items-center">
      <div className="relative w-full max-w-[600px] aspect-square">
        {/* Globe disc */}
        <div className="absolute inset-6 rounded-full bg-[radial-gradient(circle_at_30%_30%,oklch(0.22_0.06_260),oklch(0.09_0.03_260))] ring-1 ring-white/10 shadow-luxury" />
        <div className="absolute inset-6 rounded-full bg-[conic-gradient(from_0deg,transparent_0deg,oklch(0.5_0.2_264/0.12)_90deg,transparent_180deg)] animate-[spin_18s_linear_infinite]" />

        <svg viewBox="0 0 600 600" className="absolute inset-0 w-full h-full" fill="none">
          <defs>
            <radialGradient id="globeGlow" cx="50%" cy="50%" r="50%">
              <stop offset="60%" stopColor="oklch(0.5 0.2 264 / 0)" />
              <stop offset="100%" stopColor="oklch(0.5 0.2 264 / 0.2)" />
            </radialGradient>
            <linearGradient id="routeGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="oklch(0.5 0.2 264 / 0)" />
              <stop offset="50%" stopColor="oklch(0.78 0.06 220 / 0.95)" />
              <stop offset="100%" stopColor="oklch(0.68 0.16 158 / 0)" />
            </linearGradient>
            <filter id="goldGlow">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <circle cx="300" cy="300" r="250" fill="url(#globeGlow)" />

          {/* Latitude/longitude lines */}
          {[80, 130, 180, 230, 280].map((r) => (
            <ellipse key={`lat-${r}`} cx="300" cy="300" rx="240" ry={r} stroke="oklch(1 0 0 / 0.05)" strokeWidth="1" />
          ))}
          {[-60, -30, 0, 30, 60].map((deg) => (
            <ellipse key={`lon-${deg}`} cx="300" cy="300" rx={Math.abs(Math.cos((deg * Math.PI) / 180) * 240)} ry="240" stroke="oklch(1 0 0 / 0.05)" strokeWidth="1" />
          ))}

          {/* Routes (translated +60 to center) */}
          <g transform="translate(60,60)" filter="url(#goldGlow)">
            {routes.map((r, i) => {
              const a = hubs[r.from];
              const b = hubs[r.to];
              const d = arc(a, b);
              return (
                <g key={i}>
                  <path d={d} stroke="oklch(0.5 0.2 264 / 0.18)" strokeWidth="1" />
                  <path d={d} stroke="url(#routeGrad)" strokeWidth="1.5" strokeDasharray="6 220" strokeLinecap="round">
                    <animate attributeName="stroke-dashoffset" from="226" to="0" dur={`${4 + i * 0.6}s`} repeatCount="indefinite" />
                  </path>
                </g>
              );
            })}

            {/* Hub nodes */}
            {hubs.map((h, i) => (
              <g key={i}>
                <circle cx={h.x} cy={h.y} r="8" fill="oklch(0.78 0.14 82 / 0.18)">
                  <animate attributeName="r" values="8;16;8" dur="3s" begin={`${i * 0.4}s`} repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.6;0;0.6" dur="3s" begin={`${i * 0.4}s`} repeatCount="indefinite" />
                </circle>
                <circle cx={h.x} cy={h.y} r="3.5" fill="oklch(0.85 0.14 88)" />
                <circle cx={h.x} cy={h.y} r="1.5" fill="oklch(0.97 0.01 250)" />
              </g>
            ))}
          </g>
        </svg>

        {/* Inner status badge on globe */}
        <div className="absolute left-1/2 bottom-10 -translate-x-1/2 glass rounded-full px-3 py-1.5 flex items-center gap-2 text-[11px]">
          <MapPin className="h-3 w-3 text-[var(--gold)]" />
          <span className="text-muted-foreground">42 active trade lanes</span>
        </div>
      </div>
    </div>
  );
}

function Trustbar() {
  const partners = ["MAERSK", "MSC", "CMA CGM", "Hapag-Lloyd", "DHL Global Forwarding", "FedEx Trade Networks"];
  const standards = [
    "Incoterms® 2020 — commercial terms aligned to carrier contracts",
    "HS classification support with audit-friendly rationale",
    "Certificates of origin, SON/NAFDAC pathways (where applicable)",
    "Letter-of-credit consistency across drafts, BL, and invoice packs",
  ];
  return (
    <section className="border-y border-white/5 bg-[var(--navy-deep)]/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-10 md:py-14">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">
          <div>
            <div className="eyebrow text-center lg:text-left">Carrier & vessel coordination</div>
            <p className="mt-3 text-center text-sm leading-relaxed text-muted-foreground lg:text-left max-w-xl lg:max-w-none">
              Allocations are negotiated with line-level operations teams across major alliances — supplemented by NVOCC-style buying where it improves schedule reliability for your program.
            </p>
            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-x-10 gap-y-4">
              {partners.map((p) => (
                <span key={p} className="text-muted-foreground/75 font-display font-semibold tracking-[0.12em] text-xs sm:text-sm text-center">
                  {p}
                </span>
              ))}
            </div>
          </div>
          <div className="lg:border-l lg:border-white/10 lg:pl-16">
            <div className="eyebrow text-center lg:text-left">Trade execution standards</div>
            <ul className="mt-5 space-y-3.5 text-sm leading-relaxed text-muted-foreground">
              {standards.map((s) => (
                <li key={s} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--gold)]/80" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Capabilities() {
  const items = [
    { icon: Ship, title: "Ocean freight", desc: "FCL, LCL, and project cargo across major maritime corridors.", serviceId: "ocean-freight" },
    { icon: Plane, title: "Air freight", desc: "Time-critical movements with priority airside handling.", serviceId: "air-freight" },
    { icon: Truck, title: "Inland & last-mile", desc: "Bonded trucking, distribution, and fulfillment networks.", serviceId: "inland-last-mile" },
    { icon: FileCheck2, title: "Customs & compliance", desc: "Clearance, classification, duties, and trade documentation.", serviceId: "customs-compliance" },
    { icon: Boxes, title: "Warehousing", desc: "Bonded, FTZ, and SME-grade fulfillment across hubs.", serviceId: "warehousing-3pl" },
    { icon: BarChart3, title: "Trade intelligence", desc: "Lane analytics, landed cost, and supplier visibility.", serviceId: "trade-intelligence" },
  ];
  return (
    <section id="capabilities" className="section-y relative border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="eyebrow">Service pillars</div>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            One accountable program across <span className="text-foreground/95">modes and borders.</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-base sm:text-lg leading-relaxed">
            From booking to proof-of-delivery — including every customs filing, handoff, and exception — specialists run the file; systems enforce the sequence.
          </p>
        </div>

        <div className="mt-12 lg:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {items.map((it) => (
            <div key={it.title} className="group surface-panel rounded-2xl p-6 sm:p-7 hover:border-[var(--royal)]/35 transition-colors">
              <div className="h-11 w-11 rounded-xl bg-[var(--royal)]/15 ring-1 ring-[var(--royal)]/20 grid place-items-center group-hover:bg-[var(--royal)]/25 transition-colors">
                <it.icon className="h-5 w-5 text-foreground/90" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{it.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
              <Link
                to="/services"
                hash={it.serviceId}
                className="mt-5 inline-flex items-center text-xs text-foreground/70 opacity-0 group-hover:opacity-100 transition-opacity hover:text-[var(--gold)]"
              >
                Learn more <ArrowRight className="h-3.5 w-3.5 ml-1" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PlatformShowcase() {
  return (
    <section className="section-y relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--royal)]/[0.06] to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-14">
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <div className="eyebrow">Visibility & records</div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              One operational record for <span className="text-gradient-gold">every shipment file.</span>
            </h2>
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-muted-foreground">
              Milestones, documents, duties, and carrier events are consolidated for finance and operations — so audits, insurer requests, and management reviews do not depend on inbox archaeology.
            </p>
            <ul className="mt-8 space-y-5">
              {[
                { icon: Zap, t: "Predictive ETAs", d: "Port congestion, transshipment risk, and schedule integrity inform arrival forecasts — not marketing ETAs." },
                { icon: ShieldCheck, t: "Compliance vault", d: "HS rationale, certificates, and filing receipts retained with version control and access logs." },
                { icon: Headphones, t: "Named desk coverage", d: "Program manager + documentation lead across overlapping time zones — not anonymous chat queues." },
              ].map((f) => (
                <li key={f.t} className="flex gap-4">
                  <div className="h-10 w-10 rounded-lg bg-[var(--royal)]/15 border border-[var(--royal)]/25 grid place-items-center shrink-0">
                    <f.icon className="h-4 w-4 text-foreground/90" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{f.t}</div>
                    <div className="mt-1 text-sm leading-relaxed text-muted-foreground">{f.d}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-7">
            <div className="surface-panel rounded-2xl p-3 sm:p-4">
              <div className="relative overflow-hidden rounded-xl ring-1 ring-white/10 shadow-luxury">
                <img src={dashboard} alt="Representative control-tower dashboard for coordinated shipments" loading="lazy" width={1600} height={1000} className="w-full h-auto" />
              </div>
              <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between text-[11px] text-muted-foreground">
                <span className="font-mono text-foreground/70">VIEW: PROGRAM_DASHBOARD · ROLE: OPS_MANAGER</span>
                <span className="text-muted-foreground/90">Illustrative UI — client identifiers and live figures anonymized.</span>
              </div>
            </div>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="surface-panel rounded-xl p-4 sm:p-5">
                <div className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Route optimization</div>
                <div className="mt-2 text-sm font-semibold text-foreground">Alternative sailing accepted</div>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  Carrier proposed a 48-hour roll — desk evaluated landed cost vs. inventory cover and confirmed within SLA.
                </p>
              </div>
              <div className="surface-panel rounded-xl p-4 sm:p-5">
                <div className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Financial control</div>
                <div className="mt-2 text-sm font-semibold text-foreground">Landed cost variance · within band</div>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  Duty, THC, and inland legs reconciled against pro-forma with signed-off deltas for the quarter.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      icon: ClipboardList,
      n: "01",
      t: "Blueprint your flow",
      d: "We map lanes, incoterms, documentation, and risk — then agree milestones, SLAs, and a single point of accountability.",
    },
    {
      icon: Container,
      n: "02",
      t: "Execute across modes",
      d: "Ocean, air, inland, customs, and warehousing orchestrated as one program — with live visibility and proactive exception handling.",
    },
    {
      icon: PackageCheck,
      n: "03",
      t: "Close with clarity",
      d: "Landed-cost reporting, audit-ready files, and a debrief that feeds the next cycle — so every shipment makes the next one easier.",
    },
  ];
  return (
    <section className="section-y relative border-t border-white/5 bg-[var(--navy-deep)]/20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,oklch(0.5_0.2_264/0.12),transparent_55%)]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="eyebrow">Operating rhythm</div>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            From first call to <span className="text-gradient-gold">final proof-of-delivery.</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg leading-relaxed text-muted-foreground">
            The same governance model applies to a first SME shipment or a multi-hub enterprise program — scale changes resourcing, not discipline.
          </p>
        </div>
        <div className="mt-12 lg:mt-16 grid md:grid-cols-3 gap-5 lg:gap-6">
          {steps.map((s) => (
            <div key={s.n} className="surface-panel rounded-2xl p-7 sm:p-8 relative overflow-hidden group hover:border-[var(--royal)]/35 transition-colors">
              <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-[var(--gold)]/10 blur-2xl group-hover:bg-[var(--gold)]/15 transition-colors" />
              <div className="flex items-center justify-between gap-3">
                <div className="h-11 w-11 rounded-xl bg-[var(--royal)]/15 ring-1 ring-[var(--royal)]/20 grid place-items-center">
                  <s.icon className="h-5 w-5 text-foreground/90" />
                </div>
                <span className="text-2xl font-display font-bold text-gradient-gold tabular-nums">{s.n}</span>
              </div>
              <h3 className="mt-5 text-lg font-semibold">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            to="/contact"
            className="inline-flex min-h-[48px] items-center gap-2 rounded-xl bg-gold-gradient px-8 py-3 text-sm font-semibold text-[oklch(0.12_0.04_260)] shadow-luxury glow-gold ring-1 ring-[oklch(0.88_0.12_88/0.35)] transition-all hover:brightness-[1.04] active:scale-[0.99]"
          >
            Speak With NDDXtra <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/about"
            className="inline-flex min-h-[48px] items-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-8 py-3 text-sm font-semibold backdrop-blur-sm transition-all hover:border-white/25 hover:bg-white/[0.08] active:scale-[0.99]"
          >
            Why NDDXtra
          </Link>
        </div>
      </div>
    </section>
  );
}

function Modes() {
  const modes = [
    { t: "Importers", d: "End-to-end inbound coordination, duty optimization and customs clearance." },
    { t: "Exporters", d: "Documentation, certifications, and outbound lane management." },
    { t: "Distributors", d: "Multi-warehouse fulfillment with SLA-backed last-mile." },
    { t: "Wholesalers", d: "Volume freight contracts and inventory financing facilitation." },
    { t: "SMEs", d: "Concierge-style logistics with enterprise pricing and visibility." },
    { t: "Enterprise", d: "Dedicated trade desks and integrated control towers." },
  ];
  return (
    <section className="section-y relative border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-3xl">
            <div className="eyebrow">Segments</div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Programs shaped to your trade role.</h2>
          </div>
          <Link to="/solutions" className="text-sm text-foreground/80 hover:text-[var(--gold)] inline-flex items-center gap-1 hover:gap-2 transition-all">
            See solutions <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 lg:mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {modes.map((m, i) => (
            <div key={m.t} className="surface-panel rounded-2xl p-7 sm:p-8 relative overflow-hidden group">
              <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-[var(--royal)]/15 blur-2xl group-hover:bg-[var(--royal)]/25 transition-colors" />
              <div className="text-xs text-muted-foreground tabular-nums">0{i + 1}</div>
              <h3 className="mt-3 text-xl font-semibold">{m.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{m.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="section-y relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0">
        <img src={port} alt="" loading="lazy" className="w-full h-full object-cover opacity-25" width={1600} height={1000} />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/85 to-background" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="eyebrow">Evidence of execution</div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Controls and specialists, <span className="text-gradient-gold">in the same operating system.</span>
            </h2>
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-muted-foreground max-w-xl">
              Metrics below are representative of coordinated programs across our desks — final figures are confirmed in engagement letters and management reporting packs.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { v: "$2.4B", l: "Cargo value coordinated (cumulative)" },
              { v: "180+", l: "Trade corridors served" },
              { v: "99.4%", l: "On-time arrival (rolling)" },
              { v: "12 min", l: "Median first response" },
            ].map((s) => (
              <div key={s.l} className="surface-panel rounded-2xl p-6 sm:p-7 relative overflow-hidden">
                <div className="absolute top-0 left-0 h-px w-12 bg-[var(--gold)]/60" />
                <div className="text-4xl font-display font-bold text-foreground tabular-nums">{s.v}</div>
                <div className="mt-2 text-sm text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="section-y-tight relative border-t border-white/5">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl surface-panel p-10 sm:p-14 lg:p-16 text-center ring-1 ring-white/[0.06]">
          <div className="absolute inset-0 bg-[var(--gradient-aurora)] opacity-[0.08]" />
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-60 w-[80%] bg-[var(--royal)]/25 blur-[100px]" />
          <div className="relative">
            <Building2 className="h-8 w-8 text-[var(--gold)] mx-auto" />
            <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Engage a trade desk for your <span className="text-gradient-gold">next program.</span>
            </h2>
            <p className="mt-5 text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Share lane patterns, volumes, and compliance context. A program manager will return with a structured response — scope, assumptions, and next steps — within one business day where practicable.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-xl bg-gold-gradient text-[oklch(0.12_0.04_260)] px-6 py-3.5 font-semibold text-sm shadow-luxury glow-gold ring-1 ring-[oklch(0.88_0.12_88/0.35)] transition-all hover:brightness-[1.04] active:scale-[0.99]">
                Request Shipment Coordination <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/services" className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-6 py-3.5 font-semibold text-sm backdrop-blur-sm transition-all hover:border-white/25 hover:bg-white/[0.08] active:scale-[0.99]">
                Review service scope
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function OperationalGovernanceSection() {
  return (
    <section className="section-y border-t border-white/5 bg-[oklch(0.085_0.03_260)]/35">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl mb-10 lg:mb-14">
          <div className="eyebrow">Governance & assurance</div>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Structured for accountability, not optics
          </h2>
          <p className="mt-5 text-base sm:text-lg leading-relaxed text-muted-foreground">
            International forwarding involves distinct legal roles — carriers, licensed brokers, consignees. NDDXtra makes coordination, records, and escalation paths explicit so audits and handovers do not depend on informal knowledge.
          </p>
        </div>
        <OperationalCredibility />
      </div>
    </section>
  );
}

function VisibilityProgramSection() {
  return (
    <section className="section-y border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-12">
          <div className="lg:col-span-7">
            <div className="eyebrow">Control tower</div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Program-level shipment visibility
            </h2>
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-muted-foreground max-w-2xl">
              The workspace below reflects how operations teams review exceptions, ETAs, and owners — including the reference structure you would expect in a live coordination file.
            </p>
          </div>
          <p className="lg:col-span-5 text-sm leading-relaxed text-muted-foreground lg:text-right lg:pb-1">
            SLAs, paired with carrier milestone feeds and customs status pings, reduce reactive firefighting. Figures shown are illustrative.
          </p>
        </div>
        <div className="mt-12 lg:mt-16">
          <ShipmentVisibilityMockup />
        </div>
      </div>
    </section>
  );
}

function LogisticsWorkflowSection() {
  return (
    <section className="section-y border-t border-white/5 bg-[var(--navy-deep)]/25">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <LogisticsWorkflowVisual />
      </div>
    </section>
  );
}

function ClientTrustBlock() {
  return (
    <section className="section-y border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ClientTrustSection />
      </div>
    </section>
  );
}
