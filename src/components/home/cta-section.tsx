"use client";

import Link from "next/link";

export function CTASection() {
  return (
    <section
      aria-label="Call to action"
      className="border-t border-[#E2E8F0] bg-[#F8FAFC] px-4 py-16 dark:border-[#1E293B] dark:bg-[#0B1120] sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-4xl text-center">
        {/* Headline */}
        <h2 className="mb-4 text-3xl font-bold tracking-tight text-[#0F172A] dark:text-white sm:text-4xl">
          Start Learning JavaScript Today
        </h2>

        {/* Description */}
        <p className="mx-auto mb-8 max-w-2xl text-lg text-[#475569] dark:text-[#94A3B8]">
          Dive into a free, open-source curriculum designed to take you from
          beginner to advanced. No account required.
        </p>

        {/* Primary CTA — plain HTML button styled with Tailwind */}
        <div className="mb-10">
          <Link
            href="/learn"
            className="inline-flex items-center gap-2 rounded-lg bg-[#5B5BD6] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#5B5BD6]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5B5BD6] focus-visible:ring-offset-2 sm:px-8 sm:py-3.5 sm:text-base"
          >
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
        </div>

        {/* Open Source Note */}
        <div className="flex flex-col items-center gap-3 text-sm text-[#475569] dark:text-[#94A3B8]">
          <div className="flex items-center gap-2">
            {/* Github icon */}
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
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
            <span>Open source on</span>
            <a
              href="https://github.com/sahilweb6/js-atlas"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[#5B5BD6] underline underline-offset-4 hover:text-[#5B5BD6]/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5B5BD6] focus-visible:ring-offset-2"
            >
              GitHub
            </a>
          </div>
          <p>
            Licensed under the{" "}
            <a
              href="https://github.com/sahilweb6/js-atlas/blob/main/LICENSE"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[#5B5BD6] underline underline-offset-4 hover:text-[#5B5BD6]/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5B5BD6] focus-visible:ring-offset-2"
            >
              MIT License
            </a>
            . Contributions welcome.
          </p>
        </div>
      </div>
    </section>
  );
}
