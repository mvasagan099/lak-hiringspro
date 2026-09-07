'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUp, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { CONTACT_INFO, NAVIGATION_LINKS } from '@/lib/constants';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#111827] border-t border-gray-800 text-gray-400 text-sm">
      {/* Top red accent hairline */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#E31837]" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 pt-18 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-14 mb-16">
          {/* Brand Column with Official Red Badge */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex flex-col items-start gap-4">
              <Link href="/" className="inline-block">
                <Image
                  src="/lords-and-kings-logo.png"
                  alt="Lords & Kings Group"
                  width={140}
                  height={42}
                  className="h-10 w-auto object-contain"
                />
              </Link>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono tracking-[0.25em] text-[#E31837] font-bold uppercase">
                  WORKFORCE &amp; RECRUITMENT DIVISION
                </span>
                <span className="text-gray-600">&bull;</span>
                <a
                  href="https://lordsandkings.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[10px] font-mono tracking-widest text-gray-400 hover:text-[#E31837] transition-colors uppercase"
                >
                  <span>LORDSANDKINGS.CO</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-md font-normal">
              L&amp;K HiringsPro is the specialized recruitment and workforce management division within the Lords &amp; Kings ecosystem, delivering dependable personnel across retail, logistics, manufacturing, and technical industries.
            </p>

            {/* Ecosystem Divisions */}
            <div className="pt-2 text-xs font-mono space-y-1 border-t border-gray-800">
              <span className="block tracking-widest text-[10px] uppercase text-gray-300 font-semibold">
                LORDS &amp; KINGS GROUP DIVISIONS
              </span>
              <p className="text-[11px] text-gray-400">
                Agro &bull; Enterprises &bull; Estates &bull; Workforce Solutions (HiringsPro)
              </p>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono tracking-[0.2em] uppercase text-white font-bold">
              Navigation
            </h4>
            <ul className="space-y-3">
              {NAVIGATION_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-xs tracking-wider uppercase text-gray-400 hover:text-[#E31837] transition-colors duration-200 block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-mono tracking-[0.2em] uppercase text-white font-bold">
              Inquiries &amp; Operations
            </h4>
            <ul className="space-y-3.5 text-xs font-normal">
              <li>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-center gap-3 text-gray-300 hover:text-[#E31837] transition-colors group"
                >
                  <Mail className="w-4 h-4 text-[#E31837] shrink-0" />
                  <span>{CONTACT_INFO.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={CONTACT_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-[#E31837] transition-colors group"
                >
                  <Phone className="w-4 h-4 text-[#E31837] shrink-0" />
                  <span>{CONTACT_INFO.phone} (Direct WhatsApp)</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-4 h-4 text-[#E31837] shrink-0 mt-0.5" />
                <span>Lords &amp; Kings Headquarters &bull; Operations &amp; Talent Division</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-mono">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span>&copy; {new Date().getFullYear()} Lords &amp; Kings Group. All rights reserved.</span>
            <span className="hidden sm:inline">&bull;</span>
            <span className="text-[#E31837]">L&amp;K HiringsPro</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-[#E31837] transition-colors uppercase tracking-widest text-[11px] group"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
