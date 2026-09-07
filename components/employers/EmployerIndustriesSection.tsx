'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ShoppingBag,
  Truck,
  Factory,
  UtensilsCrossed,
  PackageCheck,
  TrendingUp,
  Headphones,
  Cpu,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
} from 'lucide-react';

interface EmployerIndustriesProps {
  onSelectIndustry: (industry: string) => void;
}

const employerIndustries = [
  {
    name: 'Retail',
    category: 'STORE OPERATIONS',
    icon: ShoppingBag,
    summary: 'Cashiers, floor associates, stock managers, and retail supervisors for outlets and retail chains.',
    roles: ['Store Managers', 'Cashiers', 'Visual Merchandisers', 'Inventory Stockers'],
  },
  {
    name: 'Logistics',
    category: 'FLEET & FULFILLMENT',
    icon: Truck,
    summary: 'Dependable teams for distribution centers, cross-docking hubs, and regional transport networks.',
    roles: ['Forklift Operators', 'Warehouse Coordinators', 'Fleet Leads', 'Dock Associates'],
  },
  {
    name: 'Manufacturing',
    category: 'PLANT & ASSEMBLY',
    icon: Factory,
    summary: 'Trained assembly line operators, maintenance personnel, and quality control specialists.',
    roles: ['Line Technicians', 'QC Inspectors', 'CNC Machinists', 'Maintenance Hands'],
  },
  {
    name: 'Hospitality',
    category: 'GUEST SERVICES',
    icon: UtensilsCrossed,
    summary: 'Front desk executives, culinary assistants, banquet staff, and housekeeping leads.',
    roles: ['Guest Relations Execs', 'F&B Service Leads', 'Banquet Staff', 'Kitchen Support'],
  },
  {
    name: 'E-commerce',
    category: 'HIGH-VELOCITY DISPATCH',
    icon: PackageCheck,
    summary: 'Pick-pack associates, inventory counters, dispatch supervisors, and returns processing staff.',
    roles: ['Pick & Pack Crew', 'Dispatch Leads', 'Returns Associates', 'Hub Supervisors'],
  },
  {
    name: 'Sales & Commercial',
    category: 'REVENUE & CLIENT DESK',
    icon: TrendingUp,
    summary: 'Inside sales executives, relationship officers, tele-callers, and retail counter sales teams.',
    roles: ['Inside Sales Reps', 'Relationship Execs', 'Tele-marketing Leads', 'Sales Associates'],
  },
  {
    name: 'Customer Support',
    category: 'VOICE & CHAT SERVICES',
    icon: Headphones,
    summary: 'Bilingual support representatives, helpdesk associates, and ticketing coordinators.',
    roles: ['Voice Support Execs', 'Chat Support Leads', 'Escalations Desks', 'Helpdesk Agents'],
  },
  {
    name: 'Technical & Maintenance',
    category: 'PLANT & SYSTEMS',
    icon: Cpu,
    summary: 'HVAC technicians, electricians, IT field support, and mechanical repair specialists.',
    roles: ['HVAC Technicians', 'Industrial Electricians', 'IT Field Engineers', 'Mechanics'],
  },
];

export default function EmployerIndustriesSection({ onSelectIndustry }: EmployerIndustriesProps) {
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
        {/* Header with Navigation */}
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
              <span>SECTOR READINESS</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-3xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-gray-900 leading-[1.08] uppercase"
            >
              Cross-industry workforce <br />
              <span className="text-[#E31837]">capabilities.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed font-normal"
            >
              We deploy candidates trained for the operational nuances, work shifts, and performance requirements of each specific sector.
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

        {/* Horizontal Reel */}
        <div
          ref={reelRef}
          onScroll={checkScroll}
          className="flex gap-6 overflow-x-auto no-scrollbar pb-6 pt-2 snap-x snap-mandatory cursor-grab active:cursor-grabbing"
        >
          {employerIndustries.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <motion.div
                key={ind.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                onClick={() => onSelectIndustry(ind.name)}
                className="min-w-[310px] sm:min-w-[360px] max-w-[360px] p-8 flex flex-col justify-between border border-gray-200 bg-[#f8f9fa] hover:border-[#E31837] hover:bg-white hover:shadow-lg hover:shadow-red-500/5 relative overflow-hidden group transition-all duration-300 snap-start select-none cursor-pointer"
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
                    {ind.category}
                  </span>

                  <h3 className="text-2xl font-display font-bold text-gray-900 mb-3 group-hover:text-[#E31837] transition-colors uppercase">
                    {ind.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6 font-normal">
                    {ind.summary}
                  </p>

                  <div className="space-y-1.5 pt-4 border-t border-gray-200">
                    <span className="text-[10px] font-mono uppercase text-[#E31837] font-semibold tracking-wider block mb-2">
                      Key Personnel Provided:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {ind.roles.map((role) => (
                        <span
                          key={role}
                          className="text-[11px] font-mono px-2.5 py-1 bg-white border border-gray-200 text-gray-700 group-hover:border-red-200 group-hover:bg-red-50 group-hover:text-[#E31837] transition-colors"
                        >
                          {role}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="relative z-10 mt-8 pt-4 border-t border-gray-200 flex items-center justify-between text-xs font-mono uppercase tracking-widest text-gray-900 group-hover:text-[#E31837] transition-colors font-semibold">
                  <span>Inquire for {ind.name}</span>
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
