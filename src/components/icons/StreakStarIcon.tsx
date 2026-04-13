import { cn } from "@/lib/utils";
import type { IconProps } from "./types";

const STAR_PATH =
  "M13.3385 0.602886C14.7308 -0.200962 16.4462 -0.200961 17.8385 0.602887L28.927 7.00481C30.3193 7.80866 31.177 9.29423 31.177 10.9019V23.7058C31.177 25.3135 30.3193 26.799 28.927 27.6029L17.8385 34.0048C16.4462 34.8087 14.7308 34.8087 13.3385 34.0048L2.25004 27.6029C0.857738 26.799 4.3869e-05 25.3135 4.3869e-05 23.7058V10.9019C4.3869e-05 9.29423 0.857739 7.80866 2.25004 7.00481L13.3385 0.602886Z";

export type StreakStarIconProps = Omit<IconProps, "children"> & {
  /** Streak count shown inside the star (white, SF Pro Rounded 600 / 18px). */
  streakValue: string | number;
};

/**
 * Star badge from `public/star.svg` with the streak number drawn inside the SVG.
 */
export function StreakStarIcon({
  streakValue,
  className,
  title,
  ...props
}: StreakStarIconProps) {
  const label = String(streakValue);

  return (
    <svg
      viewBox="0 0 32 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-[35px] w-8 shrink-0", className)}
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d={STAR_PATH} fill="#FF6726" />
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="central"
        className="fill-white font-sans text-[18px] font-semibold uppercase leading-[100%] tracking-[0] [leading-trim:none]"
      >
        {label}
      </text>
    </svg>
  );
}
