"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How do I become a partner?",
    answer:
      "Simply fill out the registration form on this page with your restaurant details. Our team will review your application and get back to you within 2–3 business days.",
  },
  {
    question: "Is there a cost to join the platform?",
    answer:
      "Joining Matskroll is free. We work on a simple revenue-sharing model — you only pay when you get customers through our platform.",
  },
  {
    question: "How do I upload my menu and food videos?",
    answer:
      "Once approved, you'll get access to your partner dashboard where you can upload videos, add menu items, set prices, and manage your restaurant profile.",
  },
  {
    question: "How do customers find my restaurant?",
    answer:
      "Customers browse Matskroll by location and food type. Your restaurant will appear in relevant searches, and your food videos will be shown to users who match your cuisine.",
  },
  {
    question: "How do I receive payments?",
    answer:
      "Payments are processed securely and transferred directly to your bank account on a weekly basis. You'll have full visibility through your partner dashboard.",
  },
];

export default function PartnerFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#181818] py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-ultrabold text-white uppercase text-center mb-20 leading-tight">
          Frequently Asked <br /> Questions
        </h2>

        <div>
          {faqs.map((faq, index) => (
            <div key={index}>
              <div className="border-t border-cream" />
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between py-6 text-left gap-8"
              >
                <span className="text-xl md:text-5xl font-ultrabold text-white uppercase">
                  {faq.question}
                </span>
                <span
                  className={`text-white text-3xl font-light flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-64 pb-6" : "max-h-0"
                }`}
              >
                <p className="text-cream text-lg font-poppins leading-relaxed max-w-2xl">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
          <div className="border-t border-cream" />
        </div>
      </div>
    </section>
  );
}
