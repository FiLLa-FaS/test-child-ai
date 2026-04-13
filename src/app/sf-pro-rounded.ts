import localFont from "next/font/local";

export const sfProRounded = localFont({
  src: [
    {
      path: "../../public/font/SFRounded-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/font/SFRounded-Ultralight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/font/SFRounded-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/font/SFRounded-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/font/SFRounded-Medium.woff2",
      weight: "500",
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
