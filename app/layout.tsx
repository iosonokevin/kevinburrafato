import type { Metadata } from "next";
import { Libre_Baskerville } from "next/font/google";
import "./globals.css";

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  variable: "--font-libre-baskerville",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Kevin Burrafato",
  description: "Archeologo di me stesso. Accompagno chi vuole conoscersi in profondità.",
  verification: { google: "dWAiRPtDpjTQ3Z_sOJW8lrwrftW3bRkgUz0-b1qbpXs" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className={`${libreBaskerville.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
