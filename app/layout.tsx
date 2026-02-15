import type { Metadata } from "next";
import { Cormorant_Garamond } from 'next/font/google';
import "./globals.css";

const courierPrime = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-courier',
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
      <body className={`${courierPrime.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
