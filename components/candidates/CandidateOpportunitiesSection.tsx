'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ShoppingBag,
  Truck,
  Factory,
  UtensilsCrossed,
  PackageCheck,
  Headphones,
  Cpu,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
} from 'lucide-react';

interface CandidateOpportunitiesProps {
  onSelectIndustry: (industryName: string) => void;
}

const candidateIndustries = [
  {
    name: 'Retail',
    path: 'STORE OPERATIONS & MERCHANDISING',
    icon: ShoppingBag,
    overview:
      'Dynamic store environments, department stores, and brand flagships offering structured working hours and growth pathways.',
    commonRoles: ['Store Associates', 'Cashiers', 'Visual Merchandisers', 'Floor Supervisors'],
    environment: 'Flagships & Malls',
    shifts: 'Day & Evening Shifts',
  },
  {
    name: 'Logistics',
    path: 'WAREHOUSING & DISTRIBUTION',
    icon: Truck,
    overview:
      'High-throughput distribution hubs and fulfillment centers with safety-certified training and equipment operation.',
    commonRoles: ['Forklift Drivers', 'Material Handlers', 'Dock Associates', 'Inventory Clerks'],
    environment: 'Automated Hubs',
    shifts: 'Rotational & Night Shifts',
  },
  {
    name: 'Manufacturing',
    path: 'PRODUCTION & ASSEMBLY',
    icon: Factory,
    overview:
      'Disciplined plant floors, component assembly lines, and industrial fabrication with structured safety standards.',
    commonRoles: ['Line Technicians', 'Machine Operators', 'Assembly Workers', 'QC Assistants'],
    environment: 'Industrial Plants',
    shifts: 'Fixed Shift Patterns',
  },
  {
    name: 'Hospitality',
    path: 'SERVICE & GUEST RELATIONS',
    icon: UtensilsCrossed,
    overview:
      'Luxury hotel properties, premium restaurants, and banquet operations focused on exceptional customer presentation.',
    commonRoles: ['Front Desk Staff', 'F&B Associates', 'Housekeeping Leads', 'Kitchen Assistants'],
    environment: 'Hotels & Venues',
    shifts: 'Flexible Event Shifts',
  },
  {
    name: 'E-commerce',
    path: 'HIGH-SPEED FULFILLMENT',
    icon: PackageCheck,
    overview:
      'Fast-paced sorting and delivery hubs supporting national e-commerce networks during regular and peak sales cycles.',
    commonRoles: ['Pick & Pack Staff', 'Dispatch Clerks', 'Scanning Operatives', 'Returns Crew'],
    environment: 'Fulfillment Hubs',
    shifts: '24/7 Shift Options',
  },
  {
    name: 'Sales & Commercial',
    path: 'COMMUNICATIONS & REVENUE',
    icon: Headphones,
    overview:
      'Modern corporate contact centers and commercial offices providing clear performance incentives and leadership ladders.',
    commonRoles: ['Inside Sales Reps', 'Customer Care Execs', 'Tele-Agents', 'Support Leads'],
    environment: 'Corporate Offices',
    shifts: 'Standard Business Hours',
  },
  {
    name: 'Technical & IT',
    path: 'SYSTEMS & INFRASTRUCTURE',
    icon: Cpu,
    overview:
      'Corporate IT desks, server operations, and technical field support roles requiring hands-on troubleshooting abilities.',
    commonRoles: ['Helpdesk L1/L2', 'Hardware Technicians', 'Network Techs', 'QA Testers'],
    environment: 'Tech Centers & Offices',
    shifts: 'On-site & Hybrid Shifts',
  },
];

export default function CandidateOpportunitiesSection({ onSelectIndustry }: CandidateOpportunitiesProps) {
  const reelRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (reelRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = reelRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scrollByAmount = (amount: number) => {
    if (reelRef.current) {
      reelRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-24 sm:py-32 px-6 sm:px-8 bg-white border-t border-b border-gray-200 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header with Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 text-xs font-mono tracking-[0.25em] text-[#E31837] font-semibold uppercase mb-4"
            >
              <span className="w-8 h-[2px] bg-[#E31837]" />
              <span>WHERE YOU CAN GROW</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-3xl sm:text-5xl md:text-6xl font-display font-bold uppercase tracking-tight text-gray-900 leading-[1.08]"
            >
              Opportunities across <br />
              <span className="text-[#E31837]">verified sectors.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed font-normal"
            >
              Explore sectors where we actively match candidates. We connect you with employers who offer stable workplace environments, verified compensation, and clear career progression.
            </motion.p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollByAmount(-360)}
              disabled={!canScrollLeft}
              className={`w-11 h-11 border flex items-center justify-center transition-all ${
                canScrollLeft
                  ? 'border-gray-300 text-gray-800 hover:border-[#E31837] hover:text-[#E31837] bg-white active:scale-95'
                  : 'border-gray-200 text-gray-300 cursor-not-allowed'
              }`}
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollByAmount(360)}
              disabled={!canScrollRight}
              className={`w-11 h-11 border flex items-center justify-center transition-all ${
                canScrollRight
                  ? 'border-gray-300 text-gray-800 hover:border-[#E31837] hover:text-[#E31837] bg-white active:scale-95'
                  : 'border-gray-200 text-gray-300 cursor-not-allowed'
              }`}
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Opportunities Reel */}
        <div
          ref={reelRef}
          onScroll={checkScroll}
          className="flex gap-6 overflow-x-auto no-scrollbar pb-6 pt-2 snap-x snap-mandatory cursor-grab active:cursor-grabbing"
        >
          {candidateIndustries.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <motion.div
                key={ind.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                onClick={() => onSelectIndustry(ind.name)}
                className="min-w-[310px] sm:min-w-[370px] max-w-[370px] p-8 flex flex-col justify-between border border-gray-200 bg-[#f8f9fa] hover:border-[#E31837] hover:bg-white hover:shadow-lg hover:shadow-red-500/5 relative overflow-hidden group transition-all duration-300 snap-start select-none cursor-pointer"
              >
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
                    <span className="font-mono text-xs font-bold text-[#E31837] tracking-wider">
                      0{idx + 1}
                    </span>
                    <div className="w-9 h-9 border border-gray-200 bg-white flex items-center justify-center text-[#E31837] group-hover:bg-[#E31837] group-hover:text-white group-hover:border-[#E31837] transition-all">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-gray-500 font-semibold block mb-1">
                    {ind.path}
                  </span>

                  <h3 className="text-2xl font-display font-bold text-gray-900 mb-3 group-hover:text-[#E31837] transition-colors uppercase">
                    {ind.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6 font-normal">
                    {ind.overview}
                  </p>

                  <div className="space-y-3 pt-4 border-t border-gray-200">
                    <div>
                      <span className="text-[10px] font-mono uppercase text-[#E31837] font-semibold tracking-wider block mb-2">
                        Common Career Roles:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {ind.commonRoles.map((role) => (
                          <span
                            key={role}
                            className="text-[11px] font-mono px-2.5 py-1 bg-white border border-gray-200 text-gray-700 group-hover:border-red-200 group-hover:bg-red-50 group-hover:text-[#E31837] transition-colors"
                          >
                            {role}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-[11px] font-mono text-gray-500 pt-3 border-t border-gray-200">
                      <span>{ind.environment}</span>
                      <span className="text-[#E31837] font-semibold">{ind.shifts}</span>
                    </div>
                  </div>
                </div>

                <div className="relative z-10 mt-8 pt-4 border-t border-gray-200 flex items-center justify-between text-xs font-mono uppercase tracking-widest text-gray-900 group-hover:text-[#E31837] transition-colors font-semibold">
                  <span>Explore roles in {ind.name}</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
