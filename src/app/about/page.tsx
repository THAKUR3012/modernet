"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Shield, MapPin, Phone, Target, HeartHandshake } from "lucide-react";
import InspectionModal from "@/components/InspectionModal";

export default function AboutPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="space-y-20 pb-20">
      {/* 1. Page Header */}
      <section className="bg-slate-950 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/Birdnetting/Image-14.jpg"
            alt="About ModerNet"
            fill
            className="object-cover opacity-20 filter brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-400 bg-sky-950/80 px-4 py-1.5 rounded-full border border-sky-800">
            About ModerNet
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white">
            Modern Safety, Installed with Care
          </h1>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-300 font-light">
            We deliver premium invisible grills and netting solutions with clean workmanship, reliable materials, and professional execution across Mumbai and Navi Mumbai.
          </p>
          <div className="pt-4 flex justify-center gap-4">
            <button
              onClick={() => setModalOpen(true)}
              className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-full text-sm font-semibold transition-all shadow-md cursor-pointer"
            >
              Book Free Site Visit
            </button>
            <Link
              href="/services"
              className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-full text-sm font-semibold border border-white/20 transition-all"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Who We Are */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold text-primary uppercase tracking-widest bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
              Who We Are
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
              Safety Solutions for Homes & Worksites
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              ModerNet Pvt. Ltd. provides complete safety solutions for residential, commercial and construction requirements. We specialize in Invisible Grills, Mosquito Nets, Motorized Mosquito Mesh (Zip Screens), Bird Nets, and Construction Safety Nets.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Our focus is on clean installation, branded materials, modern safety systems, and dependable after-sales support. We aim to build long-term trust through professional execution, strict safety compliance, and certified quality checks.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                <div className="flex items-center gap-2 text-primary font-bold text-sm mb-1">
                  <Target className="w-4 h-4" /> Our Mission
                </div>
                <p className="text-xs text-slate-500">
                  To safeguard modern high-rise families and buildings without compromising architectural aesthetics or sunlight.
                </p>
              </div>

              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                <div className="flex items-center gap-2 text-primary font-bold text-sm mb-1">
                  <HeartHandshake className="w-4 h-4" /> Our Values
                </div>
                <p className="text-xs text-slate-500">
                  Uncompromised SS316 steel materials, dust-free installation, transparent pricing, and 5-year warranty backing.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative h-[420px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="/img/Birdnetting/Image-12.jpg"
                alt="Balcony safety installation"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Leadership & Directors */}
      <section className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold text-primary uppercase tracking-widest bg-white px-3 py-1 rounded-full border border-slate-200">
              Leadership
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Meet Our Company Directors
            </h2>
            <p className="text-slate-600 text-sm">
              Hands-on leadership dedicated to safety innovation, engineering excellence, and customer trust.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Director 1 */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-md hover:shadow-xl transition-shadow flex flex-col sm:flex-row items-center gap-6">
              <div className="relative w-32 h-32 rounded-2xl overflow-hidden bg-slate-100 shrink-0 border-2 border-primary/20">
                <Image
                  src="/img/user/owner-01.png"
                  alt="Mr. Atul Adhav"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-center sm:text-left space-y-2">
                <span className="text-xs font-bold text-primary bg-sky-50 px-2.5 py-0.5 rounded-full border border-sky-100">
                  Director & Operations Head
                </span>
                <h3 className="text-xl font-bold text-slate-900">Mr. Atul Adhav</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Leading on-site quality control, safety compliance, and custom engineering solutions for high-rises and commercial projects.
                </p>
                <div className="pt-2">
                  <a
                    href="tel:+919700099235"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
                  >
                    <Phone className="w-3.5 h-3.5" /> +91 97000 99235
                  </a>
                </div>
              </div>
            </div>

            {/* Director 2 */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-md hover:shadow-xl transition-shadow flex flex-col sm:flex-row items-center gap-6">
              <div className="relative w-32 h-32 rounded-2xl overflow-hidden bg-slate-100 shrink-0 border-2 border-primary/20">
                <Image
                  src="/img/user/owner-02.png"
                  alt="Mr. Satnam Singh Sagoo"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-center sm:text-left space-y-2">
                <span className="text-xs font-bold text-primary bg-sky-50 px-2.5 py-0.5 rounded-full border border-sky-100">
                  Director & Business Relations
                </span>
                <h3 className="text-xl font-bold text-slate-900">Mr. Satnam Singh Sagoo</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Overseeing technical collaborations, client relationships, partner tie-ups, and expanding safety coverage across Maharashtra.
                </p>
                <div className="pt-2">
                  <span className="text-xs text-slate-500 font-medium">
                    Corporate & Builder Partnerships
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Infrastructure & Facility */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-primary uppercase tracking-widest bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
            Our Infrastructure
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900">
            Head Office & Manufacturing Facilities
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-12 h-12 bg-sky-50 rounded-2xl flex items-center justify-center text-primary mb-2">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Belapur Corporate Office</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              601, Pujit Plaza, Plot No. 67, Sector 11, Opposite K Star Hotel, Belapur, Navi Mumbai, Maharashtra 400614.
            </p>
            <p className="text-xs text-slate-500 pt-2">
              Client consultations, material sample studio, and project planning.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-2">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Mahape Manufacturing & Fabrication Unit</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              PAP-A254/255, MIDC Industrial Area, Mahape, Navi Mumbai, Maharashtra 400710.
            </p>
            <p className="text-xs text-slate-500 pt-2">
              State-of-the-art cable tension calibration, track fabrication, and warehouse.
            </p>
          </div>
        </div>
      </section>

      {/* 5. CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-primary-dark via-primary to-sky-600 rounded-3xl p-8 sm:p-12 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold">Ready for a Free Consultation?</h3>
            <p className="text-sky-100 text-sm max-w-lg">
              Our safety supervisors are on the road every day across Mumbai & Navi Mumbai. Book a visit today.
            </p>
          </div>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-3.5 rounded-full font-bold text-sm shadow-md transition-all shrink-0 cursor-pointer"
          >
            Book Free Site Visit
          </button>
        </div>
      </section>

      <InspectionModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
