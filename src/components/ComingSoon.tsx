import Image from "next/image";
import comingSoon from "@/app/assets/images/comingSoon.png";

export default function ComingSoon() {
  return (
    <section className="py-40 bg-cream">
      <div className="flex justify-center">
        <Image
          src={comingSoon}
          alt="Coming Soon"
          className="w-[800px] h-auto"
        />
      </div>
    </section>
  );
}
