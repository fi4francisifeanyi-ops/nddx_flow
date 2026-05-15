import { SiteLayout } from "./Layout";

type Props = {
  label: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
};

export function LegalDocShell({ label, title, intro, children }: Props) {
  return (
    <SiteLayout>
      <section className="relative bg-hero pb-14 pt-12 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">{label}</div>
          <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight max-w-3xl">{title}</h1>
          {intro ? <p className="mt-4 text-muted-foreground max-w-2xl leading-relaxed">{intro}</p> : null}
        </div>
      </section>
      <section className="py-16 pb-28">
        <article className="mx-auto max-w-3xl px-6 lg:px-8 space-y-8 text-sm text-muted-foreground leading-relaxed [&_h2]:text-foreground [&_h2]:font-semibold [&_h2]:text-base [&_h2]:mt-2 [&_h2]:mb-0 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_a]:text-[var(--gold)] [&_a]:underline-offset-4 hover:[&_a]:underline">
          {children}
        </article>
      </section>
    </SiteLayout>
  );
}
