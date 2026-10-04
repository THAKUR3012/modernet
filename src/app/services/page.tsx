"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Shield,
  CheckCircle2,
  Clock,
  Wrench,
  Layers,
  Phone,
  FileCheck,
} from "lucide-react";
import InspectionModal from "@/components/InspectionModal";

export default function ServicesPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("Invisible Grill Installation");

  const openInspection = (service: string) => {
    setSelectedService(service);
    setModalOpen(true);
  };

  const detailedServices = [
    {
      id: "detail-invisible-grills",
      title: "Invisible Grills",
      subtitle: "High-Rise Safety Without Blocking Views",
      image: "/img/service/Invisible-Grill.jpg",
      badge: "Flagship Safety Solution",
      useCase: "Balconies, windows, French doors, open terraces, staircases.",
      installTime: "3 to 6 hours for standard balcony layouts.",
      maintenance: "Simple wipe-down with damp cloth. Never requires painting or anti-rust coating.",
      specs: "Marine Grade SS 316 stainless steel nano-cables (2.5mm / 3.0mm) encased in transparent protective membrane. Up to 600 KG breaking strength per cable.",
      benefits: [
        "Unobstructed panoramic sea and skyline views",
        "100% rust-proof & coastal weather resistant",
        "Child & pet anti-fall safety with zero compromise",
        "Compliant with fire safety evacuation standards (can be cut with wire cutters in emergencies)",
        "Premium Hilti anchoring with powder-coated aluminum tracks",
        "Backed by our official 3 Years Free Repairing Service Guarantee",
      ],
    },
    {
      id: "detail-mosquito-nets",
      title: "Mosquito Nets & Screens",
      subtitle: "Fresh Air In, Dengue & Insects Out",
      image: "/img/service/mosqito-net.jpg",
      badge: "Health & Comfort",
      useCase: "Bedroom windows, sliding balcony doors, ventilation louvers.",
      installTime: "2 to 4 hours per apartment.",
      maintenance: "Detachable & washable mesh. Easy to vacuum or rinse with water.",
      specs: "High-grade fiberglass & stainless steel pleated mesh housed in sleek aluminum frames color-matched to your existing window powder-coating.",
      benefits: [
        "Smooth sliding pleated and magnetic snap designs",
        "Keeps dengue, malaria mosquitoes and bugs out",
        "Maintains natural daylight and airflow",
        "Durable UV-resistant mesh will not sag or tear",
        "Custom fitted to any window size and slider track",
      ],
    },
    {
      id: "detail-zip-screen",
      title: "Motorized Mosquito Mesh (Zip Screen)",
      subtitle: "Smart Automation for Luxury Balconies & Verandas",
      image: "/img/service/Motorized-Mosquito-Mesh.jpg",
      badge: "Premium Automation",
      useCase: "Large balcony openings, penthouses, patio verandas, outdoor dining zones.",
      installTime: "4 to 8 hours including motor calibration and wiring.",
      maintenance: "Self-cleaning brush track mechanism with low maintenance motor.",
      specs: "Heavy-duty side tracks with zip-locking guide technology that prevents mesh blowout under high winds. High torque Somfy/Dooya smart tubular motors.",
      benefits: [
        "One-touch remote control & smart home integration",
        "Withstands strong monsoon coastal winds without slipping out of tracks",
        "Blocks 80% solar heat and glare while keeping insects out",
        "Sleek architectural cassette enclosure",
        "Available in manual gear or whisper-quiet motorized options",
      ],
    },
    {
      id: "detail-bird-netting",
      title: "All Bird Net Service & Pigeon Netting",
      subtitle: "Nylon Net Long Time Life — Balconies, Windows & Ducts",
      image: "/img/service/Bird-Nets-01.jpg",
      badge: "Nylon Net Long Time Life",
      useCase: "Balconies, windows, AC compressor ledges, building shafts, ducts, industrial sheds.",
      installTime: "2 to 4 hours for residential balconies.",
      maintenance: "Zero maintenance. Does not absorb water or trap dust.",
      specs: "UV-stabilized virgin Nylon netting with long-time life. Mesh size 25mm to 50mm, knotted construction with 30-40 kg breaking load per mesh.",
      benefits: [
        "All Bird Net Service for windows, balconies, ducts, and shafts",
        "Nylon Net Long Time Life — superior weather & UV endurance",
        "Free Repairing Service For 3 Years on all installations",
        "100% safe and humane — prevents pigeons without hurting them",
        "Completely transparent against the sky — invisible from distance",
        "Stops pigeon droppings, foul odor, and respiratory health hazards",
        "Neat wire-rope perimeter tensioning with stainless steel hooks",
      ],
    },
    {
      id: "detail-construction-nets",
      title: "Construction Safety Nets",
      subtitle: "Certified Fall Protection & Debris Retention",
      image: "/img/service/Construction-Safety-Nets.jpg",
      badge: "Site Compliance",
      useCase: "High-rise construction sites, facade painting, civil works, scaffolding.",
      installTime: "Custom site scheduled based on floor stages.",
      maintenance: "Periodic safety supervisor audit and tension checks.",
      specs: "High tenacity polypropylene (PP) / Nylon rope nets conforming to IS 5175 standards. Dual layer mesh with inner debris containment lining.",
      benefits: [
        "High impact absorption to prevent worker fall fatalities",
        "Catches falling debris, tools, and brick fragments",
        "Complies with municipal and OSHA site safety mandates",
        "Heavy-duty border ropes and tested load-bearing anchor points",
        "Available for large scale builder supply and contract installation",
      ],
    },
    {
      id: "detail-balcony-safety",
      title: "Balcony & Window Safety Solutions",
      subtitle: "Engineered Peace of Mind for Families with Kids & Pets",
      image: "/img/service/Balcony-&-Window-Safety.jpg",
      badge: "Child & Pet Security",
      useCase: "High floor apartments, school classrooms, daycare centers.",
      installTime: "3 to 5 hours.",
      maintenance: "No maintenance required.",
      specs: "Tight 2-inch wire gap spacing using anti-cut SS316 cables preventing toddlers and pets from slipping through.",
      benefits: [
        "Prevents accidental falls of children and curious pets",
        "Prevents toys, bottles, and mobile phones from falling onto the street below",
        "Eliminates the claustrophobic feel of bulky iron grilles",
        "Allows unrestricted ventilation for cooling your home naturally",
      ],
    },
  ];

  return (
    <div className="space-y-20 pb-20">
      {/* 1. Services Hero Header (matches uploaded_media_1790567570555.png) */}
      <section className="relative min-h-[65vh] sm:min-h-[72vh] flex items-center justify-center bg-slate-950 text-white overflow-hidden pt-28 pb-16">
        {/* Background Image: service-hero.jpg */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/service/service-hero.jpg"
            alt="Services Built for Modern Living - ModerNet Invisible Grills and Netting"
            fill
            priority
            className="object-cover object-center filter brightness-95"
          />
          {/* Subtle Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-black/65" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-200 text-[11px] sm:text-xs font-semibold tracking-wider uppercase mb-6 backdrop-blur-sm shadow-sm">
            PROTECTIVE SOLUTIONS
          </span>

          {/* Heading in Playfair Serif */}
          <h1 className="font-playfair text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.12] text-white mb-6 drop-shadow-md">
            Services Built for Modern<br />
            Living.
          </h1>

          {/* Subtitle */}
          <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-slate-100 font-normal leading-relaxed mb-8 drop-shadow">
            Premium materials, precision measurement, and spotless installation for every balcony, window, and open space.
          </p>

          {/* Dual Action Buttons */}
          <div className="flex flex-row items-center justify-center gap-4 flex-wrap">
            <button
              onClick={() => openInspection("All Protective Solutions")}
              className="bg-[#1d7caf] hover:bg-[#166088] text-white font-medium px-7 sm:px-8 py-3 sm:py-3.5 rounded-full text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
            >
              Get Free Inspection
            </button>
            <Link
              href="/faq"
              className="border border-white/40 hover:border-white hover:bg-white/10 text-white font-medium px-7 sm:px-8 py-3 sm:py-3.5 rounded-full text-sm sm:text-base transition-all duration-200 transform hover:-translate-y-0.5 bg-black/25 backdrop-blur-sm shadow-md"
            >
              View FAQs
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Detailed Service Sections */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-primary uppercase tracking-widest bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
            Service Details
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900">
            Clear, Practical Information to Help You Choose
          </h2>
          <p className="text-slate-600 text-sm">
            Explore specifications, recommended use cases, installation timelines, and benefits for each system.
          </p>
        </div>

        <div className="space-y-16">
          {detailedServices.map((service, index) => {
            const isReversed = index % 2 !== 0;
            return (
              <div
                key={service.id}
                id={service.id}
                className="bg-white rounded-3xl border border-slate-200 shadow-md overflow-hidden scroll-mt-28"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 ${isReversed ? "lg:flex-row-reverse" : ""}`}>
                  
                  {/* Image Column */}
                  <div className={`lg:col-span-5 relative min-h-[300px] lg:min-h-full ${isReversed ? "lg:order-2" : "lg:order-1"}`}>
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md text-sky-300 text-xs font-bold px-3 py-1 rounded-full border border-slate-700">
                      {service.badge}
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className={`lg:col-span-7 p-6 sm:p-10 space-y-6 ${isReversed ? "lg:order-1" : "lg:order-2"}`}>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">{service.title}</h3>
                      <p className="text-primary font-semibold text-sm mt-1">{service.subtitle}</p>
                    </div>

                    {/* Quick Specs Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs">
                      <div>
                        <strong className="text-slate-800 flex items-center gap-1.5 mb-1">
                          <Layers className="w-3.5 h-3.5 text-primary" /> Recommended Use
                        </strong>
                        <p className="text-slate-600">{service.useCase}</p>
                      </div>
                      <div>
                        <strong className="text-slate-800 flex items-center gap-1.5 mb-1">
                          <Clock className="w-3.5 h-3.5 text-primary" /> Installation Time
                        </strong>
                        <p className="text-slate-600">{service.installTime}</p>
                      </div>
                      <div>
                        <strong className="text-slate-800 flex items-center gap-1.5 mb-1">
                          <Wrench className="w-3.5 h-3.5 text-primary" /> Maintenance
                        </strong>
                        <p className="text-slate-600">{service.maintenance}</p>
                      </div>
                      <div>
                        <strong className="text-slate-800 flex items-center gap-1.5 mb-1">
                          <FileCheck className="w-3.5 h-3.5 text-primary" /> Material & Specs
                        </strong>
                        <p className="text-slate-600">{service.specs}</p>
                      </div>
                    </div>

                    {/* Key Benefits List */}
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm mb-3">Key Advantages:</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                        {service.benefits.map((b, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Bar */}
                    <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                      <button
                        onClick={() => openInspection(service.title)}
                        className="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-full text-xs font-semibold shadow-sm transition-all cursor-pointer flex items-center gap-2"
                      >
                        <Shield className="w-3.5 h-3.5" />
                        <span>Book Site Visit for {service.title}</span>
                      </button>

                      <a
                        href="tel:+919082754119"
                        className="text-xs font-semibold text-slate-700 hover:text-primary flex items-center gap-1.5"
                      >
                        <Phone className="w-3.5 h-3.5 text-primary" /> Call Mr. Krishna: +91 9082754119
                      </a>
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Inspection Modal */}
      <InspectionModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultService={selectedService}
      />
    </div>
  );
}
