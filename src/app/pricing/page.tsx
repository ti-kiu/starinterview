import Link from "next/link";

export const metadata = {
  title: "Pricing — StarInterview",
  description:
    "StarInterview pricing plans. Start free with core features or upgrade to Pro for unlimited practice and advanced feedback.",
  alternates: {
    canonical: "https://starinterview.org/pricing",
  },
  openGraph: {
    title: "Pricing — StarInterview",
    description:
      "StarInterview pricing plans. Start free with core features or upgrade to Pro for unlimited practice and advanced feedback.",
    url: "https://starinterview.org/pricing",
    siteName: "StarInterview",
    locale: "en_US",
    type: "website",
  },
};

const pricingFaq = [
  {
    question: "Can I switch plans at any time?",
    answer:
      "Yes. Upgrade to Pro whenever you want — your billing cycle starts on the day you subscribe. Downgrade anytime and keep access until the end of your billing period.",
  },
  {
    question: "What happens when I hit the daily practice limit?",
    answer:
      "Free users get 3 practices per day. Once you hit the limit, you can still use the Answer Generator and read the STAR Guide — your practice resets at midnight. Pro users get 50 practices per day.",
  },
  {
    question: "Is there a free trial for Pro?",
    answer:
      "Not currently, but the Free plan gives you full access to core features with no time limit. Try it first — upgrade when you need more volume or advanced features.",
  },
];

export default function PricingPage() {
  return (
    <div className="bg-neutral-50 min-h-screen">
      {/* Header */}
      <section className="pt-16 pb-8 md:pt-24 md:pb-12">
        <div className="max-w-[1100px] mx-auto px-5 text-center">
          <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">
            Pricing
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, transparent pricing
          </h1>
          <p className="text-neutral-500 max-w-lg mx-auto">
            Start free. Upgrade when you need more practices and advanced
            features. No hidden fees, cancel anytime.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-16 md:pb-24">
        <div className="max-w-[900px] mx-auto px-5">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Free */}
            <div className="bg-white rounded-2xl border border-neutral-200 p-6 md:p-8">
              <p className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">
                Free
              </p>
              <p className="text-4xl font-bold mb-1">
                $0
              </p>
              <p className="text-sm text-neutral-500 mb-6">
                Free forever · No credit card
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "3 practices per day",
                  "Basic STAR scoring",
                  "Text input only",
                  "1 job title",
                  "Answer generator",
                  "STAR method guide",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-neutral-700"
                  >
                    <span className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-500 text-xs font-bold">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/practice"
                className="block w-full text-center border border-neutral-300 text-neutral-800 px-6 py-3 rounded-xl font-semibold hover:bg-neutral-50 transition"
              >
                Get Started Free
              </Link>
            </div>

            {/* Pro */}
            <div className="bg-white rounded-2xl border-2 border-primary p-6 md:p-8 relative">
              <div className="absolute -top-3.5 left-6 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Popular
              </div>
              <p className="text-xs font-bold uppercase tracking-wider text-primary mb-2">
                Pro
              </p>
              <p className="text-4xl font-bold mb-1">
                $9.99
                <span className="text-lg font-normal text-neutral-500">
                  /month
                </span>
              </p>
              <p className="text-sm text-neutral-500 mb-6">
                Billed monthly · Cancel anytime
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "50 practices per day",
                  "Detailed scoring + improvement tips",
                  "Voice input",
                  "All job titles",
                  "Progress tracking",
                  "Priority AI response",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-neutral-700"
                  >
                    <span className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-primary-light flex items-center justify-center text-primary text-xs font-bold">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/practice"
                className="block w-full text-center bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-hover transition"
              >
                Start Pro Trial
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-white border-t border-neutral-200">
        <div className="max-w-[700px] mx-auto px-5">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Pricing FAQ
          </h2>
          <div className="space-y-0 divide-y divide-neutral-200">
            {pricingFaq.map((item, i) => (
              <details key={i} className="group py-4">
                <summary className="flex items-center justify-between cursor-pointer font-medium text-neutral-900 list-none">
                  {item.question}
                  <span className="text-neutral-400 group-open:rotate-180 transition-transform ml-4">
                    ↓
                  </span>
                </summary>
                <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 md:py-20">
        <div className="max-w-[1100px] mx-auto px-5">
          <div className="bg-neutral-900 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Start practicing for free
              </h2>
              <p className="text-neutral-400">
                No signup, no credit card. Just pick a question and go.
              </p>
            </div>
            <Link
              href="/practice"
              className="shrink-0 inline-flex items-center justify-center bg-white text-neutral-900 px-7 py-3.5 rounded-lg font-semibold hover:bg-neutral-100 transition"
            >
              Start Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
