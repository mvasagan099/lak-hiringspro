'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Building2, User, ArrowUpRight, Phone, Mail, MessageCircle, Clock, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';

interface ContactPathsProps {
  onOpenHireModal: () => void;
  onOpenCandidateModal: () => void;
}

export default function ContactPaths({
  onOpenHireModal,
  onOpenCandidateModal,
}: ContactPathsProps) {
  return (
    <section className="relative py-12 sm:py-16 px-6 sm:px-8 bg-[#f8f9fa] border-b border-gray-200">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Two Primary Paths: For Businesses & For Candidates */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {/* 1. FOR BUSINESSES */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="p-8 sm:p-12 border border-gray-200 bg-white flex flex-col justify-between group hover:border-[#E31837] shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden"
          >
            <div>
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100">
                <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#E31837] font-bold">
                  FOR ENTERPRISES
                </span>
                <div className="w-10 h-10 border border-gray-200 bg-gray-50 flex items-center justify-center text-gray-700 group-hover:text-[#E31837] group-hover:border-red-200 group-hover:bg-red-50 transition-all">
                  <Building2 className="w-4 h-4" />
                </div>
              </div>

              <h3 className="text-2xl sm:text-4xl font-display font-extrabold uppercase text-gray-900 mb-4">
                Looking to hire?
              </h3>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-8 font-normal">
                Share your workforce requirements, timeline, and industry specifications. Our recruitment coordinators will evaluate your demand and organize matching candidates.
              </p>
            </div>

            <button
              onClick={onOpenHireModal}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 text-xs font-mono tracking-widest uppercase text-white bg-[#E31837] hover:bg-[#c4122d] shadow-sm transition-all duration-300 self-start group"
            >
              <span>Request Hiring Support</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </motion.div>

          {/* 2. FOR CANDIDATES */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="p-8 sm:p-12 border border-gray-200 bg-white flex flex-col justify-between group hover:border-[#E31837] shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden"
          >
            <div>
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100">
                <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#E31837] font-bold">
                  FOR CANDIDATES
                </span>
                <div className="w-10 h-10 border border-gray-200 bg-gray-50 flex items-center justify-center text-gray-700 group-hover:text-[#E31837] group-hover:border-red-200 group-hover:bg-red-50 transition-all">
                  <User className="w-4 h-4" />
                </div>
              </div>

              <h3 className="text-2xl sm:text-4xl font-display font-extrabold uppercase text-gray-900 mb-4">
                Looking for an opportunity?
              </h3>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-8 font-normal">
                Submit your skills and employment preferences. Connect directly with employers who provide stable conditions and competitive terms across diverse sectors.
              </p>
            </div>

            <button
              onClick={onOpenCandidateModal}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 text-xs font-mono tracking-widest uppercase text-gray-900 hover:text-white border border-gray-900 bg-white hover:bg-gray-900 transition-all duration-300 self-start group"
            >
              <span>Submit Your Profile</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </motion.div>
        </div>

        {/* 3. Head Office & Direct Communication Channels */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="p-8 sm:p-12 lg:p-14 border border-gray-200 bg-white shadow-sm"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            {/* Left Column: Official Head Office block matching exact design */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#E31837] font-bold mb-2 block">
                  CORPORATE HEADQUARTERS
                </span>
                <h2 className="text-3xl sm:text-4xl font-display font-extrabold uppercase text-gray-900 tracking-tight">
                  Head Office
                </h2>
              </div>

              <div className="space-y-8 pt-2">
                {/* Visit Us */}
                <div className="flex items-start gap-5 sm:gap-6 group">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-[#E31837] flex items-center justify-center shrink-0 text-[#E31837] bg-white group-hover:bg-red-50 transition-colors shadow-sm">
                    <MapPin className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-display font-bold text-gray-900 mb-1.5">
                      Visit Us
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
                      328, 2nd floor, Ten Square Mall,<br />
                      Jawaharlal Nehru Road, Koyambedu,<br />
                      Chennai, Tamil Nadu - 600107
                    </p>
                    <a
                      href={CONTACT_INFO.address.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-2.5 text-xs font-mono text-[#E31837] hover:underline uppercase tracking-wider font-semibold"
                    >
                      <span>Get Directions on Google Maps</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Call Us */}
                <div className="flex items-start gap-5 sm:gap-6 group">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-[#E31837] flex items-center justify-center shrink-0 text-[#E31837] bg-white group-hover:bg-red-50 transition-colors shadow-sm">
                    <Phone className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-display font-bold text-gray-900 mb-1.5">
                      Call Us
                    </h3>
                    <a
                      href={`tel:${CONTACT_INFO.phoneRaw}`}
                      className="text-base sm:text-lg font-medium text-gray-800 hover:text-[#E31837] transition-colors block"
                    >
                      {CONTACT_INFO.phone}
                    </a>
                  </div>
                </div>

                {/* Email Us */}
                <div className="flex items-start gap-5 sm:gap-6 group">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-[#E31837] flex items-center justify-center shrink-0 text-[#E31837] bg-white group-hover:bg-red-50 transition-colors shadow-sm">
                    <Mail className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-display font-bold text-gray-900 mb-1.5">
                      Email Us
                    </h3>
                    <a
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="text-base sm:text-lg font-medium text-gray-800 hover:text-[#E31837] transition-colors block break-all"
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Fast Advisory Desk & Direct Action Cards */}
            <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 bg-gray-50 border border-gray-200">
              <div>
                <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#E31837] font-bold mb-2 block">
                  FAST RESPONSE DESK
                </span>
                <h3 className="text-xl sm:text-2xl font-display font-extrabold uppercase text-gray-900 tracking-tight">
                  Prefer direct messaging?
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                  Connect immediately with our dedicated workforce coordinators for real-time staffing queries, job availability, and enterprise agreements.
                </p>

                <div className="mt-6 space-y-3 text-xs font-mono text-gray-600">
                  <div className="flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-[#E31837] shrink-0" />
                    <span>{CONTACT_INFO.hours}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                    </span>
                    <span className="text-green-700 font-semibold">Priority 24–48h SLA Response</span>
                  </div>
                </div>
              </div>

              {/* Direct Quick Action Buttons */}
              <div className="mt-8 space-y-3">
                {/* WhatsApp Direct */}
                <a
                  href={CONTACT_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-mono tracking-widest uppercase shadow-sm transition-all duration-300 group"
                >
                  <MessageCircle className="w-4 h-4 text-white" />
                  <span>Open WhatsApp Desk</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                {/* Direct Call */}
                <a
                  href={`tel:${CONTACT_INFO.phoneRaw}`}
                  className="w-full inline-flex items-center justify-center gap-3 px-6 py-3.5 border border-gray-300 hover:border-[#E31837] bg-white text-gray-900 hover:text-[#E31837] text-xs font-mono tracking-widest uppercase transition-all duration-300 group"
                >
                  <Phone className="w-4 h-4 text-gray-600 group-hover:text-[#E31837] transition-colors" />
                  <span>Call {CONTACT_INFO.phone}</span>
                </a>

                {/* Direct Email */}
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="w-full inline-flex items-center justify-center gap-3 px-6 py-3.5 border border-gray-300 hover:border-[#E31837] bg-white text-gray-900 hover:text-[#E31837] text-xs font-mono tracking-widest uppercase transition-all duration-300 group"
                >
                  <Mail className="w-4 h-4 text-gray-600 group-hover:text-[#E31837] transition-colors" />
                  <span>Email {CONTACT_INFO.email}</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

