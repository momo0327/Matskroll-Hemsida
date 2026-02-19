import Image from "next/image";
import partner from "@/app/assets/images/partner.png";
import Marquee from "@/components/Marquee";

export default function Partner() {
  return (
    <section className="pt-32 px-4 sm:px-6 lg:px-8 bg-[#181818]">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-7xl  md:text-9xl font-ultrabold text-white mb-6 uppercase">
          Become a <br /> Partner
        </h2>
        <p className="text-md md:text-xl text-[#FFFBF0] font-poppins mb-12 max-w-lg md:max-w-xl mx-auto"
          style={{ fontWeight: 510 }}
        >
          Join our growing network of restaurant partners and reach food lovers across the platform
        </p>
        <button className="bg-scarlett-red text-[#FFFBF0] px-12 py-4 text-xl font-ultrabold uppercase hover:bg-opacity-90 rounded-full transition-all duration-300 mb-12">
          Explore
        </button>

        {/* <Marquee
          text="TOO GOOD FOR NAPKINS"
          fontSize={10}
          waveFrequency={4}
          waveAmplitude={40}
          speed={1.5}
          className="text-white font-ultrabold uppercase my-16"
        /> */}

        <div className="flex justify-center items-end mt-12">
          <Image
            src={partner}
            alt="Partner"
            className="w-full max-w-3xl h-auto"
          />
        </div>
      </div>
    </section>
  );
}
