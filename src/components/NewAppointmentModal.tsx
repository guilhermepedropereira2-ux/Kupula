import React, { useState } from 'react';
import { X, Check, Scissors } from 'lucide-react';
import { TOP_SERVICES } from '../data/mockData';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (appointment: any) => void;
}

export const NewAppointmentModal: React.FC<Props> = ({
  isOpen,
  onClose,
  onSuccess,
}) => {
  const [clientName, setClientName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedBarber, setSelectedBarber] = useState('Guilherme');
  const [selectedService, setSelectedService] = useState('Corte + Barba');
  const [selectedPayment, setSelectedPayment] = useState('PIX');
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const barbers = [
    { name: 'Guilherme', role: 'Master Barber', available: true },
    { name: 'Thiago', role: 'Barbeiro Sênior', available: true },
    { name: 'Matheus', role: 'Especialista Barba', available: false },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName.trim()) return;

    onSuccess({
      clientName,
      phone,
      barber: selectedBarber,
      service: selectedService,
      payment: selectedPayment,
      time: 'Agora (Ordem de chegada)',
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-lg bg-[#0D121B] border border-[#161e2c] rounded-2xl shadow-2xl p-6 text-slate-100 animate-in fade-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between pb-4 border-b border-[#161e2c]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center text-[#E5C365]">
              <Scissors className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Novo Atendimento</h3>
              <p className="text-xs text-slate-400">
                Iniciar atendimento ou registrar agendamento
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          {/* Client Name & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Nome do Cliente *
              </label>
              <input
                type="text"
                required
                placeholder="Ex: Lucas Mendes"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                className="w-full px-3 py-2 bg-[#0A0E15] border border-[#1e2738] rounded-xl text-sm text-slate-100 placeholder-slate-500 focus:outline-hidden focus:border-[#E5C365] transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                WhatsApp / Telefone
              </label>
              <input
                type="tel"
                placeholder="(11) 98765-4321"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-3 py-2 bg-[#0A0E15] border border-[#1e2738] rounded-xl text-sm text-slate-100 placeholder-slate-500 focus:outline-hidden focus:border-[#E5C365] transition-colors"
              />
            </div>
          </div>

          {/* Select Barber */}
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1.5">
              Profissional / Barbeiro
            </label>
            <div className="grid grid-cols-3 gap-2">
              {barbers.map((b) => (
                <button
                  type="button"
                  key={b.name}
                  onClick={() => setSelectedBarber(b.name)}
                  className={`p-2.5 rounded-xl border text-left transition-all ${
                    selectedBarber === b.name
                      ? 'bg-[#D4AF37]/15 border-[#D4AF37] text-[#E5C365] shadow-xs'
                      : 'bg-[#0A0E15] border-[#1e2738] text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <div className="text-xs font-bold text-slate-200">{b.name}</div>
                  <div className="text-[10px] text-slate-400 truncate">{b.role}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Service Selection */}
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1.5">
              Serviço Principal
            </label>
            <select
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="w-full px-3 py-2 bg-[#0A0E15] border border-[#1e2738] rounded-xl text-sm text-slate-100 focus:outline-hidden focus:border-[#E5C365] transition-colors"
            >
              {TOP_SERVICES.map((s) => (
                <option key={s.id} value={s.name}>
                  {s.name} — R$ {(s.revenue / s.salesCount).toFixed(2).replace('.', ',')}
                </option>
              ))}
            </select>
          </div>

          {/* Payment Method */}
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1.5">
              Forma de Pagamento Prevista
            </label>
            <div className="grid grid-cols-4 gap-2">
              {['PIX', 'Cartão Crédito', 'Cartão Débito', 'Dinheiro'].map((pm) => (
                <button
                  type="button"
                  key={pm}
                  onClick={() => setSelectedPayment(pm)}
                  className={`py-2 px-1 text-center rounded-xl border text-xs font-semibold transition-all ${
                    selectedPayment === pm
                      ? 'bg-[#E5C365] text-slate-950 border-[#E5C365]'
                      : 'bg-[#0A0E15] border-[#1e2738] text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {pm}
                </button>
              ))}
            </div>
          </div>

          {/* Notes */}
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">
              Observações
            </label>
            <textarea
              rows={2}
              placeholder="Preferência de acabamento, toalha quente, etc."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full px-3 py-2 bg-[#0A0E15] border border-[#1e2738] rounded-xl text-xs text-slate-100 placeholder-slate-500 focus:outline-hidden focus:border-[#E5C365] transition-colors"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-end gap-3 pt-3 border-t border-[#161e2c]">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-slate-200 transition-colors"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-[#D4AF37] to-[#E5C365] hover:brightness-105 transition-all shadow-md"
            >
              <Check className="w-4 h-4" />
              <span>Confirmar Atendimento</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
