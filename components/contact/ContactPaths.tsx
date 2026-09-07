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

        {/* 3. Direct Communication Option */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="p-8 sm:p-12 border border-gray-200 bg-white shadow-sm text-center sm:text-left"
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-xl">
              <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#E31837] font-bold mb-2 block">
                DIRECT CHANNELS
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-extrabold uppercase text-gray-900 tracking-tight">
                Prefer to talk directly?
              </h3>
              <p className="mt-2 text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
                Connect with our workforce advisory desk via WhatsApp, direct phone call, or email. We respond promptly during business hours.
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-4 text-xs font-mono text-gray-500">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#E31837]" />
                  <span>{CONTACT_INFO.hours}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#E31837]" />
                  <span>{CONTACT_INFO.officeLocation}</span>
                </div>
              </div>
            </div>

            {/* Direct Action Buttons: WhatsApp, Call, Email */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 justify-start sm:justify-end">
              {/* WhatsApp */}
              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 border border-emerald-600/30 hover:border-emerald-600 bg-emerald-50 hover:bg-emerald-600 text-emerald-700 hover:text-white text-xs font-mono tracking-widest uppercase transition-all duration-300 group"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600 group-hover:text-white transition-colors" />
                <span>WhatsApp</span>
              </a>

              {/* Call */}
              <a
                href={`tel:${CONTACT_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 border border-gray-300 hover:border-[#E31837] bg-gray-50 hover:bg-white text-gray-900 hover:text-[#E31837] text-xs font-mono tracking-widest uppercase transition-all duration-300 group"
              >
                <Phone className="w-4 h-4 text-gray-600 group-hover:text-[#E31837] transition-colors" />
                <span>Call</span>
              </a>

              {/* Email */}
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 border border-gray-300 hover:border-[#E31837] bg-gray-50 hover:bg-white text-gray-900 hover:text-[#E31837] text-xs font-mono tracking-widest uppercase transition-all duration-300 group"
              >
                <Mail className="w-4 h-4 text-gray-600 group-hover:text-[#E31837] transition-colors" />
                <span>Email</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

