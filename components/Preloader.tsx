'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onComplete?: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [stage, setStage] = useState<'lords' | 'hiringspro' | 'done'>('lords');

  useEffect(() => {
    // Check if prefers-reduced-motion is enabled
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setStage('done');
      onComplete?.();
      return;
    }

    // Stage 1: "LORDS & KINGS" with red pill logo for 800ms
    const timer1 = setTimeout(() => {
      setStage('hiringspro');
    }, 800);

    // Stage 2: "LORDS & KINGS MANPOWER SOLUTIONS" for 800ms, then finish
    const timer2 = setTimeout(() => {
      setStage('done');
      onComplete?.();
    }, 1700);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {stage !== 'done' && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white overflow-hidden"
        >
          {/* Subtle Ambient Red Glow */}
          <div className="absolute w-[500px] h-[500px] rounded-full bg-[#E31837]/[0.03] blur-[120px] pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center justify-center px-6 text-center">
            {/* Animated Red Line */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="w-16 h-[2px] bg-[#E31837] mb-8"
            />

            {/* Stage Content */}
            <div className="h-24 flex items-center justify-center relative">
              <AnimatePresence mode="wait">
                {stage === 'lords' && (
                  <motion.div
                    key="lords"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col items-center gap-3"
                  >
                    <div className="relative h-12 w-auto">
                      <Image
                        src="/lords-and-kings-logo.png"
                        alt="Lords & Kings Group"
                        width={160}
                        height={48}
                        className="h-full w-auto object-contain"
                        priority
                      />
                    </div>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gray-500 font-mono">
                      ENTERPRISE ECOSYSTEM
                    </span>
                  </motion.div>
                )}

                {stage === 'hiringspro' && (
                  <motion.div
                    key="hiringspro"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col items-center"
                  >
                    <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#E31837] mb-1 font-mono">
                      WORKFORCE &amp; RECRUITMENT
                    </span>
                    <h1 className="text-lg sm:text-2xl md:text-3xl font-bold tracking-[0.1em] uppercase text-gray-900 font-display text-center max-w-xl">
                      LORDS &amp; KINGS MANPOWER SOLUTIONS
                    </h1>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Progress line */}
            <div className="w-48 h-[2px] bg-gray-100 mt-8 overflow-hidden relative">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 1.4, ease: 'easeInOut', repeat: 0 }}
                className="w-full h-full bg-[#E31837]"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
