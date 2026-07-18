import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Add SEO headers
  response.headers.set("X-Robots-Tag", "index, follow");

  return response;
}

export const config = {
  matcher: "/:path*",
};
