import type { Metadata } from "next";

import "./globals.css";
import { cn } from "@/lib/utils";
import { montserrat, signika, spectral } from "@/lib/fonts";



export const metadata: Metadata = {
  title: "The city of flower",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn("bg-background text-foreground", montserrat.variable, signika.variable, spectral.className)}
      >
        {children}
      </body>
    </html>
  );
}
