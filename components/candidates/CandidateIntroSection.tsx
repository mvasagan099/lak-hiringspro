'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, HeartHandshake, FileCheck } from 'lucide-react';

const commitments = [
  {
    icon: ShieldCheck,
    title: '100% Free for Candidates',
    desc: 'We never charge job seekers any fees. Our recruitment services are entirely client-funded.',
  },
  {
    icon: FileCheck,
    title: 'Verified Corporate Employers',
    desc: 'Every opening is directly mandated by legitimate, verified corporate and industrial clients.',
  },
  {
    icon: HeartHandshake,
    title: 'Transparent Role Expectations',
    desc: 'Clear job responsibilities, fixed salary packages, defined work shifts, and workplace guidance.',
  },
];

export default function CandidateIntroSection() {
  return (
    <section className="relative py-24 sm:py-32 px-6 sm:px-8 bg-[#f8f9fa] border-t border-b border-gray-200">
      <div className="max-w-7xl mx-auto">
        {/* Large Editorial Statement */}
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 text-xs font-mono tracking-[0.25em] text-[#E31837] font-semibold uppercase mb-4"
          >
            <span className="w-8 h-[2px] bg-[#E31837]" />
            <span>OUR PHILOSOPHY</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold uppercase tracking-tight text-gray-900 leading-[1.08]"
          >
            Your skills have value.{' '}
            <br />
            <span className="text-[#E31837]">
              Let&apos;s connect them with the right opportunity.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg md:text-xl text-gray-600 font-normal leading-relaxed max-w-3xl"
          >
            L&amp;K HiringsPro acts as a direct, professional bridge between job seekers and expanding organizations.
            We take the time to understand your practical skills, certifications, and shift preferences, then introduce you to verified employers who are actively looking to hire and support dependable talent.
          </motion.p>
        </div>

        {/* 3 Core Commitments */}
        <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          {commitments.map((c, idx) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="p-8 border border-gray-200 bg-white hover:border-[#E31837] hover:shadow-lg hover:shadow-red-500/5 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 border border-red-100 bg-red-50 flex items-center justify-center text-[#E31837] group-hover:bg-[#E31837] group-hover:text-white transition-colors mb-6">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-display font-bold text-gray-900 mb-2 group-hover:text-[#E31837] transition-colors uppercase">
                    {c.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed font-normal">
                    {c.desc}
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-gray-100 flex items-center justify-between text-[11px] font-mono text-gray-400">
                  <span>STANDARD 0{idx + 1}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-[#E31837] transition-colors" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
