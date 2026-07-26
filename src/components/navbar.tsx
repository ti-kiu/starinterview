"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-neutral-200">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-white text-sm font-bold">★</span>
          StarInterview
        </Link>
        
        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/practice" className="text-neutral-600 hover:text-primary transition font-medium">
            Practice
          </Link>
          <Link href="/generator" className="text-neutral-600 hover:text-primary transition font-medium">
            Generator
          </Link>
          <Link href="/star-method" className="text-neutral-600 hover:text-primary transition font-medium">
            STAR Guide
          </Link>
          <Link href="/interview-questions" className="text-neutral-600 hover:text-primary transition font-medium">
            Questions
          </Link>
          <Link href="/pricing" className="text-neutral-600 hover:text-primary transition font-medium">
            Pricing
          </Link>
          <Link
            href="/practice"
            className="bg-primary text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-hover transition"
          >
            Start Free
          </Link>
        </div>

        {/* Hamburger button */}
        <button
          className="md:hidden p-2 text-neutral-600 hover:text-primary"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-t border-neutral-200 bg-white">
          <div className="px-4 py-3 space-y-2">
            <Link 
              href="/practice" 
              className="block py-2 text-neutral-600 hover:text-primary font-medium"
              onClick={() => setIsOpen(false)}
            >
              Practice
            </Link>
            <Link 
              href="/generator" 
              className="block py-2 text-neutral-600 hover:text-primary font-medium"
              onClick={() => setIsOpen(false)}
            >
              Generator
            </Link>
            <Link 
              href="/star-method" 
              className="block py-2 text-neutral-600 hover:text-primary font-medium"
              onClick={() => setIsOpen(false)}
            >
              STAR Guide
            </Link>
            <Link 
              href="/interview-questions" 
              className="block py-2 text-neutral-600 hover:text-primary font-medium"
              onClick={() => setIsOpen(false)}
            >
              Questions
            </Link>
            <Link 
              href="/pricing" 
              className="block py-2 text-neutral-600 hover:text-primary font-medium"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/practice"
              className="block mt-2 bg-primary text-white text-center px-4 py-2 rounded-lg font-medium hover:bg-primary-hover transition"
              onClick={() => setIsOpen(false)}
            >
              Start Free
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
