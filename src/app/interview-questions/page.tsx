import Link from "next/link";
import pages, { getInterviewPagesByType } from "@/data/interview-questions";

export const metadata = {
  title: "Interview Questions by Role, Company & Competency — STAR Method (2026)",
  description:
    "Browse interview questions by role, company, and competency. Each page includes STAR method sample answers and AI practice. Free, no signup.",
  alternates: {
    canonical: "https://starinterview.org/interview-questions",
  },
  openGraph: {
    title: "Interview Questions by Role, Company & Competency",
    description:
      "Browse interview questions by role, company, and competency with STAR method sample answers.",
    url: "https://starinterview.org/interview-questions",
    siteName: "StarInterview",
    locale: "en_US",
    type: "website",
  },
};

const typeLabels = {
  role: "By Role",
  company: "By Company",
  competency: "By Competency",
};

export default function InterviewQuestionsIndex() {
  const byRole = getInterviewPagesByType("role");
  const byCompany = getInterviewPagesByType("company");
  const byCompetency = getInterviewPagesByType("competency");

  return (
    <div className="bg-neutral-50 min-h-screen">
      <section className="pt-16 pb-8 md:pt-24 md:pb-12">
        <div className="max-w-[1100px] mx-auto px-5 text-center">
          <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">
            Interview Questions
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Interview Questions for Every Role, Company & Skill
          </h1>
          <p className="text-neutral-500 max-w-lg mx-auto">
            Browse behavioral interview questions with STAR method sample
            answers. Practice with AI feedback — free, no signup.
          </p>
        </div>
      </section>

      {[
        { label: "By Role", items: byRole },
        { label: "By Company", items: byCompany },
        { label: "By Competency", items: byCompetency },
      ].map((section) => (
        <section key={section.label} className="pb-12">
          <div className="max-w-[1100px] mx-auto px-5">
            <h2 className="text-xl font-bold mb-4">{section.label}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {section.items.map((page) => (
                <Link
                  key={page.slug}
                  href={`/interview-questions/${page.slug}`}
                  className="group bg-white border border-neutral-200 rounded-xl p-5 hover:border-primary/30 hover:shadow-sm transition"
                >
                  <h3 className="font-semibold text-neutral-800 group-hover:text-primary transition mb-1">
                    {page.slug
                      .split("-")
                      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                      .join(" ")}
                  </h3>
                  <p className="text-sm text-neutral-500">
                    {page.questions.length} questions with STAR answers
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="pb-16">
        <div className="max-w-[1100px] mx-auto px-5">
          <div className="bg-primary rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Ready to practice?
            </h2>
            <p className="text-primary-light mb-6">
              Get instant AI feedback on your STAR method answers.
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
    </div>
  );
}
