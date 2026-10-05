import React from 'react';
import kupolaSymbolGold from '../assets/images/kupola-symbol-gold.png';

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
    <div
      className={`flex items-center gap-2.5 sm:gap-3 select-none shrink-0 whitespace-nowrap ${className}`}
    >
      {/* 
        SÍMBOLO OFICIAL KUPOLA: K DOURADO + NAVALHA (ASSET TRANSPARENTE DE ALTA VISIBILIDADE)
        - Novo asset PNG com fundo 100% transparente
        - Dourado metálico 24K radiante e luminoso (sem tons escuros ou amarronzados)
        - Ocupa aproximadamente 70-72% da área do quadrado
        - Centralização perfeita e margens uniformes
        - Detalhes nítidos: K chanfrado + navalha com fio de corte e rebites
      */}
      <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center bg-[#070A0F] border border-[#E5C365]/40 shadow-[0_0_15px_rgba(229,195,101,0.18)] shrink-0 overflow-hidden">
        {/* Sutil iluminação âmbar de apoio para destacar os contornos metálicos */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.14)_0%,transparent_75%)] pointer-events-none" />

        {/* Novo Asset PNG Transparente - K Dourado + Navalha */}
        <img
          src={kupolaSymbolGold}
          alt="KUPOLA - K Dourado e Navalha"
          className="w-[72%] h-[72%] object-contain relative z-10 select-none pointer-events-none filter drop-shadow-[0_0_6px_rgba(255,215,0,0.25)] brightness-105"
          loading="eager"
        />
      </div>

      {!compact && (
        /* Wordmark container - strictly always full, never truncated, never wrapped, never clipped */
        <div className="flex flex-col shrink-0 min-w-max leading-none">
          {/* Tipografia KUPOLA original */}
          <span className="font-['Outfit',sans-serif] tracking-[0.22em] text-[18px] sm:text-[20px] lg:text-[22px] font-black uppercase bg-gradient-to-r from-[#FFFDF0] via-[#F3CE72] to-[#D4AF37] bg-clip-text text-transparent whitespace-nowrap shrink-0 leading-none drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]">
            KUPOLA
          </span>
          {/* Subtítulo institucional */}
          {subtext && (
            <span className="text-[7.5px] sm:text-[8.5px] font-bold tracking-[0.24em] text-amber-200/70 mt-1 uppercase whitespace-nowrap shrink-0 hidden sm:block">
              {subtext}
            </span>
          )}
        </div>
      )}
    </div>
  );
};
