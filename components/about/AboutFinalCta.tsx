'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Building2, User } from 'lucide-react';

interface AboutFinalCtaProps {
  onOpenHireModal: () => void;
  onOpenCandidateModal: () => void;
}

export default function AboutFinalCta({
  onOpenHireModal,
  onOpenCandidateModal,
}: AboutFinalCtaProps) {
  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center py-28 sm:py-36 px-6 sm:px-8 bg-[#f8f9fa] border-t border-gray-200 overflow-hidden text-center">
      {/* Ambient red spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-[#E31837]/[0.02] rounded-full blur-[160px] pointer-events-none" />

      {/* FINAL STATEMENT */}
      <div className="max-w-5xl mx-auto w-full relative z-10 my-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1 border border-red-200 text-[#E31837] text-[11px] font-mono tracking-[0.25em] uppercase mb-8 font-bold bg-white"
        >
          <span className="w-1.5 h-1.5 bg-[#E31837]" />
          <span>OUR CONVICTION</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-[80px] font-display font-bold uppercase tracking-tight text-gray-900 leading-[1.05] max-w-4xl mx-auto"
        >
          Better connections create <br />
          <span className="text-[#E31837]">better possibilities.</span>
        </motion.h2>

        {/* Action Panel */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-16 pt-12 border-t border-gray-200 max-w-2xl mx-auto"
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold uppercase text-gray-900 tracking-tight">
            Build your team. Build your future.
          </h3>

          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
            Whether you require disciplined workforce deployment or a trustworthy bridge to your next career milestone, we are ready to assist.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenHireModal}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-xs font-semibold tracking-wider uppercase text-white bg-[#E31837] hover:bg-[#c4122d] transition-all shadow-sm active:scale-95"
            >
              <Building2 className="w-4 h-4" />
              <span>Hire With Us</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenCandidateModal}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-xs font-semibold tracking-wider uppercase text-gray-900 bg-white border border-gray-900 hover:bg-gray-900 hover:text-white transition-all active:scale-95"
            >
              <User className="w-4 h-4" />
              <span>Find Opportunities</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
