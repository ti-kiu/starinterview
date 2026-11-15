import type { Metadata } from "next";
import Link from "next/link";
import PracticeClient from "./PracticeClient";

const pageTitle = "Practice STAR Method Interviews with AI Feedback";
const pageDescription =
  "Speak or type a behavioral answer and get STAR scores: Situation, Task, Action, and Result from 1 to 10, plus an overall score from 1 to 100. Free, no signup.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "https://starinterview.org/practice",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://starinterview.org/practice",
    siteName: "StarInterview",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/og-image.png"],
  },
};

const practiceFaq = [
  {
    question: "Is practice free, and what is the quota?",
    answer:
      "You can start a practice session with no account and no credit card. The pricing page lists the free plan at 3 practices a day and Pro at 50 practices a day for $9.99 a month. A practice on this screen is one submitted answer: you speak or type it, and the tool returns the full score, the rewrite, and the 90+ example. This page does not publish a different daily number.",
  },
  {
    question: "What does the score measure?",
    answer:
      "Situation, Task, Action, and Result are each scored from 1 to 10. The overall score runs from 1 to 100 and is based on STAR completeness, clarity, specificity, and professionalism. You also get a short comment and one suggestion on each dimension, a longer feedback note, an improved rewrite of your own answer, and a separate example aimed at 90 or above.",
  },
  {
    question: "Do I need an account?",
    answer:
      "No. The practice form does not ask you to sign up, sign in, or enter a card before it scores an answer.",
  },
  {
    question: "Can I speak my answer instead of typing it?",
    answer:
      "Yes. Each question has a microphone button and a text box. Speech recognition uses the interview language you picked, when your browser supports it. Written questions and feedback are generated in Chinese when you select Chinese, and in English for the other languages on the list.",
  },
  {
    question: "How many questions are in one session?",
    answer:
      "Starting the interview requests a set of 10 questions for the position you entered. The list mixes behavioral questions, which are the ones a STAR answer fits, with technical and situational questions. You answer them one at a time and can end the session early to open the report.",
  },
  {
    question: "Where do I learn the STAR method itself?",
    answer:
      "The STAR method guide explains Situation, Task, Action, and Result with a worked example. The interview questions library lists prompts and sample answers by role and company. This page is for saying your own answer and getting a score.",
  },
];

const practiceFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: practiceFaq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function PracticePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: pageTitle,
            description: pageDescription,
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
            datePublished: "2026-07-08",
            dateModified: "2026-11-15",
            mainEntityOfPage: "https://starinterview.org/practice",
            image: "https://starinterview.org/og-image.png",
            speakable: {
              "@type": "SpeakableSpecification",
              cssSelector: ["h1", "h2", ".speakable"],
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(practiceFaqSchema) }}
      />

      <div className="bg-neutral-50">
        <header className="max-w-[760px] mx-auto px-4 md:px-6 pt-10 md:pt-14 pb-2">
          <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">
            AI practice
          </p>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Practice STAR Method Interviews with AI Feedback
          </h1>
          <p className="speakable text-lg text-neutral-600 leading-relaxed">
            Speak or type an answer, then read a score for the STAR shape of
            that answer. This page is the practice tool. It runs a short mock
            interview for a role you name, scores each answer you submit, and
            leaves the written lesson to the{" "}
            <Link href="/star-method" className="text-primary hover:underline font-medium">
              STAR method guide
            </Link>
            . Prompts and sample answers by role live in the{" "}
            <Link
              href="/interview-questions"
              className="text-primary hover:underline font-medium"
            >
              interview questions
            </Link>{" "}
            library.
          </p>
        </header>

        <PracticeClient />

        <div className="max-w-[760px] mx-auto px-4 md:px-6 pb-16 space-y-12">
          <section>
            <h2 className="text-2xl font-bold mb-3">How a practice session works</h2>
            <div className="space-y-4 text-neutral-700 leading-relaxed">
              <p>
                The form above is the whole setup. The position is required.
                If you paste a job description, that text is sent with the
                question request so the list is written for that role. The
                same form has a resume box, a difficulty choice (entry level,
                mid level, or senior level), and an interview language.
              </p>
              <p>
                The language list is English, Chinese, Japanese, Korean,
                Spanish, French, and German. That choice is what the
                microphone uses for speech recognition, when the browser
                supports it. Question text and the written feedback come back
                in Chinese when you select Chinese. For every other language
                they come back in English.
              </p>
              <p>
                Starting the interview requests a set of 10 questions. The
                set mixes behavioral questions, which are the ones a STAR
                answer fits, with technical and situational questions. You
                take them one at a time. Speak with the microphone or type in
                the box. The question card shows a running timer next to a
                two-minute mark. That mark is a length cue on the screen. It
                does not erase the answer when the clock passes it.
              </p>
              <p>
                When you ask for feedback, the score appears on the same
                card, with an improved rewrite of what you submitted and a
                90+ example you can open. Then you move to the next question,
                or you end the session and open the report. The report
                averages the overall score and the answer time across the
                questions you finished, shows a Situation, Task, Action, and
                Result breakdown, and lists each question with its feedback.
                From there you can print the page or start a new interview.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">What the score measures</h2>
            <div className="space-y-4 text-neutral-700 leading-relaxed">
              <p>
                Every submitted answer is scored with the same rubric the
                practice tool uses. Nothing on this page uses a different
                scale.
              </p>
              <ul className="space-y-3">
                <li>
                  <strong className="text-neutral-900">Situation, 1 to 10.</strong>{" "}
                  How well you described the context.
                </li>
                <li>
                  <strong className="text-neutral-900">Task, 1 to 10.</strong>{" "}
                  How clearly you explained your responsibility.
                </li>
                <li>
                  <strong className="text-neutral-900">Action, 1 to 10.</strong>{" "}
                  How specific the steps you personally took were.
                </li>
                <li>
                  <strong className="text-neutral-900">Result, 1 to 10.</strong>{" "}
                  Whether the outcome is concrete, including a measurable
                  result when you have one.
                </li>
                <li>
                  <strong className="text-neutral-900">Overall, 1 to 100.</strong>{" "}
                  STAR completeness, clarity, specificity, and professionalism,
                  shown on the card as a score out of 100.
                </li>
              </ul>
              <p>
                Under each dimension you get a short comment and one
                suggestion. Below the four scores you get a longer feedback
                note, an improved version rewritten from your own answer, and
                a separate example written to a 90+ standard for that
                question. The example is a model of structure. It is not a
                story to memorize and claim as yours.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">Free practice quota</h2>
            <div className="space-y-4 text-neutral-700 leading-relaxed">
              <p>
                You can run a session with no account and no credit card. The{" "}
                <Link href="/pricing" className="text-primary hover:underline font-medium">
                  pricing page
                </Link>{" "}
                lists the free plan at 3 practices a day, and lists Pro at 50
                practices a day for $9.99 a month. That is the allowance
                already published for the plans. This screen does not add a
                different daily cap.
              </p>
              <p>
                On this tool, one practice is one answer you submit. The
                response is the full score: four dimensions from 1 to 10, an
                overall score from 1 to 100, the per-dimension comments, the
                rewrite, and the 90+ example. Voice input and that full score
                are both on the practice screen above. The form does not put
                them behind a signup step.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Practice FAQ</h2>
            <div className="divide-y divide-neutral-200 border-y border-neutral-200">
              {practiceFaq.map((item) => (
                <details key={item.question} className="group py-4">
                  <summary className="flex items-center justify-between cursor-pointer font-medium text-neutral-900 list-none">
                    {item.question}
                    <span className="text-neutral-400 group-open:rotate-180 transition-transform ml-4">
                      ↓
                    </span>
                  </summary>
                  <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                    {item.question === "Where do I learn the STAR method itself?" ? (
                      <>
                        The{" "}
                        <Link href="/star-method" className="text-primary hover:underline font-medium">
                          STAR method guide
                        </Link>{" "}
                        explains Situation, Task, Action, and Result with a
                        worked example. The{" "}
                        <Link
                          href="/interview-questions"
                          className="text-primary hover:underline font-medium"
                        >
                          interview questions
                        </Link>{" "}
                        library lists prompts and sample answers by role and
                        company. This page is for saying your own answer and
                        getting a score.
                      </>
                    ) : (
                      item.answer
                    )}
                  </p>
                </details>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
