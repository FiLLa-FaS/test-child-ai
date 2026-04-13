"use client";

import {
  useCallback,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
  type RefObject,
} from "react";
import { createPortal } from "react-dom";
import { HelpIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

function useHelpPanelPosition(open: boolean, anchorRef: RefObject<HTMLElement | null>) {
  const [box, setBox] = useState<{
    top: number;
    right: number;
    width: number;
  } | null>(null);

  const measure = useCallback(() => {
    const el = anchorRef.current;
    if (!el || !open) return;
    const rect = el.getBoundingClientRect();
    const pad = 12;
    const maxW = 300;
    const width = Math.min(maxW, window.innerWidth - pad * 2);
    setBox({
      top: rect.bottom + 8,
      right: Math.max(pad, window.innerWidth - rect.right),
      width,
    });
  }, [open, anchorRef]);

  useLayoutEffect(() => {
    if (!open) {
      setBox(null);
      return;
    }
    measure();
    window.addEventListener("resize", measure);
    window.addEventListener("scroll", measure, true);
    return () => {
      window.removeEventListener("resize", measure);
      window.removeEventListener("scroll", measure, true);
    };
  }, [open, measure]);

  return box;
}

export type HelpInfoButtonProps = {
  /** Short heading inside the popover. */
  title: string;
  /** Explainer copy (English). */
  body: string;
  /** Accessible name for the trigger. */
  ariaLabel: string;
  /** Optional class on the trigger wrapper. */
  className?: string;
};

export function HelpInfoButton({ title, body, ariaLabel, className }: HelpInfoButtonProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const anchorRef = useRef<HTMLButtonElement>(null);
  const panelId = useId();
  const panelPos = useHelpPanelPosition(open, anchorRef);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, close]);

  useEffect(() => {
    if (!open) return;
    const onPointer = (e: PointerEvent) => {
      const root = rootRef.current;
      const target = e.target as Node;
      if (root?.contains(target)) return;
      const panel = document.getElementById(panelId);
      if (panel?.contains(target)) return;
      close();
    };
    document.addEventListener("pointerdown", onPointer);
    return () => document.removeEventListener("pointerdown", onPointer);
  }, [open, close, panelId]);

  const panel =
    open && panelPos ? (
      <div
        id={panelId}
        role="dialog"
        aria-label={title}
        className={cn(
          "z-[100] max-h-[min(18rem,65dvh)] overflow-y-auto rounded-xl bg-white p-4 shadow-lg",
          "motion-reduce:transition-none",
        )}
        style={{
          position: "fixed",
          top: panelPos.top,
          right: panelPos.right,
          width: panelPos.width,
        }}
      >
        <p className="text-sm font-bold text-[#5353B3]">{title}</p>
        <p className="mt-2 text-sm leading-relaxed text-black/70">{body}</p>
      </div>
    ) : null;

  return (
    <div ref={rootRef} className={cn("relative shrink-0", className)}>
      <button
        ref={anchorRef}
        type="button"
        className={cn(
          "flex h-5 w-5 shrink-0 cursor-pointer items-center justify-center rounded-full transition-colors hover:bg-black/5",
          open && "bg-black/5",
        )}
        aria-label={ariaLabel}
        aria-expanded={open}
        aria-haspopup="dialog"
        aria-controls={open ? panelId : undefined}
        onClick={() => setOpen((o) => !o)}
      >
        <HelpIcon />
      </button>
      {typeof document !== "undefined" && panel ? createPortal(panel, document.body) : null}
    </div>
  );
}
