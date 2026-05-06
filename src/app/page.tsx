import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CaseHighlights from "@/components/CaseHighlights";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <SmoothScrollProvider>
      <main className="bg-[#0A0B0F] min-h-screen text-[#F0EDE6]">
        <Navbar />
        <Hero />
        <CaseHighlights />
        <ServicesSection />
        <TestimonialsSection />
        <CTASection />
        <Footer />
      </main>
    </SmoothScrollProvider>
  );
}
