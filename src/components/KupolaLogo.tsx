import React from 'react';

interface Props {
  compact?: boolean;
  className?: string;
  subtext?: string;
}

export const KupolaLogo: React.FC<Props> = ({
  compact = false,
  className = '',
  subtext = 'GESTÃO PARA BARBEARIAS',
}) => {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Monogram emblem 'K' in gold */}
      <div className="relative w-9 h-9 rounded-lg flex items-center justify-center bg-gradient-to-br from-[#2a2214] via-[#1a160f] to-[#120f09] border border-amber-500/40 shadow-[0_0_15px_rgba(217,119,6,0.25)] shrink-0">
        <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6">
          <defs>
            <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="40%" stopColor="#eab308" />
              <stop offset="100%" stopColor="#b45309" />
            </linearGradient>
          </defs>
          {/* Vertical left stem */}
          <path
            d="M8 6H12V26H8V6Z"
            fill="url(#goldGrad)"
          />
          {/* Upper diagonal arm */}
          <path
            d="M23 7L13 17L15.5 19.5L25.5 9.5V7H23Z"
            fill="url(#goldGrad)"
          />
          {/* Lower diagonal arm */}
          <path
            d="M13.5 15.5L24 26H26.5V23.5L16 13L13.5 15.5Z"
            fill="url(#goldGrad)"
          />
        </svg>
      </div>

      {!compact && (
        <div className="flex flex-col">
          <span className="font-['Cinzel',serif] tracking-[0.16em] text-lg font-bold bg-gradient-to-r from-[#fae8b2] via-[#e6b553] to-[#c78d2b] bg-clip-text text-transparent leading-none">
            KUPOLA
          </span>
          <span className="text-[8px] font-semibold tracking-[0.24em] text-amber-200/50 mt-1 uppercase leading-none font-sans">
            {subtext}
          </span>
        </div>
      )}
    </div>
  );
};
