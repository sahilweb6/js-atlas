import { AppShell } from "@/components/layout/app-shell";
import { LessonLayout } from "@/components/learning/lesson-layout";
import {
  getSectionBySlug,
  getPrevSection,
  getNextSection,
} from "@/components/learning/curriculum-data";

/**
 * DOM — /learn/dom
 *
 * Covers interacting with web pages using the Document Object Model:
 * selecting elements, modifying content, handling events, and forms.
 */
export default function DomPage() {
  const slug = "dom";
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
              What is the DOM?
            </h2>
            <p className="mt-3 text-[#475569] dark:text-[#94A3B8]">
              The Document Object Model (DOM) is a programming interface for web
              documents. It represents the page as a tree of nodes and objects,
              allowing programming languages like JavaScript to interact with the
              page structure, style, and content. When a browser loads an HTML
              document, it parses the markup and constructs this tree structure in
              memory.
            </p>
            <p className="mt-3 text-[#475569] dark:text-[#94A3B8]">
              Every HTML element becomes a node in the DOM tree. The root is the
              <code className="rounded bg-[#F8FAFC] px-1.5 py-0.5 font-mono text-sm text-[#5B5BD6] dark:bg-[#1E293B] dark:text-[#22D3EE]">
                document
              </code>{" "}
              object, which contains the
              <code className="rounded bg-[#F8FAFC] px-1.5 py-0.5 font-mono text-sm text-[#5B5BD6] dark:bg-[#1E293B] dark:text-[#22D3EE]">
                &lt;html&gt;
              </code>{" "}
              element, which in turn contains
              <code className="rounded bg-[#F8FAFC] px-1.5 py-0.5 font-mono text-sm text-[#5B5BD6] dark:bg-[#1E293B] dark:text-[#22D3EE]">
                &lt;head&gt;
              </code>{" "}
              and
              <code className="rounded bg-[#F8FAFC] px-1.5 py-0.5 font-mono text-sm text-[#5B5BD6] dark:bg-[#1E293B] dark:text-[#22D3EE]">
                &lt;body&gt;
              </code>
              . Understanding this tree structure is essential for manipulating
              web pages dynamically.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#0F172A] dark:text-[#F8FAFC]">
              Selecting Elements
            </h2>
            <p className="mt-3 text-[#475569] dark:text-[#94A3B8]">
              Before you can modify an element, you must select it. The modern
              approach uses
              <code className="rounded bg-[#F8FAFC] px-1.5 py-0.5 font-mono text-sm text-[#5B5BD6] dark:bg-[#1E293B] dark:text-[#22D3EE]">
                document.querySelector()
              </code>{" "}
              and{" "}
              <code className="rounded bg-[#F8FAFC] px-1.5 py-0.5 font-mono text-sm text-[#5B5BD6] dark:bg-[#1E293B] dark:text-[#22D3EE]">
                document.querySelectorAll()
              </code>
              , which accept CSS selectors. These methods are flexible and
              consistent across all modern browsers. For legacy support, methods
              like
              <code className="rounded bg-[#F8FAFC] px-1.5 py-0.5 font-mono text-sm text-[#5B5BD6] dark:bg-[#1E293B] dark:text-[#22D3EE]">
                getElementById
              </code>
              ,
              <code className="rounded bg-[#F8FAFC] px-1.5 py-0.5 font-mono text-sm text-[#5B5BD6] dark:bg-[#1E293B] dark:text-[#22D3EE]">
                getElementsByClassName
              </code>
              , and{" "}
              <code className="rounded bg-[#F8FAFC] px-1.5 py-0.5 font-mono text-sm text-[#5B5BD6] dark:bg-[#1E293B] dark:text-[#22D3EE]">
                getElementsByTagName
              </code>{" "}
              are still available.
            </p>
            <pre className="mt-3 overflow-x-auto rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] p-4 dark:border-[#1E293B] dark:bg-[#0F172A]">
              <code className="font-mono text-sm text-[#0F172A] dark:text-[#F8FAFC]">
                {`const heading = document.querySelector("h1");
const buttons = document.querySelectorAll(".btn");
const main = document.getElementById("main-content");`}
              </code>
            </pre>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#0F172A] dark:text-[#F8FAFC]">
              Modifying Element Content and Attributes
            </h2>
            <p className="mt-3 text-[#475569] dark:text-[#94A3B8]">
              Once selected, elements can be modified in several ways. The
              <code className="rounded bg-[#F8FAFC] px-1.5 py-0.5 font-mono text-sm text-[#5B5BD6] dark:bg-[#1E293B] dark:text-[#22D3EE]">
                textContent
              </code>{" "}
              property sets plain text, while{" "}
              <code className="rounded bg-[#F8FAFC] px-1.5 py-0.5 font-mono text-sm text-[#5B5BD6] dark:bg-[#1E293B] dark:text-[#22D3EE]">
                innerHTML
              </code>{" "}
              parses HTML. Attributes are accessed via{" "}
              <code className="rounded bg-[#F8FAFC] px-1.5 py-0.5 font-mono text-sm text-[#5B5BD6] dark:bg-[#1E293B] dark:text-[#22D3EE]">
                getAttribute
              </code>
              ,
              <code className="rounded bg-[#F8FAFC] px-1.5 py-0.5 font-mono text-sm text-[#5B5BD6] dark:bg-[#1E293B] dark:text-[#22D3EE]">
                setAttribute
              </code>
              , and{" "}
              <code className="rounded bg-[#F8FAFC] px-1.5 py-0.5 font-mono text-sm text-[#5B5BD6] dark:bg-[#1E293B] dark:text-[#22D3EE]">
                removeAttribute
              </code>
              . For common attributes like{" "}
              <code className="rounded bg-[#F8FAFC] px-1.5 py-0.5 font-mono text-sm text-[#5B5BD6] dark:bg-[#1E293B] dark:text-[#22D3EE]">
                class
              </code>{" "}
              and{" "}
              <code className="rounded bg-[#F8FAFC] px-1.5 py-0.5 font-mono text-sm text-[#5B5BD6] dark:bg-[#1E293B] dark:text-[#22D3EE]">
                id
              </code>
              , direct properties exist on the element object.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#0F172A] dark:text-[#F8FAFC]">
              Creating and Removing Elements
            </h2>
            <p className="mt-3 text-[#475569] dark:text-[#94A3B8]">
              Dynamic web applications often need to add or remove elements at
              runtime. Use
              <code className="rounded bg-[#F8FAFC] px-1.5 py-0.5 font-mono text-sm text-[#5B5BD6] dark:bg-[#1E293B] dark:text-[#22D3EE]">
                document.createElement()
              </code>{" "}
              to create a new element, then append it with{" "}
              <code className="rounded bg-[#F8FAFC] px-1.5 py-0.5 font-mono text-sm text-[#5B5BD6] dark:bg-[#1E293B] dark:text-[#22D3EE]">
                appendChild
              </code>
              ,
              <code className="rounded bg-[#F8FAFC] px-1.5 py-0.5 font-mono text-sm text-[#5B5BD6] dark:bg-[#1E293B] dark:text-[#22D3EE]">
                insertBefore
              </code>
              , or{" "}
              <code className="rounded bg-[#F8FAFC] px-1.5 py-0.5 font-mono text-sm text-[#5B5BD6] dark:bg-[#1E293B] dark:text-[#22D3EE]">
                insertAdjacentElement
              </code>
              . To remove an element, call{" "}
              <code className="rounded bg-[#F8FAFC] px-1.5 py-0.5 font-mono text-sm text-[#5B5BD6] dark:bg-[#1E293B] dark:text-[#22D3EE]">
                remove()
              </code>{" "}
              on the element itself, or use{" "}
              <code className="rounded bg-[#F8FAFC] px-1.5 py-0.5 font-mono text-sm text-[#5B5BD6] dark:bg-[#1E293B] dark:text-[#22D3EE]">
                parentNode.removeChild()
              </code>{" "}
              for older browser compatibility.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#0F172A] dark:text-[#F8FAFC]">
              Event Handling Basics
            </h2>
            <p className="mt-3 text-[#475569] dark:text-[#94A3B8]">
              Events are the bridge between user actions and JavaScript code.
              When a user clicks, types, scrolls, or resizes the window, the
              browser fires an event. You listen for these events using{" "}
              <code className="rounded bg-[#F8FAFC] px-1.5 py-0.5 font-mono text-sm text-[#5B5BD6] dark:bg-[#1E293B] dark:text-[#22D3EE]">
                addEventListener
              </code>
              , which attaches a callback function to a specific event type on a
              specific element. This is the modern, preferred approach over
              inline event handlers like{" "}
              <code className="rounded bg-[#F8FAFC] px-1.5 py-0.5 font-mono text-sm text-[#5B5BD6] dark:bg-[#1E293B] dark:text-[#22D3EE]">
                onclick
              </code>
              .
            </p>
            <pre className="mt-3 overflow-x-auto rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] p-4 dark:border-[#1E293B] dark:bg-[#0F172A]">
              <code className="font-mono text-sm text-[#0F172A] dark:text-[#F8FAFC]">
                {`const btn = document.querySelector("#submit");
btn.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("Button clicked!");
});`}
              </code>
            </pre>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#0F172A] dark:text-[#F8FAFC]">
              Event Delegation
            </h2>
            <p className="mt-3 text-[#475569] dark:text-[#94A3B8]">
              Instead of attaching listeners to every element, attach one listener
              to a parent and use
              <code className="rounded bg-[#F8FAFC] px-1.5 py-0.5 font-mono text-sm text-[#5B5BD6] dark:bg-[#1E293B] dark:text-[#22D3EE]">
                event.target
              </code>{" "}
              to determine which child was clicked. This pattern is called event
              delegation and is especially powerful for dynamic lists where items
              are added or removed after the page loads. It improves performance
              and simplifies memory management.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#0F172A] dark:text-[#F8FAFC]">
              Form Handling and Validation
            </h2>
            <p className="mt-3 text-[#475569] dark:text-[#94A3B8]">
              Forms are the primary way users interact with web applications.
              The
              <code className="rounded bg-[#F8FAFC] px-1.5 py-0.5 font-mono text-sm text-[#5B5BD6] dark:bg-[#1E293B] dark:text-[#22D3EE]">
                submit
              </code>{" "}
              event fires when a form is submitted. Use{" "}
              <code className="rounded bg-[#F8FAFC] px-1.5 py-0.5 font-mono text-sm text-[#5B5BD6] dark:bg-[#1E293B] dark:text-[#22D3EE]">
                event.preventDefault()
              </code>{" "}
              to stop the default page reload, then validate inputs with the
              Constraint Validation API (methods like{" "}
              <code className="rounded bg-[#F8FAFC] px-1.5 py-0.5 font-mono text-sm text-[#5B5BD6] dark:bg-[#1E293B] dark:text-[#22D3EE]">
                checkValidity()
              </code>
              ) or custom logic. Modern HTML5 input types (email, url, date)
              and attributes (required, min, max, pattern) provide built-in
              validation before JavaScript even runs.
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
