"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";

interface BreadcrumbItem {
  label: string;
  href: string;
  isCurrent?: boolean;
}

interface BreadcrumbProps {
  items?: BreadcrumbItem[];
  homeLabel?: string;
}

export function Breadcrumb({ items, homeLabel = "Home" }: BreadcrumbProps) {
  const pathname = usePathname();

  // Auto-generate from pathname if no items provided
  const breadcrumbItems: BreadcrumbItem[] =
    items ??
    (pathname === "/"
      ? [{ label: homeLabel, href: "/", isCurrent: true }]
      : pathname
          .split("/")
          .filter(Boolean)
          .reduce<BreadcrumbItem[]>(
            (acc, segment, index, arr) => {
              const href = "/" + arr.slice(0, index + 1).join("/");
              const label =
                segment.charAt(0).toUpperCase() +
                segment.slice(1).replace(/-/g, " ");
              acc.push({
                label,
                href,
                isCurrent: index === arr.length - 1,
              });
              return acc;
            },
            [{ label: homeLabel, href: "/" }]
          ));

  if (breadcrumbItems.length <= 1) {
    return null;
  }

  return (
    <nav aria-label="Breadcrumb" className="w-full">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm">
        {breadcrumbItems.map((item, index) => (
          <Fragment key={item.href}>
            {index > 0 && (
              <li aria-hidden="true">
                <svg
                  className="h-4 w-4 text-[#94A3B8] dark:text-[#475569]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </li>
            )}
            <li>
              {item.isCurrent ? (
                <span
                  className="font-medium text-[#0F172A] dark:text-[#F8FAFC]"
                  aria-current="page"
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="text-[#475569] transition-colors hover:text-[#5B5BD6] dark:text-[#94A3B8] dark:hover:text-[#22D3EE] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5B5BD6] focus-visible:ring-offset-2 rounded"
                >
                  {item.label}
                </Link>
              )}
            </li>
          </Fragment>
        ))}
      </ol>
    </nav>
  );
}
