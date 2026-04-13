"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { APP_NAV_ITEMS, isAppNavActive } from "@/lib/appNav";
import { cn } from "@/lib/utils";

export function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <div className="flex w-full shrink-0 justify-center bg-white px-4 py-2">
      <nav
        className="flex w-full max-w-lg items-stretch gap-0 rounded-[99px] bg-white p-1"
        aria-label="Primary"
      >
        {APP_NAV_ITEMS.map((item) => {
          const active = isAppNavActive(pathname, item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={cn(
                "flex min-h-0 min-w-0 flex-1 items-center justify-center rounded-full py-2 text-center font-sans text-sm font-semibold uppercase leading-[100%] tracking-[0.1px] [leading-trim:none] transition-colors",
                active
                  ? "bg-[#5353B3] text-white"
                  : "bg-white text-[#5353B3] hover:bg-[#5353B3]/8",
              )}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
