import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hungry Customers System — Fill Your Restaurant Every Week",
  description: "The proven system that brings hungry customers through your door consistently. Join 500+ restaurants generating $10k–$50k extra revenue per month.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} scroll-smooth`}>
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  );
}
