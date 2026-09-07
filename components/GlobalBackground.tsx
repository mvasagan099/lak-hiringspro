'use client';

import React from 'react';

export default function GlobalBackground() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none -z-10 overflow-hidden bg-[#ffffff]"
    >
      {/* 1. Subtle Precision Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />

      {/* 2. Soft Ambient Red Highlight (Top-Right subtle warmth) */}
      <div className="absolute -top-48 right-0 w-[600px] h-[500px] bg-[#E31837]/[0.02] rounded-full blur-[140px]" />
    </div>
  );
}
