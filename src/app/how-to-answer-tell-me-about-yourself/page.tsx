import Link from "next/link";

export const metadata = {
  title: 'How to Answer "Tell Me About Yourself" — Examples & Tips',
  description:
    'Learn how to answer the "Tell me about yourself" interview question with proven frameworks and examples. Practice with AI feedback for free.',
  alternates: {
    canonical: "https://starinterview.org/how-to-answer-tell-me-about-yourself",
  },
  openGraph: {
    title: 'How to Answer "Tell Me About Yourself" — Examples & Tips',
    description:
      'Learn how to answer the "Tell me about yourself" interview question with proven frameworks and examples. Practice with AI feedback for free.',
    url: "https://starinterview.org/how-to-answer-tell-me-about-yourself",
    siteName: "StarInterview",
    locale: "en_US",
    type: "website",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long should my answer be?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Keep your answer to 60-90 seconds. This gives you enough time to cover your background without rambling. Practice with a timer to find the right pace.",
      },
    },
    {
      "@type": "Question",
      name: "Should I talk about my personal life?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Keep it professional. Brief personal details are fine if relevant, but focus on your career journey, key achievements, and why you're excited about this role.",
      },
    },
    {
      "@type": "Question",
      name: "What if I'm a recent graduate with little experience?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Focus on relevant projects, internships, coursework, and transferable skills. Highlight what you've learned and how it applies to the role.",
      },
    },
    {
      "@type": "Question",
      name: "Is this question really that important?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Research shows interviewers form their first impression within the first 90 seconds. A strong opening answer sets the tone for the entire interview.",
      },
    },
  ],
};

export default function TellMeAboutYourselfPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-[1200px] mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="max-w-3xl mx-auto">
          {/* Hero */}
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            How to Answer &quot;Tell Me About Yourself&quot;
          </h1>
          <p className="text-lg text-neutral-600 mb-10">
            The most common interview question — and the one most people get
            wrong. Learn the proven framework to craft a compelling answer that
            sets you apart.
          </p>

          {/* Why It Matters */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">
              Why This Question Matters
            </h2>
            <p className="text-neutral-600 mb-4">
              &quot;Tell me about yourself&quot; is usually the first question
              in any interview. It&apos;s not just small talk — it&apos;s your
              chance to set the narrative for the entire conversation.
            </p>
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5">
              <p className="text-neutral-700 font-medium">
                ⚠️ Research shows interviewers form their first impression
                within 90 seconds. Your answer to this question shapes how they
                evaluate everything else you say.
              </p>
            </div>
          </section>

          {/* The Framework */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">
              The Present-Past-Future Framework
            </h2>
            <p className="text-neutral-600 mb-6">
              The best answers follow a simple three-part structure:
            </p>
            <div className="space-y-4">
              <div className="bg-white rounded-xl border border-neutral-200 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-500 text-white flex items-center justify-center font-bold">
                    1
                  </div>
                  <h3 className="text-lg font-bold">Present</h3>
                </div>
                <p className="text-neutral-600">
                  Start with your current role and what you&apos;re doing now.
                  Keep it to 2-3 sentences.
                </p>
                <p className="text-neutral-500 text-sm mt-2 italic">
                  &quot;I&apos;m currently a Senior Product Manager at Tech Co,
                  where I lead a team of 5 building our mobile app that serves
                  2M users.&quot;
                </p>
              </div>

              <div className="bg-white rounded-xl border border-neutral-200 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-green-500 text-white flex items-center justify-center font-bold">
                    2
                  </div>
                  <h3 className="text-lg font-bold">Past</h3>
                </div>
                <p className="text-neutral-600">
                  Briefly mention relevant past experience that qualifies you
                  for this role. Focus on 1-2 key achievements.
                </p>
                <p className="text-neutral-500 text-sm mt-2 italic">
                  &quot;Before that, I spent 3 years at Startup XYZ where I
                  grew the user base from 10K to 500K by launching our
                  referral program.&quot;
                </p>
              </div>

              <div className="bg-white rounded-xl border border-neutral-200 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-purple-500 text-white flex items-center justify-center font-bold">
                    3
                  </div>
                  <h3 className="text-lg font-bold">Future</h3>
                </div>
                <p className="text-neutral-600">
                  Connect your background to this specific role. Show why
                  you&apos;re excited and what you want to contribute.
                </p>
                <p className="text-neutral-500 text-sm mt-2 italic">
                  &quot;I&apos;m excited about this role because I want to apply
                  my growth experience to a larger platform and help millions
                  of users solve real problems.&quot;
                </p>
              </div>
            </div>
          </section>

          {/* Full Example */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">
              Complete Example Answer
            </h2>
            <div className="bg-neutral-50 rounded-xl p-6 border border-neutral-200">
              <p className="text-neutral-700 leading-relaxed mb-4">
                &quot;I&apos;m currently a Senior Product Manager at Tech Co,
                where I lead a team of 5 building our mobile app that serves
                2M monthly active users. Over the past two years, I&apos;ve
                shipped 3 major features that increased user retention by
                40%.
              </p>
              <p className="text-neutral-700 leading-relaxed mb-4">
                Before Tech Co, I spent 3 years at Startup XYZ where I was
                the first PM hire. I grew the user base from 10K to 500K by
                launching our referral program and optimizing the onboarding
                flow. That experience taught me how to move fast with limited
                resources.
              </p>
              <p className="text-neutral-700 leading-relaxed">
                I&apos;m excited about this role because I want to bring my
                growth experience to a larger platform. Your company&apos;s
                mission to make financial tools accessible really resonates
                with me, and I&apos;d love to help scale your user base while
                maintaining the quality experience you&apos;re known for.&quot;
              </p>
            </div>
            <p className="text-neutral-500 text-sm mt-3">
              ⏱️ This answer takes approximately 75 seconds to deliver.
            </p>
          </section>

          {/* Common Mistakes */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">
              Common Mistakes to Avoid
            </h2>
            <div className="space-y-4">
              {[
                {
                  mistake: "Reciting your entire resume",
                  fix: "Pick 2-3 relevant highlights. Save the details for follow-up questions.",
                },
                {
                  mistake: "Being too personal",
                  fix: "Keep it professional. 'I love hiking' doesn't help unless it's relevant.",
                },
                {
                  mistake: "Not connecting to the role",
                  fix: "Always end by explaining why you're excited about THIS specific position.",
                },
                {
                  mistake: "Going over 2 minutes",
                  fix: "Practice with a timer. 60-90 seconds is the sweet spot.",
                },
                {
                  mistake: "Starting with 'I was born in...'",
                  fix: "Start with your professional life, not your childhood.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl border border-neutral-200 p-5"
                >
                  <p className="font-semibold text-red-600 mb-1">
                    ❌ {item.mistake}
                  </p>
                  <p className="text-neutral-600 text-sm">✅ {item.fix}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="mb-12 bg-primary/5 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-3">
              Practice Your Answer with AI
            </h2>
            <p className="text-neutral-600 mb-6">
              Record your answer and get instant feedback on structure, clarity,
              and impact. Free, no signup required.
            </p>
            <Link
              href="/practice"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition"
            >
              Practice Now →
            </Link>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-2xl font-bold mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqSchema.mainEntity.map((faq, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl border border-neutral-200 p-5"
                >
                  <h3 className="font-bold mb-2">{faq.name}</h3>
                  <p className="text-neutral-600 text-sm">
                    {faq.acceptedAnswer.text}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
