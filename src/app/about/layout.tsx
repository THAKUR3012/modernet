import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ModerNet | About Us",
  description:
    "Learn about ModerNet and our commitment to modern safety solutions for homes and businesses in Mumbai and Navi Mumbai.",
  openGraph: {
    title: "ModerNet | About Us",
    description:
      "Learn about ModerNet and our commitment to modern safety solutions for homes and businesses in Mumbai and Navi Mumbai.",
    url: "https://www.modernet.in/about.html",
    images: [
      {
        url: "/img/Birdnetting/Image-02.jpg",
        width: 1200,
        height: 630,
        alt: "ModerNet Balcony Protection",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ModerNet | About Us",
    description:
      "Learn about ModerNet and our commitment to modern safety solutions for homes and businesses in Mumbai and Navi Mumbai.",
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
