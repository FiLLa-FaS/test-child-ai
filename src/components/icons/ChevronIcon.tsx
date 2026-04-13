import { cn } from "@/lib/utils";
import type { IconProps } from "./types";

/** Inline SVG from `public/images/chevron.svg` */
export function ChevronIcon({ className, title, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-6 shrink-0", className)}
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.256 15.969C18.5337 15.8981 18.7826 15.6862 18.9118 15.4105C18.973 15.2801 18.981 15.2313 18.981 14.99C18.981 14.5225 19.2609 14.8397 15.7189 11.2927C12.7319 8.30139 12.6039 8.17699 12.429 8.09529C12.2635 8.01789 12.2246 8.01019 12 8.01019C11.7754 8.01019 11.7365 8.01789 11.571 8.09529C11.3961 8.17699 11.2681 8.30139 8.28109 11.2927C4.73909 14.8397 5.01899 14.5225 5.01899 14.99C5.01899 15.2318 5.02699 15.28 5.08869 15.4117C5.32649 15.9191 5.90239 16.1341 6.41959 15.9087C6.56789 15.844 6.76719 15.6513 9.28949 13.1336L12 10.4281L14.7105 13.1336C17.2612 15.6796 17.4307 15.8434 17.585 15.9107C17.7808 15.9961 18.0559 16.02 18.256 15.969Z"
        fill="currentColor"
      />
    </svg>
  );
}
