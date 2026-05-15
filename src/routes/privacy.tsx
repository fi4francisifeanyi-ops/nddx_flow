import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalDocShell } from "@/components/site/LegalDocShell";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy — NDDXtra" },
      { name: "description", content: "How NDDXtra collects, uses, and protects personal information when you use our website and services." },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <LegalDocShell
      label="Legal"
      title="Privacy policy"
      intro="This policy describes how NDDX Limited (trading as NDDXtra) handles information when you visit our site or engage our logistics and trade facilitation services. It is designed to be clear and practical — if anything is unclear, contact us."
    >
      <div className="space-y-4">
        <h2>Who we are</h2>
        <p>
          NDDXtra is operated by NDDX Limited. For privacy-related requests, email{" "}
          <a href="mailto:info@nddxtra.com">info@nddxtra.com</a> with “Privacy” in the subject line, or use our{" "}
          <Link to="/contact" className="text-[var(--gold)]">
            contact form
          </Link>
          .
        </p>
      </div>
      <div className="space-y-4">
        <h2>Information we may collect</h2>
        <ul>
          <li>Contact and account details you provide (name, company, email, phone).</li>
          <li>Shipment and trade-flow details needed to scope, quote, or execute services.</li>
          <li>Technical data from your visit (IP address, browser type, device, approximate region) for security and analytics.</li>
          <li>Communications you send us, including attachments relevant to customs or logistics.</li>
        </ul>
      </div>
      <div className="space-y-4">
        <h2>How we use information</h2>
        <ul>
          <li>To respond to inquiries, prepare quotes, and deliver coordinated logistics services.</li>
          <li>To operate, secure, and improve our website and internal processes.</li>
          <li>To meet legal, regulatory, and compliance obligations related to international trade.</li>
          <li>With your consent, to send operational updates or relevant service information.</li>
        </ul>
      </div>
      <div className="space-y-4">
        <h2>Cookies and similar technologies</h2>
        <p>
          We may use cookies or local storage for essential site functionality, preferences, and aggregated analytics. You can control cookies through your browser settings; disabling some cookies may affect how the site behaves.
        </p>
      </div>
      <div className="space-y-4">
        <h2>Retention and security</h2>
        <p>
          We retain information only as long as needed for the purposes above, including statutory retention for trade and financial records. We apply administrative, technical, and organizational measures appropriate to the sensitivity of the data we handle.
        </p>
      </div>
      <div className="space-y-4">
        <h2>Sharing</h2>
        <p>
          We do not sell your personal information. We may share data with vetted carriers, customs brokers, technology providers, or authorities where necessary to move your cargo lawfully and safely, always subject to confidentiality and purpose limitation.
        </p>
      </div>
      <div className="space-y-4">
        <h2>Your choices</h2>
        <p>
          Depending on your location, you may have rights to access, correct, delete, or restrict certain processing of your personal data. Contact us to exercise those rights; we will respond within a reasonable timeframe.
        </p>
      </div>
      <div className="space-y-4">
        <h2>Updates</h2>
        <p>
          We may update this policy from time to time. The “Last updated” date at the bottom reflects the latest version. Continued use of the site after changes constitutes notice of the update where permitted by law.
        </p>
        <p className="text-xs text-muted-foreground/80 pt-4 border-t border-white/10">Last updated: May 14, 2026</p>
      </div>
    </LegalDocShell>
  );
}
