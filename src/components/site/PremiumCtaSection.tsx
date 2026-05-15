import { Link } from "@tanstack/react-router";
import { ArrowRight, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

type RouteTarget = "/" | "/contact" | "/services" | "/solutions" | "/about" | "/privacy" | "/terms" | "/compliance";

export type PremiumCtaLink = {
  label: string;
  to: RouteTarget | (string & {});
};

export type PremiumCtaSectionProps = {
  className?: string;
  innerClassName?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  primary: PremiumCtaLink;
  secondary?: PremiumCtaLink;
  /** split = copy left / actions right on large screens; centered = stacked, text centered */
  variant?: "split" | "centered";
  /** tighter vertical padding for mid-page strips */
  density?: "default" | "compact";
  /** Response SLA note; set to null to hide */
  footnote?: string | null;
};

function isExternalHref(to: string) {
  return to.startsWith("tel:") || to.startsWith("mailto:") || to.startsWith("http");
}

function PremiumButton({
  to,
  children,
  variant,
}: {
  to: string;
  children: React.ReactNode;
  variant: "primary" | "secondary";
}) {
  const base =
    "inline-flex min-h-[48px] items-center justify-center gap-2.5 rounded-xl px-7 sm:px-8 text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-background";
  const primary =
    "bg-gold-gradient text-[oklch(0.12_0.04_260)] shadow-luxury glow-gold ring-1 ring-[oklch(0.88_0.12_88/0.35)] hover:brightness-[1.04] active:scale-[0.99]";
  const secondary =
    "border border-white/15 bg-white/[0.04] text-foreground backdrop-blur-sm hover:border-white/25 hover:bg-white/[0.08] active:scale-[0.99]";

  const cls = cn(base, variant === "primary" ? primary : secondary);

  if (isExternalHref(to)) {
    return (
      <a href={to} className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link to={to as RouteTarget} className={cls}>
      {children}
    </Link>
  );
}

export function PremiumCtaSection({
  className,
  innerClassName,
  eyebrow,
  title,
  subtitle,
  primary,
  secondary,
  variant = "split",
  density = "default",
  footnote,
}: PremiumCtaSectionProps) {
  const yPad = density === "compact" ? "py-12 md:py-14" : "py-14 md:py-20 lg:py-24";

  const footText =
    footnote === null
      ? null
      : footnote ??
        "Business hours response targets apply. For urgent filings, note priority in your message — a program manager will acknowledge within the SLA window for your program tier.";

  return (
    <section className={cn("relative border-t border-white/5", yPad, className)}>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,oklch(0.5_0.2_264/0.12),transparent_55%)]" aria-hidden />
      <div className={cn("relative mx-auto max-w-7xl px-6 lg:px-8", innerClassName)}>
        <div
          className={cn(
            "surface-panel relative overflow-hidden rounded-2xl p-8 ring-1 ring-white/[0.06] sm:p-10 lg:p-12",
            variant === "split" && "lg:grid lg:grid-cols-12 lg:items-center lg:gap-10",
            variant === "centered" && "mx-auto max-w-4xl text-center",
          )}
        >
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/45 to-transparent" aria-hidden />

          <div className={cn(variant === "split" ? "lg:col-span-7" : "")}>
            {eyebrow ? <div className="eyebrow">{eyebrow}</div> : null}
            <h2
              className={cn(
                "mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-[2rem] lg:leading-snug",
                variant === "centered" && "mx-auto max-w-2xl",
              )}
            >
              {title}
            </h2>
            {subtitle ? (
              <p className={cn("mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base", variant === "centered" && "mx-auto max-w-2xl")}>{subtitle}</p>
            ) : null}
          </div>

          <div
            className={cn(
              "mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center",
              variant === "split" && "lg:col-span-5 lg:mt-0 lg:flex-col lg:items-stretch xl:flex-row xl:items-center xl:justify-end",
              variant === "centered" && "mt-8 justify-center sm:justify-center",
            )}
          >
            <PremiumButton to={primary.to} variant="primary">
              {primary.label}
              <ArrowRight className="h-4 w-4 shrink-0 opacity-90" aria-hidden />
            </PremiumButton>
            {secondary ? (
              <PremiumButton to={secondary.to} variant="secondary">
                {secondary.label}
              </PremiumButton>
            ) : null}
          </div>

          {footText ? (
            <p
              className={cn(
                "mt-6 border-t border-white/5 pt-6 text-[11px] leading-relaxed text-muted-foreground/85 sm:text-xs lg:mt-8",
                variant === "split" && "lg:col-span-12",
                variant === "centered" && "mx-auto max-w-2xl text-center",
              )}
            >
              {footText}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}

/** Compact horizontal strip — e.g. contact page trade desk */
export function PremiumCtaStrip({
  title,
  primary,
  phone,
  phoneDisplay,
}: {
  title: string;
  primary: PremiumCtaLink;
  phone: string;
  phoneDisplay: string;
}) {
  return (
    <div className="surface-panel flex flex-col gap-4 rounded-xl border border-white/10 p-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:p-6">
      <div>
        <p className="text-sm font-semibold text-foreground">{title}</p>
        <a href={`tel:${phone}`} className="mt-1 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-[var(--gold)]">
          <Phone className="h-4 w-4 text-[var(--emerald)]" aria-hidden />
          {phoneDisplay}
        </a>
      </div>
      <PremiumButton to={primary.to} variant="primary">
        {primary.label}
        <ArrowRight className="h-4 w-4" aria-hidden />
      </PremiumButton>
    </div>
  );
}
