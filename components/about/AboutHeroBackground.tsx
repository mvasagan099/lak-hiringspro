'use client';

import React from 'react';

export default function AboutHeroBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 bg-white">
      {/* Subtle Red Ambient Spotlight */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#E31837]/[0.02] rounded-full blur-[160px]" />

      {/* Modern Corridor Background Photo Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-right lg:bg-center opacity-25"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop')`,
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(105deg, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.92) 50%, rgba(255,255,255,0.5) 100%)',
        }}
      />

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </div>
  );
}
