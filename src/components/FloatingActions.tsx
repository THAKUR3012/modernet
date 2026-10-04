"use client";

import React, { useState } from "react";
import { MessageCircle, Phone } from "lucide-react";
import InspectionModal from "./InspectionModal";

export default function FloatingActions() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* Floating Contact Icons on Bottom-Right */}
      <aside aria-label="Quick contact" className="fixed bottom-6 right-5 z-40 flex flex-col gap-3 items-center">
        {/* Direct Call Button */}
        <a
          href="tel:+919082754119"
          className="w-12 h-12 bg-primary hover:bg-primary-dark text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-110"
          aria-label="Call Mr. Krishna at +91 9082754119"
          title="Call Mr. Krishna: +91 9082754119"
        >
          <Phone className="w-5 h-5" />
        </a>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/919082754119?text=Hello%20Mr.%20Krishna%2C%20I%20would%20like%20to%20inquire%20about%20Invisible%20Grills%20and%20Bird%20Netting%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-110"
          aria-label="Chat with Mr. Krishna on WhatsApp"
          title="WhatsApp Mr. Krishna: +91 9082754119"
        >
          <MessageCircle className="w-6 h-6 fill-current" />
        </a>
      </aside>

      <InspectionModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
