"use client";

import React, { useState } from "react";
import { Phone, MessageCircle, Calendar } from "lucide-react";
import InspectionModal from "./InspectionModal";

export default function FloatingActions() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 items-end">
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/919700099235?text=Hello%20ModerNet%2C%20I%20am%20interested%20in%20Invisible%20Grills%20%2F%20Bird%20Netting%20for%20my%20home"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white p-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          aria-label="Chat on WhatsApp"
        >
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out text-sm font-medium px-0 group-hover:px-1">
            WhatsApp Us
          </span>
          <MessageCircle className="w-6 h-6 fill-current" />
        </a>

        {/* Call Button */}
        <a
          href="tel:+919700099235"
          className="group flex items-center gap-2 bg-primary hover:bg-primary-dark text-white p-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          aria-label="Direct Call"
        >
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out text-sm font-medium px-0 group-hover:px-1">
            Call +91 97000 99235
          </span>
          <Phone className="w-6 h-6" />
        </a>

        {/* Free Inspection Trigger button */}
        <button
          onClick={() => setModalOpen(true)}
          className="hidden sm:flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white py-2.5 px-4 rounded-full shadow-lg hover:shadow-xl text-xs font-semibold tracking-wide border border-slate-700 transition-all transform hover:scale-105"
        >
          <Calendar className="w-4 h-4 text-sky-400" />
          <span>Book Free Visit</span>
        </button>
      </div>

      <InspectionModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
