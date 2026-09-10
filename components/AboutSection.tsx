'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section id="about" className="relative py-14 sm:py-24 lg:py-32 px-5 sm:px-8 bg-white border-b border-gray-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Editorial Headline */}
          <div className="lg:col-span-6 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3 text-xs font-mono tracking-[0.25em] text-[#E31837] font-semibold uppercase mb-5 sm:mb-6">
              <span className="w-6 sm:w-8 h-[2px] bg-[#E31837]" />
              <span>ABOUT &bull; ETHOS</span>
              <span className="w-6 h-[2px] bg-[#E31837] lg:hidden" />
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-[72px] font-bold font-display tracking-tight text-gray-900 leading-[1.04] uppercase"
            >
              MORE THAN
              <br />
              FILLING POSITIONS.
              <br />
              <span className="text-[#E31837]">WE BUILD CONNECTIONS.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 sm:mt-10 p-6 sm:p-8 bg-[#f8f9fa] border-l-4 border-[#E31837] border-y border-r border-gray-200 text-left"
            >
              <div className="text-[10px] font-mono tracking-[0.25em] text-[#E31837] font-bold uppercase mb-2">
                A LORDS &amp; KINGS ECOSYSTEM BRAND
              </div>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                Operating within the diversified framework of the Lords &amp; Kings Group, Lords &amp; Kings Manpower Solutions brings systematic management discipline and unwavering delivery accountability to enterprise workforce operations.
              </p>
            </motion.div>
          </div>

          {/* Right Column: Grounded Philosophy Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6 text-base sm:text-lg text-gray-700 leading-relaxed font-normal pt-2"
          >
            <p>
              Lords &amp; Kings Manpower Solutions was created to address a structural business reality: organizations thrive or falter based on the dependability of the people operating their day-to-day workflows.
            </p>
            <p className="text-gray-600">
              We view recruitment not as transactional seat-filling, but as an operational partnership. By developing deep functional insight across retail, manufacturing, logistics, and technical operations, we ensure candidate capability aligns precisely with client operational tempo.
            </p>
            <p className="text-gray-600">
              For job seekers, we provide direct, transparent pathways to genuine commercial employers, eliminating informal brokerages and establishing reliable careers built on dignity and verified capability.
            </p>

            <div className="pt-8 border-t border-gray-200 grid grid-cols-2 sm:grid-cols-3 gap-6">
              <div>
                <div className="text-2xl font-bold font-display text-gray-900">100%</div>
                <div className="text-[10px] font-mono tracking-wider text-gray-500 uppercase mt-1">
                  Vetted Screening
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold font-display text-gray-900">24–48h</div>
                <div className="text-[10px] font-mono tracking-wider text-gray-500 uppercase mt-1">
                  Intake Response
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold font-display text-gray-900">Multi-City</div>
                <div className="text-[10px] font-mono tracking-wider text-gray-500 uppercase mt-1">
                  Regional Reach
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
