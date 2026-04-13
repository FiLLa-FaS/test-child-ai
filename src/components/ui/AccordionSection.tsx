"use client";

import { useId, useState } from "react";
import { ChevronIcon, FolderOpenIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

type AccordionSectionProps = {
  title: string;
  defaultOpen?: boolean;
  className?: string;
  triggerClassName?: string;
  children: React.ReactNode;
};

export function AccordionSection({
  title,
  defaultOpen = false,
  className,
  triggerClassName,
  children,
}: AccordionSectionProps) {
  const [open, setOpen] = useState(defaultOpen);
  const panelId = useId();

  return (
    <div
      className={cn(
        "rounded-[16px] bg-[#5353B30A] p-[12px]",
        className,
      )}
    >
      <button
        type="button"
        id={`${panelId}-trigger`}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "flex w-full cursor-pointer items-center justify-between gap-2 py-2 text-left text-[#5353B3]",
          triggerClassName,
        )}
      >
        <span className="flex min-w-0 items-center gap-[6px]">
          <FolderOpenIcon />
          <span className="font-sans text-[14px] font-semibold uppercase leading-[100%] tracking-normal">
            {title}
          </span>
        </span>
        <ChevronIcon
          className={cn(
            "transition-transform duration-200 ease-out motion-reduce:transition-none",
            !open && "rotate-180",
          )}
          aria-hidden
        />
      </button>
      <div
        id={panelId}
        role="region"
        aria-labelledby={`${panelId}-trigger`}
        className={cn(
          "grid transition-[grid-template-rows] duration-200 ease-out motion-reduce:transition-none",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="min-h-0 overflow-hidden">{children}</div>
      </div>
    </div>
  );
}
