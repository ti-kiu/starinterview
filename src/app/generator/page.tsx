import type { Metadata } from "next";
import GeneratorClient from "./GeneratorClient";

export const metadata: Metadata = {
  title: "AI Interview Answer Generator — Free STAR Method Answers",
  description:
    "Generate tailored interview answers using the STAR method. Enter your question and get instant, structured responses. Free, no signup required.",
  alternates: {
    canonical: "https://starinterview.org/generator",
  },
  openGraph: {
    title: "AI Interview Answer Generator — Free STAR Method Answers",
    description:
      "Generate tailored interview answers using the STAR method. Enter your question and get instant, structured responses. Free, no signup required.",
    url: "https://starinterview.org/generator",
    siteName: "StarInterview",
    locale: "en_US",
    type: "website",
  },
};

export default function GeneratorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "AI Interview Answer Generator — Free STAR Method Answers",
            description: "Generate tailored interview answers using the STAR method. Enter your question and get instant, structured responses.",
            author: { "@type": "Organization", name: "StarInterview", url: "https://starinterview.org" },
            publisher: { "@type": "Organization", name: "StarInterview", url: "https://starinterview.org", logo: { "@type": "ImageObject", url: "https://starinterview.org/favicon-32.png" } },
            datePublished: "2026-01-15",
            dateModified: "2026-07-25",
            mainEntityOfPage: "https://starinterview.org/generator",
            image: "https://starinterview.org/og-image.png",
            speakable: {
              "@type": "SpeakableSpecification",
              cssSelector: ["h1", "h2", ".speakable"],
            },
          }),
        }}
      />
      <GeneratorClient />
    </>
  );
}
