"use client";

import { LessonNav } from "./lesson-nav";
import type { CurriculumSection } from "./curriculum-data";

interface LessonLayoutProps {
  /** Page title displayed as h1 */
  title: string;
  /** Short description displayed under the title */
  description: string;
  /** Main lesson content */
  children: React.ReactNode;
  /** Previous section data (null if first lesson) */
  prev: CurriculumSection | null;
  /** Next section data (null if last lesson) */
  next: CurriculumSection | null;
}

/**
 * Reusable lesson page layout for all learning sections.
 *
 * Provides:
 * - Semantic page title (h1) with description
 * - Content area for lesson material
 * - Previous / Next navigation
 * - Full accessibility support (WCAG AA)
 * - Responsive design across mobile, tablet, and desktop
 *
 * Used by: /learn/introduction, /learn/fundamentals, /learn/dom,
 *          /learn/async-javascript, /learn/advanced
 */
export function LessonLayout({
  title,
  description,
  children,
  prev,
  next,
}: LessonLayoutProps) {
  return (
    <article className="mx-auto w-full max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Page header */}
      <header className="mb-8 border-b border-[#E2E8F0] pb-6 dark:border-[#1E293B]">
        <h1 className="text-3xl font-bold tracking-tight text-[#0F172A] dark:text-[#F8FAFC] sm:text-4xl">
          {title}
        </h1>
        <p className="mt-3 text-lg text-[#475569] dark:text-[#94A3B8]">
          {description}
        </p>
      </header>

      {/* Lesson content area */}
      <section
        aria-label="Lesson content"
        className="prose prose-slate max-w-none dark:prose-invert"
      >
        {children}
      </section>

      {/* Divider before navigation */}
      <hr className="mt-12 border-[#E2E8F0] dark:border-[#1E293B]" />

      {/* Previous / Next navigation */}
      <LessonNav prev={prev} next={next} />
    </article>
  );
}
