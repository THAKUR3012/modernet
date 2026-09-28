import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ModerNet | Contact Us",
  description:
    "Book your free site inspection with ModerNet safety experts. Invisible grills, bird nets, and mosquito screens across Mumbai & Navi Mumbai.",
  openGraph: {
    title: "ModerNet | Contact Us",
    description:
      "Book your free site inspection with ModerNet safety experts. Invisible grills, bird nets, and mosquito screens across Mumbai & Navi Mumbai.",
    url: "https://www.modernet.in/contact.html",
    images: [
      {
        url: "/img/Birdnetting/Image-07.jpg",
        width: 1200,
        height: 630,
        alt: "Book Free Inspection - ModerNet",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ModerNet | Contact Us",
    description:
      "Book your free site inspection with ModerNet safety experts. Invisible grills, bird nets, and mosquito screens across Mumbai & Navi Mumbai.",
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
