"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import InspectionModal from "@/components/InspectionModal";

export default function AboutPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="bg-white">
      {/* 1. HERO SECTION (matches .hero--inner with Image-05.jpg background) */}
      <section className="relative min-h-[65vh] sm:min-h-[70vh] flex items-center justify-center bg-slate-950 text-white overflow-hidden pt-28 pb-16">
        {/* Background Image: Image-05.jpg */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/Birdnetting/Image-05.jpg"
            alt="About ModerNet Balcony Safety"
            fill
            priority
            className="object-cover object-center filter brightness-90"
          />
          {/* Dark Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/45 to-black/65" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-200 text-[11px] sm:text-xs font-semibold tracking-wider uppercase mb-6 backdrop-blur-sm shadow-sm">
            ABOUT MODERNET
          </span>

          {/* Title */}
          <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.12] text-white mb-6 drop-shadow-md">
            Modern Safety, Installed with Care.
          </h1>

          {/* Subtitle */}
          <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-slate-100 font-normal leading-relaxed mb-8 drop-shadow">
            We deliver premium invisible grills and netting solutions with clean workmanship, reliable materials,
            and professional execution across Mumbai and Navi Mumbai.
          </p>

          {/* Hero Buttons */}
          <div className="flex flex-row items-center justify-center gap-4 flex-wrap">
            <button
              onClick={() => setModalOpen(true)}
              className="bg-[#1d7caf] hover:bg-[#166088] text-white font-medium px-7 sm:px-8 py-3 sm:py-3.5 rounded-full text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
            >
              Book Free Site Visit
            </button>
            <Link
              href="/services"
              className="border-2 border-[#1d7caf] hover:bg-[#1d7caf] text-white font-medium px-7 sm:px-8 py-3 sm:py-3.5 rounded-full text-sm sm:text-base transition-all duration-200 transform hover:-translate-y-0.5 bg-black/25 backdrop-blur-sm shadow-md"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* 2. ABOUT US SECTION (matches .about with warm background & Image-02.jpg card) */}
      <section id="about" className="bg-[#fbf9f6] py-20 lg:py-28 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {/* Left Column: Image Card */}
            <div className="lg:col-span-6 relative">
              <div className="relative bg-white p-3.5 rounded-[2rem] shadow-[0_1.5rem_3rem_rgba(15,23,42,0.08)] overflow-hidden aspect-square max-w-[480px] mx-auto border border-slate-100/80">
                <div className="relative w-full h-full rounded-[1.65rem] overflow-hidden">
                  <Image
                    src="/img/Birdnetting/Image-02.jpg"
                    alt="Elegant balcony protection view"
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
                WHO WE ARE
              </span>

              <h2 className="font-playfair text-3xl sm:text-4xl lg:text-[42px] font-bold text-slate-900 leading-[1.18]">
                Safety Solutions for Homes and Worksites
              </h2>

              <p className="text-slate-500 text-[15px] leading-relaxed">
                ModerNet Pvt. Ltd. provides complete safety solutions for residential, commercial and construction
                requirements. We specialize in Invisible Grills, Mosquito Nets, Motorized Mosquito Mesh (Zip
                Screens), Bird Nets and Construction Safety Nets.
              </p>

              <p className="text-slate-500 text-[15px] leading-relaxed">
                Our focus is on clean installation, branded materials, modern safety systems and dependable
                after-sales support. We aim to build long-term trust through professional execution and safety
                compliance.
              </p>

              {/* Company Directors */}
              <div className="pt-2">
                <h3 className="text-xs font-bold tracking-[0.12em] text-[#1d7caf] uppercase mb-2">
                  COMPANY DIRECTORS
                </h3>
                <div className="grid grid-cols-2 gap-4 text-sm font-medium text-slate-700">
                  <div>Mr. Atul Adhav</div>
                  <div>Mr. Satnam Singh Sagoo</div>
                </div>
              </div>

              {/* Highlights: Our Promise & Our Coverage */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                <div>
                  <h3 className="text-xs font-bold tracking-[0.12em] text-[#1d7caf] uppercase mb-1.5">
                    OUR PROMISE
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Transparent pricing, precise measurements, and neat finishing for every project.
                  </p>
                </div>

                <div>
                  <h3 className="text-xs font-bold tracking-[0.12em] text-[#1d7caf] uppercase mb-1.5">
                    OUR COVERAGE
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Dedicated installation teams across Mumbai and Navi Mumbai for fast response times.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. RECORDS SECTION (matches .records with cool background, 4 stat cards & Contact CTA) */}
      <section className="bg-[#eef4fb] py-16 lg:py-24 border-t border-slate-200/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Intro */}
            <div className="lg:col-span-4 space-y-2">
              <span className="text-xs font-bold text-[#1d7caf] uppercase tracking-widest block">
                BUILT ON RELIABILITY
              </span>
              <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
                Safety You Can Count On
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed">
                Modern systems, neat installation, and dependable service.
              </p>
            </div>

            {/* Right 4-Card Grid */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/60 text-center flex flex-col items-center justify-center hover:shadow-md transition-shadow">
                <h3 className="text-xl sm:text-2xl font-bold text-[#1d7caf] leading-snug">
                  Mumbai &amp; Navi Mumbai
                </h3>
                <p className="text-xs text-slate-500 mt-1 font-medium">Service Coverage</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/60 text-center flex flex-col items-center justify-center hover:shadow-md transition-shadow">
                <h3 className="text-2xl font-bold text-[#1d7caf]">Residential</h3>
                <p className="text-xs text-slate-500 mt-1 font-medium">Safety Solutions</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/60 text-center flex flex-col items-center justify-center hover:shadow-md transition-shadow">
                <h3 className="text-2xl font-bold text-[#1d7caf]">Commercial</h3>
                <p className="text-xs text-slate-500 mt-1 font-medium">Safety Solutions</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/60 text-center flex flex-col items-center justify-center hover:shadow-md transition-shadow">
                <h3 className="text-2xl font-bold text-[#1d7caf]">100%</h3>
                <p className="text-xs text-slate-500 mt-1 font-medium">Safety Focused</p>
              </div>
            </div>

          </div>

          {/* Bottom Contact Us CTA */}
          <div className="text-center pt-4">
            <Link
              href="/contact"
              className="inline-block bg-[#1d7caf] hover:bg-[#166088] text-white font-medium px-8 py-3.5 rounded-full text-sm sm:text-base shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Free Site Visit Modal */}
      <InspectionModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultService="Invisible Grill Installation"
      />
    </div>
  );
}
