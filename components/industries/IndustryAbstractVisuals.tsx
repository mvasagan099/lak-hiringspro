'use client';

import React from 'react';
import { motion } from 'framer-motion';

// 01 RETAIL: Abstract store/grid/people composition, products/squares subtly moving into organized positions
export function RetailVisual() {
  const blocks = Array.from({ length: 16 });
  return (
    <div className="relative w-full h-full min-h-[260px] sm:min-h-[340px] flex items-center justify-center overflow-hidden bg-[#f8f9fa] border border-gray-200">
      <div className="absolute inset-0 bg-gradient-to-br from-red-500/[0.04] via-transparent to-transparent pointer-events-none" />

      {/* Grid of organizing product modules */}
      <div className="grid grid-cols-4 gap-3 sm:gap-4 p-6 relative z-10">
        {blocks.map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0.5, scale: 0.95 }}
            animate={{
              opacity: [0.5, 1, 0.5],
              scale: [0.95, 1.02, 0.95],
              borderColor: ['rgba(229,231,235,1)', 'rgba(227,24,55,0.4)', 'rgba(229,231,235,1)'],
            }}
            transition={{
              duration: 3.5,
              delay: (i % 4) * 0.2 + Math.floor(i / 4) * 0.15,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="w-12 h-12 sm:w-16 sm:h-16 border border-gray-200 bg-white shadow-xs flex items-center justify-center relative overflow-hidden"
          >
            {i % 3 === 0 && (
              <div className="w-2.5 h-2.5 rounded-full bg-[#E31837] shadow-[0_0_8px_rgba(227,24,55,0.5)]" />
            )}
            {i % 3 === 1 && (
              <div className="w-5 h-[1.5px] bg-gray-400" />
            )}
            {i % 3 === 2 && (
              <div className="w-3.5 h-3.5 border border-[#E31837]/40" />
            )}
          </motion.div>
        ))}
      </div>

      {/* Subtle organization guide laser line */}
      <motion.div
        animate={{ y: [-120, 120, -120] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute left-10 right-10 h-[1.5px] bg-gradient-to-r from-transparent via-[#E31837]/50 to-transparent pointer-events-none"
      />
    </div>
  );
}

// 02 LOGISTICS: Animated route lines and moving nodes
export function LogisticsVisual() {
  return (
    <div className="relative w-full h-full min-h-[260px] sm:min-h-[340px] flex items-center justify-center overflow-hidden bg-[#f8f9fa] border border-gray-200">
      <svg className="w-full h-full max-w-[420px] p-6" viewBox="0 0 400 300" fill="none">
        {/* Route Lines */}
        <path
          d="M 50 150 C 120 70, 180 220, 260 110 S 350 200, 350 150"
          stroke="rgba(227, 24, 55, 0.3)"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
        <path
          d="M 60 220 C 140 220, 190 80, 290 80 S 340 180, 360 220"
          stroke="rgba(17, 24, 39, 0.18)"
          strokeWidth="1"
        />

        {/* Dynamic Pulses moving along routes */}
        <motion.circle
          r="4.5"
          fill="#E31837"
          animate={{
            cx: [50, 140, 220, 290, 350],
            cy: [150, 95, 180, 105, 150],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
          className="shadow-[0_0_12px_rgba(227,24,55,0.8)]"
        />

        <motion.circle
          r="3.5"
          fill="#111827"
          animate={{
            cx: [60, 150, 240, 320, 360],
            cy: [220, 170, 80, 140, 220],
          }}
          transition={{ duration: 7, delay: 1.5, repeat: Infinity, ease: 'linear' }}
        />

        {/* Hub Waypoints */}
        {[
          { x: 50, y: 150, label: 'ORIGIN' },
          { x: 180, y: 220, label: 'HUB 01' },
          { x: 260, y: 110, label: 'CROSS-DOCK' },
          { x: 350, y: 150, label: 'DESTINATION' },
        ].map((pt, i) => (
          <g key={i}>
            <circle cx={pt.x} cy={pt.y} r="9" fill="rgba(227,24,55,0.1)" />
            <circle cx={pt.x} cy={pt.y} r="3.5" fill="#E31837" />
            <circle
              cx={pt.x}
              cy={pt.y}
              r="13"
              stroke="rgba(227,24,55,0.3)"
              strokeWidth="0.8"
            />
          </g>
        ))}
      </svg>
    </div>
  );
}

// 03 MANUFACTURING: Geometric mechanical-inspired motion
export function ManufacturingVisual() {
  return (
    <div className="relative w-full h-full min-h-[260px] sm:min-h-[340px] flex items-center justify-center overflow-hidden bg-[#f8f9fa] border border-gray-200">
      <div className="relative w-56 h-56 sm:w-64 sm:h-64 flex items-center justify-center">
        {/* Outer Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 rounded-full border border-dashed border-red-500/30 flex items-center justify-center"
        >
          <div className="w-2.5 h-2.5 rounded-full bg-[#E31837] absolute top-0" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#E31837] absolute bottom-0" />
        </motion.div>

        {/* Mid Concentric Dial */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
          className="absolute w-40 h-40 rounded-full border border-gray-300 flex items-center justify-center"
        >
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#E31837]/40 to-transparent" />
          <div className="h-full w-[1px] bg-gradient-to-b from-transparent via-[#E31837]/40 to-transparent" />
        </motion.div>

        {/* Inner Core */}
        <div className="w-20 h-20 rounded-full bg-red-50 border border-red-500/40 flex items-center justify-center shadow-xs">
          <div className="w-8 h-8 border border-gray-800 rotate-45" />
        </div>
      </div>
    </div>
  );
}

// 04 HOSPITALITY: Elegant flowing shapes and service-oriented motion
export function HospitalityVisual() {
  return (
    <div className="relative w-full h-full min-h-[260px] sm:min-h-[340px] flex items-center justify-center overflow-hidden bg-[#f8f9fa] border border-gray-200">
      <svg className="w-full h-full max-w-[400px] p-6" viewBox="0 0 360 260" fill="none">
        <motion.path
          d="M 40 180 C 100 80, 160 220, 240 100 C 300 10, 340 140, 340 180"
          stroke="url(#hospitalityGrad)"
          strokeWidth="2"
          fill="none"
          animate={{
            d: [
              'M 40 180 C 100 80, 160 220, 240 100 C 300 10, 340 140, 340 180',
              'M 40 170 C 110 110, 150 190, 250 80 C 310 40, 330 160, 340 170',
              'M 40 180 C 100 80, 160 220, 240 100 C 300 10, 340 140, 340 180',
            ],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />

        <motion.path
          d="M 50 130 C 120 180, 200 60, 280 150 C 320 200, 350 120, 350 130"
          stroke="rgba(227, 24, 55, 0.25)"
          strokeWidth="1.2"
          fill="none"
        />

        {/* Ambient guest orbs */}
        <circle cx="180" cy="120" r="28" fill="rgba(227, 24, 55, 0.05)" />
        <circle cx="180" cy="120" r="14" fill="rgba(227, 24, 55, 0.15)" />
        <circle cx="180" cy="120" r="4.5" fill="#E31837" />

        <defs>
          <linearGradient id="hospitalityGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#c4122d" />
            <stop offset="50%" stopColor="#E31837" />
            <stop offset="100%" stopColor="#ff4d67" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

// 05 E-COMMERCE: Packages/orders represented through animated geometry
export function EcommerceVisual() {
  const cubes = [
    { x: -50, y: -40, delay: 0 },
    { x: 40, y: -25, delay: 0.2 },
    { x: -20, y: 35, delay: 0.4 },
    { x: 60, y: 45, delay: 0.6 },
  ];

  return (
    <div className="relative w-full h-full min-h-[260px] sm:min-h-[340px] flex items-center justify-center overflow-hidden bg-[#f8f9fa] border border-gray-200">
      <div className="relative w-64 h-64 flex items-center justify-center">
        {/* Conveyor grid track */}
        <div className="absolute w-56 h-36 border border-gray-300 -rotate-12 bg-white/50" />

        {/* Isometric package cubes */}
        {cubes.map((c, idx) => (
          <motion.div
            key={idx}
            animate={{
              y: [c.y, c.y - 12, c.y],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 3,
              delay: c.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{ transform: `translate(${c.x}px, ${c.y}px)` }}
            className="absolute w-14 h-14 border border-red-500/30 bg-white flex flex-col items-center justify-center shadow-md shadow-gray-200"
          >
            <div className="w-6 h-[2px] bg-[#E31837] mb-1" />
            <div className="w-3.5 h-3.5 border border-gray-300" />
            <span className="text-[8px] font-mono text-gray-500 font-semibold mt-1">#0{idx + 1}</span>
          </motion.div>
        ))}

        {/* Verification laser beam */}
        <motion.div
          animate={{ x: [-80, 80, -80] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute w-[1.5px] h-40 bg-gradient-to-b from-transparent via-[#E31837] to-transparent pointer-events-none"
        />
      </div>
    </div>
  );
}

// 06 SALES & SUPPORT: Animated communication/network elements
export function SalesSupportVisual() {
  return (
    <div className="relative w-full h-full min-h-[260px] sm:min-h-[340px] flex items-center justify-center overflow-hidden bg-[#f8f9fa] border border-gray-200">
      <div className="relative flex items-center justify-center">
        {/* Radiating voice/broadcast wave rings */}
        {[80, 140, 200, 260].map((size, idx) => (
          <motion.div
            key={idx}
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.15, 0.45, 0.15],
            }}
            transition={{
              duration: 3.5,
              delay: idx * 0.4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{ width: size, height: size }}
            className="absolute rounded-full border border-red-500/30"
          />
        ))}

        {/* Dialogue Node Center */}
        <div className="w-16 h-16 rounded-full bg-red-50 border-2 border-[#E31837] flex items-center justify-center relative z-10 shadow-[0_0_20px_rgba(227,24,55,0.25)]">
          <div className="w-4 h-4 rounded-full bg-[#E31837]" />
        </div>
      </div>
    </div>
  );
}

// 07 TECHNICAL & IT: Abstract code/network/data visualization
export function TechnicalItVisual() {
  const codeLines = [
    '0101  DEPLOY_CLUSTER',
    '0102  VERIFY_NODES',
    '0103  SYSTEM_STABLE',
    '0104  INTEGRITY_OK',
    '0105  LATENCY_LOW',
  ];

  return (
    <div className="relative w-full h-full min-h-[260px] sm:min-h-[340px] flex items-center justify-center overflow-hidden bg-[#f8f9fa] border border-gray-200 p-6 font-mono">
      <div className="w-full max-w-sm space-y-2.5 relative z-10">
        {codeLines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0.4 }}
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{
              duration: 2.5,
              delay: i * 0.35,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="flex items-center justify-between text-xs py-2 px-3 bg-white border border-gray-200 shadow-xs"
          >
            <span className="text-gray-900 font-semibold">{line}</span>
            <span className="w-2 h-2 rounded-full bg-[#E31837]" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
