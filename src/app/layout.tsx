import type { Metadata } from "next";
import { Cabin } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const cabin = Cabin({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Oak Street Health",
  description: "Oak Street Health, healthcare designed specially for you!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(cabin.className, "max-w-[1920px] mx-auto")}>
        {children}
      </body>
    </html>
  );
}
