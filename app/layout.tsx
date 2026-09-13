import type { Metadata } from "next";
import { DM_Serif_Display, Manrope } from "next/font/google";
import { AnalyticsProvider } from "@/components/analytics-provider";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const display = DM_Serif_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Nova Wealth Advisers | Financial Advice for Migrant Families",
    template: "%s | Nova Wealth Advisers",
  },
  description: siteConfig.description,
  keywords: [
    "financial adviser Australia",
    "migrant family financial advice",
    "retirement planning Australia",
    "superannuation strategy",
    "wealth advice",
  ],
  openGraph: {
    type: "website",
    locale: "en_AU",
    siteName: siteConfig.name,
    title: "Nova Wealth Advisers",
    description: siteConfig.description,
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nova Wealth Advisers",
    description: siteConfig.description,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    areaServed: "Australia",
    email: siteConfig.email,
  };

  return (
    <html lang="en" className={`${manrope.variable} ${display.variable}`}>
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <AnalyticsProvider />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </body>
    </html>
  );
}
