import { AppShell } from "@/components/layout/app-shell";
import { LessonLayout } from "@/components/learning/lesson-layout";
import {
  getSectionBySlug,
  getPrevSection,
  getNextSection,
} from "@/components/learning/curriculum-data";

/**
 * Fundamentals — /learn/fundamentals
 *
 * Covers core language concepts: variables, types, operators,
 * conditionals, loops, functions, scope, and hoisting.
 */
export default function FundamentalsPage() {
  const slug = "fundamentals";
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
              Variables: let, const, and var
            </h2>
            <p className="mt-3 text-[#475569] dark:text-[#94A3B8]">
              Variables are containers for storing data values. JavaScript provides
              three ways to declare them:
              <code className="rounded bg-[#F8FAFC] px-1.5 py-0.5 font-mono text-sm text-[#5B5BD6] dark:bg-[#1E293B] dark:text-[#22D3EE]">
                var
              </code>
              ,{" "}
              <code className="rounded bg-[#F8FAFC] px-1.5 py-0.5 font-mono text-sm text-[#5B5BD6] dark:bg-[#1E293B] dark:text-[#22D3EE]">
                let
              </code>
              , and{" "}
              <code className="rounded bg-[#F8FAFC] px-1.5 py-0.5 font-mono text-sm text-[#5B5BD6] dark:bg-[#1E293B] dark:text-[#22D3EE]">
                const
              </code>
              . The modern recommendation is to use{" "}
              <code className="rounded bg-[#F8FAFC] px-1.5 py-0.5 font-mono text-sm text-[#5B5BD6] dark:bg-[#1E293B] dark:text-[#22D3EE]">
                const
              </code>{" "}
              by default, and only switch to{" "}
              <code className="rounded bg-[#F8FAFC] px-1.5 py-0.5 font-mono text-sm text-[#5B5BD6] dark:bg-[#1E293B] dark:text-[#22D3EE]">
                let
              </code>{" "}
              when you know the value will change. Avoid{" "}
              <code className="rounded bg-[#F8FAFC] px-1.5 py-0.5 font-mono text-sm text-[#5B5BD6] dark:bg-[#1E293B] dark:text-[#22D3EE]">
                var
              </code>{" "}
              in new code — it has function scope rather than block scope and
              allows re-declaration, which can lead to subtle bugs.
            </p>
            <pre className="mt-3 overflow-x-auto rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] p-4 dark:border-[#1E293B] dark:bg-[#0F172A]">
              <code className="font-mono text-sm text-[#0F172A] dark:text-[#F8FAFC]">
                {`const name = "Alice";      // cannot be reassigned
let age = 30;              // can be reassigned
var legacy = "avoid me";   // function-scoped, hoisted`}
              </code>
            </pre>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#0F172A] dark:text-[#F8FAFC]">
              Primitive Data Types
            </h2>
            <p className="mt-3 text-[#475569] dark:text-[#94A3B8]">
              JavaScript has seven primitive data types: string, number, bigint,
              boolean, undefined, symbol, and null. Primitives are immutable — you
              cannot change their value once created, only replace the variable
              with a new value. Understanding the difference between primitives
              and objects is essential for writing predictable code.
            </p>
            <p className="mt-3 text-[#475569] dark:text-[#94A3B8]">
              The
              <code className="rounded bg-[#F8FAFC] px-1.5 py-0.5 font-mono text-sm text-[#5B5BD6] dark:bg-[#1E293B] dark:text-[#22D3EE]">
                typeof
              </code>{" "}
              operator reveals a value's type, though it has a well-known quirk:
              <code className="rounded bg-[#F8FAFC] px-1.5 py-0.5 font-mono text-sm text-[#5B5BD6] dark:bg-[#1E293B] dark:text-[#22D3EE]">
                typeof null
              </code>{" "}
              returns{" "}
              <code className="rounded bg-[#F8FAFC] px-1.5 py-0.5 font-mono text-sm text-[#5B5BD6] dark:bg-[#1E293B] dark:text-[#22D3EE]">
                "object"
              </code>
              , a historical bug preserved for backward compatibility.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#0F172A] dark:text-[#F8FAFC]">
              Operators and Expressions
            </h2>
            <p className="mt-3 text-[#475569] dark:text-[#94A3B8]">
              Operators perform actions on values. Arithmetic operators (+, -, *, /, %)
              handle math. Comparison operators (==, ===, !=, !==, &gt;, &lt;) compare
              values. The triple equals{" "}
              <code className="rounded bg-[#F8FAFC] px-1.5 py-0.5 font-mono text-sm text-[#5B5BD6] dark:bg-[#1E293B] dark:text-[#22D3EE]">
                ===
              </code>{" "}
              checks both value and type, while double equals{" "}
              <code className="rounded bg-[#F8FAFC] px-1.5 py-0.5 font-mono text-sm text-[#5B5BD6] dark:bg-[#1E293B] dark:text-[#22D3EE]">
                ==
              </code>{" "}
              performs type coercion, which often produces surprising results.
              Always prefer strict equality.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#0F172A] dark:text-[#F8FAFC]">
              Conditional Statements
            </h2>
            <p className="mt-3 text-[#475569] dark:text-[#94A3B8]">
              Programs need to make decisions. The
              <code className="rounded bg-[#F8FAFC] px-1.5 py-0.5 font-mono text-sm text-[#5B5BD6] dark:bg-[#1E293B] dark:text-[#22D3EE]">
                if
              </code>
              ,
              <code className="rounded bg-[#F8FAFC] px-1.5 py-0.5 font-mono text-sm text-[#5B5BD6] dark:bg-[#1E293B] dark:text-[#22D3EE]">
                else if
              </code>
              , and
              <code className="rounded bg-[#F8FAFC] px-1.5 py-0.5 font-mono text-sm text-[#5B5BD6] dark:bg-[#1E293B] dark:text-[#22D3EE]">
                else
              </code>{" "}
              keywords create branching logic. For multiple branches on a single
              value, the
              <code className="rounded bg-[#F8FAFC] px-1.5 py-0.5 font-mono text-sm text-[#5B5BD6] dark:bg-[#1E293B] dark:text-[#22D3EE]">
                switch
              </code>{" "}
              statement is cleaner and often more readable than a chain of
              if-else statements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#0F172A] dark:text-[#F8FAFC]">
              Loops and Iteration
            </h2>
            <p className="mt-3 text-[#475569] dark:text-[#94A3B8]">
              Loops repeat code until a condition is met. The
              <code className="rounded bg-[#F8FAFC] px-1.5 py-0.5 font-mono text-sm text-[#5B5BD6] dark:bg-[#1E293B] dark:text-[#22D3EE]">
                for
              </code>{" "}
              loop is the most common, with initialization, condition, and increment
              expressions. The
              <code className="rounded bg-[#F8FAFC] px-1.5 py-0.5 font-mono text-sm text-[#5B5BD6] dark:bg-[#1E293B] dark:text-[#22D3EE]">
                while
              </code>{" "}
              loop checks a condition before each iteration, and{" "}
              <code className="rounded bg-[#F8FAFC] px-1.5 py-0.5 font-mono text-sm text-[#5B5BD6] dark:bg-[#1E293B] dark:text-[#22D3EE]">
                do...while
              </code>{" "}
              checks after. Modern JavaScript also provides array methods like{" "}
              <code className="rounded bg-[#F8FAFC] px-1.5 py-0.5 font-mono text-sm text-[#5B5BD6] dark:bg-[#1E293B] dark:text-[#22D3EE]">
                forEach
              </code>
              ,
              <code className="rounded bg-[#F8FAFC] px-1.5 py-0.5 font-mono text-sm text-[#5B5BD6] dark:bg-[#1E293B] dark:text-[#22D3EE]">
                map
              </code>
              , and{" "}
              <code className="rounded bg-[#F8FAFC] px-1.5 py-0.5 font-mono text-sm text-[#5B5BD6] dark:bg-[#1E293B] dark:text-[#22D3EE]">
                filter
              </code>{" "}
              that abstract away manual iteration.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#0F172A] dark:text-[#F8FAFC]">
              Functions
            </h2>
            <p className="mt-3 text-[#475569] dark:text-[#94A3B8]">
              Functions are reusable blocks of code. JavaScript supports function
              declarations, function expressions, and arrow functions. Arrow
              functions (introduced in ES6) provide a concise syntax and lexically
              bind the
              <code className="rounded bg-[#F8FAFC] px-1.5 py-0.5 font-mono text-sm text-[#5B5BD6] dark:bg-[#1E293B] dark:text-[#22D3EE]">
                this
              </code>{" "}
              value, making them ideal for callbacks and method chaining.
            </p>
            <pre className="mt-3 overflow-x-auto rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] p-4 dark:border-[#1E293B] dark:bg-[#0F172A]">
              <code className="font-mono text-sm text-[#0F172A] dark:text-[#F8FAFC]">
                {`// Function declaration
function greet(name) {
  return \`Hello, \${name}!\`;
}

// Arrow function
const greet = (name) => \`Hello, \${name}!\`;`}
              </code>
            </pre>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#0F172A] dark:text-[#F8FAFC]">
              Scope and Hoisting
            </h2>
            <p className="mt-3 text-[#475569] dark:text-[#94A3B8]">
              Scope determines where variables are accessible. JavaScript has
              global scope, function scope, and block scope (introduced with{" "}
              <code className="rounded bg-[#F8FAFC] px-1.5 py-0.5 font-mono text-sm text-[#5B5BD6] dark:bg-[#1E293B] dark:text-[#22D3EE]">
                let
              </code>{" "}
              and{" "}
              <code className="rounded bg-[#F8FAFC] px-1.5 py-0.5 font-mono text-sm text-[#5B5BD6] dark:bg-[#1E293B] dark:text-[#22D3EE]">
                const
              </code>
              ). Hoisting moves declarations to the top of their scope during
              compilation, but only the declaration — not the initialization.
              This means
              <code className="rounded bg-[#F8FAFC] px-1.5 py-0.5 font-mono text-sm text-[#5B5BD6] dark:bg-[#1E293B] dark:text-[#22D3EE]">
                var
              </code>{" "}
              variables are hoisted as undefined, while{" "}
              <code className="rounded bg-[#F8FAFC] px-1.5 py-0.5 font-mono text-sm text-[#5B5BD6] dark:bg-[#1E293B] dark:text-[#22D3EE]">
                let
              </code>{" "}
              and{" "}
              <code className="rounded bg-[#F8FAFC] px-1.5 py-0.5 font-mono text-sm text-[#5B5BD6] dark:bg-[#1E293B] dark:text-[#22D3EE]">
                const
              </code>{" "}
              remain in a Temporal Dead Zone until their declaration line is reached.
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
