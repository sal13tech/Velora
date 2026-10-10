import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "ZYREN VERSÉ | Zarafetin Yeni Hali",
    template: "%s | ZYREN VERSÉ",
  },
  description:
    "ZYREN VERSÉ ile modern zarafeti keşfet. Özgün tasarımlar, zamansız stil ve ayrıcalıklı bir alışveriş deneyimi.",
  applicationName: "ZYREN VERSÉ",
  openGraph: {
    title: "ZYREN VERSÉ | Zarafetin Yeni Hali",
    description:
      "Modern zarafet, özgün tasarımlar ve zamansız stil. ZYREN VERSÉ dünyasını keşfet.",
    locale: "tr_TR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html lang="tr" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}><body className="min-h-full flex flex-col">{children}</body></html>
  );
}