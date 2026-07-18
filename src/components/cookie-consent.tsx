"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const GA_MEASUREMENT_ID = "G-XXXXXXXXXX"; // placeholder, to be filled later
const CONSENT_KEY = "cookie-consent";

function loadGoogleAnalytics() {
  if (typeof window === "undefined" || !GA_MEASUREMENT_ID || GA_MEASUREMENT_ID === "G-XXXXXXXXXX") return;

  // Load gtag.js script
  const script = document.createElement("script");
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  script.async = true;
  document.head.appendChild(script);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const w = window as any;
  w.dataLayer = w.dataLayer || [];
  function gtag(...args: unknown[]) {
    w.dataLayer.push(args);
  }
  gtag("js", new Date());
  gtag("config", GA_MEASUREMENT_ID, { anonymize_ip: true });
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY);
    if (consent === "accepted") {
      loadGoogleAnalytics();
    } else if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(CONSENT_KEY, "accepted");
    setVisible(false);
    loadGoogleAnalytics();
  };

  const handleReject = () => {
    localStorage.setItem(CONSENT_KEY, "rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] bg-white border-t border-neutral-200 shadow-lg">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 py-4 flex flex-col sm:flex-row items-center gap-4">
        <p className="text-sm text-neutral-600 flex-1">
          We use analytics cookies to improve your experience. By clicking Accept, you agree to our use of cookies.
        </p>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={handleAccept}
            className="bg-primary text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-primary-hover transition"
          >
            Accept
          </button>
          <button
            onClick={handleReject}
            className="bg-neutral-100 text-neutral-700 px-5 py-2 rounded-lg text-sm font-medium hover:bg-neutral-200 transition"
          >
            Reject
          </button>
          <Link
            href="/privacy"
            className="text-sm text-primary hover:underline"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
}
