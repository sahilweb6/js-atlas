"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { AppShell } from "@/components/layout/app-shell";
import { curriculum, getPartRoute, getLessonRoute, getChapterRoute } from "@/components/learning/curriculum-v2";
import type { Part, Lesson, Chapter } from "@/components/learning/curriculum-v2";

function useHeaderStatic() {
  useEffect(() => {
    document.documentElement.classList.add("learn-page-header-static");
    return () => {
      document.documentElement.classList.remove("learn-page-header-static");
    };
  }, []);
}

function useScrollSpy(partIds: string[]) {
  const [activeTab, setActiveTab] = useState<string>(partIds[0] ?? "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveTab(entry.target.id);
          }
        });
      },
      { rootMargin: "-10% 0px -75% 0px" }
    );

    partIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [partIds]);

  return activeTab;
}

function CurriculumTabs({ activeTab }: { activeTab: string }) {
  const handleClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, partId: string) => {
    e.preventDefault();
    const el = document.getElementById(partId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <nav
      className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur-sm dark:border-slate-800 dark:bg-[#020617]/95"
      aria-label="Curriculum parts"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-1 py-2">
          {curriculum.parts.map((part) => {
            const isActive = activeTab === part.id;
            return (
              <a
                key={part.id}
                href={`#${part.id}`}
                onClick={(e) => handleClick(e, part.id)}
                className={[
                  "rounded-md px-4 py-2.5 text-base font-semibold transition-colors",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5B5BD6] focus-visible:ring-offset-2",
                  isActive
                    ? "bg-slate-100 text-[#5B5BD6] dark:bg-slate-800/60 dark:text-[#22D3EE]"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200",
                ].join(" ")}
                aria-current={isActive ? "page" : undefined}
              >
                {part.title}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

function PartSection({ part, index }: { part: Part; index: number }) {
  const partNumber = index + 1;
  const partHref = getPartRoute(part);
  const lessonCount = part.lessons.length;
  const chapterCount = part.lessons.reduce(
    (count, lesson) => count + lesson.chapters.length,
    0
  );

  return (
    <section id={part.id} className="mb-20 scroll-mt-28 last:mb-0">
      {/* Part Header */}
      <div className="mb-10 border-b-2 border-slate-200 pb-4 dark:border-slate-700">
        <span className="text-sm font-semibold tracking-wider text-[#5B5BD6] uppercase">
          Part {partNumber}
        </span>
        <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-slate-100">
          <Link
            href={partHref}
            className="hover:text-[#5B5BD6] hover:underline underline-offset-4 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5B5BD6] focus-visible:ring-offset-2 rounded-sm"
          >
            {part.title}
          </Link>
        </h2>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-500">
          {lessonCount} {lessonCount === 1 ? "lesson" : "lessons"} · {chapterCount}{" "}
          {chapterCount === 1 ? "chapter" : "chapters"}
        </p>
      </div>

      {/* Lessons */}
      <div className="space-y-14">
        {part.lessons.map((lesson, lessonIndex) => (
          <LessonSection
            key={lesson.id}
            part={part}
            lesson={lesson}
            lessonNumber={lessonIndex + 1}
          />
        ))}
      </div>
    </section>
  );
}

function LessonSection({
  part,
  lesson,
  lessonNumber,
}: {
  part: Part;
  lesson: Lesson;
  lessonNumber: number;
}) {
  const lessonHref = getLessonRoute(part, lesson);

  return (
    <div className="border-l-2 border-[#5B5BD6] pl-5 md:pl-6">
      {/* Lesson Title */}
      <h3 className="mb-5 text-xl font-semibold text-slate-800 dark:text-slate-200">
        <Link
          href={lessonHref}
          className="hover:text-[#5B5BD6] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5B5BD6] focus-visible:ring-offset-2 rounded-sm"
        >
          {lesson.title}
        </Link>
      </h3>

      {/* Chapter Grid */}
      <div className="grid grid-cols-1 gap-x-6 gap-y-2.5 md:grid-cols-2 lg:grid-cols-3">
        {lesson.chapters.map((chapter, chapterIndex) => (
          <ChapterItem
            key={chapter.id}
            part={part}
            lesson={lesson}
            chapter={chapter}
            chapterNumber={`${lessonNumber}.${chapterIndex + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function ChapterItem({
  part,
  lesson,
  chapter,
  chapterNumber,
}: {
  part: Part;
  lesson: Lesson;
  chapter: Chapter;
  chapterNumber: string;
}) {
  const chapterHref = getChapterRoute(part, lesson, chapter);

  return (
    <Link
      href={chapterHref}
      className="group text-sm leading-snug text-slate-600 transition-colors hover:text-[#5B5BD6] hover:underline underline-offset-2 dark:text-slate-400 dark:hover:text-[#22D3EE] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5B5BD6] focus-visible:ring-offset-2 rounded-sm"
    >
      <span className="mr-1.5 font-mono text-xs text-slate-400 dark:text-slate-600 group-hover:text-[#5B5BD6] dark:group-hover:text-[#22D3EE]">
        {chapterNumber}
      </span>
      {chapter.title}
    </Link>
  );
}

export default function LearnPage() {
  useHeaderStatic();

  const partIds = curriculum.parts.map((p) => p.id);
  const activeTab = useScrollSpy(partIds);

  return (
    <AppShell showSidebar={false} showBreadcrumb={false}>
      <main className="min-h-screen bg-white dark:bg-[#020617]">
        {/* Page Header — centered, constrained */}
        <div className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 md:pt-16 lg:px-8">
          <header className="mb-6">
            <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 md:text-4xl">
              Learn JavaScript
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
              A structured, modern JavaScript curriculum from fundamentals to advanced concepts.
            </p>
          </header>
        </div>

        {/* Full-Width Sticky Tabs */}
        <CurriculumTabs activeTab={activeTab} />

        {/* Content — centered, constrained */}
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          {/* Curriculum Parts */}
          {curriculum.parts.map((part, index) => (
            <PartSection key={part.id} part={part} index={index} />
          ))}
        </div>
      </main>
    </AppShell>
  );
}
