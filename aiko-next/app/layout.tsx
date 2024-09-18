import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const bookerly = localFont({
  src: "./fonts/Bookerly.ttf",
  variable: "--font-bookerly",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Aiko app",
  description: "In build yet...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${bookerly.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
