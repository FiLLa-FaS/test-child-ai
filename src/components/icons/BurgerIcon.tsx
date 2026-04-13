import { cn } from "@/lib/utils";

type BurgerIconProps = {
  open: boolean;
  className?: string;
};

export function BurgerIcon({ open, className }: BurgerIconProps) {
  return (
    <span className={cn("flex h-5 w-6 flex-col justify-center gap-1", className)} aria-hidden>
      <span
        className={cn(
          "h-0.5 w-full rounded-full bg-black transition-transform",
          open && "translate-y-1.5 rotate-45",
        )}
      />
      <span
        className={cn("h-0.5 w-full rounded-full bg-black transition-opacity", open && "opacity-0")}
      />
      <span
        className={cn(
          "h-0.5 w-full rounded-full bg-black transition-transform",
          open && "-translate-y-1.5 -rotate-45",
        )}
      />
    </span>
  );
}
