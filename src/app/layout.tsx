import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BackgroundBlobs } from "@/components/background-blobs";
import { Toaster } from "sonner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const SITE_URL = "https://wildpaws-exotic-pet-care.amsitservices.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "WildPaws Exotic Pet Care — Reptiles, Birds & Small Mammals",
    template: "%s | WildPaws Exotic Pet Care",
  },
  description:
    "WildPaws Exotic Pet Care delivers expert care for reptiles, birds and small mammals — veterinary-supervised husbandry, boarding, grooming, habitat design and in-home sitting. Licensed, insured, and endlessly patient.",
  keywords: [
    "exotic pet care",
    "reptile care",
    "avian health",
    "small mammal boarding",
    "exotic pet grooming",
    "habitat design",
    "exotic pet sitting",
    "exotic veterinarian",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "WildPaws Exotic Pet Care",
    title: "WildPaws Exotic Pet Care — Reptiles, Birds & Small Mammals",
    description:
      "Veterinary-supervised exotic pet care: husbandry, boarding, grooming, habitat design and in-home sitting for reptiles, birds and small mammals.",
    url: SITE_URL,
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "WildPaws Exotic Pet Care — iguana and sun conure in warm studio light",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WildPaws Exotic Pet Care — Reptiles, Birds & Small Mammals",
    description:
      "Veterinary-supervised exotic pet care: husbandry, boarding, grooming, habitat design and in-home sitting.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="relative min-h-screen antialiased">
        <BackgroundBlobs />
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
