import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PremiumCtaSection } from "@/components/site/PremiumCtaSection";
import { Ship, Plane, Truck, FileCheck2, Boxes, BarChart3, Check } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — NDDXtra Logistics & Trade Facilitation" },
      { name: "description", content: "Ocean, air, inland freight, customs clearance, warehousing and trade intelligence — coordinated end-to-end by NDDXtra." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { id: "ocean-freight", icon: Ship, title: "Ocean freight", points: ["FCL & LCL bookings", "Project & breakbulk cargo", "Reefer & hazardous handling", "42 carrier partners"] },
  { id: "air-freight", icon: Plane, title: "Air freight", points: ["General & express cargo", "Charter coordination", "Time-critical handling", "AOG & perishables"] },
  { id: "inland-last-mile", icon: Truck, title: "Inland & last-mile", points: ["Bonded trucking", "Cross-border haulage", "Distribution & fulfillment", "Reverse logistics"] },
  { id: "customs-compliance", icon: FileCheck2, title: "Customs & compliance", points: ["Clearance & filings", "HS classification", "Duty & tax optimization", "AEO programs"] },
  { id: "warehousing-3pl", icon: Boxes, title: "Warehousing & 3PL", points: ["Bonded & FTZ storage", "Pick, pack & ship", "Inventory management", "SME fulfillment"] },
  { id: "trade-intelligence", icon: BarChart3, title: "Trade intelligence", points: ["Landed cost analytics", "Lane benchmarking", "Supplier visibility", "Market entry advisory"] },
] as const;

function ServicesPage() {
  return (
    <SiteLayout>
      <section className="relative bg-hero pb-20 pt-12 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">Services</div>
            <h1 className="mt-4 text-5xl sm:text-6xl font-bold tracking-tight">
              A complete <span className="text-gradient-gold">trade operating system.</span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">
              Six service pillars, one accountable team. Whether you're shipping a single pallet or running a multi-country supply chain, NDDXtra coordinates the entire journey.
            </p>
          </div>
        </div>
      </section>

      <PremiumCtaSection
        density="compact"
        footnote={null}
        eyebrow="Service architecture"
        title="Request shipment coordination across every pillar"
        subtitle="Ocean, air, inland, customs, warehousing, and intelligence — one program manager, one governed file."
        primary={{ label: "Request Shipment Coordination", to: "/contact" }}
        secondary={{ label: "Explore solutions by role", to: "/solutions" }}
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <div key={s.title} id={s.id} className="glass rounded-2xl p-7 hover:border-[var(--gold)]/30 transition-colors scroll-mt-32">
              <div className="h-12 w-12 rounded-xl bg-gold-gradient grid place-items-center">
                <s.icon className="h-5 w-5 text-[oklch(0.12_0.04_260)]" />
              </div>
              <h3 className="mt-5 text-xl font-semibold">{s.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {s.points.map((p) => (
                  <li key={p} className="flex gap-2.5 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-[var(--emerald)] shrink-0 mt-0.5" /> {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <PremiumCtaSection
        variant="centered"
        eyebrow="Tailored programs"
        title="Need a bespoke mix of modes, hubs, and compliance depth?"
        subtitle="We architect service bundles against your landed-cost targets, regulatory exposure, and carrier performance requirements — then run them as a single accountable program."
        primary={{ label: "Start Your Shipment Process", to: "/contact" }}
        secondary={{ label: "Importer & exporter programs", to: "/solutions" }}
      />
    </SiteLayout>
  );
}
