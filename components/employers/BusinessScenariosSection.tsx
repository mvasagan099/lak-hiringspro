'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Users2, Crosshair, ArrowUpRight } from 'lucide-react';

interface BusinessScenariosProps {
  onSelectScenario: (scenarioTitle: string) => void;
}

const scenarios = [
  {
    title: '“I need people quickly.”',
    badge: 'URGENT REQUIREMENT',
    icon: Zap,
    timeline: 'Rapid Turnaround',
    description:
      'Unplanned vacancies, sudden client order surges, or immediate operational backfills. We activate pre-screened candidate benches to deliver qualified talent without customary multi-week delays.',
    features: [
      'Pre-vetted talent pool activation',
      'Accelerated telephone screening',
      'Same-week interview scheduling',
    ],
    ctaText: 'Request Fast-Track Sourcing',
  },
  {
    title: '“I need multiple people.”',
    badge: 'VOLUME SCALE-UP',
    icon: Users2,
    timeline: 'Batch Recruitment',
    description:
      'Facility expansions, seasonal retail surges, new distribution centers, or scaled shift models. We manage end-to-end bulk recruitment campaigns with coordinated mass interviews and phased onboarding.',
    features: [
      'Dedicated recruitment project manager',
      'Batch screening and document verification',
      'Structured day-one group onboarding',
    ],
    ctaText: 'Plan Bulk Hiring Campaign',
  },
  {
    title: '“I need the right person for a specific role.”',
    badge: 'TARGETED SEARCH',
    icon: Crosshair,
    timeline: 'Precision Matching',
    description:
      'Specialized technicians, floor supervisors, technical leads, or bilingual client executives. We conduct focused headhunting to evaluate both domain competencies and operational culture alignment.',
    features: [
      'In-depth competency benchmarking',
      'Technical assessment review',
      'Customized candidate presentation dossier',
    ],
    ctaText: 'Initiate Targeted Search',
  },
];

export default function BusinessScenariosSection({ onSelectScenario }: BusinessScenariosProps) {
  return (
    <section className="relative py-24 sm:py-32 px-6 sm:px-8 bg-white border-b border-gray-200">
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
            <span>OPERATIONAL SCENARIOS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-gray-900 leading-[1.08] uppercase"
          >
            Hiring designed around <br />
            <span className="text-[#E31837]">your immediate situation.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg text-gray-600 leading-relaxed font-normal max-w-2xl"
          >
            No two hiring challenges are identical. Select the scenario that reflects your present operational demand, and our team will tailor the delivery strategy accordingly.
          </motion.p>
        </div>

        {/* 3 Scenario Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {scenarios.map((scenario, idx) => {
            const Icon = scenario.icon;
            return (
              <motion.div
                key={scenario.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                className="p-8 sm:p-9 border border-gray-200 bg-[#f8f9fa] hover:border-[#E31837] hover:bg-white hover:shadow-lg hover:shadow-red-500/5 flex flex-col justify-between group transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
                    <span className="text-[10px] font-mono tracking-[0.2em] uppercase px-3 py-1 bg-red-50 border border-red-200 text-[#E31837] font-bold">
                      {scenario.badge}
                    </span>
                    <div className="w-10 h-10 border border-gray-200 bg-white flex items-center justify-center text-[#E31837] group-hover:bg-[#E31837] group-hover:text-white group-hover:border-[#E31837] transition-all">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-display font-bold text-gray-900 mb-4 leading-snug group-hover:text-[#E31837] transition-colors uppercase">
                    {scenario.title}
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed mb-6 font-normal">
                    {scenario.description}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-gray-200 mb-8">
                    {scenario.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-xs text-gray-700 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E31837] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => onSelectScenario(scenario.title)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 border border-gray-900 hover:bg-gray-900 hover:text-white bg-white text-gray-900 text-xs font-mono tracking-widest uppercase transition-all duration-200 font-semibold"
                >
                  <span>{scenario.ctaText}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
