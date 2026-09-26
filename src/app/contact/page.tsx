"use client";

import React from "react";
import {
  Phone,
  Clock,
  MessageCircle,
  Building2,
  Factory,
} from "lucide-react";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="space-y-16 pb-20">
      {/* 1. Header */}
      <section className="bg-slate-950 text-white py-20 relative overflow-hidden text-center">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-400 bg-sky-950/80 px-4 py-1.5 rounded-full border border-sky-800">
            Contact ModerNet
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
            Book Your Free Site Inspection
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
            Speak with our safety experts and get a tailored measurement & quote for your residential flat, villa, or commercial property.
          </p>
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
                Drop by our corporate office in Belapur, visit our Mahape fabrication facility, or call us to schedule an on-site visit today.
              </p>
            </div>

            {/* Direct Phone / WhatsApp Card */}
            <div className="bg-gradient-to-r from-sky-50 to-blue-50 border border-sky-200/80 rounded-3xl p-6 space-y-3">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <Phone className="w-5 h-5 text-primary" /> Direct Hotline & WhatsApp
              </h3>
              <p className="text-xs text-slate-600">
                Available Monday to Sunday (8:00 AM – 8:00 PM) for bookings and inquiries.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href="tel:+919700099235"
                  className="bg-primary hover:bg-primary-dark text-white text-xs font-semibold py-2.5 px-4 rounded-xl text-center shadow-sm transition-all"
                >
                  Call +91 97000 99235
                </a>
                <a
                  href="https://wa.me/919700099235?text=Hello%20ModerNet%20Team%2C%20I%20would%20like%20to%20book%20a%20free%20site%20visit."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold py-2.5 px-4 rounded-xl text-center shadow-sm transition-all flex items-center justify-center gap-1.5"
                >
                  <MessageCircle className="w-4 h-4" /> WhatsApp Chat
                </a>
              </div>
            </div>

            {/* Belapur Office Card */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-2">
              <div className="flex items-center gap-2 text-primary font-bold text-sm">
                <Building2 className="w-4 h-4" /> Belapur Corporate Office
              </div>
              <p className="text-xs font-semibold text-slate-800">ModerNet Pvt. Ltd.</p>
              <p className="text-xs text-slate-600 leading-relaxed">
                601, Pujit Plaza, Plot No. 67, Sector 11, Opposite K Star Hotel, Belapur, Navi Mumbai, Maharashtra 400614
              </p>
              <div className="pt-2 text-xs text-slate-500">
                Email: <a href="mailto:info@modernet.in" className="text-primary hover:underline">info@modernet.in</a>
              </div>
            </div>

            {/* Mahape Factory Card */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-2">
              <div className="flex items-center gap-2 text-emerald-600 font-bold text-sm">
                <Factory className="w-4 h-4" /> Manufacturing & Assembly Unit
              </div>
              <p className="text-xs font-semibold text-slate-800">ModerNet Works</p>
              <p className="text-xs text-slate-600 leading-relaxed">
                PAP-A254/255, MIDC Industrial Area, Mahape, Navi Mumbai, Maharashtra 400710
              </p>
              <div className="pt-2 text-xs text-slate-500">
                Direct Contact: <a href="mailto:atuladhav007@gmail.com" className="text-primary hover:underline">atuladhav007@gmail.com</a>
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
              <h3 className="text-lg font-bold">Visit Our Belapur Office</h3>
              <p className="text-xs text-slate-400">Pujit Plaza, Sector 11, CBD Belapur, Navi Mumbai</p>
            </div>
            <a
              href="https://maps.google.com/?q=Pujit+Plaza+CBD+Belapur+Navi+Mumbai"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary-dark text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors"
            >
              Open in Google Maps
            </a>
          </div>
          <div className="w-full h-80 bg-slate-100 relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.7456722026117!2d73.03606777610167!3d19.03091998216345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c3bf88a44b79%3A0xe5a3636ea6f0a6d0!2sPujit%20Plaza!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="ModerNet Belapur Office Map"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
