"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { SidebarNav } from "./sidebar-nav";
import { BreadcrumbNav } from "./breadcrumb-nav";
import { LessonNav } from "./lesson-nav";
import type { BreadcrumbItem } from "./curriculum-v2";
import type { SidebarNavItem } from "./sidebar-nav";

interface ContentLayoutProps {
  /** Page title (h1) */
  title: string;
  /** Short description under title */
  description: string;
  /** Breadcrumb trail */
  breadcrumbs: BreadcrumbItem[];
  /** Sidebar navigation items (sections within chapter) */
  sidebarItems: SidebarNavItem[];
  /** Main content — must contain sections with id matching section slugs */
  children: React.ReactNode;
  /** Previous chapter data for bottom nav */
  prevChapter: { title: string; href: string } | null;
  /** Next chapter data for bottom nav */
  nextChapter: { title: string; href: string } | null;
}

/**
 * Level 4 Content Page Layout
 *
 * Features:
 * - Sticky sidebar with section navigation
 * - Scroll spy via IntersectionObserver (active section highlighting)
 * - Clicking sidebar item scrolls to corresponding section
 * - Breadcrumb navigation
 * - Bottom previous/next chapter navigation
 * - Responsive: sidebar hidden on mobile, visible on lg+
 *
 * The children must render sections with `id` attributes matching
 * the section slugs passed in sidebarItems.
 */
export function ContentLayout({
  title,
  description,
  breadcrumbs,
  sidebarItems,
  children,
  prevChapter,
  nextChapter,
}: ContentLayoutProps) {
  const [activeSlug, setActiveSlug] = useState<string>(
    sidebarItems[0]?.slug ?? ""
  );
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Set up IntersectionObserver for scroll spy
  useEffect(() => {
    const callback: IntersectionObserverCallback = (entries) => {
      let bestEntry: IntersectionObserverEntry | null = null;
      for (const entry of entries) {
        if (entry.isIntersecting) {
          if (!bestEntry || entry.intersectionRatio > bestEntry.intersectionRatio) {
            bestEntry = entry;
          }
        }
      }
      if (bestEntry) {
        setActiveSlug(bestEntry.target.id);
      }
    };

    observerRef.current = new IntersectionObserver(callback, {
      rootMargin: "-80px 0px -60% 0px",
      threshold: [0, 0.25, 0.5, 0.75, 1],
    });

    for (const item of sidebarItems) {
      const el = document.getElementById(item.slug);
      if (el && observerRef.current) {
        observerRef.current.observe(el);
      }
    }

    return () => {
      observerRef.current?.disconnect();
    };
  }, [sidebarItems]);

  // Handle sidebar click — smooth scroll to section
  const handleItemClick = useCallback((slug: string) => {
    const el = document.getElementById(slug);
    if (el) {
      const headerOffset = 96;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSlug(slug);
    }
  }, []);

  return (
    <div className="mx-auto flex w-full max-w-7xl gap-8 px-4 py-8 sm:px-6 lg:px-8">
      {/* Sidebar — hidden on mobile, visible on lg+ */}
      <aside className="hidden w-64 shrink-0 lg:block">
        <SidebarNav
          items={sidebarItems}
          activeSlug={activeSlug}
          heading="In this chapter"
          onItemClick={handleItemClick}
        />
      </aside>

      {/* Main content */}
      <main className="min-w-0 flex-1">
        {/* Breadcrumb */}
        <BreadcrumbNav items={breadcrumbs} />

        {/* Page header */}
        <header className="mb-8 mt-4 border-b border-[#E2E8F0] pb-6 dark:border-[#1E293B]">
          <h1 className="text-3xl font-bold tracking-tight text-[#0F172A] dark:text-[#F8FAFC] sm:text-4xl">
            {title}
          </h1>
          <p className="mt-3 text-lg text-[#475569] dark:text-[#94A3B8]">
            {description}
          </p>
        </header>

        {/* Content */}
        <article className="prose prose-slate max-w-none dark:prose-invert">
          {children}
        </article>

        {/* Divider */}
        <hr className="mt-12 border-[#E2E8F0] dark:border-[#1E293B]" />

        {/* Bottom previous/next navigation */}
        <LessonNav prev={prevChapter} next={nextChapter} />
      </main>
    </div>
  );
}
