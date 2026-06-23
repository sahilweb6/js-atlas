/**
 * Central curriculum data source for JS Atlas.
 * Single source of truth for all learning sections, topics, and navigation.
 */

export interface CurriculumSection {
  id: string;
  title: string;
  slug: string;
  description: string;
  topics: string[];
  prev: string | null;
  next: string | null;
}

export const curriculumSections: CurriculumSection[] = [
  {
    id: 'introduction',
    title: 'Introduction',
    slug: 'introduction',
    description: 'What JavaScript is, how it runs, and how to set up your environment.',
    topics: [
      'What is JavaScript?',
      'How JavaScript runs in the browser',
      'Setting up your editor',
      'Your first script',
      'The console and debugging basics',
    ],
    prev: null,
    next: 'fundamentals',
  },
  {
    id: 'fundamentals',
    title: 'Fundamentals',
    slug: 'fundamentals',
    description: 'Core language concepts every developer needs to master.',
    topics: [
      'Variables: let, const, and var',
      'Primitive data types',
      'Operators and expressions',
      'Conditional statements',
      'Loops and iteration',
      'Functions: declarations, expressions, and arrows',
      'Scope and hoisting',
    ],
    prev: 'introduction',
    next: 'dom',
  },
  {
    id: 'dom',
    title: 'DOM',
    slug: 'dom',
    description: 'Interacting with web pages using the Document Object Model.',
    topics: [
      'What is the DOM?',
      'Selecting elements',
      'Modifying element content and attributes',
      'Creating and removing elements',
      'Event handling basics',
      'Event delegation',
      'Form handling and validation',
    ],
    prev: 'fundamentals',
    next: 'async-javascript',
  },
  {
    id: 'async-javascript',
    title: 'Async JavaScript',
    slug: 'async-javascript',
    description: 'Writing non-blocking code with callbacks, promises, and async/await.',
    topics: [
      'The call stack and event loop',
      'setTimeout and setInterval',
      'Callbacks and callback hell',
      'Promises: creation and consumption',
      'Promise chaining and error handling',
      'async/await syntax',
      'Fetch API and making HTTP requests',
    ],
    prev: 'dom',
    next: 'advanced',
  },
  {
    id: 'advanced',
    title: 'Advanced JavaScript',
    slug: 'advanced',
    description: 'Modern patterns, performance, and architectural concepts.',
    topics: [
      'Closures and lexical scope',
      'this keyword and binding',
      'Prototypes and inheritance',
      'ES Modules: import and export',
      'Design patterns in JavaScript',
      'Memory management and garbage collection',
      'Performance optimization techniques',
    ],
    prev: 'async-javascript',
    next: null,
  },
];

/**
 * Get a section by its slug.
 */
export function getSectionBySlug(slug: string): CurriculumSection | undefined {
  return curriculumSections.find((section) => section.slug === slug);
}

/**
 * Get the previous section for a given slug.
 */
export function getPrevSection(slug: string): CurriculumSection | null {
  const section = getSectionBySlug(slug);
  if (!section || !section.prev) return null;
  return getSectionBySlug(section.prev) ?? null;
}

/**
 * Get the next section for a given slug.
 */
export function getNextSection(slug: string): CurriculumSection | null {
  const section = getSectionBySlug(slug);
  if (!section || !section.next) return null;
  return getSectionBySlug(section.next) ?? null;
}

/**
 * Get all sections as a flat list for navigation.
 */
export function getAllSections(): CurriculumSection[] {
  return curriculumSections;
}

/**
 * Get the index of a section in the curriculum.
 */
export function getSectionIndex(slug: string): number {
  return curriculumSections.findIndex((section) => section.slug === slug);
}

/**
 * Check if a section is the first in the curriculum.
 */
export function isFirstSection(slug: string): boolean {
  return getSectionIndex(slug) === 0;
}

/**
 * Check if a section is the last in the curriculum.
 */
export function isLastSection(slug: string): boolean {
  return getSectionIndex(slug) === curriculumSections.length - 1;
}
