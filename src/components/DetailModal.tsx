import React from 'react';
import { X, MapPin, Phone, Instagram, Clock, Star, Scissors, Package } from 'lucide-react';
import { TOP_SERVICES, TOP_PRODUCTS } from '../data/mockData';

interface Props {
  type: 'store' | 'all-services' | 'all-products' | 'hourly' | null;
  onClose: () => void;
  onOpenNewAppointment?: () => void;
}

export const DetailModal: React.FC<Props> = ({
  type,
  onClose,
  onOpenNewAppointment,
}) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="relative w-full max-w-xl bg-[#121622] border border-[#263145] rounded-2xl shadow-2xl p-6 text-slate-100 animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between pb-4 border-b border-[#1e2535]">
          <h3 className="text-base font-bold text-white">
            {type === 'store' && 'Perfil da Barbearia'}
            {type === 'all-services' && 'Catálogo de Serviços'}
            {type === 'all-products' && 'Catálogo de Produtos'}
            {type === 'hourly' && 'Relatório Detalhado por Horário'}
          </h3>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-4">
          {type === 'store' && (
            <div className="space-y-4 text-xs sm:text-sm">
              <div className="p-4 rounded-xl bg-[#0c0e14] border border-[#232c3d] flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-500/40 flex items-center justify-center text-amber-400 font-bold text-lg font-serif">
                  K
                </div>
                <div>
                  <h4 className="font-bold text-white text-base">Barbearia Vintage Club</h4>
                  <div className="flex items-center gap-1 text-amber-400 text-xs mt-0.5">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <span className="font-bold">4.9</span>
                    <span className="text-slate-400">(420 avaliações no Google)</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2.5 text-slate-300">
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Av. Paulista, 1500 - Bela Vista, São Paulo - SP (Unidade Matriz)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Terça a Sábado: 09:00 às 20:00 • Segunda: 10:00 às 18:00</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>(11) 3288-9900 • WhatsApp: (11) 98765-4321</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Instagram className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>@barbeariavintageclub</span>
                </div>
              </div>

              <div className="pt-3 border-t border-[#1e2535] flex justify-end">
                <button
                  onClick={() => {
                    onClose();
                    onOpenNewAppointment?.();
                  }}
                  className="px-4 py-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded-xl text-xs"
                >
                  + Agendar para Esta Unidade
                </button>
              </div>
            </div>
          )}

          {type === 'all-services' && (
            <div className="space-y-2">
              {TOP_SERVICES.map((s) => (
                <div
                  key={s.id}
                  className="p-3 bg-[#0c0e14] border border-[#232c3d] rounded-xl flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-amber-500/15 text-amber-400 flex items-center justify-center font-bold text-xs">
                      {s.rank}
                    </span>
                    <div>
                      <div className="font-semibold text-white text-xs sm:text-sm">{s.name}</div>
                      <div className="text-[11px] text-slate-400">{s.salesCount} atendimentos realizados neste mês</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs sm:text-sm font-bold text-amber-300 font-mono">
                      R$ {s.revenue.toFixed(2).replace('.', ',')}
                    </div>
                    <div className="text-[10px] text-slate-400">
                      R$ {(s.revenue / s.salesCount).toFixed(2).replace('.', ',')} / un
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {type === 'all-products' && (
            <div className="space-y-2">
              {TOP_PRODUCTS.map((p) => (
                <div
                  key={p.id}
                  className="p-3 bg-[#0c0e14] border border-[#232c3d] rounded-xl flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-purple-500/15 text-purple-400 flex items-center justify-center font-bold text-xs">
                      {p.rank}
                    </span>
                    <div>
                      <div className="font-semibold text-white text-xs sm:text-sm">{p.name}</div>
                      <div className="text-[11px] text-slate-400">{p.salesCount} unidades vendidas</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs sm:text-sm font-bold text-purple-300 font-mono">
                      R$ {p.revenue.toFixed(2).replace('.', ',')}
                    </div>
                    <div className="text-[10px] text-slate-400">
                      R$ {(p.revenue / p.salesCount).toFixed(2).replace('.', ',')} / un
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {type === 'hourly' && (
            <div className="space-y-3 text-xs">
              <p className="text-slate-400">
                O pico de faturamento ocorre entre <strong className="text-amber-400">11h e 13h</strong> (almoço comercial) e entre <strong className="text-amber-400">15h e 17h</strong> (fim da tarde). Recomenda-se manter todos os 3 barbeiros escalados nesses intervalos.
              </p>
              <div className="p-3 bg-[#0c0e14] border border-[#232c3d] rounded-xl text-slate-300">
                <div className="flex justify-between py-1 border-b border-slate-800 font-bold text-slate-200">
                  <span>Horário</span>
                  <span>Ocupação</span>
                  <span>Faturamento</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800/60">
                  <span>09h - 11h</span>
                  <span className="text-amber-400">68%</span>
                  <span className="font-mono">R$ 850,00</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800/60 bg-amber-500/5">
                  <span className="font-semibold text-white">11h - 13h (Pico)</span>
                  <span className="text-emerald-400 font-bold">100%</span>
                  <span className="font-mono font-bold text-amber-300">R$ 1.240,00</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800/60">
                  <span>13h - 15h</span>
                  <span className="text-amber-400">79%</span>
                  <span className="font-mono">R$ 980,00</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800/60 bg-amber-500/5">
                  <span className="font-semibold text-white">15h - 17h (Pico)</span>
                  <span className="text-emerald-400 font-bold">85%</span>
                  <span className="font-mono font-bold text-amber-300">R$ 1.050,00</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800/60">
                  <span>17h - 19h</span>
                  <span className="text-amber-400">59%</span>
                  <span className="font-mono">R$ 730,00</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span>19h - 20h</span>
                  <span className="text-slate-500">0%</span>
                  <span className="font-mono text-slate-500">R$ 0,00</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
