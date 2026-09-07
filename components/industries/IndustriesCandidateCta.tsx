'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface CandidateCtaProps {
  onOpenCandidateModal: () => void;
}

export default function IndustriesCandidateCta({ onOpenCandidateModal }: CandidateCtaProps) {
  return (
    <section className="relative py-20 sm:py-24 px-6 sm:px-8 bg-[#f8f9fa] border-t border-gray-200 text-center">
      <div className="max-w-3xl mx-auto relative z-10">
        <motion.h3
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-4xl font-display font-bold uppercase text-gray-900"
        >
          Looking for your <span className="text-[#E31837]">next opportunity?</span>
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 text-sm sm:text-base text-gray-600 max-w-lg mx-auto leading-relaxed font-normal"
        >
          Share your profile with our recruitment desk to discover career openings across these sectors.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 flex justify-center"
        >
          <button
            onClick={onOpenCandidateModal}
            className="inline-flex items-center gap-2.5 px-8 py-3.5 text-xs font-semibold tracking-wider uppercase text-gray-900 border border-gray-900 hover:bg-gray-900 hover:text-white bg-white transition-all duration-200"
          >
            <span>Submit Your Profile</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
