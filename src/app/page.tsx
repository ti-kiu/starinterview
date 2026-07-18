import Link from "next/link";
import ClientDemo from "@/components/client-demo";
import HowItWorks from "@/components/HowItWorks";
import AIFeedbackShowcase from "@/components/AIFeedbackShowcase";

const faqItems = [
  {
    question: "Is this really free?",
    answer:
      "Yes. Practice STAR method answers and generate interview answers without creating an account or paying anything. No credit card required.",
  },
  {
    question: "What is the STAR method?",
    answer:
      "STAR stands for Situation, Task, Action, Result. It's a structured technique for answering behavioral interview questions by describing a specific situation, your task, the action you took, and the measurable result. It helps you give clear, compelling answers that interviewers can easily follow.",
  },
  {
    question: "How does the AI feedback work?",
    answer:
      "Our AI scores each component of your STAR answer on a scale of 1-10 and gives specific suggestions — like adding measurable results, clarifying your personal contribution, or strengthening the Action section. You get an overall score out of 100 with detailed improvement tips.",
  },
  {
    question: "Do I need to create an account?",
    answer:
      "No. Practice and generate answers instantly without signing up. No credit card, no friction. An optional free account lets you save history and track your progress over time.",
  },
  {
    question: "Can this help if English is not my first language?",
    answer:
      "Yes. The AI provides language clarity suggestions alongside STAR structure feedback. It is specifically designed for non-native English speakers preparing for interviews in English.",
  },
  {
    question: "How long should a STAR method answer be?",
    answer:
      "A strong STAR answer is typically 1-2 minutes when spoken, or about 150-250 words when written. The key is being specific and concise — include enough detail to paint a clear picture, but stay focused on the most impactful parts of your story.",
  },
  {
    question: "What types of interview questions does this work for?",
    answer:
      "StarInterview works best for behavioral interview questions — the kind that start with 'Tell me about a time when...' or 'Give me an example of...' These questions test how you handled real situations in the past. The tool also supports situational and competency-based questions.",
  },
];

const roles = [
  "Software Engineer",
  "Product Manager",
  "Data Analyst",
  "Marketing Manager",
  "Project Manager",
  "UX Designer",
  "Sales Representative",
  "Business Analyst",
  "Customer Service",
];

const testimonials = [
  {
    quote:
      "I went from fumbling through behavioral questions to getting offers at two Fortune 500 companies. The STAR feedback was a game-changer.",
    name: "Sarah K.",
    role: "Software Engineer",
    company: "now at Google",
    initials: "SK",
    color: "bg-blue-500",
  },
  {
    quote:
      "As a non-native English speaker, I always struggled with interviews. This tool helped me structure my answers and sound confident.",
    name: "Raj P.",
    role: "Data Analyst",
    company: "now at Amazon",
    initials: "RP",
    color: "bg-green-500",
  },
  {
    quote:
      "I practiced for 2 weeks before my PM interviews. The AI caught patterns I didn't see — like always forgetting to quantify results.",
    name: "Michelle T.",
    role: "Product Manager",
    company: "now at Stripe",
    initials: "MT",
    color: "bg-purple-500",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero — Warm white background */}
      <section
        className="text-neutral-900 pt-20 pb-28 md:pt-28 md:pb-36"
        style={{ background: "#FAF8F5" }}
      >
        <div className="max-w-[1100px] mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text content */}
            <div className="flex flex-col items-start gap-12">
              <div className="max-w-2xl">
                <p className="text-primary text-sm font-semibold tracking-wide uppercase mb-4">
                  Free Interview Prep Tool
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] mb-5 tracking-tight">
                  Practice STAR Interviews.
                  <br />
                  <span className="text-primary">Get Hired Faster.</span>
                </h1>
                <p className="text-lg text-neutral-500 mb-8 leading-relaxed max-w-lg">
                  Write your answer. Get instant AI feedback on structure, clarity,
                  and impact. No signup, no credit card.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/practice"
                    className="inline-flex items-center justify-center bg-primary text-white px-7 py-3.5 rounded-lg font-semibold hover:bg-primary-hover transition"
                  >
                    Start Practicing
                  </Link>
                  <Link
                    href="/generator"
                    className="inline-flex items-center justify-center bg-white text-neutral-800 border border-neutral-200 px-7 py-3.5 rounded-lg font-semibold hover:border-primary hover:text-primary transition"
                  >
                    Generate an Answer
                  </Link>
                </div>
                <p className="text-neutral-400 text-sm mt-5">
                  No account needed · Works on mobile · 100% free
                </p>
              </div>
            </div>
            
            {/* Right: AI Feedback Showcase */}
            <div className="flex justify-center lg:justify-end">
              <AIFeedbackShowcase />
            </div>
          </div>
          
          {/* Animated How It Works */}
          <div className="w-full mt-16">
            <HowItWorks />
          </div>
        </div>
      </section>

      {/* Social proof bar — with user count */}
      <section className="bg-neutral-100 border-b border-neutral-200 py-5">
        <div className="max-w-[1100px] mx-auto px-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-neutral-500">
          <span className="font-semibold text-primary">
            Trusted by 500+ job seekers
          </span>
          <span className="text-neutral-400">·</span>
          <span className="font-semibold text-neutral-700">Google</span>
          <span className="font-semibold text-neutral-700">Amazon</span>
          <span className="font-semibold text-neutral-700">Meta</span>
          <span className="font-semibold text-neutral-700">Microsoft</span>
          <span className="font-semibold text-neutral-700">Apple</span>
        </div>
      </section>

      {/* P0-1: Inline Interactive Demo */}
      <ClientDemo />

      {/* P0-2: Pain Point Copy */}
      <section className="py-16 md:py-20 bg-neutral-50">
        <div className="max-w-[1100px] mx-auto px-5">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
              It&apos;s Not Your Skills,{" "}
              <span className="text-primary">It&apos;s How You Answer</span>
            </h2>
            <p className="text-neutral-500 leading-relaxed">
              Most candidates walk into interviews unprepared — not because they
              lack skills, but because they never practiced how to present them.
            </p>
          </div>
          <div className="max-w-xl mx-auto">
            <ul className="space-y-4">
              {[
                "Turn weak answers into strong, structured STAR responses",
                "Replace hesitation with confidence",
                "Handle tough questions without freezing",
                "Be ready for the questions most candidates struggle with",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 shrink-0 w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span className="text-neutral-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* P0-3: Before / After Comparison */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[800px] mx-auto px-5">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
            See the difference
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Without */}
            <div className="rounded-2xl border-2 border-red-200 bg-red-50 p-6">
              <p className="text-xs font-bold uppercase tracking-wider text-red-500 mb-4">
                Without StarInterview
              </p>
              <ul className="space-y-4">
                {[
                  { label: "Unprepared", desc: "Rambling, unstructured answers that miss the point" },
                  { label: "Nervous", desc: "Freezing up when asked tough behavioral questions" },
                  { label: "Ghosted", desc: "No callbacks despite having the right experience" },
                ].map((item) => (
                  <li key={item.label} className="flex items-start gap-3">
                    <span className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-red-200 flex items-center justify-center text-red-600 text-xs font-bold">
                      ✕
                    </span>
                    <div>
                      <p className="font-semibold text-red-900">
                        {item.label}
                      </p>
                      <p className="text-sm text-red-700">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* With */}
            <div className="rounded-2xl border-2 border-green-200 bg-green-50 p-6">
              <p className="text-xs font-bold uppercase tracking-wider text-green-600 mb-4">
                With StarInterview
              </p>
              <ul className="space-y-4">
                {[
                  { label: "Organized", desc: "Structured STAR answers that hit every point" },
                  { label: "Confident", desc: "Ready for any question with practiced responses" },
                  { label: "Get Offers", desc: "Standing out from other candidates with clear stories" },
                ].map((item) => (
                  <li key={item.label} className="flex items-start gap-3">
                    <span className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-green-200 flex items-center justify-center text-green-700 text-xs font-bold">
                      ✓
                    </span>
                    <div>
                      <p className="font-semibold text-green-900">
                        {item.label}
                      </p>
                      <p className="text-sm text-green-700">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* P1-4: Role Quick Selection Cards */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-5">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">
              For Every Role
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Works for every type of interview
            </h2>
            <p className="text-neutral-500">
              Select your role and start practicing tailored questions.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {roles.map((role) => (
              <Link
                key={role}
                href={`/practice?role=${encodeURIComponent(role)}`}
                className="group flex items-center justify-between border border-neutral-200 rounded-xl px-5 py-4 hover:border-primary/30 hover:bg-primary-light/20 transition"
              >
                <span className="font-medium text-neutral-800 group-hover:text-primary transition">
                  {role}
                </span>
                <span className="text-neutral-400 group-hover:text-primary group-hover:translate-x-1 transition-all">
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* P1-7: Testimonials */}
      <section className="py-16 md:py-20 bg-neutral-50">
        <div className="max-w-[1100px] mx-auto px-5">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              What job seekers say
            </h2>
            <p className="text-neutral-500">
              Real stories from candidates who leveled up their interview game.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-neutral-200 p-6"
              >
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="text-yellow-400 text-sm">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-neutral-700 text-sm leading-relaxed mb-4">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-white text-sm font-bold shrink-0`}>
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-neutral-900">
                      {t.name}
                    </p>
                    <p className="text-xs text-neutral-500">
                      {t.role} · {t.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-neutral-400 mt-6">
            Real testimonials coming soon — these are representative examples.
          </p>
        </div>
      </section>

      {/* Features — asymmetric, not grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1100px] mx-auto px-5">
          <div className="max-w-xl mb-12">
            <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">
              Features
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Everything you need to prepare
            </h2>
            <p className="text-neutral-500">
              Built for real interview prep, not just generating answers.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "STAR Method Scoring",
                desc: "Every answer scored on Situation, Task, Action, and Result — not just a generic quality score.",
                tag: "Core",
                icon: "/images/icon-scoring.svg",
                alt: "STAR Method Scoring icon - structured interview answer evaluation",
              },
              {
                title: "Answer Generator",
                desc: "Describe your experience. Get a structured STAR answer you can customize and practice.",
                tag: "Generator",
                icon: "/images/icon-generator.svg",
                alt: "Answer Generator icon - AI-powered interview answer creation",
              },
              {
                title: "Improvement Suggestions",
                desc: "Not just what's wrong — exactly how to fix it. See a rewritten version of your answer.",
                tag: "Feedback",
                icon: "/images/icon-feedback.svg",
                alt: "Improvement Suggestions icon - detailed feedback on interview answers",
              },
              {
                title: "Multiple Question Types",
                desc: "Behavioral, technical, and situational questions. Practice for any interview format.",
                tag: "Practice",
                icon: "/images/icon-questions.svg",
                alt: "Multiple Question Types icon - behavioral, technical, situational questions",
              },
              {
                title: "Built for Non-Native Speakers",
                desc: "Language clarity feedback alongside STAR structure. Sound confident in English.",
                tag: "Language",
                icon: "/images/icon-language.svg",
                alt: "Language Support icon - interview practice in 7 languages",
              },
              {
                title: "No Account Required",
                desc: "Start practicing immediately. No signup, no credit card, no friction.",
                tag: "Free",
                icon: "/images/icon-free.svg",
                alt: "Free icon - no account required for interview practice",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="border border-neutral-200 rounded-xl p-5 hover:border-primary/30 transition"
              >
                <img
                  src={feature.icon}
                  alt={feature.alt}
                  width={48}
                  height={48}
                  className="mb-3"
                  loading="lazy"
                />
                <span className="text-[10px] font-bold text-primary bg-primary-light px-2 py-0.5 rounded mb-3 inline-block uppercase tracking-wider">
                  {feature.tag}
                </span>
                <h3 className="font-semibold mb-1.5">{feature.title}</h3>
                <p className="text-sm text-neutral-500">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — simple, not a full-width blue banner */}
      <section className="py-16 md:py-20">
        <div className="max-w-[1100px] mx-auto px-5">
          <div className="bg-primary rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Ready to practice?
              </h2>
              <p className="text-primary-light">
                Start with a free STAR method practice session. No signup
                needed.
              </p>
            </div>
            <Link
              href="/practice"
              className="shrink-0 inline-flex items-center justify-center bg-white text-primary px-7 py-3.5 rounded-lg font-semibold hover:bg-neutral-100 transition"
            >
              Start Now
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[700px] mx-auto px-5">
          <h2 className="text-2xl font-bold mb-8">Common questions</h2>
          <div className="space-y-0 divide-y divide-neutral-200">
            {faqItems.map((item, i) => (
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
          <p className="text-xs text-neutral-400 mt-6 text-center">
            Last updated: July 2026 · Content reviewed monthly for accuracy
          </p>
        </div>
      </section>
    </>
  );
}
