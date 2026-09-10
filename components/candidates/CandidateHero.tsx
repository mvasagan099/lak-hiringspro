'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, MessageSquare } from 'lucide-react';
import CandidateHeroBackground from './CandidateHeroBackground';
import { CONTACT_INFO } from '@/lib/constants';

interface CandidateHeroProps {
  onOpenCandidateModal: () => void;
}

export default function CandidateHero({ onOpenCandidateModal }: CandidateHeroProps) {
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
      className="relative min-h-[80vh] lg:min-h-screen flex items-center justify-center pt-28 sm:pt-36 pb-14 sm:pb-20 px-5 sm:px-8 overflow-hidden bg-white"
    >
      <CandidateHeroBackground />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-5xl mx-auto w-full flex flex-col items-center text-center mt-2 sm:mt-4 lg:mt-8"
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-[11px] sm:text-xs font-mono tracking-[0.2em] sm:tracking-[0.25em] text-[#E31837] font-semibold uppercase mb-4 sm:mb-6"
        >
          <span className="w-6 sm:w-8 h-[2px] bg-[#E31837]" />
          <span>LORDS &amp; KINGS GROUP MANPOWER SOLUTIONS &bull; CANDIDATES</span>
          <span className="w-6 sm:w-8 h-[2px] bg-[#E31837]" />
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-display font-bold uppercase tracking-tight text-gray-900 leading-[1.06] sm:leading-[1.05] max-w-4xl"
        >
          Your next opportunity <br />
          <span className="text-[#E31837]">starts here.</span>
        </motion.h1>

        {/* Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 sm:mt-6 text-sm sm:text-lg md:text-xl text-gray-600 font-normal max-w-2xl leading-relaxed"
        >
          Connect directly with verified enterprise employers across retail, logistics, manufacturing, and commercial sectors. No agency fees, clear compensation, and dependable career paths.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <button
            onClick={onOpenCandidateModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-xs font-semibold tracking-[0.14em] uppercase text-white bg-[#E31837] hover:bg-[#c4122d] transition-all shadow-sm active:scale-95"
          >
            <span>Register Profile</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <a
            href={`https://wa.me/${CONTACT_INFO.phoneRaw.replace('+', '')}?text=Hello%20Lords%20%26%20Kings%20Group%20Manpower%20Solutions,%20I%20am%20looking%20for%20job%20opportunities`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-xs font-semibold tracking-[0.14em] uppercase text-gray-900 bg-white border border-gray-900 hover:bg-gray-900 hover:text-white transition-all active:scale-95"
          >
            <MessageSquare className="w-4 h-4 text-green-600" />
            <span>Connect on WhatsApp</span>
          </a>
        </motion.div>

        {/* Scroll Cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 flex flex-col items-center gap-1.5 text-gray-400"
        >
          <span className="text-[10px] font-mono tracking-[0.25em] uppercase font-semibold">CANDIDATE JOURNEY</span>
          <div className="w-[1.5px] h-6 bg-[#E31837] mt-1" />
        </motion.div>
      </motion.div>
    </section>
  );
}
