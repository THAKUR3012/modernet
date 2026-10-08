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
  metadataBase: new URL("https://www.modernet.in"),
  title: {
    default: "Shri Krishna Invisible Grill & Bird Net Company | Mumbai",
    template: "%s | Shri Krishna Invisible Grill & Bird Net Co.",
  },
  description:
    "Shri Krishna Invisible Grill & Bird Net Company. Premium SS316 marine-grade invisible grills, all bird net services with long time life nylon nets, and 3 Years Free Repairing Service across Mumbai & Navi Mumbai. Book a free site inspection with Mr. Krishna today.",
  keywords: [
    "Shri Krishna Invisible Grill",
    "Shri Krishna Invigival Grill & Bird Net Company",
    "Invisible Grills Mumbai",
    "All Bird Net Service",
    "Nylon Net Long Time Life",
    "Bird Netting Mumbai",
    "Pigeon Net for Balcony",
    "Invisible Grill Installation Kandivali East",
    "Balcony Safety Grill Mumbai",
    "SS316 Invisible Grill",
    "Free Repairing Service 3 Years",
    "Mosquito Mesh Mumbai",
    "Motorized Zip Screen",
    "Construction Safety Nets",
    "Kandivali East",
    "Akurli Road",
    "Hanuman Nagar",
    "Borivali",
    "Malad",
    "Goregaon",
    "Andheri",
    "Powai",
    "Thane",
    "Mr Krishna",
  ],
  authors: [{ name: "Mr. Krishna", url: "https://www.modernet.in" }],
  creator: "Mr. Krishna",
  publisher: "Shri Krishna Invisible Grill & Bird Net Company",
  alternates: {
    canonical: "/",
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
  icons: {
    icon: "/img/logo.png",
  },
  openGraph: {
    title: "Shri Krishna Invisible Grill & Bird Net Company | Mumbai",
    description:
      "Premium SS316 Invisible Grills, All Bird Net Services with Long Time Life Nylon Nets, and 3 Years Free Repairing Service across Mumbai. Contact Mr. Krishna at +91 9082754119.",
    url: "https://www.modernet.in/",
    siteName: "Shri Krishna Invisible Grill & Bird Net Company",
    images: [
      {
        url: "/img/business_card.png",
        width: 1200,
        height: 675,
        alt: "Shri Krishna Invisible Grill & Bird Net Company - Mr. Krishna",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shri Krishna Invisible Grill & Bird Net Company | Mumbai",
    description:
      "SS316 Invisible Grills & Long Time Life Nylon Bird Nets with 3-Year Free Repairing Service in Mumbai. Call Mr. Krishna: +91 9082754119.",
    images: ["/img/business_card.png"],
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "Shri Krishna Invisible Grill & Bird Net Company",
  alternateName: [
    "Shri Krishna Invigival Grill & Bird Net Company",
    "ModerNet Safety Solutions",
  ],
  description:
    "Leading invisible safety grill and bird netting installation service in Mumbai. Providing SS316 marine-grade invisible grills, all bird net services with long time life nylon nets, and 3 Years Free Repairing Service guarantee.",
  url: "https://www.modernet.in",
  logo: "https://www.modernet.in/img/logo.png",
  image: "https://www.modernet.in/img/business_card.png",
  telephone: "+919082754119",
  email: "Msmartkrish.81089@gmail.com",
  priceRange: "₹₹",
  founder: {
    "@type": "Person",
    name: "Mr. Krishna",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jai Ambika Bhawani Society, Hanuman Nagar, Akurli Road",
    addressLocality: "Kandivali East",
    addressRegion: "Mumbai, Maharashtra",
    postalCode: "400101",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 19.2045,
    longitude: 72.8687,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "08:00",
      closes: "20:00",
    },
  ],
  areaServed: [
    { "@type": "City", name: "Mumbai" },
    { "@type": "AdministrativeArea", name: "Kandivali East" },
    { "@type": "AdministrativeArea", name: "Borivali" },
    { "@type": "AdministrativeArea", name: "Malad" },
    { "@type": "AdministrativeArea", name: "Goregaon" },
    { "@type": "AdministrativeArea", name: "Andheri" },
    { "@type": "AdministrativeArea", name: "Powai" },
    { "@type": "AdministrativeArea", name: "Thane" },
    { "@type": "AdministrativeArea", name: "Navi Mumbai" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Safety Systems & Netting Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "SS316 Invisible Grills Installation",
          description:
            "High tensile marine-grade stainless steel invisible grills for balcony, windows, and high-rise apartments.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "All Bird Net Service & Pigeon Netting",
          description:
            "Long time life UV-stabilized nylon netting for balconies, AC ledges, duct areas, and buildings.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "3 Years Free Repairing Service Guarantee",
          description:
            "Free maintenance and repairing warranty for 3 years across all installations.",
        },
      },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "148",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body className="font-outfit antialiased bg-white text-slate-800 min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
