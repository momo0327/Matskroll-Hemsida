"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import LogoDark from "@/app/assets/images/LogoDark.png";
import LogoRed from "@/app/assets/images/LogoRed.png";

interface NavbarProps {
  variant?: 'default' | 'partner' | 'dark';
}

export default function Navbar({ variant = 'default' }: NavbarProps) {
  const isPartner = variant === 'partner';
  const isDark = variant === 'dark';
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close menu when pathname changes
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Mobile Menu Overlay - Covers Entire Screen */}
      <div
        className={`md:hidden fixed inset-0 bg-[#FFFBF0] transition-opacity duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto z-[60]' : 'opacity-0 pointer-events-none -z-10'
        }`}
      >
        {/* Logo and Close Button */}
        <div className="absolute top-0 left-0 right-0 px-4 py-3">
          <div className="max-w-7xl mx-auto flex items-center justify-between h-16">
            <Link href="/" className="flex items-center">
              <Image
                src={isDark ? LogoRed : LogoDark}
                alt="Matskroll"
                className="h-7 md:h-10 w-auto"
                priority
              />
            </Link>

            <button
              onClick={() => setMenuOpen(false)}
              className="w-8 h-6 flex flex-col justify-center gap-2"
              aria-label="Close menu"
            >
              <span className="block h-0.5 w-full transition-all duration-300 rotate-45 translate-y-1.25 bg-violet" />
              <span className="block h-0.5 w-full transition-all duration-300 -rotate-45 -translate-y-1.25 bg-violet" />
            </button>
          </div>
        </div>

        {/* Menu Links */}
        <nav className="flex flex-col items-center justify-center h-full gap-2">
          <Link
            href="/"
            className="font-ultrabold text-violet uppercase"
            style={{
              fontSize: 50,
              animation: menuOpen ? 'fadeUp 0.5s ease-out 0.1s both' : 'none'
            }}
          >
            Home
          </Link>
          <Link
            href="/partner"
            className="font-ultrabold text-violet uppercase"
            style={{
              fontSize: 50,
              animation: menuOpen ? 'fadeUp 0.5s ease-out 0.2s both' : 'none'
            }}
          >
            Partner
          </Link>
          <Link
            href="/waitlist"
            className="font-ultrabold text-violet uppercase"
            style={{
              fontSize: 50,
              animation: menuOpen ? 'fadeUp 0.5s ease-out 0.3s both' : 'none'
            }}
          >
            Waitlist
          </Link>
        </nav>

        <style jsx>{`
          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </div>

      <nav className={`relative z-50 transition-colors duration-300 ${
        isDark ? 'bg-[#181818]' : isPartner ? 'bg-white' : 'bg-scarlett-red'
      }`}>
        <div className="max-w-7xl mx-auto px-4 py-3 md:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo - Left */}
            <Link href="/" className="flex items-center relative">
              <Image
                src={isDark ? LogoRed : LogoDark}
                alt="Matskroll"
                className="h-7 md:h-10 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation Buttons */}
            <div className="hidden md:flex gap-2 sm:gap-4">
              <Link
                href="/partner"
                className={`px-4 py-2 sm:px-6 sm:py-3 rounded-full transition-colors font-semibold text-sm sm:text-base whitespace-nowrap text-center min-w-[100px] sm:min-w-[140px] ${
                  isDark
                    ? 'bg-cream text-[#3D1518] hover:bg-cream/90'
                    : isPartner
                    ? 'bg-cream text-[#3D1518] hover:bg-cream/90'
                    : 'bg-cream text-violet hover:bg-cream/90'
                }`}
              >
                Partner
              </Link>
              <Link
                href="/waitlist"
                className={`px-4 py-2 sm:px-6 sm:py-3 rounded-full transition-colors font-semibold text-sm sm:text-base whitespace-nowrap text-center min-w-[100px] sm:min-w-[140px] ${
                  isDark
                    ? 'bg-scarlett-red text-cream hover:bg-scarlett-red/90'
                    : isPartner
                    ? 'bg-[#3D1518] text-cream hover:bg-[#3D1518]/90'
                    : 'bg-[#3D1518] text-cream hover:bg-[#3D1518]/90'
                }`}
              >
                Join Waitlist
              </Link>
            </div>

            {/* Hamburger Menu Button - Mobile */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden relative z-50 w-8 h-6 flex flex-col justify-center gap-2"
              aria-label="Toggle menu"
            >
              <span
                className={`block h-0.5 w-full transition-all duration-300 ${
                  isDark ? 'bg-cream' : isPartner ? 'bg-[#3D1518]' : 'bg-cream'
                } ${menuOpen ? 'rotate-45 translate-y-1.25' : ''}`}
              />
              <span
                className={`block h-0.5 w-full transition-all duration-300 ${
                  isDark ? 'bg-cream' : isPartner ? 'bg-[#3D1518]' : 'bg-cream'
                } ${menuOpen ? '-rotate-45 -translate-y-1.25' : ''}`}
              />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
