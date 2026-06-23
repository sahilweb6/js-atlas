"use client";

import Link from "next/link";

interface LogoProps {
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

export function Logo({ showText = true, size = "md" }: LogoProps) {
  const sizeClasses = {
    sm: "h-6 w-6",
    md: "h-8 w-8",
    lg: "h-10 w-10",
  };

  const textSizes = {
    sm: "text-sm",
    md: "text-xl",
    lg: "text-2xl",
  };

  return (
    <Link
      href="/"
      className="flex items-center gap-2.5 transition-opacity hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5B5BD6] focus-visible:ring-offset-2 rounded-md"
      aria-label="JS Atlas Home"
    >
      <svg
        className={sizeClasses[size]}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect width="32" height="32" rx="6" fill="#5B5BD6" />
        <text
          x="16"
          y="22"
          textAnchor="middle"
          fill="white"
          fontFamily="JetBrains Mono, monospace"
          fontSize="16"
          fontWeight="700"
        >
          JS
        </text>
      </svg>
      {showText && (
        <span
          className={`font-bold tracking-tight text-[#0F172A] dark:text-[#F8FAFC] ${textSizes[size]}`}
        >
          Atlas
        </span>
      )}
    </Link>
  );
}
