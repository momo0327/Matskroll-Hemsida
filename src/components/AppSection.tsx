import Image from "next/image";
import frame from "@/app/assets/images/frame.png";
import holdingPhone from "@/app/assets/images/holdingPhone.png";

export default function AppSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-cream">
      <div className="max-w-7xl mx-auto">
        {/* Title - centered */}
        <div className="flex justify-center mb-16  ">
          <h2
            className="text-6xl md:text-9xl font-black text-violet md:text-left text-center "
            style={{ fontFamily: 'var(--font-novecento-ultrabold)' }}
          >
            CREATING VALUE AND <br className="hidden md:block" /> DRIVING <span className="text-scarlett-red">GROWTH</span>
          </h2>
        </div>

        {/* Image and Text Layout - centered */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start max-w-5xl">
            {/* Left Side - Phone Frame with Video */}
            <div className="flex justify-center lg:justify-center">
              <div className="relative w-2/3">
                {/* Video inside the frame */}
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute top-[2.5%] left-[2%] w-[96%] h-[97%] object-contain rounded-[30px] md:rounded-[40px]"
                >
                  <source src="/assets/Videos/test.mp4" type="video/mp4" />
                </video>
                {/* Frame overlay */}
                <Image
                  src={frame}
                  alt="Frame"
                  className="w-full h-auto relative z-10"
                />
              </div>
            </div>

            {/* Right Side - Text */}
            <div className="text-left  py-2">
              {/* Holding Phone Image */}
              <div className="mb-2">
                <Image
                  src={holdingPhone}
                  alt="Holding Phone"
                  className="w-[100px] h-auto left-[-4]"
                />
              </div>

              <h3 className="text-5xl font-ultrabold text-black mb-10">
              THE APP <br />FEATURES             
              </h3>
              <p className="text-lg text-zinc-700 leading-relaxed">
            
                    <div className="space-y-6">
                <p className="text-2xl text-zinc-700">scroll and explore food videos</p>
                <p className="text-2xl text-zinc-700">compare prices of couriers</p>
                <p className="text-2xl text-zinc-700">order home or dine out</p>
                <p className="text-2xl text-zinc-700">enjoy the delicious meal and rate it</p>
              </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
