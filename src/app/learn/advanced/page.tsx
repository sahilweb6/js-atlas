import { AppShell } from "@/components/layout/app-shell";
import { LessonLayout } from "@/components/learning/lesson-layout";
import {
  getSectionBySlug,
  getPrevSection,
  getNextSection,
} from "@/components/learning/curriculum-data";

/**
 * Advanced JavaScript — /learn/advanced
 *
 * Covers closures, this binding, prototypes, ES modules,
 * design patterns, memory management, and performance.
 */
export default function AdvancedPage() {
  const slug = "advanced";
  const section = getSectionBySlug(slug)!;
  const prev = getPrevSection(slug);
  const next = getNextSection(slug);

  return (
    <AppShell showSidebar>
      <LessonLayout
        title={section.title}
        description={section.description}
        prev={prev}
        next={next}
      >
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-[#0F172A] dark:text-[#F8FAFC]">
              Closures and Lexical Scope
            </h2>
            <p className="mt-3 text-[#475569] dark:text-[#94A3B8]">
              A closure is a function that remembers and accesses variables from its
              outer scope even after the outer function has finished executing. This
              happens because functions in JavaScript carry a reference to their
              lexical environment — the scope where they were defined, not where
              they are called. Closures are the foundation of data privacy,
              factory functions, and many design patterns.
            </p>
            <pre className="mt-3 overflow-x-auto rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] p-4 dark:border-[#1E293B] dark:bg-[#0F172A]">
              <code className="font-mono text-sm text-[#0F172A] dark:text-[#F8FAFC]">
                {`function createCounter() {
  let count = 0;
  return {
    increment: () => ++count,
    decrement: () => --count,
    getValue: () => count,
  };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.getValue());  // 1`}
              </code>
            </pre>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#0F172A] dark:text-[#F8FAFC]">
              The this Keyword and Binding
            </h2>
            <p className="mt-3 text-[#475569] dark:text-[#94A3B8]">
              The value of
              <code className="rounded bg-[#F8FAFC] px-1.5 py-0.5 font-mono text-sm text-[#5B5BD6] dark:bg-[#1E293B] dark:text-[#22D3EE]">
                this
              </code>{" "}
              depends entirely on how a function is called, not where it is defined.
              In a method,
              <code className="rounded bg-[#F8FAFC] px-1.5 py-0.5 font-mono text-sm text-[#5B5BD6] dark:bg-[#1E293B] dark:text-[#22D3EE]">
                this
              </code>{" "}
              refers to the object. In a regular function, it refers to the global
              object (or undefined in strict mode). Arrow functions do not have
              their own
              <code className="rounded bg-[#F8FAFC] px-1.5 py-0.5 font-mono text-sm text-[#5B5BD6] dark:bg-[#1E293B] dark:text-[#22D3EE]">
                this
              </code>
              — they inherit it from the surrounding scope. You can explicitly bind
              <code className="rounded bg-[#F8FAFC] px-1.5 py-0.5 font-mono text-sm text-[#5B5BD6] dark:bg-[#1E293B] dark:text-[#22D3EE]">
                this
              </code>{" "}
              with{" "}
              <code className="rounded bg-[#F8FAFC] px-1.5 py-0.5 font-mono text-sm text-[#5B5BD6] dark:bg-[#1E293B] dark:text-[#22D3EE]">
                .call()
              </code>
              ,
              <code className="rounded bg-[#F8FAFC] px-1.5 py-0.5 font-mono text-sm text-[#5B5BD6] dark:bg-[#1E293B] dark:text-[#22D3EE]">
                .apply()
              </code>
              , or{" "}
              <code className="rounded bg-[#F8FAFC] px-1.5 py-0.5 font-mono text-sm text-[#5B5BD6] dark:bg-[#1E293B] dark:text-[#22D3EE]">
                .bind()
              </code>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#0F172A] dark:text-[#F8FAFC]">
              Prototypes and Inheritance
            </h2>
            <p className="mt-3 text-[#475569] dark:text-[#94A3B8]">
              JavaScript uses prototypal inheritance rather than classical class-based
              inheritance. Every object has an internal link to another object called
              its prototype. When you access a property that does not exist on an
              object, JavaScript walks up the prototype chain until it finds the
              property or reaches the end. The{" "}
              <code className="rounded bg-[#F8FAFC] px-1.5 py-0.5 font-mono text-sm text-[#5B5BD6] dark:bg-[#1E293B] dark:text-[#22D3EE]">
                Object.create()
              </code>{" "}
              method creates a new object with a specified prototype, and{" "}
              <code className="rounded bg-[#F8FAFC] px-1.5 py-0.5 font-mono text-sm text-[#5B5BD6] dark:bg-[#1E293B] dark:text-[#22D3EE]">
                class
              </code>{" "}
              syntax (ES6) is syntactic sugar over this prototype system.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#0F172A] dark:text-[#F8FAFC]">
              ES Modules: import and export
            </h2>
            <p className="mt-3 text-[#475569] dark:text-[#94A3B8]">
              ES Modules (ESM) provide a standardized way to organize code into
              reusable files. Use
              <code className="rounded bg-[#F8FAFC] px-1.5 py-0.5 font-mono text-sm text-[#5B5BD6] dark:bg-[#1E293B] dark:text-[#22D3EE]">
                export
              </code>{" "}
              to expose values from a module and{" "}
              <code className="rounded bg-[#F8FAFC] px-1.5 py-0.5 font-mono text-sm text-[#5B5BD6] dark:bg-[#1E293B] dark:text-[#22D3EE]">
                import
              </code>{" "}
              to bring them into another. Named exports use curly braces;
              default exports do not. Modules are automatically in strict mode and
              create their own scope, preventing global namespace pollution. Modern
              bundlers and browsers natively support ESM with{" "}
              <code className="rounded bg-[#F8FAFC] px-1.5 py-0.5 font-mono text-sm text-[#5B5BD6] dark:bg-[#1E293B] dark:text-[#22D3EE]">
                type="module"
              </code>{" "}
              in script tags.
            </p>
            <pre className="mt-3 overflow-x-auto rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] p-4 dark:border-[#1E293B] dark:bg-[#0F172A]">
              <code className="font-mono text-sm text-[#0F172A] dark:text-[#F8FAFC]">
                {`// math.js
export const PI = 3.14159;
export function add(a, b) { return a + b; }
export default function multiply(a, b) { return a * b; }

// app.js
import multiply, { PI, add } from "./math.js";
console.log(add(2, 3));       // 5
console.log(multiply(2, 3));  // 6`}
              </code>
            </pre>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#0F172A] dark:text-[#F8FAFC]">
              Design Patterns in JavaScript
            </h2>
            <p className="mt-3 text-[#475569] dark:text-[#94A3B8]">
              Design patterns are reusable solutions to common software design problems.
              In JavaScript, the Module pattern (using closures for encapsulation),
              the Singleton (ensuring one instance), the Observer (event-driven
              architecture), and the Factory pattern (creating objects without
              specifying exact classes) are particularly relevant. Understanding these
              patterns helps you write maintainable, scalable code and recognize
              patterns in libraries you use daily.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#0F172A] dark:text-[#F8FAFC]">
              Memory Management and Garbage Collection
            </h2>
            <p className="mt-3 text-[#475569] dark:text-[#94A3B8]">
              JavaScript automatically allocates memory when objects are created and
              frees it when they are no longer reachable — a process called garbage
              collection. The most common algorithm is mark-and-sweep: the engine
              marks all reachable objects starting from roots (global objects, local
              variables), then sweeps away everything unmarked. Memory leaks occur
              when objects remain reachable unintentionally, often through forgotten
              event listeners, global variables, or closure references.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#0F172A] dark:text-[#F8FAFC]">
              Performance Optimization Techniques
            </h2>
            <p className="mt-3 text-[#475569] dark:text-[#94A3B8]">
              Writing fast JavaScript means understanding what the engine does under
              the hood. Avoid nested loops where possible. Use object lookups instead
              of large switch statements. Debounce and throttle expensive operations
              like scroll and resize handlers. Minimize DOM access by batching
              reads and writes. Leverage requestAnimationFrame for visual updates.
              Profile with browser DevTools to find actual bottlenecks rather than
              guessing. Premature optimization is the root of all evil — measure first.
            </p>
          </section>

          {/* Topic list */}
          <section>
            <h2 className="text-2xl font-semibold text-[#0F172A] dark:text-[#F8FAFC]">
              Topics in This Section
            </h2>
            <ul className="mt-3 space-y-2">
              {section.topics.map((topic, i) => (
                <li
                  key={topic}
                  className="flex items-start gap-3 text-[#475569] dark:text-[#94A3B8]"
                >
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#5B5BD6]"
                    aria-hidden="true"
                  />
                  <span>
                    <span className="font-medium text-[#0F172A] dark:text-[#F8FAFC]">
                      {String(i + 1).padStart(2, "0")}.
                    </span>{" "}
                    {topic}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </LessonLayout>
    </AppShell>
  );
}
