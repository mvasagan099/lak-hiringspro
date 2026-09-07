'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ValueItem {
  id: string;
  num: string;
  name: string;
  tagline: string;
  detail: string;
}

const valuesList: ValueItem[] = [
  {
    id: 'people-first',
    num: '01',
    name: 'PEOPLE FIRST',
    tagline: 'Prioritizing genuine human capability over mere paperwork.',
    detail:
      'We treat every applicant and team member with dignity, recognizing individual talents, workplace well-being, and genuine potential.',
  },
  {
    id: 'respect',
    num: '02',
    name: 'RESPECT',
    tagline: 'Transparent communication across both sides of the table.',
    detail:
      'Timely feedback, clear expectation setting, and mutual consideration form the foundation of our client and candidate relationships.',
  },
  {
    id: 'reliability',
    num: '03',
    name: 'RELIABILITY',
    tagline: 'Consistent follow-through when operational demands are high.',
    detail:
      'We stand behind our commitments, delivering dependable workforce solutions that businesses can trust shift after shift.',
  },
  {
    id: 'professionalism',
    num: '04',
    name: 'PROFESSIONALISM',
    tagline: 'Uncompromising rigor in vetting and ethical engagement.',
    detail:
      'From identity verification and skill checks to confidential briefing, we maintain strict compliance and ethical standards.',
  },
  {
    id: 'growth',
    num: '05',
    name: 'GROWTH',
    tagline: 'Enabling business scale while advancing careers.',
    detail:
      'A true recruitment partnership creates upward career mobility for individuals and operational expansion for enterprises.',
  },
  {
    id: 'connection',
    num: '06',
    name: 'CONNECTION',
    tagline: 'The bridge uniting operational demand with talent looking for opportunity.',
    detail:
      'We view every introduction not as a transaction, but as a bridge connecting immediate requirements with long-term human potential.',
  },
];

export default function ImmersiveValuesSection() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <section className="relative py-24 sm:py-32 px-6 sm:px-8 bg-[#f8f9fa] border-t border-b border-gray-200 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-3 text-xs font-mono tracking-[0.25em] text-[#E31837] font-semibold uppercase mb-4">
            <span className="w-8 h-[2px] bg-[#E31837]" />
            <span>CORE VALUES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold uppercase tracking-tight text-gray-900 leading-[1.08]">
            The values that guide <br />
            <span className="text-[#E31837]">our decisions.</span>
          </h2>
        </div>

        {/* 6 Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {valuesList.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="p-8 border border-gray-200 bg-white hover:border-[#E31837] hover:shadow-lg hover:shadow-red-500/5 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-6">
                  <span className="font-mono text-sm font-bold text-[#E31837]">
                    {item.num}
                  </span>
                  <span className="text-[10px] font-mono tracking-widest text-gray-400 uppercase">
                    VALUE
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-display font-bold text-gray-900 mb-2 group-hover:text-[#E31837] transition-colors uppercase">
                  {item.name}
                </h3>

                <p className="text-xs font-semibold text-gray-800 mb-3 leading-relaxed">
                  {item.tagline}
                </p>

                <p className="text-sm text-gray-600 leading-relaxed font-normal">
                  {item.detail}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-100 flex items-center justify-between text-[10px] font-mono text-gray-400 uppercase">
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
