import type { Metadata } from "next";
import { privacyMetadata } from "@/lib/metadata";
import { StructuredData } from "@/components/seo/StructuredData";
import { getBreadcrumbSchema } from "@/lib/structured-data";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { COMPANY, formatLegalIdentifiers } from "@/lib/constants";

export const metadata: Metadata = privacyMetadata;

export default function PrivacyPolicyPage() {
  return (
    <>
      <StructuredData
        data={getBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy-policy/" },
        ])}
      />
      <LegalPageLayout
        title="Privacy Policy"
        description={`This Privacy Policy describes how ${COMPANY.name} ("we", "us", or "our") collects, uses, and protects information when you visit our website at www.savarun.in.`}
        lastUpdated="July 2, 2026"
        sections={[
          {
            title: "1. Introduction",
            content: `${COMPANY.name} is committed to protecting your privacy. This policy applies to our corporate website and general communications. Product-specific privacy practices for SAVARUN and LOCK & KEY SKIN CARE will be published separately before those products launch.`,
          },
          {
            title: "2. Information We Collect",
            content: [
              "Information you voluntarily provide when contacting us via email or our contact form (such as your name, email address, and message content).",
              "Technical information collected automatically when you visit our website, such as browser type, device type, IP address, and pages visited.",
              "Cookie and similar technology data, as described in our website configuration. We use minimal analytics only if explicitly enabled.",
            ],
          },
          {
            title: "3. How We Use Information",
            content: [
              "To respond to your enquiries and communications.",
              "To operate, maintain, and improve our website.",
              "To comply with applicable legal obligations.",
              "We do not sell your personal information.",
            ],
          },
          {
            title: "4. Legal Basis (India — DPDP Act, 2023)",
            content: `Where India's Digital Personal Data Protection Act, 2023 applies, we process personal data based on your consent, our legitimate interests in operating our business, or as required by law. Product-specific data processing for LOCK & KEY SKIN CARE — which may involve health-related information — will comply with applicable requirements and will be detailed in a dedicated privacy notice before launch.`,
          },
          {
            title: "5. Data Retention",
            content:
              "We retain personal information only for as long as necessary to fulfil the purposes described in this policy, unless a longer retention period is required by law.",
          },
          {
            title: "6. Data Security",
            content:
              "We implement appropriate technical and organisational measures to protect personal information. However, no method of transmission over the Internet is completely secure.",
          },
          {
            title: "7. Your Rights",
            content: [
              "You may request access to, correction of, or deletion of your personal information.",
              "You may withdraw consent where processing is consent-based.",
              "You may lodge a complaint with the relevant data protection authority in India.",
              `To exercise your rights, contact us at ${COMPANY.contactEmail}.`,
            ],
          },
          {
            title: "8. Third-Party Services",
            content:
              "Our website may use third-party services (such as hosting providers). These providers process data on our behalf and are bound by appropriate data protection obligations.",
          },
          {
            title: "9. Children's Privacy",
            content:
              "Our website is not directed at children under 18. We do not knowingly collect personal information from children.",
          },
          {
            title: "10. Changes to This Policy",
            content:
              "We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated date.",
          },
          {
            title: "11. Contact Us",
            content: `For privacy-related enquiries, contact ${COMPANY.name} at ${COMPANY.contactEmail} or write to ${COMPANY.registeredAddress}. ${formatLegalIdentifiers()}.`,
          },
        ]}
      />
    </>
  );
}
