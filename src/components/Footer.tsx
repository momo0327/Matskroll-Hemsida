import Link from "next/link";
import Image from "next/image";
import LogoRedFooter from "@/app/assets/images/LogoRedFooter.png";

export default function Footer() {
  return (
    <footer
      className="py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{ backgroundColor: "#181818" }}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Contact Info and Links - Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-12 md:mb-16">
          {/* General Inquiries Section */}
          <div>
            <h3 className="text-lg md:text-2xl lg:text-3xl font-ultrabold text-cream mb-4 md:mb-6 uppercase">
              General Inquiries
            </h3>
            <div className="flex flex-col gap-3 md:gap-4 text-sm md:text-base text-cream">
              {/* Email */}
              <div className="flex items-center gap-2 md:gap-3">
                <svg
                  className="w-5 h-5 md:w-6 md:h-6 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:hello@zenitdigital.se"
                  className="hover:text-cream/80 transition-colors break-all"
                >
                  hello@zenitdigital.se
                </a>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-2 md:gap-3">
                <svg
                  className="w-5 h-5 md:w-6 md:h-6 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a
                  href="tel:+46723364384"
                  className="hover:text-cream/80 transition-colors"
                >
                  072-336 43 84
                </a>
              </div>
            </div>
          </div>

          {/* Links Section */}
          <div>
            <h3 className="text-lg md:text-2xl lg:text-3xl font-ultrabold text-cream mb-4 md:mb-6 uppercase">
              Links
            </h3>
            <div className="flex flex-col gap-2 md:gap-3 text-sm md:text-base text-cream">
              <Link
                href="/"
                className="hover:text-cream/80 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/partner"
                className="hover:text-cream/80 transition-colors"
              >
                Partner
              </Link>
              <Link
                href="/waitlist"
                className="hover:text-cream/80 transition-colors"
              >
                Waitlist
              </Link>
            </div>
          </div>

          {/* Service Section */}
          <div>
            <h3 className="text-lg md:text-2xl lg:text-3xl font-ultrabold text-cream mb-4 md:mb-6 uppercase">
              Service
            </h3>
            <div className="flex flex-col gap-2 md:gap-3 text-sm md:text-base text-cream">
              <Link
                href="/privacy-policy"
                className="hover:text-cream/80 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="https://tally.so/r/xXd075"
                className="hover:text-cream/80 transition-colors"
              >
                Support
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center lg:text-right text-cream/50 text-xs md:text-sm pb-12 md:pb-32">
          {/* © 2026 Matskroll. All rights reserved. */}
        </div>
      </div>

      {/* Logo - Bottom Left Corner */}
      <div className="absolute -bottom-4 sm:-bottom-6 md:-bottom-8 lg:-bottom-10 left-0 pointer-events-none">
        <Link href="/" className="pointer-events-auto">
          <Image
            src={LogoRedFooter}
            alt="Matskroll"
            className="h-20 sm:h-24 md:h-32 lg:h-40 xl:h-48 w-auto"
          />
        </Link>
      </div>
    </footer>
  );
}
