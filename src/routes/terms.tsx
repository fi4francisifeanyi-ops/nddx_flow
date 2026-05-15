import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalDocShell } from "@/components/site/LegalDocShell";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of use — NDDXtra" },
      { name: "description", content: "Terms governing use of the NDDXtra website and general engagement with NDDX Limited trade facilitation services." },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <LegalDocShell
      label="Legal"
      title="Terms of use"
      intro="These terms govern your use of this website and set expectations when you engage NDDXtra. Formal service agreements, bills of lading, and carrier terms may apply additionally to executed shipments."
    >
      <div className="space-y-4">
        <h2>Agreement</h2>
        <p>
          By accessing nddxtra.com or related NDDXtra properties, you agree to these terms. If you do not agree, please discontinue use of the site.
        </p>
      </div>
      <div className="space-y-4">
        <h2>Not legal or customs advice</h2>
        <p>
          Content on this site is for general information. It does not constitute legal, tax, or customs advice. Always confirm classifications, duties, and regulatory requirements with qualified professionals and the relevant authorities.
        </p>
      </div>
      <div className="space-y-4">
        <h2>Services and quotes</h2>
        <p>
          Descriptions of services, lanes, and performance metrics illustrate our operating model and may include illustrative figures. Binding commercial terms are confirmed in executed orders, quotations, or master service agreements.
        </p>
      </div>
      <div className="space-y-4">
        <h2>Acceptable use</h2>
        <ul>
          <li>Do not attempt to disrupt, probe, or gain unauthorized access to our systems or data.</li>
          <li>Do not use the site to transmit unlawful, infringing, or harmful content.</li>
          <li>Do not misrepresent your identity or authority when contacting us.</li>
        </ul>
      </div>
      <div className="space-y-4">
        <h2>Intellectual property</h2>
        <p>
          NDDXtra branding, copy, layouts, and visuals are owned by NDDX Limited or its licensors. You may not copy, modify, or redistribute them without prior written permission except for personal, non-commercial reference or as allowed by law.
        </p>
      </div>
      <div className="space-y-4">
        <h2>Disclaimer</h2>
        <p>
          The site is provided “as is” to the fullest extent permitted by law. We do not warrant uninterrupted or error-free operation. Where liability cannot be excluded, it is limited to the maximum extent permitted by applicable law.
        </p>
      </div>
      <div className="space-y-4">
        <h2>Governing law</h2>
        <p>
          These terms are governed by the laws applicable to NDDX Limited’s place of incorporation, without regard to conflict-of-law rules, unless mandatory consumer protections in your jurisdiction provide otherwise.
        </p>
      </div>
      <div className="space-y-4">
        <h2>Contact</h2>
        <p>
          Questions about these terms:{" "}
          <a href="mailto:info@nddxtra.com">info@nddxtra.com</a> or{" "}
          <Link to="/contact" className="text-[var(--gold)]">
            contact
          </Link>
          .
        </p>
        <p className="text-xs text-muted-foreground/80 pt-4 border-t border-white/10">Last updated: May 14, 2026</p>
      </div>
    </LegalDocShell>
  );
}
