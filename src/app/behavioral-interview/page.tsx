import Link from "next/link";

export const metadata = {
  title: "Behavioral Interview Questions & Practice — Free AI Coach",
  description:
    "Master behavioral interview questions with AI-powered practice. Get instant feedback on your STAR method answers. Free, no signup required.",
  alternates: {
    canonical: "https://starinterview.org/behavioral-interview",
  },
  openGraph: {
    title: "Behavioral Interview Questions & Practice — Free AI Coach",
    description:
      "Master behavioral interview questions with AI-powered practice. Get instant feedback on your STAR method answers. Free, no signup required.",
    url: "https://starinterview.org/behavioral-interview",
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
      name: "What are behavioral interview questions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Behavioral interview questions ask about past experiences to predict future performance. They typically start with 'Tell me about a time when...' or 'Give me an example of...' and require specific examples from your work history.",
      },
    },
    {
      "@type": "Question",
      name: "How many behavioral questions should I prepare for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Prepare 8-12 STAR stories that can be adapted to different questions. Focus on stories that demonstrate leadership, teamwork, problem-solving, conflict resolution, and achievement.",
      },
    },
    {
      "@type": "Question",
      name: "What is the best way to answer behavioral questions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Use the STAR method: Situation (set the scene), Task (your responsibility), Action (what you did), Result (outcome with metrics). Keep answers to 1-2 minutes and focus on YOUR contributions, not the team's.",
      },
    },
    {
      "@type": "Question",
      name: "Can I practice behavioral questions with AI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. StarInterview provides AI-powered practice for behavioral questions. You can type or speak your answer and get instant feedback on STAR structure, clarity, and impact.",
      },
    },
  ],
};

const behavioralQuestions = [
  {
    category: "Leadership",
    icon: "👔",
    questions: [
      "Tell me about a time you led a team through a difficult project.",
      "Describe a situation where you had to motivate others.",
      "Give an example of when you had to make an unpopular decision.",
    ],
  },
  {
    category: "Teamwork",
    icon: "🤝",
    questions: [
      "Tell me about a time you worked with a difficult colleague.",
      "Describe a situation where you had to collaborate with multiple teams.",
      "Give an example of when you helped a team member improve.",
    ],
  },
  {
    category: "Problem-Solving",
    icon: "🧩",
    questions: [
      "Tell me about a complex problem you solved at work.",
      "Describe a time you had to think outside the box.",
      "Give an example of when you identified and fixed a process issue.",
    ],
  },
  {
    category: "Conflict Resolution",
    icon: "🕊️",
    questions: [
      "Tell me about a time you resolved a conflict with a coworker.",
      "Describe a situation where you disagreed with your manager.",
      "Give an example of when you turned a negative situation positive.",
    ],
  },
  {
    category: "Achievement",
    icon: "🏆",
    questions: [
      "Tell me about your greatest professional achievement.",
      "Describe a time you exceeded expectations.",
      "Give an example of when you delivered results under pressure.",
    ],
  },
];

export default function BehavioralInterviewPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Behavioral Interview Questions & Practice Guide",
            description: "Master behavioral interview questions with AI-powered STAR method practice. Common questions by category with examples.",
            author: { "@type": "Organization", name: "StarInterview", url: "https://starinterview.org" },
            publisher: { "@type": "Organization", name: "StarInterview", url: "https://starinterview.org", logo: { "@type": "ImageObject", url: "https://starinterview.org/favicon-32.png" } },
            datePublished: "2026-01-15",
            dateModified: "2026-07-25",
            mainEntityOfPage: "https://starinterview.org/behavioral-interview",
            image: "https://starinterview.org/og-image.png",
            speakable: {
              "@type": "SpeakableSpecification",
              cssSelector: ["h1", "h2", ".speakable"],
            },
          }),
        }}
      />

      <div className="max-w-[1200px] mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="max-w-3xl mx-auto">
          {/* Hero */}
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Behavioral Interview Questions & Practice
          </h1>
          <p className="text-lg text-neutral-600 mb-10">
            Behavioral questions are the #1 reason candidates fail interviews.
            Learn how to answer them with the STAR method and practice with AI
            feedback — free, no signup.
          </p>

          {/* What Are Behavioral Questions */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">
              What Are Behavioral Interview Questions?
            </h2>
            <p className="text-neutral-600 mb-4">
              Behavioral interview questions ask about your past experiences to
              predict how you&apos;ll perform in the future. They typically
              start with phrases like:
            </p>
            <ul className="list-disc list-inside text-neutral-600 space-y-2 ml-4 mb-6">
              <li>&quot;Tell me about a time when...&quot;</li>
              <li>&quot;Give me an example of...&quot;</li>
              <li>&quot;Describe a situation where...&quot;</li>
              <li>&quot;How did you handle...&quot;</li>
            </ul>
            <p className="text-neutral-600">
              According to LinkedIn, 73% of hiring managers use behavioral
              questions to assess candidates. The key to answering them well is
              using the{" "}
              <Link
                href="/star-method"
                className="text-primary hover:underline"
              >
                STAR method
              </Link>{" "}
              to structure your response.
            </p>
          </section>

          {/* Common Questions by Category */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">
              Common Behavioral Interview Questions
            </h2>
            <div className="space-y-6">
              {behavioralQuestions.map((category) => (
                <div
                  key={category.category}
                  className="bg-white rounded-xl border border-neutral-200 p-6"
                >
                  <h3 className="text-lg font-bold mb-3">
                    {category.icon} {category.category}
                  </h3>
                  <ul className="space-y-2">
                    {category.questions.map((q, i) => (
                      <li key={i} className="text-neutral-600 flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        {q}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* How to Answer */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">
              How to Answer Behavioral Questions
            </h2>
            <div className="bg-neutral-50 rounded-xl p-6 border border-neutral-200">
              <p className="text-neutral-600 mb-4">
                Use the STAR method to structure every answer:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    letter: "S",
                    label: "Situation",
                    desc: "Set the scene in 20-30 seconds.",
                  },
                  {
                    letter: "T",
                    label: "Task",
                    desc: "Explain your role and responsibility.",
                  },
                  {
                    letter: "A",
                    label: "Action",
                    desc: "Detail YOUR specific steps (60-90 seconds).",
                  },
                  {
                    letter: "R",
                    label: "Result",
                    desc: "Share outcomes with metrics (30-40 seconds).",
                  },
                ].map((item) => (
                  <div key={item.letter} className="flex gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary text-white flex items-center justify-center font-bold">
                      {item.letter}
                    </div>
                    <div>
                      <h4 className="font-semibold">{item.label}</h4>
                      <p className="text-neutral-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Common Mistakes */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">
              Common Mistakes to Avoid
            </h2>
            <div className="space-y-4">
              {[
                {
                  mistake: "Being too vague",
                  fix: 'Instead of "I improved sales," say "I increased sales by 25% in Q3 by implementing a new CRM workflow."',
                },
                {
                  mistake: "Focusing on the team, not yourself",
                  fix: 'Use "I" statements. "I coordinated" not "We worked together."',
                },
                {
                  mistake: "Rambling for more than 2 minutes",
                  fix: "Practice keeping answers to 1-2 minutes. Cut unnecessary details.",
                },
                {
                  mistake: "Not quantifying results",
                  fix: "Always include numbers: percentage improvement, time saved, revenue generated.",
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
              Practice Behavioral Questions with AI
            </h2>
            <p className="text-neutral-600 mb-6">
              Get instant feedback on your STAR structure, clarity, and impact.
              Free, no signup required.
            </p>
            <Link
              href="/practice"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition"
            >
              Start Practicing Now →
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
