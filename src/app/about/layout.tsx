import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Shri Krishna Invisible Grill & Bird Net Company",
  description:
    "Learn about Shri Krishna Invisible Grill & Bird Net Company. Guided by Mr. Krishna in Kandivali East, Mumbai. Providing SS316 marine-grade invisible safety grills, all bird net services with long time life nylon nets, and 3 Years Free Repairing Service guarantee across Mumbai & Navi Mumbai.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us | Shri Krishna Invisible Grill & Bird Net Company",
    description:
      "Learn about Shri Krishna Invisible Grill & Bird Net Company. High-rise invisible grills, long time life nylon bird nets, and 3 Years Free Repairing Service across Mumbai. Led by Mr. Krishna.",
    url: "https://www.modernet.in/about",
    siteName: "Shri Krishna Invisible Grill & Bird Net Company",
    images: [
      {
        url: "/img/Birdnetting/Image-02.jpg",
        width: 1200,
        height: 630,
        alt: "Shri Krishna Invisible Grill & Balcony Netting Solutions",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Shri Krishna Invisible Grill & Bird Net Company",
    description:
      "Learn about Shri Krishna Invisible Grill & Bird Net Company. SS316 invisible grills & long-life nylon nets with 3-Year Free Repairing Service in Mumbai.",
    images: ["/img/Birdnetting/Image-02.jpg"],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
