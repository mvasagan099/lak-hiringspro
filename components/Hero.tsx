'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import HeroBackground from './HeroBackground';

interface HeroProps {
  onOpenHireModal: () => void;
  onOpenCandidateModal: () => void;
}

export default function Hero({ onOpenHireModal, onOpenCandidateModal }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center pt-28 sm:pt-36 pb-20 px-6 sm:px-8 overflow-hidden bg-white"
    >
      {/* Architectural Background with modern corridor photo and gradient overlay */}
      <HeroBackground />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <motion.div style={{ y, opacity }} className="max-w-3xl mx-auto sm:mx-0 text-center sm:text-left">
          {/* 1. Red Eyebrow Indicator matching lordsandkings.co */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-center sm:justify-start gap-3 mb-5 sm:mb-6"
          >
            <span className="w-8 sm:w-10 h-[2px] bg-[#E31837]" />
            <span className="text-xs font-bold font-mono tracking-[0.25em] text-[#E31837] uppercase">
              LORDS &amp; KINGS GROUP
            </span>
            <span className="w-8 h-[2px] bg-[#E31837] sm:hidden" />
          </motion.div>

          {/* 2. Bold High-Impact Headline matching screenshot */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-bold tracking-tight text-gray-900 font-display leading-[1.08] sm:leading-[1.04] uppercase text-center sm:text-left"
          >
            Building the
            <br />
            <span className="text-[#E31837]">Future</span> of
            <br />
            Workforce.
          </motion.h1>

          {/* 3. Subtitle / Value Proposition */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 sm:mt-6 text-sm sm:text-lg md:text-xl text-gray-600 font-normal max-w-2xl mx-auto sm:mx-0 leading-relaxed text-center sm:text-left"
          >
            A diversified workforce division driving operational excellence across Agriculture,
            Logistics, Retail, Manufacturing, and Technology — connecting enterprises with dependable talent.
          </motion.p>

          {/* 4. CTA Buttons matching screenshot (Solid Red primary + Dark border secondary) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-3.5 sm:gap-4 w-full sm:w-auto"
          >
            <button
              onClick={onOpenHireModal}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#E31837] hover:bg-[#c4122d] text-white text-sm font-semibold tracking-wide transition-all shadow-sm active:scale-95"
            >
              <span>Explore Workforce</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenCandidateModal}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border border-gray-900 hover:bg-gray-900 hover:text-white text-gray-900 text-sm font-semibold tracking-wide transition-all active:scale-95"
            >
              <span>Candidate Careers</span>
            </button>
          </motion.div>

          {/* 5. Metrics Line matching screenshot */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 sm:mt-14 pt-8 border-t border-gray-200 grid grid-cols-3 sm:grid-cols-4 gap-4 sm:gap-6 max-w-2xl mx-auto sm:mx-0 text-center sm:text-left"
          >
            <div>
              <div className="text-2xl sm:text-3xl font-bold font-display text-gray-900">8+</div>
              <div className="text-[10px] sm:text-xs font-semibold tracking-wider text-gray-500 uppercase mt-0.5">
                YEARS
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold font-display text-gray-900">4</div>
              <div className="text-[10px] sm:text-xs font-semibold tracking-wider text-gray-500 uppercase mt-0.5">
                DIVISIONS
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold font-display text-gray-900">50+</div>
              <div className="text-[10px] sm:text-xs font-semibold tracking-wider text-gray-500 uppercase mt-0.5">
                PARTNERS
              </div>
            </div>
            <div className="hidden sm:block">
              <div className="text-2xl sm:text-3xl font-bold font-display text-gray-900">98%</div>
              <div className="text-[10px] sm:text-xs font-semibold tracking-wider text-gray-500 uppercase mt-0.5">
                RETENTION
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* 6. Scroll Cue matching screenshot */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none">
        <span className="text-[9px] font-mono tracking-[0.3em] uppercase text-gray-400 font-semibold">
          SCROLL
        </span>
        <div className="w-[1.5px] h-6 bg-[#E31837] mt-1.5" />
      </div>
    </section>
  );
}
