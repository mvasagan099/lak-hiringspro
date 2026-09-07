'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface ServicePanelsProps {
  onSelectService: (serviceName: string) => void;
}

const services = [
  {
    name: 'WORKFORCE RECRUITMENT',
    category: 'OPERATIONS & FULFILLMENT',
    summary:
      'High-reliability personnel for distribution hubs, inventory management, material handling, packaging, and line operations.',
    roles: ['Warehouse Handlers', 'Forklift Operators', 'Packers & Loaders', 'Dispatch Associates'],
  },
  {
    name: 'BULK HIRING',
    category: 'SCALE & PEAK QUARTERS',
    summary:
      'Structured recruitment campaigns delivering 20 to 100+ candidates for warehouse launches, seasonal peak quarters, or plant commissioning.',
    roles: ['Seasonal Fulfillment Teams', 'Facility Ramp-up Crews', 'Event Support Staff', 'Ramp Operators'],
  },
  {
    name: 'SKILLED WORKFORCE',
    category: 'CERTIFIED & SPECIALIZED',
    summary:
      'Certified technicians, CNC operators, maintenance mechanics, electricians, and tradespeople with proven industrial background.',
    roles: ['Maintenance Technicians', 'CNC/Machine Operators', 'Quality Inspectors', 'Industrial Electricians'],
  },
  {
    name: 'ENTRY-LEVEL HIRING',
    category: 'TRAINABLE & MOTIVATED',
    summary:
      'Energetic, pre-screened graduates and operational apprentices ready for structured onboarding, training, and rapid workforce ramp-ups.',
    roles: ['Junior Associates', 'Data Entry Operatives', 'Floor Apprentices', 'Operations Trainees'],
  },
  {
    name: 'SALES & SUPPORT',
    category: 'COMMERCIAL & RETENTION',
    summary:
      'Customer service representatives, inside sales professionals, tele-marketing agents, and customer success coordinators.',
    roles: ['Inbound Support Execs', 'B2B Sales Reps', 'Client Coordinators', 'Tele-calling Specialists'],
  },
  {
    name: 'TECHNICAL & IT',
    category: 'SYSTEMS & INFRASTRUCTURE',
    summary:
      'Helpdesk engineers, network administrators, software testers, technical support executives, and cloud infrastructure support staff.',
    roles: ['IT Helpdesk L1/L2', 'QA Testers', 'Network Technicians', 'Systems Support Leads'],
  },
];

export default function ServicePanelsSection({ onSelectService }: ServicePanelsProps) {
  return (
    <section className="relative py-24 sm:py-32 px-6 sm:px-8 bg-[#f8f9fa] border-t border-b border-gray-200 overflow-hidden">
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
            <span>SPECIALIZED STREAMS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-gray-900 leading-[1.08] uppercase"
          >
            Structured recruitment <br />
            <span className="text-[#E31837]">capabilities.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg text-gray-600 leading-relaxed font-normal max-w-2xl"
          >
            Explore our core recruitment streams. Each vertical is executed by recruiters who understand industry requirements and operational demands.
          </motion.p>
        </div>

        {/* Large Format Interactive Service Panels */}
        <div className="flex flex-col gap-4">
          {services.map((service, idx) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: idx * 0.08 }}
              onClick={() => onSelectService(service.name)}
              className="group relative p-6 sm:p-10 border border-gray-200 bg-white hover:border-[#E31837] hover:shadow-lg hover:shadow-red-500/5 transition-all duration-300 cursor-pointer overflow-hidden"
            >
              <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                {/* Left: Large Typography & Category */}
                <div className="lg:max-w-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono text-xs font-bold text-[#E31837] tracking-wider">
                      0{idx + 1}
                    </span>
                    <span className="text-gray-300">—</span>
                    <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-gray-500 font-semibold">
                      {service.category}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-gray-900 group-hover:text-[#E31837] transition-colors uppercase">
                    {service.name}
                  </h3>

                  <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed max-w-lg font-normal">
                    {service.summary}
                  </p>
                </div>

                {/* Right: Roles & Animated Action Arrow */}
                <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-between gap-4 shrink-0">
                  <div className="flex flex-wrap gap-1.5 lg:justify-end max-w-sm">
                    {service.roles.map((role) => (
                      <span
                        key={role}
                        className="text-xs font-mono px-3 py-1 bg-gray-100 border border-gray-200 text-gray-700 group-hover:bg-red-50 group-hover:text-[#E31837] group-hover:border-red-200 transition-colors"
                      >
                        {role}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-gray-800 group-hover:text-[#E31837] transition-colors pt-2 font-semibold">
                    <span>Inquire for this stream</span>
                    <div className="w-9 h-9 border border-gray-300 flex items-center justify-center text-gray-600 group-hover:bg-[#E31837] group-hover:text-white group-hover:border-[#E31837] transition-all duration-200">
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
