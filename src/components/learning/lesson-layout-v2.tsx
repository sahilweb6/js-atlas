"use client";

import Link from "next/link";
import { AppShell } from "@/components/layout/app-shell";
import { SidebarNav } from "./sidebar-nav";
import { BreadcrumbNav } from "./breadcrumb-nav";
import type { BreadcrumbItem } from "./curriculum-v2";
import type { SidebarNavItem } from "./sidebar-nav";

interface LessonLayoutV2Props {
  /** Lesson title (h1) */
  title: string;
  /** Lesson description */
  description: string;
  /** Breadcrumb trail */
  breadcrumbs: BreadcrumbItem[];
  /** Sidebar items — chapters within this lesson */
  sidebarItems: SidebarNavItem[];
  /** Active chapter slug */
  activeChapterSlug?: string;
  /** Chapter data for the content list */
  chapters: {
    title: string;
    slug: string;
    description: string;
    sectionCount: number;
  }[];
  /** Base path for this lesson — e.g. /learn/javascript-language/introduction */
  basePath: string;
}

/**
 * Level 3 Lesson Overview Layout
 *
 * Features:
 * - Sidebar showing chapters within the lesson
 * - Content area listing all chapters with descriptions and links
 * - Breadcrumb navigation
 * - Responsive: sidebar hidden on mobile
 *
 * Used by: /learn/:part/:lesson
 */
export function LessonLayoutV2({
  title,
  description,
  breadcrumbs,
  sidebarItems,
  activeChapterSlug,
  chapters,
  basePath,
}: LessonLayoutV2Props) {
  return (
    <AppShell showSidebar>
      <div className="mx-auto flex w-full max-w-7xl gap-8 px-4 py-8 sm:px-6 lg:px-8">
        {/* Sidebar — hidden on mobile, visible on lg+ */}
        <aside className="hidden w-64 shrink-0 lg:block">
          <SidebarNav
            items={sidebarItems}
            activeSlug={activeChapterSlug ?? ""}
            heading="Chapters"
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

          {/* Chapter list */}
          <nav aria-label="Chapters in this lesson">
            <ol className="space-y-4" role="list">
              {chapters.map((chapter, index) => (
                <li key={chapter.slug}>
                  <Link
                    href={`${basePath}/${chapter.slug}`}
                    className="group flex items-start gap-4 rounded-lg border border-[#E2E8F0] bg-white p-5 transition-all hover:border-[#5B5BD6] hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5B5BD6] dark:border-[#1E293B] dark:bg-[#0F172A] dark:hover:border-[#5B5BD6]"
                  >
                    {/* Chapter number */}
                    <span
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F8FAFC] text-sm font-semibold text-[#5B5BD6] transition-colors group-hover:bg-[#5B5BD6] group-hover:text-white dark:bg-[#1E293B] dark:text-[#22D3EE] dark:group-hover:bg-[#5B5BD6] dark:group-hover:text-white"
                      aria-hidden="true"
                    >
                      {index + 1}
                    </span>

                    {/* Content */}
                    <div className="flex-1">
                      <h2 className="text-lg font-semibold text-[#0F172A] transition-colors group-hover:text-[#5B5BD6] dark:text-[#F8FAFC] dark:group-hover:text-[#22D3EE]">
                        {chapter.title}
                      </h2>
                      <p className="mt-1 text-sm text-[#475569] dark:text-[#94A3B8]">
                        {chapter.description}
                      </p>
                      <span className="mt-2 inline-block text-xs text-[#94A3B8]">
                        {chapter.sectionCount} sections
                      </span>
                    </div>

                    {/* Arrow */}
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
                      className="mt-1 shrink-0 text-[#94A3B8] transition-transform group-hover:translate-x-1 group-hover:text-[#5B5BD6] dark:text-[#475569]"
                      aria-hidden="true"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </Link>
                </li>
              ))}
            </ol>
          </nav>
        </main>
      </div>
    </AppShell>
  );
}
