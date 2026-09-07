'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UserPlus, Sparkles, Compass, Handshake, CheckCircle2, ArrowRight } from 'lucide-react';

const candidateSteps = [
  {
    step: '01',
    title: 'Share Your Profile',
    icon: UserPlus,
    tagline: 'Initial Introduction',
    description:
      'Submit your basic contact details and career interests via our quick online profile intake or connect directly with our candidate desk via WhatsApp.',
    whatHappens: [
      'Zero registration fees or hidden charges',
      'Simple, mobile-friendly profile submission',
      'Direct acknowledgment by our recruitment team',
    ],
  },
  {
    step: '02',
    title: 'Tell Us About Your Skills',
    icon: Sparkles,
    tagline: 'Practical Capability Assessment',
    description:
      'Share your hands-on experience, equipment proficiencies, shift preferences, and career targets so we can match you accurately.',
    whatHappens: [
      'Focus on real-world competencies and certifications',
      'Shift and preferred location alignment',
      'Honest feedback on market demand',
    ],
  },
  {
    step: '03',
    title: 'Explore Relevant Opportunities',
    icon: Compass,
    tagline: 'Precision Matching',
    description:
      'Our specialized recruitment team evaluates open mandates across verified employers to identify roles matching your specific profile.',
    whatHappens: [
      'Direct matching with verified corporate employers',
      'Transparent role briefs and compensation packages',
      'No random or unverified job leads',
    ],
  },
  {
    step: '04',
    title: 'Connect With Employers',
    icon: Handshake,
    tagline: 'Focused Interview Coordination',
    description:
      'We coordinate interview times, briefing you thoroughly on the company culture, job expectations, and interview format beforehand.',
    whatHappens: [
      'Pre-interview guidance and preparation tips',
      'Organized interview scheduling and calendar reminders',
      'Prompt post-interview feedback loop',
    ],
  },
  {
    step: '05',
    title: 'Take Your Next Step',
    icon: CheckCircle2,
    tagline: 'Offer & Onboarding Support',
    description:
      'Upon selection, we assist with offer letter review, document collection, and coordinate day-one reporting logistics for a smooth start.',
    whatHappens: [
      'Offer letter clarification and paperwork assistance',
      'Day-one reporting instructions and point of contact',
      'Post-placement support during initial probation',
    ],
  },
];

export default function CandidateJourneySection() {
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
            <span>HOW IT WORKS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-gray-900 uppercase leading-[1.08]"
          >
            A simple, structured <br />
            <span className="text-[#E31837]">journey for candidates.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg text-gray-600 leading-relaxed font-normal max-w-2xl"
          >
            We eliminate confusion and long wait times. Follow our transparent 5-step process to connect with employers looking for your exact skillset.
          </motion.p>
        </div>

        {/* 5-Step Timeline Selector & Active Stage Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Step Selector Column */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {candidateSteps.map((stage, idx) => {
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

          {/* Active Step Details Column */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {(() => {
                const current = candidateSteps[activeStep];
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
                        What to expect:
                      </span>
                      {current.whatHappens.map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#E31837]" />
                          <span className="text-sm text-gray-700 font-normal">{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Step Navigator Footer */}
                    <div className="mt-10 pt-6 border-t border-gray-200 flex items-center justify-between">
                      <span className="text-xs font-mono text-gray-500">
                        Select any step on the left to see details
                      </span>
                      <button
                        onClick={() => setActiveStep((prev) => (prev + 1) % candidateSteps.length)}
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
