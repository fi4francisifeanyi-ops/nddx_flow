import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PremiumCtaStrip } from "@/components/site/PremiumCtaSection";
import { useState } from "react";
import { Mail, Phone, MapPin, ArrowRight, Check } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact NDDXtra — Talk to a trade specialist" },
      { name: "description", content: "Get in touch with NDDXtra to coordinate your next shipment, request a quote, or design a tailored trade facilitation program." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    lane: "",
    message: "",
  });

  function update<K extends keyof typeof form>(key: K, value: (typeof form)[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  function resetForm() {
    setForm({ name: "", email: "", company: "", phone: "", lane: "", message: "" });
    setSent(false);
  }
  return (
    <SiteLayout>
      <section className="relative bg-hero pb-16 pt-12 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">Contact</div>
          <h1 className="mt-4 text-5xl sm:text-6xl font-bold tracking-tight max-w-3xl">
            Let's coordinate your next <span className="text-gradient-gold">global movement.</span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl">
            Tell us about your trade flow. A NDDXtra specialist will respond within 12 hours with a tailored blueprint.
          </p>
          <div className="mt-10 max-w-2xl">
            <PremiumCtaStrip
              title="Prefer voice for time-sensitive lanes?"
              phone="+2347035603261"
              phoneDisplay="+234 703 560 3261"
              primary={{ label: "Email the trade desk", to: "mailto:info@nddxtra.com" }}
            />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 glass-strong rounded-3xl p-8 lg:p-10">
            {sent ? (
              <div className="py-16 text-center">
                <div className="h-14 w-14 mx-auto rounded-full bg-[var(--emerald)]/15 grid place-items-center">
                  <Check className="h-6 w-6 text-[var(--emerald)]" />
                </div>
                <h3 className="mt-5 text-2xl font-semibold">Message received.</h3>
                <p className="mt-2 text-muted-foreground">A specialist will be in touch within 12 hours.</p>
                <button
                  type="button"
                  onClick={resetForm}
                  className="mt-8 inline-flex items-center gap-2 rounded-xl glass px-5 py-2.5 text-sm font-semibold hover:bg-white/10 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-5">
                <Field label="Full name" name="name" value={form.name} onChange={(v) => update("name", v)} required />
                <Field label="Work email" name="email" type="email" value={form.email} onChange={(v) => update("email", v)} required />
                <Field label="Company" name="company" value={form.company} onChange={(v) => update("company", v)} />
                <Field label="Phone" name="phone" value={form.phone} onChange={(v) => update("phone", v)} />
                <div className="sm:col-span-2">
                  <Field label="Origin → Destination" name="lane" placeholder="e.g. Lagos → Rotterdam" value={form.lane} onChange={(v) => update("lane", v)} />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">How can we help?</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                    className="w-full rounded-xl glass px-4 py-3 text-sm focus:outline-none focus:border-[var(--gold)]/40"
                    placeholder="Tell us about your trade flow, volumes, and timeline."
                  />
                </div>
                <div className="sm:col-span-2 flex justify-end">
                  <button className="inline-flex items-center gap-2 rounded-xl bg-gold-gradient text-[oklch(0.12_0.04_260)] px-6 py-3.5 font-semibold text-sm glow-gold hover:scale-[1.02] transition-transform">
                    Send message <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </form>
            )}
          </div>

          <div className="space-y-4">
            {[
              { icon: Mail, t: "Email", d: "info@nddxtra.com", s: "fi4frankyifeanyi@gmail.com" },
              { icon: Phone, t: "Trade desk", d: "+234 703 560 3261", s: "Ugwu Francis Ifeanyi · Owner / Director" },
              { icon: MapPin, t: "Hubs", d: "Lagos · Dubai · Rotterdam", s: "Singapore · Houston" },
            ].map((c) => (
              <div key={c.t} className="glass rounded-2xl p-6">
                <div className="h-10 w-10 rounded-lg bg-gold-gradient grid place-items-center">
                  <c.icon className="h-4 w-4 text-[oklch(0.12_0.04_260)]" />
                </div>
                <div className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">{c.t}</div>
                <div className="mt-1 font-semibold">{c.d}</div>
                <div className="text-sm text-muted-foreground mt-1">{c.s}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
  value,
  onChange,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl glass px-4 py-3 text-sm focus:outline-none focus:border-[var(--gold)]/40"
      />
    </div>
  );
}
