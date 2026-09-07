'use client';

import React from 'react';

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {/* 1. Base White Clean Canvas */}
      <div className="absolute inset-0 bg-[#ffffff]" />

      {/* 2. Modern Architectural Corridor Photo on the Right (Matching lordsandkings.co) */}
      <div
        className="absolute inset-0 bg-cover bg-right lg:bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop')`,
        }}
      />

      {/* 3. Smooth Architectural Gradient Blend from Left to Right */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(105deg, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.95) 48%, rgba(255,255,255,0.65) 75%, rgba(255,255,255,0.2) 100%)',
        }}
      />

      {/* 4. Subtle Bottom White Fade to transition cleanly into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </div>
  );
}
