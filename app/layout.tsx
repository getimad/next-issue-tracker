import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "./NavBar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Issue Tracker",
  description:
    "Issue Tracker is a full-stack web application allows you track issues of your project.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  );
}
