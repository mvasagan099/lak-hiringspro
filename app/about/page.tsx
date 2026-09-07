'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import AboutHero from '@/components/about/AboutHero';
import BrandStatementSection from '@/components/about/BrandStatementSection';
import OurApproachSection from '@/components/about/OurApproachSection';
import AudienceDualitySection from '@/components/about/AudienceDualitySection';
import LordsAndKingsHeritageSection from '@/components/about/LordsAndKingsHeritageSection';
import ImmersiveValuesSection from '@/components/about/ImmersiveValuesSection';
import HumanConnectionSection from '@/components/about/HumanConnectionSection';
import AboutFinalCta from '@/components/about/AboutFinalCta';
import Footer from '@/components/Footer';
import InquiryModal from '@/components/InquiryModal';

export default function AboutPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<'employer' | 'candidate'>('employer');

  const handleOpenHireModal = () => {
    setModalMode('employer');
    setModalOpen(true);
  };

  const handleOpenCandidateModal = () => {
    setModalMode('candidate');
    setModalOpen(true);
  };

  return (
    <main className="relative min-h-screen bg-white text-gray-900 selection:bg-[#E31837]/15 selection:text-gray-900">
      {/* Route-Aware Navbar */}
      <Navbar onOpenHireModal={handleOpenHireModal} />

      {/* 1. Hero Section with Abstract Convergence Animation (BUSINESSES ←→ PEOPLE) */}
      <AboutHero />

      {/* 2. Editorial Brand Statement with Scroll-based Typography */}
      <BrandStatementSection />

      {/* 3. Our Approach: 4 Principles Connected by Animated Vertical Line */}
      <OurApproachSection />

      {/* 4. For Businesses & 5. For Candidates */}
      <AudienceDualitySection
        onOpenHireModal={handleOpenHireModal}
        onOpenCandidateModal={handleOpenCandidateModal}
      />

      {/* 6. Lords and Kings Parent-Brand Heritage Section */}
      <LordsAndKingsHeritageSection />

      {/* 7. Immersive Values with Large Display Typography & Scroll Sequence */}
      <ImmersiveValuesSection />

      {/* 8. Human Connection: Visually Emotional Section (BUSINESS ↓ CONNECTION ↓ CANDIDATE) */}
      <HumanConnectionSection />

      {/* 9. Final Statement ("Better connections create better possibilities") & 10. Final CTA */}
      <AboutFinalCta
        onOpenHireModal={handleOpenHireModal}
        onOpenCandidateModal={handleOpenCandidateModal}
      />

      {/* 11. Existing Global Brand Footer */}
      <Footer />

      {/* Interactive Dual-Mode Requirement Modal */}
      <InquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialMode={modalMode}
      />
    </main>
  );
}
