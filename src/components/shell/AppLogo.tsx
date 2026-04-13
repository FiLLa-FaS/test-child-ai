import { cn } from "@/lib/utils";

type AppLogoProps = {
  className?: string;
  /** `toolbar` — мобильный верхний бар (скрывается от lg), меньший кегль, чтобы не заезжать на кнопки */
  variant?: "sidebar" | "toolbar";
};

export function AppLogo({ className, variant = "sidebar" }: AppLogoProps) {
  return (
    <span
      className={cn(
        "text-center not-italic leading-[100%] tracking-normal text-[#596BCB]",
        variant === "toolbar"
          ? "text-base sm:text-lg md:text-2xl"
          : "text-[40px]",
        className,
      )}
      style={{
        fontWeight: 800,
      }}
    >
      CORTEX
    </span>
  );
}
