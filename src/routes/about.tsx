import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PremiumCtaSection } from "@/components/site/PremiumCtaSection";
import port from "@/assets/port.jpg";
import { Target, Compass, ShieldCheck, Globe2 } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About NDDXtra — Premium logistics, engineered for trust" },
      { name: "description", content: "NDDXtra is a global logistics coordination and trade facilitation company. Learn our mission, values, and the team behind the platform." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <section className="relative bg-hero pb-16 pt-12 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">About NDDXtra</div>
            <h1 className="mt-4 text-5xl sm:text-6xl font-bold tracking-tight">
              Trade, <span className="text-gradient-gold">re-engineered</span> for the modern world.
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">
              NDDXtra was founded on a simple belief: global trade should feel as effortless as sending a message. We combine deep logistics expertise with modern technology to make moving goods across borders clear, compliant, and visible.
            </p>
          </div>
          <div className="relative rounded-3xl overflow-hidden ring-glow shadow-luxury">
            <img src={port} alt="Global port operations" loading="lazy" width={1600} height={1000} className="w-full h-auto" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 grid md:grid-cols-2 gap-5">
          {[
            { icon: Target, t: "Our mission", d: "To remove friction from global trade for businesses of every size — from the SME shipping their first container to the multinational orchestrating thousands of lanes." },
            { icon: Compass, t: "Our approach", d: "Operations specialists, regulatory experts, and technologists working as one team — coordinated by software, accountable to outcomes." },
            { icon: ShieldCheck, t: "Our values", d: "Clarity over jargon. Compliance over shortcuts. Visibility over assumptions. We hold ourselves to the standard our clients trust us with." },
            { icon: Globe2, t: "Our reach", d: "Operating across 180+ countries with regional trade desks in Lagos, Dubai, Rotterdam, Singapore, and Houston." },
          ].map((b) => (
            <div key={b.t} className="glass rounded-2xl p-7">
              <div className="h-11 w-11 rounded-xl bg-[var(--royal)]/20 grid place-items-center">
                <b.icon className="h-5 w-5 text-[var(--gold)]" />
              </div>
              <h3 className="mt-5 text-xl font-semibold">{b.t}</h3>
              <p className="mt-2 text-muted-foreground">{b.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Regional trade desks</div>
            <h2 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight">
              Local expertise, <span className="text-gradient-gold">global coverage.</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Each desk pairs regulatory depth with carrier relationships so your cargo clears faster and moves with fewer surprises.
            </p>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { city: "Lagos", role: "West Africa hub", detail: "Ocean & air gateways, customs programs, and inland distribution across ECOWAS corridors." },
              { city: "Dubai", role: "Middle East & re-export", detail: "Free-zone logistics, transhipment, and time-critical air links to Europe, Africa, and Asia." },
              { city: "Rotterdam", role: "European gateway", detail: "Deep-sea FCL/LCL, bonded warehousing, and rail-feeder access across the continent." },
              { city: "Singapore", role: "Asia-Pacific control", detail: "Hub consolidation, supplier coordination, and intra-Asia express lanes." },
              { city: "Houston", role: "Americas energy & industry", detail: "Project cargo, breakbulk, and compliance-heavy industrial movements." },
              { city: "New York", role: "North Atlantic trade", detail: "Air priority, express documentation, and financial-center time zones." },
            ].map((h) => (
              <div key={h.city} className="glass rounded-2xl p-7 hover:border-[var(--gold)]/25 transition-colors">
                <div className="text-xs uppercase tracking-[0.2em] text-[var(--emerald)]">{h.role}</div>
                <h3 className="mt-2 text-xl font-semibold">{h.city}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{h.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PremiumCtaSection
        density="compact"
        footnote={null}
        eyebrow="Engagement"
        title="Start your shipment process with desks you can name"
        subtitle="Regional trade coverage with documentation discipline — brief us once, run recurring programs with the same governance model."
        primary={{ label: "Speak With NDDXtra", to: "/contact" }}
        secondary={{ label: "Review capabilities", to: "/services" }}
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-5">
            {[
              { v: "2018", l: "Founded" },
              { v: "180+", l: "Countries served" },
              { v: "$2.4B", l: "Cargo coordinated" },
              { v: "240", l: "Trade specialists" },
            ].map((s) => (
              <div key={s.l} className="glass-strong rounded-2xl p-7 text-center">
                <div className="text-4xl font-display font-bold text-gradient-gold tabular-nums">{s.v}</div>
                <div className="mt-2 text-sm text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
