'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SearchX, Inbox, ShieldAlert, Timer, UserCheck } from 'lucide-react';

const challenges = [
  {
    num: '01',
    icon: SearchX,
    title: 'Finding Suitable Candidates',
    summary:
      'Filtering through hundreds of resumes that look good on paper but lack the exact operational competence, certifications, or mindset your team needs.',
    impact: 'Wasted interview cycles and mismatched hires',
  },
  {
    num: '02',
    icon: Inbox,
    title: 'Managing Large Applicant Volumes',
    summary:
      'Job portals flood your inbox with unfiltered inquiries. HR teams spend valuable working hours sorting unqualified applicants instead of closing key roles.',
    impact: 'Administrative fatigue and recruitment delays',
  },
  {
    num: '03',
    icon: ShieldAlert,
    title: 'Screening Candidates',
    summary:
      'Validating background, prior employment track record, skill authenticity, and shift availability is time-consuming and often inconsistent.',
    impact: 'Operational risk and false starts',
  },
  {
    num: '04',
    icon: Timer,
    title: 'Hiring Quickly',
    summary:
      'When order volumes spike or key personnel depart, every day of vacancy creates bottlenecks on production lines, warehouses, or customer service desks.',
    impact: 'Lost revenue and strained existing teams',
  },
  {
    num: '05',
    icon: UserCheck,
    title: 'Finding Dependable Workforce',
    summary:
      'The hardest part of staffing isn’t just finding people—it’s finding people who stay, show up reliably, and take pride in their day-to-day responsibilities.',
    impact: 'High churn and recurring training overhead',
  },
];

export default function HiringChallengesSection() {
  return (
    <section className="relative py-24 sm:py-32 px-6 sm:px-8 bg-[#f8f9fa] border-t border-b border-gray-200">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 text-xs font-mono tracking-[0.25em] text-[#E31837] font-semibold uppercase mb-4"
          >
            <span className="w-8 h-[2px] bg-[#E31837]" />
            <span>THE RECRUITMENT BOTTLENECK</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-gray-900 leading-[1.08] uppercase"
          >
            Hiring shouldn&apos;t slow <br />
            <span className="text-[#E31837]">your business down.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg text-gray-600 leading-relaxed font-normal max-w-2xl"
          >
            Workforce expansion often introduces friction: misaligned applicants, time-consuming screening, and high attrition. We address each obstacle through structured sourcing and disciplined qualification.
          </motion.p>
        </div>

        {/* 5 Editorial Challenge Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {challenges.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                className={`bg-white border border-gray-200 hover:border-[#E31837] hover:shadow-lg hover:shadow-red-500/5 p-8 flex flex-col justify-between group transition-all duration-300 ${
                  idx === 4 ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
                    <span className="font-mono text-xs font-bold text-[#E31837] tracking-wider">
                      CHALLENGE {item.num}
                    </span>
                    <div className="w-10 h-10 bg-red-50 border border-red-100 flex items-center justify-center text-[#E31837] group-hover:bg-[#E31837] group-hover:text-white transition-all">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-xl font-display font-bold text-gray-900 mb-3 group-hover:text-[#E31837] transition-colors uppercase">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed font-normal">
                    {item.summary}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-mono text-gray-500">
                  <span className="text-gray-600 font-medium">Risk: {item.impact}</span>
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
