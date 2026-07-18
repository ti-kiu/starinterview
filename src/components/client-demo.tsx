"use client";

import { useState } from "react";

export default function ClientDemo() {
  const [jobTitle, setJobTitle] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (!jobTitle.trim() || !question.trim()) {
      setError("Please fill in both fields.");
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
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-[1100px] mx-auto px-5">
        {/* 4-Step Process */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { num: "1", title: "Enter Question", desc: "Paste the interview question" },
            { num: "2", title: "Describe Experience", desc: "Tell us what happened" },
            { num: "3", title: "Get STAR Answer", desc: "AI builds your story" },
            { num: "4", title: "Practice", desc: "Rehearse with AI scoring" },
          ].map((step) => (
            <div key={step.num} className="text-center">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold mb-2">
                {step.num}
              </div>
              <h3 className="font-semibold text-sm mb-1">{step.title}</h3>
              <p className="text-neutral-500 text-xs">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Input Form */}
        <div className="max-w-2xl mx-auto bg-neutral-50 rounded-2xl border border-neutral-200 p-6 md:p-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Use AI to Generate Structured Interview Answers
            </h2>
            <p className="text-neutral-500 text-sm">
              Describe your situation and our AI will generate a complete, structured STAR answer you can review, customize, and practice.
            </p>
          </div>

          {/* Job Title */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-neutral-700 mb-1">
              Job Title
            </label>
            <input
              type="text"
              value={jobTitle}
              onChange={(e) => {
                setJobTitle(e.target.value);
                setError("");
              }}
              placeholder="e.g. Product Manager, Software Engineer, Marketing Assistant"
              className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
            />
          </div>

          {/* Question */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-neutral-700 mb-1">
              Interview Question
            </label>
            <textarea
              value={question}
              onChange={(e) => {
                setQuestion(e.target.value);
                setError("");
              }}
              placeholder='e.g. "Tell me about a time you had to deal with a difficult team member."'
              rows={3}
              className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-y"
            />
          </div>

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full bg-primary text-white px-8 py-3 rounded-xl font-semibold hover:bg-primary-hover transition disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-primary/25"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <svg
                  className="animate-spin w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  />
                </svg>
                Generating your answer...
              </span>
            ) : (
              "Generate My Answer"
            )}
          </button>

          {error && (
            <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
              {error}
            </div>
          )}

          {/* Generated Answer */}
          {answer && (
            <div className="mt-6">
              <div className="bg-white rounded-xl border border-neutral-200 p-5">
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <span className="text-primary">✦</span>
                  Your STAR Answer
                </h3>
                <div className="text-neutral-700 text-sm whitespace-pre-wrap leading-relaxed">
                  {answer}
                </div>
              </div>
              <div className="text-center pt-4">
                <a
                  href="/generator"
                  className="text-primary font-medium hover:underline text-sm"
                >
                  Want to customize? Try the full generator →
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
