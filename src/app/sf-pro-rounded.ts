import localFont from "next/font/local";

/** Подключены только веса, которые реально есть в UI (Tailwind + inline). */
export const sfProRounded = localFont({
  src: [
    {
      path: "../../public/font/SFRounded-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/font/SFRounded-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/font/SFRounded-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/font/SFRounded-Heavy.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/font/SFRounded-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-sf-pro-rounded",
  display: "swap",
});
