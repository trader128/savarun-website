import type { Metadata } from "next";
import { COMPANY, SITE_URL } from "./constants";

type PageMetaOptions = {
  title: string;
  description: string;
  path?: string;
  noIndex?: boolean;
};

export function createMetadata({
  title,
  description,
  path = "",
  noIndex = false,
}: PageMetaOptions): Metadata {
  const url = `${SITE_URL}${path}`;
  const fullTitle =
    title === "Home"
      ? "SAWARUN TECH PRIVATE LIMITED — Thoughtful Technology for Everyday Life"
      : `${title} | SAWARUN TECH PRIVATE LIMITED`;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: "en_IN",
      url,
      siteName: COMPANY.name,
      title: fullTitle,
      description,
      images: [
        {
          url: `${SITE_URL}/images/og/default-og.svg`,
          width: 1200,
          height: 630,
          alt: `${COMPANY.name} — ${COMPANY.tagline}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [`${SITE_URL}/images/og/default-og.svg`],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

export const homeMetadata = createMetadata({
  title: "Home",
  description:
    "SAWARUN TECH PRIVATE LIMITED builds thoughtfully designed technology products — including SAVARUN and LOCK & KEY SKIN CARE — focused on fashion intelligence and dermatologist-guided skincare.",
  path: "/",
});

export const aboutMetadata = createMetadata({
  title: "About",
  description:
    "Learn about SAWARUN TECH PRIVATE LIMITED — our mission, vision, values, and commitment to building premium technology products for everyday life.",
  path: "/about/",
});

export const productsMetadata = createMetadata({
  title: "Products",
  description:
    "Explore upcoming products from SAWARUN TECH PRIVATE LIMITED: SAVARUN (Fashion Intelligence Platform) and LOCK & KEY SKIN CARE (Dermatologist Consultation Platform). Both coming soon.",
  path: "/products/",
});

export const contactMetadata = createMetadata({
  title: "Contact",
  description:
    "Get in touch with SAWARUN TECH PRIVATE LIMITED. We'd love to hear from partners, collaborators, and anyone interested in our work.",
  path: "/contact/",
});

export const privacyMetadata = createMetadata({
  title: "Privacy Policy",
  description:
    "Privacy Policy for SAWARUN TECH PRIVATE LIMITED and its products. Learn how we handle personal information.",
  path: "/privacy-policy/",
});

export const termsMetadata = createMetadata({
  title: "Terms & Conditions",
  description:
    "Terms and Conditions governing use of the SAWARUN TECH PRIVATE LIMITED website and services.",
  path: "/terms/",
});

export const disclaimerMetadata = createMetadata({
  title: "Disclaimer",
  description:
    "Legal disclaimer for SAWARUN TECH PRIVATE LIMITED website and product information.",
  path: "/disclaimer/",
});
