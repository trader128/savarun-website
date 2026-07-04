export const SITE_URL = "https://www.savarun.in";

export const COMPANY = {
  name: "SAWARUN TECH PRIVATE LIMITED",
  shortName: "Sawarun Tech",
  tagline: "Thoughtful Technology for Everyday Life.",
  mission:
    "Build thoughtfully designed technology products that improve people's everyday lives.",
  vision:
    "Become one of India's leading technology companies creating products used by millions worldwide.",
  domain: SITE_URL,
  contactEmail: "sawaruntech@savarun.in",
  contactPhone: "+91 7689070708",
  registeredAddress:
    "125, Sherpur, Suroth, Hindaun, Karauli — 322236, Rajasthan, India",
  registeredAddressLines: [
    "125, Sherpur",
    "Suroth, Hindaun",
    "Karauli — 322236",
    "Rajasthan, India",
  ] as const,
  cin: "U62099RJ2026PTC115628",
  pan: "ABUCS2165A",
  tan: "JPRS36049G",
  gstin: null as string | null,
  foundedYear: 2026,
  country: "India",
} as const;

export const CORE_VALUES = [
  {
    title: "Innovation",
    description:
      "We pursue ideas that solve real problems — not trends for their own sake.",
  },
  {
    title: "Trust",
    description:
      "We build products people can rely on, with transparency at every step.",
  },
  {
    title: "Simplicity",
    description:
      "Complex technology should feel effortless in the hands of everyday users.",
  },
  {
    title: "Privacy",
    description:
      "Personal data deserves respect. We design with privacy as a foundation, not an afterthought.",
  },
  {
    title: "Quality",
    description:
      "Every detail matters. We ship work we are proud to stand behind.",
  },
  {
    title: "Human-Centered Design",
    description:
      "Technology exists to serve people. We start with human needs, not technical possibilities.",
  },
  {
    title: "Long-Term Thinking",
    description:
      "We build for durability — in code, in relationships, and in the products we create.",
  },
] as const;

export const INDUSTRIES = [
  "Artificial Intelligence",
  "Consumer Technology",
  "Fashion Technology",
  "Healthcare Technology",
] as const;

export const PRODUCTS = {
  savarun: {
    id: "savarun",
    name: "SAVARUN",
    slug: "savarun",
    status: "Coming Soon" as const,
    tagline: "Fashion Intelligence Platform",
    description:
      "SAVARUN is an upcoming Fashion Intelligence Platform designed to help users better understand and improve their personal style through intelligent fashion insights, outfit organization and future AI-powered fashion features.",
    plannedFeatures: [
      "Outfit Analysis",
      "Fashion Score",
      "Digital Wardrobe",
      "Smart Styling Suggestions",
      "Outfit History",
      "Fashion Analytics",
      "Trend Insights",
    ],
    roadmap: [
      "AI Fashion Doctor",
      "Digital Closet",
      "Virtual Try-On",
      "AI Stylist",
      "Fashion Community",
      "Fashion Marketplace",
    ],
    gradient: "from-royal-500 to-purple-accent",
    accentColor: "royal",
  },
  lockAndKey: {
    id: "lock-and-key",
    name: "LOCK & KEY SKIN CARE",
    slug: "lock-and-key-skin-care",
    status: "Coming Soon" as const,
    tagline: "Dermatologist Consultation Platform",
    description:
      "LOCK & KEY SKIN CARE is an upcoming dermatologist consultation platform that aims to connect users with qualified dermatologists for professional skincare guidance, personalized treatment plans and long-term skin health management.",
    importantNote:
      "LOCK & KEY SKIN CARE is not an AI application. It is primarily a dermatologist consultation platform. Future technology enhancements may support the consultation experience — they are not the core identity of the product.",
    privacyNote:
      "As a platform that will eventually handle personal health information, LOCK & KEY SKIN CARE is being designed with India's Digital Personal Data Protection (DPDP) Act, 2023 in mind. Specific data practices will be defined and published before launch.",
    plannedFeatures: [
      "Dermatologist Consultation",
      "Personalized Treatment Plans",
      "Skin Progress Tracking",
      "Medical Records",
      "Appointment Scheduling",
      "Prescription Management",
      "Secure Patient Experience",
    ],
    gradient: "from-cyan-accent to-royal-500",
    accentColor: "cyan",
  },
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About" },
  { href: "/products/", label: "Products" },
  { href: "/contact/", label: "Contact" },
] as const;

export const LEGAL_LINKS = [
  { href: "/privacy-policy/", label: "Privacy Policy" },
  { href: "/terms/", label: "Terms & Conditions" },
  { href: "/disclaimer/", label: "Disclaimer" },
] as const;

export const FOOTER_PRODUCTS = [
  { name: PRODUCTS.savarun.name, href: "/products/#savarun" },
  { name: PRODUCTS.lockAndKey.name, href: "/products/#lock-and-key" },
] as const;

export function formatLegalIdentifiers(): string {
  const parts = [
    `CIN: ${COMPANY.cin}`,
    `PAN: ${COMPANY.pan}`,
    `TAN: ${COMPANY.tan}`,
  ];
  if (COMPANY.gstin) {
    parts.push(`GSTIN: ${COMPANY.gstin}`);
  }
  return parts.join(" · ");
}
