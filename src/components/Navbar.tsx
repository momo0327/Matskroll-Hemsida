"use client";

import Link from "next/link";
import { useState } from "react";

interface NavbarProps {
  variant?: 'default' | 'partner';
}

export default function Navbar({ variant = 'default' }: NavbarProps) {
  const isPartner = variant === 'partner';
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className={`relative z-50 transition-colors duration-300 ${
        menuOpen ? 'bg-[#FFFBF0]' : isPartner ? 'bg-white' : 'bg-scarlett-red'
      }`}>
        <div className="max-w-7xl mx-auto px-4 py-3 md:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo - Left */}
            <Link href="/" className="flex items-center space-x-2 relative z-50">
              <span
                className={`text-2xl md:text-3xl uppercase transition-colors duration-300 ${
                  menuOpen ? 'text-[#FFFBF0]' : isPartner ? 'text-[#FFFBF0]' : 'text-cream'
                }`}
                style={{
                  fontFamily: 'var(--font-bagel-fat-one)',
                  textShadow: isPartner ? `
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
                  ` : `
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

            {/* Desktop Buttons - Right */}
            <div className="hidden md:flex gap-2 sm:gap-4">
              <Link
                href="/partner"
                className={`px-4 py-2 sm:px-6 sm:py-3 rounded-full transition-colors font-semibold text-sm sm:text-base whitespace-nowrap text-center min-w-[100px] sm:min-w-[140px] ${
                  isPartner
                    ? 'bg-cream text-[#3D1518] hover:bg-cream/90'
                    : 'bg-cream text-violet hover:bg-cream/90'
                }`}
              >
                Partner
              </Link>
              <Link
                href="/waitlist"
                className={`px-4 py-2 sm:px-6 sm:py-3 rounded-full transition-colors font-semibold text-sm sm:text-base whitespace-nowrap text-center min-w-[100px] sm:min-w-[140px] ${
                  isPartner
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
                  menuOpen ? 'bg-violet' : isPartner ? 'bg-[#3D1518]' : 'bg-cream'
                } ${menuOpen ? 'rotate-45 translate-y-1.25' : ''}`}
              />
              <span
                className={`block h-0.5 w-full transition-all duration-300 ${
                  menuOpen ? 'bg-violet' : isPartner ? 'bg-[#3D1518]' : 'bg-cream'
                } ${menuOpen ? '-rotate-45 -translate-y-1.25' : ''}`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-[#FFFBF0] z-40 flex flex-col items-center justify-center transition-opacity duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col items-center gap-6">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="text-6xl font-ultrabold text-violet uppercase"
          >
            Home
          </Link>
          <Link
            href="/partner"
            onClick={() => setMenuOpen(false)}
            className="text-6xl font-ultrabold text-violet uppercase"
          >
            Partner
          </Link>
          <Link
            href="/waitlist"
            onClick={() => setMenuOpen(false)}
            className="text-6xl font-ultrabold text-violet uppercase"
          >
            Join Waitlist
          </Link>
        </nav>
      </div>
    </>
  );
}
