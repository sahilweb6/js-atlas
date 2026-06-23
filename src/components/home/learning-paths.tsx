"use client";

const paths = [
  {
    title: "Beginner",
    description:
      "Start with the fundamentals. Learn variables, types, control flow, functions, and basic syntax.",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    title: "Intermediate",
    description:
      "Deepen your understanding with objects, arrays, closures, the DOM, and asynchronous programming.",
    color: "text-amber-500",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
  },
  {
    title: "Advanced",
    description:
      "Master design patterns, performance optimization, modern ES features, and architectural concepts.",
    color: "text-rose-500",
    bg: "bg-rose-500/10",
    border: "border-rose-500/20",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
];

export function LearningPaths() {
  return (
    <section
      aria-labelledby="learning-paths-heading"
      className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-[#5B5BD6]">
            Choose Your Path
          </p>
          <h2
            id="learning-paths-heading"
            className="text-3xl font-bold tracking-tight text-[#0F172A] dark:text-white sm:text-4xl"
          >
            Learning Paths
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[#475569] dark:text-[#94A3B8]">
            Three structured paths designed to take you from beginner to advanced
            at your own pace.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {paths.map((path) => (
            <article
              key={path.title}
              className="group rounded-2xl border border-[#E2E8F0] bg-white p-8 transition-colors hover:border-[#5B5BD6]/30 dark:border-[#1E293B] dark:bg-[#0B1120] dark:hover:border-[#5B5BD6]/30"
            >
              <div
                className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl ${path.bg} ${path.border} border`}
              >
                <span className={path.color}>{path.icon}</span>
              </div>
              <h3 className="mb-3 text-xl font-semibold text-[#0F172A] dark:text-white">
                {path.title}
              </h3>
              <p className="leading-relaxed text-[#475569] dark:text-[#94A3B8]">
                {path.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
