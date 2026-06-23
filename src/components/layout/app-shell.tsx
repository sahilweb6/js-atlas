"use client";

import { Header } from "./header";
import { Footer } from "./footer";
import { Sidebar } from "./sidebar";
import { Breadcrumb } from "@/components/navigation/breadcrumb";

interface AppShellProps {
  children: React.ReactNode;
  showSidebar?: boolean;
  showBreadcrumb?: boolean;
}

export function AppShell({
  children,
  showSidebar = true,
  showBreadcrumb = true,
}: AppShellProps) {
  return (
    <div className="flex min-h-screen flex-col bg-[#F8FAFC] dark:bg-[#020617]">
      {/* Sticky header */}
      <Header />

      {/* Main content area */}
      <div className="flex flex-1">
        {/* Sidebar — hidden on mobile/tablet */}
        {showSidebar && <Sidebar />}

        {/* Content */}
        <main
          id="main-content"
          className="flex-1"
          tabIndex={-1}
        >
          <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            {showBreadcrumb && (
              <div className="mb-6">
                <Breadcrumb />
              </div>
            )}

            {/* Page content */}
            {children}
          </div>
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
