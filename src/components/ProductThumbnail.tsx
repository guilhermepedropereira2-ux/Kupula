import React from 'react';

interface Props {
  type: 'pomade' | 'shampoo' | 'oil' | 'balm' | 'kit';
  size?: number;
}

export const ProductThumbnail: React.FC<Props> = ({ type, size = 44 }) => {
  switch (type) {
    case 'pomade':
      return (
        <div
          style={{ width: size, height: size }}
          className="relative rounded-lg overflow-hidden bg-gradient-to-b from-[#221c17] to-[#101217] border border-amber-900/40 flex items-center justify-center shrink-0 shadow-inner group-hover:border-amber-500/50 transition-colors"
        >
          <svg viewBox="0 0 48 48" fill="none" className="w-full h-full p-1.5">
            {/* Amber luxury pomade tin jar */}
            <circle cx="24" cy="24" r="21" fill="#14171d" />
            <radialGradient id="jarGlow" cx="50%" cy="40%" r="50%">
              <stop offset="0%" stopColor="#b45309" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#0a0c10" stopOpacity="0" />
            </radialGradient>
            <circle cx="24" cy="24" r="21" fill="url(#jarGlow)" />
            {/* Lid */}
            <rect x="13" y="15" width="22" height="5" rx="2" fill="#d97706" stroke="#f59e0b" strokeWidth="0.7" />
            {/* Dark glass jar body */}
            <rect x="14" y="20" width="20" height="15" rx="3" fill="#312217" stroke="#92400e" strokeWidth="0.8" />
            {/* Gold label */}
            <rect x="16" y="23" width="16" height="8" rx="1.5" fill="#181512" stroke="#d4af37" strokeWidth="0.6" />
            <line x1="18" y1="26" x2="30" y2="26" stroke="#d4af37" strokeWidth="0.8" />
            <line x1="20" y1="28.5" x2="28" y2="28.5" stroke="#f59e0b" strokeWidth="0.6" />
          </svg>
        </div>
      );

    case 'shampoo':
      return (
        <div
          style={{ width: size, height: size }}
          className="relative rounded-lg overflow-hidden bg-gradient-to-b from-[#1b2029] to-[#0f1116] border border-slate-800 flex items-center justify-center shrink-0 shadow-inner group-hover:border-amber-500/50 transition-colors"
        >
          <svg viewBox="0 0 48 48" fill="none" className="w-full h-full p-1.5">
            <circle cx="24" cy="24" r="21" fill="#14171d" />
            {/* Tall dark shampoo pump bottle */}
            <rect x="22" y="10" width="4" height="5" fill="#71717a" />
            <rect x="19" y="8" width="10" height="3" rx="1" fill="#a1a1aa" />
            <path d="M29 9L34 10" stroke="#a1a1aa" strokeWidth="1.2" strokeLinecap="round" />
            {/* Bottle body */}
            <rect x="16" y="15" width="16" height="23" rx="3" fill="#182029" stroke="#334155" strokeWidth="0.9" />
            {/* Elegant label */}
            <rect x="18" y="20" width="12" height="13" rx="1.5" fill="#0d1117" stroke="#e5a93c" strokeWidth="0.6" />
            <circle cx="24" cy="24" r="1.5" fill="#e5a93c" />
            <line x1="20" y1="28" x2="28" y2="28" stroke="#cbd5e1" strokeWidth="0.6" />
            <line x1="21" y1="30" x2="27" y2="30" stroke="#94a3b8" strokeWidth="0.5" />
          </svg>
        </div>
      );

    case 'oil':
      return (
        <div
          style={{ width: size, height: size }}
          className="relative rounded-lg overflow-hidden bg-gradient-to-b from-[#251e18] to-[#101217] border border-amber-900/40 flex items-center justify-center shrink-0 shadow-inner group-hover:border-amber-500/50 transition-colors"
        >
          <svg viewBox="0 0 48 48" fill="none" className="w-full h-full p-1.5">
            <circle cx="24" cy="24" r="21" fill="#14171d" />
            {/* Pipette / Dropper top */}
            <rect x="22" y="8" width="4" height="4" rx="1.5" fill="#1c1917" stroke="#78716c" strokeWidth="0.5" />
            <rect x="20" y="12" width="8" height="4" rx="1" fill="#f59e0b" />
            {/* Amber glass bottle */}
            <path
              d="M17 19C17 17 19 16 21 16H27C29 16 31 17 31 19V34C31 36.5 29 38 27 38H21C19 38 17 36.5 17 34V19Z"
              fill="#451a03"
              stroke="#b45309"
              strokeWidth="0.9"
            />
            {/* Golden oil shimmer */}
            <ellipse cx="24" cy="29" rx="4" ry="6" fill="#f59e0b" fillOpacity="0.4" />
            {/* Minimalist label */}
            <rect x="19" y="23" width="10" height="9" fill="#1c1917" stroke="#d4af37" strokeWidth="0.6" />
            <line x1="21" y1="26" x2="27" y2="26" stroke="#d4af37" strokeWidth="0.8" />
          </svg>
        </div>
      );

    case 'balm':
      return (
        <div
          style={{ width: size, height: size }}
          className="relative rounded-lg overflow-hidden bg-gradient-to-b from-[#21242d] to-[#0f1116] border border-slate-800 flex items-center justify-center shrink-0 shadow-inner group-hover:border-amber-500/50 transition-colors"
        >
          <svg viewBox="0 0 48 48" fill="none" className="w-full h-full p-1.5">
            <circle cx="24" cy="24" r="21" fill="#14171d" />
            {/* Balm tube / squeeze container */}
            <rect x="21" y="34" width="6" height="4" rx="1" fill="#475569" />
            <path
              d="M18 13C18 11.5 20 10 24 10C28 10 30 11.5 30 13L28 34H20L18 13Z"
              fill="#1e293b"
              stroke="#64748b"
              strokeWidth="0.9"
            />
            {/* Gold foil stamp on tube */}
            <rect x="20" y="18" width="8" height="10" rx="1" fill="#0f172a" stroke="#eab308" strokeWidth="0.6" />
            <line x1="22" y1="21" x2="26" y2="21" stroke="#eab308" strokeWidth="0.8" />
            <line x1="22" y1="24" x2="26" y2="24" stroke="#94a3b8" strokeWidth="0.5" />
          </svg>
        </div>
      );

    case 'kit':
      return (
        <div
          style={{ width: size, height: size }}
          className="relative rounded-lg overflow-hidden bg-gradient-to-b from-[#251f18] to-[#101217] border border-amber-900/40 flex items-center justify-center shrink-0 shadow-inner group-hover:border-amber-500/50 transition-colors"
        >
          <svg viewBox="0 0 48 48" fill="none" className="w-full h-full p-1.5">
            <circle cx="24" cy="24" r="21" fill="#14171d" />
            {/* Luxury grooming kit box */}
            <rect x="12" y="16" width="24" height="18" rx="2" fill="#261b14" stroke="#d97706" strokeWidth="0.9" />
            <line x1="12" y1="22" x2="36" y2="22" stroke="#d97706" strokeWidth="0.7" />
            {/* Gold latch and barber crest */}
            <rect x="22" y="20" width="4" height="4" rx="0.5" fill="#f59e0b" />
            {/* Two miniature grooming bottles inside silhouette */}
            <rect x="16" y="25" width="4" height="6" rx="0.8" fill="#451a03" stroke="#f59e0b" strokeWidth="0.4" />
            <rect x="28" y="25" width="4" height="6" rx="0.8" fill="#1e293b" stroke="#94a3b8" strokeWidth="0.4" />
          </svg>
        </div>
      );
  }
};
