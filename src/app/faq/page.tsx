"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Search, Phone } from "lucide-react";
import InspectionModal from "@/components/InspectionModal";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Invisible Grills: Are Invisible Grills safe?",
    answer: "Yes, made from SS316 cables with up to 600 kg strength.",
  },
  {
    question: "Invisible Grills: Do they rust?",
    answer: "No, they are anti-rust and weather-proof.",
  },
  {
    question: "Mosquito Nets: Can they be washed?",
    answer: "Yes, they are washable and low-maintenance.",
  },
  {
    question: "Motorized Mosquito Mesh (Zip Screen): What is a zip screen?",
    answer: "A motorized mosquito mesh system operated with remote/switch.",
  },
  {
    question: "Motorized Mosquito Mesh (Zip Screen): Is it wind-resistant?",
    answer: "Yes, side channels keep it stable.",
  },
  {
    question: "Construction Safety Nets: What is the use?",
    answer: "Protects workers and prevents falling debris.",
  },
  {
    question: "Bird Nets: Does it block air?",
    answer: "No, ventilation remains open.",
  },
  {
    question: "Is the bird netting visible from outside?",
    answer:
      "Our premium netting is designed to be discreet and blends with the building exterior while keeping balconies protected.",
  },
  {
    question: "How long does installation take?",
    answer:
      "Most residential balconies are completed within a few hours. Larger terraces or custom installations can take a full day.",
  },
  {
    question: "What material do you use for the invisible grill?",
    answer:
      "We use SS316 stainless steel cables with protective coatings for strength, durability, and weather resistance.",
  },
  {
    question: "Can the system be removed in an emergency?",
    answer:
      "Yes. The cables can be cut quickly in an emergency, unlike traditional iron grills.",
  },
  {
    question: "Do you provide maintenance or warranty?",
    answer:
      "We provide maintenance support and a service warranty depending on the project scope. Ask our team for exact coverage.",
  },
  {
    question: "Will installation damage my balcony?",
    answer:
      "No. We use clean, minimally invasive fixtures and ensure the area is left spotless after installation.",
  },
  {
    question: "Bird Nets: What mesh size do you use?",
    answer:
      "We use a fine mesh that blocks birds while keeping light and airflow comfortable.",
  },
];

export default function FAQPage() {
  const [openIndexes, setOpenIndexes] = useState<number[]>([0]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [modalOpen, setModalOpen] = useState(false);

  const toggleFAQ = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-white">
      {/* 1. HERO SECTION (matches uploaded_media_1790569410100.png) */}
      <section className="relative min-h-[65vh] sm:min-h-[72vh] flex items-center justify-center bg-slate-950 text-white overflow-hidden pt-28 pb-16">
        {/* Background Image: Image-14.jpg */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/Birdnetting/Image-14.jpg"
            alt="FAQ - Everything You Need to Know - ModerNet"
            fill
            priority
            className="object-cover object-center filter brightness-95"
          />
          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-black/65" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-200 text-[11px] sm:text-xs font-semibold tracking-wider uppercase mb-6 backdrop-blur-sm shadow-sm">
            FREQUENTLY ASKED QUESTIONS
          </span>

          {/* Heading in Playfair Serif */}
          <h1 className="font-playfair text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.12] text-white mb-6 drop-shadow-md">
            Everything You Need to<br />
            Know.
          </h1>

          {/* Subtitle */}
          <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-slate-100 font-normal leading-relaxed mb-8 drop-shadow">
            Clear answers about safety, installation timelines, and materials so you can choose confidently.
          </p>

          {/* Dual Action Buttons */}
          <div className="flex flex-row items-center justify-center gap-4 flex-wrap">
            <button
              onClick={() => setModalOpen(true)}
              className="bg-[#1d7caf] hover:bg-[#166088] text-white font-medium px-7 sm:px-8 py-3 sm:py-3.5 rounded-full text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
            >
              Ask a Question
            </button>
            <Link
              href="/services"
              className="border border-white/40 hover:border-white hover:bg-white/10 text-white font-medium px-7 sm:px-8 py-3 sm:py-3.5 rounded-full text-sm sm:text-base transition-all duration-200 transform hover:-translate-y-0.5 bg-black/25 backdrop-blur-sm shadow-md"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* 2. FAQ ACCORDION SECTION (matches .faq section) */}
      <section className="bg-slate-50/70 py-20 lg:py-28 border-t border-slate-200/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Header */}
          <div className="text-center space-y-3">
            <span className="text-[13px] font-semibold tracking-[0.18em] text-[#64748b] uppercase block">
              FAQ
            </span>
            <h2 className="font-playfair text-3xl sm:text-4xl lg:text-[42px] font-bold text-slate-900 leading-[1.18]">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-500 text-[15px] max-w-xl mx-auto leading-relaxed">
              Quick answers to the most common questions about our bird netting and invisible grill installations.
            </p>

            {/* Quick Search */}
            <div className="max-w-md mx-auto relative pt-4">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search questions (e.g., rust, safety, air, time)..."
                className="w-full bg-white border border-slate-200 rounded-full py-3 pl-11 pr-4 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1d7caf] shadow-sm"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-7.5 pointer-events-none" />
            </div>
          </div>

          {/* Accordion Cards */}
          <div className="space-y-3 pt-2">
            {filteredFaqs.map((faq, index) => {
              const isOpen = openIndexes.includes(index);
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden transition-all duration-200"
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 font-semibold text-slate-900 text-sm sm:text-base hover:text-[#1d7caf] transition-colors cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-[#1d7caf]" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-slate-600 text-sm leading-relaxed border-t border-slate-100">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. NEED MORE HELP? TALK TO A SAFETY EXPERT (matches .about section on faq.html) */}
      <section className="bg-[#fbf9f6] py-20 lg:py-28 border-t border-slate-200/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {/* Left Image Card */}
            <div className="lg:col-span-6 relative">
              <div className="relative bg-white p-3.5 rounded-[2rem] shadow-[0_1.5rem_3rem_rgba(15,23,42,0.08)] overflow-hidden aspect-square max-w-[480px] mx-auto border border-slate-100/80">
                <div className="relative w-full h-full rounded-[1.65rem] overflow-hidden">
                  <Image
                    src="/img/Birdnetting/Image-14.jpg"
                    alt="Bird netting on balcony - Safety solutions"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Bottom-left Badge */}
                <div className="absolute left-6 bottom-6 bg-white rounded-2xl px-5 py-3.5 shadow-[0_0.75rem_1.5rem_rgba(15,23,42,0.1)] z-10 border border-slate-50">
                  <span className="block text-2xl font-extrabold text-[#1d7caf] leading-none mb-1">
                    24/7
                  </span>
                  <span className="block text-[10px] font-bold tracking-[0.08em] text-slate-500 uppercase">
                    SUPPORT READY
                  </span>
                </div>

                {/* Bottom-right Decorative Glow */}
                <span
                  className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-[#dfe7e0] opacity-60 pointer-events-none z-0"
                  aria-hidden="true"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-6 space-y-5">
              <span className="text-[13px] font-semibold tracking-[0.18em] text-[#64748b] uppercase block">
                NEED MORE HELP?
              </span>

              <h2 className="font-playfair text-3xl sm:text-4xl lg:text-[42px] font-bold text-slate-900 leading-[1.18]">
                Talk to a Safety Expert
              </h2>

              <p className="text-slate-500 text-[15px] leading-relaxed">
                We will recommend the right solution for your balcony, windows, or site requirements. Book a free
                inspection or send us your questions.
              </p>

              {/* Highlights: Free Site Visit & Fast Response */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                <div>
                  <h3 className="text-xs font-bold tracking-[0.12em] text-[#1d7caf] uppercase mb-1.5">
                    FREE SITE VISIT
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Expert guidance, measurements, and a no-obligation quote.
                  </p>
                </div>

                <div>
                  <h3 className="text-xs font-bold tracking-[0.12em] text-[#1d7caf] uppercase mb-1.5">
                    FAST RESPONSE
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Dedicated local teams across Mumbai and Navi Mumbai.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-row items-center gap-4 flex-wrap">
                <button
                  onClick={() => setModalOpen(true)}
                  className="bg-[#1d7caf] hover:bg-[#166088] text-white font-medium px-7 sm:px-8 py-3.5 rounded-full text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
                >
                  Book Inspection
                </button>
                <a
                  href="tel:+919700099235"
                  className="border-2 border-[#1d7caf] text-[#1d7caf] hover:bg-[#1d7caf] hover:text-white font-medium px-7 sm:px-8 py-3 rounded-full text-sm sm:text-base transition-all duration-200 flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" /> Call Now
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Free Inspection / Inquiry Modal */}
      <InspectionModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultService="General Safety Consultation"
      />
    </div>
  );
}
