import { AppShell } from "@/components/layout/app-shell";
import { LessonLayout } from "@/components/learning/lesson-layout";
import {
  getSectionBySlug,
  getPrevSection,
  getNextSection,
} from "@/components/learning/curriculum-data";

/**
 * Async JavaScript — /learn/async-javascript
 *
 * Covers non-blocking code: event loop, callbacks, promises,
 * async/await, and the Fetch API.
 */
export default function AsyncJavaScriptPage() {
  const slug = "async-javascript";
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
              The Call Stack and Event Loop
            </h2>
            <p className="mt-3 text-[#475569] dark:text-[#94A3B8]">
              JavaScript is single-threaded, meaning it executes one piece of code
              at a time. The call stack is a data structure that tracks function
              execution: when a function is called, it is pushed onto the stack;
              when it returns, it is popped off. If the stack is blocked by a long
              operation, the entire page freezes — this is why asynchronous
              programming is essential.
            </p>
            <p className="mt-3 text-[#475569] dark:text-[#94A3B8]">
              The event loop is the mechanism that allows JavaScript to perform
              non-blocking operations. It continuously checks if the call stack is
              empty, and if so, pushes the oldest callback from the task queue onto
              the stack. This cycle — stack, web APIs, task queue, event loop —
              is the foundation of all asynchronous JavaScript.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#0F172A] dark:text-[#F8FAFC]">
              setTimeout and setInterval
            </h2>
            <p className="mt-3 text-[#475569] dark:text-[#94A3B8]">
              The
              <code className="rounded bg-[#F8FAFC] px-1.5 py-0.5 font-mono text-sm text-[#5B5BD6] dark:bg-[#1E293B] dark:text-[#22D3EE]">
                setTimeout
              </code>{" "}
              function schedules a callback to run after a minimum delay in
              milliseconds. The
              <code className="rounded bg-[#F8FAFC] px-1.5 py-0.5 font-mono text-sm text-[#5B5BD6] dark:bg-[#1E293B] dark:text-[#22D3EE]">
                setInterval
              </code>{" "}
              function repeatedly executes a callback at fixed intervals. Both
              return a numeric ID that can be passed to{" "}
              <code className="rounded bg-[#F8FAFC] px-1.5 py-0.5 font-mono text-sm text-[#5B5BD6] dark:bg-[#1E293B] dark:text-[#22D3EE]">
                clearTimeout
              </code>{" "}
              or{" "}
              <code className="rounded bg-[#F8FAFC] px-1.5 py-0.5 font-mono text-sm text-[#5B5BD6] dark:bg-[#1E293B] dark:text-[#22D3EE]">
                clearInterval
              </code>{" "}
              to cancel them. Note that the delay is a minimum, not a guarantee —
              if the call stack is busy, the callback waits.
            </p>
            <pre className="mt-3 overflow-x-auto rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] p-4 dark:border-[#1E293B] dark:bg-[#0F172A]">
              <code className="font-mono text-sm text-[#0F172A] dark:text-[#F8FAFC]">
                {`setTimeout(() => {
  console.log("Runs after 1 second");
}, 1000);

const intervalId = setInterval(() => {
  console.log("Runs every 2 seconds");
}, 2000);

clearInterval(intervalId); // stop it`}
              </code>
            </pre>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#0F172A] dark:text-[#F8FAFC]">
              Callbacks and Callback Hell
            </h2>
            <p className="mt-3 text-[#475569] dark:text-[#94A3B8]">
              A callback is a function passed as an argument to another function,
              to be executed after some operation completes. They are the oldest
              pattern for handling asynchronous code in JavaScript. However,
              nesting multiple callbacks creates deeply indented, hard-to-read code
              colloquially known as "callback hell" or the "pyramid of doom." This
              pattern also makes error handling difficult, as each callback must
              manually check for and propagate errors.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#0F172A] dark:text-[#F8FAFC]">
              Promises: Creation and Consumption
            </h2>
            <p className="mt-3 text-[#475569] dark:text-[#94A3B8]">
              A Promise is an object representing the eventual completion or failure
              of an asynchronous operation. It exists in one of three states:
              pending, fulfilled, or rejected. You create a promise with the{" "}
              <code className="rounded bg-[#F8FAFC] px-1.5 py-0.5 font-mono text-sm text-[#5B5BD6] dark:bg-[#1E293B] dark:text-[#22D3EE]">
                new Promise
              </code>{" "}
              constructor, which takes an executor function with{" "}
              <code className="rounded bg-[#F8FAFC] px-1.5 py-0.5 font-mono text-sm text-[#5B5BD6] dark:bg-[#1E293B] dark:text-[#22D3EE]">
                resolve
              </code>{" "}
              and{" "}
              <code className="rounded bg-[#F8FAFC] px-1.5 py-0.5 font-mono text-sm text-[#5B5BD6] dark:bg-[#1E293B] dark:text-[#22D3EE]">
                reject
              </code>{" "}
              callbacks. Consume the result with{" "}
              <code className="rounded bg-[#F8FAFC] px-1.5 py-0.5 font-mono text-sm text-[#5B5BD6] dark:bg-[#1E293B] dark:text-[#22D3EE]">
                .then()
              </code>{" "}
              for success and{" "}
              <code className="rounded bg-[#F8FAFC] px-1.5 py-0.5 font-mono text-sm text-[#5B5BD6] dark:bg-[#1E293B] dark:text-[#22D3EE]">
                .catch()
              </code>{" "}
              for errors.
            </p>
            <pre className="mt-3 overflow-x-auto rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] p-4 dark:border-[#1E293B] dark:bg-[#0F172A]">
              <code className="font-mono text-sm text-[#0F172A] dark:text-[#F8FAFC]">
                {`const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      success ? resolve("Data loaded") : reject("Error");
    }, 1000);
  });
};

fetchData()
  .then((data) => console.log(data))
  .catch((err) => console.error(err));`}
              </code>
            </pre>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#0F172A] dark:text-[#F8FAFC]">
              Promise Chaining and Error Handling
            </h2>
            <p className="mt-3 text-[#475569] dark:text-[#94A3B8]">
              Promises chain naturally: the return value of one{" "}
              <code className="rounded bg-[#F8FAFC] px-1.5 py-0.5 font-mono text-sm text-[#5B5BD6] dark:bg-[#1E293B] dark:text-[#22D3EE]">
                .then()
              </code>{" "}
              becomes the input to the next. This flattens nested callbacks into a
              readable vertical pipeline. If any promise in the chain rejects,
              execution jumps to the nearest{" "}
              <code className="rounded bg-[#F8FAFC] px-1.5 py-0.5 font-mono text-sm text-[#5B5BD6] dark:bg-[#1E293B] dark:text-[#22D3EE]">
                .catch()
              </code>
              . For running multiple promises concurrently, use{" "}
              <code className="rounded bg-[#F8FAFC] px-1.5 py-0.5 font-mono text-sm text-[#5B5BD6] dark:bg-[#1E293B] dark:text-[#22D3EE]">
                Promise.all()
              </code>{" "}
              (waits for all) or{" "}
              <code className="rounded bg-[#F8FAFC] px-1.5 py-0.5 font-mono text-sm text-[#5B5BD6] dark:bg-[#1E293B] dark:text-[#22D3EE]">
                Promise.race()
              </code>{" "}
              (waits for the first to settle).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#0F172A] dark:text-[#F8FAFC]">
              async/await Syntax
            </h2>
            <p className="mt-3 text-[#475569] dark:text-[#94A3B8]">
              Introduced in ES2017,
              <code className="rounded bg-[#F8FAFC] px-1.5 py-0.5 font-mono text-sm text-[#5B5BD6] dark:bg-[#1E293B] dark:text-[#22D3EE]">
                async
              </code>{" "}
              and{" "}
              <code className="rounded bg-[#F8FAFC] px-1.5 py-0.5 font-mono text-sm text-[#5B5BD6] dark:bg-[#1E293B] dark:text-[#22D3EE]">
                await
              </code>{" "}
              are syntactic sugar over promises that make asynchronous code look
              and behave like synchronous code. An
              <code className="rounded bg-[#F8FAFC] px-1.5 py-0.5 font-mono text-sm text-[#5B5BD6] dark:bg-[#1E293B] dark:text-[#22D3EE]">
                async
              </code>{" "}
              function always returns a promise. Inside it, you can use{" "}
              <code className="rounded bg-[#F8FAFC] px-1.5 py-0.5 font-mono text-sm text-[#5B5BD6] dark:bg-[#1E293B] dark:text-[#22D3EE]">
                await
              </code>{" "}
              to pause execution until a promise resolves, without blocking the
              main thread. Error handling uses standard{" "}
              <code className="rounded bg-[#F8FAFC] px-1.5 py-0.5 font-mono text-sm text-[#5B5BD6] dark:bg-[#1E293B] dark:text-[#22D3EE]">
                try...catch
              </code>{" "}
              blocks, which is more intuitive than chained{" "}
              <code className="rounded bg-[#F8FAFC] px-1.5 py-0.5 font-mono text-sm text-[#5B5BD6] dark:bg-[#1E293B] dark:text-[#22D3EE]">
                .catch()
              </code>
              .
            </p>
            <pre className="mt-3 overflow-x-auto rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] p-4 dark:border-[#1E293B] dark:bg-[#0F172A]">
              <code className="font-mono text-sm text-[#0F172A] dark:text-[#F8FAFC]">
                {`async function loadUser(id) {
  try {
    const response = await fetch(\`/api/users/\${id}\`);
    if (!response.ok) throw new Error("Failed");
    const user = await response.json();
    return user;
  } catch (error) {
    console.error(error);
    return null;
  }
}`}
              </code>
            </pre>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#0F172A] dark:text-[#F8FAFC]">
              Fetch API and Making HTTP Requests
            </h2>
            <p className="mt-3 text-[#475569] dark:text-[#94A3B8]">
              The Fetch API is the modern standard for making network requests in
              the browser. It returns a promise that resolves to a{" "}
              <code className="rounded bg-[#F8FAFC] px-1.5 py-0.5 font-mono text-sm text-[#5B5BD6] dark:bg-[#1E293B] dark:text-[#22D3EE]">
                Response
              </code>{" "}
              object. Unlike older
              <code className="rounded bg-[#F8FAFC] px-1.5 py-0.5 font-mono text-sm text-[#5B5BD6] dark:bg-[#1E293B] dark:text-[#22D3EE]">
                XMLHttpRequest
              </code>
              , it is promise-based and integrates cleanly with async/await. Always
              check
              <code className="rounded bg-[#F8FAFC] px-1.5 py-0.5 font-mono text-sm text-[#5B5BD6] dark:bg-[#1E293B] dark:text-[#22D3EE]">
                response.ok
              </code>{" "}
              — a fetch promise only rejects on network failure, not HTTP error
              status codes like 404 or 500.
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
