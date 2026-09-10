'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import EmployerHero from '@/components/employers/EmployerHero';
import HiringChallengesSection from '@/components/employers/HiringChallengesSection';
import RecruitmentPipelineSection from '@/components/employers/RecruitmentPipelineSection';
import ServicePanelsSection from '@/components/employers/ServicePanelsSection';
import BusinessScenariosSection from '@/components/employers/BusinessScenariosSection';
import WhyHiringsProSection from '@/components/employers/WhyHiringsProSection';
import EmployerIndustriesSection from '@/components/employers/EmployerIndustriesSection';
import EmployerRequirementCta from '@/components/employers/EmployerRequirementCta';
import Footer from '@/components/Footer';
import InquiryModal from '@/components/InquiryModal';

export default function EmployersPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedIndustry, setSelectedIndustry] = useState<string>('Retail');

  const handleOpenHireModal = (industry?: string) => {
    if (industry) setSelectedIndustry(industry);
    setModalOpen(true);
  };

  const handleSelectService = (serviceName: string) => {
    // Map service category to industry or prefill
    setSelectedIndustry('Logistics');
    setModalOpen(true);
  };

  const handleSelectScenario = (scenarioTitle: string) => {
    setModalOpen(true);
  };

  return (
    <main className="relative min-h-screen bg-white text-gray-900 selection:bg-[#E31837]/15 selection:text-gray-900">
      {/* 1. Route-aware Navbar */}
      <Navbar onOpenHireModal={() => handleOpenHireModal()} />

      {/* 2. Hero Section with Network Connections Animation */}
      <EmployerHero onOpenHireModal={() => handleOpenHireModal()} />

      {/* 3. The Problem (Editorial Bottleneck Section) */}
      <HiringChallengesSection />

      {/* 4. Our Approach (5-Step Recruitment Pipeline) */}
      <RecruitmentPipelineSection />

      {/* 5. What We Help With (Large-Format Service Panels) */}
      <ServicePanelsSection onSelectService={handleSelectService} />

      {/* 6. For Different Business Needs (3 Scenarios) */}
      <BusinessScenariosSection onSelectScenario={handleSelectScenario} />

      {/* 7. Why Lords & Kings Manpower Solutions (4 Grounded Commitments) */}
      <WhyHiringsProSection />

      {/* 8. Industries Horizontal Reel */}
      <EmployerIndustriesSection onSelectIndustry={handleOpenHireModal} />

      {/* 9. Requirement Full-Screen CTA */}
      <EmployerRequirementCta onOpenHireModal={() => handleOpenHireModal()} />

      {/* 10. Brand Footer */}
      <Footer />

      {/* Interactive Requirement Modal */}
      <InquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialMode="employer"
        preselectedIndustry={selectedIndustry}
      />
    </main>
  );
}
