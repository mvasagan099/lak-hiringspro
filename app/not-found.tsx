'use client';

import React from 'react';
import Link from 'next/link';
import { Home, MessageSquare } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white text-gray-900 flex flex-col justify-between selection:bg-[#E31837]/15 selection:text-gray-900">
      <Navbar onOpenHireModal={() => {}} />

      <div className="flex-1 flex items-center justify-center px-6 py-32 sm:py-40 text-center relative overflow-hidden">
        {/* Ambient Red Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#E31837]/[0.02] rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-md mx-auto relative z-10">
          <span className="text-[11px] font-mono tracking-[0.25em] text-[#E31837] uppercase font-bold">
            STATUS 404 &bull; PAGE NOT LOCATED
          </span>

          <h1 className="mt-4 text-6xl sm:text-8xl font-display font-bold tracking-tight text-gray-900">
            4<span className="text-[#E31837]">0</span>4
          </h1>

          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
            The page you are looking for has moved or does not exist. Connect with our team or return to our homepage.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-mono tracking-widest uppercase text-white bg-[#E31837] hover:bg-[#c4122d] transition-all duration-200 group"
            >
              <Home className="w-4 h-4" />
              <span>Return Home</span>
            </Link>

            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-mono tracking-widest uppercase text-gray-900 border border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-200 group"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
