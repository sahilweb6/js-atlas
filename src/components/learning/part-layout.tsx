"use client";

import Link from "next/link";
import { AppShell } from "@/components/layout/app-shell";
import { SidebarNav } from "./sidebar-nav";
import { BreadcrumbNav } from "./breadcrumb-nav";
import type { BreadcrumbItem } from "./curriculum-v2";
import type { SidebarNavItem } from "./sidebar-nav";

interface PartLayoutProps {
  /** Part title (h1) */
  title: string;
  /** Part description */
  description: string;
  /** Breadcrumb trail */
  breadcrumbs: BreadcrumbItem[];
  /** Sidebar items — all parts */
  sidebarItems: SidebarNavItem[];
  /** Active part slug */
  activePartSlug: string;
  /** Lessons in this part */
  lessons: {
    title: string;
    slug: string;
    description: string;
    chapterCount: number;
    chapters: { title: string; slug: string }[];
  }[];
  /** Base path for this part — e.g. /learn/javascript-language */
  basePath: string;
}

/**
 * Level 2 Part Overview Layout
 *
 * Features:
 * - Sidebar showing all curriculum parts
 * - Content area listing all lessons in the part
 * - Each lesson shows its chapters as a sub-list
 * - Breadcrumb navigation
 * - Responsive: sidebar hidden on mobile
 *
 * Used by: /learn/:part
 */
export function PartLayout({
  title,
  description,
  breadcrumbs,
  sidebarItems,
  activePartSlug,
  lessons,
  basePath,
}: PartLayoutProps) {
  return (
    <AppShell showSidebar>
      <div className="mx-auto flex w-full max-w-7xl gap-8 px-4 py-8 sm:px-6 lg:px-8">
        {/* Sidebar — hidden on mobile, visible on lg+ */}
        <aside className="hidden w-64 shrink-0 lg:block">
          <SidebarNav
            items={sidebarItems}
            activeSlug={activePartSlug}
            heading="Parts"
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

          {/* Lesson list */}
          <nav aria-label="Lessons in this part">
            <ol className="space-y-6" role="list">
              {lessons.map((lesson, lessonIndex) => (
                <li key={lesson.slug}>
                  <div className="rounded-lg border border-[#E2E8F0] bg-white p-5 dark:border-[#1E293B] dark:bg-[#0F172A]">
                    {/* Lesson header */}
                    <div className="flex items-start gap-4">
                      <span
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#5B5BD6] text-sm font-bold text-white"
                        aria-hidden="true"
                      >
                        {lessonIndex + 1}
                      </span>
                      <div className="flex-1">
                        <h2 className="text-xl font-semibold text-[#0F172A] dark:text-[#F8FAFC]">
                          {lesson.title}
                        </h2>
                        <p className="mt-1 text-[#475569] dark:text-[#94A3B8]">
                          {lesson.description}
                        </p>
                      </div>
                      <Link
                        href={`${basePath}/${lesson.slug}`}
                        className="shrink-0 rounded-md px-3 py-1.5 text-sm font-medium text-[#5B5BD6] transition-colors hover:bg-[#5B5BD6]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5B5BD6] dark:text-[#22D3EE] dark:hover:bg-[#5B5BD6]/20"
                      >
                        View lesson
                      </Link>
                    </div>

                    {/* Chapter list */}
                    {lesson.chapters.length > 0 && (
                      <div className="mt-4 border-t border-[#E2E8F0] pt-4 dark:border-[#1E293B]">
                        <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#94A3B8]">
                          Chapters
                        </h3>
                        <ul className="grid gap-2 sm:grid-cols-2">
                          {lesson.chapters.map((chapter) => (
                            <li key={chapter.slug}>
                              <Link
                                href={`${basePath}/${lesson.slug}/${chapter.slug}`}
                                className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm text-[#475569] transition-colors hover:bg-[#F8FAFC] hover:text-[#0F172A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5B5BD6] dark:text-[#94A3B8] dark:hover:bg-[#1E293B] dark:hover:text-[#F8FAFC]"
                              >
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
                                  className="shrink-0 text-[#94A3B8]"
                                  aria-hidden="true"
                                >
                                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                                </svg>
                                {chapter.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </nav>
        </main>
      </div>
    </AppShell>
  );
}
