'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, History, Clock, MessageCircle, BookOpen, ShieldCheck } from 'lucide-react';

const qualities = [
  {
    name: 'Skills',
    icon: Wrench,
    tagline: 'Practical Capability',
    desc: 'Hands-on operational knowledge, technical competency, and tool/equipment handling ability.',
    orbit: 'lg:translate-y-0',
    delay: 0,
  },
  {
    name: 'Experience',
    icon: History,
    tagline: 'Proven Background',
    desc: 'Verified track record of responsibility and familiar workplace workflows.',
    orbit: 'lg:translate-y-6',
    delay: 0.08,
  },
  {
    name: 'Reliability',
    icon: Clock,
    tagline: 'Dependable Execution',
    desc: 'Consistent attendance, shift punctuality, and steady dedication to daily goals.',
    orbit: 'lg:-translate-y-4',
    delay: 0.12,
  },
  {
    name: 'Communication',
    icon: MessageCircle,
    tagline: 'Team Coordination',
    desc: 'Clear, respectful dialogue with colleagues, shift supervisors, and clients.',
    orbit: 'lg:translate-y-4',
    delay: 0.16,
  },
  {
    name: 'Willingness to Learn',
    icon: BookOpen,
    tagline: 'Growth Mindset',
    desc: 'Adaptability to new operational procedures, safety guidelines, and workplace tools.',
    orbit: 'lg:-translate-y-2',
    delay: 0.2,
  },
  {
    name: 'Professionalism',
    icon: ShieldCheck,
    tagline: 'Workplace Integrity',
    desc: 'Pride in work output, adherence to safety rules, and respectful workplace conduct.',
    orbit: 'lg:translate-y-2',
    delay: 0.24,
  },
];

export default function CandidateQualitiesSection() {
  return (
    <section className="relative py-24 sm:py-32 px-6 sm:px-8 bg-[#f8f9fa] border-b border-gray-200 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 text-xs font-mono tracking-[0.25em] text-[#E31837] font-semibold uppercase mb-4"
          >
            <span className="w-8 h-[2px] bg-[#E31837]" />
            <span>CANDIDATE QUALITIES</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl font-display font-bold uppercase tracking-tight text-gray-900 leading-[1.08]"
          >
            What employers <br />
            <span className="text-[#E31837]">value most.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg text-gray-600 leading-relaxed font-normal max-w-2xl"
          >
            Beyond certificates and resume titles, dependable employers prioritize candidates who demonstrate consistency, practical ability, and a collaborative mindset.
          </motion.p>
        </div>

        {/* Quality Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {qualities.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: item.delay }}
                className={`p-8 border border-gray-200 bg-white hover:border-[#E31837] hover:shadow-lg hover:shadow-red-500/5 transition-all duration-300 flex flex-col justify-between group ${item.orbit}`}
              >
                <div>
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-11 h-11 border border-red-100 bg-red-50 flex items-center justify-center text-[#E31837] group-hover:bg-[#E31837] group-hover:text-white transition-all">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono tracking-[0.2em] uppercase px-3 py-1 bg-red-50 border border-red-200 text-[#E31837] font-bold">
                      TRAIT 0{idx + 1}
                    </span>
                  </div>

                  <span className="text-xs font-mono uppercase text-[#E31837] font-semibold tracking-wider block mb-1">
                    {item.tagline}
                  </span>

                  <h3 className="text-xl font-display font-bold text-gray-900 mb-3 group-hover:text-[#E31837] transition-colors uppercase">
                    {item.name}
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-[11px] font-mono text-gray-400">
                  <span>ESSENTIAL FACTOR</span>
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
