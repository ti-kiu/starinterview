import type { NextConfig } from "next";

// Retired URLs that should permanently move to a live page.
// statusCode 301 is required: `permanent: true` emits 308, not 301.
//
// These run inside the @cloudflare/next-on-pages worker (Vercel build-output
// routes). public/_redirects would not: _routes.json includes /* (only
// /_next/static/* is excluded), and Cloudflare Pages does not apply
// _redirects to requests served by a Pages Function.
const legacyRedirects: { source: string; destination: string }[] = [
  {
    source: "/software-engineer-interview",
    destination: "/interview-questions/software-engineer",
  },
  {
    source: "/product-manager-interview",
    destination: "/interview-questions/product-manager",
  },
  {
    source: "/data-analyst-interview",
    destination: "/interview-questions/data-analyst",
  },
  {
    source: "/marketing-manager-interview",
    destination: "/interview-questions/marketing-manager",
  },
  {
    source: "/project-manager-interview",
    destination: "/interview-questions/project-manager",
  },
  {
    source: "/leadership-interview-questions",
    destination: "/interview-questions/leadership",
  },
  {
    source: "/conflict-resolution-interview",
    destination: "/interview-questions/conflict-resolution",
  },
  {
    source: "/interview-answer-generator",
    destination: "/generator",
  },
  {
    source: "/star-method-practice",
    destination: "/practice",
  },
  {
    source: "/blog/behavioral-interview-questions-and-answers",
    destination: "/interview-questions/behavioral-interview-questions",
  },
  {
    source: "/blog/how-to-answer-tell-me-about-yourself",
    destination: "/how-to-answer-tell-me-about-yourself",
  },
  {
    source: "/star-method-interview-questions",
    destination: "/interview-questions/star-method-guide",
  },
  {
    source: "/star-method-management",
    destination: "/star-method",
  },
  {
    source: "/star-method-career-change",
    destination: "/star-method",
  },
  {
    source: "/star-method-fresh-graduates",
    destination: "/star-method",
  },
  {
    source: "/star-method-prep",
    destination: "/star-method",
  },
  {
    source: "/ai-interview-coach",
    destination: "/practice",
  },
];

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return legacyRedirects.map((redirect) => ({
      ...redirect,
      statusCode: 301,
    }));
  },
};

export default nextConfig;
