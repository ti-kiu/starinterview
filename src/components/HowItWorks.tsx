"use client";

import { useState, useEffect } from "react";

const steps = [
  {
    num: "01",
    title: "Pick a question",
    desc: "Choose from common behavioral questions or paste your own.",
  },
  {
    num: "02",
    title: "Write your STAR answer",
    desc: "Describe the Situation, Task, Action, and Result from your experience.",
  },
  {
    num: "03",
    title: "Get AI feedback",
    desc: "See your score, what you did well, and exactly what to improve.",
  },
];

const scores = [
  { label: "Situation", score: 7, color: "bg-primary" },
  { label: "Task", score: 8, color: "bg-primary" },
  { label: "Action", score: 6, color: "bg-amber-500" },
  { label: "Result", score: 5, color: "bg-amber-500" },
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const [showScores, setShowScores] = useState(false);

  useEffect(() => {
    const stepInterval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 3);
    }, 2500);

    // Show scores after first cycle
    const scoreTimer = setTimeout(() => setShowScores(true), 1200);

    return () => {
      clearInterval(stepInterval);
      clearTimeout(scoreTimer);
    };
  }, []);

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[1100px] mx-auto px-5">
        <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-6 md:p-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">
                How it works
              </p>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                Write your answer.
                <br />
                Get scored in seconds.
              </h2>
              <div className="space-y-4">
                {steps.map((step, i) => (
                  <div
                    key={step.num}
                    className={`flex gap-4 p-3 rounded-xl transition-all duration-500 ${
                      activeStep === i
                        ? "bg-white shadow-md border border-primary/20 scale-[1.02]"
                        : "border border-transparent opacity-60"
                    }`}
                  >
                    <span
                      className={`text-xs font-bold rounded-md w-8 h-8 flex items-center justify-center shrink-0 mt-0.5 transition-all duration-500 ${
                        activeStep === i
                          ? "bg-primary text-white"
                          : "bg-primary-light text-primary"
                      }`}
                    >
                      {step.num}
                    </span>
                    <div>
                      <p className="font-semibold text-neutral-900 mb-0.5">
                        {step.title}
                      </p>
                      <p className="text-sm text-neutral-500">{step.desc}</p>
                    </div>
                    {activeStep === i && (
                      <span className="ml-auto text-primary animate-pulse">
                        ●
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
            {/* Animated feedback card */}
            <div className="bg-white rounded-xl border border-neutral-200 shadow-sm p-6">
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-lg transition-all duration-700 ${
                    showScores ? "bg-primary scale-100" : "bg-neutral-200 scale-90"
                  }`}
                >
                  {showScores ? "72" : "—"}
                </div>
                <div>
                  <p className="font-semibold text-sm">Overall Score</p>
                  <p className="text-xs text-neutral-400">
                    {showScores ? "out of 100 · Good" : "Analyzing..."}
                  </p>
                </div>
              </div>
              <div className="space-y-3 mb-4">
                {scores.map((item, i) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <span className="text-xs text-neutral-500 w-16">
                      {item.label}
                    </span>
                    <div className="flex-1 bg-neutral-100 rounded-full h-2.5">
                      <div
                        className={`${item.color} h-2.5 rounded-full transition-all duration-1000 ease-out`}
                        style={{
                          width: showScores ? `${item.score * 10}%` : "0%",
                          transitionDelay: `${i * 200}ms`,
                        }}
                      />
                    </div>
                    <span
                      className={`text-xs font-semibold w-6 text-right transition-all duration-500 ${
                        showScores
                          ? "text-neutral-700"
                          : "text-neutral-300"
                      }`}
                    >
                      {showScores ? item.score : "-"}
                    </span>
                  </div>
                ))}
              </div>
              <div
                className={`bg-neutral-50 rounded-lg p-3 text-xs transition-all duration-700 ${
                  showScores
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-2"
                }`}
              >
                <p className="font-semibold text-neutral-800 mb-1">
                  Suggestion
                </p>
                <p className="text-neutral-600">
                  Add measurable outcomes to your Result. Instead of
                  &quot;improved performance,&quot; try &quot;reduced load time
                  by 40%.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
