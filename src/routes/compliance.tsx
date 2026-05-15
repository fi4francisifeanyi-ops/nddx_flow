import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalDocShell } from "@/components/site/LegalDocShell";

export const Route = createFileRoute("/compliance")({
  head: () => ({
    meta: [
      { title: "Trade compliance — NDDXtra" },
      { name: "description", content: "NDDXtra commitment to lawful international trade, sanctions screening, and regulatory alignment for logistics coordination." },
    ],
  }),
  component: CompliancePage,
});

function CompliancePage() {
  return (
    <LegalDocShell
      label="Legal"
      title="Trade compliance"
      intro="Global trade runs on trust and adherence to the rules. This page summarizes how NDDXtra approaches compliance in coordination with carriers, customs authorities, and our clients."
    >
      <div className="space-y-4">
        <h2>Our commitment</h2>
        <p>
          NDDX Limited (NDDXtra) coordinates logistics and documentation in line with applicable export, import, customs, and sanctions regulations. We expect clients and partners to provide accurate information and lawful cargo.
        </p>
      </div>
      <div className="space-y-4">
        <h2>Sanctions and restricted parties</h2>
        <p>
          We do not facilitate shipments that violate United Nations, regional, or national sanctions programs. We may screen parties, destinations, and commodity classifications as part of onboarding and ongoing operations.
        </p>
      </div>
      <div className="space-y-4">
        <h2>Dual-use and controlled goods</h2>
        <p>
          Certain goods require licenses or end-user statements. Clients remain responsible for correct classification and licensing unless expressly contracted otherwise. We will escalate controlled or sensitive cargo to specialist compliance review.
        </p>
      </div>
      <div className="space-y-4">
        <h2>Anti-bribery and ethics</h2>
        <p>
          We prohibit bribery, facilitation payments where illegal, and collusion with corrupt practices. Employees and representatives are expected to follow internal ethics guidelines and escalate concerns through appropriate channels.
        </p>
      </div>
      <div className="space-y-4">
        <h2>Data and audit trails</h2>
        <p>
          We maintain documentation and communication records consistent with trade compliance and carrier requirements, with access controls appropriate to the sensitivity of the information.
        </p>
      </div>
      <div className="space-y-4">
        <h2>Reporting concerns</h2>
        <p>
          If you believe a shipment or request may implicate sanctions, export controls, or other regulatory risk, contact us immediately via{" "}
          <a href="mailto:info@nddxtra.com">info@nddxtra.com</a> or the{" "}
          <Link to="/contact" className="text-[var(--gold)]">
            trade desk
          </Link>
          .
        </p>
        <p className="text-xs text-muted-foreground/80 pt-4 border-t border-white/10">Last updated: May 14, 2026</p>
      </div>
    </LegalDocShell>
  );
}
