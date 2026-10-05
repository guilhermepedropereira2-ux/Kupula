import React from 'react';
import {
  ShieldCheck,
  Users,
  Hourglass,
  Scissors,
  ChevronRight,
  Plus,
} from 'lucide-react';
import { CurrentStatus } from '../types/dashboard';

interface Props {
  status: CurrentStatus;
  onOpenNewAppointment: () => void;
  onRowClick?: (rowKey: string) => void;
}

export const OperationalStatus: React.FC<Props> = ({
  status,
  onOpenNewAppointment,
  onRowClick,
}) => {
  return (
    <div className="rounded-2xl bg-[#121620] border border-[#1e2534] p-4 sm:p-5 shadow-xl flex flex-col justify-between">
      <div>
        {/* Header */}
        <div className="flex items-center justify-between pb-3.5 mb-2 border-b border-[#1b2230]">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-lg bg-amber-500/10 text-amber-400">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <h3 className="text-sm sm:text-base font-bold text-white tracking-tight">
              Situação Agora
            </h3>
          </div>

          {/* Status pill badge with green indicator */}
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold cursor-pointer hover:bg-emerald-500/15 transition-colors">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>{status.statusText}</span>
            <ChevronRight className="w-3.5 h-3.5 ml-0.5 text-emerald-400/80" />
          </div>
        </div>

        {/* Live Operational Metrics Rows */}
        <div className="space-y-1 sm:space-y-2 py-1">
          {/* Row 1: Barbeiros hoje */}
          <div
            onClick={() => onRowClick?.('barbeiros')}
            className="group flex items-center justify-between p-2.5 rounded-xl hover:bg-[#171d2b] transition-all cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className="p-1.5 rounded-lg bg-[#181f2c] text-slate-300 group-hover:text-amber-400 transition-colors">
                <Users className="w-4 h-4" />
              </div>
              <span className="text-xs sm:text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                Barbeiros hoje
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm sm:text-base font-bold text-white tabular-nums font-mono">
                {status.barbersCount}
              </span>
              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-slate-200 transition-colors" />
            </div>
          </div>

          {/* Row 2: Na fila (geral) */}
          <div
            onClick={() => onRowClick?.('fila')}
            className="group flex items-center justify-between p-2.5 rounded-xl hover:bg-[#171d2b] transition-all cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className="p-1.5 rounded-lg bg-[#181f2c] text-slate-300 group-hover:text-amber-400 transition-colors">
                <Hourglass className="w-4 h-4" />
              </div>
              <span className="text-xs sm:text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                Na fila (geral)
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm sm:text-base font-bold text-white tabular-nums font-mono">
                {status.queueCount}
              </span>
              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-slate-200 transition-colors" />
            </div>
          </div>

          {/* Row 3: Em atendimento */}
          <div
            onClick={() => onRowClick?.('atendimento')}
            className="group flex items-center justify-between p-2.5 rounded-xl hover:bg-[#171d2b] transition-all cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className="p-1.5 rounded-lg bg-[#181f2c] text-slate-300 group-hover:text-amber-400 transition-colors">
                <Scissors className="w-4 h-4" />
              </div>
              <span className="text-xs sm:text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                Em atendimento
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm sm:text-base font-bold text-white tabular-nums font-mono">
                {status.inServiceCount}
              </span>
              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-slate-200 transition-colors" />
            </div>
          </div>
        </div>
      </div>

      {/* Prominent "+ Novo Atendimento" Button */}
      <div className="pt-3">
        <button
          onClick={onOpenNewAppointment}
          className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-[#e5a93c] via-[#f5b338] to-[#e5a93c] hover:brightness-105 active:scale-[0.99] transition-all shadow-[0_4px_14px_rgba(245,179,56,0.3)] cursor-pointer"
        >
          <Plus className="w-4 h-4 stroke-[2.5]" />
          <span>Novo Atendimento</span>
        </button>
      </div>
    </div>
  );
};
