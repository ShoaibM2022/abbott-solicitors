import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import MobileFAB from "@/components/MobileFAB";
import ReviewsTab from "@/components/ReviewsTab";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const SITE_URL = "https://abbottsolicitors.com";
const SITE_NAME = "Abbott Solicitors";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Abbott Solicitors — Justice. Precision. Trust.",
    template: "%s — Abbott Solicitors",
  },
  description:
    "Practical, accessible legal advice across immigration, family, housing, conveyancing, employment, civil litigation, personal injury and criminal defence. Offices in Luton and Birmingham.",
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: "Abbott Solicitors — Justice. Precision. Trust.",
    description:
      "Practical, accessible legal advice across immigration, family, housing, conveyancing, employment, civil litigation, personal injury and criminal defence.",
    url: SITE_URL,
    locale: "en_GB",
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abbott Solicitors — Justice. Precision. Trust.",
    description:
      "Practical, accessible legal advice across immigration, family, housing, conveyancing, employment, civil litigation, personal injury and criminal defence.",
    images: ["/logo.png"],
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "@id": `${SITE_URL}/#organization`,
  name: "Abbott Solicitors LLP",
  alternateName: "Abbott Solicitors",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  image: `${SITE_URL}/logo.png`,
  description:
    "Practical, accessible legal advice across immigration, family, housing, conveyancing, employment, civil litigation, personal injury and criminal defence.",
  foundingDate: "2012",
  areaServed: { "@type": "Country", name: "United Kingdom" },
  priceRange: "££",
  telephone: "+44-1582-737952",
  email: "info@abbottsolicitors.com",
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "Abbott House, Unit 9, 729 Capability Green",
      addressLocality: "Luton",
      addressRegion: "Bedfordshire",
      postalCode: "LU1 3LU",
      addressCountry: "GB",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "443–465 Coventry Road, Small Heath",
      addressLocality: "Birmingham",
      addressRegion: "West Midlands",
      postalCode: "B10 0TJ",
      addressCountry: "GB",
    },
  ],
  sameAs: [
    "https://www.facebook.com/abbottsolicitor",
    "https://twitter.com/AbbottSolicitor",
    "https://www.linkedin.com/company/abbott-solicitors-llp/",
    "https://www.instagram.com/abbottsolicitorsllp",
    "https://www.youtube.com/@abbottsolicitors2159",
    "https://www.reviewsolicitors.co.uk/bedfordshire/luton/abbott-solicitors-llp",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Practice Areas",
    itemListElement: [
      "Immigration Law",
      "Family Law",
      "Housing Law",
      "Property Law & Conveyancing",
      "Personal Injury Claims",
      "Employment Law",
      "Civil Disputes",
      "Criminal Defence",
    ].map((name) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name },
    })),
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          media="all"
          href="https://www.reviewsolicitors.co.uk/assets/css/build/widgets/rs-widget-sideNew.css?v=1.0.0"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-[#C9A84C] focus:text-[#0A0B0F] focus:text-sm focus:font-sans focus:font-semibold focus:rounded-sm focus:outline-none"
        >
          Skip to main content
        </a>
        <div id="main">{children}</div>
        <MobileFAB />
        <ReviewsTab />
      </body>
    </html>
  );
}
