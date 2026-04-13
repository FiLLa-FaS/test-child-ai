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
import { BellIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

const MOCK_NOTIFICATIONS = [
  {
    id: "1",
    title: "Streak milestone",
    body: "You have reached a 7-day streak. Open the app tomorrow to keep it going.",
    time: "2 min ago",
  },
  {
    id: "2",
    title: "Unread messages",
    body: "Team chat has 3 new messages waiting for you.",
    time: "18 min ago",
  },
  {
    id: "3",
    title: "Reward ready",
    body: "Your weekly bonus is available. Claim it in the Rewards tab.",
    time: "1 h ago",
  },
  {
    id: "4",
    title: "Complete your profile",
    body: "Finish avatar setup to unlock custom reactions and badges.",
    time: "Yesterday",
  },
] as const;

function usePanelPosition(open: boolean, anchorRef: RefObject<HTMLElement | null>) {
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
    const maxW = 320;
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

export function NotificationsMenu() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const anchorRef = useRef<HTMLButtonElement>(null);
  const menuId = useId();
  const panelPos = usePanelPosition(open, anchorRef);

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
      const panel = document.getElementById(menuId);
      if (panel?.contains(target)) return;
      close();
    };
    document.addEventListener("pointerdown", onPointer);
    return () => document.removeEventListener("pointerdown", onPointer);
  }, [open, close, menuId]);

  const panel =
    open && panelPos ? (
      <div
        id={menuId}
        role="region"
        aria-label="Notifications"
        className={cn(
          "z-[100] max-h-[min(22rem,70dvh)] overflow-y-auto rounded-xl bg-white shadow-lg",
          "motion-reduce:transition-none",
        )}
        style={{
          position: "fixed",
          top: panelPos.top,
          right: panelPos.right,
          width: panelPos.width,
        }}
      >
        <div className="sticky top-0 z-[1] bg-white px-3 py-2.5 sm:px-4">
          <p className="text-[11px] font-bold uppercase tracking-wide text-black/45 sm:text-xs">
            Notifications
          </p>
        </div>
        <ol className="list-none p-0">
          {MOCK_NOTIFICATIONS.map((n) => (
            <li key={n.id}>
              <div className="px-3 py-3 sm:px-4 sm:py-3.5">
                <div className="flex flex-col gap-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-2 gap-y-0.5">
                    <p className="min-w-0 text-sm font-bold text-black">{n.title}</p>
                    <span className="shrink-0 text-[10px] font-semibold uppercase tracking-wide text-black/40 sm:text-xs">
                      {n.time}
                    </span>
                  </div>
                  <p className="text-xs leading-relaxed text-black/60 sm:text-sm sm:leading-relaxed">
                    {n.body}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    ) : null;

  return (
    <div
      ref={rootRef}
      className="relative flex h-full min-h-0 shrink-0 items-stretch"
    >
      <button
        ref={anchorRef}
        type="button"
        className={cn(
          "flex aspect-square h-full max-h-full min-h-[35px] min-w-[35px] w-auto shrink-0 items-center justify-center rounded-full bg-white transition-colors",
          "hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/15",
          open && "bg-black/5",
        )}
        aria-label="Notifications"
        aria-expanded={open}
        aria-haspopup="true"
        aria-controls={open ? menuId : undefined}
        onClick={() => setOpen((o) => !o)}
      >
        <BellIcon />
      </button>
      {typeof document !== "undefined" && panel ? createPortal(panel, document.body) : null}
    </div>
  );
}
