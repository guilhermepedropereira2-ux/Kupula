import React from 'react';

export const BarbershopIllustration: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
      {/* Base warm dark barbershop atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#05070B] via-[#05070B]/80 to-[#0A0E15]/30 z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#05070B] via-transparent to-[#05070B]/40 z-10" />

      {/* Warm Ambient Lights & Bokeh Glows */}
      <div className="absolute right-[15%] top-[-10%] w-[500px] h-[350px] bg-[#D4AF37]/18 blur-[90px] rounded-full z-0" />
      <div className="absolute right-[35%] top-[10%] w-[320px] h-[250px] bg-[#ea580c]/12 blur-[80px] rounded-full z-0" />
      <div className="absolute right-[5%] bottom-[-10%] w-[300px] h-[200px] bg-[#E5C365]/15 blur-[70px] rounded-full z-0" />

      {/* High-Fidelity Barbershop Photographic Composition */}
      <svg
        className="absolute right-0 top-0 h-full w-full object-cover z-0 opacity-85 mix-blend-screen"
        viewBox="0 0 1200 420"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Radial glow for warm Edison tungsten bulbs */}
          <radialGradient id="edison1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="15%" stopColor="#fff7ed" stopOpacity="0.95" />
            <stop offset="35%" stopColor="#f59e0b" stopOpacity="0.8" />
            <stop offset="65%" stopColor="#d97706" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#05070B" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="edison2" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fffbeb" stopOpacity="1" />
            <stop offset="20%" stopColor="#fef08a" stopOpacity="0.9" />
            <stop offset="45%" stopColor="#d97706" stopOpacity="0.6" />
            <stop offset="75%" stopColor="#92400e" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#05070B" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="bokehGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fef08a" stopOpacity="0.4" />
            <stop offset="60%" stopColor="#f59e0b" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#05070B" stopOpacity="0" />
          </radialGradient>

          {/* Realistic leather shading */}
          <linearGradient id="leatherShade" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38291e" />
            <stop offset="40%" stopColor="#221710" />
            <stop offset="80%" stopColor="#140d09" />
            <stop offset="100%" stopColor="#0a0604" />
          </linearGradient>

          {/* Chrome steel reflections */}
          <linearGradient id="chromeSpec" x1="0%" y1="0%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#9ca3af" />
            <stop offset="35%" stopColor="#f3f4f6" />
            <stop offset="55%" stopColor="#e5e7eb" />
            <stop offset="80%" stopColor="#6b7280" />
            <stop offset="100%" stopColor="#374151" />
          </linearGradient>

          {/* Wood panel texture gradient */}
          <linearGradient id="darkWood" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1c130d" />
            <stop offset="50%" stopColor="#120c08" />
            <stop offset="100%" stopColor="#0a0604" />
          </linearGradient>
        </defs>

        {/* Vintage Wood Wall Paneling & Soft Mirror Arches */}
        <rect x="580" y="20" width="600" height="380" fill="url(#darkWood)" opacity="0.6" />

        {/* Mirror 1 with Warm Golden Backlight */}
        <rect x="680" y="35" width="200" height="290" rx="100" fill="#0D121B" stroke="#573f27" strokeWidth="3" />
        <ellipse cx="780" cy="180" rx="90" ry="135" fill="#070a0e" />
        <path d="M700 180H860" stroke="#E5C365" strokeWidth="0.7" strokeOpacity="0.4" />

        {/* Mirror 2 with Warm Backlight */}
        <rect x="940" y="25" width="220" height="310" rx="110" fill="#111722" stroke="#6b4c2b" strokeWidth="3" />
        <ellipse cx="1050" cy="180" rx="100" ry="145" fill="#070a0e" />

        {/* Barbershop Counter Shelf with Tonics & Glass Amber Bottles */}
        <rect x="620" y="240" width="560" height="12" rx="2" fill="#2d1c12" stroke="#573f27" strokeWidth="1" />
        {/* Bottles */}
        <rect x="640" y="205" width="16" height="35" rx="3" fill="#b45309" fillOpacity="0.85" stroke="#f59e0b" strokeWidth="0.5" />
        <rect x="662" y="195" width="18" height="45" rx="3" fill="#78350f" fillOpacity="0.9" stroke="#d97706" strokeWidth="0.5" />
        <rect x="686" y="212" width="22" height="28" rx="4" fill="#92400e" fillOpacity="0.8" />
        <rect x="880" y="200" width="18" height="40" rx="3" fill="#b45309" fillOpacity="0.85" />
        <rect x="904" y="210" width="14" height="30" rx="2" fill="#d97706" fillOpacity="0.8" />

        {/* Ambient Bokeh Orbs */}
        <circle cx="610" cy="110" r="35" fill="url(#bokehGlow)" />
        <circle cx="730" cy="80" r="45" fill="url(#bokehGlow)" />
        <circle cx="890" cy="140" r="30" fill="url(#bokehGlow)" />
        <circle cx="1120" cy="90" r="50" fill="url(#bokehGlow)" />

        {/* Hanging Edison Pendant Lamps with Glowing Tungsten Filaments */}
        <line x1="770" y1="0" x2="770" y2="110" stroke="#52525b" strokeWidth="1.5" />
        <circle cx="770" cy="110" r="52" fill="url(#edison1)" />
        <ellipse cx="770" cy="110" rx="12" ry="16" fill="#fffbeb" />
        <path d="M766 106L774 114M766 114L774 106" stroke="#f59e0b" strokeWidth="1.5" />

        <line x1="970" y1="0" x2="970" y2="80" stroke="#52525b" strokeWidth="1.5" />
        <circle cx="970" cy="80" r="65" fill="url(#edison2)" />
        <ellipse cx="970" cy="80" rx="14" ry="18" fill="#ffffff" />
        <path d="M965 75L975 85M965 85L975 75" stroke="#f59e0b" strokeWidth="1.5" />

        {/* Grand Classic Vintage Barber Chair in Deep Tufted Leather & Polished Chrome */}
        <g transform="translate(820, 95)">
          {/* Circular Polished Chrome Hydraulic Base */}
          <ellipse cx="110" cy="270" rx="80" ry="18" fill="url(#chromeSpec)" stroke="#4b5563" strokeWidth="1.5" />
          <rect x="102" y="215" width="16" height="58" fill="url(#chromeSpec)" />

          {/* Barber Footrest with Grill */}
          <path d="M50 248L15 265H65L88 248Z" fill="url(#chromeSpec)" />
          <line x1="22" y1="260" x2="56" y2="260" stroke="#374151" strokeWidth="1.8" />
          <line x1="26" y1="256" x2="60" y2="256" stroke="#374151" strokeWidth="1.8" />

          {/* Deep Tufted Leather Seat Cushion */}
          <rect x="55" y="180" width="110" height="35" rx="9" fill="url(#leatherShade)" stroke="#6b4c2b" strokeWidth="2.5" />
          {/* Diamond Tufting Stitch Details on Seat */}
          <path d="M75 186L95 204L115 186L135 204L150 186" stroke="#E5C365" strokeWidth="0.8" strokeOpacity="0.5" />

          {/* Chrome Reclining Control Lever */}
          <line x1="168" y1="195" x2="192" y2="175" stroke="url(#chromeSpec)" strokeWidth="3.5" strokeLinecap="round" />
          <circle cx="193" cy="174" r="5" fill="#18181b" />

          {/* Armrests (Padded Leather with Chrome Supports) */}
          <rect x="48" y="142" width="20" height="46" rx="7" fill="url(#leatherShade)" stroke="#6b4c2b" strokeWidth="1.8" />
          <path d="M50 165L36 195" stroke="url(#chromeSpec)" strokeWidth="4.5" strokeLinecap="round" />

          <rect x="152" y="142" width="20" height="46" rx="7" fill="url(#leatherShade)" stroke="#6b4c2b" strokeWidth="1.8" />
          <path d="M170 165L184 195" stroke="url(#chromeSpec)" strokeWidth="4.5" strokeLinecap="round" />

          {/* High Wingback Backrest with Tufting & Chrome Trim */}
          <path
            d="M68 45C68 35 76 26 86 26H134C144 26 152 35 152 45V150H68V45Z"
            fill="url(#leatherShade)"
            stroke="#6b4c2b"
            strokeWidth="3"
          />
          {/* Chrome Rim on Backrest */}
          <path d="M66 55V145" stroke="url(#chromeSpec)" strokeWidth="3" />
          <path d="M154 55V145" stroke="url(#chromeSpec)" strokeWidth="3" />

          {/* Tufted Dimples & Buttons */}
          <circle cx="92" cy="60" r="3" fill="#E5C365" fillOpacity="0.8" />
          <circle cx="128" cy="60" r="3" fill="#E5C365" fillOpacity="0.8" />
          <circle cx="110" cy="85" r="3" fill="#E5C365" fillOpacity="0.8" />
          <circle cx="92" cy="110" r="3" fill="#E5C365" fillOpacity="0.8" />
          <circle cx="128" cy="110" r="3" fill="#E5C365" fillOpacity="0.8" />
          <circle cx="110" cy="135" r="3" fill="#E5C365" fillOpacity="0.8" />

          {/* Diamond Stitch lines connecting tufts */}
          <path d="M92 60L110 85L128 60M92 110L110 85L128 110M92 110L110 135L128 110" stroke="#d97706" strokeWidth="0.8" strokeOpacity="0.4" />

          {/* Adjustable Chrome Headrest with Tufted Leather Pillow */}
          <rect x="105" y="8" width="10" height="20" fill="url(#chromeSpec)" />
          <rect x="84" y="0" width="52" height="22" rx="8" fill="url(#leatherShade)" stroke="#6b4c2b" strokeWidth="2" />
        </g>

        {/* Ambient Floor Glow Reflection */}
        <ellipse cx="940" cy="400" rx="240" ry="25" fill="#f59e0b" fillOpacity="0.1" />
      </svg>
    </div>
  );
};
