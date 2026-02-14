import Image from "next/image";
import highFive from "@/app/assets/images/HighFive.png";
import food from "@/app/assets/images/food.png";
import grow from "@/app/assets/images/Grow.png";

export default function PartnerFeatures() {
  const features = [
    {
      image: highFive,
      alt: "Sign Up",
      title: "Register and Become a Partner",
      description: "Join our platform and start showcasing your restaurant",
      maxHeight: 150,
    },
    {
      image: food,
      alt: "Upload",
      title: "Upload Videos of Your Food and Menu",
      description: "Share mouth-watering content that brings your dishes to life",
      maxHeight: 190,
    },
    {
      image: grow,
      alt: "Reach",
      title: "Watch Hungry Customers Roll In",
      description: "Grow your business as food lovers discover and visit your restaurant",
      maxHeight: 140,
    },
  ];

  return (
    <section id="partner-features" className="py-32 px-4 sm:px-6 lg:px-8 bg-[#FFFBF0]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header - Title centered */}
        <div className="mb-16 text-left md:text-center">
          <h2 className="text-5xl md:text-6xl font-ultrabold text-[#3D1518] mb-12 uppercase">
            How It  <span className="text-scarlett-red">Works</span>
          </h2>
        </div>

        {/* Features Grid - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-start md:items-center">
              {/* Icon */}
              <div className="mb-6 h-[120px] md:h-[180px] flex items-center justify-start md:justify-center">
                <Image
                  src={feature.image}
                  alt={feature.alt}
                  className="object-contain w-auto h-auto"
                  style={{ maxHeight: `${feature.maxHeight * 0.7}px` }}
                />
              </div>

              <div className="max-w-xs md:max-w-[250px]">
                {/* Title */}
                <h3 className="text-lg md:text-xl font-bold text-[#3D1518] mb-3 text-left md:text-center">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-zinc-600 text-lg leading-relaxed text-left md:text-center">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
