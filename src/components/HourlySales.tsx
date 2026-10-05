import React from 'react';
import { Clock, ArrowRight } from 'lucide-react';
import { HourlySale } from '../types/dashboard';

interface Props {
  sales: HourlySale[];
  onViewAll?: () => void;
}

export const HourlySales: React.FC<Props> = ({ sales, onViewAll }) => {
  return (
    <div className="rounded-2xl bg-[#121620] border border-[#1e2534] p-4 sm:p-5 shadow-xl">
      {/* Header */}
      <div className="flex items-center justify-between pb-3.5 mb-3 border-b border-[#1b2230]">
        <div className="flex items-center gap-2.5">
          <div className="p-1.5 rounded-lg bg-amber-500/10 text-amber-400">
            <Clock className="w-4 h-4" />
          </div>
          <h3 className="text-sm sm:text-base font-bold text-white tracking-tight">
            Horários de maior venda
          </h3>
        </div>

        <button
          onClick={onViewAll}
          className="flex items-center gap-1 text-xs text-slate-400 hover:text-amber-400 transition-colors"
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

              {/* Progress bar with warm gold gradient */}
              <div className="flex-1 h-3 rounded-full bg-[#18202d] overflow-hidden max-w-[130px] sm:max-w-[170px]">
                <div
                  style={{ width: `${slot.percentage}%` }}
                  className="h-full rounded-full bg-gradient-to-r from-[#d97706] to-[#f5b338] transition-all duration-500"
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
