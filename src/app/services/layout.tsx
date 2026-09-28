import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ModerNet | Our Services",
  description:
    "Explore our complete range of safety solutions: Invisible Grills, Mosquito Nets, Motorized Zip Screens, Bird Netting, and Construction Safety Nets in Mumbai & Navi Mumbai.",
  openGraph: {
    title: "ModerNet | Our Services",
    description:
      "Explore our complete range of safety solutions: Invisible Grills, Mosquito Nets, Motorized Zip Screens, Bird Netting, and Construction Safety Nets in Mumbai & Navi Mumbai.",
    url: "https://www.modernet.in/services.html",
    images: [
      {
        url: "/img/service/service-hero.jpg",
        width: 1200,
        height: 630,
        alt: "ModerNet Protective Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ModerNet | Our Services",
    description:
      "Explore our complete range of safety solutions: Invisible Grills, Mosquito Nets, Motorized Zip Screens, Bird Netting, and Construction Safety Nets in Mumbai & Navi Mumbai.",
    images: ["/img/service/service-hero.jpg"],
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
