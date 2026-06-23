import { AppShell } from "@/components/layout/app-shell";
import { LessonLayout } from "@/components/learning/lesson-layout";
import {
  getSectionBySlug,
  getPrevSection,
  getNextSection,
} from "@/components/learning/curriculum-data";

/**
 * Introduction — /learn/introduction
 *
 * First lesson in the JS Atlas curriculum.
 * Covers what JavaScript is, how it runs, and how to set up an environment.
 */
export default function IntroductionPage() {
  const slug = "introduction";
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
        {/* Placeholder educational content */}
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-[#0F172A] dark:text-[#F8FAFC]">
              What is JavaScript?
            </h2>
            <p className="mt-3 text-[#475569] dark:text-[#94A3B8]">
              JavaScript is a lightweight, interpreted programming language
              designed for creating interactive web pages. Originally created in
              1995 by Brendan Eich at Netscape, it has evolved into one of the
              most widely used languages in the world, powering everything from
              simple form validation to complex server-side applications.
            </p>
            <p className="mt-3 text-[#475569] dark:text-[#94A3B8]">
              Unlike HTML (which structures content) and CSS (which styles it),
              JavaScript adds behavior. It can respond to user actions, modify
              page content dynamically, fetch data from servers, and even run
              entire applications in the browser.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#0F172A] dark:text-[#F8FAFC]">
              How JavaScript Runs in the Browser
            </h2>
            <p className="mt-3 text-[#475569] dark:text-[#94A3B8]">
              Every modern browser contains a JavaScript engine — a program that
              reads and executes JS code. Chrome uses V8, Firefox uses SpiderMonkey,
              and Safari uses JavaScriptCore. These engines parse your code, compile
              it to machine code, and execute it at remarkable speed.
            </p>
            <p className="mt-3 text-[#475569] dark:text-[#94A3B8]">
              When a browser loads a web page, it reads the HTML and encounters
              <code className="rounded bg-[#F8FAFC] px-1.5 py-0.5 font-mono text-sm text-[#5B5BD6] dark:bg-[#1E293B] dark:text-[#22D3EE]">
                &lt;script&gt;
              </code>{" "}
              tags. The code inside these tags is handed to the JS engine, which
              runs it immediately or defers execution depending on attributes like
              <code className="rounded bg-[#F8FAFC] px-1.5 py-0.5 font-mono text-sm text-[#5B5BD6] dark:bg-[#1E293B] dark:text-[#22D3EE]">
                defer
              </code>{" "}
              and
              <code className="rounded bg-[#F8FAFC] px-1.5 py-0.5 font-mono text-sm text-[#5B5BD6] dark:bg-[#1E293B] dark:text-[#22D3EE]">
                async
              </code>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#0F172A] dark:text-[#F8FAFC]">
              Setting Up Your Editor
            </h2>
            <p className="mt-3 text-[#475569] dark:text-[#94A3B8]">
              You do not need a special IDE to write JavaScript. A simple text
              editor works fine for getting started. However, modern editors like
              Visual Studio Code provide syntax highlighting, IntelliSense
              (auto-completion), debugging tools, and extensions that make
              development significantly more productive.
            </p>
            <p className="mt-3 text-[#475569] dark:text-[#94A3B8]">
              Recommended setup: install VS Code, add the "ES7+ React/Redux/React-Native
              snippets" extension, and enable the built-in JavaScript language
              features. For linting, the ESLint extension will catch common mistakes
              before you run your code.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#0F172A] dark:text-[#F8FAFC]">
              Your First Script
            </h2>
            <p className="mt-3 text-[#475569] dark:text-[#94A3B8]">
              Create a file named
              <code className="rounded bg-[#F8FAFC] px-1.5 py-0.5 font-mono text-sm text-[#5B5BD6] dark:bg-[#1E293B] dark:text-[#22D3EE]">
                index.html
              </code>{" "}
              and add the following:
            </p>
            <pre className="mt-3 overflow-x-auto rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] p-4 dark:border-[#1E293B] dark:bg-[#0F172A]">
              <code className="font-mono text-sm text-[#0F172A] dark:text-[#F8FAFC]">
                {`<!DOCTYPE html>
<html>
  <head>
    <title>My First Script</title>
  </head>
  <body>
    <script>
      console.log("Hello, JavaScript!");
    </script>
  </body>
</html>`}
              </code>
            </pre>
            <p className="mt-3 text-[#475569] dark:text-[#94A3B8]">
              Open this file in any browser, press F12 to open Developer Tools,
              and click the Console tab. You will see the message printed there.
              This is the foundation of everything you will build.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#0F172A] dark:text-[#F8FAFC]">
              The Console and Debugging Basics
            </h2>
            <p className="mt-3 text-[#475569] dark:text-[#94A3B8]">
              The browser console is your best friend while learning. It is not
              just for output — it is a full REPL (Read-Eval-Print Loop) where you
              can type JavaScript and see results instantly. Use
              <code className="rounded bg-[#F8FAFC] px-1.5 py-0.5 font-mono text-sm text-[#5B5BD6] dark:bg-[#1E293B] dark:text-[#22D3EE]">
                console.log()
              </code>{" "}
              for general output,
              <code className="rounded bg-[#F8FAFC] px-1.5 py-0.5 font-mono text-sm text-[#5B5BD6] dark:bg-[#1E293B] dark:text-[#22D3EE]">
                console.error()
              </code>{" "}
              for errors, and
              <code className="rounded bg-[#F8FAFC] px-1.5 py-0.5 font-mono text-sm text-[#5B5BD6] dark:bg-[#1E293B] dark:text-[#22D3EE]">
                console.table()
              </code>{" "}
              for structured data. Learning to read stack traces and use
              breakpoints in the Sources panel will save you hours of debugging.
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
