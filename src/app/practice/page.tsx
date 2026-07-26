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
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Practice STAR Method Interviews — Free AI Feedback",
            description: "Practice behavioral interview questions with AI-powered STAR method feedback. Type or speak your answer and get instant scoring.",
            author: { "@type": "Organization", name: "StarInterview", url: "https://starinterview.org" },
            publisher: { "@type": "Organization", name: "StarInterview", url: "https://starinterview.org", logo: { "@type": "ImageObject", url: "https://starinterview.org/favicon-32.png" } },
            datePublished: "2026-01-15",
            dateModified: "2026-07-25",
            mainEntityOfPage: "https://starinterview.org/practice",
            image: "https://starinterview.org/og-image.png",
            speakable: {
              "@type": "SpeakableSpecification",
              cssSelector: ["h1", "h2", ".speakable"],
            },
          }),
        }}
      />
      <PracticeClient />
    </>
  );
}
