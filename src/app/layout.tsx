import type { Metadata } from "next";
import { Geist, Geist_Mono, Bagel_Fat_One, Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bagelFatOne = Bagel_Fat_One({
  variable: "--font-bagel-fat-one",
  subsets: ["latin"],
  weight: "400",
});

const novecentoUltraBold = localFont({
  src: "./assets/Fonts/fonnts.com-Novecento_sans_narrow_UltraBold.otf",
  variable: "--font-novecento-ultrabold",
});

export const metadata: Metadata = {
  title: "MatSkroll - Doomscroll through videos of food",
  description: "Discover amazing restaurants and food through endless videos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${geistSans.variable} ${geistMono.variable} ${bagelFatOne.variable} ${novecentoUltraBold.variable} antialiased`}
        style={{ fontFamily: 'var(--font-poppins)' }}
      >
        {children}
      </body>
    </html>
  );
}
