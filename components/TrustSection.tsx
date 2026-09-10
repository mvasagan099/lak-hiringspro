'use client';

import React from 'react';
import { motion } from 'framer-motion';

const pillars = [
  {
    num: '01',
    title: 'Precision Sourcing',
    description: 'We identify candidates with verified competencies tailored to specific enterprise demands.',
  },
  {
    num: '02',
    title: 'Multi-Tier Vetting',
    description: 'Disciplined screening protocols ensuring candidate qualifications, background, and operational reliability.',
  },
  {
    num: '03',
    title: 'Rapid Deployment',
    description: 'Structured talent pipelines engineered to fulfill urgent, seasonal, and bulk hiring requirements on schedule.',
  },
  {
    num: '04',
    title: 'Operational Support',
    description: 'From role definition to final onboarding, our recruitment specialists manage the end-to-end lifecycle.',
  },
];

export default function TrustSection() {
  return (
    <section className="relative py-14 sm:py-24 lg:py-32 px-5 sm:px-8 border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Large Editorial Statement */}
        <div className="max-w-4xl mx-auto text-center sm:text-left">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center sm:justify-start gap-3 text-xs font-mono tracking-[0.25em] text-[#E31837] font-semibold uppercase mb-5 sm:mb-6"
          >
            <span className="w-6 sm:w-8 h-[2px] bg-[#E31837]" />
            <span>INTRODUCTION &bull; PHILOSOPHY</span>
            <span className="w-6 h-[2px] bg-[#E31837] sm:hidden" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-[70px] font-bold font-display tracking-tight text-gray-900 leading-[1.06] uppercase"
          >
            THE RIGHT PEOPLE
            <br />
            <span className="text-[#E31837]">CREATE STRONGER</span>
            <br />
            BUSINESSES.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 sm:mt-6 text-sm sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto sm:mx-0 leading-relaxed font-normal"
          >
            Lords &amp; Kings Manpower Solutions is the specialized workforce solutions division within the Lords &amp; Kings ecosystem.
            We eliminate recruitment bottlenecks by connecting expanding enterprises with qualified, dependable talent across key commercial sectors.
          </motion.p>
        </div>

        {/* 4 Pillars - Clean Corporate Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="p-8 bg-[#f8f9fa] border border-gray-200 hover:border-[#E31837] hover:bg-white hover:shadow-lg hover:shadow-red-500/5 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs tracking-[0.2em] text-[#E31837] font-semibold block mb-5">
                  {pillar.num}
                </span>
                <h3 className="text-lg font-bold font-display text-gray-900 mb-3 group-hover:text-[#E31837] transition-colors uppercase tracking-wide">
                  {pillar.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed font-normal">
                  {pillar.description}
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-gray-200 flex items-center justify-between text-[10px] font-mono tracking-widest text-gray-400">
                <span>CAPABILITY {pillar.num}</span>
                <span className="w-2 h-2 rounded-full bg-gray-300 group-hover:bg-[#E31837] transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
