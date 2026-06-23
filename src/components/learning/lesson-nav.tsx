"use client";

import Link from "next/link";

/**
 * Navigation link shape for v2 architecture.
 */
interface NavLink {
  title: string;
  href: string;
}

/**
 * Old curriculum section shape (from curriculum-data.ts).
 * Kept for backward compatibility with existing pages.
 */
interface CurriculumSection {
  title: string;
  slug: string;
}

interface LessonNavProps {
  /** Previous chapter/section. Accepts NavLink (v2) or CurriculumSection (v1). */
  prev: NavLink | CurriculumSection | null;
  /** Next chapter/section. Accepts NavLink (v2) or CurriculumSection (v1). */
  next: NavLink | CurriculumSection | null;
}

/**
 * Normalize a prop value into a valid NavLink with an href.
 * Handles both v1 (CurriculumSection with slug) and v2 (NavLink with href).
 */
function normalizeLink(link: NavLink | CurriculumSection | null): NavLink | null {
  if (!link) return null;

  // v2: already has href
  if ("href" in link && typeof link.href === "string" && link.href.length > 0) {
    return link as NavLink;
  }

  // v1: has slug, construct href
  if ("slug" in link && typeof link.slug === "string") {
    return {
      title: link.title,
      href: `/learn/${link.slug}`,
    };
  }

  return null;
}

/**
 * Previous / Next navigation.
 * Renders as a responsive two-column layout with arrow icons.
 *
 * Backward-compatible: works with both v1 (CurriculumSection) and
 * v2 (NavLink with href) prop shapes.
 */
export function LessonNav({ prev, next }: LessonNavProps) {
  const prevLink = normalizeLink(prev);
  const nextLink = normalizeLink(next);

  return (
    <nav
      aria-label="Lesson navigation"
      className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
    >
      {/* Previous */}
      <div className="flex-1">
        {prevLink ? (
          <Link
            href={prevLink.href}
            className="group flex items-center gap-3 rounded-lg border border-[#E2E8F0] bg-white px-4 py-3 transition-colors hover:border-[#5B5BD6] hover:bg-[#F8FAFC] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5B5BD6] dark:border-[#1E293B] dark:bg-[#0F172A] dark:hover:border-[#5B5BD6] dark:hover:bg-[#1E293B]"
          >
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
              className="shrink-0 text-[#475569] transition-transform group-hover:-translate-x-1 dark:text-[#94A3B8]"
              aria-hidden="true"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
            <div className="flex flex-col">
              <span className="text-xs font-medium text-[#475569] dark:text-[#94A3B8]">
                Previous
              </span>
              <span className="text-sm font-semibold text-[#0F172A] dark:text-[#F8FAFC]">
                {prevLink.title}
              </span>
            </div>
          </Link>
        ) : (
          <div className="rounded-lg border border-dashed border-[#E2E8F0] px-4 py-3 dark:border-[#1E293B]">
            <span className="text-sm text-[#94A3B8]">No previous chapter</span>
          </div>
        )}
      </div>

      {/* Next */}
      <div className="flex-1 sm:text-right">
        {nextLink ? (
          <Link
            href={nextLink.href}
            className="group flex items-center justify-end gap-3 rounded-lg border border-[#E2E8F0] bg-white px-4 py-3 transition-colors hover:border-[#5B5BD6] hover:bg-[#F8FAFC] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5B5BD6] dark:border-[#1E293B] dark:bg-[#0F172A] dark:hover:border-[#5B5BD6] dark:hover:bg-[#1E293B]"
          >
            <div className="flex flex-col">
              <span className="text-xs font-medium text-[#475569] dark:text-[#94A3B8]">
                Next
              </span>
              <span className="text-sm font-semibold text-[#0F172A] dark:text-[#F8FAFC]">
                {nextLink.title}
              </span>
            </div>
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
              className="shrink-0 text-[#475569] transition-transform group-hover:translate-x-1 dark:text-[#94A3B8]"
              aria-hidden="true"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </Link>
        ) : (
          <div className="rounded-lg border border-dashed border-[#E2E8F0] px-4 py-3 dark:border-[#1E293B]">
            <span className="text-sm text-[#94A3B8]">No next chapter</span>
          </div>
        )}
      </div>
    </nav>
  );
}
