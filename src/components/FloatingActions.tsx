"use client";

import React, { useState } from "react";
import { MessageCircle, Instagram, Youtube } from "lucide-react";
import InspectionModal from "./InspectionModal";

export default function FloatingActions() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* Floating Social Icons on Bottom-Right */}
      <aside aria-label="Social contacts" className="fixed bottom-6 right-5 z-40 flex flex-col gap-3 items-center">
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/919700099235?text=Hello%20ModerNet%2C%20I%20would%20like%20to%20inquire%20about%20Invisible%20Grills%20and%20Bird%20Netting%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-110"
          aria-label="Contact us on WhatsApp"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
        </a>

        {/* Instagram Button */}
        <a
          href="https://www.instagram.com/indus_interior_solutions"
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-110"
          aria-label="Follow us on Instagram"
        >
          <Instagram className="w-5 h-5" />
        </a>

        {/* YouTube Button */}
        <a
          href="https://www.youtube.com/@indus_interior"
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 bg-[#FF0000] hover:bg-[#cc0000] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-110"
          aria-label="Subscribe on YouTube"
        >
          <Youtube className="w-5 h-5 fill-current" />
        </a>
      </aside>

      <InspectionModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
