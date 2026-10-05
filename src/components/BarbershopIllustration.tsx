import React from 'react';

export const BarbershopIllustration: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
      {/* Deep dark gradient with warm ambient light pools */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b0e14]/95 via-[#111622]/85 to-[#16120e]/90 z-10" />

      {/* Warm ambient radial lights (amber & gold glow) */}
      <div className="absolute right-[22%] top-[-20%] w-[500px] h-[350px] bg-amber-500/15 blur-[100px] rounded-full z-0" />
      <div className="absolute right-[10%] top-[20%] w-[320px] h-[260px] bg-orange-600/10 blur-[80px] rounded-full z-0" />

      {/* Barbershop SVG Vector Scene with Edison lamps, vintage leather chair, shelves & mirrors */}
      <svg
        className="absolute right-0 top-0 h-full w-full object-cover z-0 opacity-45 mix-blend-screen"
        viewBox="0 0 1200 400"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="lampGlow1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffb703" stopOpacity="0.9" />
            <stop offset="30%" stopColor="#f59e0b" stopOpacity="0.5" />
            <stop offset="70%" stopColor="#d97706" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#0b0e14" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="lampGlow2" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffd166" stopOpacity="0.95" />
            <stop offset="25%" stopColor="#f59e0b" stopOpacity="0.6" />
            <stop offset="65%" stopColor="#b45309" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#0b0e14" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="chairLeather" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3d2c1f" />
            <stop offset="50%" stopColor="#221811" />
            <stop offset="100%" stopColor="#140e0a" />
          </linearGradient>
          <linearGradient id="chromeMetal" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#71717a" />
            <stop offset="50%" stopColor="#e4e4e7" />
            <stop offset="100%" stopColor="#52525b" />
          </linearGradient>
        </defs>

        {/* Vintage Wood Wall Panels & Backlit Mirror Arche */}
        <rect x="700" y="30" width="180" height="280" rx="90" fill="#141720" stroke="#372c1c" strokeWidth="3" />
        <rect x="710" y="40" width="160" height="260" rx="80" fill="#0d1117" />
        <path d="M720 180H860" stroke="#f59e0b" strokeWidth="0.5" strokeOpacity="0.3" />

        {/* Second Mirror Arch */}
        <rect x="940" y="20" width="200" height="300" rx="100" fill="#181a24" stroke="#45331e" strokeWidth="3" />
        <rect x="952" y="32" width="176" height="276" rx="88" fill="#0f131a" />

        {/* Vintage Shelves with Tonic & Pomade Bottles */}
        <line x1="620" y1="180" x2="710" y2="180" stroke="#4a3b2c" strokeWidth="6" strokeLinecap="round" />
        <rect x="635" y="150" width="14" height="28" rx="2" fill="#d97706" fillOpacity="0.7" />
        <rect x="655" y="142" width="16" height="36" rx="2" fill="#78350f" fillOpacity="0.8" />
        <rect x="677" y="156" width="18" height="22" rx="3" fill="#b45309" fillOpacity="0.6" />

        {/* Hanging Edison Bulbs & Ambient Flares */}
        <line x1="780" y1="0" x2="780" y2="120" stroke="#27272a" strokeWidth="1.5" />
        <circle cx="780" cy="120" r="45" fill="url(#lampGlow1)" />
        <circle cx="780" cy="120" r="9" fill="#ffedd5" />
        <line x1="777" y1="117" x2="783" y2="123" stroke="#f59e0b" strokeWidth="1.5" />

        <line x1="980" y1="0" x2="980" y2="90" stroke="#27272a" strokeWidth="1.5" />
        <circle cx="980" cy="90" r="60" fill="url(#lampGlow2)" />
        <circle cx="980" cy="90" r="11" fill="#fffbeb" />

        {/* Classic Heavy-Duty Vintage Barber Chair (Detailed Silhouette & Chrome Accents) */}
        <g transform="translate(850, 110)">
          {/* Hydraulic Base */}
          <ellipse cx="90" cy="245" rx="65" ry="16" fill="url(#chromeMetal)" stroke="#3f3f46" strokeWidth="1.5" />
          <rect x="83" y="195" width="14" height="50" fill="url(#chromeMetal)" />
          {/* Footrest with Barber Logo Grill */}
          <path d="M40 225L10 240H50L70 225Z" fill="url(#chromeMetal)" />
          <line x1="15" y1="236" x2="45" y2="236" stroke="#27272a" strokeWidth="1.5" />

          {/* Seat Cushion (Deep tufted rich brown leather) */}
          <rect x="45" y="165" width="90" height="30" rx="8" fill="url(#chairLeather)" stroke="#573a27" strokeWidth="2" />
          {/* Diamond Tufting details */}
          <path d="M60 170L75 185L90 170L105 185L120 170" stroke="#e5a93c" strokeWidth="0.7" strokeOpacity="0.4" />

          {/* Recline Chrome Lever */}
          <line x1="135" y1="180" x2="155" y2="165" stroke="url(#chromeMetal)" strokeWidth="3" strokeLinecap="round" />
          <circle cx="156" cy="164" r="4" fill="#18181b" />

          {/* Padded Armrests */}
          <rect x="40" y="130" width="18" height="40" rx="6" fill="url(#chairLeather)" stroke="#573a27" strokeWidth="1.5" />
          <path d="M42 150L30 175" stroke="url(#chromeMetal)" strokeWidth="4" strokeLinecap="round" />

          <rect x="122" y="130" width="18" height="40" rx="6" fill="url(#chairLeather)" stroke="#573a27" strokeWidth="1.5" />
          <path d="M138 150L150 175" stroke="url(#chromeMetal)" strokeWidth="4" strokeLinecap="round" />

          {/* High Backrest (Tufted leather vintage wingback) */}
          <path
            d="M55 50C55 42 62 35 70 35H110C118 35 125 42 125 50V140H55V50Z"
            fill="url(#chairLeather)"
            stroke="#5c3f2b"
            strokeWidth="2.5"
          />
          {/* Chrome Trim around backrest */}
          <path d="M53 60V135" stroke="url(#chromeMetal)" strokeWidth="2.5" />
          <path d="M127 60V135" stroke="url(#chromeMetal)" strokeWidth="2.5" />

          {/* Tufted Button Dimples & Stitching on Backrest */}
          <circle cx="75" cy="65" r="2.5" fill="#f59e0b" fillOpacity="0.6" />
          <circle cx="105" cy="65" r="2.5" fill="#f59e0b" fillOpacity="0.6" />
          <circle cx="90" cy="85" r="2.5" fill="#f59e0b" fillOpacity="0.6" />
          <circle cx="75" cy="105" r="2.5" fill="#f59e0b" fillOpacity="0.6" />
          <circle cx="105" cy="105" r="2.5" fill="#f59e0b" fillOpacity="0.6" />
          <circle cx="90" cy="125" r="2.5" fill="#f59e0b" fillOpacity="0.6" />

          {/* Adjustable Headrest */}
          <rect x="85" y="12" width="10" height="24" fill="url(#chromeMetal)" />
          <rect x="68" y="5" width="44" height="20" rx="7" fill="url(#chairLeather)" stroke="#573a27" strokeWidth="2" />
        </g>

        {/* Ambient Warm Floor Reflection */}
        <ellipse cx="940" cy="380" rx="200" ry="25" fill="#f59e0b" fillOpacity="0.06" />
      </svg>
    </div>
  );
};
