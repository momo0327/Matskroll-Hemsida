import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="relative bg-scarlett-red">
      <div className="max-w-7xl mx-auto px-4 py-3 md:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Left */}
          <Link href="/" className="flex items-center space-x-2">
            <span
              className="text-2xl md:text-3xl text-cream uppercase"
              style={{
                fontFamily: 'var(--font-bagel-fat-one)',
                textShadow: `
                  -2px -2px 0 #3D1518,
                  2px -2px 0 #3D1518,
                  -2px 2px 0 #3D1518,
                  2px 2px 0 #3D1518,
                  -3px 0 0 #3D1518,
                  3px 0 0 #3D1518,
                  0 -3px 0 #3D1518,
                  0 3px 0 #3D1518,
                  -4px -4px 0 #3D1518,
                  4px -4px 0 #3D1518,
                  -4px 4px 0 #3D1518,
                  4px 4px 0 #3D1518,
                  -5px 0 0 #3D1518,
                  5px 0 0 #3D1518,
                  0 -5px 0 #3D1518,
                  0 5px 0 #3D1518
                `
              }}
            >
              Matskroll
            </span>
          </Link>

          {/* Button - Right */}
          <Link
            href="/waitlist"
            className="px-4 py-2 sm:px-6 sm:py-3 bg-cream text-violet rounded-full hover:bg-cream/90 transition-colors font-semibold text-sm sm:text-base whitespace-nowrap"
          >
            Join Waitlist
          </Link>
        </div>
      </div>
    </nav>
  );
}
