'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, ArrowUpRight } from 'lucide-react';
import { CONTACT_INFO, NAVIGATION_LINKS } from '@/lib/constants';

interface NavbarProps {
  onOpenHireModal: () => void;
}

export default function Navbar({ onOpenHireModal }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'py-3 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm'
            : 'py-4 bg-white/90 backdrop-blur-sm border-b border-gray-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Brand Logo & Division Mark */}
          <Link
            href="/"
            className="group flex items-center gap-3.5 focus-visible:ring-2 focus-visible:ring-[#E31837] focus-visible:outline-none"
            aria-label="L&K HiringsPro Home"
          >
            {/* Lords & Kings Official Red Capsule Logo */}
            <div className="relative h-9 sm:h-10 w-auto shrink-0 transition-transform duration-200 group-hover:scale-[1.02]">
              <Image
                src="/lords-and-kings-logo.png"
                alt="Lords & Kings Group"
                width={130}
                height={40}
                className="h-full w-auto object-contain"
                priority
              />
            </div>

            {/* Division Tag */}
            <div className="hidden sm:flex items-center pl-3 border-l border-gray-300">
              <div className="flex flex-col">
                <span className="font-display font-bold text-xs tracking-[0.16em] uppercase text-gray-900 leading-tight">
                  HIRINGSPRO
                </span>
                <span className="text-[9px] font-mono tracking-[0.2em] text-gray-500 uppercase">
                  WORKFORCE
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden lg:flex items-center gap-8"
            aria-label="Primary Navigation"
          >
            {NAVIGATION_LINKS.map((link) => {
              const isActive =
                (link.href === '/' && pathname === '/') ||
                (link.href === '/employers' && (pathname === '/employers' || pathname === '/for-employers')) ||
                (link.href === '/candidates' && (pathname === '/candidates' || pathname === '/for-candidates')) ||
                (link.href === '/industries' && pathname === '/industries') ||
                (link.href === '/about' && pathname === '/about') ||
                (link.href === '/contact' && pathname === '/contact');

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative py-1 text-xs tracking-[0.12em] uppercase transition-colors duration-200 focus-visible:ring-1 focus-visible:ring-[#E31837] focus-visible:outline-none ${
                    isActive ? 'text-[#E31837] font-semibold' : 'text-gray-600 hover:text-gray-900'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavUnderline"
                      className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-[#E31837]"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Red Button matching Screenshot */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={onOpenHireModal}
              className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-semibold tracking-[0.12em] uppercase text-white bg-[#E31837] hover:bg-[#c4122d] transition-all duration-200 shadow-sm active:scale-95 focus-visible:ring-2 focus-visible:ring-[#E31837] focus-visible:outline-none"
            >
              <span>Hire Talent</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-[#E31837] border border-gray-200 transition-colors focus-visible:ring-1 focus-visible:ring-[#E31837] focus-visible:outline-none"
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-30 pt-24 px-6 pb-10 bg-white/98 backdrop-blur-xl flex flex-col justify-between lg:hidden border-b border-gray-200 overflow-y-auto"
          >
            <div className="flex flex-col gap-4 pt-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-[2px] bg-[#E31837]" />
                <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#E31837] font-semibold">
                  LORDS &amp; KINGS GROUP
                </span>
              </div>
              {NAVIGATION_LINKS.map((link) => {
                const isActive =
                  (link.href === '/' && pathname === '/') ||
                  (link.href === '/employers' && (pathname === '/employers' || pathname === '/for-employers')) ||
                  (link.href === '/candidates' && (pathname === '/candidates' || pathname === '/for-candidates')) ||
                  (link.href === '/industries' && pathname === '/industries') ||
                  (link.href === '/about' && pathname === '/about') ||
                  (link.href === '/contact' && pathname === '/contact');

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-xl font-display font-medium tracking-wide py-2.5 flex items-center justify-between border-b border-gray-100 transition-colors ${
                      isActive ? 'text-[#E31837] font-semibold' : 'text-gray-900 hover:text-[#E31837]'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ArrowRight className={`w-4 h-4 ${isActive ? 'text-[#E31837]' : 'text-gray-400'}`} />
                  </Link>
                );
              })}
            </div>

            <div className="flex flex-col gap-4 pt-6 border-t border-gray-200 mt-6">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenHireModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#E31837] hover:bg-[#c4122d] text-white text-xs font-semibold tracking-[0.14em] uppercase transition-colors"
              >
                <span>Hire Talent</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <div className="flex flex-col gap-1 pt-2 text-xs font-mono text-gray-500">
                <span className="text-[10px] tracking-widest text-gray-600 font-semibold uppercase">
                  DIVISION OF LORDS &amp; KINGS
                </span>
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-[#E31837] py-0.5">
                  {CONTACT_INFO.email}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
