import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import Navbar from "@/components/navbar";
import CookieConsent from "@/components/cookie-consent";

export const metadata: Metadata = {
  title: "STAR Method Practice & Interview Answer Generator | Free",
  description:
    "Practice the STAR method with AI-powered feedback and generate strong interview answers for free. No signup required. Get hired faster with structured answers.",
  metadataBase: new URL("https://starinterview.org"),
  icons: {
    icon: "/favicon-32.png",
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://starinterview.org",
    siteName: "StarInterview",
    title: "STAR Method Practice & Interview Answer Generator | Free",
    description:
      "Practice the STAR method with AI-powered feedback and generate strong interview answers for free. No signup required.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "StarInterview - Practice STAR Method Interviews with AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "STAR Method Practice & Interview Answer Generator | Free",
    description:
      "Practice the STAR method with AI-powered feedback. Free, no signup.",
    images: ["/og-image.png"],
  },
  other: {
    "msvalidate.01": "8D5AE51845CFE08F58F54A68CFF76D57",
  },
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "StarInterview",
  url: "https://starinterview.org",
  description:
    "AI-powered STAR method interview practice tool. Get instant feedback on your behavioral interview answers.",
  applicationCategory: "EducationalApplication",
  operatingSystem: "Web Browser",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "STAR Method Scoring",
    "AI Answer Generator",
    "Voice Input Support",
    "7 Interview Languages",
    "300+ Practice Questions",
    "Post-Interview Analysis Report",
  ],
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "StarInterview",
  url: "https://starinterview.org",
  logo: "https://starinterview.org/favicon-32.png",
  sameAs: [],
};

function Footer() {
  return (
    <footer className="bg-neutral-100 text-neutral-700 mt-auto border-t border-neutral-200">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 font-bold text-xl mb-4 text-primary">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-white text-sm font-bold">★</span>
              StarInterview
            </div>
            <p className="text-neutral-500 text-sm">
              Practice STAR method interviews with AI — free, no signup, instant feedback.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Product</h3>
            <ul className="space-y-2 text-neutral-500 text-sm">
              <li><Link href="/practice" className="hover:text-primary transition">Practice</Link></li>
              <li><Link href="/generator" className="hover:text-primary transition">Answer Generator</Link></li>
              <li><Link href="/star-method" className="hover:text-primary transition">STAR Method Guide</Link></li>
              <li><Link href="/interview-questions" className="hover:text-primary transition">Interview Questions</Link></li>
              <li><Link href="/pricing" className="hover:text-primary transition">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Legal</h3>
            <ul className="space-y-2 text-neutral-500 text-sm">
              <li><Link href="/privacy" className="hover:text-primary transition">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-primary transition">Terms of Service</Link></li>
              <li><Link href="/cookie-policy" className="hover:text-primary transition">Cookie Policy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Contact</h3>
            <ul className="space-y-2 text-neutral-500 text-sm">
              <li><a href="mailto:hello@starinterview.org" className="hover:text-primary transition">hello@starinterview.org</a></li>
              <li><a href="mailto:support@starinterview.org" className="hover:text-primary transition">support@starinterview.org</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-neutral-200 mt-8 pt-6 text-neutral-400 text-sm text-center">
          © {new Date().getFullYear()} StarInterview. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <meta name="msvalidate.01" content="8D5AE51845CFE08F58F54A68CFF76D57" />
        <link rel="icon" type="image/png" href="/favicon-32.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="min-h-full flex flex-col">
        {/* Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />

        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieConsent />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-L7CZQ8T37C"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-L7CZQ8T37C');
            `,
          }}
        />
      </body>
    </html>
  );
}
