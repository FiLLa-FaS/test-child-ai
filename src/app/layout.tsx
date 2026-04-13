import type { Metadata } from "next";
import { ShellLayout } from "@/components/shell/ShellLayout";
import { publicPath } from "@/lib/publicPath";
import { sfProRounded } from "@/app/sf-pro-rounded";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cortex — AI Learning Companion",
  description: "Your AI-powered learning companion for kids",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full ${sfProRounded.variable}`}>
      <body
        className={`h-full ${sfProRounded.className}`}
        style={{
          backgroundColor: "#fff",
          backgroundImage: `url(${publicPath("/images/png/background.png")})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <ShellLayout>{children}</ShellLayout>
      </body>
    </html>
  );
}
