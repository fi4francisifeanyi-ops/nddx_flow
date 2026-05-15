import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/nddxtra-logo.jpeg";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/solutions", label: "Solutions" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-4">
        <div className="glass-strong rounded-2xl flex items-center justify-between px-4 sm:px-6 py-3">
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="relative h-10 w-10 rounded-lg overflow-hidden bg-white/5 ring-1 ring-white/10 glow-gold">
              <img src={logo} alt="NDDXtra logo" className="h-full w-full object-contain" />
              <span className="absolute -bottom-0.5 -right-0.5 h-2 w-2 rounded-full bg-[var(--emerald)] glow-emerald" />
            </div>
            <div className="leading-tight">
              <div className="font-display font-semibold tracking-tight text-base">nddx<span className="text-[var(--gold)]">.</span></div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">NDDX Limited</div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                activeOptions={{ exact: n.to === "/" }}
                activeProps={{ className: "text-foreground bg-white/5" }}
                className="text-sm text-muted-foreground hover:text-foreground px-3.5 py-2 rounded-lg transition-colors"
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/contact"
              className="text-sm font-semibold px-5 py-2.5 rounded-xl bg-gold-gradient text-[oklch(0.12_0.04_260)] shadow-luxury glow-gold ring-1 ring-[oklch(0.88_0.12_88/0.35)] transition-all hover:brightness-[1.04] active:scale-[0.99]"
            >
              Request coordination
            </Link>
          </div>

          <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden glass-strong rounded-2xl mt-2 p-4 flex flex-col gap-1">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="px-3 py-2.5 rounded-lg hover:bg-white/5 text-sm">
                {n.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="mt-2 text-sm font-semibold px-4 py-2.5 rounded-xl bg-gold-gradient text-[oklch(0.12_0.04_260)] text-center shadow-luxury glow-gold ring-1 ring-[oklch(0.88_0.12_88/0.35)] transition-all hover:brightness-[1.04]">
              Request coordination
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
