"use client";

import { Logo } from "@/components/ui/logo";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-[#E2E8F0] bg-white dark:border-[#1E293B] dark:bg-[#020617]">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          {/* Branding */}
          <div className="flex items-center gap-2">
            <Logo showText={false} size="sm" />
            <span className="text-sm font-semibold text-[#0F172A] dark:text-[#F8FAFC]">
              JS Atlas
            </span>
          </div>

          {/* Open source note */}
          <p className="text-center text-sm text-[#64748B] dark:text-[#94A3B8]">
            Free, open-source JavaScript learning platform.
          </p>

          {/* GitHub link */}
          <a
            href="https://github.com/sahilweb6/js-atlas"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md text-sm text-[#475569] transition-colors hover:text-[#5B5BD6] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5B5BD6] focus-visible:ring-offset-2 dark:text-[#94A3B8] dark:hover:text-[#22D3EE]"
            aria-label="View JS Atlas on GitHub"
          >
            <svg
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
            GitHub
          </a>
        </div>

        {/* Copyright */}
        <div className="mt-6 border-t border-[#E2E8F0] pt-6 text-center dark:border-[#1E293B]">
          <p className="text-xs text-[#94A3B8] dark:text-[#475569]">
            © {currentYear} JS Atlas. Released under the MIT License.
          </p>
        </div>
      </div>
    </footer>
  );
}
