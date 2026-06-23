"use client";

import Link from "next/link";

export interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbNavProps {
  items: BreadcrumbItem[];
}

/**
 * Learning-specific breadcrumb navigation.
 *
 * Renders a horizontal trail: Home → Part → Lesson → Chapter
 * with chevron separators. The last item is non-clickable (current page).
 *
 * Features:
 * - Semantic nav with aria-label
 * - ol/li structure for screen readers
 * - Focus-visible rings on links
 * - Responsive text sizing
 */
export function BreadcrumbNav({ items }: BreadcrumbNavProps) {
  if (items.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="mb-4">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const isFirst = index === 0;

          return (
            <li key={item.href} className="flex items-center gap-1.5">
              {/* Chevron separator (not for first item) */}
              {!isFirst && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[#94A3B8]"
                  aria-hidden="true"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              )}

              {isLast ? (
                // Current page — not a link
                <span
                  className="font-medium text-[#0F172A] dark:text-[#F8FAFC]"
                  aria-current="page"
                >
                  {item.label}
                </span>
              ) : (
                // Navigable link
                <Link
                  href={item.href}
                  className="text-[#475569] transition-colors hover:text-[#5B5BD6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5B5BD6] dark:text-[#94A3B8] dark:hover:text-[#22D3EE]"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
