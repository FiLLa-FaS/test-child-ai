import { cn } from "@/lib/utils";
import type { IconProps } from "./types";

/** Paperclip attach control from `public/paperclip.svg`. */
export function PaperclipIcon({ className, title, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-[40px] shrink-0", className)}
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <rect width="39.5" height="39.5" rx="19.75" fill="#847AF1" fillOpacity={0.08} />
      <path
        d="M29.9767 18.7205L20.0209 28.6763C18.8012 29.896 17.147 30.5812 15.4221 30.5812C13.6973 30.5812 12.043 29.896 10.8234 28.6763C9.60372 27.4566 8.91852 25.8024 8.91852 24.0776C8.91852 22.3527 9.60372 20.6985 10.8234 19.4788L20.1075 10.1946C20.9207 9.38009 22.024 8.92192 23.175 8.9209C24.3259 8.91988 25.4301 9.37611 26.2446 10.1892C27.0592 11.0023 27.5174 12.1057 27.5184 13.2566C27.5194 14.4076 27.0632 15.5118 26.2501 16.3263L16.9442 25.6105C16.5377 26.017 15.9863 26.2454 15.4113 26.2454C14.8363 26.2454 14.2849 26.017 13.8784 25.6105C13.4718 25.2039 13.2434 24.6525 13.2434 24.0776C13.2434 23.5026 13.4718 22.9512 13.8784 22.5446L23.0759 13.358"
        stroke="#7368E3"
        strokeWidth={2.16667}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
