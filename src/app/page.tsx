import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import AppSection from "@/components/AppSection";
import Partner from "@/components/Partner";
import ComingSoon from "@/components/ComingSoon";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Navbar />
      <Hero />
      <Features />
      <AppSection />
      <ComingSoon />
      {/* <Partner /> */}
      <CTA />
      <Footer />
    </div>
  );
}
