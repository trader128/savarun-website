import { COMPANY, PRODUCTS, SITE_URL } from "./constants";

export function getOrganizationSchema() {
  const identifiers = [
    { "@type": "PropertyValue", name: "CIN", value: COMPANY.cin },
    { "@type": "PropertyValue", name: "PAN", value: COMPANY.pan },
    { "@type": "PropertyValue", name: "TAN", value: COMPANY.tan },
  ];

  if (COMPANY.gstin) {
    identifiers.push({
      "@type": "PropertyValue",
      name: "GSTIN",
      value: COMPANY.gstin,
    });
  }

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: COMPANY.name,
    legalName: COMPANY.name,
    url: SITE_URL,
    logo: `${SITE_URL}/images/logos/company-logo.svg`,
    description: COMPANY.mission,
    email: COMPANY.contactEmail,
    telephone: COMPANY.contactPhone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "125, Sherpur, Suroth, Hindaun",
      addressLocality: "Karauli",
      postalCode: "322236",
      addressRegion: "Rajasthan",
      addressCountry: "IN",
    },
    identifier: identifiers,
    brand: [
      {
        "@type": "Brand",
        name: PRODUCTS.savarun.name,
      },
      {
        "@type": "Brand",
        name: PRODUCTS.lockAndKey.name,
      },
    ],
    sameAs: [],
  };
}

export function getProductSchema(
  product: typeof PRODUCTS.savarun | typeof PRODUCTS.lockAndKey,
) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    brand: {
      "@type": "Brand",
      name: COMPANY.name,
    },
    manufacturer: {
      "@type": "Organization",
      name: COMPANY.name,
    },
    url: `${SITE_URL}/products/#${product.id}`,
    category: product.tagline,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/PreOrder",
      price: "0",
      priceCurrency: "INR",
      description: product.status,
    },
  };
}

export function getBreadcrumbSchema(
  items: { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: COMPANY.name,
    url: SITE_URL,
    description: COMPANY.tagline,
    publisher: {
      "@type": "Organization",
      name: COMPANY.name,
    },
  };
}
