import type { Metadata } from "next";
import { NextUIProvider } from "@nextui-org/system";
import "./globals.css";
import { montserrat } from "@/lib/fonts";


// https://openlibrary.org/developers/api

export const metadata: Metadata = {
  title: "Books management",
  description: "Manage your books with ease",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${montserrat.className} max-h-screen`}>
        <NextUIProvider>
          {children}
        </NextUIProvider>
      </body>
    </html>
  );
}
