"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Shield,
  Phone,
  ArrowRight,
  Eye,
  Flame,
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
      title: "Handover & 3-Yr Warranty",
      desc: "Rigorous tension check, safety demonstration, and handover of your official 3-Year Free Repairing Service Warranty card.",
    },
  ];

  const reviews = [
    {
      name: "Sandeep Patil",
      location: "Thakur Complex, Kandivali East",
      rating: 5,
      image: "/img/user/user-01.png",
      text: "We installed Shri Krishna invisible grills for our balcony. The view remains completely unobstructed and our child can safely play. Excellent workmanship by Mr. Krishna and team!",
    },
    {
      name: "Pooja Deshmukh",
      location: "Evershine Nagar, Malad West",
      rating: 5,
      image: "/img/user/user-02.png",
      text: "Pigeons had made our AC ledges and balcony impossible to use. Mr. Krishna installed durable nylon bird nets cleanly with 3 years free repairing service. Very neat work and reasonable pricing.",
    },
    {
      name: "Karan Mehta",
      location: "Lokhandwala, Andheri West",
      rating: 5,
      image: "/img/user/user-03.png",
      text: "Prompt service, high quality SS316 marine-grade cables, and genuine 3-year warranty provided upon installation. Highly recommended for bird netting and invisible grills in Mumbai!",
    },
  ];

  return (
    <div className="space-y-20 pb-16">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center bg-slate-950 text-white overflow-hidden pt-20 pb-12">
        {/* Background Image: Image-07.jpg */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/Image-07.jpg"
            alt="Invisible Safety Grills and Balcony Protection"
            fill
            priority
            className="object-cover object-center filter brightness-90"
          />
          {/* Subtle Dark Vignette & Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/40 to-black/65" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-12 sm:mt-8">
          {/* Badge */}
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-200 text-[11px] sm:text-xs font-semibold tracking-wider uppercase mb-6 backdrop-blur-sm shadow-sm">
            SAFETY & STYLE COMBINED
          </span>

          {/* Heading in Playfair Serif */}
          <h1 className="font-playfair text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.15] text-white mb-6 drop-shadow-md">
            Invisible Safety for<br />
            Modern Living
          </h1>

          {/* Subtitle */}
          <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-slate-100 font-normal leading-relaxed mb-8 drop-shadow">
            Secure your balcony and windows with premium invisible grills and bird netting.<br className="hidden sm:inline" />
            Designed for modern homes in Mumbai & Navi Mumbai.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-row items-center justify-center gap-4 flex-wrap">
            <button
              onClick={() => openInspection("Invisible Grill Installation")}
              className="bg-[#1d7caf] hover:bg-[#166088] text-white font-medium px-7 sm:px-8 py-3 sm:py-3.5 rounded-full text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
            >
              Book Free Site Visit
            </button>
            <a
              href="#services"
              className="border-2 border-[#1d7caf] hover:bg-[#1d7caf] text-white font-medium px-7 sm:px-8 py-3 sm:py-3.5 rounded-full text-sm sm:text-base transition-all duration-200 transform hover:-translate-y-0.5 bg-black/25 backdrop-blur-sm shadow-md"
            >
              Explore Solutions
            </a>
          </div>
        </div>
      </section>

      {/* 2. ABOUT US SECTION */}
      <section id="about" className="bg-[#fcfbfa] py-20 lg:py-28 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {/* Left Column: Image Card */}
            <div className="lg:col-span-6 relative">
              <div className="relative bg-white p-3.5 rounded-[2rem] shadow-[0_1.5rem_3rem_rgba(15,23,42,0.08)] overflow-hidden aspect-square max-w-[480px] mx-auto border border-slate-100/80">
                <div className="relative w-full h-full rounded-[1.65rem] overflow-hidden">
                  <Image
                    src="/img/Birdnetting/Image-02.jpg"
                    alt="Modern Safety, Installed with Care"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Bottom-left Badge */}
                <div className="absolute left-6 bottom-6 bg-white rounded-2xl px-5 py-3.5 shadow-[0_0.75rem_1.5rem_rgba(15,23,42,0.1)] z-10 border border-slate-50">
                  <span className="block text-2xl font-extrabold text-[#1d7caf] leading-none mb-1">
                    New
                  </span>
                  <span className="block text-[10px] font-bold tracking-[0.08em] text-slate-500 uppercase">
                    MODERN SAFETY PARTNER
                  </span>
                </div>

                {/* Bottom-right Decorative Glow */}
                <span
                  className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-[#dfe7e0] opacity-60 pointer-events-none z-0"
                  aria-hidden="true"
                />
              </div>
            </div>

            {/* Right Column: Content */}
            <div className="lg:col-span-6 space-y-5">
              <span className="text-[13px] font-semibold tracking-[0.18em] text-[#64748b] uppercase block">
                ABOUT US
              </span>

              <h2 className="font-playfair text-3xl sm:text-4xl lg:text-[42px] font-bold text-slate-900 leading-[1.18]">
                Modern Safety, Installed with<br className="hidden sm:inline" /> Care
              </h2>

              <p className="text-slate-500 text-[15px] leading-relaxed">
                Shri Krishna Invisible Grill &amp; Bird Net Company (ModerNet) is a premier provider of residential and commercial safety systems across Mumbai and Navi Mumbai. We specialize in SS316 Invisible Grills, All Bird Net Services, Nylon Net with Long Time Life, Mosquito Nets, and Heavy-duty Safety Nets.
              </p>

              <p className="text-slate-500 text-[15px] leading-relaxed">
                Backed by our official <strong>3-Year Free Repairing Service Guarantee</strong>, our team led by Mr. Krishna delivers clean, laser-aligned installation, branded marine-grade materials, and dependable long-term protection.
              </p>

              {/* Company Leadership & Contact */}
              <div className="pt-2">
                <h3 className="text-xs font-bold tracking-[0.12em] text-[#1d7caf] uppercase mb-2">
                  LEADERSHIP &amp; OPERATIONS
                </h3>
                <div className="bg-sky-50 border border-sky-100 p-3 rounded-xl max-w-md">
                  <span className="text-sm font-bold text-sky-900 block">Mr. Krishna</span>
                  <span className="text-xs text-slate-600">Proprietor &amp; Lead Specialist • Shri Krishna Invisible Grill &amp; Bird Net Company</span>
                </div>
              </div>

              {/* Highlights: What We Deliver & 3 Years Free Repairing */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                <div>
                  <h3 className="text-xs font-bold tracking-[0.12em] text-[#1d7caf] uppercase mb-1.5">
                    3 YEARS FREE REPAIRING
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Zero-cost repairing and maintenance support for 3 full years on our installations.
                  </p>
                </div>

                <div>
                  <h3 className="text-xs font-bold tracking-[0.12em] text-[#1d7caf] uppercase mb-1.5">
                    NYLON NET LONG TIME LIFE
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    High-density UV-stabilized nylon netting engineered for extended lifespan.
                  </p>
                </div>
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

      {/* 5. BEFORE & AFTER GALLERY (SEEING IS BELIEVING) */}
      <section id="gallery" className="relative bg-[#1c382f] py-16 sm:py-24 overflow-hidden">
        <BeforeAfterSlider />
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
            Over 500+ happy families protected across Kandivali, Borivali, Malad, Goregaon, Andheri, Powai, Thane, and Mumbai.
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
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-5 h-5 text-sky-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Mr. Krishna (Direct &amp; WhatsApp):</p>
                    <div className="flex flex-wrap items-center gap-3">
                      <a href="tel:+919082754119" className="text-white font-bold hover:text-sky-300 text-base">
                        +91 9082754119
                      </a>
                      <span className="text-slate-500">|</span>
                      <a href="tel:+918692873408" className="text-white font-bold hover:text-sky-300 text-base">
                        +91 8692873408
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5 text-sky-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Office &amp; Workshop:</p>
                    <p className="text-xs text-slate-200">
                      Jai Ambika Bhawani Society, Hanuman Nagar, Akurli Road, Kandivali East, Mumbai - 400101
                    </p>
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
