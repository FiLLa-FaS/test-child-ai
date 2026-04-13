import type { Metadata } from "next";
import { ShellLayout } from "@/components/shell/ShellLayout";
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
    <html lang="en" className="h-full">
      <body className="h-full">
        <ShellLayout>{children}</ShellLayout>
      </body>
    </html>
  );
}
