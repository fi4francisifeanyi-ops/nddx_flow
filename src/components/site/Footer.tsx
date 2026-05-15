import { Link } from "@tanstack/react-router";
import {
  Linkedin,
  Mail,
  MapPin,
  Phone,
  CreditCard,
  Landmark,
  FileText,
  ArrowUpRight,
} from "lucide-react";
import logo from "@/assets/nddxtra-logo.jpeg";

/** LinkedIn — set `VITE_LINKEDIN_URL` in `.env` to match your business card; falls back to company-style URL */
const LINKEDIN_URL =
  (typeof import.meta !== "undefined" && import.meta.env?.VITE_LINKEDIN_URL) ||
  "https://www.linkedin.com/company/nddxtra";

const WHATSAPP_E164 = "35796067916";
const WHATSAPP_DISPLAY = "+357 96 067 916";
const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_E164}`;

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/solutions", label: "Solutions" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

const tradeRegions = [
  {
    region: "West Africa",
    hubs: "Lagos · Apapa · Tin Can · Onne",
  },
  {
    region: "Middle East & Indian Ocean",
    hubs: "Dubai · Jebel Ali Free Zone",
  },
  {
    region: "Europe",
    hubs: "Rotterdam · Antwerp · Hamburg",
  },
  {
    region: "Asia-Pacific",
    hubs: "Singapore · Hong Kong",
  },
  {
    region: "Americas",
    hubs: "Houston · New York",
  },
] as const;

const paymentMethods = [
  { label: "Wire / SWIFT", icon: Landmark },
  { label: "SEPA (EUR)", icon: Landmark },
  { label: "Letter of credit", icon: FileText },
  { label: "Documentary collection", icon: FileText },
  { label: "Visa Business", icon: CreditCard },
  { label: "Mastercard Corporate", icon: CreditCard },
] as const;

function SocialWhatsApp() {
  return (
    <a
      href={WHATSAPP_HREF}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 transition-colors hover:border-[var(--emerald)]/40 hover:bg-[var(--emerald)]/[0.06]"
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--emerald)]/15 ring-1 ring-[var(--emerald)]/25">
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-[var(--emerald)]" fill="currentColor" aria-hidden>
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </span>
      <span className="min-w-0 text-left">
        <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">WhatsApp</span>
        <span className="block truncate text-sm font-medium text-foreground group-hover:text-[var(--emerald)]">{WHATSAPP_DISPLAY}</span>
      </span>
      <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" aria-hidden />
    </a>
  );
}

function SocialLinkedIn() {
  return (
    <a
      href={LINKEDIN_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 transition-colors hover:border-[var(--royal)]/45 hover:bg-[var(--royal)]/[0.08]"
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--royal)]/20 ring-1 ring-[var(--royal)]/30">
        <Linkedin className="h-5 w-5 text-foreground" aria-hidden />
      </span>
      <span className="min-w-0 text-left">
        <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">LinkedIn</span>
        <span className="block truncate text-sm font-medium text-foreground group-hover:text-[var(--gold)]">NDDXtra</span>
      </span>
      <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" aria-hidden />
    </a>
  );
}

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/[0.07] bg-[oklch(0.055_0.035_260)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,oklch(0.45_0.18_264/0.14),transparent_55%)]" aria-hidden />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/50 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-16 pb-10 lg:pt-20 lg:pb-12">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10 xl:gap-14">
          {/* Brand */}
          <div className="lg:col-span-4 xl:col-span-4">
            <Link to="/" className="inline-flex items-center gap-3.5 group">
              <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl bg-white/[0.06] ring-1 ring-white/10 shadow-[0_0_0_1px_oklch(1_0_0/0.04)]">
                <img src={logo} alt="NDDXtra" className="h-full w-full object-contain p-0.5" width={48} height={48} />
                <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-[oklch(0.055_0.035_260)] bg-[var(--emerald)]" />
              </div>
              <div>
                <span className="font-display text-xl font-semibold tracking-tight text-foreground">
                  NDDX<span className="text-[var(--gold)]">tra</span>
                </span>
                <span className="mt-0.5 block text-[10px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
                  NDDX Limited
                </span>
              </div>
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
              International freight coordination, customs-aligned documentation, and program-level visibility — operated as a trade desk, not a template marketplace.
            </p>
            <p className="mt-4 text-xs italic text-[var(--gold)]/75">“Doing ordinary things xtraordinarily”</p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[11px] text-muted-foreground">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--emerald)] opacity-60 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--emerald)]" />
              </span>
              Trade desks live · multi-region coverage
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-2">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--gold)]/90">Quick links</h3>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  to="/contact"
                  className="text-sm font-semibold text-[var(--gold)] hover:underline underline-offset-4"
                >
                  Request coordination →
                </Link>
              </li>
            </ul>
          </div>

          {/* Trade regions */}
          <div className="lg:col-span-3">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--gold)]/90">Trade regions</h3>
            <ul className="mt-5 space-y-4">
              {tradeRegions.map((r) => (
                <li key={r.region} className="border-l-2 border-white/10 pl-3">
                  <div className="text-sm font-medium text-foreground">{r.region}</div>
                  <div className="mt-1 flex items-start gap-1.5 text-xs leading-relaxed text-muted-foreground">
                    <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--gold)]/70" aria-hidden />
                    {r.hubs}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect + payments */}
          <div className="lg:col-span-3 xl:col-span-3 space-y-8">
            <div>
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--gold)]/90">Connect</h3>
              <div className="mt-5 space-y-3">
                <SocialWhatsApp />
                <SocialLinkedIn />
                <a
                  href="mailto:info@nddxtra.com"
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-2.5 text-sm text-muted-foreground transition-colors hover:border-white/20 hover:text-foreground"
                >
                  <Mail className="h-4 w-4 text-[var(--gold)] shrink-0" aria-hidden />
                  info@nddxtra.com
                </a>
                <a
                  href="tel:+2347035603261"
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-2.5 text-sm text-muted-foreground transition-colors hover:border-white/20 hover:text-foreground"
                >
                  <Phone className="h-4 w-4 text-[var(--royal)] shrink-0" aria-hidden />
                  Trade desk +234 703 560 3261
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--gold)]/90">Payment methods</h3>
              <p className="mt-2 text-[11px] leading-relaxed text-muted-foreground/90">
                Settlement options for contracted programs. Available instruments depend on jurisdiction and credit approval.
              </p>
              <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {paymentMethods.map(({ label, icon: Icon }) => (
                  <li
                    key={label}
                    className="flex items-center gap-2.5 rounded-lg border border-white/[0.06] bg-white/[0.02] px-3 py-2 text-[11px] font-medium text-foreground/90"
                  >
                    <Icon className="h-3.5 w-3.5 shrink-0 text-muted-foreground" aria-hidden />
                    {label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Legal bar */}
        <div className="mt-14 flex flex-col gap-6 border-t border-white/[0.07] pt-8 lg:flex-row lg:items-center lg:justify-between">
          <p className="text-[11px] leading-relaxed text-muted-foreground sm:text-xs max-w-3xl">
            © {new Date().getFullYear()} NDDX Limited (trading as NDDXtra). All rights reserved. Carriers and licensed brokers remain the performing parties unless otherwise agreed in writing.
          </p>
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] font-medium uppercase tracking-[0.12em] text-muted-foreground sm:text-xs">
            <Link to="/privacy" className="hover:text-[var(--gold)] transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-[var(--gold)] transition-colors">
              Terms
            </Link>
            <Link to="/compliance" className="hover:text-[var(--gold)] transition-colors">
              Compliance
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
