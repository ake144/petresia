import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/header";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Petresia — The Guardian Algorithm | Ethical AI for a Global Future",
  description:
    "Petresia, guided by the Esperanza Charter, is an African-born framework for principled, open, and equitable intelligence — empowering communities worldwide.",
  keywords: [
    "Petresia",
    "Guardian Algorithm",
    "Esperanza Charter",
    "ethical AI",
    "responsible AI",
    "AI for Africa",
    "global intelligence",
    "open AI framework",
  ],
  authors: [{ name: "Petresia Project" }],
  openGraph: {
    title: "Petresia — The Guardian Algorithm",
    description:
      "Forged in Africa, empowering the globe. Guided by the Esperanza Charter, Petresia sets a new standard for principled, equitable AI.",
    url: "https://www.petresia.org",
    siteName: "Petresia",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Petresia — The Guardian Algorithm",
    description:
      "Guided by the Esperanza Charter: principled, open, and equitable AI for Africa and the world.",
    creator: "@petresia_ai",
  },
  metadataBase: new URL("https://www.petresia.org"),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-neutral-950 text-neutral-100`}
      >
        <Navigation />
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
