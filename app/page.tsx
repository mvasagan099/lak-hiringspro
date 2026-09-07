'use client';

import React, { useState } from 'react';
import Preloader from '@/components/Preloader';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import LordsKingsConnection from '@/components/LordsKingsConnection';
import TrustSection from '@/components/TrustSection';
import ServicesListSection from '@/components/ServicesListSection';
import ProcessSection from '@/components/ProcessSection';
import EmployerSection from '@/components/EmployerSection';
import CandidateSection from '@/components/CandidateSection';
import IndustriesSection from '@/components/IndustriesSection';
import AboutSection from '@/components/AboutSection';
import FinalCtaSection from '@/components/FinalCtaSection';
import Footer from '@/components/Footer';
import InquiryModal from '@/components/InquiryModal';

export default function Home() {
  const [preloaderComplete, setPreloaderComplete] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<'employer' | 'candidate'>('employer');
  const [selectedIndustry, setSelectedIndustry] = useState<string>('Retail');

  const handleOpenHireModal = (industry?: string) => {
    if (industry) setSelectedIndustry(industry);
    setModalMode('employer');
    setModalOpen(true);
  };

  const handleOpenCandidateModal = () => {
    setModalMode('candidate');
    setModalOpen(true);
  };

  const handleSelectIndustry = (industry: string) => {
    setSelectedIndustry(industry);
    setModalMode('employer');
    setModalOpen(true);
  };

  return (
    <main className="relative min-h-screen bg-white text-gray-900 selection:bg-[#E31837]/15 selection:text-gray-900">
      {/* 1. Cinematic Preloader Sequence */}
      <Preloader onComplete={() => setPreloaderComplete(true)} />

      {/* 2. Responsive Lords & Kings Brand Navigation */}
      <Navbar onOpenHireModal={() => handleOpenHireModal()} />

      {/* 3. Hero Section: PEOPLE ARE THE FOUNDATION OF EVERY GREAT BUSINESS. */}
      <Hero
        onOpenHireModal={() => handleOpenHireModal()}
        onOpenCandidateModal={handleOpenCandidateModal}
      />

      {/* 4. Lords & Kings Group Parent-Brand Connection */}
      <LordsKingsConnection />

      {/* 5. Introduction Statement: THE RIGHT PEOPLE CREATE STRONGER BUSINESSES. */}
      <TrustSection />

      {/* 6. Editorial Services List: 01 to 06 */}
      <ServicesListSection onSelectService={(service) => handleOpenHireModal()} />

      {/* 7. Recruitment Journey: 6-Stage Timeline with Gold Line */}
      <ProcessSection />

      {/* 8. For Business: YOUR REQUIREMENT. OUR FOCUS. */}
      <EmployerSection onOpenHireModal={() => handleOpenHireModal()} />

      {/* 9. For Candidates: YOUR NEXT OPPORTUNITY STARTS HERE. */}
      <CandidateSection onOpenCandidateModal={handleOpenCandidateModal} />

      {/* 10. Industries: 7 Sectors with Subtle Horizontal Movement */}
      <IndustriesSection onSelectIndustry={handleSelectIndustry} />

      {/* 11. About: MORE THAN FILLING POSITIONS. WE BUILD CONNECTIONS. */}
      <AboutSection />

      {/* 12. Final Call to Action: BUILD YOUR TEAM. BUILD YOUR FUTURE. */}
      <FinalCtaSection
        onOpenHireModal={() => handleOpenHireModal()}
        onOpenContactModal={handleOpenCandidateModal}
      />

      {/* 13. Brand Footer */}
      <Footer />

      {/* Interactive Requirement & Profile Modal */}
      <InquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialMode={modalMode}
        preselectedIndustry={selectedIndustry}
      />
    </main>
  );
}

