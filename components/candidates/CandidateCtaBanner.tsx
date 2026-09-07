'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, MessageSquare, ShieldCheck, Clock } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';

interface CandidateCtaBannerProps {
  onOpenCandidateModal: () => void;
  whatsappUrl?: string;
}

export default function CandidateCtaBanner({
  onOpenCandidateModal,
}: CandidateCtaBannerProps) {
  return (
    <section className="relative py-28 sm:py-36 px-6 sm:px-8 bg-[#f8f9fa] overflow-hidden text-center border-t border-gray-200">
      {/* Subtle red center ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#E31837]/[0.02] blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1 border border-red-200 text-[#E31837] text-[11px] font-mono tracking-[0.25em] uppercase mb-8 font-bold bg-white"
        >
          <span className="w-1.5 h-1.5 bg-[#E31837]" />
          <span>TAKE THE NEXT STEP</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-display font-bold uppercase tracking-tight text-gray-900 leading-[1.05]"
        >
          Your next chapter <br />
          <span className="text-[#E31837]">could start today.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 text-base sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-normal"
        >
          Take the first step and share your profile with L&amp;K HiringsPro. Direct connections to dependable enterprise employers.
        </motion.p>

        {/* Dual CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={onOpenCandidateModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4 text-xs font-semibold tracking-[0.14em] uppercase text-white bg-[#E31837] hover:bg-[#c4122d] transition-all shadow-sm active:scale-95"
          >
            <span>Submit Your Profile Online</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <a
            href={CONTACT_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4 text-xs font-semibold tracking-[0.14em] uppercase text-gray-900 bg-white border border-gray-900 hover:bg-gray-900 hover:text-white transition-all active:scale-95"
          >
            <MessageSquare className="w-4 h-4 text-green-600" />
            <span>Connect on WhatsApp</span>
          </a>
        </motion.div>

        {/* Candidate Trust Assurance Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-gray-200 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-lg mx-auto text-xs text-gray-500 font-mono"
        >
          <div className="flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#E31837]" />
            <span>100% Free Placement Service</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Clock className="w-4 h-4 text-[#E31837]" />
            <span>Verified Corporate Openings</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
