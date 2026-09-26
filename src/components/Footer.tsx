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
              <div className="bg-white p-2 rounded-lg inline-block">
                <Image
                  src="/img/modernet_logo1.jpeg"
                  alt="ModerNet Safety Solutions"
                  width={140}
                  height={35}
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              ModerNet Pvt. Ltd. is a pioneer in invisible safety solutions. We specialize in SS316 Invisible Grills, Bird Netting, Mosquito Screens, and Heavy-duty Construction Safety Nets across Mumbai & Navi Mumbai.
            </p>
            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <p className="font-semibold text-slate-300">Company Leadership:</p>
              <p className="text-slate-400">Mr. Atul Adhav • Mr. Satnam Singh Sagoo</p>
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
                <Link href="/services#detail-bird-netting" className="hover:text-sky-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-slate-600" /> Anti-Bird & Pigeon Netting
                </Link>
              </li>
              <li>
                <Link href="/services#detail-construction-nets" className="hover:text-sky-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-slate-600" /> Construction Safety Nets
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
              <span className="bg-slate-900 border border-slate-800 px-2 py-1 rounded">Navi Mumbai</span>
              <span className="bg-slate-900 border border-slate-800 px-2 py-1 rounded">Vashi</span>
              <span className="bg-slate-900 border border-slate-800 px-2 py-1 rounded">Belapur</span>
              <span className="bg-slate-900 border border-slate-800 px-2 py-1 rounded">Nerul & Seawoods</span>
              <span className="bg-slate-900 border border-slate-800 px-2 py-1 rounded">Kharghar & Panvel</span>
              <span className="bg-slate-900 border border-slate-800 px-2 py-1 rounded">Thane & Mulund</span>
              <span className="bg-slate-900 border border-slate-800 px-2 py-1 rounded">Powai & Ghatkopar</span>
              <span className="bg-slate-900 border border-slate-800 px-2 py-1 rounded">South & West Mumbai</span>
            </div>
            <div className="flex gap-4 text-sm">
              <Link href="/about" className="text-slate-400 hover:text-white">About Us</Link>
              <Link href="/faq" className="text-slate-400 hover:text-white">FAQs</Link>
              <Link href="/contact" className="text-slate-400 hover:text-white">Contact</Link>
              <Link href="/admin/login" className="text-sky-400 hover:underline">Admin Login</Link>
            </div>
          </div>

          {/* Col 4: Contact & Locations */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-base mb-4">Official Locations</h3>
            
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-primary-light shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-200 block text-xs">Belapur Head Office:</strong>
                  601, Pujit Plaza, Plot No. 67, Sector 11, Opp. K Star Hotel, Belapur, Navi Mumbai - 400614
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-primary-light shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-200 block text-xs">Manufacturing Unit:</strong>
                  PAP-A254/255, MIDC Industrial Area, Mahape, Navi Mumbai - 400710
                </div>
              </div>

              <div className="flex items-center gap-2.5 pt-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="tel:+919700099235" className="text-slate-200 hover:text-emerald-400 text-sm font-medium">
                  +91 97000 99235
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <a href="mailto:info@modernet.in" className="text-slate-300 hover:text-sky-400 text-xs">
                  info@modernet.in / atuladhav007@gmail.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} ModerNet Pvt. Ltd. All rights reserved. Mumbai & Navi Mumbai.</p>
          <div className="flex items-center gap-6">
            <a href="https://wa.me/919700099235" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">
              WhatsApp Support
            </a>
            <a href="https://www.instagram.com/indus_interior_solutions" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors">
              Instagram
            </a>
            <a href="https://www.youtube.com/@indus_interior" target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition-colors">
              YouTube Channel
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
