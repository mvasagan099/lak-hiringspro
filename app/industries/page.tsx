'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import IndustriesHero from '@/components/industries/IndustriesHero';
import IndustryHorizontalJourney from '@/components/industries/IndustryHorizontalJourney';
import CrossIndustryStatement from '@/components/industries/CrossIndustryStatement';
import IndustriesEmployerCta from '@/components/industries/IndustriesEmployerCta';
import IndustriesCandidateCta from '@/components/industries/IndustriesCandidateCta';
import Footer from '@/components/Footer';
import InquiryModal from '@/components/InquiryModal';

export default function IndustriesPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<'employer' | 'candidate'>('employer');
  const [selectedIndustry, setSelectedIndustry] = useState<string>('Retail');

  const handleOpenHireModal = (industryName?: string) => {
    if (industryName) setSelectedIndustry(industryName);
    setModalMode('employer');
    setModalOpen(true);
  };

  const handleOpenCandidateModal = () => {
    setModalMode('candidate');
    setModalOpen(true);
  };

  return (
    <main className="relative min-h-screen bg-white text-gray-900 selection:bg-[#E31837]/15 selection:text-gray-900">
      {/* 1. Route-aware Navbar */}
      <Navbar onOpenHireModal={() => handleOpenHireModal()} />

      {/* 2. Hero Section with Network Grid Background */}
      <IndustriesHero />

      {/* 3. Horizontal Industry Journey (Pinned Desktop & Responsive Mobile Stack) */}
      <IndustryHorizontalJourney onSelectIndustry={handleOpenHireModal} />

      {/* 4. Cross-Industry Statement */}
      <CrossIndustryStatement />

      {/* 5. Employer Call to Action */}
      <IndustriesEmployerCta onOpenHireModal={() => handleOpenHireModal()} />

      {/* 6. Candidate Call to Action */}
      <IndustriesCandidateCta onOpenCandidateModal={handleOpenCandidateModal} />

      {/* 7. Global Brand Footer */}
      <Footer />

      {/* Interactive Dual-Mode Requirement Modal */}
      <InquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialMode={modalMode}
        preselectedIndustry={selectedIndustry}
      />
    </main>
  );
}
