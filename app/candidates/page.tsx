'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import CandidateHero from '@/components/candidates/CandidateHero';
import CandidateIntroSection from '@/components/candidates/CandidateIntroSection';
import CandidateJourneySection from '@/components/candidates/CandidateJourneySection';
import CandidateOpportunitiesSection from '@/components/candidates/CandidateOpportunitiesSection';
import CandidateQualitiesSection from '@/components/candidates/CandidateQualitiesSection';
import CandidateProfileSnapshot from '@/components/candidates/CandidateProfileSnapshot';
import CandidateCtaBanner from '@/components/candidates/CandidateCtaBanner';
import CandidateFaqSection from '@/components/candidates/CandidateFaqSection';
import CandidateFinalCta from '@/components/candidates/CandidateFinalCta';
import Footer from '@/components/Footer';
import InquiryModal from '@/components/InquiryModal';

export default function CandidatesPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<'employer' | 'candidate'>('candidate');
  const [selectedIndustry, setSelectedIndustry] = useState<string>('Retail');

  const handleOpenCandidateModal = (industry?: string) => {
    if (industry) setSelectedIndustry(industry);
    setModalMode('candidate');
    setModalOpen(true);
  };

  const handleOpenHireModal = () => {
    setModalMode('employer');
    setModalOpen(true);
  };

  return (
    <main className="relative min-h-screen bg-white text-gray-900 selection:bg-[#E31837]/15 selection:text-gray-900">
      {/* 1. Route-aware Navbar */}
      <Navbar onOpenHireModal={handleOpenHireModal} />

      {/* 2. Hero Section with Abstract Skill-Opportunity Journey Animation */}
      <CandidateHero onOpenCandidateModal={() => handleOpenCandidateModal()} />

      {/* 3. Introduction with Large Editorial Value Statement */}
      <CandidateIntroSection />

      {/* 4. How It Works: 5-Step Candidate Journey */}
      <CandidateJourneySection />

      {/* 5. Opportunities Across Industries Horizontal Showcase */}
      <CandidateOpportunitiesSection onSelectIndustry={handleOpenCandidateModal} />

      {/* 6. What We Look For: Floating Candidate Qualities */}
      <CandidateQualitiesSection />

      {/* 7. Profile Snapshot Preview Example */}
      <CandidateProfileSnapshot onOpenCandidateModal={() => handleOpenCandidateModal()} />

      {/* 8. Full-Width Candidate CTA Banner */}
      <CandidateCtaBanner onOpenCandidateModal={() => handleOpenCandidateModal()} />

      {/* 9. Accessible Animated FAQ Section */}
      <CandidateFaqSection />

      {/* 10. Final Call to Action */}
      <CandidateFinalCta onOpenCandidateModal={() => handleOpenCandidateModal()} />

      {/* 11. Brand Footer */}
      <Footer />

      {/* Interactive Candidate Intake Modal */}
      <InquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialMode={modalMode}
        preselectedIndustry={selectedIndustry}
      />
    </main>
  );
}
