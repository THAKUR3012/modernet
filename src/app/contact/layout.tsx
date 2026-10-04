import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Mr. Krishna | Shri Krishna Invisible Grill & Bird Net Company",
  description:
    "Contact Mr. Krishna at Shri Krishna Invisible Grill & Bird Net Company. Kandivali East, Mumbai. Call +91 9082754119 / +91 8692873408 for free site inspection & 3 Years Free Repairing Service.",
  openGraph: {
    title: "Contact Mr. Krishna | Shri Krishna Invisible Grill & Bird Net Company",
    description:
      "Contact Mr. Krishna at Shri Krishna Invisible Grill & Bird Net Company. Kandivali East, Mumbai. Free site inspection & 3 Years Free Repairing Service.",
    url: "https://www.modernet.in/contact.html",
    images: [
      {
        url: "/img/Birdnetting/Image-07.jpg",
        width: 1200,
        height: 630,
        alt: "Book Free Inspection - Shri Krishna Invisible Grill",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Mr. Krishna | Shri Krishna Invisible Grill & Bird Net Company",
    description:
      "Contact Mr. Krishna at Shri Krishna Invisible Grill & Bird Net Company. Kandivali East, Mumbai. Call +91 9082754119 / +91 8692873408.",
    images: ["/img/Birdnetting/Image-07.jpg"],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
