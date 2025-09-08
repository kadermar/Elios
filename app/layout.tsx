import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Elios - Hire with human expertise, at AI speed",
  description: "Elios combines elite recruiters with an intelligence layer that cuts the noise and moves the right people forward—fast.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-aptos antialiased overflow-x-hidden">
        <div className="min-h-screen overflow-x-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}
