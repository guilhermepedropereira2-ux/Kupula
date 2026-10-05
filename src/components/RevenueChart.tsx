import React, { useState } from 'react';
import { BarChart3, ChevronDown } from 'lucide-react';
import { DayRevenue } from '../types/dashboard';

interface Props {
  data: DayRevenue[];
}

export const RevenueChart: React.FC<Props> = ({ data }) => {
  const [activeDayIndex, setActiveDayIndex] = useState<number>(9); // Day 10 default
  const [chartView, setChartView] = useState<'15dias' | '30dias'>('15dias');

  // If 30 days is chosen, generate the rest of the days for realism
  const fullMonthData: DayRevenue[] =
    chartView === '30dias'
      ? [
          ...data,
          { day: '16', dateStr: '16/10', servicos: 210, produtos: 50, total: 260 },
          { day: '17', dateStr: '17/10', servicos: 290, produtos: 70, total: 360 },
          { day: '18', dateStr: '18/10', servicos: 350, produtos: 90, total: 440 },
          { day: '19', dateStr: '19/10', servicos: 200, produtos: 40, total: 240 },
          { day: '20', dateStr: '20/10', servicos: 310, produtos: 80, total: 390 },
          { day: '21', dateStr: '21/10', servicos: 280, produtos: 60, total: 340 },
          { day: '22', dateStr: '22/10', servicos: 240, produtos: 50, total: 290 },
          { day: '23', dateStr: '23/10', servicos: 360, produtos: 85, total: 445 },
          { day: '24', dateStr: '24/10', servicos: 420, produtos: 110, total: 530 },
          { day: '25', dateStr: '25/10', servicos: 380, produtos: 95, total: 475 },
          { day: '26', dateStr: '26/10', servicos: 230, produtos: 45, total: 275 },
          { day: '27', dateStr: '27/10', servicos: 270, produtos: 60, total: 330 },
          { day: '28', dateStr: '28/10', servicos: 310, produtos: 75, total: 385 },
          { day: '29', dateStr: '29/10', servicos: 390, produtos: 100, total: 490 },
          { day: '30', dateStr: '30/10', servicos: 450, produtos: 120, total: 570 },
        ]
      : data;

  const activeDay = fullMonthData[activeDayIndex] || fullMonthData[9];
  const maxScale = 800; // Y axis maximum R$ 800

  return (
    <div className="rounded-2xl bg-[#121620] border border-[#1e2534] p-4 sm:p-5 lg:p-6 shadow-xl relative overflow-hidden">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 mt-0.5">
            <BarChart3 className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-bold text-white tracking-tight">
              Evolução de Faturamento
            </h2>
            <p className="text-xs text-slate-400">
              Receita de serviços e produtos por dia
            </p>
          </div>
        </div>

        {/* Controls: Legend & Period Selector */}
        <div className="flex items-center gap-4 self-end sm:self-center">
          {/* Legend */}
          <div className="flex items-center gap-3 text-xs text-slate-300">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.5)]" />
              <span>Serviços</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-500" />
              <span>Produtos</span>
            </div>
          </div>

          {/* Range Dropdown */}
          <div className="relative">
            <button
              onClick={() =>
                setChartView(chartView === '15dias' ? '30dias' : '15dias')
              }
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#181e2b] hover:bg-[#1f2738] border border-[#232d3f] text-xs font-medium text-slate-300 transition-colors"
            >
              <span>{chartView === '15dias' ? 'Este Mês (1-15)' : 'Este Mês (Completo)'}</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </button>
          </div>
        </div>
      </div>

      {/* Chart Canvas Area */}
      <div className="relative h-64 sm:h-72 w-full pt-6 select-none">
        {/* Y Axis Grid Labels & Horizontal Lines */}
        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none pb-7 text-[11px] text-slate-400 font-mono tabular-nums">
          {[800, 600, 400, 200, 0].map((val) => (
            <div key={val} className="flex items-center w-full">
              <span className="w-12 text-right pr-3 shrink-0">
                R$ {val}
              </span>
              <div className="flex-1 border-b border-dashed border-[#1f2838]" />
            </div>
          ))}
        </div>

        {/* Stacked Bars Container */}
        <div className="absolute left-12 right-2 top-0 bottom-7 flex items-end justify-between gap-1 sm:gap-2 px-1 sm:px-3">
          {fullMonthData.map((d, index) => {
            const servicosPct = Math.min((d.servicos / maxScale) * 100, 100);
            const produtosPct = Math.min((d.produtos / maxScale) * 100, 100);
            const totalPct = Math.min((d.total / maxScale) * 100, 100);
            const isActive = index === activeDayIndex;

            return (
              <div
                key={d.day}
                onMouseEnter={() => setActiveDayIndex(index)}
                onClick={() => setActiveDayIndex(index)}
                className="relative flex-1 h-full flex flex-col justify-end items-center group cursor-pointer"
              >
                {/* Spotlight column glow for active bar */}
                {isActive && (
                  <div className="absolute inset-x-0 bottom-0 top-0 bg-gradient-to-t from-amber-500/20 via-amber-500/5 to-transparent rounded-t-lg pointer-events-none" />
                )}

                {/* Floating Active Tooltip */}
                {isActive && (
                  <div className="absolute -top-16 z-30 flex flex-col items-center pointer-events-none animate-in fade-in zoom-in-95 duration-150">
                    <div className="bg-[#0b0e14] border border-[#2d3748] rounded-xl px-3 py-1.5 shadow-2xl text-left whitespace-nowrap min-w-[140px]">
                      <div className="flex items-center justify-between text-[11px] text-slate-400 mb-0.5">
                        <span>{d.dateStr}</span>
                        <span className="text-white font-bold tabular-nums">
                          R$ {d.total.toFixed(2).replace('.', ',')}
                        </span>
                      </div>
                      <div className="text-[10px] flex items-center gap-1.5 text-amber-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                        <span>Serviços: R$ {d.servicos.toFixed(2).replace('.', ',')}</span>
                      </div>
                      <div className="text-[10px] flex items-center gap-1.5 text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                        <span>Produtos: R$ {d.produtos.toFixed(2).replace('.', ',')}</span>
                      </div>
                    </div>
                    {/* Tooltip triangle tail */}
                    <div className="w-2 h-2 bg-[#0b0e14] border-r border-b border-[#2d3748] transform rotate-45 -mt-1" />
                  </div>
                )}

                {/* The Stacked Bar */}
                <div
                  style={{ height: `${totalPct}%` }}
                  className={`w-full max-w-[28px] rounded-t-md flex flex-col overflow-hidden transition-all duration-300 ${
                    isActive
                      ? 'ring-2 ring-amber-400/80 shadow-[0_0_15px_rgba(245,179,56,0.4)]'
                      : 'opacity-85 group-hover:opacity-100'
                  }`}
                >
                  {/* Top Segment: Produtos (Slate) */}
                  <div
                    style={{ height: `${(d.produtos / d.total) * 100}%` }}
                    className="w-full bg-[#3b4759] group-hover:bg-[#475569] transition-colors"
                  />

                  {/* Bottom Segment: Serviços (Amber / Gold) */}
                  <div
                    style={{ height: `${(d.servicos / d.total) * 100}%` }}
                    className="w-full bg-gradient-to-t from-[#c58826] to-[#f5b338] group-hover:brightness-110 transition-all flex-1"
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* X Axis Day Labels */}
        <div className="absolute left-12 right-2 bottom-0 flex justify-between gap-1 sm:gap-2 px-1 sm:px-3 text-[11px] text-slate-400 font-mono">
          {fullMonthData.map((d, index) => {
            const isActive = index === activeDayIndex;
            return (
              <div
                key={d.day}
                onClick={() => setActiveDayIndex(index)}
                className={`flex-1 text-center cursor-pointer transition-colors ${
                  isActive ? 'text-amber-400 font-bold' : 'hover:text-slate-200'
                }`}
              >
                {d.day}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
