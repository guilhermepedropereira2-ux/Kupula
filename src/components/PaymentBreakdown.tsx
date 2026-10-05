import React from 'react';
import {
  CreditCard,
  Banknote,
  ChevronDown,
  QrCode,
  Wallet,
} from 'lucide-react';
import { PaymentMethod } from '../types/dashboard';

interface Props {
  methods: PaymentMethod[];
}

export const PaymentBreakdown: React.FC<Props> = ({ methods }) => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'pix':
        return (
          <div className="w-6 h-6 rounded-md bg-teal-500/15 text-teal-400 flex items-center justify-center shrink-0">
            <QrCode className="w-3.5 h-3.5" />
          </div>
        );
      case 'credit':
        return (
          <div className="w-6 h-6 rounded-md bg-amber-500/15 text-amber-400 flex items-center justify-center shrink-0">
            <CreditCard className="w-3.5 h-3.5" />
          </div>
        );
      case 'debit':
        return (
          <div className="w-6 h-6 rounded-md bg-sky-500/15 text-sky-400 flex items-center justify-center shrink-0">
            <CreditCard className="w-3.5 h-3.5" />
          </div>
        );
      case 'cash':
        return (
          <div className="w-6 h-6 rounded-md bg-purple-500/15 text-purple-400 flex items-center justify-center shrink-0">
            <Banknote className="w-3.5 h-3.5" />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="rounded-2xl bg-[#121620] border border-[#1e2534] p-4 sm:p-5 shadow-xl">
      {/* Header */}
      <div className="flex items-center justify-between pb-3.5 mb-3 border-b border-[#1b2230]">
        <div className="flex items-center gap-2.5">
          <div className="p-1.5 rounded-lg bg-amber-500/10 text-amber-400">
            <Wallet className="w-4 h-4" />
          </div>
          <h3 className="text-sm sm:text-base font-bold text-white tracking-tight">
            Formas de Pagamento
          </h3>
        </div>

        {/* Dropdown */}
        <div className="flex items-center gap-1 text-xs text-slate-400 hover:text-slate-200 cursor-pointer">
          <span>Este Mês</span>
          <ChevronDown className="w-3.5 h-3.5" />
        </div>
      </div>

      {/* Methods breakdown list */}
      <div className="space-y-3">
        {methods.map((method) => {
          return (
            <div
              key={method.name}
              className="flex items-center justify-between gap-3 text-xs"
            >
              {/* Method Icon & Name */}
              <div className="flex items-center gap-2.5 min-w-[125px] sm:min-w-[140px]">
                {getIcon(method.iconType)}
                <span className="font-medium text-slate-200 truncate">
                  {method.name}
                </span>
              </div>

              {/* Progress Bar & Percentage */}
              <div className="flex-1 flex items-center gap-2 max-w-[130px] sm:max-w-[160px]">
                <div className="flex-1 h-2 rounded-full bg-[#18202d] overflow-hidden">
                  <div
                    style={{
                      width: `${method.percentage}%`,
                      backgroundColor: method.color,
                    }}
                    className="h-full rounded-full transition-all duration-500"
                  />
                </div>
                <span className="text-[11px] font-mono text-slate-400 w-8 text-right tabular-nums">
                  {method.percentage}%
                </span>
              </div>

              {/* Formatted Currency */}
              <div className="w-20 text-right font-mono font-bold text-slate-100 tabular-nums">
                R$ {method.amount.toFixed(2).replace('.', ',')}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
