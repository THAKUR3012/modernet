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
  title: "Shri Krishna Invisible Grill & Bird Net Company | Mumbai & Navi Mumbai",
  description:
    "Shri Krishna Invisible Grill & Bird Net Company offers premium SS316 invisible grills, all bird net services with long time life nylon nets, and 3 Years Free Repairing Service across Mumbai & Navi Mumbai.",
  keywords: [
    "Shri Krishna Invisible Grill",
    "Shri Krishna Invigival Grill & Bird Net Company",
    "Mr Krishna",
    "Invisible Grills Mumbai",
    "All Bird Net Service",
    "Nylon Net Long Time Life",
    "Kandivali East",
    "Akurli Road",
    "Hanuman Nagar",
    "Invisible Grills Navi Mumbai",
    "Bird Netting Mumbai",
    "Pigeon Net for Balcony",
    "Mosquito Mesh",
    "Motorized Zip Screen",
    "Construction Safety Nets",
    "Borivali",
    "Malad",
  ],
  icons: {
    icon: "/img/modernet_logo1.jpeg",
  },
  openGraph: {
    title: "Shri Krishna Invisible Grill & Bird Net Company | Mumbai & Navi Mumbai",
    description:
      "Modern invisible safety grills, all bird netting services with long life nylon nets, and 3-Year Free Repairing Service across Mumbai & Navi Mumbai.",
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
