"use client";

import Link from "next/link";
import HighlightImage from "@/app/assets/images/highlight.png";
import { useState } from "react";

export default function Waitlist() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-scarlett-red">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full py-20">
          {/* Left Side - Text Content */}
          <div className="text-left">
            <Link href="/" className="inline-block mb-8">
              <span className="text-xl font-bold text-cream hover:text-cream/80 transition-colors">
                ← Back to Home
              </span>
            </Link>

            <h1
              className="text-5xl md:text-9xl text-cream mb-6 tracking-tight uppercase leading-none"
              style={{ fontFamily: 'var(--font-novecento-ultrabold)' }}
            >
              Join the
              <br />
              <span
                className="relative inline-block px-2"
                style={{
                  backgroundImage: `url(${HighlightImage.src})`,
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                }}
              >
                waitlist
              </span>
            </h1>

            <p
              className="text-lg md:text-2xl text-cream max-w-xl"
              style={{ fontWeight: 510 }}
            >
              Be the first to know when Matskroll launches and get exclusive early access!
            </p>
          </div>

          {/* Right Side - Form */}
          <div className="flex justify-center lg:justify-end">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 w-full max-w-md">
              {!isSubmitted ? (
                <>
                  <h2 className="text-3xl font-bold text-violet mb-6 text-center">
                    Register here
                  </h2>

                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-zinc-700 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet focus:border-transparent text-black"
                        placeholder="Enter your name"
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
                        placeholder="Enter your email"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-zinc-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet focus:border-transparent text-black"
                        placeholder="Enter your phone number"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full px-8 py-4 bg-violet text-white rounded-full hover:bg-violet/90 transition-colors font-semibold text-lg"
                    >
                      Join Waitlist
                    </button>

                    <p className="text-center text-sm text-zinc-500 mt-4">
                      We'll notify you as soon as we launch. Your data is safe with us.
                    </p>
                  </form>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="mb-6">
                    <svg className="w-20 h-20 mx-auto text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-violet mb-4">
                    Thank you!
                  </h2>
                  <p className="text-lg text-zinc-700 mb-6">
                    Thank you for joining our journey! You will get an email when the app is ready.
                  </p>
                  <Link href="/" className="inline-block px-6 py-3 bg-violet text-white rounded-full hover:bg-violet/90 transition-colors font-semibold">
                    Back to Home
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
