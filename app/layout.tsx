import type { Metadata } from "next";
import { Courier_Prime } from 'next/font/google';
import localFont from 'next/font/local';
import "./globals.css";

const courierPrime = Courier_Prime({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-courier',
});

const biroScript = localFont({
  src: '../public/fonts/BiroScriptPlus.woff2',
  variable: '--font-biro',
});

export const metadata: Metadata = {
  title: "Kevin Burrafato - Archeologi di noi stessi",
  description: "Counselor transpersonale. Accompagno chi vuole conoscersi in profondità.",
  verification: { google: "dWAiRPtDpjTQ3Z_sOJW8lrwrftW3bRkgUz0-b1qbpXs" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className={`${courierPrime.variable} ${biroScript.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
