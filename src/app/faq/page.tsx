"use client";

import React, { useState } from "react";
import {
  HelpCircle,
  ChevronDown,
  Search,
  Phone,
} from "lucide-react";
import InspectionModal from "@/components/InspectionModal";

interface FAQItem {
  question: string;
  answer: string;
  category: "Invisible Grills" | "Bird Nets" | "Mosquito Nets" | "General & Installation";
}

const faqs: FAQItem[] = [
  {
    category: "Invisible Grills",
    question: "Are Invisible Grills safe for high-rise balconies with children?",
    answer:
      "Yes, absolutely. ModerNet invisible grills are crafted with high-tensile SS316 marine-grade stainless steel cables capable of withstanding up to 600 kg of breaking force per wire. The standard wire pitch (2 to 3 inches) prevents children, pets, or objects from slipping through.",
  },
  {
    category: "Invisible Grills",
    question: "Do invisible grills rust in Mumbai's humid coastal climate?",
    answer:
      "No. We use genuine Marine Grade SS316 stainless steel with a protective transparent nylon / Teflon coating. Unlike iron grills or cheap SS202/SS304 grades, SS316 is impervious to salt spray, rain, and humidity.",
  },
  {
    category: "Invisible Grills",
    question: "Can invisible grills be cut in a fire emergency?",
    answer:
      "Yes. This is a crucial safety advantage over traditional iron bars. Traditional iron grills can trap residents during apartment fires. In contrast, ModerNet invisible cables can be easily snipped with a wire cutter by firefighters or residents in an emergency.",
  },
  {
    category: "Invisible Grills",
    question: "What maintenance do invisible grills require?",
    answer:
      "They are practically zero maintenance. Simply wipe them down with a damp cloth once every few months to remove surface dust. They never require repainting, sanding, or anti-rust primer.",
  },
  {
    category: "Bird Nets",
    question: "Is the bird netting visible from the outside or ground level?",
    answer:
      "Our premium netting uses ultra-fine, UV-stabilized translucent polymer filaments. From a distance of 10-15 feet or from the ground, the net is virtually imperceptible against the sky, preserving your building's architectural elegance.",
  },
  {
    category: "Bird Nets",
    question: "Does bird netting block ventilation, wind, or daylight?",
    answer:
      "Not at all. The mesh opening (typically 25mm to 35mm) allows 98% unrestricted natural breeze and natural sunlight while effectively barring pigeons and sparrows from entering.",
  },
  {
    category: "Bird Nets",
    question: "Does the bird netting hurt or trap birds?",
    answer:
      "No. ModerNet netting is 100% humane. The tight mesh prevents birds from getting entangled or injured; it simply acts as an impenetrable barrier so pigeons cannot nest on your balcony or AC ledges.",
  },
  {
    category: "Mosquito Nets",
    question: "Can mosquito nets be easily removed and washed?",
    answer:
      "Yes. Our pleated and magnetic screen solutions are engineered for convenient cleaning. You can easily wipe them down or detach and rinse them with lukewarm water.",
  },
  {
    category: "Mosquito Nets",
    question: "What is a motorized mosquito mesh (Zip Screen)?",
    answer:
      "A Zip Screen is an automated heavy-duty insect and weather shield. The fabric edges are locked securely inside side aluminum tracks with a zipper mechanism, preventing the mesh from blowing out even during severe Mumbai monsoon gusts. It is operated with a remote control or wall switch.",
  },
  {
    category: "General & Installation",
    question: "How long does a typical installation take?",
    answer:
      "Most standard residential balconies (up to 15-20 feet) are completely installed within 3 to 5 hours. Our team brings vacuum systems and drop cloths to ensure zero mess.",
  },
  {
    category: "General & Installation",
    question: "Will installation damage my balcony walls or tiles?",
    answer:
      "No. We use specialized masonry drill bits and Hilti high-performance anchors. The mounting tracks are sleekly aligned along the periphery beam/slab, leaving your tiles and wall finish intact.",
  },
  {
    category: "General & Installation",
    question: "Do you provide a warranty?",
    answer:
      "Yes, we provide up to 5 Years Official Manufacturer & Installation Warranty covering wire tension integrity and anti-rust performance.",
  },
];

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [modalOpen, setModalOpen] = useState(false);

  const categories = ["All", "Invisible Grills", "Bird Nets", "Mosquito Nets", "General & Installation"];

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory = selectedCategory === "All" || faq.category === selectedCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-16 pb-20">
      {/* 1. Header */}
      <section className="bg-slate-950 text-white py-20 text-center relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-400 bg-sky-950/80 px-4 py-1.5 rounded-full border border-sky-800">
            Frequently Asked Questions
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
            Everything You Need to Know
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
            Clear answers about invisible grill safety, SS316 wire strength, bird net durability, and installation timelines.
          </p>

          {/* Search Input */}
          <div className="max-w-md mx-auto relative pt-4">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search e.g. rust, strength, fire, warranty..."
              className="w-full bg-slate-900 border border-slate-700 rounded-full py-3 pl-11 pr-4 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary shadow-inner"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-7 pointer-events-none" />
          </div>
        </div>
      </section>

      {/* 2. FAQs Content & Filters */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-primary text-white shadow-sm"
                  : "bg-slate-100 hover:bg-slate-200 text-slate-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 text-slate-500 text-sm">
              No matching questions found for &ldquo;{searchQuery}&rdquo;. Try another term or call us directly.
            </div>
          ) : (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm transition-all"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-base sm:text-lg hover:text-primary transition-colors cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-primary" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-slate-600 text-sm leading-relaxed border-t border-slate-100 animate-in fade-in duration-200">
                      <p>{faq.answer}</p>
                      <div className="mt-3">
                        <span className="text-[11px] font-semibold text-slate-400 bg-slate-50 border border-slate-200 px-2.5 py-0.5 rounded-full">
                          Category: {faq.category}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </section>

      {/* 3. Still Have Questions Banner */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 text-center space-y-4">
          <div className="w-12 h-12 bg-sky-100 text-primary rounded-full flex items-center justify-center mx-auto">
            <HelpCircle className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900">Have a Specific Question About Your Balcony?</h3>
          <p className="text-slate-600 text-sm max-w-md mx-auto">
            Our technical engineers are happy to explain layout feasibility, wire pitch, or custom requirements over phone or in-person.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <button
              onClick={() => setModalOpen(true)}
              className="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-full text-xs font-semibold shadow transition-all cursor-pointer"
            >
              Request Free Site Consultation
            </button>
            <a
              href="tel:+919700099235"
              className="bg-white border border-slate-300 hover:bg-slate-100 text-slate-800 px-6 py-2.5 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-primary" /> Call +91 97000 99235
            </a>
          </div>
        </div>
      </section>

      <InspectionModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
