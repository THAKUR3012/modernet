"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Clock,
  MessageCircle,
  Building2,
} from "lucide-react";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="space-y-16 pb-20">
      {/* 1. Hero Header (matches uploaded_media_1790570075021.png) */}
      <section className="relative min-h-[65vh] sm:min-h-[72vh] flex items-center justify-center bg-slate-950 text-white overflow-hidden pt-28 pb-16">
        {/* Background Image: Image-07.jpg */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/Birdnetting/Image-07.jpg"
            alt="Book Your Free Inspection - ModerNet Safety Experts"
            fill
            priority
            className="object-cover object-center filter brightness-95"
          />
          {/* Subtle Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-black/65" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-200 text-[11px] sm:text-xs font-semibold tracking-wider uppercase mb-6 backdrop-blur-sm shadow-sm">
            CONTACT US
          </span>

          {/* Heading in Playfair Serif */}
          <h1 className="font-playfair text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.12] text-white mb-6 drop-shadow-md">
            Book Your Free<br />
            Inspection.
          </h1>

          {/* Subtitle */}
          <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-slate-100 font-normal leading-relaxed mb-8 drop-shadow">
            Speak with our safety experts and get a tailored solution for your property.
          </p>

          {/* Dual Action Buttons */}
          <div className="flex flex-row items-center justify-center gap-4 flex-wrap">
            <a
              href="tel:+919082754119"
              className="bg-[#1d7caf] hover:bg-[#166088] text-white font-medium px-8 py-3.5 rounded-full text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
            >
              Call Mr. Krishna
            </a>
            <Link
              href="/services"
              className="border border-white/40 hover:border-white hover:bg-white/10 text-white font-medium px-8 py-3.5 rounded-full text-sm sm:text-base transition-all duration-200 transform hover:-translate-y-0.5 bg-black/25 backdrop-blur-sm shadow-md"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Main Grid: Info + Contact Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
                Get in Touch
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 mt-2">
                We Are Here to Protect Your Home
              </h2>
              <p className="text-slate-600 text-sm mt-2">
                Connect directly with Mr. Krishna for expert consultations, free measurement visits, and itemized quotations across Mumbai and Navi Mumbai.
              </p>
            </div>

            {/* Direct Phone / WhatsApp Card */}
            <div className="bg-gradient-to-r from-sky-50 to-blue-50 border border-sky-200/80 rounded-3xl p-6 space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                  <Phone className="w-5 h-5 text-primary" /> Direct Hotline & WhatsApp
                </h3>
                <span className="text-[11px] font-semibold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">
                  Mr. Krishna
                </span>
              </div>
              <p className="text-xs text-slate-600">
                Available Monday to Sunday (8:00 AM – 8:00 PM) for bookings and inquiries.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                <a
                  href="tel:+919082754119"
                  className="bg-primary hover:bg-primary-dark text-white text-xs font-semibold py-2.5 px-3 rounded-xl text-center shadow-sm transition-all"
                >
                  Call +91 9082754119
                </a>
                <a
                  href="tel:+918692873408"
                  className="bg-slate-800 hover:bg-slate-900 text-white text-xs font-semibold py-2.5 px-3 rounded-xl text-center shadow-sm transition-all"
                >
                  Call +91 8692873408
                </a>
              </div>
              <div className="pt-1">
                <a
                  href="https://wa.me/919082754119?text=Hello%20Mr.%20Krishna%2C%20I%20would%20like%20to%20book%20a%20free%20site%20visit%20for%20safety%20nets%20/%20invisible%20grills."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold py-2.5 px-4 rounded-xl text-center shadow-sm transition-all flex items-center justify-center gap-1.5"
                >
                  <MessageCircle className="w-4 h-4" /> WhatsApp Chat (+91 9082754119)
                </a>
              </div>
            </div>

            {/* Kandivali East Office Card */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-2.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-primary font-bold text-sm">
                  <Building2 className="w-4 h-4" /> Kandivali East Office & Works
                </div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-sky-700 bg-sky-50 px-2 py-0.5 rounded border border-sky-100">
                  Head Office
                </span>
              </div>
              <p className="text-xs font-bold text-slate-800">
                Shri Krishna Invisible Grill &amp; Bird Net Company
              </p>
              <p className="text-xs text-slate-600 leading-relaxed">
                Jai Ambika Bhawani Society, Hanuman Nagar, Akurli Road, Kandivali East, Mumbai, Maharashtra 400101
              </p>
              <div className="pt-1 text-xs text-slate-500 space-y-1">
                <p>
                  Contact Person: <strong className="text-slate-700">Mr. Krishna</strong>
                </p>
                <p>
                  Email:{" "}
                  <a href="mailto:Msmartkrish.81089@gmail.com" className="text-primary font-medium hover:underline">
                    Msmartkrish.81089@gmail.com
                  </a>
                </p>
              </div>
            </div>

            {/* 3 Years Free Repairing Service Banner */}
            <div className="bg-gradient-to-br from-red-500/10 via-amber-500/10 to-emerald-500/10 border border-amber-200 rounded-3xl p-5 space-y-2">
              <div className="flex items-center gap-2">
                <span className="bg-red-600 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                  Guaranteed Offer
                </span>
                <span className="text-xs font-bold text-slate-900">
                  Free Repairing Service For 3 Years
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Every installation is backed by our official 3-Year Free Repairing Service. We use high-durability Nylon Nets with Long Time Life and genuine SS316 Marine Grade Invisible Grills.
              </p>
              <div className="flex flex-wrap gap-2 pt-1 text-[11px] font-medium text-slate-700">
                <span className="bg-white/80 border border-slate-200 px-2 py-0.5 rounded-md">✓ All Bird Net Service</span>
                <span className="bg-white/80 border border-slate-200 px-2 py-0.5 rounded-md">✓ Nylon Net Long Time Life</span>
                <span className="bg-white/80 border border-slate-200 px-2 py-0.5 rounded-md">✓ SS316 Invisible Grills</span>
              </div>
            </div>

            {/* Official Visiting Card Preview */}
            <div className="bg-white border border-slate-200 rounded-3xl p-5 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Official Visiting Card
                </h4>
                <span className="text-[11px] text-slate-500">Verified Business</span>
              </div>
              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-slate-200 shadow-inner bg-slate-50">
                <Image
                  src="/img/business_card.png"
                  alt="Shri Krishna Invisible Grill & Bird Net Company - Mr. Krishna Visiting Card"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Operating Hours */}
            <div className="flex items-center gap-3 text-xs text-slate-500 bg-slate-50 p-4 rounded-2xl border border-slate-200">
              <Clock className="w-4 h-4 text-primary shrink-0" />
              <span>We operate 7 days a week for residential site inspections across Mumbai & Navi Mumbai.</span>
            </div>

          </div>

          {/* Right Column: React Hook Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200/90 shadow-xl p-6 sm:p-10">
            <div className="mb-6">
              <span className="text-xs font-bold text-primary uppercase tracking-wider bg-sky-50 px-3 py-1 rounded-full">
                Quick Booking
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900 mt-2">
                Send Us Your Requirements
              </h3>
              <p className="text-slate-500 text-xs mt-1">
                Fill the details below to request a free site measurement visit and receive an itemized quotation.
              </p>
            </div>

            <ContactForm />
          </div>

        </div>
      </section>

      {/* 3. Google Maps Location Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-md overflow-hidden">
          <div className="p-6 bg-slate-900 text-white flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h3 className="text-lg font-bold">Visit Our Kandivali East Office</h3>
              <p className="text-xs text-slate-400">Jai Ambika Bhawani Society, Hanuman Nagar, Akurli Road, Kandivali East, Mumbai - 400101</p>
            </div>
            <a
              href="https://maps.google.com/?q=Jai+Ambika+Bhawani+Society+Hanuman+Nagar+Akurli+Road+Kandivali+East+Mumbai+400101"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary-dark text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors"
            >
              Open in Google Maps
            </a>
          </div>
          <div className="w-full h-80 bg-slate-100 relative">
            <iframe
              src="https://maps.google.com/maps?q=Jai+Ambika+Bhawani+Society,+Hanuman+Nagar,+Akurli+Road,+Kandivali+East,+Mumbai+400101&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Shri Krishna Invisible Grill Kandivali East Office Map"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
