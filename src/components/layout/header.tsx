"use client";

import { Logo } from "@/components/ui/logo";
import { DesktopNav } from "@/components/navigation/desktop-nav";
import { MobileNav } from "@/components/navigation/mobile-nav";
import { ThemeSwitcher } from "@/components/theme-switcher";

export function Header() {
  return (
    <header className="sticky top-0 z-30 w-full border-b border-[#E2E8F0] bg-white/80 backdrop-blur-md dark:border-[#1E293B] dark:bg-[#020617]/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left: Logo + Desktop Nav */}
        <div className="flex items-center gap-6">
          <Logo />
          <DesktopNav />
        </div>

        {/* Right: Theme switcher + Mobile menu */}
        <div className="flex items-center gap-2">
          <ThemeSwitcher />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
