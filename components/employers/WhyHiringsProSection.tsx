'use client';

import React from 'react';
import { motion } from 'framer-motion';

const reasons = [
  {
    num: '01',
    title: 'Focused Vertical Sourcing',
    tag: 'ALIGNMENT',
    description:
      'We assign specialized recruiters focused specifically on your industry vertical. Recommendations reflect real-world requirements rather than broad keyword searches.',
  },
  {
    num: '02',
    title: 'Rigorous Candidate Screening',
    tag: 'INTEGRITY',
    description:
      'Every applicant undergoes structured background checks, employment verification, and practical skills evaluation before being presented for interview.',
  },
  {
    num: '03',
    title: 'Adaptive Workforce Capacity',
    tag: 'ADAPTABILITY',
    description:
      'From single specialist vacancies to multi-shift bulk hiring campaigns, our sourcing capacity scales to match your business calendar and operational deadlines.',
  },
  {
    num: '04',
    title: 'Operational Continuity',
    tag: 'PARTNERSHIP',
    description:
      'We prioritize operational continuity, punctuality, and culture alignment to ensure newly placed personnel integrate smoothly into active shift rosters.',
  },
];

export default function WhyHiringsProSection() {
  return (
    <section className="relative py-24 sm:py-32 px-6 sm:px-8 bg-[#f8f9fa] border-b border-gray-200">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-4xl mb-16 sm:mb-20">
          <div className="flex items-center gap-3 text-xs font-mono tracking-[0.25em] text-[#E31837] font-semibold uppercase mb-4">
            <span className="w-8 h-[2px] bg-[#E31837]" />
            <span>STANDARDS &bull; OPERATIONAL DISCIPLINE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold font-display tracking-tight text-gray-900 uppercase leading-[1.06]">
            BUILT ON OPERATIONAL RIGOR, <br />
            <span className="text-[#E31837]">NOT RECRUITMENT GUESSWORK.</span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-gray-600 font-normal leading-relaxed max-w-2xl">
            As the workforce brand within the Lords &amp; Kings ecosystem, we bring enterprise governance and transparent accountability to every hiring mandate.
          </p>
        </div>

        {/* 4 Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="p-8 bg-white border border-gray-200 hover:border-[#E31837] hover:shadow-lg hover:shadow-red-500/5 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100">
                  <span className="font-mono text-sm font-bold text-[#E31837] tracking-wider">
                    {item.num}
                  </span>
                  <span className="text-[10px] font-mono tracking-widest text-gray-400 uppercase">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-lg font-bold font-display text-gray-900 mb-3 group-hover:text-[#E31837] transition-colors uppercase">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-100 flex items-center justify-between text-[10px] font-mono tracking-widest text-gray-400 uppercase">
                <span>COMMITMENT {item.num}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-[#E31837] transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
