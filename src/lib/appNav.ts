export const APP_NAV_ITEMS = [
  { label: "HOME", href: "/" },
  { label: "CHAT", href: "/chat" },
  { label: "AVATAR", href: "/avatar" },
  { label: "REWARDS", href: "/rewards" },
] as const;

export function isAppNavActive(pathname: string, href: string): boolean {
  if (href === "/") {
    return pathname === "/" || pathname === "";
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}
