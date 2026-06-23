"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface CurriculumSection {
  id: string;
  label: string;
  href: string;
  items?: { id: string; label: string; href: string }[];
}

const curriculum: CurriculumSection[] = [
  {
    id: "introduction",
    label: "Introduction",
    href: "/learn/introduction",
  },
  {
    id: "fundamentals",
    label: "JavaScript Fundamentals",
    href: "/learn/fundamentals",
    items: [
      { id: "variables", label: "Variables", href: "/learn/fundamentals/variables" },
      { id: "data-types", label: "Data Types", href: "/learn/fundamentals/data-types" },
      { id: "operators", label: "Operators", href: "/learn/fundamentals/operators" },
      { id: "control-flow", label: "Control Flow", href: "/learn/fundamentals/control-flow" },
      { id: "functions", label: "Functions", href: "/learn/fundamentals/functions" },
    ],
  },
  {
    id: "dom",
    label: "DOM",
    href: "/learn/dom",
    items: [
      { id: "document", label: "Document Object", href: "/learn/dom/document" },
      { id: "selecting", label: "Selecting Elements", href: "/learn/dom/selecting" },
      { id: "modifying", label: "Modifying Elements", href: "/learn/dom/modifying" },
      { id: "events", label: "Events", href: "/learn/dom/events" },
    ],
  },
  {
    id: "async",
    label: "Async JavaScript",
    href: "/learn/async",
    items: [
      { id: "callbacks", label: "Callbacks", href: "/learn/async/callbacks" },
      { id: "promises", label: "Promises", href: "/learn/async/promises" },
      { id: "async-await", label: "Async/Await", href: "/learn/async/async-await" },
      { id: "fetch-api", label: "Fetch API", href: "/learn/async/fetch-api" },
    ],
  },
  {
    id: "advanced",
    label: "Advanced Topics",
    href: "/learn/advanced",
    items: [
      { id: "closures", label: "Closures", href: "/learn/advanced/closures" },
      { id: "prototypes", label: "Prototypes", href: "/learn/advanced/prototypes" },
      { id: "modules", label: "Modules", href: "/learn/advanced/modules" },
      { id: "error-handling", label: "Error Handling", href: "/learn/advanced/error-handling" },
    ],
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside
      className="hidden w-64 shrink-0 overflow-y-auto border-r border-[#E2E8F0] bg-[#F8FAFC] dark:border-[#1E293B] dark:bg-[#0F172A] lg:block"
      aria-label="Curriculum sidebar"
    >
      <nav aria-label="Curriculum navigation" className="px-4 py-6">
        <h2 className="mb-4 px-2 text-xs font-semibold uppercase tracking-wider text-[#94A3B8] dark:text-[#475569]">
          Curriculum
        </h2>
        <ul className="space-y-1">
          {curriculum.map((section) => {
            const isActive = pathname.startsWith(section.href);
            const isExact = pathname === section.href;

            return (
              <li key={section.id}>
                <Link
                  href={section.href}
                  className={`
                    block rounded-md px-2 py-2 text-sm font-medium transition-colors
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5B5BD6] focus-visible:ring-offset-2
                    ${
                      isExact
                        ? "bg-[#5B5BD6]/10 text-[#5B5BD6] dark:bg-[#22D3EE]/10 dark:text-[#22D3EE]"
                        : isActive
                          ? "text-[#5B5BD6] dark:text-[#22D3EE]"
                          : "text-[#475569] hover:bg-[#E2E8F0] hover:text-[#0F172A] dark:text-[#94A3B8] dark:hover:bg-[#1E293B] dark:hover:text-[#F8FAFC]"
                    }
                  `}
                  aria-current={isExact ? "page" : undefined}
                >
                  {section.label}
                </Link>

                {section.items && isActive && (
                  <ul className="mt-1 space-y-0.5 border-l-2 border-[#E2E8F0] pl-4 dark:border-[#1E293B]">
                    {section.items.map((item) => {
                      const itemActive = pathname === item.href;
                      return (
                        <li key={item.id}>
                          <Link
                            href={item.href}
                            className={`
                              block rounded-md px-2 py-1.5 text-sm transition-colors
                              focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5B5BD6] focus-visible:ring-offset-2
                              ${
                                itemActive
                                  ? "font-medium text-[#5B5BD6] dark:text-[#22D3EE]"
                                  : "text-[#64748B] hover:text-[#0F172A] dark:text-[#64748B] dark:hover:text-[#F8FAFC]"
                              }
                            `}
                            aria-current={itemActive ? "page" : undefined}
                          >
                            {item.label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
