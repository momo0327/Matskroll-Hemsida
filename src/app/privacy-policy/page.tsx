import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#181818]">
      <Navbar variant="dark" />

      <main className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-ultrabold text-cream uppercase mb-12">
            Privacy Policy
          </h1>

          <div className="text-cream space-y-8 text-lg leading-relaxed">
            <p className="text-cream/80">
              <strong className="text-cream">Effective Date:</strong> February 22, 2026
            </p>

            <section>
              <h2 className="text-3xl font-ultrabold text-cream mb-4 uppercase">
                1. Introduction
              </h2>
              <p className="text-cream/80">
                Welcome to Matskroll. We are committed to protecting your privacy and ensuring
                the security of your personal information. This Privacy Policy explains how we
                collect, use, share, and protect your information when you use our food discovery
                platform that showcases video content of dishes from local restaurants.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-ultrabold text-cream mb-4 uppercase">
                2. Information We Collect
              </h2>

              <h3 className="text-xl font-bold text-cream mt-6 mb-3">
                2.1 Information You Provide
              </h3>
              <ul className="list-disc list-inside space-y-2 text-cream/80 ml-4">
                <li>Account information (name, email address, phone number)</li>
                <li>Profile preferences and dietary restrictions</li>
                <li>Restaurant reviews and ratings</li>
                <li>Payment information for orders</li>
                <li>Communications with customer support</li>
              </ul>

              <h3 className="text-xl font-bold text-cream mt-6 mb-3">
                2.2 Automatically Collected Information
              </h3>
              <ul className="list-disc list-inside space-y-2 text-cream/80 ml-4">
                <li>Location data to show nearby restaurants</li>
                <li>Device information (device type, operating system, unique identifiers)</li>
                <li>Usage data (videos viewed, search queries, browsing patterns)</li>
                <li>IP address and browser information</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>

              <h3 className="text-xl font-bold text-cream mt-6 mb-3">
                2.3 Information from Third Parties
              </h3>
              <ul className="list-disc list-inside space-y-2 text-cream/80 ml-4">
                <li>Social media profile information (if you connect your accounts)</li>
                <li>Restaurant partners' information about orders and reservations</li>
                <li>Payment processors' transaction confirmations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-ultrabold text-cream mb-4 uppercase">
                3. How We Use Your Information
              </h2>
              <ul className="list-disc list-inside space-y-2 text-cream/80 ml-4">
                <li>To provide personalized restaurant and dish recommendations</li>
                <li>To show you food videos from restaurants near your location</li>
                <li>To process orders and reservations</li>
                <li>To communicate with you about your account and our services</li>
                <li>To improve our app and develop new features</li>
                <li>To ensure platform security and prevent fraud</li>
                <li>To send promotional content (with your consent)</li>
                <li>To analyze user behavior and preferences for better service</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-ultrabold text-cream mb-4 uppercase">
                4. Information Sharing
              </h2>
              <p className="text-cream/80 mb-4">
                We do not sell your personal information. We may share your information with:
              </p>
              <ul className="list-disc list-inside space-y-2 text-cream/80 ml-4">
                <li>Restaurant partners to fulfill your orders and reservations</li>
                <li>Payment processors to handle transactions securely</li>
                <li>Service providers who help operate our platform</li>
                <li>Analytics partners to improve our services</li>
                <li>Law enforcement when required by law or to protect rights and safety</li>
                <li>Business partners in case of merger, acquisition, or sale of assets</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-ultrabold text-cream mb-4 uppercase">
                5. Location Data
              </h2>
              <p className="text-cream/80">
                Matskroll uses your location to show nearby restaurants and relevant food content.
                You can control location permissions through your device settings. Disabling location
                services may limit certain features of the app.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-ultrabold text-cream mb-4 uppercase">
                6. Cookies and Tracking
              </h2>
              <p className="text-cream/80">
                We use cookies and similar technologies to enhance your experience, remember your
                preferences, and analyze usage patterns. You can control cookie settings through
                your browser, but some features may not function properly if cookies are disabled.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-ultrabold text-cream mb-4 uppercase">
                7. Data Security
              </h2>
              <p className="text-cream/80">
                We implement industry-standard security measures to protect your information,
                including encryption, secure servers, and regular security audits. However, no
                method of transmission over the internet is 100% secure, and we cannot guarantee
                absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-ultrabold text-cream mb-4 uppercase">
                8. Your Rights
              </h2>
              <p className="text-cream/80 mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-cream/80 ml-4">
                <li>Access your personal information</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your account and data</li>
                <li>Opt-out of marketing communications</li>
                <li>Export your data in a portable format</li>
                <li>Object to certain data processing activities</li>
              </ul>
              <p className="text-cream/80 mt-4">
                To exercise these rights, contact us at hello@zenitdigital.se
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-ultrabold text-cream mb-4 uppercase">
                9. Children's Privacy
              </h2>
              <p className="text-cream/80">
                Matskroll is not intended for users under 13 years of age. We do not knowingly
                collect information from children. If we learn that we have collected information
                from a child under 13, we will promptly delete it.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-ultrabold text-cream mb-4 uppercase">
                10. Data Retention
              </h2>
              <p className="text-cream/80">
                We retain your personal information for as long as necessary to provide our services
                and comply with legal obligations. When you delete your account, we will remove your
                personal data within 30 days, except where retention is required by law.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-ultrabold text-cream mb-4 uppercase">
                11. International Data Transfers
              </h2>
              <p className="text-cream/80">
                Your information may be transferred to and processed in countries other than your
                country of residence. We ensure appropriate safeguards are in place to protect your
                information in accordance with this Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-ultrabold text-cream mb-4 uppercase">
                12. Changes to This Policy
              </h2>
              <p className="text-cream/80">
                We may update this Privacy Policy from time to time. We will notify you of
                significant changes by email or through the app. Your continued use of Matskroll
                after changes become effective constitutes acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-ultrabold text-cream mb-4 uppercase">
                13. Contact Us
              </h2>
              <p className="text-cream/80">
                If you have questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="mt-4 text-cream/80">
                <p><strong className="text-cream">Email:</strong> hello@zenitdigital.se</p>
                <p><strong className="text-cream">Phone:</strong> 072-336 43 84</p>
              </div>
            </section>

            <div className="border-t border-cream/20 pt-8 mt-12">
              <p className="text-cream/60 text-sm">
                By using Matskroll, you acknowledge that you have read and understood this
                Privacy Policy and agree to its terms.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
