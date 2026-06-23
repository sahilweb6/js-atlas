"use client";

const stages = [
  {
    title: "Introduction",
    items: ["What is JavaScript?", "Setting up your environment", "Hello World"],
  },
  {
    title: "Fundamentals",
    items: ["Variables & Types", "Operators", "Control Flow", "Functions", "Scope"],
  },
  {
    title: "DOM",
    items: ["Document Object Model", "Selecting Elements", "Events", "Manipulating Content"],
  },
  {
    title: "Async",
    items: ["Callbacks", "Promises", "Async / Await", "Fetch API"],
  },
  {
    title: "Advanced",
    items: ["Closures", "Prototypes", "ES Modules", "Error Handling", "Design Patterns"],
  },
];

export function CurriculumRoadmap() {
  return (
    <section
      aria-labelledby="curriculum-roadmap-heading"
      className="border-t border-[#E2E8F0] bg-[#F8FAFC] px-4 py-16 dark:border-[#1E293B] dark:bg-[#0B1120] sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-[#5B5BD6]">
            What You Will Learn
          </p>
          <h2
            id="curriculum-roadmap-heading"
            className="text-3xl font-bold tracking-tight text-[#0F172A] dark:text-white sm:text-4xl"
          >
            Curriculum Roadmap
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[#475569] dark:text-[#94A3B8]">
            A carefully structured curriculum covering everything you need to
            become proficient in modern JavaScript.
          </p>
        </div>

        {/* Roadmap */}
        <div className="relative">
          {/* Connecting line — desktop only */}
          <div
            className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-[#E2E8F0] dark:bg-[#1E293B] lg:block"
            aria-hidden="true"
          />

          <ol className="space-y-12 lg:space-y-16">
            {stages.map((stage, index) => {
              const isEven = index % 2 === 0;

              return (
                <li
                  key={stage.title}
                  className={`relative flex flex-col gap-6 lg:flex-row lg:items-center ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Content card */}
                  <div className="flex-1">
                    <div
                      className={`rounded-2xl border border-[#E2E8F0] bg-white p-6 dark:border-[#1E293B] dark:bg-[#020617] sm:p-8 ${
                        isEven ? "lg:ml-auto lg:mr-12 lg:text-right" : "lg:ml-12 lg:mr-auto"
                      }`}
                    >
                      <h3 className="mb-4 text-xl font-semibold text-[#0F172A] dark:text-white">
                        {stage.title}
                      </h3>
                      <ul
                        className={`space-y-2 ${
                          isEven ? "lg:ml-auto" : ""
                        }`}
                      >
                        {stage.items.map((item) => (
                          <li
                            key={item}
                            className={`flex items-center gap-2 text-[#475569] dark:text-[#94A3B8] ${
                              isEven ? "lg:flex-row-reverse lg:justify-end" : ""
                            }`}
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-[#5B5BD6]" aria-hidden="true" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Center node */}
                  <div className="hidden items-center justify-center lg:flex">
                    <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#5B5BD6] bg-[#F8FAFC] dark:bg-[#020617]">
                      {/* CheckCircle2 icon */}
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
                        className="text-[#5B5BD6]"
                        aria-hidden="true"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="m9 12 2 2 4-4" />
                      </svg>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden flex-1 lg:block" />
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
