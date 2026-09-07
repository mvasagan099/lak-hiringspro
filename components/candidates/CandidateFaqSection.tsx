'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'How do I submit my profile?',
    answer:
      'You can submit your details directly through our quick online intake form on this page or connect directly with our recruitment desk via WhatsApp. Our team reviews profile submissions on an ongoing basis.',
  },
  {
    question: 'What information should I provide?',
    answer:
      'Provide your full name, contact details (phone/WhatsApp and email), primary skills, trade certifications, previous work experience, preferred job category, and your expected date of availability.',
  },
  {
    question: 'Do I need previous experience?',
    answer:
      'Not necessarily. While certain technical and supervisory roles require proven industry experience, we also partner with organizations offering entry-level positions and structured on-the-job training for motivated individuals.',
  },
  {
    question: 'What types of opportunities do you support?',
    answer:
      'We support operational, skilled, and professional roles across retail store operations, logistics & warehousing, manufacturing & assembly, hospitality, e-commerce fulfillment hubs, customer support, and IT helpdesk operations.',
  },
  {
    question: 'How will I know about relevant opportunities?',
    answer:
      'When an employer mandate matches your skills and location preferences, a member of our recruitment team contacts you directly via phone or WhatsApp to share role details, compensation ranges, and interview schedules.',
  },
];

export default function CandidateFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="relative py-24 sm:py-32 px-6 sm:px-8 bg-white border-b border-gray-200">
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1 border border-red-200 text-[#E31837] text-[11px] font-mono tracking-[0.25em] uppercase mb-4 font-bold bg-red-50"
          >
            <span className="w-1.5 h-1.5 bg-[#E31837]" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-display font-bold uppercase tracking-tight text-gray-900 leading-[1.08]"
          >
            Clear answers for <br />
            <span className="text-[#E31837]">job seekers.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 text-base text-gray-600 leading-relaxed font-normal"
          >
            Everything you need to know about our candidate matching process and support standards.
          </motion.p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className={`border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-white border-[#E31837] shadow-sm'
                    : 'bg-[#f8f9fa] border-gray-200 hover:border-[#E31837]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={isOpen}
                  className="w-full p-6 sm:p-7 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-base sm:text-lg font-display font-bold text-gray-900 uppercase">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 border flex items-center justify-center shrink-0 transition-colors ${
                      isOpen
                        ? 'bg-[#E31837] text-white border-[#E31837]'
                        : 'bg-white border-gray-300 text-gray-500'
                    }`}
                  >
                    {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-6 pb-6 sm:px-7 sm:pb-7 text-sm sm:text-base text-gray-600 leading-relaxed border-t border-gray-100 pt-4 font-normal">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
