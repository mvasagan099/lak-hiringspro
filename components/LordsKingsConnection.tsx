'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowDown, ExternalLink } from 'lucide-react';

export default function LordsKingsConnection() {
  return (
    <section className="relative py-20 sm:py-24 px-6 sm:px-8 border-t border-b border-gray-200 bg-[#f8f9fa]">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Parent Brand Hierarchy Tree */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          {/* Parent Brand Link with Red Pill Logo */}
          <a
            href="https://lordsandkings.co"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 p-2 hover:opacity-90 transition-opacity"
          >
            <div className="relative h-10 w-auto">
              <Image
                src="/lords-and-kings-logo.png"
                alt="Lords & Kings Group"
                width={140}
                height={42}
                className="h-full w-auto object-contain"
              />
            </div>
            <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-[#E31837] transition-colors" />
          </a>

          {/* Clean Red Vertical Connector */}
          <div className="my-5 flex flex-col items-center">
            <div className="w-[2px] h-8 bg-[#E31837]" />
            <ArrowDown className="w-4 h-4 text-[#E31837] -mt-1" />
          </div>

          {/* Division Name */}
          <h2 className="font-display font-bold text-2xl sm:text-3xl tracking-[0.12em] text-gray-900 uppercase">
            L&amp;K HIRINGSPRO
          </h2>

          <span className="mt-1 text-xs font-mono tracking-[0.25em] text-[#E31837] font-semibold uppercase">
            WORKFORCE &amp; RECRUITMENT DIVISION
          </span>
        </motion.div>

        {/* Narrative Statement */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-2xl text-base sm:text-lg text-gray-600 leading-relaxed font-normal"
        >
          L&amp;K HiringsPro operates as the specialized workforce and talent acquisition division of the Lords &amp; Kings Group — deploying dependable personnel across retail, manufacturing, logistics, and technical operations.
        </motion.p>
      </div>
    </section>
  );
}
