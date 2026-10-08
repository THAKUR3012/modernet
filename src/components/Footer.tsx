import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Shield, CheckCircle2, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Col 1: Brand & About */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-white p-2.5 rounded-xl inline-block">
                <Image
                  src="/img/logo.png"
                  alt="Shri Krishna Invisible Grill & Bird Net Company"
                  width={180}
                  height={60}
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Shri Krishna Invisible Grill & Bird Net Company provides trusted safety solutions. We specialize in SS316 Invisible Grills, All Bird Net Services with Long Time Life Nylon Nets, and Balcony Protection with 3 Years Free Repairing Service across Mumbai & Navi Mumbai.
            </p>
            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <p className="font-semibold text-slate-300">Proprietor &amp; Operations:</p>
              <p className="text-slate-200 font-medium">Mr. Krishna • Shri Krishna Invisible Grill &amp; Bird Net Company</p>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4 flex items-center gap-2">
              <Shield className="w-4 h-4 text-primary-light" />
              Protective Solutions
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link href="/services#detail-invisible-grills" className="hover:text-sky-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-slate-600" /> Invisible Grills (SS 316)
                </Link>
              </li>
              <li>
                <Link href="/services#detail-bird-netting" className="hover:text-sky-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-slate-600" /> All Bird Net Service (Nylon Net)
                </Link>
              </li>
              <li className="py-0.5">
                <span className="text-emerald-400 text-xs font-semibold flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Free Repairing Service (3 Yrs)
                </span>
              </li>
              <li>
                <Link href="/services#detail-mosquito-nets" className="hover:text-sky-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-slate-600" /> Mosquito Mesh & Screens
                </Link>
              </li>
              <li>
                <Link href="/services#detail-zip-screen" className="hover:text-sky-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-slate-600" /> Motorized Zip Screens
                </Link>
              </li>
              <li>
                <Link href="/services#detail-balcony-safety" className="hover:text-sky-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-slate-600" /> Balcony Child & Pet Safety
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Navigation & Areas */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Areas We Serve
            </h3>
            <div className="grid grid-cols-2 gap-2 text-xs text-slate-400 mb-6">
              <span className="bg-slate-900 border border-slate-800 px-2 py-1 rounded">Kandivali East</span>
              <span className="bg-slate-900 border border-slate-800 px-2 py-1 rounded">Hanuman Nagar</span>
              <span className="bg-slate-900 border border-slate-800 px-2 py-1 rounded">Akurli Road</span>
              <span className="bg-slate-900 border border-slate-800 px-2 py-1 rounded">Borivali &amp; Malad</span>
              <span className="bg-slate-900 border border-slate-800 px-2 py-1 rounded">Goregaon &amp; Andheri</span>
              <span className="bg-slate-900 border border-slate-800 px-2 py-1 rounded">Powai &amp; Ghatkopar</span>
              <span className="bg-slate-900 border border-slate-800 px-2 py-1 rounded">Thane &amp; Mulund</span>
              <span className="bg-slate-900 border border-slate-800 px-2 py-1 rounded">Mumbai &amp; Navi Mumbai</span>
            </div>
            <div className="flex gap-4 text-sm">
              <Link href="/about" className="text-slate-400 hover:text-white">About Us</Link>
              <Link href="/faq" className="text-slate-400 hover:text-white">FAQs</Link>
              <Link href="/contact" className="text-slate-400 hover:text-white">Contact</Link>
            </div>
          </div>

          {/* Col 4: Contact & Locations */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-base mb-4">Official Location</h3>
            
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-primary-light shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-200 block text-xs">Head Office:</strong>
                  Jai Ambika Bhawani Society, Hanuman Nagar, Akurli Road, Kandivali East, Mumbai - 400101
                </div>
              </div>

              <div className="flex items-start gap-2.5 pt-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-[11px] text-slate-400">Mr. Krishna (Direct &amp; WhatsApp):</div>
                  <a href="tel:+919082754119" className="text-slate-200 hover:text-emerald-400 text-sm font-semibold block">
                    +91 9082754119
                  </a>
                  <a href="tel:+918692873408" className="text-slate-400 hover:text-emerald-400 text-xs block mt-0.5">
                    +91 8692873408
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <a href="mailto:Msmartkrish.81089@gmail.com" className="text-slate-300 hover:text-sky-400 text-xs break-all">
                  Msmartkrish.81089@gmail.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Shri Krishna Invisible Grill &amp; Bird Net Company. All rights reserved. Mumbai.</p>
          <div className="flex items-center gap-6">
            <a href="https://wa.me/919082754119" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">
              WhatsApp (+91 9082754119)
            </a>
            <a href="tel:+919082754119" className="hover:text-sky-400 transition-colors">
              Call Support: +91 9082754119
            </a>
            <a href="mailto:Msmartkrish.81089@gmail.com" className="hover:text-sky-400 transition-colors">
              Email Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
