import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import { Footer, Navbar } from "@/components";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Identity Management Inc",
  description:
    "Securely manage and govern user identities with solutions that ensure compliance, improve security, and streamline access across your organization",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <body className={clsx(dmSans.className, "antialiased bg-[#EAEEFE]")}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
