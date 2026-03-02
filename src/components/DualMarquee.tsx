export default function DualMarquee() {
  const foodItems = [
    "BURGER",
    
    "PIZZA",
    
    "FRIES",
    
    "SANDWICH",
    
    "CHICKEN LEG",
    ,
    "BACON",
    
  ];

  return (
    <div className="relative w-full overflow-hidden bg-cream py-12 md:py-16">
      {/* Red Marquee - Scrolling Left */}
      <div
        className="relative -rotate-2 mb-4"
        style={{ backgroundColor: "#EA2327" }}
      >
        <div className="flex overflow-hidden py-4 md:py-6">
          <div className="flex animate-marquee-left whitespace-nowrap">
            {[...Array(3)].map((_, arrayIndex) => (
              <div key={arrayIndex} className="flex">
                {foodItems.map((item, index) => (
                  <span
                    key={`${arrayIndex}-${index}`}
                    className="mx-6 md:mx-8 text-2xl md:text-4xl font-bold text-cream uppercase"
                    style={{
                      fontFamily: "var(--font-novecento-ultrabold)",
                      textShadow: `
                        -2px -2px 0 #EA2327,
                        2px -2px 0 #EA2327,
                        -2px 2px 0 #EA2327,
                        2px 2px 0 #EA2327,
                        -2px 0 0 #EA2327,
                        2px 0 0 #EA2327,
                        0 -2px 0 #EA2327,
                        0 2px 0 #EA2327
                      `
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dark Marquee - Scrolling Right */}
      <div
        className="relative rotate-2"
        style={{ backgroundColor: "#181818" }}
      >
        <div className="flex overflow-hidden py-4  md:py-6">
          <div className="flex animate-marquee-right whitespace-nowrap">
            {[...Array(3)].map((_, arrayIndex) => (
              <div key={arrayIndex} className="flex">
                {foodItems.map((item, index) => (
                  <span
                    key={`${arrayIndex}-${index}`}
                    className="mx-6 md:mx-8 text-2xl  md:text-4xl font-bold text-cream uppercase"
                    style={{
                      fontFamily: "var(--font-novecento-ultrabold)",
                      textShadow: `
                        -2px -2px 0 #EA2327,
                        2px -2px 0 #EA2327,
                        -2px 2px 0 #EA2327,
                        2px 2px 0 #EA2327,
                        -2px 0 0 #EA2327,
                        2px 0 0 #EA2327,
                        0 -2px 0 #EA2327,
                        0 2px 0 #EA2327
                      `
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
