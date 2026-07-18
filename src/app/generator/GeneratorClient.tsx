"use client";

import { useState } from "react";
import Link from "next/link";

export default function GeneratorPage() {
  const [jobTitle, setJobTitle] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGenerate = async () => {
    if (!jobTitle.trim() || !question.trim()) {
      setError("Please fill in both the job title and interview question.");
      return;
    }
    setLoading(true);
    setError("");
    setAnswer("");

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ jobTitle, question }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to generate answer");
      }

      const data = await res.json();
      setAnswer(data.answer);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-[1200px] mx-auto px-4 md:px-6 py-8 md:py-12">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <h1 className="text-2xl md:text-4xl font-bold mb-3">
          Generate Structured Interview Answers with AI
        </h1>
        <p className="text-neutral-600 mb-8">
          Not sure how to frame your experience for an interview? Describe your situation and our AI will generate a complete, structured STAR method answer you can review, customize, and practice.
        </p>

        {/* How it works */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-8">
          {[
            { step: "1", title: "Enter Question", desc: "Paste the interview question" },
            { step: "2", title: "Describe Experience", desc: "Tell us what happened" },
            { step: "3", title: "Get STAR Answer", desc: "AI structures your story" },
            { step: "4", title: "Practice", desc: "Rehearse with AI scoring" },
          ].map((item) => (
            <div key={item.step} className="text-center p-4 rounded-xl bg-neutral-50">
              <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-sm font-bold mb-2">
                {item.step}
              </div>
              <p className="font-semibold text-sm">{item.title}</p>
              <p className="text-xs text-neutral-500">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl border border-neutral-200 p-6 md:p-8 mb-6">
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                Job Title
              </label>
              <input
                type="text"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
                placeholder="e.g. Product Manager, Software Engineer, Marketing Associate"
                className="w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                Interview Question
              </label>
              <textarea
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder='e.g. "Tell me about a time you had to deal with a difficult team member."'
                rows={3}
                className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-y"
              />
            </div>

            <button
              onClick={handleGenerate}
              disabled={loading}
              className="w-full bg-primary text-white px-8 py-3 rounded-xl font-semibold hover:bg-primary-hover transition disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-primary/25"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Generating...
                </span>
              ) : (
                "Generate My Answer"
              )}
            </button>
          </div>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
            {error}
          </div>
        )}

        {/* Generated Answer */}
        {answer && (
          <div className="space-y-6">
            {/* Success State */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-center gap-3">
              <span className="text-green-600 text-xl">✓</span>
              <p className="text-green-700 text-sm font-medium">Answer generated successfully! Review and customize it with your own experience.</p>
            </div>

            <div className="bg-white rounded-2xl border border-neutral-200 p-6 md:p-8">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="text-accent">✨</span> Your Generated STAR Answer
              </h2>
              <div className="text-neutral-700 whitespace-pre-wrap leading-relaxed">
                {answer}
              </div>
              <div className="mt-6 pt-4 border-t border-neutral-200 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(answer);
                  }}
                  className="flex-1 bg-neutral-100 text-neutral-700 px-4 py-2.5 rounded-lg font-medium hover:bg-neutral-200 transition text-sm"
                >
                  📋 Copy Answer
                </button>
                <Link
                  href="/practice"
                  className="flex-1 bg-primary text-white px-4 py-2.5 rounded-lg font-medium hover:bg-primary-hover transition text-sm text-center"
                >
                  Practice This Answer →
                </Link>
              </div>
            </div>

            {/* Example Section */}
            <div className="bg-neutral-50 rounded-2xl p-6 md:p-8">
              <h3 className="font-semibold mb-3">💡 Tips for using your generated answer:</h3>
              <ul className="space-y-2 text-neutral-600 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  Personalize it with your real details and voice
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  Add specific numbers and measurable outcomes
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  Practice saying it out loud — aim for 2 minutes
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  Use the Practice page to get AI feedback on your version
                </li>
              </ul>
            </div>

            <p className="text-xs text-neutral-400 text-center pt-2">
              This answer is generated by AI for practice purposes only. Customize it with your own experience before using it in a real interview.
            </p>
          </div>
        )}

        {/* FAQ */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                q: "Can I edit the generated answer?",
                a: "Yes. The generated answer is a starting point. We strongly recommend personalizing it with your own details and voice before practicing.",
              },
              {
                q: "Does the generator use AI?",
                a: "Yes, we use AI to structure and polish your description into a STAR format. The content comes from your experience — we just organize and strengthen it.",
              },
              {
                q: "Can I generate answers in other languages?",
                a: "Currently the generator works in English only, optimized for US interview standards.",
              },
              {
                q: "Is there a limit on how many answers I can generate?",
                a: "You can generate up to 10 answers per day on the free plan. This prevents abuse while giving most users more than enough capacity.",
              },
            ].map((item, i) => (
              <details
                key={i}
                className="group bg-white border border-neutral-200 rounded-xl overflow-hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer px-6 py-4 font-semibold text-neutral-900 hover:bg-neutral-50 transition list-none">
                  {item.q}
                  <span className="ml-4 text-neutral-400 group-open:rotate-180 transition-transform">▾</span>
                </summary>
                <div className="px-6 pb-4 text-neutral-600">{item.a}</div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
