import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ModerNet | Frequently Asked Questions",
  description:
    "Quick answers to the most common questions about our bird netting and invisible grill installations in Mumbai and Navi Mumbai.",
  openGraph: {
    title: "ModerNet | Frequently Asked Questions",
    description:
      "Quick answers to the most common questions about our bird netting and invisible grill installations in Mumbai and Navi Mumbai.",
    url: "https://www.modernet.in/faq.html",
    images: [
      {
        url: "/img/Birdnetting/Image-14.jpg",
        width: 1200,
        height: 630,
        alt: "ModerNet FAQ - Invisible Grills and Bird Netting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ModerNet | Frequently Asked Questions",
    description:
      "Quick answers to the most common questions about our bird netting and invisible grill installations in Mumbai and Navi Mumbai.",
    images: ["/img/Birdnetting/Image-14.jpg"],
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
