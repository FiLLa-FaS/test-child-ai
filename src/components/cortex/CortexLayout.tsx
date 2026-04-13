"use client";

import { useCallback, useEffect, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { CortexLogo } from "@/components/cortex/CortexLogo";
import { LeftSidebar, LeftSidebarContent } from "@/components/cortex/LeftSidebar";
import { TopNav, TopNavActions } from "@/components/cortex/TopNav";
import { MobileBottomNav } from "@/components/cortex/MobileBottomNav";
import { BurgerIcon } from "@/components/icons";
import { useIsBelowLg } from "@/hooks/useMediaQuery";

type CortexLayoutProps = {
  children: ReactNode;
};

export function CortexLayout({ children }: CortexLayoutProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const isBelowLg = useIsBelowLg();

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [menuOpen, closeMenu]);

  useEffect(() => {
    if (!isBelowLg) setMenuOpen(false);
  }, [isBelowLg]);

  return (
    <div className="relative flex h-full overflow-hidden bg-transparent">
      {/* Full-shell mascot layer — spans left sidebar + main so it is not clipped at column edges */}
      <div
        className="pointer-events-none absolute inset-0 z-0 hidden items-center justify-center lg:flex"
        aria-hidden
      >
        <img
          src="/images/png/mascot.png"
          alt=""
          className="h-auto w-auto max-w-none"
          draggable={false}
        />
      </div>

      <div className="relative z-10 hidden lg:block">
        <LeftSidebar />
      </div>

      <div className="relative z-10 flex min-w-0 flex-1 flex-col overflow-hidden">
        <TopNav />

        {isBelowLg ? (
          <>
            {/* Mobile / tablet: compact bar + burger */}
            <header className="flex min-h-14 w-full shrink-0 items-center gap-2 px-3 py-1.5 sm:min-h-[52px] sm:gap-3 sm:px-4 sm:py-2">
              <button
                type="button"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg hover:bg-black/5"
                aria-expanded={menuOpen}
                aria-controls="cortex-mobile-menu"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                onClick={() => setMenuOpen((o) => !o)}
              >
                <BurgerIcon open={menuOpen} />
              </button>

              <CortexLogo variant="toolbar" className="min-w-0 flex-1" />

              <TopNavActions />
            </header>

            {/* Slide-over below lg: только контент левого сайдбара; анимация слева */}
            <div
              id="cortex-mobile-menu"
              className={cn(
                "fixed inset-0 z-50 motion-reduce:transition-none",
                menuOpen ? "pointer-events-auto" : "pointer-events-none",
              )}
              role="dialog"
              aria-modal={menuOpen}
              aria-hidden={!menuOpen}
              aria-label="Menu"
            >
              <button
                type="button"
                className={cn(
                  "absolute inset-0 bg-black/40 transition-opacity duration-300 ease-out motion-reduce:transition-none",
                  menuOpen ? "opacity-100" : "opacity-0",
                )}
                aria-label="Close menu"
                tabIndex={menuOpen ? 0 : -1}
                onClick={closeMenu}
              />
              <div
                className={cn(
                  "absolute left-0 top-0 flex h-full w-full min-w-0 max-w-full flex-col bg-white shadow-xl transition-transform duration-300 ease-out motion-reduce:transition-none",
                  menuOpen ? "translate-x-0" : "-translate-x-full",
                )}
              >
                <div className="flex shrink-0 items-center justify-end px-3 py-2">
                  <button
                    type="button"
                    className="rounded-lg px-3 py-2 text-sm font-semibold text-black/60 hover:bg-black/5 hover:text-black"
                    tabIndex={menuOpen ? 0 : -1}
                    onClick={closeMenu}
                  >
                    Close
                  </button>
                </div>
                <div className="min-h-0 flex-1 overflow-y-auto" inert={!menuOpen || undefined}>
                  <LeftSidebarContent />
                </div>
              </div>
            </div>
          </>
        ) : null}

        <div className="flex min-h-0 flex-1 flex-col overflow-hidden lg:flex-row">{children}</div>

        {isBelowLg && <MobileBottomNav />}
      </div>
    </div>
  );
}
