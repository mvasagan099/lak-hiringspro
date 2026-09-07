'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileSpreadsheet, Users, Filter, CalendarCheck, Award, ArrowRight } from 'lucide-react';

const pipelineStages = [
  {
    step: '01',
    title: 'Understand Your Requirement',
    icon: FileSpreadsheet,
    tagline: 'Precision Role Scoping',
    description:
      'We conduct a deep operational intake with your hiring team to map out necessary technical capabilities, shift expectations, cultural dynamics, and volume milestones.',
    deliverables: [
      'Comprehensive role competency matrix',
      'Target salary and shift benchmarking',
      'Defined sourcing timeline and delivery SLAs',
    ],
  },
  {
    step: '02',
    title: 'Source Candidates',
    icon: Users,
    tagline: 'Active & Passive Pipeline Outreach',
    description:
      'Our recruitment specialists activate proprietary candidate pools, industry-specific channels, and regional hiring centers to engage matching talent.',
    deliverables: [
      'Proprietary talent pool matching',
      'Geographic and shift-specific targeting',
      'Immediate candidate availability verification',
    ],
  },
  {
    step: '03',
    title: 'Screen & Shortlist',
    icon: Filter,
    tagline: 'Multi-Tier Qualification',
    description:
      'Every candidate undergoes rigorous pre-qualification, including work history validation, operational skill tests, and background verification before introduction.',
    deliverables: [
      'Preliminary telephonic & technical screening',
      'Prior employment and document verification',
      'Curated shortlist dossier per candidate',
    ],
  },
  {
    step: '04',
    title: 'Coordinate Interviews',
    icon: CalendarCheck,
    tagline: 'Seamless Calendar Execution',
    description:
      'We handle all interview scheduling logistics, briefing candidates thoroughly on your company and role expectations to ensure high attendance and focused interviews.',
    deliverables: [
      'Synchronized interview scheduling',
      'Candidate pre-interview briefing',
      'Prompt post-interview feedback loop',
    ],
  },
  {
    step: '05',
    title: 'Support the Hiring Process',
    icon: Award,
    tagline: 'Placement & Day-One Success',
    description:
      'We facilitate offer acceptance, document collection, and coordinate joining day logistics to minimize drop-offs and ensure dependable arrival.',
    deliverables: [
      'Offer alignment and document collection',
      'Day-one reporting coordination',
      'Post-placement check-ins for stability',
    ],
  },
];

export default function RecruitmentPipelineSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="relative py-24 sm:py-32 px-6 sm:px-8 bg-white border-b border-gray-200 overflow-hidden">
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
            <span>OUR APPROACH</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-gray-900 leading-[1.08] uppercase"
          >
            A simpler, more disciplined <br />
            <span className="text-[#E31837]">way to hire.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg text-gray-600 leading-relaxed font-normal max-w-2xl"
          >
            Our structured 5-stage recruitment pipeline transforms uncertain hiring into a disciplined, transparent, and predictable operational workflow.
          </motion.p>
        </div>

        {/* Interactive Pipeline Track: Desktop Horizontal & Details View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Step navigation selector */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {pipelineStages.map((stage, idx) => {
              const Icon = stage.icon;
              const isActive = activeStep === idx;
              return (
                <button
                  key={stage.step}
                  onClick={() => setActiveStep(idx)}
                  className={`text-left p-5 border transition-all duration-200 flex items-center justify-between group ${
                    isActive
                      ? 'bg-red-50/50 border-[#E31837] shadow-sm'
                      : 'bg-[#f8f9fa] border-gray-200 hover:border-[#E31837] hover:bg-white'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`font-mono text-sm font-bold tracking-wider ${
                        isActive ? 'text-[#E31837]' : 'text-gray-400 group-hover:text-[#E31837]'
                      }`}
                    >
                      {stage.step}
                    </span>
                    <div>
                      <h3
                        className={`text-base font-display font-bold uppercase ${
                          isActive ? 'text-gray-900' : 'text-gray-700 group-hover:text-gray-900'
                        }`}
                      >
                        {stage.title}
                      </h3>
                      <span className="text-xs text-gray-500 block mt-0.5 font-normal">
                        {stage.tagline}
                      </span>
                    </div>
                  </div>

                  <div
                    className={`w-8 h-8 flex items-center justify-center transition-colors border ${
                      isActive
                        ? 'bg-[#E31837] text-white border-[#E31837]'
                        : 'bg-white border-gray-300 text-gray-400 group-hover:text-[#E31837] group-hover:border-[#E31837]'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Active Stage Highlight Showcase */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {(() => {
                const current = pipelineStages[activeStep];
                const Icon = current.icon;
                return (
                  <motion.div
                    key={current.step}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="p-8 sm:p-10 border border-gray-200 bg-[#f8f9fa] relative overflow-hidden shadow-sm"
                  >
                    <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-200">
                      <div>
                        <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#E31837] font-bold block mb-1">
                          STAGE {current.step} OF 05
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-display font-bold text-gray-900 uppercase">
                          {current.title}
                        </h3>
                      </div>
                      <div className="w-12 h-12 bg-red-50 border border-red-200 flex items-center justify-center text-[#E31837]">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8 font-normal">
                      {current.description}
                    </p>

                    <div className="space-y-3 pt-6 border-t border-gray-200">
                      <span className="text-xs font-mono uppercase text-[#E31837] font-semibold tracking-wider block mb-3">
                        Operational Deliverables:
                      </span>
                      {current.deliverables.map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#E31837]" />
                          <span className="text-sm text-gray-700 font-normal">{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Next step prompt */}
                    <div className="mt-10 pt-6 border-t border-gray-200 flex items-center justify-between">
                      <span className="text-xs font-mono text-gray-500">
                        Select any stage or click next
                      </span>
                      <button
                        onClick={() => setActiveStep((prev) => (prev + 1) % pipelineStages.length)}
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-[#E31837] hover:text-[#c4122d] transition-colors uppercase font-bold tracking-widest"
                      >
                        <span>Next Stage</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </motion.div>
                );
              })()}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
