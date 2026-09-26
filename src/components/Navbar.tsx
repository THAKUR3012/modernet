"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone, Menu, X, Shield, Calendar } from "lucide-react";
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
      {/* Top Banner */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <span className="flex items-center gap-1.5 text-sky-400 font-medium">
              <Shield className="w-3.5 h-3.5" /> Mumbai & Navi Mumbai Official Safety Partner
            </span>
            <span className="hidden md:inline text-slate-500">•</span>
            <span className="hidden md:inline text-slate-400">ISO Standard SS316 Marine Grade Cables</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="tel:+919700099235"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-primary-light" />
              <span>+91 97000 99235</span>
            </a>
            <Link
              href="/admin/login"
              className="text-slate-400 hover:text-sky-300 transition-colors hidden sm:inline"
            >
              Staff Portal
            </Link>
          </div>
        </div>
      </div>

      {/* Main Floating Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-3"
            : "bg-white/90 backdrop-blur-sm py-4 border-b border-slate-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-10 w-36 sm:w-44 flex items-center">
              <Image
                src="/img/modernet_logo1.jpeg"
                alt="ModerNet Invisible Grills & Bird Netting"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors relative py-1 ${
                    isActive
                      ? "text-primary font-semibold"
                      : "text-slate-700 hover:text-primary"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <Calendar className="w-4 h-4" />
              <span>Free Inspection</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-primary text-white text-xs font-semibold px-3 py-1.5 rounded-full"
            >
              Free Visit
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  pathname === link.href
                    ? "bg-sky-50 text-primary font-semibold"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setIsOpen(false);
                  setIsModalOpen(true);
                }}
                className="w-full text-center bg-primary hover:bg-primary-dark text-white py-2.5 rounded-lg text-sm font-semibold shadow-sm"
              >
                Book Free Site Inspection
              </button>
              <a
                href="tel:+919700099235"
                className="flex items-center justify-center gap-2 text-center text-slate-700 border border-slate-300 py-2 rounded-lg text-sm font-medium"
              >
                <Phone className="w-4 h-4 text-primary" /> +91 97000 99235
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Free Inspection Modal */}
      <InspectionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
