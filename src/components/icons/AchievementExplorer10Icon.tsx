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
 * “Curious Explorer 10” achievement mark from `public/images/png/achievement-explorer10.png`.
 */
export function AchievementExplorer10Icon({
  className,
  alt = "",
  ...props
}: AchievementExplorer10IconProps) {
  return (
    <img
      src={publicPath("/images/png/achievement-explorer10.png")}
      alt={alt}
      role={alt ? undefined : "presentation"}
      className={cn("size-[54px] shrink-0 object-contain", className)}
      decoding="async"
      {...props}
    />
  );
}
