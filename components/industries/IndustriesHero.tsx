'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import IndustriesHeroBackground from './IndustriesHeroBackground';

export default function IndustriesHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[85vh] lg:min-h-[92vh] flex items-center justify-center pt-32 pb-20 px-6 sm:px-8 overflow-hidden bg-white"
    >
      <IndustriesHeroBackground />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-5xl mx-auto w-full flex flex-col items-center text-center mt-4 lg:mt-8"
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 text-xs font-mono tracking-[0.25em] text-[#E31837] font-semibold uppercase mb-6"
        >
          <span className="w-8 h-[2px] bg-[#E31837]" />
          <span>LORDS &amp; KINGS MANPOWER SOLUTIONS &bull; INDUSTRY DIVISIONS</span>
          <span className="w-8 h-[2px] bg-[#E31837]" />
        </motion.div>

        {/* Oversized Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-[84px] font-display font-bold uppercase tracking-tight text-gray-900 leading-[1.02] max-w-4xl"
        >
          People power <br />
          <span className="text-[#E31837]">every industry.</span>
        </motion.h1>

        {/* Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 text-base sm:text-lg md:text-xl text-gray-600 font-normal max-w-2xl leading-relaxed"
        >
          Connecting businesses with verified workforce solutions across a comprehensive range of vital commercial sectors.
        </motion.p>

        {/* Scroll Cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 flex flex-col items-center gap-1.5 text-gray-400"
        >
          <span className="text-[10px] font-mono tracking-[0.25em] uppercase font-semibold">EXPLORE SECTORS</span>
          <div className="w-[1.5px] h-6 bg-[#E31837] mt-1" />
        </motion.div>
      </motion.div>
    </section>
  );
}
