import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background-light px-4 dark:bg-background-dark">
      <div className="mx-auto max-w-2xl text-center">
        <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-3xl font-bold text-white shadow-lg shadow-primary/25">
          JS
        </div>
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-secondary dark:text-white sm:text-5xl">
          JS Atlas
        </h1>
        <p className="mb-8 text-lg text-muted-foreground">
          A free, open-source platform for learning modern JavaScript from
          beginner to advanced level.
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="inline-flex h-11 items-center justify-center rounded-lg bg-primary px-8 text-sm font-medium text-white transition-colors hover:bg-primary-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            Coming Soon
          </Link>
          <a
            href="https://github.com/sahilweb6/js-atlas"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center justify-center rounded-lg border border-border bg-card px-8 text-sm font-medium text-secondary transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 dark:text-white"
          >
            View on GitHub
          </a>
        </div>
      </div>

      <footer className="absolute bottom-8 text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} JS Atlas. Open source under MIT
        License.
      </footer>
    </main>
  );
}