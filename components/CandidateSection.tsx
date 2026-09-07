'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface CandidateSectionProps {
  onOpenCandidateModal: () => void;
}

const candidateStandards = [
  {
    title: 'Verified Enterprise Employers',
    desc: 'All openings originate directly from vetted corporate partners within our verified client network.',
  },
  {
    title: 'Transparent Compensation',
    desc: 'Clear job profiles, structured shift allocations, and competitive compensation packages without ambiguity.',
  },
  {
    title: 'Direct Placement Pipeline',
    desc: 'Rapid matching and direct interview presentation without prolonged waiting periods.',
  },
  {
    title: 'Zero Candidate Charges',
    desc: 'We never charge job seekers any registration or placement fees. Our candidate service is 100% complimentary.',
  },
];

export default function CandidateSection({ onOpenCandidateModal }: CandidateSectionProps) {
  return (
    <section id="candidates" className="relative py-24 sm:py-32 px-6 sm:px-8 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading & CTA */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 text-xs font-mono tracking-[0.25em] text-[#E31837] font-semibold uppercase mb-6">
              <span className="w-8 h-[2px] bg-[#E31837]" />
              <span>FOR CANDIDATES &bull; CAREER PATHWAYS</span>
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-[72px] font-bold font-display tracking-tight text-gray-900 leading-[1.02] uppercase"
            >
              YOUR NEXT
              <br />
              <span className="text-[#E31837]">OPPORTUNITY</span>
              <br />
              STARTS HERE.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 text-base sm:text-lg text-gray-600 font-normal leading-relaxed max-w-xl"
            >
              Gain direct access to verified commercial roles with dependable enterprise employers across retail, logistics, manufacturing, and technical sectors.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            >
              <button
                onClick={onOpenCandidateModal}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#E31837] hover:bg-[#c4122d] text-white text-xs font-semibold tracking-[0.14em] uppercase transition-all shadow-sm active:scale-95"
              >
                <span>Submit Candidate Profile</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </motion.div>
          </div>

          {/* Right Column: 4 Candidate Guarantees */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {candidateStandards.map((std, index) => (
              <motion.div
                key={std.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 bg-[#f8f9fa] border border-gray-200 hover:border-[#E31837] hover:bg-white hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-8 h-8 rounded-full bg-red-50 border border-red-200 flex items-center justify-center mb-4 text-[#E31837] group-hover:bg-[#E31837] group-hover:text-white transition-colors">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-bold font-display text-gray-900 group-hover:text-[#E31837] transition-colors uppercase">
                    {std.title}
                  </h3>
                  <p className="mt-2 text-xs text-gray-600 leading-relaxed font-normal">
                    {std.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
