import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  BackToTop,
  ScrollProgress,
} from "@/components/layout/ScrollUtilities";
import { StructuredData } from "@/components/seo/StructuredData";
import { homeMetadata } from "@/lib/metadata";
import {
  getOrganizationSchema,
  getWebSiteSchema,
} from "@/lib/structured-data";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = homeMetadata;

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0A1628" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <link rel="manifest" href="/site.webmanifest" />
        <StructuredData
          data={[getOrganizationSchema(), getWebSiteSchema()]}
        />
      </head>
      <body
        className={`${inter.variable} ${plusJakarta.variable} min-h-screen font-sans antialiased`}
      >
        <ThemeProvider>
          <ScrollProgress />
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
