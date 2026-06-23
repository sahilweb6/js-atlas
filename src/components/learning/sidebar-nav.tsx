"use client";

import { useCallback } from "react";

export interface SidebarNavItem {
  label: string;
  slug: string;
  href: string;
}

interface SidebarNavProps {
  /** Navigation items to render */
  items: SidebarNavItem[];
  /** Currently active item slug */
  activeSlug: string;
  /** Optional heading above the nav list */
  heading?: string;
  /** Callback when an item is clicked */
  onItemClick?: (slug: string) => void;
}

/**
 * Reusable sticky sidebar navigation component.
 *
 * Features:
 * - Nested indentation support via caller
 * - Active item highlighting with primary color
 * - Smooth scroll behavior on click
 * - aria-current for active item
 * - Keyboard accessible
 * - Responsive: hidden on mobile, visible on lg+
 *
 * Used by content-layout.tsx, lesson-layout-v2.tsx, part-layout.tsx
 */
export function SidebarNav({
  items,
  activeSlug,
  heading,
  onItemClick,
}: SidebarNavProps) {
  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, slug: string) => {
      if (onItemClick) {
        e.preventDefault();
        onItemClick(slug);
      }
    },
    [onItemClick]
  );

  return (
    <nav
      aria-label="Section navigation"
      className="sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto pr-2"
    >
      {heading && (
        <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#94A3B8]">
          {heading}
        </h3>
      )}
      <ul className="space-y-1" role="list">
        {items.map((item) => {
          const isActive = item.slug === activeSlug;
          return (
            <li key={item.slug}>
              <a
                href={item.href}
                onClick={(e) => handleClick(e, item.slug)}
                aria-current={isActive ? "page" : undefined}
                className={`
                  block rounded-md px-3 py-2 text-sm transition-colors
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5B5BD6]
                  ${
                    isActive
                      ? "bg-[#5B5BD6]/10 font-medium text-[#5B5BD6] dark:bg-[#5B5BD6]/20 dark:text-[#22D3EE]"
                      : "text-[#475569] hover:bg-[#F8FAFC] hover:text-[#0F172A] dark:text-[#94A3B8] dark:hover:bg-[#1E293B] dark:hover:text-[#F8FAFC]"
                  }
                `}
              >
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
