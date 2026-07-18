import type { Metadata } from "next";
import PracticeClient from "./PracticeClient";

export const metadata: Metadata = {
  title: "Practice STAR Method Interviews — Free AI Feedback",
  description:
    "Practice behavioral interview questions with AI-powered STAR method feedback. Type or speak your answer and get instant scoring. Free, no signup required.",
  alternates: {
    canonical: "https://starinterview.org/practice",
  },
  openGraph: {
    title: "Practice STAR Method Interviews — Free AI Feedback",
    description:
      "Practice behavioral interview questions with AI-powered STAR method feedback. Type or speak your answer and get instant scoring. Free, no signup required.",
    url: "https://starinterview.org/practice",
    siteName: "StarInterview",
    locale: "en_US",
    type: "website",
  },
};

export default function PracticePage() {
  return <PracticeClient />;
}
