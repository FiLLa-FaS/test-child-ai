import { cn } from "@/lib/utils";
import { publicPath } from "@/lib/publicPath";
import type { ImgHTMLAttributes } from "react";

export type AchievementExplorer10IconProps = Omit<
  ImgHTMLAttributes<HTMLImageElement>,
  "src" | "alt"
> & {
  /** Overrides default empty decorative alt. */
  alt?: string;
};

/**
 * “Curious Explorer 10” achievement mark from `public/images/webp/achievement-explorer10.webp`.
 */
export function AchievementExplorer10Icon({
  className,
  alt = "",
  ...props
}: AchievementExplorer10IconProps) {
  return (
    <img
      src={publicPath("/images/webp/achievement-explorer10.webp")}
      alt={alt}
      role={alt ? undefined : "presentation"}
      className={cn("size-[54px] shrink-0 object-contain", className)}
      decoding="async"
      {...props}
    />
  );
}
