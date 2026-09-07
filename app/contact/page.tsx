'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import ContactHero from '@/components/contact/ContactHero';
import ContactPaths from '@/components/contact/ContactPaths';
import ContactConnectionVisual from '@/components/contact/ContactConnectionVisual';
import Footer from '@/components/Footer';
import InquiryModal from '@/components/InquiryModal';

export default function ContactPage() {
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

      {/* 1. Contact Hero */}
      <ContactHero />

      {/* 2. Two Primary Paths & Direct Channels (WhatsApp / Call / Email) */}
      <ContactPaths
        onOpenHireModal={handleOpenHireModal}
        onOpenCandidateModal={handleOpenCandidateModal}
      />

      {/* 3. Animated Connection Visual (BUSINESS ↓ L&K HIRINGSPRO ↓ CANDIDATE) */}
      <ContactConnectionVisual />

      {/* 4. Global Brand Footer */}
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
