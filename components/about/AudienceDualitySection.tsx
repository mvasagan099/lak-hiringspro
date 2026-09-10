'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Building2, User, ArrowUpRight } from 'lucide-react';

interface AudienceDualityProps {
  onOpenHireModal: () => void;
  onOpenCandidateModal: () => void;
}

export default function AudienceDualitySection({
  onOpenHireModal,
  onOpenCandidateModal,
}: AudienceDualityProps) {
  return (
    <section className="relative py-24 sm:py-32 px-6 sm:px-8 bg-[#f8f9fa] border-t border-b border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* For Businesses */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            className="p-8 sm:p-12 border border-gray-200 bg-white flex flex-col justify-between group hover:border-[#E31837] hover:shadow-lg hover:shadow-red-500/5 transition-all duration-300 relative overflow-hidden"
          >
            <div>
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-200">
                <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#E31837] font-bold">
                  FOR ENTERPRISES
                </span>
                <div className="w-10 h-10 border border-red-200 bg-red-50 flex items-center justify-center text-[#E31837] group-hover:bg-[#E31837] group-hover:text-white transition-all">
                  <Building2 className="w-4 h-4" />
                </div>
              </div>

              <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold uppercase text-gray-900 mb-6 leading-tight">
                Built around <br />
                <span className="text-[#E31837]">business needs.</span>
              </h3>

              <p className="text-base sm:text-lg text-gray-600 font-normal leading-relaxed mb-10">
                Lords &amp; Kings Manpower Solutions works around the workforce requirements of businesses rather than forcing businesses into a fixed hiring model. We configure sourcing timelines, skill vetting, and onboarding schedules to match your operational demands.
              </p>
            </div>

            <button
              onClick={onOpenHireModal}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 text-xs font-semibold tracking-wider uppercase text-white bg-[#E31837] hover:bg-[#c4122d] transition-all shadow-sm active:scale-95 self-start"
            >
              <span>Hire With Us</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </motion.div>

          {/* For Candidates */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="p-8 sm:p-12 border border-gray-200 bg-white flex flex-col justify-between group hover:border-[#E31837] hover:shadow-lg hover:shadow-red-500/5 transition-all duration-300 relative overflow-hidden"
          >
            <div>
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-200">
                <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#E31837] font-bold">
                  FOR CANDIDATES
                </span>
                <div className="w-10 h-10 border border-red-200 bg-red-50 flex items-center justify-center text-[#E31837] group-hover:bg-[#E31837] group-hover:text-white transition-all">
                  <User className="w-4 h-4" />
                </div>
              </div>

              <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold uppercase text-gray-900 mb-6 leading-tight">
                Built around <br />
                <span className="text-[#E31837]">people&apos;s growth.</span>
              </h3>

              <p className="text-base sm:text-lg text-gray-600 font-normal leading-relaxed mb-10">
                We believe job seekers deserve dignity, transparent information, and zero charges. We connect people with legitimate organizations where their skills are valued, paid on time, and allowed to advance through honest work.
              </p>
            </div>

            <button
              onClick={onOpenCandidateModal}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 text-xs font-semibold tracking-wider uppercase text-gray-900 bg-white border border-gray-900 hover:bg-gray-900 hover:text-white transition-all active:scale-95 self-start"
            >
              <span>Explore Opportunities</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
