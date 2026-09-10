'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Briefcase, HeartHandshake, UserCheck } from 'lucide-react';

export default function HumanConnectionSection() {
  return (
    <section className="relative py-28 sm:py-36 px-6 sm:px-8 bg-white border-t border-b border-gray-200 overflow-hidden">
      {/* Subtle Central Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-[#E31837]/[0.02] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 text-[11px] font-mono tracking-[0.25em] text-[#E31837] uppercase mb-8 font-bold"
        >
          <span className="w-1.5 h-1.5 bg-[#E31837]" />
          <span>THE HUMAN ELEMENT</span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold uppercase tracking-tight text-gray-900 leading-[1.08] max-w-4xl mx-auto mb-16 sm:mb-20"
        >
          Behind every requirement <br className="hidden sm:inline" />
          <span className="text-gray-400">is a person.</span> <br />
          Behind every candidate <br className="hidden sm:inline" />
          <span className="text-[#E31837]">is an opportunity.</span>
        </motion.h2>

        {/* Two-Sided Structure: BUSINESS ↓ CONNECTION ↓ CANDIDATE */}
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          {/* 1. BUSINESS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="w-full p-8 sm:p-10 border border-gray-200 bg-[#f8f9fa] hover:border-[#E31837] hover:bg-white hover:shadow-md transition-all duration-300"
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <Briefcase className="w-4 h-4 text-[#E31837]" />
              <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-[#E31837] font-bold">
                THE DEMAND
              </span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-gray-900 uppercase">
              BUSINESS
            </h3>
            <p className="mt-3 text-sm sm:text-base text-gray-600 max-w-md mx-auto leading-relaxed font-normal">
              Operational goals, shift demands, and team momentum requiring dependable capabilities to sustain growth.
            </p>
          </motion.div>

          {/* 2. THE CONNECTION */}
          <div className="my-6 flex flex-col items-center">
            <div className="w-[2px] h-10 bg-[#E31837]" />
            <motion.div
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="px-6 py-3 border border-red-200 bg-red-50 text-[#E31837] flex items-center gap-2.5 my-2 shadow-sm"
            >
              <HeartHandshake className="w-4 h-4 shrink-0" />
              <span className="text-xs font-mono tracking-[0.16em] uppercase font-bold">
                LORDS &amp; KINGS MANPOWER SOLUTIONS &bull; THE BRIDGE
              </span>
            </motion.div>
            <div className="w-[2px] h-10 bg-[#E31837]" />
            <ArrowDown className="w-4 h-4 text-[#E31837] -mt-1" />
          </div>

          {/* 3. CANDIDATE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full p-8 sm:p-10 border border-gray-200 bg-[#f8f9fa] hover:border-[#E31837] hover:bg-white hover:shadow-md transition-all duration-300"
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <UserCheck className="w-4 h-4 text-[#E31837]" />
              <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-[#E31837] font-bold">
                THE CAPABILITY
              </span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-gray-900 uppercase">
              CANDIDATE
            </h3>
            <p className="mt-3 text-sm sm:text-base text-gray-600 max-w-md mx-auto leading-relaxed font-normal">
              Practical skills, dedication, and the aspiration to perform and build a dependable livelihood.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
