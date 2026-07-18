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
  return <GeneratorClient />;
}
