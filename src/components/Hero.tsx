import Link from "next/link";
import Image from "next/image";
import HeroImage from "@/app/assets/images/HeroImage.png";
import HighlightImage from "@/app/assets/images/highlight.png";
import TeckenImage from "@/app/assets/images/tecken.png";

export default function Hero() {
  return (
    <section className="relative pt-2 pb-5 px-4 lg:px-8 min-h-screen flex items-center bg-scarlett-red overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:items-center">
          {/* Left Side - Text Content */}
          <div className="text-center lg:text-left mt-15 md:mt-1 flex flex-col items-center lg:items-start">
            {/* Main Heading */}
            <h1
              className="text-7xl md:text-8xl text-cream mb-6 md:w-max tracking-tight uppercase leading-none"
              style={{ fontFamily: 'var(--font-novecento-ultrabold)' }}
            >
              App for <br className="md:hidden" /> new 
              <br className="hidden md:block" />
               {' '}food{' '}
              <span
                className="relative inline-block px-2"
                style={{
                  backgroundImage: `url(${HighlightImage.src})`,
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                }}
              >
                adventures
              </span>
            </h1>

            {/* Subheading */}
            <p
              className="text-md md:text-lg lg:text-2xl text-cream mb-10 max-w-xl"
              style={{ fontWeight: 510 }}
            >
              Scroll and find new restaurants nearby, found one? Order directly in the app!
            </p>

            {/* CTA Button */}
            <div>
              <Link
                href="/waitlist"
                className="inline-flex items-center justify-center px-8 py-3 md:px-10 md:py-4 bg-violet text-white rounded-full hover:bg-violet/90 transition-colors font-semibold text-base md:text-lg"
              >
                Join Waitlist
              </Link>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative mt-8 lg:mt-0 flex justify-center lg:justify-center">
            <div className="relative md:w-[280px] md:h-[280px] w-[350px] h-[350px] lg:w-full lg:h-[500px]">
              {/* Tecken.png positioned above and to the left */}
              <div className="absolute -top-8 -left-2 w-16 h-16 sm:w-20 sm:h-20 lg:-top-14 lg:-left-2 lg:w-24 lg:h-24 z-10">
                <Image
                  src={TeckenImage}
                  alt="Tecken"
                  fill
                  className="object-contain"
                />
              </div>

              <Image
                src={HeroImage}
                alt="People enjoying food"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
