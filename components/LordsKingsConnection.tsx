'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowDown, ExternalLink, ArrowUpRight, CheckCircle2, Building2 } from 'lucide-react';
import { GROUP_DIVISIONS } from '@/lib/constants';

export default function LordsKingsConnection() {
  return (
    <section className="relative py-16 sm:py-24 px-5 sm:px-8 border-t border-b border-gray-200 bg-[#f8f9fa] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Parent Brand Hierarchy Tree */}
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center"
          >
            {/* Group Eyebrow */}
            <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.25em] text-[#E31837] uppercase font-bold mb-3">
              PARENT GROUP ARCHITECTURE
            </span>

            {/* Parent Brand Link with Red Pill Logo & Hover Effect */}
            <motion.a
              whileHover={{ y: -2, scale: 1.01 }}
              transition={{ duration: 0.2 }}
              href="https://lordsandkings.co"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-white border border-gray-200 hover:border-[#E31837]/40 px-4 py-2.5 shadow-xs hover:shadow-md transition-all duration-300"
            >
              <div className="relative h-8 sm:h-9 w-auto">
                <Image
                  src="/lords-and-kings-logo.png"
                  alt="Lords & Kings Group"
                  width={140}
                  height={42}
                  className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>
              <div className="flex items-center gap-1.5 pl-2 border-l border-gray-200">
                <span className="text-[11px] font-mono uppercase text-gray-500 group-hover:text-[#E31837] transition-colors">
                  Group Portal
                </span>
                <ExternalLink className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#E31837] transition-colors" />
              </div>
            </motion.a>

            {/* Clean Red Vertical Connector */}
            <div className="my-3 sm:my-4 flex flex-col items-center">
              <div className="w-[2px] h-6 sm:h-7 bg-[#E31837]" />
              <ArrowDown className="w-4 h-4 text-[#E31837] -mt-1 animate-bounce duration-1000" />
            </div>

            {/* 5th Division Badge & Name */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-red-50 border border-red-200 text-[#E31837] text-xs font-mono font-bold uppercase tracking-wider mb-2 transition-transform duration-200 hover:scale-[1.02]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E31837] animate-pulse" />
              <span>THE 5TH DIVISION OF LORDS &amp; KINGS GROUP</span>
            </div>

            <h2 className="font-display font-bold text-2xl sm:text-4xl tracking-[0.06em] text-gray-900 uppercase">
              LORDS &amp; KINGS MANPOWER SOLUTIONS
            </h2>

            <span className="mt-1 text-xs font-mono tracking-[0.22em] text-gray-600 font-semibold uppercase">
              WORKFORCE &amp; RECRUITMENT ARM
            </span>
          </motion.div>

          {/* Narrative Statement */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 text-sm sm:text-base text-gray-600 leading-relaxed font-normal max-w-2xl"
          >
            Lords &amp; Kings operates across agriculture, technology, enterprise investments, and real estate. 
            <strong className="text-gray-900 font-semibold"> Lords &amp; Kings Manpower Solutions</strong> is the Group&apos;s specialized 5th division — extending institutional discipline and dependability into large-scale workforce deployment.
          </motion.p>
        </div>

        {/* 5 Group Divisions Grid */}
        <div className="border-t border-gray-200 pt-10 sm:pt-12">
          <div className="flex items-center justify-between mb-6 sm:mb-8">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 bg-[#E31837]" />
              <h3 className="text-xs sm:text-sm font-mono tracking-[0.18em] uppercase font-bold text-gray-900">
                Lords &amp; Kings Group Portfolio &bull; 5 Operating Divisions
              </h3>
            </div>
            <a
              href="https://lordsandkings.co"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-[#E31837] hover:underline hidden sm:inline-flex items-center gap-1 group"
            >
              <span>View lordsandkings.co</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {GROUP_DIVISIONS.map((div, index) => {
              const isFifthDivision = div.num === '05' || div.isCurrent;

              return (
                <motion.div
                  key={div.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  whileHover={{ y: -5, transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] } }}
                  className={`group relative p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 cursor-pointer overflow-hidden ${
                    isFifthDivision
                      ? 'bg-white border-2 border-[#E31837] shadow-sm hover:shadow-xl hover:shadow-[#E31837]/15 lg:col-span-2 hover:border-[#E31837]'
                      : 'bg-white border border-gray-200 hover:border-gray-400 hover:shadow-xl hover:shadow-gray-900/[0.06] hover:bg-gradient-to-b hover:from-white hover:to-gray-50/50'
                  }`}
                >
                  {/* Top Red Hover Accent Bar */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-[3px] transition-all duration-300 ease-out ${
                      isFifthDivision
                        ? 'bg-[#E31837]'
                        : 'bg-[#E31837] transform origin-left scale-x-0 group-hover:scale-x-100'
                    }`}
                  />

                  {/* Top Bar: Number & Category Tag */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono font-bold text-gray-400 group-hover:text-[#E31837] transition-colors duration-200">
                        DIVISION {div.num}
                      </span>
                      {isFifthDivision ? (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-[#E31837] text-white text-[10px] font-mono uppercase tracking-wider font-semibold shadow-xs group-hover:shadow-md transition-shadow duration-300">
                          <CheckCircle2 className="w-3 h-3" />
                          <span>5TH DIVISION &bull; CURRENT SITE</span>
                        </span>
                      ) : (
                        <span className="text-[10px] font-mono uppercase tracking-wider text-gray-500 bg-gray-100 px-2 py-0.5 group-hover:bg-red-50 group-hover:text-[#E31837] transition-colors duration-200">
                          {div.tag}
                        </span>
                      )}
                    </div>

                    <h4
                      className={`font-display font-bold uppercase tracking-tight transition-colors duration-200 ${
                        isFifthDivision
                          ? 'text-lg sm:text-xl text-gray-900 group-hover:text-[#E31837]'
                          : 'text-base sm:text-lg text-gray-900 group-hover:text-[#E31837]'
                      }`}
                    >
                      {div.name}
                    </h4>

                    <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed font-normal group-hover:text-gray-700 transition-colors duration-200">
                      {div.desc}
                    </p>
                  </div>

                  {/* Division Action */}
                  <div className="mt-6 pt-3.5 border-t border-gray-100 flex items-center justify-between text-xs">
                    <span className="font-mono text-[11px] text-gray-500 group-hover:text-gray-700 uppercase transition-colors">
                      {div.category}
                    </span>
                    {isFifthDivision ? (
                      <span className="font-mono text-[11px] text-[#E31837] font-semibold uppercase flex items-center gap-1.5">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E31837] opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E31837]"></span>
                        </span>
                        <span>Active Workforce Portal</span>
                      </span>
                    ) : (
                      <a
                        href={div.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 group-hover:text-[#E31837] font-mono text-[11px] uppercase inline-flex items-center gap-1 font-medium transition-colors"
                      >
                        <span className="group-hover:underline">Explore Division</span>
                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </a>
                    )}
                  </div>

                  {/* Invisible overlay link for non-current cards so the whole card area is clickable */}
                  {!isFifthDivision && (
                    <a
                      href={div.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 z-10"
                      aria-label={`Explore ${div.name}`}
                    />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
