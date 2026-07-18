import Link from "next/link";

export const metadata = {
  title: "Privacy Policy — StarInterview",
  description:
    "StarInterview's privacy policy. Learn how we collect, use, and protect your personal information.",
  alternates: {
    canonical: "https://starinterview.org/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <div className="max-w-[800px] mx-auto px-4 md:px-6 py-8 md:py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-2">Privacy Policy</h1>
      <p className="text-sm text-neutral-400 mb-8">
        Last updated: July 2026
      </p>

      <div className="prose prose-neutral max-w-none space-y-8">
        <section>
          <h2 className="text-xl font-bold mb-3">1. Introduction</h2>
          <p className="text-neutral-600 leading-relaxed">
            StarInterview (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;)
            is committed to protecting your privacy. This Privacy Policy
            explains how we collect, use, and safeguard your information when
            you visit our website at{" "}
            <Link href="/" className="text-primary hover:underline">
              starinterview.org
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">
            2. Information We Collect
          </h2>
          <p className="text-neutral-600 leading-relaxed mb-3">
            We collect minimal personal information:
          </p>
          <ul className="list-disc list-inside text-neutral-600 space-y-2 ml-4">
            <li>
              <strong>Usage Data:</strong> Anonymous analytics data (pages
              visited, session duration, device type) via Google Analytics.
            </li>
            <li>
              <strong>Interview Answers:</strong> Text you enter for AI
              feedback is processed in real-time and{" "}
              <strong>not stored</strong> on our servers.
            </li>
            <li>
              <strong>Cookies:</strong> We use essential cookies for
              functionality and analytics cookies to improve our service. You
              can manage cookie preferences via our cookie consent banner.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">
            3. How We Use Your Information
          </h2>
          <ul className="list-disc list-inside text-neutral-600 space-y-2 ml-4">
            <li>To provide and improve our interview practice service</li>
            <li>To analyze usage patterns and optimize user experience</li>
            <li>To maintain the security and reliability of our platform</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">4. Third-Party Services</h2>
          <p className="text-neutral-600 leading-relaxed">
            We use the following third-party services:
          </p>
          <ul className="list-disc list-inside text-neutral-600 space-y-2 ml-4 mt-3">
            <li>
              <strong>Google Analytics</strong> — Web analytics (anonymized IP)
            </li>
            <li>
              <strong>Cloudflare</strong> — CDN, security, and hosting
            </li>
            <li>
              <strong>DashScope (Alibaba Cloud)</strong> — AI model for answer
              feedback and generation
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">5. Data Security</h2>
          <p className="text-neutral-600 leading-relaxed">
            We implement industry-standard security measures including HTTPS
            encryption, Cloudflare DDoS protection, and minimal data
            collection. Interview answers are processed in-memory and are not
            persisted after your session ends.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">6. Your Rights</h2>
          <p className="text-neutral-600 leading-relaxed">
            Under GDPR and CCPA, you have the right to:
          </p>
          <ul className="list-disc list-inside text-neutral-600 space-y-2 ml-4 mt-3">
            <li>Access the personal data we hold about you</li>
            <li>Request deletion of your personal data</li>
            <li>Opt out of analytics tracking</li>
            <li>Withdraw consent at any time</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">
            7. Changes to This Policy
          </h2>
          <p className="text-neutral-600 leading-relaxed">
            We may update this Privacy Policy from time to time. We will
            notify you of any changes by posting the new policy on this page
            with an updated &quot;Last updated&quot; date.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">8. Contact Us</h2>
          <p className="text-neutral-600 leading-relaxed">
            If you have any questions about this Privacy Policy or our data
            practices, please contact us:
          </p>
          <div className="mt-4 bg-neutral-50 rounded-xl p-5 border border-neutral-200">
            <p className="text-neutral-700 mb-2">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:hello@starinterview.org"
                className="text-primary hover:underline"
              >
                hello@starinterview.org
              </a>
            </p>
            <p className="text-neutral-700 mb-2">
              <strong>Support:</strong>{" "}
              <a
                href="mailto:support@starinterview.org"
                className="text-primary hover:underline"
              >
                support@starinterview.org
              </a>
            </p>
            <p className="text-neutral-500 text-sm mt-3">
              We aim to respond within 48 hours.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
