// JS Atlas - Curriculum v2
// Hierarchical model: Part → Lesson → Chapter → Section
// Source of truth for all curriculum navigation and content
/**
 * Required by:
 * - content-layout.tsx
 * - breadcrumb-nav.tsx
 *
 * Do not remove.
 */

export interface BreadcrumbItem {
  label: string;
  href: string;
}

export interface Section {
  id: string;
  title: string;
  slug: string;
}

export interface Chapter {
  id: string;
  title: string;
  slug: string;
  sections: Section[];
}

export interface Lesson {
  id: string;
  title: string;
  slug: string;
  chapters: Chapter[];
}

export interface Part {
  id: string;
  title: string;
  slug: string;
  lessons: Lesson[];
}

export interface Curriculum {
  parts: Part[];
}

// Route helper functions
export function getPartRoute(part: Part): string {
  return `/learn/${part.slug}`;
}

export function getLessonRoute(part: Part, lesson: Lesson): string {
  return `/learn/${part.slug}/${lesson.slug}`;
}

export function getChapterRoute(part: Part, lesson: Lesson, chapter: Chapter): string {
  return `/learn/${part.slug}/${lesson.slug}/${chapter.slug}`;
}

export function getSectionRoute(
  part: Part,
  lesson: Lesson,
  chapter: Chapter,
  section: Section
): string {
  return `/learn/${part.slug}/${lesson.slug}/${chapter.slug}#${section.slug}`;
}

// Helper to get all parts
export function getParts(): Part[] {
  return curriculum.parts;
}

// Helper to get a part by slug
export function getPartBySlug(slug: string): Part | undefined {
  return curriculum.parts.find((part) => part.slug === slug);
}

// Helper to get a lesson by slug within a part
export function getLessonBySlug(part: Part, slug: string): Lesson | undefined {
  return part.lessons.find((lesson) => lesson.slug === slug);
}

// Helper to get a chapter by slug within a lesson
export function getChapterBySlug(lesson: Lesson, slug: string): Chapter | undefined {
  return lesson.chapters.find((chapter) => chapter.slug === slug);
}

// Helper to get total chapter count for a part
export function getPartChapterCount(part: Part): number {
  return part.lessons.reduce((count, lesson) => count + lesson.chapters.length, 0);
}

// Helper to get total section count for a chapter
export function getChapterSectionCount(chapter: Chapter): number {
  return chapter.sections.length;
}

// Curriculum data
export const curriculum: Curriculum = {
  parts: [
    {
      id: "javascript-language",
      title: "The JavaScript Language",
      slug: "javascript-language",
      lessons: [
        {
          id: "introduction",
          title: "An Introduction",
          slug: "introduction",
          chapters: [
            {
              id: "introduction-to-javascript",
              title: "An Introduction to JavaScript",
              slug: "introduction-to-javascript",
              sections: [
                { id: "what-is-javascript", title: "What is JavaScript?", slug: "what-is-javascript" },
                { id: "how-javascript-works", title: "How JavaScript Works", slug: "how-javascript-works" },
                { id: "what-javascript-can-do", title: "What JavaScript Can Do", slug: "what-javascript-can-do" },
                { id: "what-javascript-cannot-do", title: "What JavaScript Cannot Do", slug: "what-javascript-cannot-do" },
                { id: "why-javascript-is-unique", title: "Why JavaScript Is Unique", slug: "why-javascript-is-unique" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
            {
              id: "manuals-and-specifications",
              title: "Manuals and Specifications",
              slug: "manuals-and-specifications",
              sections: [
                { id: "ecma-specification", title: "The ECMA Specification", slug: "ecma-specification" },
                { id: "mdn-documentation", title: "MDN Web Docs", slug: "mdn-documentation" },
                { id: "compatibility-tables", title: "Compatibility Tables", slug: "compatibility-tables" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
            {
              id: "code-editors",
              title: "Code Editors",
              slug: "code-editors",
              sections: [
                { id: "browser-console", title: "The Browser Console", slug: "browser-console" },
                { id: "vs-code", title: "Visual Studio Code", slug: "vs-code" },
                { id: "online-editors", title: "Online Editors", slug: "online-editors" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
            {
              id: "developer-console",
              title: "Developer Console",
              slug: "developer-console",
              sections: [
                { id: "opening-console", title: "Opening the Console", slug: "opening-console" },
                { id: "console-commands", title: "Console Commands", slug: "console-commands" },
                { id: "debugging-basics", title: "Debugging Basics", slug: "debugging-basics" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
          ],
        },
        {
          id: "javascript-fundamentals",
          title: "JavaScript Fundamentals",
          slug: "javascript-fundamentals",
          chapters: [
            {
              id: "hello-world",
              title: "Hello, World!",
              slug: "hello-world",
              sections: [
                { id: "the-script-tag", title: "The \"script\" Tag", slug: "the-script-tag" },
                { id: "external-scripts", title: "External Scripts", slug: "external-scripts" },
                { id: "script-order", title: "Script Order", slug: "script-order" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
            {
              id: "code-structure",
              title: "Code Structure",
              slug: "code-structure",
              sections: [
                { id: "statements", title: "Statements", slug: "statements" },
                { id: "semicolons", title: "Semicolons", slug: "semicolons" },
                { id: "comments", title: "Comments", slug: "comments" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
            {
              id: "variables",
              title: "Variables",
              slug: "variables",
              sections: [
                { id: "declaring-variables", title: "Declaring Variables", slug: "declaring-variables" },
                { id: "naming-rules", title: "Naming Rules", slug: "naming-rules" },
                { id: "constants", title: "Constants", slug: "constants" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
            {
              id: "data-types",
              title: "Data Types",
              slug: "data-types",
              sections: [
                { id: "primitive-types", title: "Primitive Types", slug: "primitive-types" },
                { id: "objects", title: "Objects", slug: "objects" },
                { id: "typeof-operator", title: "The typeof Operator", slug: "typeof-operator" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
            {
              id: "type-conversions",
              title: "Type Conversions",
              slug: "type-conversions",
              sections: [
                { id: "string-conversion", title: "String Conversion", slug: "string-conversion" },
                { id: "numeric-conversion", title: "Numeric Conversion", slug: "numeric-conversion" },
                { id: "boolean-conversion", title: "Boolean Conversion", slug: "boolean-conversion" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
            {
              id: "operators",
              title: "Operators",
              slug: "operators",
              sections: [
                { id: "arithmetic-operators", title: "Arithmetic Operators", slug: "arithmetic-operators" },
                { id: "comparison-operators", title: "Comparison Operators", slug: "comparison-operators" },
                { id: "logical-operators", title: "Logical Operators", slug: "logical-operators" },
                { id: "assignment-operators", title: "Assignment Operators", slug: "assignment-operators" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
            {
              id: "comparisons",
              title: "Comparisons",
              slug: "comparisons",
              sections: [
                { id: "equality-vs-strict", title: "Equality vs Strict Equality", slug: "equality-vs-strict" },
                { id: "null-vs-undefined", title: "null vs undefined", slug: "null-vs-undefined" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
            {
              id: "conditional-branching",
              title: "Conditional Branching",
              slug: "conditional-branching",
              sections: [
                { id: "if-statement", title: "The if Statement", slug: "if-statement" },
                { id: "else-if", title: "else if", slug: "else-if" },
                { id: "ternary-operator", title: "The Ternary Operator", slug: "ternary-operator" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
            {
              id: "logical-operators",
              title: "Logical Operators",
              slug: "logical-operators",
              sections: [
                { id: "or-operator", title: "The OR Operator", slug: "or-operator" },
                { id: "and-operator", title: "The AND Operator", slug: "and-operator" },
                { id: "not-operator", title: "The NOT Operator", slug: "not-operator" },
                { id: "nullish-coalescing", title: "Nullish Coalescing", slug: "nullish-coalescing" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
            {
              id: "loops",
              title: "Loops",
              slug: "loops",
              sections: [
                { id: "while-loop", title: "The while Loop", slug: "while-loop" },
                { id: "do-while", title: "The do...while Loop", slug: "do-while" },
                { id: "for-loop", title: "The for Loop", slug: "for-loop" },
                { id: "break-continue", title: "break and continue", slug: "break-continue" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
            {
              id: "switch-statement",
              title: "The switch Statement",
              slug: "switch-statement",
              sections: [
                { id: "syntax", title: "Syntax", slug: "syntax" },
                { id: "fallthrough", title: "Fall-through Behavior", slug: "fallthrough" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
            {
              id: "functions",
              title: "Functions",
              slug: "functions",
              sections: [
                { id: "function-declarations", title: "Function Declarations", slug: "function-declarations" },
                { id: "function-expressions", title: "Function Expressions", slug: "function-expressions" },
                { id: "arrow-functions", title: "Arrow Functions", slug: "arrow-functions" },
                { id: "parameters", title: "Parameters", slug: "parameters" },
                { id: "return-values", title: "Return Values", slug: "return-values" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
            {
              id: "function-expressions",
              title: "Function Expressions",
              slug: "function-expressions",
              sections: [
                { id: "callback-functions", title: "Callback Functions", slug: "callback-functions" },
                { id: "iife", title: "Immediately Invoked Function Expressions", slug: "iife" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
            {
              id: "arrow-functions",
              title: "Arrow Functions",
              slug: "arrow-functions",
              sections: [
                { id: "syntax", title: "Syntax", slug: "syntax" },
                { id: "this-binding", title: "this Binding", slug: "this-binding" },
                { id: "when-to-use", title: "When to Use Arrow Functions", slug: "when-to-use" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
            {
              id: "javascript-specials",
              title: "JavaScript Specials",
              slug: "javascript-specials",
              sections: [
                { id: "code-quality", title: "Code Quality", slug: "code-quality" },
                { id: "best-practices", title: "Best Practices", slug: "best-practices" },
                { id: "common-pitfalls", title: "Common Pitfalls", slug: "common-pitfalls" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
          ],
        },
        {
          id: "code-quality",
          title: "Code Quality",
          slug: "code-quality",
          chapters: [
            {
              id: "debugging-chrome",
              title: "Debugging in Chrome",
              slug: "debugging-chrome",
              sections: [
                { id: "sources-panel", title: "The Sources Panel", slug: "sources-panel" },
                { id: "breakpoints", title: "Breakpoints", slug: "breakpoints" },
                { id: "watch-expressions", title: "Watch Expressions", slug: "watch-expressions" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
            {
              id: "coding-style",
              title: "Coding Style",
              slug: "coding-style",
              sections: [
                { id: "curly-braces", title: "Curly Braces", slug: "curly-braces" },
                { id: "line-length", title: "Line Length", slug: "line-length" },
                { id: "naming-conventions", title: "Naming Conventions", slug: "naming-conventions" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
            {
              id: "comments",
              title: "Comments",
              slug: "comments",
              sections: [
                { id: "good-comments", title: "Good Comments", slug: "good-comments" },
                { id: "bad-comments", title: "Bad Comments", slug: "bad-comments" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
            {
              id: "ninja-code",
              title: "Ninja Code",
              slug: "ninja-code",
              sections: [
                { id: "readability", title: "Readability Matters", slug: "readability" },
                { id: "code-review", title: "Code Review", slug: "code-review" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
            {
              id: "automated-testing",
              title: "Automated Testing",
              slug: "automated-testing",
              sections: [
                { id: "unit-tests", title: "Unit Tests", slug: "unit-tests" },
                { id: "integration-tests", title: "Integration Tests", slug: "integration-tests" },
                { id: "test-runners", title: "Test Runners", slug: "test-runners" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
            {
              id: "polyfills",
              title: "Polyfills",
              slug: "polyfills",
              sections: [
                { id: "what-are-polyfills", title: "What Are Polyfills?", slug: "what-are-polyfills" },
                { id: "core-js", title: "core-js", slug: "core-js" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
          ],
        },
        {
          id: "objects-basics",
          title: "Objects: The Basics",
          slug: "objects-basics",
          chapters: [
            {
              id: "objects",
              title: "Objects",
              slug: "objects",
              sections: [
                { id: "object-literals", title: "Object Literals", slug: "object-literals" },
                { id: "property-access", title: "Property Access", slug: "property-access" },
                { id: "computed-properties", title: "Computed Properties", slug: "computed-properties" },
                { id: "property-existence", title: "Property Existence", slug: "property-existence" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
            {
              id: "object-methods",
              title: "Object Methods",
              slug: "object-methods",
              sections: [
                { id: "method-shorthand", title: "Method Shorthand", slug: "method-shorthand" },
                { id: "this-keyword", title: "The this Keyword", slug: "this-keyword" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
            {
              id: "constructor-new",
              title: "Constructor, operator \"new\"",
              slug: "constructor-new",
              sections: [
                { id: "constructor-function", title: "Constructor Function", slug: "constructor-function" },
                { id: "new-operator", title: "The new Operator", slug: "new-operator" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
            {
              id: "optional-chaining",
              title: "Optional Chaining",
              slug: "optional-chaining",
              sections: [
                { id: "syntax", title: "Syntax", slug: "syntax" },
                { id: "use-cases", title: "Use Cases", slug: "use-cases" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
            {
              id: "symbol-type",
              title: "Symbol Type",
              slug: "symbol-type",
              sections: [
                { id: "creating-symbols", title: "Creating Symbols", slug: "creating-symbols" },
                { id: "global-symbols", title: "Global Symbols", slug: "global-symbols" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
            {
              id: "object-toprimitive",
              title: "Object to Primitive Conversion",
              slug: "object-toprimitive",
              sections: [
                { id: "hints", title: "Conversion Hints", slug: "hints" },
                { id: "toprimitive", title: "Symbol.toPrimitive", slug: "toprimitive" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
          ],
        },
        {
          id: "data-types-advanced",
          title: "Data Types",
          slug: "data-types-advanced",
          chapters: [
            {
              id: "primitives-methods",
              title: "Primitives and Methods",
              slug: "primitives-methods",
              sections: [
                { id: "wrapper-objects", title: "Wrapper Objects", slug: "wrapper-objects" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
            {
              id: "numbers",
              title: "Numbers",
              slug: "numbers",
              sections: [
                { id: "number-types", title: "Number Types", slug: "number-types" },
                { id: "math-object", title: "The Math Object", slug: "math-object" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
            {
              id: "strings",
              title: "Strings",
              slug: "strings",
              sections: [
                { id: "quotes", title: "Quotes", slug: "quotes" },
                { id: "template-literals", title: "Template Literals", slug: "template-literals" },
                { id: "string-methods", title: "String Methods", slug: "string-methods" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
            {
              id: "arrays",
              title: "Arrays",
              slug: "arrays",
              sections: [
                { id: "array-basics", title: "Array Basics", slug: "array-basics" },
                { id: "array-methods", title: "Array Methods", slug: "array-methods" },
                { id: "multidimensional", title: "Multidimensional Arrays", slug: "multidimensional" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
            {
              id: "array-methods",
              title: "Array Methods",
              slug: "array-methods",
              sections: [
                { id: "iteration-methods", title: "Iteration Methods", slug: "iteration-methods" },
                { id: "transformation-methods", title: "Transformation Methods", slug: "transformation-methods" },
                { id: "search-methods", title: "Search Methods", slug: "search-methods" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
            {
              id: "iterables",
              title: "Iterables",
              slug: "iterables",
              sections: [
                { id: "symbol-iterator", title: "Symbol.iterator", slug: "symbol-iterator" },
                { id: "for-of", title: "The for...of Loop", slug: "for-of" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
            {
              id: "map-set",
              title: "Map and Set",
              slug: "map-set",
              sections: [
                { id: "map", title: "Map", slug: "map" },
                { id: "set", title: "Set", slug: "set" },
                { id: "weakmap-weakset", title: "WeakMap and WeakSet", slug: "weakmap-weakset" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
            {
              id: "weakmap-weakset",
              title: "WeakMap and WeakSet",
              slug: "weakmap-weakset",
              sections: [
                { id: "garbage-collection", title: "Garbage Collection", slug: "garbage-collection" },
                { id: "use-cases", title: "Use Cases", slug: "use-cases" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
            {
              id: "object-keys-values-entries",
              title: "Object.keys, values, entries",
              slug: "object-keys-values-entries",
              sections: [
                { id: "keys-values-entries", title: "keys, values, entries", slug: "keys-values-entries" },
                { id: "transforming-objects", title: "Transforming Objects", slug: "transforming-objects" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
            {
              id: "destructuring-assignment",
              title: "Destructuring Assignment",
              slug: "destructuring-assignment",
              sections: [
                { id: "array-destructuring", title: "Array Destructuring", slug: "array-destructuring" },
                { id: "object-destructuring", title: "Object Destructuring", slug: "object-destructuring" },
                { id: "nested-destructuring", title: "Nested Destructuring", slug: "nested-destructuring" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
            {
              id: "date-time",
              title: "Date and Time",
              slug: "date-time",
              sections: [
                { id: "creating-dates", title: "Creating Dates", slug: "creating-dates" },
                { id: "date-methods", title: "Date Methods", slug: "date-methods" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
            {
              id: "json-methods",
              title: "JSON Methods",
              slug: "json-methods",
              sections: [
                { id: "json-stringify", title: "JSON.stringify", slug: "json-stringify" },
                { id: "json-parse", title: "JSON.parse", slug: "json-parse" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
          ],
        },
        {
          id: "advanced-working-with-functions",
          title: "Advanced Working with Functions",
          slug: "advanced-working-with-functions",
          chapters: [
            {
              id: "recursion",
              title: "Recursion",
              slug: "recursion",
              sections: [
                { id: "recursive-thinking", title: "Recursive Thinking", slug: "recursive-thinking" },
                { id: "tail-recursion", title: "Tail Recursion", slug: "tail-recursion" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
            {
              id: "rest-parameters-spread",
              title: "Rest Parameters and Spread Syntax",
              slug: "rest-parameters-spread",
              sections: [
                { id: "rest-parameters", title: "Rest Parameters", slug: "rest-parameters" },
                { id: "spread-syntax", title: "Spread Syntax", slug: "spread-syntax" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
            {
              id: "closure",
              title: "Closure",
              slug: "closure",
              sections: [
                { id: "lexical-environment", title: "Lexical Environment", slug: "lexical-environment" },
                { id: "nested-functions", title: "Nested Functions", slug: "nested-functions" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
            {
              id: "var-scope",
              title: "The old \"var\"",
              slug: "var-scope",
              sections: [
                { id: "var-vs-let", title: "var vs let", slug: "var-vs-let" },
                { id: "hoisting", title: "Hoisting", slug: "hoisting" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
            {
              id: "global-object",
              title: "Global Object",
              slug: "global-object",
              sections: [
                { id: "window-object", title: "The window Object", slug: "window-object" },
                { id: "globalthis", title: "globalThis", slug: "globalthis" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
            {
              id: "function-object",
              title: "Function Object",
              slug: "function-object",
              sections: [
                { id: "name-property", title: "The name Property", slug: "name-property" },
                { id: "length-property", title: "The length Property", slug: "length-property" },
                { id: "custom-properties", title: "Custom Properties", slug: "custom-properties" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
            {
              id: "new-function",
              title: "The \"new Function\" syntax",
              slug: "new-function",
              sections: [
                { id: "syntax", title: "Syntax", slug: "syntax" },
                { id: "use-cases", title: "Use Cases", slug: "use-cases" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
            {
              id: "settimeout-setinterval",
              title: "Scheduling: setTimeout and setInterval",
              slug: "settimeout-setinterval",
              sections: [
                { id: "settimeout", title: "setTimeout", slug: "settimeout" },
                { id: "setinterval", title: "setInterval", slug: "setinterval" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
            {
              id: "decorators",
              title: "Decorators",
              slug: "decorators",
              sections: [
                { id: "function-decorators", title: "Function Decorators", slug: "function-decorators" },
                { id: "method-decorators", title: "Method Decorators", slug: "method-decorators" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
            {
              id: "bind",
              title: "Function binding",
              slug: "bind",
              sections: [
                { id: "losing-this", title: "Losing this", slug: "losing-this" },
                { id: "function-bind", title: "Function.prototype.bind", slug: "function-bind" },
                { id: "partial-functions", title: "Partial Functions", slug: "partial-functions" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
            {
              id: "arrow-functions-revisited",
              title: "Arrow functions revisited",
              slug: "arrow-functions-revisited",
              sections: [
                { id: "no-this", title: "No separate this", slug: "no-this" },
                { id: "no-arguments", title: "No arguments object", slug: "no-arguments" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
          ],
        },
        {
          id: "object-properties",
          title: "Object Properties Configuration",
          slug: "object-properties",
          chapters: [
            {
              id: "property-flags-descriptors",
              title: "Property flags and descriptors",
              slug: "property-flags-descriptors",
              sections: [
                { id: "property-flags", title: "Property Flags", slug: "property-flags" },
                { id: "descriptors", title: "Property Descriptors", slug: "descriptors" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
            {
              id: "property-getters-setters",
              title: "Property getters and setters",
              slug: "property-getters-setters",
              sections: [
                { id: "getters", title: "Getters", slug: "getters" },
                { id: "setters", title: "Setters", slug: "setters" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
          ],
        },
        {
          id: "prototypes-inheritance",
          title: "Prototypes, Inheritance",
          slug: "prototypes-inheritance",
          chapters: [
            {
              id: "prototypal-inheritance",
              title: "Prototypal inheritance",
              slug: "prototypal-inheritance",
              sections: [
                { id: "prototype-property", title: "The [[Prototype]] Property", slug: "prototype-property" },
                { id: "prototype-chain", title: "The Prototype Chain", slug: "prototype-chain" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
            {
              id: "function-prototype",
              title: "F.prototype",
              slug: "function-prototype",
              sections: [
                { id: "constructor-property", title: "The constructor Property", slug: "constructor-property" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
            {
              id: "native-prototypes",
              title: "Native prototypes",
              slug: "native-prototypes",
              sections: [
                { id: "object-prototype", title: "Object.prototype", slug: "object-prototype" },
                { id: "primitives", title: "Primitives", slug: "primitives" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
            {
              id: "prototype-methods",
              title: "Prototype methods",
              slug: "prototype-methods",
              sections: [
                { id: "object-create", title: "Object.create", slug: "object-create" },
                { id: "object-setprototypeof", title: "Object.setPrototypeOf", slug: "object-setprototypeof" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
          ],
        },
        {
          id: "classes",
          title: "Classes",
          slug: "classes",
          chapters: [
            {
              id: "class-syntax",
              title: "Class syntax",
              slug: "class-syntax",
              sections: [
                { id: "class-declaration", title: "Class Declaration", slug: "class-declaration" },
                { id: "class-expression", title: "Class Expression", slug: "class-expression" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
            {
              id: "class-inheritance",
              title: "Class inheritance",
              slug: "class-inheritance",
              sections: [
                { id: "extends", title: "The extends Keyword", slug: "extends" },
                { id: "method-overriding", title: "Method Overriding", slug: "method-overriding" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
            {
              id: "static-properties-methods",
              title: "Static properties and methods",
              slug: "static-properties-methods",
              sections: [
                { id: "static-methods", title: "Static Methods", slug: "static-methods" },
                { id: "static-properties", title: "Static Properties", slug: "static-properties" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
            {
              id: "private-protected-properties",
              title: "Private and protected properties and methods",
              slug: "private-protected-properties",
              sections: [
                { id: "private-fields", title: "Private Fields", slug: "private-fields" },
                { id: "protected-fields", title: "Protected Fields", slug: "protected-fields" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
            {
              id: "extending-built-in-classes",
              title: "Extending built-in classes",
              slug: "extending-built-in-classes",
              sections: [
                { id: "extending-error", title: "Extending Error", slug: "extending-error" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
            {
              id: "class-checking-instanceof",
              title: "Class checking: \"instanceof\"",
              slug: "class-checking-instanceof",
              sections: [
                { id: "instanceof-operator", title: "The instanceof Operator", slug: "instanceof-operator" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
            {
              id: "mixins",
              title: "Mixins",
              slug: "mixins",
              sections: [
                { id: "mixin-pattern", title: "The Mixin Pattern", slug: "mixin-pattern" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
          ],
        },
        {
          id: "error-handling",
          title: "Error Handling",
          slug: "error-handling",
          chapters: [
            {
              id: "try-catch",
              title: "Error handling, \"try...catch\"",
              slug: "try-catch",
              sections: [
                { id: "syntax", title: "Syntax", slug: "syntax" },
                { id: "error-object", title: "The Error Object", slug: "error-object" },
                { id: "throw", title: "The throw Statement", slug: "throw" },
                { id: "rethrowing", title: "Rethrowing", slug: "rethrowing" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
            {
              id: "custom-errors",
              title: "Custom errors, extending Error",
              slug: "custom-errors",
              sections: [
                { id: "extending-error", title: "Extending Error", slug: "extending-error" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
          ],
        },
        {
          id: "promises-async",
          title: "Promises, async/await",
          slug: "promises-async",
          chapters: [
            {
              id: "callbacks",
              title: "Introduction: callbacks",
              slug: "callbacks",
              sections: [
                { id: "async-nature", title: "The Asynchronous Nature", slug: "async-nature" },
                { id: "callback-pattern", title: "The Callback Pattern", slug: "callback-pattern" },
                { id: "callback-hell", title: "Callback Hell", slug: "callback-hell" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
            {
              id: "promise-basics",
              title: "Promise",
              slug: "promise-basics",
              sections: [
                { id: "creating-promises", title: "Creating Promises", slug: "creating-promises" },
                { id: "consumers", title: "Consumers: then, catch, finally", slug: "consumers" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
            {
              id: "promise-chaining",
              title: "Promise chaining",
              slug: "promise-chaining",
              sections: [
                { id: "returning-promises", title: "Returning Promises", slug: "returning-promises" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
            {
              id: "promise-error-handling",
              title: "Error handling with promises",
              slug: "promise-error-handling",
              sections: [
                { id: "implicit-try-catch", title: "Implicit try...catch", slug: "implicit-try-catch" },
                { id: "unhandled-rejections", title: "Unhandled Rejections", slug: "unhandled-rejections" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
            {
              id: "promise-api",
              title: "Promise API",
              slug: "promise-api",
              sections: [
                { id: "promise-all", title: "Promise.all", slug: "promise-all" },
                { id: "promise-allsettled", title: "Promise.allSettled", slug: "promise-allsettled" },
                { id: "promise-race", title: "Promise.race", slug: "promise-race" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
            {
              id: "promisification",
              title: "Promisification",
              slug: "promisification",
              sections: [
                { id: "callback-to-promise", title: "Callback to Promise", slug: "callback-to-promise" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
            {
              id: "microtasks",
              title: "Microtasks",
              slug: "microtasks",
              sections: [
                { id: "microtask-queue", title: "The Microtask Queue", slug: "microtask-queue" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
            {
              id: "async-await",
              title: "async/await",
              slug: "async-await",
              sections: [
                { id: "async-functions", title: "Async Functions", slug: "async-functions" },
                { id: "await", title: "The await Keyword", slug: "await" },
                { id: "error-handling", title: "Error Handling", slug: "error-handling" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
          ],
        },
        {
          id: "generators-iterators",
          title: "Generators and Iterators",
          slug: "generators-iterators",
          chapters: [
            {
              id: "generators",
              title: "Generators",
              slug: "generators",
              sections: [
                { id: "generator-functions", title: "Generator Functions", slug: "generator-functions" },
                { id: "yield", title: "The yield Keyword", slug: "yield" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
            {
              id: "async-generators",
              title: "Async generators",
              slug: "async-generators",
              sections: [
                { id: "async-iteration", title: "Async Iteration", slug: "async-iteration" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
          ],
        },
        {
          id: "modules",
          title: "Modules",
          slug: "modules",
          chapters: [
            {
              id: "modules-intro",
              title: "Modules, introduction",
              slug: "modules-intro",
              sections: [
                { id: "what-is-module", title: "What Is a Module?", slug: "what-is-module" },
                { id: "module-types", title: "Module Types", slug: "module-types" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
            {
              id: "export-import",
              title: "Export and Import",
              slug: "export-import",
              sections: [
                { id: "named-exports", title: "Named Exports", slug: "named-exports" },
                { id: "default-exports", title: "Default Exports", slug: "default-exports" },
                { id: "re-exporting", title: "Re-exporting", slug: "re-exporting" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
            {
              id: "dynamic-imports",
              title: "Dynamic imports",
              slug: "dynamic-imports",
              sections: [
                { id: "import-function", title: "The import() Function", slug: "import-function" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
          ],
        },
        {
          id: "miscellaneous",
          title: "Miscellaneous",
          slug: "miscellaneous",
          chapters: [
            {
              id: "proxy",
              title: "Proxy and Reflect",
              slug: "proxy",
              sections: [
                { id: "proxy-basics", title: "Proxy Basics", slug: "proxy-basics" },
                { id: "reflect", title: "Reflect", slug: "reflect" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
            {
              id: "eval",
              title: "Eval: run a code string",
              slug: "eval",
              sections: [
                { id: "eval-function", title: "The eval Function", slug: "eval-function" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
            {
              id: "currying",
              title: "Currying",
              slug: "currying",
              sections: [
                { id: "currying-pattern", title: "The Currying Pattern", slug: "currying-pattern" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
            {
              id: "bigint",
              title: "BigInt",
              slug: "bigint",
              sections: [
                { id: "creating-bigint", title: "Creating BigInt", slug: "creating-bigint" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
            {
              id: "intl",
              title: "Internationalization: Intl",
              slug: "intl",
              sections: [
                { id: "intl-collator", title: "Intl.Collator", slug: "intl-collator" },
                { id: "intl-datetimeformat", title: "Intl.DateTimeFormat", slug: "intl-datetimeformat" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
            {
              id: "weakref-finalizationregistry",
              title: "WeakRef and FinalizationRegistry",
              slug: "weakref-finalizationregistry",
              sections: [
                { id: "weakref", title: "WeakRef", slug: "weakref" },
                { id: "finalizationregistry", title: "FinalizationRegistry", slug: "finalizationregistry" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "browser-apis",
      title: "Browser APIs",
      slug: "browser-apis",
      lessons: [
        {
          id: "document",
          title: "Document",
          slug: "document",
          chapters: [
            {
              id: "browser-environment",
              title: "Browser Environment",
              slug: "browser-environment",
              sections: [
                { id: "dom-tree", title: "The DOM Tree", slug: "dom-tree" },
                { id: "bom", title: "The Browser Object Model", slug: "bom" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
            {
              id: "dom-nodes",
              title: "DOM Nodes",
              slug: "dom-nodes",
              sections: [
                { id: "node-types", title: "Node Types", slug: "node-types" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
            {
              id: "dom-navigation",
              title: "DOM Navigation",
              slug: "dom-navigation",
              sections: [
                { id: "parent-child", title: "Parent and Child", slug: "parent-child" },
                { id: "siblings", title: "Siblings", slug: "siblings" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
            {
              id: "searching-dom",
              title: "Searching the DOM",
              slug: "searching-dom",
              sections: [
                { id: "getelementbyid", title: "getElementById", slug: "getelementbyid" },
                { id: "queryselector", title: "querySelector", slug: "queryselector" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
            {
              id: "node-properties",
              title: "Node Properties",
              slug: "node-properties",
              sections: [
                { id: "innerhtml", title: "innerHTML", slug: "innerhtml" },
                { id: "textcontent", title: "textContent", slug: "textcontent" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
            {
              id: "attributes-properties",
              title: "Attributes and Properties",
              slug: "attributes-properties",
              sections: [
                { id: "html-attributes", title: "HTML Attributes", slug: "html-attributes" },
                { id: "dom-properties", title: "DOM Properties", slug: "dom-properties" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
            {
              id: "modifying-document",
              title: "Modifying the Document",
              slug: "modifying-document",
              sections: [
                { id: "creating-elements", title: "Creating Elements", slug: "creating-elements" },
                { id: "inserting-removing", title: "Inserting and Removing", slug: "inserting-removing" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
            {
              id: "styles-classes",
              title: "Styles and Classes",
              slug: "styles-classes",
              sections: [
                { id: "className-classList", title: "className and classList", slug: "classname-classlist" },
                { id: "style-property", title: "The style Property", slug: "style-property" },
                { id: "computed-styles", title: "Computed Styles", slug: "computed-styles" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
            {
              id: "element-size-scroll",
              title: "Element Size and Scroll",
              slug: "element-size-scroll",
              sections: [
                { id: "offset-client", title: "offset and client", slug: "offset-client" },
                { id: "scroll", title: "Scroll", slug: "scroll" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
            {
              id: "window-sizes-scroll",
              title: "Window Sizes and Scroll",
              slug: "window-sizes-scroll",
              sections: [
                { id: "window-dimensions", title: "Window Dimensions", slug: "window-dimensions" },
                { id: "document-scroll", title: "Document Scroll", slug: "document-scroll" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
            {
              id: "coordinates",
              title: "Coordinates",
              slug: "coordinates",
              sections: [
                { id: "element-coordinates", title: "Element Coordinates", slug: "element-coordinates" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
          ],
        },
        {
          id: "events",
          title: "Events",
          slug: "events",
          chapters: [
            {
              id: "event-basics",
              title: "Introduction to Events",
              slug: "event-basics",
              sections: [
                { id: "event-handlers", title: "Event Handlers", slug: "event-handlers" },
                { id: "addeventlistener", title: "addEventListener", slug: "addeventlistener" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
            {
              id: "event-bubbling",
              title: "Bubbling and Capturing",
              slug: "event-bubbling",
              sections: [
                { id: "bubbling", title: "Bubbling", slug: "bubbling" },
                { id: "capturing", title: "Capturing", slug: "capturing" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
            {
              id: "event-delegation",
              title: "Event Delegation",
              slug: "event-delegation",
              sections: [
                { id: "delegation-pattern", title: "The Delegation Pattern", slug: "delegation-pattern" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
            {
              id: "default-browser-actions",
              title: "Default Browser Actions",
              slug: "default-browser-actions",
              sections: [
                { id: "preventdefault", title: "preventDefault", slug: "preventdefault" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
            {
              id: "custom-events",
              title: "Custom Events",
              slug: "custom-events",
              sections: [
                { id: "creating-events", title: "Creating Events", slug: "creating-events" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
            {
              id: "keyboard-events",
              title: "Keyboard Events",
              slug: "keyboard-events",
              sections: [
                { id: "keydown-keyup", title: "keydown and keyup", slug: "keydown-keyup" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
            {
              id: "pointer-events",
              title: "Pointer Events",
              slug: "pointer-events",
              sections: [
                { id: "mousedown-mouseup", title: "mousedown and mouseup", slug: "mousedown-mouseup" },
                { id: "mousemove", title: "mousemove", slug: "mousemove" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
            {
              id: "scroll-events",
              title: "Scroll Events",
              slug: "scroll-events",
              sections: [
                { id: "scroll-event", title: "The scroll Event", slug: "scroll-event" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
            {
              id: "load-events",
              title: "Page Lifecycle Events",
              slug: "load-events",
              sections: [
                { id: "domcontentloaded", title: "DOMContentLoaded", slug: "domcontentloaded" },
                { id: "load-unload", title: "load and unload", slug: "load-unload" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
          ],
        },
        {
          id: "network-requests",
          title: "Network Requests",
          slug: "network-requests",
          chapters: [
            {
              id: "fetch",
              title: "Fetch",
              slug: "fetch",
              sections: [
                { id: "basic-syntax", title: "Basic Syntax", slug: "basic-syntax" },
                { id: "response-properties", title: "Response Properties", slug: "response-properties" },
                { id: "post-requests", title: "POST Requests", slug: "post-requests" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
            {
              id: "formdata",
              title: "FormData",
              slug: "formdata",
              sections: [
                { id: "creating-formdata", title: "Creating FormData", slug: "creating-formdata" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
            {
              id: "fetch-abort",
              title: "Fetch: Abort",
              slug: "fetch-abort",
              sections: [
                { id: "abortcontroller", title: "AbortController", slug: "abortcontroller" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
            {
              id: "fetch-progress",
              title: "Fetch: Progress",
              slug: "fetch-progress",
              sections: [
                { id: "upload-progress", title: "Upload Progress", slug: "upload-progress" },
                { id: "download-progress", title: "Download Progress", slug: "download-progress" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
            {
              id: "fetch-crossorigin",
              title: "Fetch: Cross-Origin Requests",
              slug: "fetch-crossorigin",
              sections: [
                { id: "cors", title: "CORS", slug: "cors" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
            {
              id: "fetch-api",
              title: "Fetch API",
              slug: "fetch-api",
              sections: [
                { id: "headers", title: "Headers", slug: "headers" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
            {
              id: "url-object",
              title: "URL Object",
              slug: "url-object",
              sections: [
                { id: "url-parts", title: "URL Parts", slug: "url-parts" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
            {
              id: "xmlhttprequest",
              title: "XMLHttpRequest",
              slug: "xmlhttprequest",
              sections: [
                { id: "basic-usage", title: "Basic Usage", slug: "basic-usage" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
            {
              id: "websocket",
              title: "WebSocket",
              slug: "websocket",
              sections: [
                { id: "creating-websocket", title: "Creating a WebSocket", slug: "creating-websocket" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
            {
              id: "server-sent-events",
              title: "Server-Sent Events",
              slug: "server-sent-events",
              sections: [
                { id: "event-source", title: "EventSource", slug: "event-source" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
          ],
        },
        {
          id: "storage",
          title: "Storing Data in the Browser",
          slug: "storage",
          chapters: [
            {
              id: "cookies",
              title: "Cookies",
              slug: "cookies",
              sections: [
                { id: "reading-cookies", title: "Reading Cookies", slug: "reading-cookies" },
                { id: "writing-cookies", title: "Writing Cookies", slug: "writing-cookies" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
            {
              id: "localstorage-sessionstorage",
              title: "localStorage and sessionStorage",
              slug: "localstorage-sessionstorage",
              sections: [
                { id: "localstorage", title: "localStorage", slug: "localstorage" },
                { id: "sessionstorage", title: "sessionStorage", slug: "sessionstorage" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
            {
              id: "indexeddb",
              title: "IndexedDB",
              slug: "indexeddb",
              sections: [
                { id: "opening-database", title: "Opening a Database", slug: "opening-database" },
                { id: "object-stores", title: "Object Stores", slug: "object-stores" },
                { id: "transactions", title: "Transactions", slug: "transactions" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
          ],
        },
        {
          id: "frames-windows",
          title: "Frames and Windows",
          slug: "frames-windows",
          chapters: [
            {
              id: "popups",
              title: "Popups",
              slug: "popups",
              sections: [
                { id: "window-open", title: "window.open", slug: "window-open" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
            {
              id: "cross-window-communication",
              title: "Cross-Window Communication",
              slug: "cross-window-communication",
              sections: [
                { id: "postmessage", title: "postMessage", slug: "postmessage" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
            {
              id: "clickjacking",
              title: "Clickjacking",
              slug: "clickjacking",
              sections: [
                { id: "x-frame-options", title: "X-Frame-Options", slug: "x-frame-options" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "additional-articles",
      title: "Additional Articles",
      slug: "additional-articles",
      lessons: [
        {
          id: "performance",
          title: "Performance",
          slug: "performance",
          chapters: [
            {
              id: "memory-management",
              title: "Memory Management",
              slug: "memory-management",
              sections: [
                { id: "garbage-collection", title: "Garbage Collection", slug: "garbage-collection" },
                { id: "memory-leaks", title: "Memory Leaks", slug: "memory-leaks" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
            {
              id: "event-loop",
              title: "The Event Loop",
              slug: "event-loop",
              sections: [
                { id: "macrotasks-microtasks", title: "Macrotasks and Microtasks", slug: "macrotasks-microtasks" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
            {
              id: "optimization",
              title: "Optimization Techniques",
              slug: "optimization",
              sections: [
                { id: "debouncing", title: "Debouncing", slug: "debouncing" },
                { id: "throttling", title: "Throttling", slug: "throttling" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
          ],
        },
        {
          id: "security",
          title: "Security",
          slug: "security",
          chapters: [
            {
              id: "xss",
              title: "Cross-Site Scripting (XSS)",
              slug: "xss",
              sections: [
                { id: "types-of-xss", title: "Types of XSS", slug: "types-of-xss" },
                { id: "prevention", title: "Prevention", slug: "prevention" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
            {
              id: "csrf",
              title: "Cross-Site Request Forgery (CSRF)",
              slug: "csrf",
              sections: [
                { id: "how-csrf-works", title: "How CSRF Works", slug: "how-csrf-works" },
                { id: "prevention", title: "Prevention", slug: "prevention" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
            {
              id: "csp",
              title: "Content Security Policy",
              slug: "csp",
              sections: [
                { id: "csp-directives", title: "CSP Directives", slug: "csp-directives" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
          ],
        },
        {
          id: "testing",
          title: "Testing",
          slug: "testing",
          chapters: [
            {
              id: "testing-overview",
              title: "Testing Overview",
              slug: "testing-overview",
              sections: [
                { id: "manual-vs-automated", title: "Manual vs Automated", slug: "manual-vs-automated" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
            {
              id: "behavior-driven-development",
              title: "Behavior Driven Development",
              slug: "behavior-driven-development",
              sections: [
                { id: "bdd-concepts", title: "BDD Concepts", slug: "bdd-concepts" },
                { id: "summary", title: "Summary", slug: "summary" },
              ],
            },
          ],
        },
      ],
    },
  ],
};
