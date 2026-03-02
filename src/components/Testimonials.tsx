export default function Testimonials() {
  const testimonials = [
    {
      text: "I LOVE HOW CHOMPO KEEPS THINGS SIMPLE BUT SO FLAVORFUL. THE FRIES ARE CRISPY AND THE BURGERS JUICY— PERFECTION IN EVERY BITE.",
      author: "VERIFIED TASTESTAR",
      color: "red",
      rotation: "-12deg",
      translateX: "-15%",
      translateY: "-10%",
      zIndex: 30,
      delay: "0s",
    },
    {
      text: "THIS IS NOT JUST FOOD, IT'S AN EXPERIENCE. CHOMPO MANAGES TO BRING SOMETHING NEW EVEN TO THE CLASSICS OF THE BURGER WORLD.",
      author: "VERIFIED TASTESTAR",
      color: "black",
      rotation: "-3deg",
      translateX: "-25%",
      translateY: "15%",
      zIndex: 20,
      delay: "0.2s",
    },
    {
      text: "CHOMPO BURGERS HIT THE SPOT EVERY TIME— BOLD FLAVORS, FRESH INGREDIENTS, AND FRIENDLY SERVICE. DEFINITELY MY GO-TO FOR A QUICK, DELICIOUS MEAL!",
      author: "VERIFIED TASTESTAR",
      color: "red",
      rotation: "8deg",
      translateX: "20%",
      translateY: "5%",
      zIndex: 10,
      delay: "0.4s",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-cream">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2
          className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-dark-gray font-bold text-center mb-12 md:mb-20 uppercase leading-tight"
          style={{ fontFamily: "var(--font-novecento-ultrabold)" }} 
        >
          REAL TALK FROM
          <br />
          REAL FOODIES
        </h2>

        {/* Scattered Testimonial Cards */}
        <div className="relative h-125 sm:h-150 md:h-175 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="absolute left-1/2 top-1/2 w-full max-w-87.5 sm:max-w-112.5 md:max-w-130 transition-all duration-300 hover:scale-105 hover:z-50 animate-slide-up"
              style={{
                transform: `translate(calc(-50% + ${testimonial.translateX}), calc(-50% + ${testimonial.translateY})) rotate(${testimonial.rotation})`,
                zIndex: testimonial.zIndex,
                animationDelay: testimonial.delay,
                // @ts-ignore - CSS custom properties
                "--translate-x": testimonial.translateX,
                "--translate-y": testimonial.translateY,
                "--rotation": testimonial.rotation,
              }}
            >
              <div
                className={`${
                  testimonial.color === "red" ? "bg-[#EA2327]" : "bg-[#181818]"
                } text-cream p-8 md:p-10 rounded-2xl shadow-2xl`}
              >
                {/* Star Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 md:w-6 md:h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-base md:text-lg font-bold mb-6 leading-relaxed uppercase">
                  {testimonial.text}
                </p>

                {/* Author */}
                <p className="text-sm md:text-base font-bold opacity-80">
                  - {testimonial.author}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
