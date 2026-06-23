import { AppShell } from "@/components/layout/app-shell";

export default function HomePage() {
  return (
    <AppShell showSidebar={false} showBreadcrumb={false}>
      <div className="flex flex-col items-center justify-center py-24 text-center sm:py-32">
        <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-[#5B5BD6]/10 dark:bg-[#22D3EE]/10">
          <svg
            className="h-8 w-8 text-[#5B5BD6] dark:text-[#22D3EE]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            />
          </svg>
        </div>

        <h1 className="mb-4 text-4xl font-bold tracking-tight text-[#0F172A] dark:text-[#F8FAFC] sm:text-5xl">
          JS Atlas
        </h1>

        <p className="mb-8 max-w-lg text-lg text-[#475569] dark:text-[#94A3B8]">
          A free, open-source platform for learning modern JavaScript from
          beginner to advanced level.
        </p>

        <div className="mb-8 inline-flex items-center rounded-full bg-[#5B5BD6]/10 px-4 py-2 text-sm font-medium text-[#5B5BD6] dark:bg-[#22D3EE]/10 dark:text-[#22D3EE]">
          Coming Soon
        </div>

        <a
          href="https://github.com/sahilweb6/js-atlas"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-[#0F172A] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#1E293B] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5B5BD6] focus-visible:ring-offset-2 dark:bg-[#F8FAFC] dark:text-[#0F172A] dark:hover:bg-white"
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
          View on GitHub
        </a>
      </div>
    </AppShell>
  );
}
