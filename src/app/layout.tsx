import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "../style/home.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pulizia 2.0",
  description: "Pulizia 2.0 is a cleaning service in the city of Milan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
