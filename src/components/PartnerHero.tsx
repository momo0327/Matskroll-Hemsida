import Image from "next/image";
import ownerImage from "@/app/assets/images/ownerImage.jpg";

export default function PartnerHero() {
  return (
    <>
      {/* Hero Image Section */}
      <section className="relative w-full h-[60vh] sm:h-[70vh] md:min-h-screen">
        <Image
          src={ownerImage}
          alt="Restaurant Owner"
          fill
          className="object-cover scale-x-[-1]"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />

        {/* Text Content - Bottom Left */}
        <div className="absolute bottom-20 left-4 md:bottom-32 md:left-12 lg:left-20 max-w-2xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-ultrabold text-white uppercase leading-none mb-4">
            Become a Partner and Grow Your Business
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-[#FFFBF0] font-poppins max-w-xl" style={{ fontWeight: 510 }}>
            Join our platform and reach thousands of hungry customers looking for great food
          </p>
        </div>

        {/* Registration Form - Desktop Only (Overlay) */}
        <div className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 md:right-12 lg:right-20 w-[90%] max-w-md">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
            <h2 className="text-3xl font-bold text-violet mb-6 text-center">
              Register here
            </h2>

            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-semibold text-zinc-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet focus:border-transparent text-black"
                    placeholder="Name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-sm font-semibold text-zinc-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet focus:border-transparent text-black"
                    placeholder="Last name"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="restaurantName" className="block text-sm font-semibold text-zinc-700 mb-2">
                  Restaurant Name
                </label>
                <input
                  type="text"
                  id="restaurantName"
                  name="restaurantName"
                  className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet focus:border-transparent text-black"
                  placeholder="Restaurant name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-zinc-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet focus:border-transparent text-black"
                  placeholder="Email"
                  required
                />
              </div>

              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-semibold text-zinc-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet focus:border-transparent text-black"
                  placeholder="Phone number"
                />
              </div>

              <div>
                <label htmlFor="city" className="block text-sm font-semibold text-zinc-700 mb-2">
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet focus:border-transparent text-black"
                  placeholder="City"
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-violet text-white rounded-full hover:bg-violet/90 transition-colors font-semibold text-lg"
              >
                Join as Partner
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Registration Form - Mobile Only (Below Image) */}
      <section className="md:hidden bg-[#FFFBF0] py-8 px-4">
        <div className="max-w-md mx-auto">
          <div className="bg-[#FFFBF0] rounded-2xl shadow-xl p-8 border border-zinc-300">
            <h2 className="text-3xl font-bold text-violet mb-6 text-center">
              Register here
            </h2>

            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstNameMobile" className="block text-sm font-semibold text-zinc-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="firstNameMobile"
                    name="firstName"
                    className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet focus:border-transparent text-black"
                    placeholder="Name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="lastNameMobile" className="block text-sm font-semibold text-zinc-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastNameMobile"
                    name="lastName"
                    className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet focus:border-transparent text-black"
                    placeholder="Last name"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="restaurantNameMobile" className="block text-sm font-semibold text-zinc-700 mb-2">
                  Restaurant Name
                </label>
                <input
                  type="text"
                  id="restaurantNameMobile"
                  name="restaurantName"
                  className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet focus:border-transparent text-black"
                  placeholder="Restaurant name"
                  required
                />
              </div>

              <div>
                <label htmlFor="emailMobile" className="block text-sm font-semibold text-zinc-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="emailMobile"
                  name="email"
                  className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet focus:border-transparent text-black"
                  placeholder="Email"
                  required
                />
              </div>

              <div>
                <label htmlFor="phoneNumberMobile" className="block text-sm font-semibold text-zinc-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phoneNumberMobile"
                  name="phoneNumber"
                  className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet focus:border-transparent text-black"
                  placeholder="Phone number"
                />
              </div>

              <div>
                <label htmlFor="cityMobile" className="block text-sm font-semibold text-zinc-700 mb-2">
                  City
                </label>
                <input
                  type="text"
                  id="cityMobile"
                  name="city"
                  className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet focus:border-transparent text-black"
                  placeholder="City"
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-violet text-white rounded-full hover:bg-violet/90 transition-colors font-semibold text-lg"
              >
                Join as Partner
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
