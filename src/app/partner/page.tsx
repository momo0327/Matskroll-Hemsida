import Navbar from "@/components/Navbar";
import PartnerHero from "@/components/PartnerHero";
import PartnerFeatures from "@/components/PartnerFeatures";
import Footer from "@/components/Footer";

export default function PartnerPage() {
  return (
    <div className="min-h-screen bg-[#FFFBF0]">
      <Navbar variant="partner" />
      <PartnerHero />
      <PartnerFeatures />
      <Footer />
    </div>
  );
}
