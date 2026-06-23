"use client";

import Link from "next/link";

export function HeroSection() {
  return (
    <section
      aria-label="Hero"
      className="relative overflow-hidden border-b border-[#E2E8F0] bg-[#F8FAFC] px-4 py-20 dark:border-[#1E293B] dark:bg-[#020617] sm:px-6 sm:py-24 lg:px-8 lg:py-32"
    >
      {/* Background geometric decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <svg
          className="absolute -right-20 -top-20 h-96 w-96 text-[#5B5BD6]/5"
          viewBox="0 0 200 200"
          fill="currentColor"
        >
          <rect x="40" y="40" width="120" height="120" rx="20" />
        </svg>
        <svg
          className="absolute -bottom-10 -left-10 h-64 w-64 text-[#22D3EE]/5"
          viewBox="0 0 200 200"
          fill="currentColor"
        >
          <circle cx="100" cy="100" r="80" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        {/* Eyebrow */}
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-[#5B5BD6]">
          Free &amp; Open Source
        </p>

        {/* Headline */}
        <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-[#0F172A] dark:text-white sm:text-5xl lg:text-6xl">
          Master Modern
          <span className="text-[#5B5BD6]"> JavaScript</span>
        </h1>

        {/* Tagline */}
        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-[#475569] dark:text-[#94A3B8] sm:text-xl">
          A free, open-source learning platform for JavaScript — from your first
          variable to advanced patterns. No signup required.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          {/* Primary button */}
          <Link
            href="/learn"
            className="inline-flex items-center gap-2 rounded-lg bg-[#5B5BD6] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#5B5BD6]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5B5BD6] focus-visible:ring-offset-2 sm:px-8 sm:py-3.5 sm:text-base"
          >
            {/* BookOpen icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
            </svg>
            Start Learning
            {/* ArrowRight icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>

          {/* Outline button */}
          <Link
            href="/about"
            className="inline-flex items-center gap-2 rounded-lg border border-[#E2E8F0] px-6 py-3 text-sm font-medium text-[#0F172A] transition-colors hover:bg-[#F8FAFC] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5B5BD6] focus-visible:ring-offset-2 dark:border-[#1E293B] dark:text-white dark:hover:bg-[#1E293B] sm:px-8 sm:py-3.5 sm:text-base"
          >
            About JS Atlas
          </Link>
        </div>
      </div>
    </section>
  );
}
