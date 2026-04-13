"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NotificationsMenu } from "@/components/cortex/NotificationsMenu";
import { StreakStarIcon } from "@/components/icons";
import { CORTEX_NAV_ITEMS, isCortexNavActive } from "@/lib/cortexNav";
import { cn } from "@/lib/utils";

type NavTabsProps = {
  className?: string;
};

export function TopNavTabs({ className }: NavTabsProps) {
  const pathname = usePathname();

  return (
    <nav
      className={cn(
        "flex w-fit flex-wrap items-center justify-center gap-0 rounded-[99px] bg-white p-1",
        className,
      )}
    >
      {CORTEX_NAV_ITEMS.map((item) => {
        const active = isCortexNavActive(pathname, item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? "page" : undefined}
            className={cn(
              "flex items-center justify-center rounded-full py-2 text-center font-sans text-sm font-semibold uppercase leading-[100%] tracking-[0.1px] [leading-trim:none] transition-colors lg:w-[100px]",
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
  );
}

export function TopNavActions() {
  return (
    <div className="grid w-max shrink-0 grid-cols-[auto_auto_auto] items-stretch gap-2">
      <div className="flex items-center gap-2 rounded-[66px] bg-[#FFE283] px-2.5 py-1 sm:px-3">
        <StreakStarIcon streakValue={7} />
        <span className="whitespace-nowrap font-sans text-[14px] font-semibold uppercase leading-[100%] tracking-[0] text-[#FF6726] [leading-trim:none]">
          Day Streak!
        </span>
      </div>

      <div className="box-border flex aspect-square h-full max-h-full min-h-[35px] min-w-[35px] w-auto shrink-0 flex-col rounded-full bg-white p-[2.5px]">
        <div className="min-h-0 flex-1 rounded-full bg-[#FFC0C8]" />
      </div>

      <NotificationsMenu />
    </div>
  );
}

export function TopNav() {
  return (
    <header className="hidden h-auto min-h-[73px] shrink-0 items-center gap-3 px-4 lg:flex">
      <div className="flex min-w-0 flex-1 justify-center">
        <TopNavTabs />
      </div>
      <TopNavActions />
    </header>
  );
}
