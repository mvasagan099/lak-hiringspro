'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const steps = [
  {
    step: '01',
    title: 'UNDERSTAND',
    desc: 'Understand the business requirement.',
    detail: 'Detailed operational intake covering role profiles, deployment targets, skill requisites, and compliance criteria.',
  },
  {
    step: '02',
    title: 'SOURCE',
    desc: 'Identify suitable candidates.',
    detail: 'Targeted outreach through specialized candidate talent pools, regional pipelines, and verified talent networks.',
  },
  {
    step: '03',
    title: 'SCREEN',
    desc: 'Review candidates against the requirement.',
    detail: 'Strict background checks, document verification, and operational competency assessment against client standards.',
  },
  {
    step: '04',
    title: 'SHORTLIST',
    desc: 'Present suitable candidates.',
    detail: 'Pre-qualified candidate dossiers presented directly to hiring managers for streamlined interview review.',
  },
  {
    step: '05',
    title: 'CONNECT',
    desc: 'Coordinate the next stage.',
    detail: 'Interview scheduling, operational briefing, expectations alignment, and immediate feedback coordination.',
  },
  {
    step: '06',
    title: 'HIRE',
    desc: 'Support the hiring journey.',
    detail: 'Offer facilitation, joining documentation, and day-one deployment support to ensure dependable workforce readiness.',
  },
];

export default function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 60%', 'end 70%'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section
      ref={containerRef}
      className="relative py-14 sm:py-24 lg:py-32 px-5 sm:px-8 bg-white border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Eyebrow & Headline */}
        <div className="max-w-3xl mx-auto lg:mx-0 text-center lg:text-left mb-12 sm:mb-20">
          <div className="flex items-center justify-center lg:justify-start gap-3 text-xs font-mono tracking-[0.25em] text-[#E31837] font-semibold uppercase mb-4">
            <span className="w-6 sm:w-8 h-[2px] bg-[#E31837]" />
            <span>METHODOLOGY &bull; TIMELINE</span>
            <span className="w-6 h-[2px] bg-[#E31837] lg:hidden" />
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold font-display tracking-tight text-gray-900 uppercase leading-[1.06]">
            THE RECRUITMENT <span className="text-[#E31837]">JOURNEY.</span>
          </h2>

          <p className="mt-4 sm:mt-5 text-sm sm:text-lg text-gray-600 font-normal leading-relaxed">
            A disciplined, 6-stage operational pipeline engineered to eliminate hiring friction, ensure candidate verification, and deliver dependable day-one readiness.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Progress Line (Desktop Track) */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-[2px] bg-gray-200">
            <motion.div
              style={{ width: lineHeight }}
              className="h-full bg-[#E31837]"
            />
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative z-10">
            {steps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="p-6 bg-[#f8f9fa] border border-gray-200 hover:border-[#E31837] hover:bg-white hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Step Node */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-sm tracking-widest text-[#E31837] font-bold">
                      {item.step}
                    </span>
                    <div className="w-3 h-3 rounded-full border-2 border-gray-300 bg-white group-hover:border-[#E31837] group-hover:bg-[#E31837] transition-colors" />
                  </div>

                  <h3 className="text-lg font-bold font-display text-gray-900 mb-2 group-hover:text-[#E31837] transition-colors tracking-wide">
                    {item.title}
                  </h3>

                  <p className="text-xs font-semibold text-gray-800 mb-2 leading-relaxed">
                    {item.desc}
                  </p>

                  <p className="text-xs text-gray-500 leading-relaxed font-normal">
                    {item.detail}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-gray-200 text-[9px] font-mono tracking-widest text-gray-400 uppercase">
                  PHASE 0{index + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
