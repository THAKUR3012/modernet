import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "ModerNet | Invisible Grills & Bird Netting in Mumbai & Navi Mumbai",
  description:
    "ModerNet offers premium invisible grills, motorized mosquito mesh, and bird netting solutions in Mumbai & Navi Mumbai. Safe, durable, and unobstructed views for modern homes.",
  keywords: [
    "Invisible Grills Mumbai",
    "Invisible Grills Navi Mumbai",
    "Bird Netting Mumbai",
    "Pigeon Net for Balcony",
    "Mosquito Mesh",
    "Motorized Zip Screen",
    "Construction Safety Nets",
    "ModerNet",
    "Belapur",
    "Mahape",
  ],
  icons: {
    icon: "/img/modernet_logo1.jpeg",
  },
  openGraph: {
    title: "ModerNet | Invisible Grills & Bird Netting in Mumbai & Navi Mumbai",
    description:
      "Modern invisible safety grills, mosquito nets, and anti-bird netting for high-rise residential & commercial properties in Mumbai.",
    url: "https://www.modernet.in/",
    siteName: "ModerNet",
    images: [
      {
        url: "/img/Birdnetting/Image-02.jpg",
        width: 1200,
        height: 630,
        alt: "ModerNet Balcony Protection",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${playfair.variable}`}>
      <body className="font-outfit antialiased bg-white text-slate-800 min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
