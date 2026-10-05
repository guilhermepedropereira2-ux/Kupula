import React from 'react';
import { MapPin, ArrowRight, Store, SlidersHorizontal } from 'lucide-react';
import { BarbershopIllustration } from './BarbershopIllustration';
import { PeriodFilter } from '../types/dashboard';

interface Props {
  selectedPeriod: PeriodFilter;
  onPeriodChange: (p: PeriodFilter) => void;
  onOpenStoreProfile: () => void;
}

export const HeroBanner: React.FC<Props> = ({
  selectedPeriod,
  onPeriodChange,
  onOpenStoreProfile,
}) => {
  return (
    <div className="relative rounded-2xl bg-[#0f131c] border border-[#202737] p-5 sm:p-6 lg:p-7 overflow-hidden shadow-2xl">
      {/* Background Ambience Scene */}
      <BarbershopIllustration />

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col justify-between gap-6 min-h-[170px]">
        {/* Top Section: Greeting on left, Store badge on right */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
          {/* Greeting text */}
          <div className="max-w-xl">
            <div className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#e5a93c] uppercase mb-1 drop-shadow-sm">
              BOM DIA,
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-white tracking-tight leading-none mb-2.5">
              Guilherme!
            </h1>
            <p className="text-xs sm:text-sm text-slate-300/90 font-medium">
              <span className="hidden sm:inline">Aqui está o resumo da sua barbearia hoje, </span>
              <span className="sm:hidden">Veja o resumo da sua barbearia hoje, </span>
              4 de outubro de 2026.
            </p>
          </div>

          {/* Store Badge Card */}
          <div className="shrink-0">
            {/* Desktop Store Box */}
            <div className="hidden sm:flex flex-col items-end">
              <div className="text-xs font-bold tracking-wider text-slate-200 uppercase mb-1">
                BARBEARIA VINTAGE CLUB
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-3">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>Matriz</span>
              </div>
              <button
                onClick={onOpenStoreProfile}
                className="flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium text-amber-300 hover:text-amber-200 border border-amber-500/50 hover:border-amber-400 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 backdrop-blur-xs transition-all shadow-sm"
              >
                <span>Ver perfil da barbearia</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile Store Pill */}
            <button
              onClick={onOpenStoreProfile}
              className="sm:hidden flex items-center justify-between w-full p-2.5 bg-[#141924]/80 border border-[#232d40] rounded-xl hover:border-amber-500/40 transition-colors"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-amber-500/15 border border-amber-500/30 flex items-center justify-center">
                  <Store className="w-4 h-4 text-amber-400" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-slate-100">Vintage Club</div>
                  <div className="text-[10px] text-slate-400">Matriz</div>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </button>
          </div>
        </div>

        {/* Filter Tabs Bar (Seen prominently in Screenshot 2 / mobile, and adds interactive joy to desktop) */}
        <div className="flex items-center justify-between gap-2 pt-2">
          <div className="flex items-center gap-1 p-1 bg-[#0b0e14]/70 backdrop-blur-md rounded-xl border border-[#1e2534] max-w-md w-full sm:w-auto">
            <button
              onClick={() => onPeriodChange('hoje')}
              className={`flex-1 sm:flex-none px-3 sm:px-4 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
                selectedPeriod === 'hoje'
                  ? 'bg-amber-400 text-slate-950 shadow-md font-bold'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
              }`}
            >
              Hoje
            </button>
            <button
              onClick={() => onPeriodChange('7dias')}
              className={`flex-1 sm:flex-none px-3 sm:px-4 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
                selectedPeriod === '7dias'
                  ? 'bg-amber-400 text-slate-950 shadow-md font-bold'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
              }`}
            >
              7 Dias
            </button>
            <button
              onClick={() => onPeriodChange('este-mes')}
              className={`flex-1 sm:flex-none px-3 sm:px-4 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
                selectedPeriod === 'este-mes'
                  ? 'bg-amber-400 text-slate-950 shadow-md font-bold'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
              }`}
            >
              Este Mês
            </button>
            <button
              onClick={() => onPeriodChange('3meses')}
              className={`flex-1 sm:flex-none px-3 sm:px-4 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
                selectedPeriod === '3meses'
                  ? 'bg-amber-400 text-slate-950 shadow-md font-bold'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
              }`}
            >
              3 Meses
            </button>
          </div>

          {/* Filter preferences toggle */}
          <button
            onClick={() => alert('Filtros avançados: Comparar filiais, barbeiros ou períodos personalizados.')}
            className="hidden sm:flex items-center justify-center p-2 bg-[#0b0e14]/70 border border-[#1e2534] hover:border-amber-500/40 rounded-xl text-slate-400 hover:text-amber-400 transition-colors"
            title="Filtros avançados"
          >
            <SlidersHorizontal className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
