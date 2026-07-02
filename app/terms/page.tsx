import type { Metadata } from "next";
import { termsMetadata } from "@/lib/metadata";
import { StructuredData } from "@/components/seo/StructuredData";
import { getBreadcrumbSchema } from "@/lib/structured-data";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { COMPANY, formatLegalIdentifiers } from "@/lib/constants";

export const metadata: Metadata = termsMetadata;

export default function TermsPage() {
  return (
    <>
      <StructuredData
        data={getBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Terms & Conditions", path: "/terms/" },
        ])}
      />
      <LegalPageLayout
        title="Terms & Conditions"
        description={`These Terms & Conditions govern your use of the website operated by ${COMPANY.name} at www.savarun.in.`}
        lastUpdated="July 2, 2026"
        sections={[
          {
            title: "1. Acceptance of Terms",
            content: `By accessing or using this website, you agree to be bound by these Terms & Conditions. If you do not agree, please do not use this website. These terms apply to the corporate website of ${COMPANY.name} only. Separate terms will apply to SAVARUN and LOCK & KEY SKIN CARE when those products launch.`,
          },
          {
            title: "2. About Us",
            content: `This website is operated by ${COMPANY.name}, a company registered in India (${formatLegalIdentifiers()}), with registered address at ${COMPANY.registeredAddress}. SAVARUN and LOCK & KEY SKIN CARE are product brands of ${COMPANY.name}.`,
          },
          {
            title: "3. Permitted Use",
            content: [
              "You may use this website for lawful, personal, and informational purposes.",
              "You may not use this website in any way that violates applicable laws or regulations.",
              "You may not attempt to gain unauthorised access to our systems or networks.",
              "You may not scrape, copy, or reproduce website content for commercial purposes without our written consent.",
            ],
          },
          {
            title: "4. Intellectual Property",
            content: `All content on this website — including text, graphics, logos, and design — is the property of ${COMPANY.name} or its licensors and is protected by applicable intellectual property laws. The names SAVARUN and LOCK & KEY SKIN CARE are product brands of ${COMPANY.name}.`,
          },
          {
            title: "5. Product Information",
            content:
              "Information about SAVARUN and LOCK & KEY SKIN CARE on this website describes products in development. Neither product is currently available to the public. We do not guarantee launch dates, features, or availability.",
          },
          {
            title: "6. Disclaimer of Warranties",
            content:
              'This website and its content are provided "as is" without warranties of any kind, either express or implied. We do not warrant that the website will be uninterrupted or error-free.',
          },
          {
            title: "7. Limitation of Liability",
            content: `To the fullest extent permitted by applicable law, ${COMPANY.name} shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of this website.`,
          },
          {
            title: "8. External Links",
            content:
              "This website may contain links to third-party websites. We are not responsible for the content or practices of those websites.",
          },
          {
            title: "9. Governing Law",
            content:
              "These Terms & Conditions are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in India.",
          },
          {
            title: "10. Changes to Terms",
            content:
              "We reserve the right to modify these Terms & Conditions at any time. Changes will be effective upon posting on this page.",
          },
          {
            title: "11. Contact",
            content: `For questions about these Terms & Conditions, contact us at ${COMPANY.contactEmail} or ${COMPANY.registeredAddress}.`,
          },
        ]}
      />
    </>
  );
}
