'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';
import EmployerHeroBackground from './EmployerHeroBackground';

interface EmployerHeroProps {
  onOpenHireModal: () => void;
}

export default function EmployerHero({ onOpenHireModal }: EmployerHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center pt-32 pb-20 px-6 sm:px-8 overflow-hidden bg-white"
    >
      <EmployerHeroBackground />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-5xl mx-auto w-full flex flex-col items-center text-center mt-4 lg:mt-8"
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 text-xs font-mono tracking-[0.25em] text-[#E31837] font-semibold uppercase mb-6"
        >
          <span className="w-8 h-[2px] bg-[#E31837]" />
          <span>LORDS &amp; KINGS GROUP &bull; FOR ENTERPRISES</span>
          <span className="w-8 h-[2px] bg-[#E31837]" />
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-bold tracking-tight text-gray-900 font-display leading-[1.04] max-w-4xl uppercase"
        >
          BUILD THE TEAM
          <br />
          <span className="text-[#E31837]">THAT MOVES YOUR BUSINESS FORWARD.</span>
        </motion.h1>

        {/* Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 text-base sm:text-lg md:text-xl text-gray-600 font-normal max-w-2xl leading-relaxed"
        >
          Tell us what your business needs. Lords &amp; Kings Group Manpower Solutions connects you with dependable, pre-verified workforce talent across critical commercial sectors.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <button
            onClick={onOpenHireModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-xs font-semibold tracking-[0.14em] uppercase text-white bg-[#E31837] hover:bg-[#c4122d] transition-all shadow-sm active:scale-95"
          >
            <span>Request Hiring Support</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <a
            href={CONTACT_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-xs font-semibold tracking-[0.14em] uppercase text-gray-900 bg-white border border-gray-900 hover:bg-gray-900 hover:text-white transition-all active:scale-95"
          >
            <span>WhatsApp Operations Desk</span>
          </a>
        </motion.div>

        {/* Scroll Cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 flex flex-col items-center gap-1.5 text-gray-400"
        >
          <span className="text-[10px] font-mono tracking-[0.25em] uppercase font-semibold">EXPLORE SOLUTIONS</span>
          <div className="w-[1.5px] h-6 bg-[#E31837] mt-1" />
        </motion.div>
      </motion.div>
    </section>
  );
}
