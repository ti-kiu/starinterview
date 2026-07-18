import Link from "next/link";

export const metadata = {
  title: "Terms of Service — StarInterview",
  description:
    "StarInterview's terms of service. Read our terms and conditions for using our AI interview practice platform.",
  alternates: {
    canonical: "https://starinterview.org/terms",
  },
};

export default function TermsPage() {
  return (
    <div className="max-w-[800px] mx-auto px-4 md:px-6 py-8 md:py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-2">Terms of Service</h1>
      <p className="text-sm text-neutral-400 mb-8">
        Last updated: July 2026
      </p>

      <div className="prose prose-neutral max-w-none space-y-8">
        <section>
          <h2 className="text-xl font-bold mb-3">1. Acceptance of Terms</h2>
          <p className="text-neutral-600 leading-relaxed">
            By accessing and using StarInterview (&quot;the Service&quot;), you
            accept and agree to be bound by these Terms of Service. If you do
            not agree to these terms, please do not use the Service.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">2. Description of Service</h2>
          <p className="text-neutral-600 leading-relaxed">
            StarInterview provides an AI-powered interview practice platform
            that helps users prepare for job interviews using the STAR method.
            The Service includes:
          </p>
          <ul className="list-disc list-inside text-neutral-600 space-y-2 ml-4 mt-3">
            <li>AI-generated interview questions and feedback</li>
            <li>STAR method practice tools</li>
            <li>Interview answer generation</li>
            <li>Practice history and progress tracking</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">3. User Responsibilities</h2>
          <p className="text-neutral-600 leading-relaxed">
            You agree to:
          </p>
          <ul className="list-disc list-inside text-neutral-600 space-y-2 ml-4 mt-3">
            <li>Use the Service for lawful purposes only</li>
            <li>Not attempt to reverse-engineer or exploit the Service</li>
            <li>Not use the Service to harm others or violate their rights</li>
            <li>Not use automated tools to access the Service without permission</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">4. Intellectual Property</h2>
          <p className="text-neutral-600 leading-relaxed">
            The Service and its original content, features, and functionality
            are owned by StarInterview and are protected by international
            copyright, trademark, patent, trade secret, and other intellectual
            property laws.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">5. AI-Generated Content</h2>
          <p className="text-neutral-600 leading-relaxed">
            The AI-generated interview answers and feedback are for practice
            purposes only. We do not guarantee that using our Service will
            result in job offers or interview success. Users should always
            personalize AI-generated answers with their own experiences.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">6. Disclaimer of Warranties</h2>
          <p className="text-neutral-600 leading-relaxed">
            THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot;
            WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DO
            NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, OR
            SECURE.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">7. Limitation of Liability</h2>
          <p className="text-neutral-600 leading-relaxed">
            IN NO EVENT SHALL STARINTERVIEW BE LIABLE FOR ANY INDIRECT,
            INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING
            OUT OF OR RELATED TO YOUR USE OF THE SERVICE.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">8. Privacy</h2>
          <p className="text-neutral-600 leading-relaxed">
            Your use of the Service is also governed by our{" "}
            <Link href="/privacy" className="text-primary hover:underline">
              Privacy Policy
            </Link>
            , which is incorporated into these Terms by reference.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">9. Changes to Terms</h2>
          <p className="text-neutral-600 leading-relaxed">
            We reserve the right to modify these Terms at any time. We will
            notify you of any changes by posting the new Terms on this page
            with an updated &quot;Last updated&quot; date.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">10. Contact Us</h2>
          <p className="text-neutral-600 leading-relaxed">
            If you have any questions about these Terms, please contact us:
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
          </div>
        </section>
      </div>
    </div>
  );
}
