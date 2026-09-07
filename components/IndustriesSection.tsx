'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';

interface IndustriesSectionProps {
  onSelectIndustry?: (industry: string) => void;
}

const industriesList = [
  {
    num: '01',
    name: 'RETAIL',
    category: 'STORE OPERATIONS & MERCHANDISING',
    summary:
      'Frontline store personnel, visual merchandisers, floor supervisors, and flagship retail management.',
    roles: ['Store Managers', 'Visual Merchandisers', 'Floor Supervisors', 'Cash & POS Operatives'],
  },
  {
    num: '02',
    name: 'LOGISTICS',
    category: 'WAREHOUSING & DISTRIBUTION',
    summary:
      'High-throughput warehouse workforce, inventory coordinators, forklift operators, and dispatch leads.',
    roles: ['Warehouse Leads', 'Forklift Drivers', 'Inventory Clerks', 'Fleet Coordinators'],
  },
  {
    num: '03',
    name: 'MANUFACTURING',
    category: 'PRODUCTION & ASSEMBLY',
    summary:
      'Disciplined machine operators, plant technicians, quality inspectors, and shift line supervisors.',
    roles: ['Machine Technicians', 'Assembly Specialists', 'QC Inspectors', 'Line Supervisors'],
  },
  {
    num: '04',
    name: 'HOSPITALITY',
    category: 'GUEST SERVICES & DINING',
    summary:
      'Polished front office executives, banquet staff, culinary assistants, and facilities coordinators.',
    roles: ['Front Office Leads', 'F&B Associates', 'Banquet Staff', 'Housekeeping Supervisors'],
  },
  {
    num: '05',
    name: 'E-COMMERCE',
    category: 'FULFILLMENT & DISPATCH',
    summary:
      'High-speed sorting operatives, pick-and-pack crews, returns handlers, and dispatch controllers.',
    roles: ['Fulfillment Associates', 'Dispatch Supervisors', 'Returns Handlers', 'Hub Coordinators'],
  },
  {
    num: '06',
    name: 'SALES & SUPPORT',
    category: 'COMMERCIAL & CLIENT CARE',
    summary:
      'Inside sales specialists, bilingual customer support representatives, and account service executives.',
    roles: ['Inside Sales Reps', 'Customer Support Leads', 'Relationship Execs', 'B2B Associates'],
  },
  {
    num: '07',
    name: 'TECHNICAL SERVICES',
    category: 'MAINTENANCE & INFRASTRUCTURE',
    summary:
      'Field technicians, HVAC operators, electrical specialists, and facilities support teams.',
    roles: ['Field Technicians', 'HVAC Specialists', 'Electrical Leads', 'Plant Maintenance'],
  },
];

export default function IndustriesSection({ onSelectIndustry }: IndustriesSectionProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 20);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 20);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 380;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="industries" className="relative py-24 sm:py-32 px-6 sm:px-8 bg-[#f8f9fa] border-b border-gray-200 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header & Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 text-xs font-mono tracking-[0.25em] text-[#E31837] font-semibold uppercase mb-4">
              <span className="w-8 h-[2px] bg-[#E31837]" />
              <span>SECTORS &bull; INDUSTRY CAPABILITIES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold font-display tracking-tight text-gray-900 uppercase">
              OPERATIONAL REACH <br />
              <span className="text-[#E31837]">ACROSS SECTORS.</span>
            </h2>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-3 self-start md:self-end">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`p-3 border transition-all ${
                canScrollLeft
                  ? 'border-gray-300 text-gray-800 hover:border-[#E31837] hover:text-[#E31837] bg-white'
                  : 'border-gray-200 text-gray-300 cursor-not-allowed bg-transparent'
              }`}
              aria-label="Scroll reel left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`p-3 border transition-all ${
                canScrollRight
                  ? 'border-gray-300 text-gray-800 hover:border-[#E31837] hover:text-[#E31837] bg-white'
                  : 'border-gray-200 text-gray-300 cursor-not-allowed bg-transparent'
              }`}
              aria-label="Scroll reel right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Card Reel */}
        <div
          ref={scrollContainerRef}
          onScroll={checkScroll}
          className="flex gap-6 overflow-x-auto no-scrollbar pb-6 -mx-6 sm:-mx-8 px-6 sm:px-8 snap-x snap-mandatory"
        >
          {industriesList.map((ind) => (
            <div
              key={ind.num}
              className="w-[320px] sm:w-[380px] shrink-0 p-8 bg-white border border-gray-200 hover:border-[#E31837] hover:shadow-xl hover:shadow-red-500/5 transition-all duration-300 flex flex-col justify-between snap-start group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono tracking-widest text-[#E31837] font-semibold">
                    {ind.num}
                  </span>
                  <span className="text-[9px] font-mono tracking-widest text-gray-400 uppercase">
                    SECTOR
                  </span>
                </div>

                <span className="text-[10px] font-mono tracking-[0.2em] text-gray-500 uppercase block mb-1">
                  {ind.category}
                </span>

                <h3 className="text-2xl font-bold font-display text-gray-900 group-hover:text-[#E31837] transition-colors uppercase tracking-tight">
                  {ind.name}
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                  {ind.summary}
                </p>

                {/* Common Roles Tags */}
                <div className="mt-6 pt-5 border-t border-gray-100 flex flex-wrap gap-2">
                  {ind.roles.map((role) => (
                    <span
                      key={role}
                      className="px-2.5 py-1 text-[11px] font-mono tracking-wider text-gray-600 bg-gray-100 rounded-none group-hover:bg-red-50 group-hover:text-[#E31837] transition-colors"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-gray-100">
                <button
                  onClick={() => onSelectIndustry && onSelectIndustry(ind.name)}
                  className="w-full inline-flex items-center justify-between text-xs font-semibold tracking-wider text-gray-800 uppercase group-hover:text-[#E31837] transition-colors"
                >
                  <span>Request Deployment</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
