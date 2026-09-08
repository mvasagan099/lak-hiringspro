'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, ChevronRight } from 'lucide-react';
import {
  RetailVisual,
  LogisticsVisual,
  ManufacturingVisual,
  HospitalityVisual,
  EcommerceVisual,
  SalesSupportVisual,
  TechnicalItVisual,
} from './IndustryAbstractVisuals';

interface IndustryJourneyProps {
  onSelectIndustry: (industryName: string) => void;
}

const industries = [
  {
    num: '01',
    name: 'RETAIL',
    tag: 'CUSTOMER TOUCHPOINTS',
    description:
      'Support your retail operations with people ready to serve customers and keep your business moving.',
    visual: RetailVisual,
  },
  {
    num: '02',
    name: 'LOGISTICS',
    tag: 'FLEET & FULFILLMENT',
    description:
      'Workforce support for fast-moving logistics and delivery environments.',
    visual: LogisticsVisual,
  },
  {
    num: '03',
    name: 'MANUFACTURING',
    tag: 'PLANT & OPERATIONS',
    description:
      'Connect with workforce suited to production and operational environments.',
    visual: ManufacturingVisual,
  },
  {
    num: '04',
    name: 'HOSPITALITY',
    tag: 'GUEST EXPERIENCE',
    description:
      'Support hospitality teams with dependable people for customer-facing roles.',
    visual: HospitalityVisual,
  },
  {
    num: '05',
    name: 'E-COMMERCE',
    tag: 'HIGH-SPEED COMMERCE',
    description:
      'Help your growing operations find people for fast-moving commerce environments.',
    visual: EcommerceVisual,
  },
  {
    num: '06',
    name: 'SALES & SUPPORT',
    tag: 'ENGAGEMENT & SERVICE',
    description:
      'Connect businesses with people who can engage customers and support everyday operations.',
    visual: SalesSupportVisual,
  },
  {
    num: '07',
    name: 'TECHNICAL & IT',
    tag: 'SYSTEMS & TECHNOLOGY',
    description:
      'Support technical and technology-focused hiring requirements.',
    visual: TechnicalItVisual,
  },
];

export default function IndustryHorizontalJourney({ onSelectIndustry }: IndustryJourneyProps) {
  const targetRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const checkMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setReducedMotion(checkMotion);

    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-85.714%']);

  // If Mobile or Reduced Motion: render vertical stacked layout
  if (!isDesktop || reducedMotion) {
    return (
      <section className="relative py-20 sm:py-28 px-6 sm:px-8 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-[11px] font-mono tracking-[0.25em] text-[#E31837] uppercase font-bold">
              SECTOR BREAKDOWN
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 uppercase mt-2">
              Explore By Sector
            </h2>
          </div>

          {industries.map((item) => {
            const Visual = item.visual;
            return (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className="p-6 sm:p-10 border border-gray-200 bg-[#f8f9fa] shadow-sm relative overflow-hidden"
              >
                <div className="flex items-center justify-between pb-4 border-b border-gray-200 mb-6">
                  <span className="text-sm font-mono font-bold text-[#E31837]">
                    SECTOR {item.num}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500 font-semibold">
                    {item.tag}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 uppercase mb-4">
                      {item.name}
                    </h3>
                    <p className="text-base text-gray-600 leading-relaxed font-normal mb-6">
                      {item.description}
                    </p>
                    <button
                      onClick={() => onSelectIndustry(item.name)}
                      className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#E31837] hover:text-[#c4122d] transition-colors font-bold"
                    >
                      <span>Inquire for {item.name}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="w-full">
                    <Visual />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    );
  }

  // Desktop Pinned Horizontal Journey
  return (
    <section ref={targetRef} className="relative h-[480vh] bg-white">
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
        {/* Ambient background aura */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-[#E31837]/[0.02] blur-[160px] pointer-events-none" />

        {/* Top Floating Indicator */}
        <div className="absolute top-28 left-8 right-8 z-20 flex items-center justify-between max-w-7xl mx-auto pointer-events-none">
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-mono tracking-[0.25em] text-[#E31837] uppercase font-bold">
              INDUSTRY JOURNEY
            </span>
            <span className="text-gray-300">&bull;</span>
            <span className="text-[11px] font-mono text-gray-500 uppercase font-semibold">
              01 TO 07
            </span>
          </div>

          <div className="text-[11px] font-mono text-gray-500 flex items-center gap-2">
            <span>Scroll vertically to glide across sectors</span>
            <ChevronRight className="w-3.5 h-3.5 text-[#E31837]" />
          </div>
        </div>

        {/* Horizontal Moving Track */}
        <motion.div style={{ x }} className="flex h-full items-center">
          {industries.map((item, idx) => {
            const Visual = item.visual;
            return (
              <div
                key={item.num}
                className="w-screen h-screen flex-shrink-0 flex items-center justify-center px-12 lg:px-20 relative select-none"
              >
                <div className="max-w-6xl w-full grid grid-cols-12 gap-12 items-center">
                  {/* Left Column */}
                  <div className="col-span-6 space-y-6">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-mono font-bold text-[#E31837] tracking-wider">
                        {item.num}
                      </span>
                      <span className="w-8 h-[2px] bg-[#E31837]" />
                      <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-gray-500 font-semibold">
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="text-5xl lg:text-7xl xl:text-8xl font-display font-bold uppercase tracking-tight text-gray-900 leading-none">
                      {item.name}
                    </h3>

                    <p className="text-lg lg:text-xl text-gray-600 leading-relaxed font-normal max-w-lg">
                      {item.description}
                    </p>

                    <div className="pt-4 flex items-center gap-6">
                      <button
                        onClick={() => onSelectIndustry(item.name)}
                        className="inline-flex items-center gap-3 px-8 py-4 text-xs font-semibold tracking-wider uppercase text-white bg-[#E31837] hover:bg-[#c4122d] transition-all shadow-sm active:scale-95"
                      >
                        <span>Request {item.name} Workforce</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </button>

                      {idx < industries.length - 1 && (
                        <div className="flex items-center gap-2 text-xs font-mono text-gray-500">
                          <span>Next: {industries[idx + 1].name}</span>
                          <ChevronRight className="w-4 h-4 text-[#E31837]" />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Right Column: Sector Visual */}
                  <div className="col-span-6">
                    <Visual />
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Bottom Horizontal Progress Bar */}
        <div className="absolute bottom-10 left-12 right-12 z-20 max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            {industries.map((ind, i) => (
              <ProgressBarItem key={ind.num} i={i} scrollYProgress={scrollYProgress} />
            ))}
          </div>

          <span className="text-[11px] font-mono tracking-widest text-gray-500 uppercase font-semibold">
            LORDS &amp; KINGS GROUP MANPOWER SOLUTIONS &bull; INDUSTRY COVERAGE
          </span>
        </div>
      </div>
    </section>
  );
}

function ProgressBarItem({ i, scrollYProgress }: { i: number; scrollYProgress: any }) {
  const scaleX = useTransform(scrollYProgress, [i / 7, (i + 1) / 7], [0, 1]);
  return (
    <div className="h-1.5 bg-gray-200 w-10 overflow-hidden relative">
      <motion.div
        style={{ scaleX }}
        className="h-full bg-[#E31837] origin-left"
      />
    </div>
  );
}
