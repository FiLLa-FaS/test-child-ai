import { cn } from "@/lib/utils";
import type { IconProps } from "./types";

/** Wave / send control from `public/wave.svg`. */
export function WaveIcon({ className, title, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 46 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-[46px] shrink-0", className)}
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path
        d="M0 23C0 10.2975 10.2975 0 23 0C35.7025 0 46 10.2975 46 23C46 35.7025 35.7025 46 23 46C10.2975 46 0 35.7025 0 23Z"
        fill="#847AF1"
      />
      <path
        d="M12.1665 20.8339V24.0839"
        stroke="white"
        strokeWidth={2.16667}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.5 16.5V28.4167"
        stroke="white"
        strokeWidth={2.16667}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.8335 13.25V32.75"
        stroke="white"
        strokeWidth={2.16667}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25.1665 18.6661V26.2495"
        stroke="white"
        strokeWidth={2.16667}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M29.5 15.4169V29.5003"
        stroke="white"
        strokeWidth={2.16667}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M33.8335 20.8339V24.0839"
        stroke="white"
        strokeWidth={2.16667}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
