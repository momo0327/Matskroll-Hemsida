import Image from "next/image";
import Link from "next/link";
import ctaImage from "@/app/assets/images/cta.png";

export default function CTA() {
  return (
    <section className="py-44 px-4 sm:px-6 lg:px-8 bg-cream">
      <div className="max-w-7xl mx-auto flex justify-center">
        <div
          className="
            bg-scarlett-red rounded-2xl text-left w-full
            px-6 pt-12 pb-24
            max-w-md
            md:max-w-none md:px-20 md:pt-16 md:pb-32
          "
        >
          <h2
            className="
              text-3xl sm:text-4xl md:text-6xl
              font-black text-cream
              mb-12 md:mb-24
            "
            style={{ fontFamily: "var(--font-novecento-ultrabold)" }}
          >
            BRIDGING THE GAP BETWEEN <br /> FOOD AND DISCOVERY
          </h2>

          <div className="relative inline-block">
            <Link
              href="/waitlist"
              className="
                inline-block
                px-3 py-3
                md:px-8 md:py-4
                bg-cream text-violet
                rounded-full
                hover:bg-violet/90
                transition-colors
                font-semibold
                text-sm md:text-md
                relative z-10
              "
            >
              Join Waitlist
            </Link>

            {/* Decorative image — scaled down on mobile only */}
            <div
              className="
                absolute
                -top-6 -left-5
                w-90
                md:-top-12 md:-left-16 md:w-[600px]
                z-0 pointer-events-none
              "
            >
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
