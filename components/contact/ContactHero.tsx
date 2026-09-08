'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';

export default function ContactHero() {
  return (
    <section className="relative pt-36 pb-20 sm:pt-44 sm:pb-24 px-6 sm:px-8 overflow-hidden bg-white border-b border-gray-100">
      {/* Subtle background architectural tone */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 border border-red-500/20 bg-red-50/50 text-[#E31837] text-[11px] font-mono tracking-[0.25em] uppercase mb-8"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>CONTACT LORDS &amp; KINGS GROUP MANPOWER SOLUTIONS</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-[80px] font-display font-extrabold uppercase tracking-tight text-gray-900 leading-[1.05]"
        >
          Let&apos;s start a <br />
          <span className="text-[#E31837]">conversation.</span>
        </motion.h1>

        {/* Supporting text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-8 text-base sm:text-xl text-gray-600 font-normal max-w-2xl mx-auto leading-relaxed"
        >
          Whether you&apos;re looking for verified workforce talent or your next career engagement, our team is ready to assist.
        </motion.p>
      </div>
    </section>
  );
}

