import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import AppSection from "@/components/AppSection";
import Partner from "@/components/Partner";
import ComingSoon from "@/components/ComingSoon";
import Testimonials from "@/components/Testimonials";
import DualMarquee from "@/components/DualMarquee";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Navbar />
      <Hero />
      <Features />
      <AppSection />
      <Partner />
      <ComingSoon />
      {/* <Testimonials /> */}
      {/* <DualMarquee /> */}
      <CTA />
      <Footer />
    </div>
  );
}
