'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface ServicesListSectionProps {
  onSelectService?: (serviceTitle: string) => void;
}

const services = [
  {
    num: '01',
    title: 'WORKFORCE RECRUITMENT',
    tagline: 'End-to-end personnel acquisition across operations, administration, and customer operations.',
    details:
      'Precision sourcing and verification for high-reliability business functions. We match domain competence directly to organizational operating rhythm.',
  },
  {
    num: '02',
    title: 'BULK HIRING',
    tagline: 'Rapid volume deployment engineered for seasonal ramp-ups, facility expansions, and peak cycles.',
    details:
      'Systematized high-throughput pipelines designed to onboard hundreds of qualified personnel on target timelines without compromising screening rigor.',
  },
  {
    num: '03',
    title: 'SKILLED WORKFORCE',
    tagline: 'Vetted machine operators, warehousing specialists, certified technicians, and plant operators.',
    details:
      'Rigorous background checks and operational competence testing to ensure dependable floor readiness from day one.',
  },
  {
    num: '04',
    title: 'ENTRY-LEVEL HIRING',
    tagline: 'Disciplined frontline talent for retail outlets, fulfillment centers, and commercial facilities.',
    details:
      'Structured intake, basic orientation readiness, and verifiable reference checks to establish long-term workforce stability.',
  },
  {
    num: '05',
    title: 'SALES & SUPPORT',
    tagline: 'Revenue drivers, bilingual customer service representatives, and relationship coordinators.',
    details:
      'Selected for verbal precision, brand representation capability, and customer-first alignment across retail and remote models.',
  },
  {
    num: '06',
    title: 'TECHNICAL & IT',
    tagline: 'Helpdesk specialists, infrastructure technicians, QA testers, and digital operations personnel.',
    details:
      'Technical proficiency evaluations and operational capability screening tailored to your exact tech infrastructure and tools.',
  },
];

export default function ServicesListSection({ onSelectService }: ServicesListSectionProps) {
  const [activeService, setActiveService] = useState<number | null>(null);

  return (
    <section className="relative py-14 sm:py-24 lg:py-32 px-5 sm:px-8 bg-[#f8f9fa] border-b border-gray-200">
      <div className="max-w-7xl mx-auto">
        {/* Section Eyebrow & Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-18 pb-6 sm:pb-8 border-b border-gray-200 gap-6 text-center md:text-left">
          <div className="mx-auto md:mx-0">
            <div className="flex items-center justify-center md:justify-start gap-3 text-xs font-mono tracking-[0.25em] text-[#E31837] font-semibold uppercase mb-4">
              <span className="w-6 sm:w-8 h-[2px] bg-[#E31837]" />
              <span>SERVICES &bull; WORKFORCE CAPABILITIES</span>
              <span className="w-6 h-[2px] bg-[#E31837] md:hidden" />
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold font-display tracking-tight text-gray-900 uppercase">
              SPECIALIZED <span className="text-[#E31837]">RECRUITMENT</span> DIVISIONS.
            </h2>
          </div>
          <span className="text-xs font-mono tracking-widest text-gray-500 uppercase self-center md:self-end">
            06 CORE PILLARS
          </span>
        </div>

        {/* Editorial Services List */}
        <div className="divide-y divide-gray-200">
          {services.map((item, index) => {
            const isOpen = activeService === index;

            return (
              <div
                key={item.num}
                className={`transition-colors duration-300 ${isOpen ? 'bg-white shadow-sm' : 'hover:bg-white/60'}`}
              >
                <button
                  type="button"
                  onClick={() => setActiveService(isOpen ? null : index)}
                  className="w-full py-8 px-4 sm:px-6 flex items-start sm:items-center justify-between gap-6 text-left group transition-all"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start sm:items-center gap-6 sm:gap-12 flex-1">
                    <span className="font-mono text-sm sm:text-base tracking-widest text-gray-400 group-hover:text-[#E31837] transition-colors shrink-0 mt-1 sm:mt-0">
                      {item.num}
                    </span>
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-gray-900 group-hover:text-[#E31837] transition-colors uppercase tracking-tight">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-xs sm:text-sm text-gray-600 font-normal">
                        {item.tagline}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0 mt-1 sm:mt-0">
                    <span className="hidden sm:inline-block text-xs font-mono tracking-widest text-gray-400 uppercase group-hover:text-gray-700">
                      {isOpen ? 'Close' : 'Details'}
                    </span>
                    <div
                      className={`w-9 h-9 flex items-center justify-center border transition-all duration-300 ${
                        isOpen
                          ? 'border-[#E31837] bg-[#E31837] text-white rotate-45'
                          : 'border-gray-300 text-gray-600 group-hover:border-[#E31837] group-hover:text-[#E31837]'
                      }`}
                    >
                      <ArrowUpRight className="w-4 h-4 transition-transform" />
                    </div>
                  </div>
                </button>

                {/* Expanded Detailed Accordion Content */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 sm:px-6 pb-8 pt-2">
                        <div className="pl-0 sm:pl-20 border-l-2 border-[#E31837] max-w-3xl ml-2 sm:ml-4 py-2">
                          <p className="text-sm sm:text-base text-gray-700 font-normal leading-relaxed">
                            {item.details}
                          </p>
                          <div className="mt-6 flex flex-wrap items-center gap-4">
                            <button
                              onClick={() => onSelectService && onSelectService(item.title)}
                              className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#E31837] hover:bg-[#c4122d] text-white text-xs font-semibold uppercase tracking-wider transition-all active:scale-95 shadow-sm"
                            >
                              <span>Request Deployment</span>
                              <ArrowUpRight className="w-3.5 h-3.5" />
                            </button>
                            <span className="text-xs font-mono text-gray-500">
                              Direct turnaround within 24–48 hours
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
