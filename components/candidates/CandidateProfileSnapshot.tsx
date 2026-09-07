'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { User, Wrench, History, Briefcase, MapPin, Calendar, ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface ProfileSnapshotProps {
  onOpenCandidateModal: () => void;
}

const mockFields = [
  {
    label: 'Full Name',
    value: 'Candidate Name',
    icon: User,
    note: 'Legal name for verified employer introduction',
  },
  {
    label: 'Key Skills',
    value: 'Inventory Control, Shift Coordination, Safety Compliance',
    icon: Wrench,
    note: 'Your practical hands-on competencies',
  },
  {
    label: 'Experience',
    value: '3+ Years — Operations & Logistics',
    icon: History,
    note: 'Prior work history and verified track record',
  },
  {
    label: 'Preferred Role',
    value: 'Operations Lead / Logistics Specialist',
    icon: Briefcase,
    note: 'The type of position you are targeting',
  },
  {
    label: 'Target Location',
    value: 'Regional Logistics Hubs / Industrial Hubs',
    icon: MapPin,
    note: 'Locations and commute radii you can work in',
  },
  {
    label: 'Availability & Shifts',
    value: 'Immediate Joining • Flexible Shift Schedules',
    icon: Calendar,
    note: 'When you can start and preferred hours',
  },
];

export default function CandidateProfileSnapshot({ onOpenCandidateModal }: ProfileSnapshotProps) {
  return (
    <section className="relative py-24 sm:py-32 px-6 sm:px-8 bg-white border-t border-b border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading and Prompt */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 text-xs font-mono tracking-[0.25em] text-[#E31837] font-semibold uppercase mb-4"
            >
              <span className="w-8 h-[2px] bg-[#E31837]" />
              <span>PROFILE INTAKE</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-3xl sm:text-5xl font-display font-bold uppercase tracking-tight text-gray-900 leading-[1.08]"
            >
              What you share <br />
              <span className="text-[#E31837]">with our team.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 text-base sm:text-lg text-gray-600 leading-relaxed font-normal"
            >
              You don&apos;t need an elaborate resume or a complicated online portfolio.
              Our intake focuses on the foundational facts that matter to hiring managers: what you know, where you’ve worked, and how soon you can begin.
            </motion.p>

            {/* Ready prompt box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-10 p-6 sm:p-8 bg-[#f8f9fa] border border-gray-200"
            >
              <h3 className="text-lg font-display font-bold text-gray-900 mb-2 uppercase">
                Ready to introduce yourself?
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mb-6 leading-relaxed font-normal">
                Take two minutes to submit your details and let our recruitment desk find relevant opportunities for you.
              </p>

              <button
                onClick={onOpenCandidateModal}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-xs font-semibold tracking-wider uppercase text-white bg-[#E31837] hover:bg-[#c4122d] transition-all shadow-sm active:scale-95"
              >
                <span>Submit Your Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          </div>

          {/* Right Column: Visual Mock Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="lg:col-span-7 p-6 sm:p-8 border border-gray-200 bg-[#f8f9fa] shadow-sm relative overflow-hidden"
          >
            {/* Card Header with Example Badge */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gray-200 mb-6">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 border border-red-200 bg-red-50 flex items-center justify-center text-[#E31837] font-mono text-sm font-bold">
                  LK
                </div>
                <div>
                  <h4 className="text-lg font-display font-bold text-gray-900 flex items-center gap-2 uppercase">
                    <span>Candidate Profile Snapshot</span>
                    <CheckCircle2 className="w-4 h-4 text-[#E31837]" />
                  </h4>
                  <span className="text-xs font-mono text-gray-500 tracking-wider">
                    INTAKE PREVIEW &bull; STANDARD DOSSIER
                  </span>
                </div>
              </div>

              <span className="text-[10px] font-mono tracking-wider uppercase px-3 py-1 bg-white border border-gray-200 text-[#E31837] font-bold self-start sm:self-auto">
                VISUAL EXAMPLE ONLY
              </span>
            </div>

            {/* 6 Fields Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {mockFields.map((field) => {
                const Icon = field.icon;
                return (
                  <div
                    key={field.label}
                    className="p-4 bg-white border border-gray-200 hover:border-[#E31837] transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-1.5 text-[#E31837] text-xs font-mono">
                      <Icon className="w-3.5 h-3.5" />
                      <span className="uppercase tracking-wider text-gray-500 text-[10px] font-semibold">{field.label}</span>
                    </div>
                    <p className="text-sm font-display font-bold text-gray-900 mb-1">
                      {field.value}
                    </p>
                    <span className="text-[11px] text-gray-500 leading-tight block font-normal">
                      {field.note}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 pt-4 border-t border-gray-200 flex items-center justify-between text-xs font-mono text-gray-500">
              <span>Verified Employer Intakes Only</span>
              <span className="text-[#E31837] font-semibold">Zero Candidate Charges</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
