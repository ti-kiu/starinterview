import type { Metadata } from "next";
import Link from "next/link";

const title = "Page not found";
const description = "The page you requested could not be found.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  robots: {
    index: false,
    googleBot: {
      index: false,
    },
  },
  alternates: null,
  openGraph: null,
  twitter: null,
};

export default function NotFound() {
  return (
    <div className="max-w-[720px] mx-auto px-5 py-20 text-center">
      <p className="text-sm font-semibold tracking-wide uppercase text-primary mb-3">
        404
      </p>
      <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
      <p className="text-neutral-600 mb-8">{description}</p>
      <Link
        href="/"
        className="inline-flex items-center justify-center bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-hover transition"
      >
        Back to home
      </Link>
    </div>
  );
}
