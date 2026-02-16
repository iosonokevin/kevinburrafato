import type { Metadata } from "next";
import { Cormorant_Garamond } from 'next/font/google';
import 'vanilla-cookieconsent/dist/cookieconsent.css';
import CookieConsentComponent from '@/components/CookieConsent';
import "./globals.css";

const courierPrime = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-courier',
});

export const metadata: Metadata = {
  title: "Kevin Burrafato - Counselor Transpersonale",
  description: "Come archeologo di Sé, accompagno le persone a esplorare se stesse per ritrovare forza, direzione e autenticità, scoprendo che dentro di loro sanno già tutto",
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
        <CookieConsentComponent />
      </body>
    </html>
  );
}
