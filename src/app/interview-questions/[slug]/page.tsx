import Link from "next/link";
import type { Metadata } from "next";
import {
  getInterviewQuestionPage,
  getAllInterviewQuestionSlugs,
} from "@/data/interview-questions";

export function generateStaticParams() {
  return getAllInterviewQuestionSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  return params.then(({ slug }) => {
    const page = getInterviewQuestionPage(slug);
    if (!page) {
      return { title: "Not Found" };
    }
    return {
      title: page.title,
      description: page.metaDescription,
      alternates: {
        canonical: `https://starinterview.org/interview-questions/${slug}`,
      },
      openGraph: {
        title: page.title,
        description: page.metaDescription,
        url: `https://starinterview.org/interview-questions/${slug}`,
        siteName: "StarInterview",
        locale: "en_US",
        type: "article",
      },
    };
  });
}

export default async function InterviewQuestionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getInterviewQuestionPage(slug);

  if (!page) {
    return (
      <div className="max-w-[800px] mx-auto px-5 py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
        <p className="text-neutral-500 mb-8">
          This interview questions page doesn't exist.
        </p>
        <Link
          href="/interview-questions"
          className="text-primary font-medium hover:underline"
        >
          Browse all interview questions →
        </Link>
      </div>
    );
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: page.h1,
    description: page.metaDescription,
    author: {
      "@type": "Organization",
      name: "StarInterview",
      url: "https://starinterview.org",
    },
    publisher: {
      "@type": "Organization",
      name: "StarInterview",
      url: "https://starinterview.org",
      logo: {
        "@type": "ImageObject",
        url: "https://starinterview.org/favicon-32.png",
      },
    },
    datePublished: "2026-07-26",
    dateModified: "2026-07-26",
    mainEntityOfPage: `https://starinterview.org/interview-questions/${slug}`,
    image: "https://starinterview.org/og-image.png",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "h2", ".speakable"],
    },
  };

  const typeLabels = {
    role: "By Role",
    company: "By Company",
    competency: "By Competency",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="bg-neutral-50 min-h-screen">
        {/* Hero */}
        <section className="pt-16 pb-8 md:pt-24 md:pb-12">
          <div className="max-w-[800px] mx-auto px-5">
            <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">
              {typeLabels[page.type]}
            </p>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{page.h1}</h1>
            <p className="text-lg text-neutral-600 leading-relaxed">
              {page.intro}
            </p>
          </div>
        </section>

        {/* Why Interviewers Ask This */}
        <section className="pb-12">
          <div className="max-w-[800px] mx-auto px-5">
            <div className="bg-white rounded-2xl border border-neutral-200 p-6 md:p-8">
              <h2 className="text-xl font-bold mb-4">
                Why Interviewers Ask These Questions
              </h2>
              <ul className="space-y-3">
                {page.whyAsked.map((reason, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-bold">
                      {i + 1}
                    </span>
                    <span className="text-neutral-700">{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Questions & STAR Answers */}
        <section className="pb-12">
          <div className="max-w-[800px] mx-auto px-5">
            <h2 className="text-2xl font-bold mb-8">
              {page.questions.length} Interview Questions with STAR Answers
            </h2>
            <div className="space-y-8">
              {page.questions.map((q, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl border border-neutral-200 p-6 md:p-8"
                >
                  <div className="flex items-start gap-3 mb-6">
                    <span className="shrink-0 w-8 h-8 rounded-lg bg-primary text-white text-sm font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                    <h3 className="text-lg font-bold">{q.question}</h3>
                  </div>

                  {/* STAR Answer */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    {[
                      {
                        label: "Situation",
                        color: "bg-blue-500",
                        text: q.starExample.situation,
                      },
                      {
                        label: "Task",
                        color: "bg-green-500",
                        text: q.starExample.task,
                      },
                      {
                        label: "Action",
                        color: "bg-amber-500",
                        text: q.starExample.action,
                      },
                      {
                        label: "Result",
                        color: "bg-purple-500",
                        text: q.starExample.result,
                      },
                    ].map((star) => (
                      <div key={star.label} className="bg-neutral-50 rounded-xl p-4">
                        <span
                          className={`${star.color} text-white text-xs font-bold px-2 py-1 rounded mb-2 inline-block`}
                        >
                          {star.label}
                        </span>
                        <p className="text-sm text-neutral-700 leading-relaxed mt-2">
                          {star.text}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Tips */}
                  {q.tips.length > 0 && (
                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                      <p className="text-xs font-semibold text-amber-800 mb-2">
                        💡 Tips for this answer
                      </p>
                      <ul className="space-y-1">
                        {q.tips.map((tip, j) => (
                          <li
                            key={j}
                            className="text-sm text-amber-700 flex items-start gap-2"
                          >
                            <span>•</span>
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="pb-12">
          <div className="max-w-[800px] mx-auto px-5">
            <div className="bg-red-50 border border-red-200 rounded-2xl p-6 md:p-8">
              <h2 className="text-xl font-bold text-red-900 mb-4">
                Common Mistakes to Avoid
              </h2>
              <ul className="space-y-3">
                {page.commonMistakes.map((mistake, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-red-200 flex items-center justify-center text-red-600 text-xs font-bold">
                      ✕
                    </span>
                    <span className="text-red-800 text-sm">{mistake}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="pb-12">
          <div className="max-w-[800px] mx-auto px-5">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-0 divide-y divide-neutral-200 bg-white rounded-2xl border border-neutral-200 px-6">
              {page.faqs.map((faq, i) => (
                <details key={i} className="group py-4">
                  <summary className="flex items-center justify-between cursor-pointer font-medium text-neutral-900 list-none">
                    {faq.question}
                    <span className="text-neutral-400 group-open:rotate-180 transition-transform ml-4">
                      ↓
                    </span>
                  </summary>
                  <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="pb-16">
          <div className="max-w-[800px] mx-auto px-5">
            <div className="bg-primary rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Practice these questions with AI
              </h2>
              <p className="text-primary-light mb-6">
                Get instant feedback on your STAR method answers. Free, no signup.
              </p>
              <Link
                href="/practice"
                className="inline-flex items-center justify-center bg-white text-primary px-8 py-3.5 rounded-lg font-semibold hover:bg-neutral-100 transition"
              >
                Start Practicing →
              </Link>
            </div>
          </div>
        </section>

        {/* Related Pages */}
        <section className="pb-16">
          <div className="max-w-[800px] mx-auto px-5">
            <h2 className="text-lg font-bold mb-4">Related Interview Questions</h2>
            <div className="flex flex-wrap gap-2">
              {getAllInterviewQuestionSlugs()
                .filter((s) => s !== slug)
                .slice(0, 6)
                .map((s) => (
                  <Link
                    key={s}
                    href={`/interview-questions/${s}`}
                    className="px-4 py-2 bg-white border border-neutral-200 rounded-lg text-sm font-medium text-neutral-700 hover:border-primary hover:text-primary transition"
                  >
                    {s
                      .split("-")
                      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                      .join(" ")}
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
