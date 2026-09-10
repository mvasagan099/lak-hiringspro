'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Send, MessageSquare, Building2, User, Loader2 } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: 'employer' | 'candidate';
  preselectedIndustry?: string;
}

export default function InquiryModal({
  isOpen,
  onClose,
  initialMode = 'employer',
  preselectedIndustry = '',
}: InquiryModalProps) {
  const [mode, setMode] = useState<'employer' | 'candidate'>(initialMode);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form states
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    industry: preselectedIndustry || 'Retail',
    headcountOrRole: '',
    details: '',
  });

  useEffect(() => {
    setMode(initialMode);
    if (preselectedIndustry) {
      setFormData((prev) => ({ ...prev, industry: preselectedIndustry }));
    }
    setSubmitted(false);
  }, [initialMode, preselectedIndustry, isOpen]);

  // Handle ESC key and prevent background scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mode, ...formData }),
      });
      setSubmitted(true);
    } catch (err) {
      console.error('Failed to submit inquiry:', err);
      // Still show submitted state so user can proceed to WhatsApp
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      industry: 'Retail',
      headcountOrRole: '',
      details: '',
    });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-hidden">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg lg:max-w-xl bg-white border border-gray-200 shadow-2xl z-10 flex flex-col max-h-[92dvh] sm:max-h-[88dvh] overflow-hidden"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            {/* Top red accent line */}
            <div className="h-1 bg-[#E31837] w-full shrink-0" />

            {/* Modal Header (Fixed / Non-scrolling) */}
            <div className="shrink-0 p-4 sm:p-6 pb-3 sm:pb-4 flex items-start justify-between border-b border-gray-100 bg-white">
              <div className="pr-2">
                <span className="text-[9px] sm:text-[10px] font-mono tracking-[0.2em] sm:tracking-[0.25em] text-[#E31837] uppercase block mb-1 font-bold">
                  LORDS &amp; KINGS GROUP &bull; MANPOWER SOLUTIONS
                </span>
                <h3 id="modal-headline" className="text-lg sm:text-2xl font-bold font-display text-gray-900 uppercase leading-tight">
                  {mode === 'employer' ? 'Request Workforce Deployment' : 'Candidate Intake Profile'}
                </h3>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 sm:w-8 sm:h-8 flex items-center justify-center text-gray-400 hover:text-gray-900 hover:bg-gray-100 border border-gray-200 transition-colors shrink-0"
                aria-label="Close modal"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>

            {/* Mode Switcher Tabs (Fixed / Non-scrolling) */}
            {!submitted && (
              <div className="shrink-0 grid grid-cols-2 border-b border-gray-200 bg-gray-50">
                <button
                  type="button"
                  onClick={() => setMode('employer')}
                  className={`py-3 sm:py-3.5 px-3 sm:px-4 text-[11px] sm:text-xs font-semibold tracking-wider uppercase transition-colors flex items-center justify-center gap-1.5 sm:gap-2 ${
                    mode === 'employer'
                      ? 'bg-white text-[#E31837] border-b-2 border-[#E31837]'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <Building2 className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">For Employers</span>
                </button>
                <button
                  type="button"
                  onClick={() => setMode('candidate')}
                  className={`py-3 sm:py-3.5 px-3 sm:px-4 text-[11px] sm:text-xs font-semibold tracking-wider uppercase transition-colors flex items-center justify-center gap-1.5 sm:gap-2 ${
                    mode === 'candidate'
                      ? 'bg-white text-[#E31837] border-b-2 border-[#E31837]'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <User className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">For Candidates</span>
                </button>
              </div>
            )}

            {/* Form Body or Success State (Scrollable) */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-7 overscroll-contain">
              {submitted ? (
                <div className="py-6 sm:py-8 text-center flex flex-col items-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-red-50 border border-red-200 flex items-center justify-center text-[#E31837] mb-3 sm:mb-4">
                    <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold font-display text-gray-900 uppercase">
                    Inquiry Received
                  </h4>
                  <p className="mt-2 text-xs sm:text-sm text-gray-600 max-w-sm">
                    Thank you, {formData.name || 'Candidate'}. An account specialist from Lords &amp; Kings Group Manpower Solutions will reach out within 24–48 hours.
                  </p>
                  <div className="mt-6 flex flex-col gap-3 w-full max-w-xs">
                    <a
                      href={CONTACT_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 py-3 px-4 bg-[#E31837] text-white text-xs font-semibold tracking-wider uppercase hover:bg-[#c4122d] transition-colors"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Instant WhatsApp Desk</span>
                    </a>
                    <button
                      onClick={resetForm}
                      className="py-2.5 text-xs uppercase tracking-wider text-gray-500 hover:text-gray-900 transition-colors"
                    >
                      Close Window
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-[11px] sm:text-xs font-mono tracking-wider uppercase text-gray-600 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-3 sm:px-3.5 py-2 sm:py-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:outline-none focus:border-[#E31837] focus:bg-white transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] sm:text-xs font-mono tracking-wider uppercase text-gray-600 mb-1">
                        {mode === 'employer' ? 'Company Name *' : 'Current Location *'}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder={mode === 'employer' ? 'e.g. Apex Retail Pvt Ltd' : 'e.g. Bangalore / Chennai'}
                        className="w-full px-3 sm:px-3.5 py-2 sm:py-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:outline-none focus:border-[#E31837] focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-[11px] sm:text-xs font-mono tracking-wider uppercase text-gray-600 mb-1">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="contact@company.com"
                        className="w-full px-3 sm:px-3.5 py-2 sm:py-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:outline-none focus:border-[#E31837] focus:bg-white transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] sm:text-xs font-mono tracking-wider uppercase text-gray-600 mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 89255 13218"
                        className="w-full px-3 sm:px-3.5 py-2 sm:py-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:outline-none focus:border-[#E31837] focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-[11px] sm:text-xs font-mono tracking-wider uppercase text-gray-600 mb-1">
                        Primary Industry
                      </label>
                      <select
                        value={formData.industry}
                        onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                        className="w-full px-3 sm:px-3.5 py-2 sm:py-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:outline-none focus:border-[#E31837] focus:bg-white transition-colors"
                      >
                        <option value="Retail">Retail &amp; Store Ops</option>
                        <option value="Logistics">Logistics &amp; Warehousing</option>
                        <option value="Manufacturing">Manufacturing &amp; Plant Ops</option>
                        <option value="Hospitality">Hospitality &amp; Dining</option>
                        <option value="E-Commerce">E-Commerce &amp; Dispatch</option>
                        <option value="Sales">Sales &amp; Support</option>
                        <option value="Technical">Technical &amp; Maintenance</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[11px] sm:text-xs font-mono tracking-wider uppercase text-gray-600 mb-1">
                        {mode === 'employer' ? 'Target Headcount' : 'Desired Position'}
                      </label>
                      <input
                        type="text"
                        value={formData.headcountOrRole}
                        onChange={(e) => setFormData({ ...formData, headcountOrRole: e.target.value })}
                        placeholder={mode === 'employer' ? 'e.g. 15 Warehouse Leads' : 'e.g. Store Supervisor'}
                        className="w-full px-3 sm:px-3.5 py-2 sm:py-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:outline-none focus:border-[#E31837] focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] sm:text-xs font-mono tracking-wider uppercase text-gray-600 mb-1">
                      Operational Brief / Notes
                    </label>
                    <textarea
                      rows={2}
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      placeholder={
                        mode === 'employer'
                          ? 'Specify key operational requirements, timelines, or shift timings...'
                          : 'Mention your years of experience, current employment, and availability...'
                      }
                      className="w-full px-3 sm:px-3.5 py-2 sm:py-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:outline-none focus:border-[#E31837] focus:bg-white transition-colors resize-none sm:rows-3"
                    />
                  </div>

                  <div className="pt-2 sm:pt-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 sm:py-4 bg-[#E31837] hover:bg-[#c4122d] disabled:opacity-75 disabled:cursor-not-allowed text-white text-xs font-semibold tracking-[0.14em] uppercase transition-all shadow-sm active:scale-[0.99] flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Submitting...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span className="truncate">
                            {mode === 'employer' ? 'Submit Enterprise Request' : 'Submit Candidate Registration'}
                          </span>
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-center text-[10px] sm:text-[11px] text-gray-500 font-mono pt-1 leading-snug">
                    Direct submission to Lords &amp; Kings Group Manpower Solutions Operations Desk &bull; Privacy protected
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
