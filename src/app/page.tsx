"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Shield,
  CheckCircle2,
  Phone,
  ArrowRight,
  Eye,
  Flame,
  Award,
  Clock,
  Sparkles,
  MapPin,
  Star,
  ChevronRight,
  Wrench,
} from "lucide-react";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import CostCalculator from "@/components/CostCalculator";
import ContactForm from "@/components/ContactForm";
import InspectionModal from "@/components/InspectionModal";

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("Invisible Grill Installation");

  const openInspection = (serviceName = "Invisible Grill Installation") => {
    setSelectedService(serviceName);
    setModalOpen(true);
  };

  const services = [
    {
      title: "Invisible Grills",
      tag: "Modern Safety",
      desc: "Stainless steel SS316 nano-cables designed for high-rise safety with zero visual obstruction.",
      pills: ["SS 316 Grade", "Fire Safe", "600kg Tensile"],
      image: "/img/service/Invisible-Grill.jpg",
      href: "/services#detail-invisible-grills",
    },
    {
      title: "Mosquito Nets",
      tag: "Fresh Air",
      desc: "Neat, durable mesh solutions that keep dengue mosquitoes out while letting fresh breeze & light in.",
      pills: ["Custom Fit", "Easy Care", "Magnetic / Pleated"],
      image: "/img/service/mosqito-net.jpg",
      href: "/services#detail-mosquito-nets",
    },
    {
      title: "Motorized Mosquito Mesh (Zip Screen)",
      tag: "Smart Automation",
      desc: "Smooth, motorized zip screens for large balconies, verandas, and luxury patios with remote control.",
      pills: ["Remote Control", "Weather Ready", "Wind Resistant"],
      image: "/img/service/Motorized-Mosquito-Mesh.jpg",
      href: "/services#detail-zip-screen",
    },
    {
      title: "Anti-Bird & Pigeon Netting",
      tag: "Pigeon Protection",
      desc: "Transparent, heavy-duty UV stabilized netting to keep balconies, ducts, and windows spotless.",
      pills: ["UV Treated", "Zero Harm to Birds", "Transparent"],
      image: "/img/service/Bird-Nets-01.jpg",
      href: "/services#detail-bird-netting",
    },
    {
      title: "Construction Safety Nets",
      tag: "Site Safety",
      desc: "Heavy-duty certified fall protection and debris retention nets for residential and commercial worksites.",
      pills: ["ISI Standards", "Heavy Duty", "Certified"],
      image: "/img/service/Construction-Safety-Nets.jpg",
      href: "/services#detail-construction-nets",
    },
    {
      title: "Balcony & Window Safety",
      tag: "Child & Pet Safety",
      desc: "Engineered fall protection systems giving peace of mind for high-rise apartment families.",
      pills: ["Child Safe", "Pet Friendly", "Zero Gap"],
      image: "/img/service/Balcony-&-Window-Safety.jpg",
      href: "/services#detail-balcony-safety",
    },
  ];

  const advantages = [
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "SS 316 Marine Grade Cables",
      desc: "Built with genuine 316 stainless steel with transparent nylon coating. 100% rust-proof against coastal Mumbai humidity.",
    },
    {
      icon: <Eye className="w-8 h-8 text-primary" />,
      title: "Unobstructed Panoramic Views",
      desc: "Virtually invisible from 15 feet away. Enjoy breathtaking sea, skyline, or greenery views without iron bars feeling like a jail.",
    },
    {
      icon: <Flame className="w-8 h-8 text-primary" />,
      title: "Fire Evacuation Compliant",
      desc: "Unlike rigid iron grills that trap residents, invisible cables can be cut with a standard wire cutter in emergency fire rescues.",
    },
    {
      icon: <Wrench className="w-8 h-8 text-primary" />,
      title: "Neat & Dust-Free Installation",
      desc: "Our experienced in-house technicians ensure spotless, noise-minimized installation with precision laser alignment.",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Free Site Inspection",
      desc: "Our technical supervisor visits your site for laser measurements, assessing balcony layout & window frames.",
    },
    {
      step: "02",
      title: "Itemized Quotation",
      desc: "You get a transparent price quote with zero hidden charges and exact cable pitch recommendation (2 or 3 inches).",
    },
    {
      step: "03",
      title: "Certified Installation",
      desc: "Installation completed in 3 to 6 hours using Hilti fasteners and heavy-duty marine-grade aluminum tracks.",
    },
    {
      step: "04",
      title: "Handover & Warranty",
      desc: "Rigorous tension check, safety demonstration, and handover of your official 5-Year Warranty card.",
    },
  ];

  const reviews = [
    {
      name: "Sandeep Patil",
      location: "Palm Beach Road, Belapur",
      rating: 5,
      image: "/img/user/user-01.png",
      text: "We installed ModerNet invisible grills for our 18th-floor balcony facing the creek. The view remains completely open and my 4-year-old child can safely play. Excellent work by Mr. Atul and team!",
    },
    {
      name: "Pooja Deshmukh",
      location: "Hiranandani Gardens, Powai",
      rating: 5,
      image: "/img/user/user-02.png",
      text: "Pigeons had made our AC ledges and balcony impossible to use. ModerNet installed bird nets cleanly without drilling ugly holes. Very neat workmanship and reasonable pricing.",
    },
    {
      name: "Karan Mehta",
      location: "Kharghar Valley Shilp",
      rating: 5,
      image: "/img/user/user-03.png",
      text: "The motorized zip screen in our penthouse terrace is brilliant. Keeps mosquitoes away during evening tea and resists heavy monsoons. Highly recommended!",
    },
  ];

  return (
    <div className="space-y-20 pb-16">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center bg-slate-950 text-white overflow-hidden py-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/Birdnetting/Image-02.jpg"
            alt="Invisible Safety Grills"
            fill
            priority
            className="object-cover opacity-35 filter brightness-75 scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
          <div className="absolute inset-0 bg-radial-at-c from-primary/20 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider text-sky-300 uppercase shadow-lg animate-in fade-in slide-in-from-top-4 duration-700">
            <Sparkles className="w-3.5 h-3.5" /> Safety & Style Combined
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.1] text-white">
            Invisible Safety for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-primary-light to-blue-200">
              Modern Living
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-xl text-slate-300 font-light leading-relaxed">
            Secure your balcony and windows with premium invisible grills and bird netting. Designed for modern high-rises in Mumbai & Navi Mumbai.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => openInspection("Invisible Grill Installation")}
              className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-semibold text-base shadow-xl hover:shadow-primary/30 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Book Free Site Visit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="#services"
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>Explore Protective Solutions</span>
            </a>
          </div>

          {/* Quick highlight badges */}
          <div className="pt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto text-left">
            <div className="bg-slate-900/80 backdrop-blur-md border border-slate-800 p-3 rounded-xl flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-sky-500/10 text-sky-400 flex items-center justify-center shrink-0">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-white">SS 316 Grade</p>
                <p className="text-[11px] text-slate-400">100% Anti-Rust</p>
              </div>
            </div>

            <div className="bg-slate-900/80 backdrop-blur-md border border-slate-800 p-3 rounded-xl flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-white">600 KG Breaking</p>
                <p className="text-[11px] text-slate-400">High Tensile Wire</p>
              </div>
            </div>

            <div className="bg-slate-900/80 backdrop-blur-md border border-slate-800 p-3 rounded-xl flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-orange-500/10 text-orange-400 flex items-center justify-center shrink-0">
                <Flame className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-white">Fire Evacuation</p>
                <p className="text-[11px] text-slate-400">Emergency Friendly</p>
              </div>
            </div>

            <div className="bg-slate-900/80 backdrop-blur-md border border-slate-800 p-3 rounded-xl flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-white">5-Year Warranty</p>
                <p className="text-[11px] text-slate-400">Free Site Visit</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT US PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative h-[420px] sm:h-[480px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="/img/Birdnetting/Image-02.jpg"
                alt="Elegant balcony protection view"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">New</span>
                  <h4 className="font-bold text-slate-900 text-base">Modern Safety Partner</h4>
                  <p className="text-xs text-slate-500">Residential, Commercial & Construction</p>
                </div>
                <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center text-primary font-bold text-lg">
                  ★ 4.9
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold text-primary tracking-widest uppercase bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
              Modern Safety, Installed with Care
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              ModerNet Pvt. Ltd. is Mumbai & Navi Mumbai&apos;s trusted safety solution company offering complete protection for residential balconies, windows, high-rises, and construction projects. We provide high-quality installation of Invisible Grills, Mosquito Nets, Motorized Mosquito Mesh (Zip Screens), Bird Nets, and Construction Safety Nets.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Our core focus is on clean installation, branded materials, modern safety systems, and reliable after-sales service. We build long-term trust through professional execution and strict safety compliance.
            </p>

            {/* Directors Box */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Company Directors</p>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 mt-1 text-sm font-semibold text-slate-900">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-primary" /> Mr. Atul Adhav
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-primary" /> Mr. Satnam Singh Sagoo
                  </span>
                </div>
              </div>
              <Link
                href="/about"
                className="text-xs font-bold text-primary hover:text-primary-dark flex items-center gap-1 group"
              >
                Learn More About Us <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Key Deliverables */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="border-l-2 border-primary pl-4">
                <h4 className="font-bold text-slate-900 text-sm">What We Deliver</h4>
                <p className="text-xs text-slate-500 mt-1">Complete safety solutions with precise, mess-free installation.</p>
              </div>
              <div className="border-l-2 border-sky-400 pl-4">
                <h4 className="font-bold text-slate-900 text-sm">How We Build Trust</h4>
                <p className="text-xs text-slate-500 mt-1">Compliance-first work, branded materials, and dependable after-sales support.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. RECORDS / STATS */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 space-y-2">
              <span className="text-xs font-bold text-sky-400 uppercase tracking-widest">Built on Reliability</span>
              <h3 className="text-3xl font-extrabold text-white">Safety You Can Count On</h3>
              <p className="text-slate-400 text-sm">
                Modern systems, neat installation, and dependable service across the Mumbai metropolitan area.
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-slate-800/80 border border-slate-700/80 p-5 rounded-2xl text-center">
                <h4 className="text-2xl sm:text-3xl font-extrabold text-sky-400">Mumbai & Navi</h4>
                <p className="text-xs text-slate-300 mt-1">Service Coverage</p>
              </div>
              <div className="bg-slate-800/80 border border-slate-700/80 p-5 rounded-2xl text-center">
                <h4 className="text-2xl sm:text-3xl font-extrabold text-emerald-400">100%</h4>
                <p className="text-xs text-slate-300 mt-1">Safety Focused</p>
              </div>
              <div className="bg-slate-800/80 border border-slate-700/80 p-5 rounded-2xl text-center">
                <h4 className="text-2xl sm:text-3xl font-extrabold text-white">Residential</h4>
                <p className="text-xs text-slate-300 mt-1">Flats & Villas</p>
              </div>
              <div className="bg-slate-800/80 border border-slate-700/80 p-5 rounded-2xl text-center">
                <h4 className="text-2xl sm:text-3xl font-extrabold text-white">Commercial</h4>
                <p className="text-xs text-slate-300 mt-1">& Construction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PROTECTIVE SOLUTIONS (SERVICES) */}
      <section id="services" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
          <div>
            <span className="text-xs font-bold text-primary uppercase tracking-widest bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
              Our Protective Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
              Services Built for Modern Living
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-1">
              Tailored solutions for balconies, windows, staircases, and open spaces.
            </p>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary-dark group"
          >
            <span>View All Detailed Specs</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Image Container */}
              <div className="relative h-60 w-full overflow-hidden bg-slate-100">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-slate-900 text-xs font-bold px-3 py-1 rounded-full shadow">
                  {s.tag}
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white drop-shadow-md">{s.title}</h3>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                <p className="text-slate-600 text-sm leading-relaxed">{s.desc}</p>

                {/* Pills */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {s.pills.map((pill, pIdx) => (
                    <span
                      key={pIdx}
                      className="bg-slate-100 text-slate-700 text-xs px-2.5 py-1 rounded-md font-medium"
                    >
                      {pill}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={s.href}
                    className="text-xs font-bold text-slate-700 hover:text-primary flex items-center gap-1"
                  >
                    View Details <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                  <button
                    onClick={() => openInspection(s.title)}
                    className="bg-primary/10 hover:bg-primary text-primary hover:text-white px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer"
                  >
                    Book Site Visit
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. INTERACTIVE BEFORE / AFTER COMPARISON */}
      <section className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-center">
          <div>
            <span className="text-xs font-bold text-primary uppercase tracking-widest bg-white px-3 py-1 rounded-full border border-slate-200">
              Visual Transformation
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
              See The Dramatic Difference
            </h2>
            <p className="text-slate-600 text-sm max-w-xl mx-auto mt-2">
              Drag the interactive slider to compare an open balcony exposed to pigeons and fall hazards vs. the pristine view with ModerNet SS316 protection.
            </p>
          </div>

          <BeforeAfterSlider />
        </div>
      </section>

      {/* 6. ADVANTAGES / WHY CHOOSE MODERNET */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold text-primary uppercase tracking-widest bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
            Engineered For Excellence
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Why ModerNet Invisible Safety Grills?
          </h2>
          <p className="text-slate-600 text-sm">
            Traditional iron bars look like prison grates and rust easily. ModerNet gives you aerospace-grade SS316 strength with complete view clarity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((adv, aIdx) => (
            <div
              key={aIdx}
              className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 space-y-4"
            >
              <div className="p-3 bg-sky-50 rounded-2xl inline-block">{adv.icon}</div>
              <h3 className="font-bold text-slate-900 text-lg leading-snug">{adv.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{adv.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. INSTANT COST ESTIMATOR CALCULATOR */}
      <section id="quote-calculator" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CostCalculator />
      </section>

      {/* 8. INSTALLATION PROCESS (HOW IT WORKS) */}
      <section className="bg-slate-900 text-white py-16 rounded-3xl max-w-7xl mx-auto px-6 sm:px-12">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold text-sky-400 uppercase tracking-widest">
            Hassle-Free Experience
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Simple 4-Step Installation Process
          </h2>
          <p className="text-slate-400 text-sm">
            From your first call to the final safety check, we handle every detail with military precision.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {processSteps.map((step, sIdx) => (
            <div key={sIdx} className="space-y-3 relative">
              <div className="text-4xl font-black text-sky-400/40">{step.step}</div>
              <h3 className="text-lg font-bold text-white">{step.title}</h3>
              <p className="text-slate-400 text-xs leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 text-center">
          <button
            onClick={() => openInspection()}
            className="bg-primary hover:bg-primary-dark text-white px-8 py-3.5 rounded-full font-semibold text-sm shadow-lg transition-all cursor-pointer"
          >
            Start With Step 1: Book Free Site Measurement
          </button>
        </div>
      </section>

      {/* 9. REAL REVIEWS & TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold text-primary uppercase tracking-widest bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
            Real Customer Feedback
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            What Homeowners Across Mumbai Say
          </h2>
          <p className="text-slate-600 text-sm">
            Over 500+ happy families protected in Powai, Belapur, Vashi, Kharghar, Nerul, and Thane.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, rIdx) => (
            <div
              key={rIdx}
              className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex gap-1 text-amber-400">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-slate-700 text-sm leading-relaxed italic">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-slate-200 border-2 border-primary/20 shrink-0">
                  <Image src={rev.image} alt={rev.name} fill className="object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{rev.name}</h4>
                  <p className="text-xs text-slate-500">{rev.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 10. LEAD INQUIRY & CONTACT SECTION */}
      <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-sky-950 rounded-3xl overflow-hidden shadow-2xl p-8 sm:p-12 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Col Info */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold text-sky-400 uppercase tracking-widest bg-sky-950/80 px-3 py-1 rounded-full border border-sky-800">
                Book Free Inspection
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight">
                Ready to Protect Your Loved Ones?
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Schedule a zero-cost site visit today. Our safety engineer will measure your balcony/windows, present material wire samples, and provide an instant on-the-spot quotation.
              </p>

              <div className="space-y-4 pt-2 text-sm text-slate-300">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-sky-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Direct Helpline & WhatsApp:</p>
                    <a href="tel:+919700099235" className="text-white font-bold hover:text-sky-300 text-base">
                      +91 97000 99235
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-sky-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Navi Mumbai Head Office:</p>
                    <p className="text-xs text-slate-200">601, Pujit Plaza, Sector 11, Belapur, Navi Mumbai</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Col: Contact Form Card */}
            <div className="lg:col-span-7 bg-white text-slate-900 rounded-2xl p-6 sm:p-8 shadow-xl">
              <div className="mb-4">
                <h3 className="font-bold text-xl text-slate-900">Get Free Site Measurement</h3>
                <p className="text-xs text-slate-500">Fill this quick form and we will call you within 15 minutes.</p>
              </div>
              <ContactForm />
            </div>
          </div>
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
