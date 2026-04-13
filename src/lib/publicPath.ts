/**
 * Префикс для статики на хостах с подпутём (например GitHub Pages: `user.github.io/repo/`).
 * Задайте `NEXT_PUBLIC_BASE_PATH` при сборке, например `/repo-name` (без слэша в конце).
 */
export function publicPath(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (!base) return normalized;
  return `${base}${normalized}`;
}
