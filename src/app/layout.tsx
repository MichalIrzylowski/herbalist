import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import { Navigation } from "@/components/Navigation";

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
    default: "Herbalist | Najwyższej Jakości Zioła",
    template: "%s | Herbalist",
  },
  description:
    "Wysokiej jakości zioła i produkty zielarskie w sprzedaży hurtowej. Szybka realizacja, konkurencyjne ceny i profesjonalna obsługa.",
  keywords: [
    "zioła",
    "zielarstwo",
    "sprzedaż ziół",
    "zioła hurtowo",
    "sklep zielarski",
    "produkty zielarskie",
    "naturalne zioła",
    "ekologiczne zioła",
    "zioła lecznicze",
  ],
  authors: [{ name: "Herbalist" }],
  creator: "Herbalist",
  publisher: "Herbalist",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.herbalist.pl"),
  alternates: {
    canonical: "/",
    languages: {
      "pl-PL": "/",
    },
  },
  openGraph: {
    title: "Herbalist | Najwyższej Jakości Zioła",
    description:
      "Wysokiej jakości zioła i produkty zielarskie w sprzedaży hurtowej. Szybka realizacja, konkurencyjne ceny i profesjonalna obsługa.",
    url: "https://www.herbalist.pl",
    siteName: "Herbalist",
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "/herbs-placeholder.jpg",
        width: 1200,
        height: 630,
        alt: "Herbalist - Najwyższej Jakości Zioła",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <Navigation />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
