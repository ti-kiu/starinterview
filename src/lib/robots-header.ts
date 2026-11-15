import { getAllInterviewQuestionSlugs } from "@/data/interview-questions";
import { getAllScenarioSlugs } from "@/data/scenario-pages";

export const INDEX_FOLLOW = "index, follow";
export const NOINDEX = "noindex";

// Static app routes (src/app/**/page.tsx, excluding dynamic [slug] segments).
// src/lib/robots-header.test.ts compares this set to the filesystem so a new
// page cannot ship without a header decision.
export const STATIC_INDEXABLE_PATHS = [
  "/",
  "/amazon-interview",
  "/behavioral-interview",
  "/cookie-policy",
  "/generator",
  "/google-interview",
  "/how-to-answer-tell-me-about-yourself",
  "/interview-questions",
  "/interview-questions/nurse",
  "/mock-interview-practice",
  "/practice",
  "/pricing",
  "/privacy",
  "/star-method",
  "/terms",
] as const;

// Same sources as next.config.ts legacyRedirects. These respond 301, not 404.
const REDIRECT_PATHS = [
  "/software-engineer-interview",
  "/product-manager-interview",
  "/data-analyst-interview",
  "/marketing-manager-interview",
  "/project-manager-interview",
  "/leadership-interview-questions",
  "/conflict-resolution-interview",
  "/interview-answer-generator",
  "/star-method-practice",
  "/blog/behavioral-interview-questions-and-answers",
  "/blog/how-to-answer-tell-me-about-yourself",
  "/star-method-interview-questions",
  "/star-method-management",
  "/star-method-career-change",
  "/star-method-fresh-graduates",
  "/star-method-prep",
  "/ai-interview-coach",
] as const;

const staticIndexable = new Set<string>(STATIC_INDEXABLE_PATHS);
const redirectPaths = new Set<string>(REDIRECT_PATHS);
const interviewSlugs = new Set(getAllInterviewQuestionSlugs());
const scenarioSlugs = new Set(getAllScenarioSlugs());

function normalizePath(pathname: string): string {
  if (pathname.length > 1 && pathname.endsWith("/")) {
    return pathname.slice(0, -1);
  }
  return pathname;
}

function isKnownSlug(path: string): boolean {
  const interview = /^\/interview-questions\/([^/]+)$/.exec(path);
  if (interview) return interviewSlugs.has(interview[1]);
  const scenario = /^\/star-method-example\/([^/]+)$/.exec(path);
  if (scenario) return scenarioSlugs.has(scenario[1]);
  return false;
}

// Extensionless paths that are not a real page or a legacy redirect render
// not-found.tsx. Files, /api, and /_next keep the previous index header.
export function robotsTagForPathname(pathname: string): typeof INDEX_FOLLOW | typeof NOINDEX {
  const path = normalizePath(pathname);
  if (path.startsWith("/_next") || path.startsWith("/api")) return INDEX_FOLLOW;
  const last = path.split("/").pop() ?? "";
  if (last.includes(".")) return INDEX_FOLLOW;
  if (staticIndexable.has(path) || redirectPaths.has(path) || isKnownSlug(path)) {
    return INDEX_FOLLOW;
  }
  return NOINDEX;
}
