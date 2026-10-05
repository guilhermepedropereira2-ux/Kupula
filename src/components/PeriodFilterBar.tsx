import React from 'react';
import { SlidersHorizontal, Calendar } from 'lucide-react';
import { PeriodFilter } from '../types/dashboard';

interface Props {
  selectedPeriod: PeriodFilter;
  onPeriodChange: (p: PeriodFilter) => void;
  onOpenAdvancedFilters?: () => void;
  selectedMonth?: string;
  onOpenMonthModal?: () => void;
}

export const PeriodFilterBar: React.FC<Props> = ({
  selectedPeriod,
  onPeriodChange,
  onOpenAdvancedFilters,
  selectedMonth,
  onOpenMonthModal,
}) => {
  return (
    <div className="w-full max-w-full overflow-hidden flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-0.5 pb-1">
      {/* Scrollable pill container with scroll ONLY inside this element */}
      <div className="w-full sm:w-auto max-w-full overflow-x-auto no-scrollbar scroll-smooth flex items-center gap-1.5 p-1 bg-[#0A0E15] border border-[#161e2c] rounded-xl shadow-inner">
        <button
          onClick={() => onPeriodChange('hoje')}
          className={`shrink-0 px-3.5 sm:px-4 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
            selectedPeriod === 'hoje'
              ? 'bg-[#E5C365] text-slate-950 font-bold shadow-xs'
              : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
          }`}
        >
          Hoje
        </button>
        <button
          onClick={() => onPeriodChange('7dias')}
          className={`shrink-0 px-3.5 sm:px-4 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
            selectedPeriod === '7dias'
              ? 'bg-[#E5C365] text-slate-950 font-bold shadow-xs'
              : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
          }`}
        >
          7 Dias
        </button>
        <button
          onClick={() => onPeriodChange('este-mes')}
          className={`shrink-0 px-3.5 sm:px-4.5 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
            selectedPeriod === 'este-mes'
              ? 'bg-[#E5C365] text-slate-950 font-bold shadow-xs'
              : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
          }`}
        >
          Este Mês
        </button>
        <button
          onClick={() => onPeriodChange('3meses')}
          className={`shrink-0 px-3.5 sm:px-4 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
            selectedPeriod === '3meses'
              ? 'bg-[#E5C365] text-slate-950 font-bold shadow-xs'
              : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
          }`}
        >
          3 Meses
        </button>
        <button
          onClick={onOpenAdvancedFilters}
          className="shrink-0 px-3 sm:px-3.5 py-1.5 rounded-lg text-xs font-semibold text-slate-400 hover:text-[#E5C365] hover:bg-white/5 transition-all whitespace-nowrap cursor-pointer flex items-center gap-1"
        >
          <span>Personalizado</span>
        </button>
      </div>

      {/* On mobile (<sm): subtle month reference indicator so users still see "Outubro 2026" without header crowding */}
      {selectedMonth && (
        <div className="sm:hidden flex items-center justify-between px-1 text-[11px] text-slate-400">
          <div className="flex items-center gap-1 text-[#E5C365] font-medium">
            <Calendar className="w-3 h-3" />
            <span>{selectedMonth}</span>
          </div>
          <button
            onClick={onOpenAdvancedFilters}
            className="text-[10px] text-slate-400 hover:text-white"
          >
            Filtros avançados
          </button>
        </div>
      )}

      {/* Desktop Filter Tools Button */}
      <button
        onClick={onOpenAdvancedFilters}
        className="hidden sm:flex items-center justify-center p-2 bg-[#0A0E15] border border-[#161e2c] hover:border-[#D4AF37]/50 rounded-xl text-slate-400 hover:text-[#E5C365] transition-all shadow-inner shrink-0"
        title="Filtros avançados e comparação"
      >
        <SlidersHorizontal className="w-4 h-4" />
      </button>
    </div>
  );
};
