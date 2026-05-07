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

export const metadata: Metadata = {
  title: "Abbott Solicitors — Justice. Precision. Trust.",
  description:
    "Expert legal solutions across the UK. Immigration, Family Law, Housing, Conveyancing, Personal Injury, Employment, Civil Litigation and Criminal Defence. Free consultation available.",
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
      </head>
      <body suppressHydrationWarning>
        {children}
        <MobileFAB />
        <ReviewsTab />
      </body>
    </html>
  );
}
