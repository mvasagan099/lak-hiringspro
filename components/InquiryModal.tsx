'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  CheckCircle2,
  Send,
  MessageSquare,
  Building2,
  User,
  Loader2,
  ChevronDown,
  Check,
  Plus,
  Minus,
  Layers,
  Sparkles,
} from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';

export const INDUSTRY_OPTIONS = [
  { id: 'Retail', label: 'Retail & Store Ops' },
  { id: 'Logistics', label: 'Logistics & Warehousing' },
  { id: 'Manufacturing', label: 'Manufacturing & Plant Ops' },
  { id: 'Hospitality', label: 'Hospitality & Dining' },
  { id: 'E-Commerce', label: 'E-Commerce & Dispatch' },
  { id: 'Sales', label: 'Sales & Support' },
  { id: 'Technical', label: 'Technical & Maintenance' },
  { id: 'Others', label: 'Others' },
];

const HEADCOUNT_PRESETS = ['1–10', '11–25', '26–50', '51–100', '100+'];

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

  // Form base states
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [details, setDetails] = useState('');

  // Employer specific states
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>(['Retail']);
  const [employerOtherIndustry, setEmployerOtherIndustry] = useState('');
  const [isIndustryDropdownOpen, setIsIndustryDropdownOpen] = useState(false);
  const [targetHeadcount, setTargetHeadcount] = useState('');
  const [perIndustryHeadcount, setPerIndustryHeadcount] = useState<Record<string, number>>({});
  const [showPerIndustryBreakdown, setShowPerIndustryBreakdown] = useState(false);

  // Candidate specific states
  const [candidateIndustry, setCandidateIndustry] = useState('Retail');
  const [candidateOtherIndustry, setCandidateOtherIndustry] = useState('');
  const [desiredPosition, setDesiredPosition] = useState('');

  const dropdownRef = useRef<HTMLDivElement>(null);

  // Match preselectedIndustry
  useEffect(() => {
    setMode(initialMode);
    if (preselectedIndustry) {
      const match = INDUSTRY_OPTIONS.find(
        (opt) =>
          opt.id.toLowerCase() === preselectedIndustry.toLowerCase() ||
          opt.label.toLowerCase().includes(preselectedIndustry.toLowerCase())
      );
      const industryId = match ? match.id : 'Retail';
      setSelectedIndustries([industryId]);
      setCandidateIndustry(industryId);
    }
    setSubmitted(false);
  }, [initialMode, preselectedIndustry, isOpen]);

  // Click outside to close dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsIndustryDropdownOpen(false);
      }
    }
    if (isIndustryDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isIndustryDropdownOpen]);

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

  // Toggle multi-select industry for employer
  const toggleIndustry = (id: string) => {
    setSelectedIndustries((prev) => {
      if (prev.includes(id)) {
        // Prevent deselecting if it's the only one selected
        if (prev.length === 1) return prev;
        const updated = prev.filter((item) => item !== id);
        // Clean up per-industry headcount
        const updatedCounts = { ...perIndustryHeadcount };
        delete updatedCounts[id];
        setPerIndustryHeadcount(updatedCounts);
        return updated;
      } else {
        return [...prev, id];
      }
    });
  };

  // Update headcount for specific industry
  const updateIndustryHeadcount = (id: string, delta: number) => {
    setPerIndustryHeadcount((prev) => {
      const current = prev[id] || 0;
      const next = Math.max(0, current + delta);
      const updated = { ...prev, [id]: next };

      // Calculate total headcount
      const total = Object.values(updated).reduce((acc, val) => acc + (val || 0), 0);
      if (total > 0) {
        setTargetHeadcount(`${total} Staff`);
      }
      return updated;
    });
  };

  const handleIndustryHeadcountInput = (id: string, value: string) => {
    const num = parseInt(value.replace(/[^0-9]/g, ''), 10);
    const nextVal = isNaN(num) ? 0 : num;
    setPerIndustryHeadcount((prev) => {
      const updated = { ...prev, [id]: nextVal };
      const total = Object.values(updated).reduce((acc, val) => acc + (val || 0), 0);
      if (total > 0) {
        setTargetHeadcount(`${total} Staff`);
      }
      return updated;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      let finalIndustry = '';
      let finalHeadcountOrRole = '';

      if (mode === 'employer') {
        // Format industries with labels and headcount if set
        const industryLabels = selectedIndustries.map((id) => {
          const opt = INDUSTRY_OPTIONS.find((o) => o.id === id);
          let label = opt ? opt.label : id;
          if (id === 'Others' && employerOtherIndustry.trim()) {
            label = `Others (${employerOtherIndustry.trim()})`;
          }
          const count = perIndustryHeadcount[id];
          if (count && count > 0) {
            return `${label} [${count} Headcount]`;
          }
          return label;
        });

        finalIndustry = industryLabels.join(', ');
        finalHeadcountOrRole = targetHeadcount.trim() || 'Not specified';
      } else {
        // Candidate mode
        if (candidateIndustry === 'Others') {
          finalIndustry = candidateOtherIndustry.trim()
            ? `Others (${candidateOtherIndustry.trim()})`
            : 'Others (Unspecified)';
        } else {
          const opt = INDUSTRY_OPTIONS.find((o) => o.id === candidateIndustry);
          finalIndustry = opt ? opt.label : candidateIndustry;
        }
        finalHeadcountOrRole = desiredPosition.trim() || 'Open for placement';
      }

      await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          mode,
          name,
          company,
          email,
          phone,
          industry: finalIndustry,
          headcountOrRole: finalHeadcountOrRole,
          details,
          metadata: {
            selectedIndustries: mode === 'employer' ? selectedIndustries : [candidateIndustry],
            perIndustryHeadcount: mode === 'employer' ? perIndustryHeadcount : undefined,
          },
        }),
      });
      setSubmitted(true);
    } catch (err) {
      console.error('Failed to submit inquiry:', err);
      // Still show submitted state so user can proceed to WhatsApp desk
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setSubmitted(false);
    setName('');
    setCompany('');
    setEmail('');
    setPhone('');
    setSelectedIndustries(['Retail']);
    setEmployerOtherIndustry('');
    setTargetHeadcount('');
    setPerIndustryHeadcount({});
    setShowPerIndustryBreakdown(false);
    setCandidateIndustry('Retail');
    setCandidateOtherIndustry('');
    setDesiredPosition('');
    setDetails('');
    onClose();
  };

  // WhatsApp quick text with dynamic values
  const whatsappUrl = `${CONTACT_INFO.whatsappUrl}%0A%0A*Name:*%20${encodeURIComponent(
    name || 'Client'
  )}%0A*Type:*%20${mode === 'employer' ? 'Employer%20Requirement' : 'Candidate%20Application'}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-4 md:p-6 overflow-hidden">
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
            className="relative w-full max-w-lg lg:max-w-xl bg-white border border-gray-200 shadow-2xl z-10 flex flex-col max-h-[94dvh] sm:max-h-[90dvh] overflow-hidden"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            {/* Top red accent line */}
            <div className="h-1 bg-[#E31837] w-full shrink-0" />

            {/* Modal Header */}
            <div className="shrink-0 p-4 sm:p-5 pb-3 sm:pb-4 flex items-start justify-between border-b border-gray-100 bg-white">
              <div className="pr-2">
                <span className="text-[9px] sm:text-[10px] font-mono tracking-[0.2em] sm:tracking-[0.25em] text-[#E31837] uppercase block mb-0.5 sm:mb-1 font-bold">
                  LORDS &amp; KINGS MANPOWER SOLUTIONS
                </span>
                <h3
                  id="modal-headline"
                  className="text-lg sm:text-2xl font-bold font-display text-gray-900 uppercase leading-tight"
                >
                  {mode === 'employer' ? 'Request Workforce Deployment' : 'Candidate Intake Profile'}
                </h3>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-900 hover:bg-gray-100 border border-gray-200 transition-colors shrink-0"
                aria-label="Close modal"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>

            {/* Mode Switcher Tabs */}
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

            {/* Form Body or Success State */}
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
                    Thank you, {name || 'valued partner'}. An enterprise deployment specialist from Lords &amp; Kings
                    Manpower Solutions will review your requirements and reach out within 24–48 hours.
                  </p>
                  <div className="mt-6 flex flex-col gap-3 w-full max-w-xs">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 py-3 px-4 bg-[#E31837] text-white text-xs font-semibold tracking-wider uppercase hover:bg-[#c4122d] transition-colors shadow-sm"
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
                <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
                  {/* Row 1: Name & Company/Location */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-[11px] sm:text-xs font-mono tracking-wider uppercase text-gray-600 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
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
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder={mode === 'employer' ? 'e.g. Apex Retail Pvt Ltd' : 'e.g. Bangalore / Chennai'}
                        className="w-full px-3 sm:px-3.5 py-2 sm:py-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:outline-none focus:border-[#E31837] focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 2: Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-[11px] sm:text-xs font-mono tracking-wider uppercase text-gray-600 mb-1">
                        {mode === 'employer' ? 'Work Email *' : 'Email Address *'}
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 89255 13218"
                        className="w-full px-3 sm:px-3.5 py-2 sm:py-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:outline-none focus:border-[#E31837] focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  {/* EMPLOYER MODE: Multiple Industries & Headcount */}
                  {mode === 'employer' ? (
                    <div className="space-y-3.5 bg-gray-50/70 border border-gray-200 p-3 sm:p-3.5">
                      {/* Industry Multi-Select Dropdown & Pills */}
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <label className="block text-[11px] sm:text-xs font-mono tracking-wider uppercase text-gray-700 font-semibold">
                            Primary Industries * <span className="text-gray-400 font-normal">(Select Multiple)</span>
                          </label>
                          <span className="text-[10px] font-mono text-[#E31837] font-semibold">
                            {selectedIndustries.length} {selectedIndustries.length === 1 ? 'Selected' : 'Selected'}
                          </span>
                        </div>

                        {/* Multi-Select Dropdown Trigger */}
                        <div className="relative" ref={dropdownRef}>
                          <button
                            type="button"
                            onClick={() => setIsIndustryDropdownOpen((prev) => !prev)}
                            className="w-full min-h-[40px] px-3 py-2 bg-white border border-gray-300 text-left text-sm flex items-center justify-between gap-2 focus:outline-none focus:border-[#E31837] transition-colors"
                          >
                            <div className="flex flex-wrap gap-1.5 items-center flex-1">
                              {selectedIndustries.length === 0 ? (
                                <span className="text-gray-400 text-xs">Select target industries...</span>
                              ) : (
                                selectedIndustries.map((id) => {
                                  const opt = INDUSTRY_OPTIONS.find((o) => o.id === id);
                                  return (
                                    <span
                                      key={id}
                                      className="inline-flex items-center gap-1 px-2 py-0.5 bg-red-50 text-[#E31837] border border-red-200 text-xs font-medium"
                                    >
                                      <span className="truncate max-w-[120px] sm:max-w-[160px]">
                                        {opt ? opt.label : id}
                                      </span>
                                      <span
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          toggleIndustry(id);
                                        }}
                                        className="hover:bg-red-200/60 p-0.5 rounded cursor-pointer"
                                      >
                                        <X className="w-3 h-3" />
                                      </span>
                                    </span>
                                  );
                                })
                              )}
                            </div>
                            <ChevronDown
                              className={`w-4 h-4 text-gray-500 shrink-0 transition-transform duration-200 ${
                                isIndustryDropdownOpen ? 'rotate-180 text-[#E31837]' : ''
                              }`}
                            />
                          </button>

                          {/* Dropdown Menu */}
                          <AnimatePresence>
                            {isIndustryDropdownOpen && (
                              <motion.div
                                initial={{ opacity: 0, y: -4 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -4 }}
                                transition={{ duration: 0.15 }}
                                className="absolute left-0 right-0 top-full mt-1 bg-white border border-gray-300 shadow-xl z-30 max-h-56 overflow-y-auto divide-y divide-gray-100"
                              >
                                {INDUSTRY_OPTIONS.map((opt) => {
                                  const isSelected = selectedIndustries.includes(opt.id);
                                  return (
                                    <button
                                      type="button"
                                      key={opt.id}
                                      onClick={() => toggleIndustry(opt.id)}
                                      className={`w-full px-3.5 py-2.5 text-left text-xs sm:text-sm flex items-center justify-between hover:bg-red-50/60 transition-colors ${
                                        isSelected ? 'bg-red-50/40 text-[#E31837] font-semibold' : 'text-gray-800'
                                      }`}
                                    >
                                      <div className="flex items-center gap-2.5">
                                        <div
                                          className={`w-4 h-4 border flex items-center justify-center transition-colors ${
                                            isSelected
                                              ? 'bg-[#E31837] border-[#E31837] text-white'
                                              : 'border-gray-300 bg-white'
                                          }`}
                                        >
                                          {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                                        </div>
                                        <span>{opt.label}</span>
                                      </div>
                                      {opt.id === 'Others' && (
                                        <span className="text-[10px] font-mono text-gray-400 uppercase">Custom</span>
                                      )}
                                    </button>
                                  );
                                })}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>

                        {/* Quick toggle chips */}
                        <div className="flex flex-wrap gap-1.5 mt-2">
                          {INDUSTRY_OPTIONS.map((opt) => {
                            const isSelected = selectedIndustries.includes(opt.id);
                            return (
                              <button
                                key={opt.id}
                                type="button"
                                onClick={() => toggleIndustry(opt.id)}
                                className={`text-[11px] px-2.5 py-1 border transition-all flex items-center gap-1 ${
                                  isSelected
                                    ? 'bg-[#E31837] text-white border-[#E31837] shadow-xs'
                                    : 'bg-white text-gray-600 border-gray-200 hover:border-gray-400 hover:text-gray-900'
                                }`}
                              >
                                {isSelected ? <Check className="w-2.5 h-2.5" /> : <Plus className="w-2.5 h-2.5 text-gray-400" />}
                                <span>{opt.label.split('&')[0].trim()}</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* If Others is selected in Employer Mode */}
                      {selectedIndustries.includes('Others') && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="pt-1"
                        >
                          <label className="block text-[11px] font-mono tracking-wider uppercase text-gray-600 mb-1">
                            Specify Other Industry / Sector *
                          </label>
                          <input
                            type="text"
                            required
                            value={employerOtherIndustry}
                            onChange={(e) => setEmployerOtherIndustry(e.target.value)}
                            placeholder="e.g. Healthcare, Facility Management, Construction, Agro..."
                            className="w-full px-3 py-2 bg-white border border-gray-300 text-gray-900 text-xs sm:text-sm focus:outline-none focus:border-[#E31837]"
                          />
                        </motion.div>
                      )}

                      {/* Headcount Setting Section */}
                      <div className="pt-2 border-t border-gray-200">
                        <div className="flex items-center justify-between mb-1.5">
                          <label className="block text-[11px] sm:text-xs font-mono tracking-wider uppercase text-gray-700 font-semibold">
                            Target Headcount *
                          </label>
                          {selectedIndustries.length > 1 && (
                            <button
                              type="button"
                              onClick={() => setShowPerIndustryBreakdown((prev) => !prev)}
                              className="text-[10px] font-mono text-[#E31837] hover:underline flex items-center gap-1"
                            >
                              <Layers className="w-3 h-3" />
                              <span>{showPerIndustryBreakdown ? 'Simple View' : 'Allocate by Industry'}</span>
                            </button>
                          )}
                        </div>

                        {/* Headcount Presets & Input */}
                        <div className="grid grid-cols-1 sm:grid-cols-12 gap-2">
                          <div className="sm:col-span-7">
                            <input
                              type="text"
                              required
                              value={targetHeadcount}
                              onChange={(e) => setTargetHeadcount(e.target.value)}
                              placeholder="e.g. 25 Warehouse Leads, or 50 Total"
                              className="w-full px-3 py-2 bg-white border border-gray-300 text-gray-900 text-xs sm:text-sm focus:outline-none focus:border-[#E31837]"
                            />
                          </div>

                          {/* Quick headcount tier presets */}
                          <div className="sm:col-span-5 flex flex-wrap items-center gap-1">
                            {HEADCOUNT_PRESETS.map((preset) => (
                              <button
                                key={preset}
                                type="button"
                                onClick={() => setTargetHeadcount(`${preset} Staff`)}
                                className={`text-[10px] font-mono px-2 py-1.5 border transition-colors ${
                                  targetHeadcount.includes(preset)
                                    ? 'bg-[#E31837] text-white border-[#E31837]'
                                    : 'bg-white text-gray-600 border-gray-200 hover:border-gray-400'
                                }`}
                              >
                                {preset}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Optional Per-Industry Headcount Stepper Breakdown */}
                        {showPerIndustryBreakdown && selectedIndustries.length > 1 && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-3 p-2.5 bg-white border border-gray-200 space-y-2"
                          >
                            <span className="text-[10px] font-mono uppercase text-gray-500 block mb-1">
                              Industry Headcount Allocation:
                            </span>
                            {selectedIndustries.map((id) => {
                              const opt = INDUSTRY_OPTIONS.find((o) => o.id === id);
                              const label =
                                id === 'Others' && employerOtherIndustry
                                  ? employerOtherIndustry
                                  : opt
                                  ? opt.label
                                  : id;
                              const count = perIndustryHeadcount[id] || 0;

                              return (
                                <div key={id} className="flex items-center justify-between gap-2 py-1 border-b border-gray-100 last:border-none">
                                  <span className="text-xs text-gray-700 truncate max-w-[180px] sm:max-w-[220px]">
                                    {label}
                                  </span>
                                  <div className="flex items-center gap-1.5">
                                    <button
                                      type="button"
                                      onClick={() => updateIndustryHeadcount(id, -5)}
                                      className="w-6 h-6 flex items-center justify-center border border-gray-200 text-gray-600 hover:bg-gray-100"
                                      title="-5"
                                    >
                                      <Minus className="w-3 h-3" />
                                    </button>
                                    <input
                                      type="text"
                                      value={count > 0 ? count : ''}
                                      onChange={(e) => handleIndustryHeadcountInput(id, e.target.value)}
                                      placeholder="0"
                                      className="w-12 h-6 text-center text-xs border border-gray-300 focus:outline-none focus:border-[#E31837]"
                                    />
                                    <button
                                      type="button"
                                      onClick={() => updateIndustryHeadcount(id, 5)}
                                      className="w-6 h-6 flex items-center justify-center border border-gray-200 text-gray-600 hover:bg-gray-100"
                                      title="+5"
                                    >
                                      <Plus className="w-3 h-3" />
                                    </button>
                                  </div>
                                </div>
                              );
                            })}
                          </motion.div>
                        )}
                      </div>
                    </div>
                  ) : (
                    /* CANDIDATE MODE: Single Select Industry (with Others) & Desired Position */
                    <div className="space-y-3">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        <div>
                          <label className="block text-[11px] sm:text-xs font-mono tracking-wider uppercase text-gray-600 mb-1">
                            Primary Industry *
                          </label>
                          <select
                            value={candidateIndustry}
                            onChange={(e) => setCandidateIndustry(e.target.value)}
                            className="w-full px-3 sm:px-3.5 py-2 sm:py-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:outline-none focus:border-[#E31837] focus:bg-white transition-colors"
                          >
                            {INDUSTRY_OPTIONS.map((opt) => (
                              <option key={opt.id} value={opt.id}>
                                {opt.label}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-[11px] sm:text-xs font-mono tracking-wider uppercase text-gray-600 mb-1">
                            Desired Position *
                          </label>
                          <input
                            type="text"
                            required
                            value={desiredPosition}
                            onChange={(e) => setDesiredPosition(e.target.value)}
                            placeholder="e.g. Store Supervisor / Forklift Lead"
                            className="w-full px-3 sm:px-3.5 py-2 sm:py-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:outline-none focus:border-[#E31837] focus:bg-white transition-colors"
                          />
                        </div>
                      </div>

                      {/* If candidate selects 'Others' */}
                      {candidateIndustry === 'Others' && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                        >
                          <label className="block text-[11px] sm:text-xs font-mono tracking-wider uppercase text-gray-600 mb-1">
                            Specify Your Industry / Field *
                          </label>
                          <input
                            type="text"
                            required
                            value={candidateOtherIndustry}
                            onChange={(e) => setCandidateOtherIndustry(e.target.value)}
                            placeholder="e.g. Healthcare, IT Support, Education, Agriculture..."
                            className="w-full px-3 sm:px-3.5 py-2 sm:py-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:outline-none focus:border-[#E31837] focus:bg-white transition-colors"
                          />
                        </motion.div>
                      )}
                    </div>
                  )}

                  {/* Notes / Brief */}
                  <div>
                    <label className="block text-[11px] sm:text-xs font-mono tracking-wider uppercase text-gray-600 mb-1">
                      Operational Brief / Notes
                    </label>
                    <textarea
                      rows={2}
                      value={details}
                      onChange={(e) => setDetails(e.target.value)}
                      placeholder={
                        mode === 'employer'
                          ? 'Specify shift timings, project location, urgency, or specific certifications...'
                          : 'Mention years of experience, current employment, and joining timeline...'
                      }
                      className="w-full px-3 sm:px-3.5 py-2 sm:py-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:outline-none focus:border-[#E31837] focus:bg-white transition-colors resize-none sm:rows-3"
                    />
                  </div>

                  {/* Submit Button */}
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
                    Direct submission to Lords &amp; Kings Manpower Solutions Operations Desk &bull; Privacy protected
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
