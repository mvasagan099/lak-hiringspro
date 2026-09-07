'use client';

import React from 'react';
import { motion } from 'framer-motion';

const principles = [
  {
    num: '01',
    word: 'UNDERSTAND',
    description: 'Understand what the business actually needs.',
    detail:
      'We look beyond standard job titles to grasp operational workflows, peak shift demands, and required hands-on competencies.',
  },
  {
    num: '02',
    word: 'CONNECT',
    description: 'Connect requirements with suitable people.',
    detail:
      'We tap our talent networks to match candidates whose capabilities, certifications, and availability align directly with the role.',
  },
  {
    num: '03',
    word: 'SUPPORT',
    description: 'Help move the recruitment process forward.',
    detail:
      'From interview scheduling and candidate briefing to offer acceptance, we keep communication timely and transparent.',
  },
  {
    num: '04',
    word: 'BUILD',
    description: 'Create meaningful connections between businesses and candidates.',
    detail:
      'We measure success by long-term dependability and workplace stability, ensuring newly placed personnel thrive.',
  },
];

export default function OurApproachSection() {
  return (
    <section className="relative py-24 sm:py-32 px-6 sm:px-8 bg-white border-t border-b border-gray-200 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 text-xs font-mono tracking-[0.25em] text-[#E31837] font-semibold uppercase mb-4"
          >
            <span className="w-8 h-[2px] bg-[#E31837]" />
            <span>OUR APPROACH</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl font-display font-bold uppercase tracking-tight text-gray-900 leading-[1.08]"
          >
            Structured around <br />
            <span className="text-[#E31837]">operational clarity.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg text-gray-600 font-normal leading-relaxed max-w-2xl"
          >
            Our core approach is grounded in simplicity, direct communication, and strict respect for both business requirements and candidate careers.
          </motion.p>
        </div>

        {/* 4 Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {principles.map((p, idx) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: idx * 0.1 }}
              className="p-8 sm:p-10 border border-gray-200 bg-[#f8f9fa] hover:border-[#E31837] hover:bg-white hover:shadow-lg hover:shadow-red-500/5 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-gray-200 mb-6">
                  <span className="font-mono text-sm font-bold text-[#E31837]">
                    0{idx + 1}
                  </span>
                  <span className="text-xs font-mono tracking-widest text-gray-400 uppercase">
                    PRINCIPLE
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-display font-bold text-gray-900 mb-3 group-hover:text-[#E31837] transition-colors uppercase">
                  {p.word}
                </h3>

                <p className="text-base font-semibold text-gray-800 mb-2">
                  {p.description}
                </p>

                <p className="text-sm text-gray-600 leading-relaxed font-normal">
                  {p.detail}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-200 flex items-center justify-between text-[11px] font-mono text-gray-400">
                <span>FOUNDATION</span>
                <span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-[#E31837] transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
