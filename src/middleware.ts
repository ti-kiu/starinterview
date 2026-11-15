import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { robotsTagForPathname } from "@/lib/robots-header";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  response.headers.set("X-Robots-Tag", robotsTagForPathname(request.nextUrl.pathname));
  return response;
}

export const config = {
  matcher: "/:path*",
};
