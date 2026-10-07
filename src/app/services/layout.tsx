import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Invisible Grills & Bird Net Services | Shri Krishna Invisible Grill",
  description:
    "Explore our protective solutions: SS316 Marine-Grade Invisible Grills, All Bird Net Service with Nylon Net Long Time Life, 3 Years Free Repairing Service, Mosquito Screens, and Fall Protection in Mumbai. Call Mr. Krishna: +91 9082754119.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Invisible Grills & All Bird Net Services | Shri Krishna Invisible Grill Mumbai",
    description:
      "SS316 Stainless Steel Invisible Grills, Long Time Life Nylon Bird Nets, and 3 Years Free Repairing Service across Mumbai & Navi Mumbai. Book a free site visit.",
    url: "https://www.modernet.in/services",
    siteName: "Shri Krishna Invisible Grill & Bird Net Company",
    images: [
      {
        url: "/img/service/Invisible-Grill.jpg",
        width: 1200,
        height: 630,
        alt: "Shri Krishna Invisible Grills and Bird Net Services Mumbai",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Invisible Grills & Bird Net Services | Shri Krishna Invisible Grill",
    description:
      "SS316 Invisible Grills & Long Time Life Nylon Bird Nets with 3-Year Free Repairing Service in Mumbai. Call +91 9082754119.",
    images: ["/img/service/Invisible-Grill.jpg"],
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
