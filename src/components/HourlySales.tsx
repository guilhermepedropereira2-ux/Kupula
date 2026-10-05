import React from 'react';
import { Clock, ArrowRight } from 'lucide-react';
import { HourlySale } from '../types/dashboard';

interface Props {
  sales: HourlySale[];
  onViewAll?: () => void;
}

export const HourlySales: React.FC<Props> = ({ sales, onViewAll }) => {
  return (
    <div className="rounded-2xl bg-[#0D121B] border border-[#161e2c] p-4 sm:p-5 shadow-xl">
      {/* Header */}
      <div className="flex items-center justify-between pb-3.5 mb-3 border-b border-[#161e2c]">
        <div className="flex items-center gap-2.5">
          <div className="p-1.5 rounded-lg bg-[#D4AF37]/10 text-[#E5C365]">
            <Clock className="w-4 h-4" />
          </div>
          <h3 className="text-sm sm:text-base font-bold text-white tracking-tight">
            Horários de maior venda
          </h3>
        </div>

        <button
          onClick={onViewAll}
          className="flex items-center gap-1 text-xs text-slate-400 hover:text-[#E5C365] transition-colors"
        >
          <span>Ver todos</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Hourly distribution rows */}
      <div className="space-y-2.5">
        {sales.map((slot) => {
          return (
            <div
              key={slot.timeRange}
              className="flex items-center justify-between gap-3 text-xs"
            >
              {/* Time Range Label */}
              <span className="font-mono text-slate-300 w-20 shrink-0">
                {slot.timeRange}
              </span>

              {/* Progress bar with gold gradient */}
              <div className="flex-1 h-2.5 rounded-full bg-[#161e2b] overflow-hidden max-w-[130px] sm:max-w-[170px]">
                <div
                  style={{ width: `${slot.percentage}%` }}
                  className="h-full rounded-full bg-gradient-to-r from-[#D4AF37] to-[#E5C365] transition-all duration-500"
                />
              </div>

              {/* Amount */}
              <div className="w-20 text-right font-mono font-bold text-slate-100 tabular-nums">
                R$ {slot.amount.toFixed(2).replace('.', ',')}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
