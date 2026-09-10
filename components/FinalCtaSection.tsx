'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';

interface FinalCtaSectionProps {
  onOpenHireModal: () => void;
  onOpenContactModal?: () => void;
}

export default function FinalCtaSection({ onOpenHireModal, onOpenContactModal }: FinalCtaSectionProps) {
  return (
    <section id="contact" className="relative py-16 sm:py-24 lg:py-36 px-5 sm:px-8 bg-white overflow-hidden text-center border-t border-gray-200 scroll-mt-20">
      {/* Subtle Ambient Red Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#E31837]/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-3 text-xs font-mono tracking-[0.25em] text-[#E31837] font-semibold uppercase mb-6 sm:mb-8"
        >
          <span className="w-6 sm:w-8 h-[2px] bg-[#E31837]" />
          <span>LORDS &amp; KINGS &bull; WORKFORCE OPERATIONS</span>
          <span className="w-6 sm:w-8 h-[2px] bg-[#E31837]" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-bold font-display tracking-tight text-gray-900 leading-[1.06] sm:leading-[1.03] uppercase"
        >
          BUILD YOUR TEAM.
          <br />
          <span className="text-[#E31837]">BUILD YOUR FUTURE.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 text-base sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-normal"
        >
          Connect with Lords &amp; Kings Manpower Solutions today. Share your enterprise requirement or submit your candidate credentials to access verified placements.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={onOpenHireModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4 text-xs font-semibold tracking-[0.14em] uppercase text-white bg-[#E31837] hover:bg-[#c4122d] transition-all shadow-sm active:scale-95"
          >
            <span>Deploy Workforce</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <button
            onClick={onOpenContactModal || onOpenHireModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4 text-xs font-semibold tracking-[0.14em] uppercase text-gray-900 bg-white border border-gray-900 hover:bg-gray-900 hover:text-white transition-all active:scale-95"
          >
            <span>Submit Candidate Intake</span>
            <ArrowDown className="w-4 h-4 text-gray-400 group-hover:text-white" />
          </button>
        </motion.div>

        {/* Direct Contact Reference */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-14 pt-8 border-t border-gray-200 flex flex-wrap items-center justify-center gap-8 text-xs font-mono text-gray-500"
        >
          <span>EMAIL: <a href={`mailto:${CONTACT_INFO.email}`} className="text-gray-900 hover:text-[#E31837] font-semibold">{CONTACT_INFO.email}</a></span>
          <span>&bull;</span>
          <span>WHATSAPP: <a href={CONTACT_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-[#E31837] font-semibold">{CONTACT_INFO.phone}</a></span>
          <span>&bull;</span>
          <span>TURNAROUND: <strong className="text-gray-900">24–48 HOURS</strong></span>
        </motion.div>
      </div>
    </section>
  );
}
