"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import InspectionModal from "./InspectionModal";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Floating Pill Header */}
      <header className="fixed top-4 sm:top-5 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-[1200px] pointer-events-none transition-all duration-300">
        <div
          className={`pointer-events-auto w-full bg-white rounded-full px-5 sm:px-8 py-2 sm:py-2.5 flex items-center justify-between transition-all duration-300 ${
            isScrolled
              ? "shadow-[0_16px_40px_rgba(0,0,0,0.18)]"
              : "shadow-[0_14px_40px_rgba(0,0,0,0.12)]"
          }`}
        >
          {/* Brand Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <div className="relative h-9 sm:h-11 w-40 sm:w-48">
              <Image
                src="/img/logo.png"
                alt="Shri Krishna Invisible Grill & Bird Net Company"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Center Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-[15px] transition-colors relative py-1 ${
                    isActive
                      ? "text-[#1d7caf] font-semibold"
                      : "text-slate-800 hover:text-[#1d7caf] font-medium"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#1d7caf] hover:bg-[#166088] text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-all duration-200 shadow-sm hover:shadow cursor-pointer"
            >
              Free Inspection
            </button>
          </div>

          {/* Mobile Actions */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setIsModalOpen(true)}
              className="sm:hidden bg-[#1d7caf] text-white text-xs font-semibold px-3.5 py-1.5 rounded-full"
            >
              Free Visit
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1.5 rounded-full text-slate-800 hover:bg-slate-100 transition-colors"
              aria-label="Toggle navigation"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="pointer-events-auto lg:hidden mt-2 bg-white rounded-2xl p-4 shadow-xl border border-slate-100 space-y-2 animate-in fade-in slide-in-from-top-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "bg-sky-50 text-[#1d7caf] font-bold"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2 border-t border-slate-100">
              <button
                onClick={() => {
                  setIsOpen(false);
                  setIsModalOpen(true);
                }}
                className="w-full bg-[#1d7caf] hover:bg-[#166088] text-white text-sm font-semibold py-2.5 rounded-xl shadow-sm transition-all"
              >
                Free Inspection
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Free Inspection Modal */}
      <InspectionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
