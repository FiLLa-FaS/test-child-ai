export const CORTEX_NAV_ITEMS = [
  { label: "HOME", href: "/" },
  { label: "CHAT", href: "/chat" },
  { label: "AVATAR", href: "/avatar" },
  { label: "REWARDS", href: "/rewards" },
] as const;

export function isCortexNavActive(pathname: string, href: string): boolean {
  if (href === "/") {
    return pathname === "/" || pathname === "";
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}
