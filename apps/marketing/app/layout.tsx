import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "React Superform - Component Library",
  description: "A reusable React component library for building beautiful forms",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
