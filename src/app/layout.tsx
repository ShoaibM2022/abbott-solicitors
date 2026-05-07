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
    "Expert legal solutions across the UK. Immigration, Family Law, Housing, Property Law & Conveyancing, Personal Injury Claims, Employment, Civil Disputes and Criminal Defence. Free consultation available.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body suppressHydrationWarning>
        {children}
        <MobileFAB />
        <ReviewsTab />
      </body>
    </html>
  );
}
