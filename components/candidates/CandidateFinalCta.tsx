'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface CandidateFinalCtaProps {
  onOpenCandidateModal: () => void;
}

export default function CandidateFinalCta({ onOpenCandidateModal }: CandidateFinalCtaProps) {
  return (
    <section className="relative py-24 sm:py-32 px-6 sm:px-8 bg-white overflow-hidden text-center border-t border-gray-200">
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold uppercase tracking-tight text-gray-900 leading-[1.08]">
            Ready for your <br />
            <span className="text-[#E31837]">next opportunity?</span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-gray-600 max-w-xl mx-auto leading-relaxed font-normal">
            Submit your profile today and let our specialized recruitment team match you with verified corporate openings.
          </p>

          <div className="mt-10 flex justify-center">
            <button
              onClick={onOpenCandidateModal}
              className="inline-flex items-center justify-center gap-3 px-9 py-4 text-xs font-semibold tracking-wider uppercase text-white bg-[#E31837] hover:bg-[#c4122d] transition-all shadow-sm active:scale-95"
            >
              <span>Submit Your Profile</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
