'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowUp,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Building2,
  ArrowUpRight,
} from 'lucide-react';
import { CONTACT_INFO, NAVIGATION_LINKS, BRAND, GROUP_DIVISIONS } from '@/lib/constants';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#090D16] border-t border-gray-800/80 text-gray-400 text-sm overflow-hidden">
      {/* Top Accent Gradient Hairline */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#E31837] to-transparent" />

      {/* Subtle Ambient Red Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[250px] bg-[#E31837]/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Top Pre-Footer Enterprise Assurance Strip */}
        <div className="py-8 border-b border-gray-800/60 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
          <div className="flex items-center gap-3.5">
            <div className="w-8 h-8 rounded-sm bg-[#E31837]/10 border border-[#E31837]/25 flex items-center justify-center text-[#E31837] shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <span className="block text-white font-medium tracking-wide">
                Institutional Governance
              </span>
              <span className="text-gray-400 text-[11px]">
                Official division of the diversified Lords &amp; Kings Group
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-8 h-8 rounded-sm bg-[#E31837]/10 border border-[#E31837]/25 flex items-center justify-center text-[#E31837] shrink-0">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div>
              <span className="block text-white font-medium tracking-wide">
                Direct Workforce Placement
              </span>
              <span className="text-gray-400 text-[11px]">
                Zero intermediary brokerages &bull; Transparent terms
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-8 h-8 rounded-sm bg-[#E31837]/10 border border-[#E31837]/25 flex items-center justify-center text-[#E31837] shrink-0">
              <Building2 className="w-4 h-4" />
            </div>
            <div>
              <span className="block text-white font-medium tracking-wide">
                Cross-Sector Specialization
              </span>
              <span className="text-gray-400 text-[11px]">
                Retail, Logistics, Manufacturing, Technical &amp; Hospitality
              </span>
            </div>
          </div>
        </div>

        {/* Main 4-Column Footer Grid */}
        <div className="py-16 sm:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-10">
          {/* Col 1: Brand Authority & Mission (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex flex-col items-start gap-3.5">
              <Link href="/" className="inline-block transition-transform duration-200 hover:opacity-95">
                <Image
                  src="/lords-and-kings-logo.png"
                  alt="Lords & Kings Group"
                  width={150}
                  height={44}
                  className="h-10 w-auto object-contain"
                />
              </Link>

              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#E31837]" />
                <span className="text-[10px] font-mono tracking-[0.25em] text-[#E31837] font-semibold uppercase">
                  MANPOWER &amp; WORKFORCE DIVISION
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-[13px] text-gray-400 leading-relaxed font-normal max-w-sm">
              Lords &amp; Kings Manpower Solutions delivers dependable enterprise personnel, structured shift deployments, and verified talent across core commercial industries.
            </p>

            <div className="pt-2">
              <a
                href={BRAND.parentSiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-sm bg-white/5 hover:bg-white/10 border border-gray-700/70 hover:border-gray-600 text-[11px] font-mono tracking-wider text-gray-300 hover:text-white transition-all uppercase"
              >
                <span>VISIT LORDSANDKINGS.CO</span>
                <ExternalLink className="w-3 h-3 text-[#E31837]" />
              </a>
            </div>
          </div>

          {/* Col 2: Group Divisions (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono tracking-[0.2em] uppercase text-white font-semibold pb-1 border-b border-gray-800">
              <span className="w-1.5 h-1.5 bg-[#E31837]" />
              <span>Group Divisions</span>
            </div>

            <ul className="space-y-3 pt-1">
              {GROUP_DIVISIONS.map((div) => (
                <li key={div.num} className="group">
                  <a
                    href={div.url}
                    target={div.isCurrent ? undefined : '_blank'}
                    rel={div.isCurrent ? undefined : 'noopener noreferrer'}
                    className="flex flex-col"
                  >
                    <div className="flex items-center justify-between gap-1">
                      <span
                        className={`text-xs tracking-wide uppercase transition-colors flex items-center gap-1.5 ${
                          div.isCurrent
                            ? 'text-[#E31837] font-semibold'
                            : 'text-gray-300 group-hover:text-white'
                        }`}
                      >
                        <span className="text-[10px] font-mono text-gray-500">{div.num}.</span>
                        <span className="truncate">{div.name}</span>
                        {div.isCurrent ? (
                          <span className="text-[8px] px-1.5 py-0.5 bg-[#E31837]/20 border border-[#E31837]/40 text-[#E31837] font-mono shrink-0">
                            5TH DIV · ACTIVE
                          </span>
                        ) : (
                          <ArrowUpRight className="w-3 h-3 text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                        )}
                      </span>
                    </div>
                    <span className="text-[11px] text-gray-400 font-normal line-clamp-1">
                      {div.category}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono tracking-[0.2em] uppercase text-white font-semibold pb-1 border-b border-gray-800">
              <span className="w-1.5 h-1.5 bg-[#E31837]" />
              <span>Navigation</span>
            </div>

            <ul className="space-y-2.5 pt-1">
              {NAVIGATION_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-xs tracking-wider uppercase text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <span className="w-1 h-1 rounded-full bg-gray-600 group-hover:bg-[#E31837] transition-colors" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Inquiries & Operations Desk (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono tracking-[0.2em] uppercase text-white font-semibold pb-1 border-b border-gray-800">
              <span className="w-1.5 h-1.5 bg-[#E31837]" />
              <span>Operations Desk</span>
            </div>

            <div className="space-y-3.5 pt-1">
              {/* WhatsApp Live Card */}
              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-3 rounded-sm bg-white/5 hover:bg-white/[0.08] border border-gray-800 hover:border-gray-700 transition-all group"
              >
                <div className="flex items-center justify-between text-xs mb-1">
                  <div className="flex items-center gap-2 text-green-400 font-medium">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span>Direct WhatsApp</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-white transition-colors" />
                </div>
                <span className="font-mono text-xs text-gray-200 font-semibold tracking-wide">
                  {CONTACT_INFO.phone}
                </span>
                <span className="block text-[10px] text-gray-400 mt-0.5">
                  {CONTACT_INFO.hours}
                </span>
              </a>

              {/* Direct Email */}
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-center gap-3 text-xs text-gray-300 hover:text-white transition-colors group p-2 hover:bg-white/5 rounded-sm"
              >
                <Mail className="w-4 h-4 text-[#E31837] shrink-0" />
                <span className="truncate">{CONTACT_INFO.email}</span>
              </a>

              {/* Head Office Location */}
              <a
                href={CONTACT_INFO.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-xs text-gray-400 hover:text-gray-200 transition-colors group p-2 hover:bg-white/5 rounded-sm"
              >
                <MapPin className="w-4 h-4 text-[#E31837] shrink-0 mt-0.5" />
                <span className="leading-snug">
                  328, 2nd floor, Ten Square Mall, Koyambedu, Chennai, Tamil Nadu - 600107
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Copyright, Legal & Smooth Scroll Back to Top */}
        <div className="pt-8 pb-10 border-t border-gray-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400 font-mono">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 text-center sm:text-left">
            <span>&copy; {new Date().getFullYear()} Lords &amp; Kings Group. All rights reserved.</span>
            <span className="hidden sm:inline text-gray-600">&bull;</span>
            <span className="text-[#E31837] font-semibold">Lords &amp; Kings Manpower Solutions</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-sm bg-white/5 hover:bg-[#E31837] text-gray-400 hover:text-white border border-gray-800 hover:border-[#E31837] transition-all uppercase tracking-widest text-[11px] group active:scale-95"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
