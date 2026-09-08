'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Building2, UserCheck, ShieldCheck } from 'lucide-react';

export default function ContactConnectionVisual() {
  return (
    <section className="relative py-24 sm:py-32 px-6 sm:px-8 bg-white border-b border-gray-200 overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-red-500/[0.02] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 text-[11px] font-mono tracking-[0.25em] text-[#E31837] uppercase mb-4"
        >
          <span className="w-1.5 h-1.5 bg-[#E31837] rounded-full" />
          <span>CENTRALIZED NEXUS</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl font-display font-extrabold uppercase tracking-tight text-gray-900 leading-tight mb-16 sm:mb-20"
        >
          How every inquiry <br />
          <span className="text-[#E31837]">creates a connection.</span>
        </motion.h2>

        {/* Animated Connecting Hierarchy: BUSINESS ↓ LORDS & KINGS GROUP MANPOWER SOLUTIONS ↓ CANDIDATE */}
        <div className="max-w-xl mx-auto flex flex-col items-center">
          {/* 1. BUSINESS */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="w-full p-6 sm:p-8 border border-gray-200 bg-[#f8f9fa] hover:border-[#E31837] shadow-sm transition-all duration-300"
          >
            <div className="flex items-center justify-center gap-2 mb-1 text-[#E31837]">
              <Building2 className="w-4 h-4" />
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] font-bold">
                STAGE 01 &bull; INTAKE
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-gray-900 uppercase tracking-tight">
              BUSINESS
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mt-2 font-normal">
              Specific workforce requirements, skill specifications, and shift timelines submitted.
            </p>
          </motion.div>

          {/* Animated Connecting Line 1 */}
          <div className="flex flex-col items-center my-3">
            <div className="w-[1.5px] h-10 bg-gradient-to-b from-gray-300 to-[#E31837]" />
            <div className="w-8 h-8 border border-red-200 bg-red-50 flex items-center justify-center text-[#E31837]">
              <ArrowDown className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* 2. LORDS & KINGS GROUP MANPOWER SOLUTIONS */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="w-full py-7 px-8 bg-white border-2 border-[#E31837] shadow-md"
          >
            <div className="flex items-center justify-center gap-2 mb-1 text-[#E31837]">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] font-bold">
                EVALUATION &amp; MATCHING
              </span>
            </div>
            <h4 className="text-xl sm:text-2xl font-display font-extrabold text-gray-900 uppercase tracking-wider">
              LORDS &amp; KINGS GROUP MANPOWER SOLUTIONS
            </h4>
            <p className="text-xs sm:text-sm text-gray-600 mt-2 max-w-sm mx-auto font-normal">
              Our workforce desk reviews, screens, and validates capability against verified client requirements.
            </p>
          </motion.div>

          {/* Animated Connecting Line 2 */}
          <div className="flex flex-col items-center my-3">
            <div className="w-8 h-8 border border-red-200 bg-red-50 flex items-center justify-center text-[#E31837]">
              <ArrowDown className="w-3.5 h-3.5" />
            </div>
            <div className="w-[1.5px] h-10 bg-gradient-to-b from-[#E31837] to-gray-300" />
          </div>

          {/* 3. CANDIDATE */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-full p-6 sm:p-8 border border-gray-200 bg-[#f8f9fa] hover:border-[#E31837] shadow-sm transition-all duration-300"
          >
            <div className="flex items-center justify-center gap-2 mb-1 text-[#E31837]">
              <UserCheck className="w-4 h-4" />
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] font-bold">
                STAGE 02 &bull; PLACEMENT
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-gray-900 uppercase tracking-tight">
              CANDIDATE
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mt-2 font-normal">
              Qualified individuals briefed, confirmed, and introduced to reputable workplaces with clear expectations.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

