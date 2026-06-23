# Phase 02D — Learning Architecture Refactor (Work In Progress)

## Status

In Progress

---

# Background

The original Phase 02D implementation created a flat curriculum structure:


/learn
├── introduction
├── fundamentals
├── dom
├── async-javascript
└── advanced


After implementation and UI review, it was determined that the architecture was not suitable for a documentation-style learning platform.

The interface resembled a SaaS dashboard rather than a developer learning resource.

The decision was made to refactor the curriculum architecture before beginning Phase 03.

---

# Major UX Problems Identified

## Learn Page Issues

The original `/learn` page used:

* Large dashboard cards
* Roadmap UI
* Low information density
* Sidebar visibility where not needed

Problems:

* Users could not easily understand the curriculum structure.
* Lessons and chapters were hidden behind navigation.
* Curriculum discovery was poor.

Desired behavior:

* Similar information architecture to javascript.info.
* Content-first curriculum homepage.
* Users should immediately see lessons and chapters.

---

## Lesson Page Issues

The original lesson pages displayed:

* Entire curriculum in sidebar
* Limited chapter navigation
* Weak information hierarchy

Problems:

* Sidebar showed unrelated lessons.
* Chapter navigation experience was poor.
* Difficult to understand current location.

Desired behavior:

* Sidebar should focus on the current lesson only.
* Current chapter should be highlighted.
* Active section should update during scrolling.

---

## Breadcrumb Issues

Original breadcrumbs lacked hierarchy.

Desired structure:


Home
→ The JavaScript Language
→ An Introduction


Behavior:

* Home → /learn
* The JavaScript Language → Part page
* An Introduction → Lesson page

---

## Navigation Issues

Original previous/next navigation existed only at the bottom.

Decision:

* Keep bottom previous/next navigation.
* Floating arrows postponed until architecture validation is complete.

---

# New Curriculum Architecture

The project now follows:


Part
→ Lesson
→ Chapter
→ Section


Example:


The JavaScript Language
└── An Introduction
    └── An Introduction to JavaScript
        ├── What is JavaScript?
        ├── How JavaScript Works
        ├── What JavaScript Can Do
        ├── What JavaScript Cannot Do
        ├── Why JavaScript Is Unique
        └── Summary


---

# Target Route Structure

## Level 1


/learn


Curriculum homepage.

No sidebar.

Displays:

* Parts
* Lessons
* Chapters

---

## Level 2


/learn/javascript-language


Part overview page.

Sidebar:

* The JavaScript Language
* Browser APIs
* Additional Articles

Content:

* Lessons
* Chapter previews

---

## Level 3


/learn/javascript-language/introduction


Lesson overview page.

Sidebar:

* Chapters within lesson

Content:

* Chapter list
* Chapter descriptions

---

## Level 4


/learn/javascript-language/introduction/introduction-to-javascript


Content page.

Sidebar:

* Sections within chapter

Features:

* Sticky sidebar
* Scroll spy
* Active section highlighting
* Breadcrumb navigation

---

# Batch A Completed

Generated:


src/components/learning/curriculum-v2.ts
src/components/learning/sidebar-nav.tsx
src/components/learning/content-layout.tsx
src/components/learning/lesson-layout-v2.tsx
src/components/learning/part-layout.tsx
src/components/learning/breadcrumb-nav.tsx
src/components/learning/lesson-nav.tsx


Purpose:

* New hierarchical curriculum model
* Sticky navigation system
* Scroll spy architecture
* Part/Lesson/Chapter layouts

---

# Batch A Issues Encountered

## Runtime Error

Error:


Failed prop type:
The prop `href` expects a string or object in <Link>,
but got undefined instead.


Root Cause:

* Old routes used old curriculum objects.
* New lesson navigation expected href values.
* Old data only supplied slugs.

Resolution:

* Navigation compatibility layer added.
* Route helper functions added.
* Link generation standardized.

---

## ESLint Build Errors

Errors:


getSectionIndex is defined but never used
isFirst is assigned a value but never used


Resolution:

* Removed unused import.
* Removed unused variable.

Result:


pnpm build PASS
pnpm dev PASS


---

# Current Status

Completed:

* Architecture redesign
* Hierarchical curriculum model
* Navigation system
* Breadcrumb system
* Layout architecture
* Runtime fixes
* Build validation

Pending:

* Batch B — Curriculum Homepage (/learn)
* Batch C — Part Overview Pages
* Batch D — Lesson Overview Pages
* Batch E — Chapter Content Pages
* Batch F — Cleanup and Migration

---

# Design Direction

JS Atlas is no longer following a course-dashboard model.

Target experience:


javascript.info
+
Modern UI
+
Dark Mode
+
Improved Navigation
+
Future Progress Tracking
+
Future Interactive Learning


The architecture should prioritize:

* Curriculum discoverability
* High information density
* Developer-focused learning experience
* Documentation-style navigation
* Scalability for 100+ lessons
