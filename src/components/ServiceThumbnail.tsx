import React from 'react';

interface Props {
  type: 'fade-beard' | 'beard-therapy' | 'skin-fade' | 'classic-cut' | 'eyebrow';
  size?: number;
}

export const ServiceThumbnail: React.FC<Props> = ({ type, size = 44 }) => {
  // SVG representations inspired by barbershop cuts with masculine silhouette, precision fade lines and warm lighting
  switch (type) {
    case 'fade-beard':
      return (
        <div
          style={{ width: size, height: size }}
          className="relative rounded-lg overflow-hidden bg-gradient-to-b from-[#2a241b] to-[#121419] border border-amber-900/40 flex items-center justify-center shrink-0 shadow-inner group-hover:border-amber-500/50 transition-colors"
        >
          <svg viewBox="0 0 48 48" fill="none" className="w-full h-full p-1 opacity-90">
            {/* Dark background lighting */}
            <circle cx="24" cy="24" r="22" fill="#181a20" />
            <radialGradient id="gradFade" cx="50%" cy="30%" r="60%">
              <stop offset="0%" stopColor="#d4a353" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#0b0e14" stopOpacity="0" />
            </radialGradient>
            <circle cx="24" cy="24" r="22" fill="url(#gradFade)" />
            {/* Head silhouette */}
            <path
              d="M16 25C16 17 19 12 25 12C31 12 34 17 34 25C34 29 32 31 32 34C31 37 28 39 25 39C21 39 18 36 17 33C16 30 16 27 16 25Z"
              fill="#2d231b"
            />
            {/* Precision haircut styling */}
            <path
              d="M17 19C18 14 21 11 26 11C31 11 34 13 34 17C33 17 30 16 26 17C21 18 18 19 17 19Z"
              fill="#0d0e12"
            />
            {/* Fade lines */}
            <path d="M16 20C17.5 19 20 18.5 22 18.5" stroke="#d4a353" strokeWidth="0.75" strokeOpacity="0.8" />
            {/* Styled Beard */}
            <path
              d="M20 28C22 30 27 30 29 28C30 31 29 36 25 37C21 36 19 31 20 28Z"
              fill="#111317"
              stroke="#8c6d37"
              strokeWidth="0.5"
            />
            {/* Ear & jawline definition */}
            <path d="M17 24C16.5 25.5 17 27 18 27.5" stroke="#9a7b45" strokeWidth="0.8" />
            <path d="M31 24C31.5 25.5 31 27 30 27.5" stroke="#9a7b45" strokeWidth="0.8" />
          </svg>
        </div>
      );

    case 'beard-therapy':
      return (
        <div
          style={{ width: size, height: size }}
          className="relative rounded-lg overflow-hidden bg-gradient-to-b from-[#251e18] to-[#121419] border border-amber-900/40 flex items-center justify-center shrink-0 shadow-inner group-hover:border-amber-500/50 transition-colors"
        >
          <svg viewBox="0 0 48 48" fill="none" className="w-full h-full p-1 opacity-90">
            <circle cx="24" cy="24" r="22" fill="#171920" />
            {/* Steam / hot towel glow */}
            <path d="M21 10C20 13 22 15 21 18" stroke="#f59e0b" strokeWidth="1" strokeDasharray="2 2" strokeOpacity="0.6" />
            <path d="M26 9C25 12 27 14 26 17" stroke="#f59e0b" strokeWidth="1" strokeDasharray="2 2" strokeOpacity="0.6" />
            {/* Head profile */}
            <path d="M18 20C18 15 21 13 25 13C29 13 32 15 32 20C32 26 29 37 25 37C20 37 18 26 18 20Z" fill="#30261f" />
            {/* Full therapeutic sculpted beard */}
            <path
              d="M19 25C20 32 23 37 25 38C27 37 30 32 31 25C29 27 27 27 25 27C23 27 21 27 19 25Z"
              fill="#0d0e12"
              stroke="#b4833e"
              strokeWidth="0.75"
            />
            {/* Barber razor touch */}
            <line x1="16" y1="23" x2="22" y2="25" stroke="#eab308" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
        </div>
      );

    case 'skin-fade':
      return (
        <div
          style={{ width: size, height: size }}
          className="relative rounded-lg overflow-hidden bg-gradient-to-b from-[#26241f] to-[#111317] border border-amber-900/40 flex items-center justify-center shrink-0 shadow-inner group-hover:border-amber-500/50 transition-colors"
        >
          <svg viewBox="0 0 48 48" fill="none" className="w-full h-full p-1 opacity-90">
            <circle cx="24" cy="24" r="22" fill="#181a20" />
            {/* Side silhouette skin fade */}
            <path d="M18 18C19 13 24 12 28 13C31 14 33 17 33 21C33 26 31 33 27 35C24 35 20 33 19 29Z" fill="#382c22" />
            {/* Dark pompadour hair on top */}
            <path d="M19 18C21 11 27 10 32 13C33 15 32 18 29 18C25 18 21 17 19 18Z" fill="#0d0f14" />
            {/* Skin fade gradient lines */}
            <path d="M18 22C20 22 22 20 24 20" stroke="#f59e0b" strokeWidth="0.8" />
            <path d="M18 25C21 25 23 23 25 23" stroke="#d97706" strokeWidth="0.8" strokeOpacity="0.7" />
            <path d="M19 28C22 28 24 26 26 26" stroke="#92400e" strokeWidth="0.8" strokeOpacity="0.5" />
          </svg>
        </div>
      );

    case 'classic-cut':
      return (
        <div
          style={{ width: size, height: size }}
          className="relative rounded-lg overflow-hidden bg-gradient-to-b from-[#23201d] to-[#111317] border border-amber-900/40 flex items-center justify-center shrink-0 shadow-inner group-hover:border-amber-500/50 transition-colors"
        >
          <svg viewBox="0 0 48 48" fill="none" className="w-full h-full p-1 opacity-90">
            <circle cx="24" cy="24" r="22" fill="#181a20" />
            {/* Classic comb over gentleman cut */}
            <path d="M17 19C18 13 22 11 27 11C32 11 34 14 34 19C33 25 31 33 26 35C22 34 18 28 17 19Z" fill="#322820" />
            <path d="M17 17C19 12 25 11 32 13C33 16 30 18 26 17C21 17 18 16 17 17Z" fill="#090a0d" />
            {/* Comb parting line */}
            <path d="M21 14L30 16" stroke="#e5a93c" strokeWidth="1" strokeLinecap="round" />
            <path d="M20 30C22 32 26 32 28 30" stroke="#78350f" strokeWidth="1" strokeLinecap="round" />
          </svg>
        </div>
      );

    case 'eyebrow':
      return (
        <div
          style={{ width: size, height: size }}
          className="relative rounded-lg overflow-hidden bg-gradient-to-b from-[#27231c] to-[#121419] border border-amber-900/40 flex items-center justify-center shrink-0 shadow-inner group-hover:border-amber-500/50 transition-colors"
        >
          <svg viewBox="0 0 48 48" fill="none" className="w-full h-full p-1 opacity-90">
            <circle cx="24" cy="24" r="22" fill="#181a20" />
            {/* Sculpted eyebrow arc with razor precision line */}
            <path
              d="M14 26C18 22 24 21 33 23C30 25 24 25 17 28C15 28 14 27 14 26Z"
              fill="#0d0e12"
              stroke="#d4a353"
              strokeWidth="0.75"
            />
            {/* Alignment precision guide */}
            <line x1="16" y1="21" x2="31" y2="21" stroke="#f59e0b" strokeWidth="0.8" strokeDasharray="1.5 1.5" strokeOpacity="0.8" />
            <circle cx="24" cy="22" r="1.5" fill="#f59e0b" />
          </svg>
        </div>
      );
  }
};
