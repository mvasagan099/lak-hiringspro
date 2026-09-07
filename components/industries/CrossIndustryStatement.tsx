'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function CrossIndustryStatement() {
  return (
    <section className="relative py-28 sm:py-36 px-6 sm:px-8 bg-[#f8f9fa] overflow-hidden border-t border-b border-gray-200">
      {/* Central Ambient Red Spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#E31837]/[0.02] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1 border border-red-200 text-[#E31837] text-[11px] font-mono tracking-[0.25em] uppercase mb-8 font-bold bg-white"
        >
          <span className="w-1.5 h-1.5 bg-[#E31837]" />
          <span>UNIFIED PURPOSE</span>
        </motion.div>

        {/* First Statement */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-[84px] font-display font-bold uppercase tracking-tight text-gray-900 leading-[1.05]"
        >
          Different industries. <br />
          <span className="text-[#E31837]">One goal.</span>
        </motion.h2>

        {/* Divider line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="w-24 h-[2px] bg-[#E31837] mx-auto my-10"
        />

        {/* Second Statement */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="text-xl sm:text-2xl md:text-3xl text-gray-700 font-normal max-w-3xl mx-auto leading-relaxed"
        >
          Helping businesses find the people they need to move forward.
        </motion.p>
      </div>
    </section>
  );
}
