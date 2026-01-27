import Image from "next/image";
import Link from "next/link";
import ctaImage from "@/app/assets/images/cta.png";

export default function CTA() {
  return (
    <section className="py-44 px-4 sm:px-6 lg:px-8 bg-cream">
      <div className="max-w-7xl mx-auto flex justify-center">
        <div className="bg-scarlett-red px-20 pt-16 pb-32 rounded-2xl text-left w-full">
          <h2
            className="text-4xl md:text-6xl font-black text-cream mb-24"
            style={{ fontFamily: 'var(--font-novecento-ultrabold)' }}
          >
            BRIDGING THE GAP BETWEEN <br /> FOOD AND DISCOVERY
          </h2>
          <div className="relative inline-block">
            <Link href="/waitlist" className="inline-block px-8 py-4 bg-cream text-violet rounded-full hover:bg-violet/90 transition-colors font-semibold text-md relative z-0">
              Join Waitlist
            </Link>
            <div className="absolute top-[-50] left-[-60] z-10 pointer-events-none" style={{ width: '600px' }}>
              <Image
                src={ctaImage}
                alt="CTA"
                width={600}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
