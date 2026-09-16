'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowDown, ExternalLink, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { GROUP_DIVISIONS } from '@/lib/constants';

export default function LordsAndKingsHeritageSection() {
  return (
    <section className="relative py-20 sm:py-28 px-6 sm:px-8 bg-white overflow-hidden text-center border-t border-b border-gray-200">
      {/* Subtle Central Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#E31837]/[0.02] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 text-[11px] font-mono tracking-[0.25em] text-[#E31837] uppercase mb-6 font-bold"
        >
          <span className="w-1.5 h-1.5 bg-[#E31837]" />
          <span>PARENT BRAND ARCHITECTURE</span>
        </motion.div>

        {/* Hierarchy: LORDS & KINGS GROUP ↓ 5TH DIVISION: LORDS & KINGS MANPOWER SOLUTIONS */}
        <div className="flex flex-col items-center space-y-4 my-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <a
              href="https://lordsandkings.co"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 p-2 px-3 bg-gray-50 border border-gray-200 hover:border-gray-300 transition-all group"
            >
              <Image
                src="/lords-and-kings-logo.png"
                alt="Lords & Kings Group"
                width={140}
                height={42}
                className="h-9 w-auto object-contain"
              />
              <span className="text-[11px] font-mono uppercase text-gray-500 group-hover:text-[#E31837] transition-colors flex items-center gap-1">
                <span>lordsandkings.co</span>
                <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
              </span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scaleY: 0 }}
            whileInView={{ opacity: 1, scaleY: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-8 h-8 border border-red-200 bg-red-50 flex items-center justify-center text-[#E31837] my-1"
          >
            <ArrowDown className="w-4 h-4" />
          </motion.div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-50 border border-red-200 text-[#E31837] text-xs font-mono font-bold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E31837]" />
            <span>5TH GROUP DIVISION</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-2xl sm:text-3xl md:text-4xl font-display font-bold uppercase tracking-wider text-gray-900 flex flex-wrap justify-center items-center gap-2"
          >
            <span className="text-[#E31837]">LORDS &amp; KINGS</span> MANPOWER SOLUTIONS
          </motion.div>

          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-xs font-mono tracking-[0.25em] uppercase text-gray-600 font-semibold"
          >
            Workforce &amp; Recruitment Division
          </motion.span>
        </div>

        {/* Concise Description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-base sm:text-lg text-gray-600 font-normal leading-relaxed max-w-2xl mx-auto mt-6"
        >
          Lords &amp; Kings Manpower Solutions is the official <strong className="text-gray-900 font-semibold">5th division</strong> of the Lords &amp; Kings Group — extending the Group&apos;s heritage in agritech, investments, and asset development into professional human capital and workforce deployment.
        </motion.p>

        {/* 5 Group Divisions Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-12 pt-8 border-t border-gray-200"
        >
          <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-gray-400 font-bold block mb-4 text-center">
            The 5 Operating Divisions of Lords &amp; Kings
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 text-left">
            {GROUP_DIVISIONS.map((div) => {
              const isFifth = div.num === '05';
              return (
                <motion.a
                  key={div.num}
                  href={div.url}
                  target={isFifth ? undefined : '_blank'}
                  rel={isFifth ? undefined : 'noopener noreferrer'}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className={`group relative p-3.5 border transition-all duration-200 block overflow-hidden ${
                    isFifth
                      ? 'bg-red-50/50 border-[#E31837] shadow-xs hover:shadow-md hover:border-[#E31837]'
                      : 'bg-gray-50/80 border-gray-200 hover:border-gray-400 hover:bg-white hover:shadow-md'
                  }`}
                >
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#E31837] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-mono font-bold text-gray-400 group-hover:text-[#E31837] transition-colors">
                      DIV {div.num}
                    </span>
                    {isFifth ? (
                      <span className="text-[9px] font-mono text-[#E31837] font-bold uppercase">
                        Active
                      </span>
                    ) : (
                      <span className="text-[9px] font-mono text-gray-400 group-hover:text-gray-600 uppercase flex items-center gap-0.5">
                        <span>Group</span>
                        <ArrowUpRight className="w-2.5 h-2.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </span>
                    )}
                  </div>
                  <h5 className="font-display font-bold text-xs uppercase text-gray-900 group-hover:text-[#E31837] transition-colors leading-snug">
                    {div.name}
                  </h5>
                  <span className="block mt-1 text-[10px] font-mono text-gray-500 line-clamp-2">
                    {div.category}
                  </span>
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
