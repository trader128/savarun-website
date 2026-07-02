import type { Metadata } from "next";
import { disclaimerMetadata } from "@/lib/metadata";
import { StructuredData } from "@/components/seo/StructuredData";
import { getBreadcrumbSchema } from "@/lib/structured-data";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { COMPANY, formatLegalIdentifiers } from "@/lib/constants";

export const metadata: Metadata = disclaimerMetadata;

export default function DisclaimerPage() {
  return (
    <>
      <StructuredData
        data={getBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Disclaimer", path: "/disclaimer/" },
        ])}
      />
      <LegalPageLayout
        title="Disclaimer"
        description={`Important legal disclaimers regarding the website and information provided by ${COMPANY.name}.`}
        lastUpdated="July 2, 2026"
        sections={[
          {
            title: "1. General Information",
            content: `The information on this website (www.savarun.in) is provided by ${COMPANY.name} for general informational purposes only. While we strive to keep information accurate and up to date, we make no representations or warranties of any kind about the completeness, accuracy, or reliability of any information on this website.`,
          },
          {
            title: "2. Not Professional Advice",
            content:
              "Nothing on this website constitutes professional, medical, legal, or financial advice. Information about LOCK & KEY SKIN CARE describes a planned dermatologist consultation platform — it is not medical advice and should not be treated as such. Always consult a qualified professional for medical or legal matters.",
          },
          {
            title: "3. Products Not Yet Launched",
            content: [
              "SAVARUN and LOCK & KEY SKIN CARE are products in active development and are not publicly available.",
              "Descriptions of planned or potential features are forward-looking statements and do not represent commitments.",
              "Launch dates, feature sets, and availability may change without notice.",
            ],
          },
          {
            title: "4. No Medical Claims",
            content:
              "LOCK & KEY SKIN CARE is designed to connect users with qualified dermatologists. This website does not make any claims about medical outcomes, diagnoses, or treatments. The platform does not replace in-person medical consultation where required.",
          },
          {
            title: "5. Third-Party Content",
            content:
              "References to third-party products, services, or websites do not constitute endorsement. We are not responsible for third-party content or practices.",
          },
          {
            title: "6. Limitation of Liability",
            content: `In no event shall ${COMPANY.name}, its directors, employees, or agents be liable for any loss or damage arising from the use of this website or reliance on its content, to the fullest extent permitted by applicable law.`,
          },
          {
            title: "7. Company Identification",
            content: `${COMPANY.name} (${formatLegalIdentifiers()}) is the legal entity behind this website. SAVARUN and LOCK & KEY SKIN CARE are product brands — not separate legal entities. Registered address: ${COMPANY.registeredAddress}.`,
          },
          {
            title: "8. Contact",
            content: `For questions about this disclaimer, contact ${COMPANY.contactEmail}.`,
          },
        ]}
      />
    </>
  );
}
