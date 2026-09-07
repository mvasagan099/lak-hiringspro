'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function BrandStatementSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'center center'],
  });

  const opacityA = useTransform(scrollYProgress, [0, 0.45], [0.3, 1]);
  const opacityB = useTransform(scrollYProgress, [0.4, 0.9], [0.2, 1]);
  const yB = useTransform(scrollYProgress, [0.4, 0.9], [25, 0]);

  return (
    <section
      ref={containerRef}
      className="relative py-28 sm:py-36 px-6 sm:px-8 bg-[#f8f9fa] border-t border-b border-gray-200 overflow-hidden"
    >
      {/* Subtle red center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#E31837]/[0.02] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="flex items-center gap-3 text-xs font-mono tracking-[0.25em] text-[#E31837] uppercase mb-8 font-semibold">
          <span className="w-8 h-[2px] bg-[#E31837]" />
          <span>OUR PHILOSOPHY</span>
        </div>

        {/* Primary Thought */}
        <motion.h2
          style={{ opacity: opacityA }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold uppercase tracking-tight text-gray-900 leading-[1.08]"
        >
          More than <br />
          <span className="text-gray-400">filling positions.</span>
        </motion.h2>

        {/* Secondary Revealed Thought */}
        <motion.div
          style={{ opacity: opacityB, y: yB }}
          className="mt-12 sm:mt-16 pt-10 sm:pt-14 border-t border-gray-200"
        >
          <p className="text-2xl sm:text-4xl md:text-5xl font-display font-bold uppercase tracking-tight text-gray-900 leading-[1.15]">
            We build <span className="text-[#E31837]">connections.</span>
          </p>
          <p className="mt-6 text-base sm:text-lg text-gray-600 font-normal leading-relaxed max-w-2xl">
            Connecting a business that needs dependable operational talent with a person seeking the right opportunity to perform, grow, and take pride in their work.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
