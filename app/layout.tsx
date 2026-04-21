import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Oura Health Dashboard",
  description: "Demo health dashboard inspired by the Oura Ring experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  );
}
