'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Check } from 'lucide-react';

interface EmployerSectionProps {
  onOpenHireModal: () => void;
}

const businessPillars = [
  'Pre-screened candidates delivered directly to operational hiring managers',
  'Rigorous identity verification and operational competence screening',
  'Dedicated recruitment specialist managing your account and timelines',
  'Flexible staffing arrangements structured for enterprise business cycles',
];

const capabilityTiers = [
  {
    tier: 'TIER 01',
    name: 'High-Volume Workforce',
    desc: 'Structured intake pipelines for facility ramp-ups, seasonal surges, and logistics hubs.',
  },
  {
    tier: 'TIER 02',
    name: 'Skilled Operations Personnel',
    desc: 'Plant technicians, machine operators, warehouse leads, and store management.',
  },
  {
    tier: 'TIER 03',
    name: 'Commercial & Sales Talent',
    desc: 'Customer experience specialists, frontline brand representatives, and account executives.',
  },
];

export default function EmployerSection({ onOpenHireModal }: EmployerSectionProps) {
  return (
    <section id="employers" className="relative py-24 sm:py-32 px-6 sm:px-8 bg-[#f8f9fa] border-b border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Large Editorial Heading & Action */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 text-xs font-mono tracking-[0.25em] text-[#E31837] font-semibold uppercase mb-6">
              <span className="w-8 h-[2px] bg-[#E31837]" />
              <span>FOR ENTERPRISES &bull; WORKFORCE ACQUISITION</span>
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-[72px] font-bold font-display tracking-tight text-gray-900 leading-[1.02] uppercase"
            >
              YOUR REQUIREMENT.
              <br />
              <span className="text-[#E31837]">OUR FOCUS.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 text-base sm:text-lg text-gray-600 font-normal leading-relaxed max-w-xl"
            >
              We act as an integrated recruitment engine for organizations requiring verified operational capability, predictable onboarding tempo, and reduced attrition.
            </motion.p>

            {/* Value checklist */}
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 space-y-4 max-w-xl"
            >
              {businessPillars.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-red-50 border border-red-200 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-[#E31837]" />
                  </span>
                  <span className="text-sm text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10"
            >
              <button
                onClick={onOpenHireModal}
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#E31837] hover:bg-[#c4122d] text-white text-xs font-semibold tracking-[0.14em] uppercase transition-all shadow-sm active:scale-95"
              >
                <span>Initiate Hiring Request</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </motion.div>
          </div>

          {/* Right Column: Structured Capability Tiers */}
          <div className="lg:col-span-5 space-y-5">
            {capabilityTiers.map((tier, index) => (
              <motion.div
                key={tier.tier}
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className="p-8 bg-white border border-gray-200 hover:border-[#E31837] hover:shadow-lg hover:shadow-red-500/5 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono tracking-[0.25em] text-[#E31837] font-semibold">
                    {tier.tier}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-[#E31837] transition-colors" />
                </div>
                <h3 className="text-xl font-bold font-display text-gray-900 group-hover:text-[#E31837] transition-colors uppercase">
                  {tier.name}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                  {tier.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
