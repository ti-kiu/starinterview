import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Pages that render indexable HTML. Unknown extensionless paths are the
// root not-found page, which is noindex. Keep this list aligned with
// src/app/**/page.tsx. Dynamic segments stay indexable for any slug because
// those routes still render the segment page (including its own robots meta).
const INDEXABLE_EXACT = new Set([
  "/",
  "/amazon-interview",
  "/behavioral-interview",
  "/cookie-policy",
  "/generator",
  "/google-interview",
  "/how-to-answer-tell-me-about-yourself",
  "/interview-questions",
  "/mock-interview-practice",
  "/practice",
  "/pricing",
  "/privacy",
  "/star-method",
  "/terms",
]);

const INDEXABLE_PREFIXES = ["/interview-questions/", "/star-method-example/"];

// Legacy paths redirect in next.config.ts. They are not 404s; leave their
// previous index header in place so this middleware does not change redirects.
const REDIRECT_EXACT = new Set([
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
]);

function normalizePath(pathname: string): string {
  if (pathname.length > 1 && pathname.endsWith("/")) {
    return pathname.slice(0, -1);
  }
  return pathname;
}

function isIndexableRequest(pathname: string): boolean {
  const path = normalizePath(pathname);
  if (INDEXABLE_EXACT.has(path) || REDIRECT_EXACT.has(path)) return true;
  return INDEXABLE_PREFIXES.some(
    (prefix) => path.startsWith(prefix) && path.length > prefix.length,
  );
}

// Extensionless paths that are not real routes render not-found.tsx.
// Files (sitemap, robots, images) and /api keep the previous index header.
function isNotFoundDocument(pathname: string): boolean {
  const path = normalizePath(pathname);
  if (path.startsWith("/_next") || path.startsWith("/api")) return false;
  const last = path.split("/").pop() ?? "";
  if (last.includes(".")) return false;
  return !isIndexableRequest(path);
}

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  response.headers.set(
    "X-Robots-Tag",
    isNotFoundDocument(request.nextUrl.pathname) ? "noindex" : "index, follow",
  );
  return response;
}

export const config = {
  matcher: "/:path*",
};
