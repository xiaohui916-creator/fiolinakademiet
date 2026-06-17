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
  title: "Fiolinakademiet Bergen – Fiolinundervisning for barn 3–18 år",
  description:
    "Fiolinakademiet tilbyr fiolinundervisning basert på Suzukimetoden for barn og ungdom mellom 3 og 18 år i Bergen. Samlinger, seminarer og mesterklasser.",
  keywords: "fiolin, fiolinundervisning, Bergen, Suzuki, barn, musikk, fiolinakademiet",
  openGraph: {
    title: "Fiolinakademiet Bergen",
    description: "Fiolinundervisning for barn og ungdom 3–18 år i Bergen",
    url: "https://www.fiolinakademiet.no",
    siteName: "Fiolinakademiet",
    locale: "nb_NO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nb"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}