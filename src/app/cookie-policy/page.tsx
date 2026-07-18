import Link from "next/link";

export const metadata = {
  title: "Cookie Policy — StarInterview",
  description:
    "Learn how StarInterview uses cookies and similar technologies to improve your experience on our AI interview practice platform.",
  alternates: {
    canonical: "https://starinterview.org/cookie-policy",
  },
};

export default function CookiePolicyPage() {
  return (
    <div className="max-w-[800px] mx-auto px-4 md:px-6 py-8 md:py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-2">Cookie Policy</h1>
      <p className="text-sm text-neutral-400 mb-8">
        Last updated: July 2026
      </p>

      <div className="prose prose-neutral max-w-none space-y-8">
        <section>
          <h2 className="text-xl font-bold mb-3">1. What Are Cookies</h2>
          <p className="text-neutral-600 leading-relaxed">
            Cookies are small text files stored on your device when you visit a
            website. They help us provide you with a better experience by
            remembering your preferences and understanding how you use our
            Service.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">2. How We Use Cookies</h2>
          <p className="text-neutral-600 leading-relaxed mb-3">
            We use the following types of cookies:
          </p>
          
          <div className="space-y-4">
            <div className="bg-neutral-50 rounded-xl p-5 border border-neutral-200">
              <h3 className="font-bold text-neutral-800 mb-2">Essential Cookies</h3>
              <p className="text-neutral-600 text-sm">
                Required for the Service to function properly. These cannot be
                disabled.
              </p>
              <ul className="list-disc list-inside text-neutral-600 text-sm space-y-1 ml-4 mt-2">
                <li>Session management</li>
                <li>Security tokens</li>
                <li>Cookie consent preferences</li>
              </ul>
            </div>

            <div className="bg-neutral-50 rounded-xl p-5 border border-neutral-200">
              <h3 className="font-bold text-neutral-800 mb-2">Analytics Cookies</h3>
              <p className="text-neutral-600 text-sm">
                Help us understand how visitors interact with the Service.
              </p>
              <ul className="list-disc list-inside text-neutral-600 text-sm space-y-1 ml-4 mt-2">
                <li>Google Analytics (anonymized IP)</li>
                <li>Page view tracking</li>
                <li>Session duration</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">3. Third-Party Cookies</h2>
          <p className="text-neutral-600 leading-relaxed">
            We use Google Analytics, which sets its own cookies to track
            website usage. Google Analytics cookies are anonymized and do not
            contain personally identifiable information.
          </p>
          <p className="text-neutral-600 leading-relaxed mt-3">
            For more information about Google Analytics cookies, please visit{" "}
            <a
              href="https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Google&apos;s Cookie Usage Documentation
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">4. Managing Cookies</h2>
          <p className="text-neutral-600 leading-relaxed">
            You can control and manage cookies in several ways:
          </p>
          <ul className="list-disc list-inside text-neutral-600 space-y-2 ml-4 mt-3">
            <li>
              <strong>Browser Settings:</strong> Most browsers allow you to
              block or delete cookies. Check your browser&apos;s help section
              for instructions.
            </li>
            <li>
              <strong>Cookie Consent:</strong> Use our cookie consent banner to
              accept or reject non-essential cookies.
            </li>
            <li>
              <strong>Google Analytics Opt-Out:</strong> Install the{" "}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Google Analytics Opt-Out Browser Add-on
              </a>
              .
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">5. Your Consent</h2>
          <p className="text-neutral-600 leading-relaxed">
            By continuing to use our Service, you consent to our use of cookies
            as described in this policy. You can withdraw your consent at any
            time by clearing your browser cookies or using our cookie consent
            settings.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">6. Contact Us</h2>
          <p className="text-neutral-600 leading-relaxed">
            If you have questions about our use of cookies, please contact us:
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
          </div>
        </section>
      </div>
    </div>
  );
}
