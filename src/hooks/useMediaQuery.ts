"use client";

import { useCallback, useSyncExternalStore } from "react";

/** Совпадает с брейкпоинтом Tailwind `lg` (min-width: 1024px). */
export function useIsBelowLg(): boolean {
  return useMediaQuery("(max-width: 1023px)");
}

function useMediaQuery(query: string): boolean {
  const subscribe = useCallback(
    (onStoreChange: () => void) => {
      const mq = window.matchMedia(query);
      mq.addEventListener("change", onStoreChange);
      return () => mq.removeEventListener("change", onStoreChange);
    },
    [query],
  );

  const getSnapshot = useCallback(() => window.matchMedia(query).matches, [query]);

  return useSyncExternalStore(
    subscribe,
    getSnapshot,
    () => false,
  );
}
