import Link from "next/link";

export const metadata = {
  title: "STAR Method Guide — How to Answer Behavioral Interview Questions",
  description:
    "Learn how to use the STAR method (Situation, Task, Action, Result) to answer behavioral interview questions. Examples, tips, common mistakes, and a free AI practice tool included.",
  alternates: {
    canonical: "https://starinterview.org/star-method",
  },
};

export default function StarMethodPage() {
  return (
    <div className="max-w-[1200px] mx-auto px-4 md:px-6 py-8 md:py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          The STAR Method: How to Answer Behavioral Interview Questions
        </h1>
        <p className="text-lg text-neutral-600 mb-10">
          The STAR method is the most effective way to answer behavioral interview questions. It helps you tell clear, structured stories from your experience that interviewers love.
        </p>

        {/* What is STAR */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">What Is the STAR Method?</h2>
          <p className="text-neutral-600 mb-6">
            STAR is an acronym that stands for four key components of a strong interview answer:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { letter: "S", label: "Situation", desc: "Set the scene. When and where did this happen?", color: "bg-blue-500" },
              { letter: "T", label: "Task", desc: "What was your responsibility or challenge?", color: "bg-green-500" },
              { letter: "A", label: "Action", desc: "What specific steps did YOU take?", color: "bg-yellow-500" },
              { letter: "R", label: "Result", desc: "What was the outcome? Use numbers when possible.", color: "bg-purple-500" },
            ].map((item) => (
              <div key={item.letter} className="bg-white rounded-xl border border-neutral-200 p-5 flex gap-4">
                <div className={`flex-shrink-0 w-12 h-12 rounded-xl ${item.color} text-white flex items-center justify-center font-bold text-xl`}>
                  {item.letter}
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{item.label}</h3>
                  <p className="text-neutral-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Example */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">STAR Method Example — Step by Step</h2>
          <div className="bg-neutral-50 rounded-2xl p-6 md:p-8">
            <p className="font-medium text-neutral-700 mb-4 italic">
              &ldquo;Tell me about a time you had to deal with a difficult team member.&rdquo;
            </p>
            <div className="space-y-4">
              <div>
                <span className="inline-block bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs font-bold mb-1">SITUATION</span>
                <p className="text-neutral-700 text-sm">
                  In my previous role as a marketing intern at Acme Inc., I was part of a five-person team launching a new product campaign. One team member consistently missed deadlines and didn&apos;t communicate about delays.
                </p>
              </div>
              <div>
                <span className="inline-block bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs font-bold mb-1">TASK</span>
                <p className="text-neutral-700 text-sm">
                  I needed to ensure we hit our launch date without creating conflict within the team.
                </p>
              </div>
              <div>
                <span className="inline-block bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded text-xs font-bold mb-1">ACTION</span>
                <p className="text-neutral-700 text-sm">
                  I scheduled a private one-on-one with the team member to understand what was going on. It turned out they were overwhelmed with another project. I proposed we redistribute two of their tasks and set up a shared deadline tracker so everyone could see progress transparently.
                </p>
              </div>
              <div>
                <span className="inline-block bg-purple-100 text-purple-700 px-2 py-0.5 rounded text-xs font-bold mb-1">RESULT</span>
                <p className="text-neutral-700 text-sm">
                  The team member got back on track, and we launched the campaign on time. Our manager noted the improved team communication, and I was asked to lead the next project.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Common Mistakes to Avoid</h2>
          <ul className="space-y-3">
            {[
              { mistake: "Being too vague", tip: "\"I worked on a project\" doesn't tell the interviewer anything." },
              { mistake: "Focusing on \"we\" instead of \"I\"", tip: "They want to know YOUR contribution." },
              { mistake: "Skipping the Result", tip: "Always close with an outcome, even if it's partial." },
              { mistake: "Rambling", tip: "Keep your total answer under 2 minutes." },
              { mistake: "Not preparing in advance", tip: "Have 5-8 STAR stories ready before your interview." },
            ].map((item) => (
              <li key={item.mistake} className="flex items-start gap-3 bg-white border border-neutral-200 rounded-lg p-4">
                <span className="text-red-500 mt-0.5">✕</span>
                <div>
                  <span className="font-semibold">{item.mistake}</span> — {item.tip}
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Tips for non-native speakers */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Tips for Non-Native English Speakers</h2>
          <ul className="space-y-3">
            {[
              "Use simple, direct language. You don't need fancy vocabulary to give a great STAR answer.",
              "Practice out loud. Writing is different from speaking — rehearse your answers verbally.",
              "Use our AI feedback tool. It highlights unnatural phrasing and suggests clearer alternatives.",
              "Learn key transitions. Phrases like \"The situation was...\", \"My role was...\", \"I decided to...\", \"As a result...\" make your answer flow naturally.",
            ].map((tip, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-accent mt-0.5">✓</span>
                <span className="text-neutral-700">{tip}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* CTA */}
        <section className="bg-primary rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-3">Practice Your STAR Answers</h2>
          <p className="text-primary-light mb-6">
            Ready to put the STAR method into practice? Use our free AI-powered tool to build and score your answers before your interview.
          </p>
          <Link
            href="/practice"
            className="inline-flex items-center justify-center bg-white text-primary px-8 py-3 rounded-xl font-semibold hover:bg-neutral-100 transition"
          >
            Start Practicing →
          </Link>
        </section>

        {/* FAQ — GEO/AEO optimized */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-6">STAR Method FAQ</h2>
          <div className="space-y-0 divide-y divide-neutral-200">
            {[
              {
                q: "What does STAR stand for in interviews?",
                a: "STAR stands for Situation, Task, Action, and Result. It's a structured framework for answering behavioral interview questions by walking through a specific example from your experience in four clear steps.",
              },
              {
                q: "How long should a STAR method answer be?",
                a: "A strong STAR answer is 1-2 minutes when spoken aloud, or about 150-250 words in writing. The Situation and Task should take about 30 seconds, the Action about 45-60 seconds, and the Result about 15-30 seconds.",
              },
              {
                q: "What types of questions should I use STAR for?",
                a: "Use STAR for behavioral questions — those that start with 'Tell me about a time when...', 'Give me an example of...', or 'Describe a situation where...'. These questions ask about past experiences rather than hypothetical scenarios.",
              },
              {
                q: "Can I use the same STAR example for multiple questions?",
                a: "Yes, but adapt the emphasis. A story about leading a project can answer questions about leadership, conflict resolution, or time management — just highlight different aspects of the same experience for each question.",
              },
              {
                q: "What if I don't have work experience for a STAR answer?",
                a: "You can use examples from school projects, volunteer work, extracurricular activities, or personal projects. The key is showing how you handled a real situation — the context matters less than the skills you demonstrate.",
              },
            ].map((item, i) => (
              <details key={i} className="group py-4">
                <summary className="flex items-center justify-between cursor-pointer font-medium text-neutral-900 list-none">
                  {item.q}
                  <span className="text-neutral-400 group-open:rotate-180 transition-transform ml-4">
                    ↓
                  </span>
                </summary>
                <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
          <p className="text-xs text-neutral-400 mt-6 text-center">
            Last updated: July 2026 · Content reviewed monthly for accuracy
          </p>
        </section>

        {/* Article Schema for GEO/AEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: "The STAR Method: How to Answer Behavioral Interview Questions",
              description: "Complete guide to the STAR method with examples, common mistakes, and tips for non-native English speakers.",
              author: { "@type": "Organization", name: "StarInterview", url: "https://starinterview.org" },
              publisher: { "@type": "Organization", name: "StarInterview", url: "https://starinterview.org", logo: { "@type": "ImageObject", url: "https://starinterview.org/favicon.ico" } },
              datePublished: "2026-01-15",
              dateModified: "2026-07-09",
              mainEntityOfPage: "https://starinterview.org/star-method",
              image: "https://starinterview.org/og-image.png",
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                { "@type": "Question", name: "What does STAR stand for in interviews?", acceptedAnswer: { "@type": "Answer", text: "STAR stands for Situation, Task, Action, and Result. It's a structured framework for answering behavioral interview questions by walking through a specific example from your experience in four clear steps." } },
                { "@type": "Question", name: "How long should a STAR method answer be?", acceptedAnswer: { "@type": "Answer", text: "A strong STAR answer is 1-2 minutes when spoken aloud, or about 150-250 words in writing. The Situation and Task should take about 30 seconds, the Action about 45-60 seconds, and the Result about 15-30 seconds." } },
                { "@type": "Question", name: "What types of questions should I use STAR for?", acceptedAnswer: { "@type": "Answer", text: "Use STAR for behavioral questions — those that start with 'Tell me about a time when...', 'Give me an example of...', or 'Describe a situation where...'. These questions ask about past experiences rather than hypothetical scenarios." } },
                { "@type": "Question", name: "Can I use the same STAR example for multiple questions?", acceptedAnswer: { "@type": "Answer", text: "Yes, but adapt the emphasis. A story about leading a project can answer questions about leadership, conflict resolution, or time management — just highlight different aspects of the same experience for each question." } },
                { "@type": "Question", name: "What if I don't have work experience for a STAR answer?", acceptedAnswer: { "@type": "Answer", text: "You can use examples from school projects, volunteer work, extracurricular activities, or personal projects. The key is showing how you handled a real situation — the context matters less than the skills you demonstrate." } },
              ],
            }),
          }}
        />
      </div>
    </div>
  );
}
