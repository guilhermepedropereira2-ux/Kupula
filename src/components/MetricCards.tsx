import React from 'react';
import {
  DollarSign,
  Scissors,
  Package,
  Users,
  TrendingUp,
} from 'lucide-react';
import { MetricCardData } from '../types/dashboard';

interface Props {
  metrics: MetricCardData[];
  onCardClick?: (metricId: string) => void;
}

export const MetricCards: React.FC<Props> = ({ metrics, onCardClick }) => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'faturamento':
        return (
          <div className="w-11 h-11 rounded-full bg-[#271f11] border border-amber-500/40 flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(217,119,6,0.15)] group-hover:border-amber-400/80 transition-colors">
            <DollarSign className="w-5 h-5 text-amber-400 stroke-[2.2]" />
          </div>
        );
      case 'servicos':
        return (
          <div className="w-11 h-11 rounded-full bg-[#271f11] border border-amber-500/40 flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(217,119,6,0.15)] group-hover:border-amber-400/80 transition-colors">
            <Scissors className="w-5 h-5 text-amber-400 stroke-[2.2]" />
          </div>
        );
      case 'produtos':
        return (
          <div className="w-11 h-11 rounded-full bg-[#22162e] border border-purple-500/40 flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(168,85,247,0.15)] group-hover:border-purple-400/80 transition-colors">
            <Package className="w-5 h-5 text-purple-400 stroke-[2.2]" />
          </div>
        );
      case 'atendimentos':
        return (
          <div className="w-11 h-11 rounded-full bg-[#131d2f] border border-sky-500/40 flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(56,189,248,0.15)] group-hover:border-sky-400/80 transition-colors">
            <Users className="w-5 h-5 text-sky-400 stroke-[2.2]" />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3.5 sm:gap-4">
      {metrics.map((card) => {
        return (
          <div
            key={card.id}
            onClick={() => onCardClick?.(card.id)}
            className="group relative p-4 sm:p-5 rounded-2xl bg-[#121620] border border-[#1e2534] hover:border-amber-500/40 hover:bg-[#151a26] transition-all cursor-pointer shadow-lg hover:shadow-xl"
          >
            <div className="flex items-start justify-between gap-3 mb-2.5">
              <div className="flex-1">
                <span className="text-xs font-medium text-slate-400 tracking-wide block mb-1">
                  {card.title}
                </span>
                <div className="text-xl sm:text-2xl font-extrabold text-white tracking-tight tabular-nums">
                  {card.value}
                </div>
              </div>
              {getIcon(card.id)}
            </div>

            {/* Growth indicator badge */}
            <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
              <TrendingUp className="w-3.5 h-3.5 shrink-0" />
              <span>{card.trend}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
