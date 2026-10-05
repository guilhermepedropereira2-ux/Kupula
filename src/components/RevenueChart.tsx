import React, { useState } from 'react';
import { BarChart3, ChevronDown } from 'lucide-react';
import { DayRevenue } from '../types/dashboard';

interface Props {
  data: DayRevenue[];
}

export const RevenueChart: React.FC<Props> = ({ data }) => {
  const [activeDayIndex, setActiveDayIndex] = useState<number>(9); // Day 10 (10/10) default
  const [chartView, setChartView] = useState<'15dias' | '30dias'>('15dias');

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

  const maxScale = 800; // Y axis maximum R$ 800

  return (
    <div className="rounded-2xl bg-[#0D121B] border border-[#161e2c] p-4 sm:p-5 lg:p-6 shadow-xl relative overflow-hidden flex flex-col justify-between">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
        <div className="flex items-start gap-2.5">
          <div className="p-1.5 sm:p-2 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#E5C365] mt-0.5">
            <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div>
            <h2 className="text-sm sm:text-base lg:text-lg font-bold text-white tracking-tight">
              Evolução de Faturamento
            </h2>
            <p className="text-[11px] sm:text-xs text-slate-400">
              Receita de serviços e produtos por dia
            </p>
          </div>
        </div>

        {/* Controls: Legend & Range Dropdown */}
        <div className="flex items-center gap-3 self-end sm:self-center">
          {/* Legend */}
          <div className="flex items-center gap-2.5 text-[11px] sm:text-xs text-slate-300">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#E5C365] shadow-[0_0_6px_rgba(229,195,101,0.5)]" />
              <span>Serviços</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#475569]" />
              <span>Produtos</span>
            </div>
          </div>

          {/* Range Dropdown */}
          <button
            onClick={() =>
              setChartView(chartView === '15dias' ? '30dias' : '15dias')
            }
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-[#0A0E15] hover:bg-[#111722] border border-[#1e2736] text-[11px] sm:text-xs font-medium text-slate-300 transition-colors"
          >
            <span>{chartView === '15dias' ? 'Este Mês' : 'Mês Completo'}</span>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
          </button>
        </div>
      </div>

      {/* Chart Canvas Area */}
      <div className="relative h-56 sm:h-64 lg:h-72 xl:h-[280px] w-full pt-4 select-none">
        {/* Y Axis Grid Labels & Horizontal Lines */}
        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none pb-7 text-[10px] sm:text-[11px] text-slate-400 font-mono tabular-nums">
          {[800, 600, 400, 200, 0].map((val) => (
            <div key={val} className="flex items-center w-full">
              <span className="w-10 sm:w-12 text-right pr-2 sm:pr-3 shrink-0">
                R$ {val}
              </span>
              <div className="flex-1 border-b border-dashed border-[#16202e]" />
            </div>
          ))}
        </div>

        {/* Stacked Bars Container */}
        <div className="absolute left-10 sm:left-12 right-1 sm:right-2 top-0 bottom-7 flex items-end justify-between gap-1 sm:gap-2 px-1 sm:px-2">
          {fullMonthData.map((d, index) => {
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
                  <div className="absolute inset-x-0 bottom-0 top-0 bg-gradient-to-t from-[#D4AF37]/20 via-[#D4AF37]/5 to-transparent rounded-t-lg pointer-events-none" />
                )}

                {/* Floating Active Tooltip matching Print */}
                {isActive && (
                  <div className="absolute -top-16 z-30 flex flex-col items-center pointer-events-none animate-in fade-in zoom-in-95 duration-150">
                    <div className="bg-[#05070B] border border-[#222c3d] rounded-xl px-2.5 sm:px-3 py-1.5 shadow-2xl text-left whitespace-nowrap min-w-[130px]">
                      <div className="flex items-center justify-between text-[10px] sm:text-[11px] text-slate-400 mb-0.5">
                        <span>{d.dateStr}</span>
                        <span className="text-white font-bold tabular-nums">
                          R$ {d.total.toFixed(2).replace('.', ',')}
                        </span>
                      </div>
                      <div className="text-[10px] flex items-center gap-1 text-[#E5C365]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E5C365]" />
                        <span>Serviços: R$ {d.servicos.toFixed(2).replace('.', ',')}</span>
                      </div>
                      <div className="text-[10px] flex items-center gap-1 text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#64748b]" />
                        <span>Produtos: R$ {d.produtos.toFixed(2).replace('.', ',')}</span>
                      </div>
                    </div>
                    {/* Tooltip triangle tail */}
                    <div className="w-2 h-2 bg-[#05070B] border-r border-b border-[#222c3d] transform rotate-45 -mt-1" />
                  </div>
                )}

                {/* The Stacked Bar */}
                <div
                  style={{ height: `${totalPct}%` }}
                  className={`w-full max-w-[24px] sm:max-w-[28px] rounded-t-md flex flex-col overflow-hidden transition-all duration-300 ${
                    isActive
                      ? 'ring-2 ring-[#E5C365] shadow-[0_0_12px_rgba(229,195,101,0.35)]'
                      : 'opacity-85 group-hover:opacity-100'
                  }`}
                >
                  {/* Top Segment: Produtos (Slate) */}
                  <div
                    style={{ height: `${(d.produtos / d.total) * 100}%` }}
                    className="w-full bg-[#3b4759] group-hover:bg-[#475569] transition-colors"
                  />

                  {/* Bottom Segment: Serviços (Gold) */}
                  <div
                    style={{ height: `${(d.servicos / d.total) * 100}%` }}
                    className="w-full bg-gradient-to-t from-[#B38F24] via-[#D4AF37] to-[#E5C365] group-hover:brightness-110 transition-all flex-1"
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* X Axis Day Labels */}
        <div className="absolute left-10 sm:left-12 right-1 sm:right-2 bottom-0 flex justify-between gap-1 sm:gap-2 px-1 sm:px-2 text-[10px] sm:text-[11px] text-slate-400 font-mono">
          {fullMonthData.map((d, index) => {
            const isActive = index === activeDayIndex;
            return (
              <div
                key={d.day}
                onClick={() => setActiveDayIndex(index)}
                className={`flex-1 text-center cursor-pointer transition-colors ${
                  isActive ? 'text-[#E5C365] font-bold' : 'hover:text-slate-200'
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
