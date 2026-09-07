'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowDown, ExternalLink } from 'lucide-react';

export default function LordsAndKingsHeritageSection() {
  return (
    <section className="relative py-24 sm:py-32 px-6 sm:px-8 bg-white overflow-hidden text-center border-t border-b border-gray-200">
      {/* Subtle Central Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#E31837]/[0.02] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 text-[11px] font-mono tracking-[0.25em] text-[#E31837] uppercase mb-8 font-bold"
        >
          <span className="w-1.5 h-1.5 bg-[#E31837]" />
          <span>PARENT BRAND ARCHITECTURE</span>
        </motion.div>

        {/* Minimal Hierarchy: LORDS & KINGS GROUP ↓ L&K HIRINGSPRO */}
        <div className="flex flex-col items-center space-y-6 my-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <a
              href="https://lordsandkings.co"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:opacity-90 transition-opacity"
            >
              <Image
                src="/lords-and-kings-logo.png"
                alt="Lords & Kings Group"
                width={150}
                height={45}
                className="h-11 w-auto object-contain"
              />
              <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scaleY: 0 }}
            whileInView={{ opacity: 1, scaleY: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-10 h-10 border border-red-200 bg-red-50 flex items-center justify-center text-[#E31837] my-2"
          >
            <ArrowDown className="w-4 h-4" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl font-display font-bold uppercase tracking-wider text-gray-900 flex items-center gap-3"
          >
            <span className="text-[#E31837]">L&amp;K</span> HIRINGSPRO
          </motion.div>

          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-xs font-mono tracking-[0.25em] uppercase text-[#E31837] font-semibold"
          >
            Workforce &amp; Recruitment Division
          </motion.span>
        </div>

        {/* Concise Description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-base sm:text-lg text-gray-600 font-normal leading-relaxed max-w-xl mx-auto mt-8"
        >
          L&amp;K HiringsPro is an official division of the Lords &amp; Kings Group, bringing executive discipline, operational dependability, and institutional governance to modern workforce recruitment.
        </motion.p>
      </div>
    </section>
  );
}
