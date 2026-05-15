import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PremiumCtaSection } from "@/components/site/PremiumCtaSection";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Solutions — NDDXtra by industry & business size" },
      { name: "description", content: "Tailored logistics and trade facilitation solutions for importers, exporters, distributors, wholesalers, SMEs, and enterprise supply chains." },
    ],
  }),
  component: SolutionsPage,
});

const solutions = [
  { name: "Importers", tag: "Inbound mastery", desc: "Coordinate suppliers, optimize duties, and clear customs without surprises. Predictable landed cost, every shipment.", outcomes: ["Faster clearance", "Lower duty exposure", "Supplier visibility"] },
  { name: "Exporters", tag: "Outbound at scale", desc: "Documentation, certifications, and lane management built for high-volume international sellers.", outcomes: ["Compliant documentation", "Carrier-rate leverage", "Market entry support"] },
  { name: "Distributors", tag: "Network reliability", desc: "Multi-warehouse fulfillment with SLA-backed inland and last-mile performance.", outcomes: ["SLA performance", "Multi-hub fulfillment", "Returns handling"] },
  { name: "Wholesalers", tag: "Volume economics", desc: "Volume freight contracts, bonded warehousing, and trade financing facilitation.", outcomes: ["Contracted rates", "Bonded storage", "Financing introductions"] },
  { name: "SMEs", tag: "Enterprise-grade access", desc: "Concierge-style logistics with enterprise pricing — without enterprise overhead.", outcomes: ["No-min-volume pricing", "Dedicated specialist", "Plug-and-play platform"] },
  { name: "Enterprise", tag: "Control tower", desc: "Dedicated trade desks, integrated visibility, and bespoke operating models.", outcomes: ["Dedicated trade desk", "Integrated visibility", "Bespoke SLAs"] },
];

function SolutionsPage() {
  return (
    <SiteLayout>
      <section className="relative bg-hero pb-16 pt-12 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">Solutions</div>
          <h1 className="mt-4 text-5xl sm:text-6xl font-bold tracking-tight max-w-4xl">
            Built for every kind of <span className="text-gradient-gold">global mover.</span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl">
            From a first-time SME shipper to a multinational supply chain, NDDXtra adapts its operating model to fit your trade flows.
          </p>
        </div>
      </section>

      <PremiumCtaSection
        density="compact"
        footnote={null}
        eyebrow="Importers"
        title="Coordinate your imports efficiently"
        subtitle="Duty exposure, supplier documentation, and port-side execution — aligned to one milestone plan and one accountable desk."
        primary={{ label: "Request Shipment Coordination", to: "/contact" }}
        secondary={{ label: "Review services", to: "/services" }}
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-5">
          {solutions.map((s, i) => (
            <div key={s.name} className="glass rounded-2xl p-8 grid md:grid-cols-12 gap-6 items-center hover:border-[var(--gold)]/30 transition-colors">
              <div className="md:col-span-1">
                <div className="text-3xl font-display font-bold text-gradient-gold">0{i + 1}</div>
              </div>
              <div className="md:col-span-4">
                <div className="text-xs uppercase tracking-[0.2em] text-[var(--emerald)]">{s.tag}</div>
                <h3 className="mt-2 text-2xl font-semibold">{s.name}</h3>
              </div>
              <p className="md:col-span-4 text-muted-foreground">{s.desc}</p>
              <ul className="md:col-span-3 space-y-1.5 text-sm text-muted-foreground">
                {s.outcomes.map((o) => (
                  <li key={o} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold)]" /> {o}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <PremiumCtaSection
        variant="centered"
        eyebrow="Custom programs"
        title="If your flow does not fit a standard segment, we still structure it"
        subtitle="Complex origins, bonded corridors, or multi-supplier consolidation — scoped in writing before execution."
        primary={{ label: "Speak With NDDXtra", to: "/contact" }}
        secondary={{ label: "Service pillars", to: "/services" }}
      />
    </SiteLayout>
  );
}
