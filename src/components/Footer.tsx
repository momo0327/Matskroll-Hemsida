import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="py-32 px-4 sm:px-6 lg:px-8 relative min-h-[500px]"
      style={{ backgroundColor: "#181818" }}
    >
      <div className="max-w-7xl mx-auto h-full">
        {/* Contact Info and Join Waitlist - desktop unchanged, mobile stacked */}
        <div
          className="
            absolute
            top-24 left-4 right-4
            flex flex-col gap-12
            md:top-40 md:left-8 md:right-auto
            md:flex-row md:gap-20
          "
        >
          {/* Contact Section */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-cream mb-6">Contact</h3>
            <div className="flex flex-col gap-4 text-cream">
              {/* Email */}
              <div className="flex items-center gap-3">
                <svg
                  className="w-6 h-6"
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
                  href="mailto:info@matskroll.com"
                  className="hover:text-cream/80 transition-colors"
                >
                  hello@zenitdigital.se
                </a>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <svg
                  className="w-6 h-6"
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

          {/* Join Waitlist Section */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-cream mb-6">Waitlist</h3>
            <Link
              href="/waitlist"
              className="flex items-center gap-2 text-cream hover:text-cream/80 transition-colors group"
            >
              <span>Join Waitlist</span>
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>

        {/* Copyright - mobile centered above logo, desktop unchanged */}
        <div
          className="
            absolute bottom-32 left-1/2 -translate-x-1/2
            text-cream/50 text-xs
            md:bottom-16 md:right-8 md:left-auto md:translate-x-0
            md:text-sm
          "
        >
          © 2026 Matskroll. All rights reserved.
        </div>
      </div>

      {/* Logo - mobile centered, desktop bottom-left unchanged */}
      <div
        className="
          absolute bottom-0 left-1/2 -translate-x-1/2
          md:left-0 md:translate-x-0
        "
      >
        <Link href="/" className="flex items-center space-x-2">
          <span
            className="text-7xl sm:text-6xl md:text-[10rem] text-cream uppercase leading-none"
            style={{
              fontFamily: "var(--font-bagel-fat-one)",
              textShadow: `
                -4px -4px 0 #EA2327,
                4px -4px 0 #EA2327,
                -4px 4px 0 #EA2327,
                4px 4px 0 #EA2327,
                -6px 0 0 #EA2327,
                6px 0 0 #EA2327,
                0 -6px 0 #EA2327,
                0 6px 0 #EA2327,
                -8px -8px 0 #EA2327,
                8px -8px 0 #EA2327,
                -8px 8px 0 #EA2327,
                8px 8px 0 #EA2327,
                -10px 0 0 #EA2327,
                10px 0 0 #EA2327,
                0 -10px 0 #EA2327,
                0 10px 0 #EA2327
              `,
            }}
          >
            Matskroll
          </span>
        </Link>
      </div>
    </footer>
  );
}
