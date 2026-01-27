import Image from "next/image";
import lovePhone from "@/app/assets/images/lovePhone.png";
import share from "@/app/assets/images/Share.png";
import star from "@/app/assets/images/Star.png";
import scribble from "@/app/assets/images/scribble.png";
import holdingPhone from "@/app/assets/images/holdingPhone.png";

export default function Features() {
  const features = [
    {
      image: lovePhone,
      alt: "Love Phone",
      title: "Discover food through mesmerising videos",
      description: "Crafting solutions that uplift lives across MENA",
      maxHeight: 100,
    },
    {
      image: share,
      alt: "Share",
      title: "Share with people you love",
      description: "Crafting solutions that uplift lives across MENA",
      maxHeight: 170,
    },
    {
      image: star,
      alt: "Star",
      title: "Rate and see what people recommend",
      description: "Crafting solutions that uplift lives across MENA",
      maxHeight: 120,
    },
  ];

  return (
    <section id="features" className="py-32 px-4 sm:px-6 lg:px-8 bg-cream">
      <div className="max-w-7xl mx-auto">


        {/* Section Header - Title on the left */}
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-violet mb-12">
            New{" "}
            <span className="relative inline-block">
              Adventures
              <Image
                src={scribble}
                alt="Scribble decoration"
                className="absolute -bottom-10 left-0 w-full"
                style={{ height: 'auto' }}
              />
            </span>
          </h2>
        </div>

        {/* Features Grid - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-left">
              {/* Icon */}
              <div className="mb-6 h-[170px] flex items-center">
                <Image
                  src={feature.image}
                  alt={feature.alt}
                  className="object-contain w-auto h-auto"
                  style={{ maxHeight: `${feature.maxHeight}px` }}
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-black mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-zinc-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
