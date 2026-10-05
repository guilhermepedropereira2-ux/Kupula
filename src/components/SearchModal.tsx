import React, { useState, useEffect } from 'react';
import { Search, X, User, Scissors, Package } from 'lucide-react';
import { TOP_SERVICES, TOP_PRODUCTS } from '../data/mockData';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSelectResult: (title: string) => void;
}

export const SearchModal: React.FC<Props> = ({
  isOpen,
  onClose,
  onSelectResult,
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const mockClients = [
    { name: 'Lucas Gabriel', phone: '(11) 98765-4321', lastVisit: 'Ontem' },
    { name: 'Rodrigo Alcantara', phone: '(11) 97123-9988', lastVisit: '02/10' },
    { name: 'Felipe Santos', phone: '(11) 99456-1122', lastVisit: '28/09' },
    { name: 'Bruno Carvalho', phone: '(11) 96541-3321', lastVisit: '15/09' },
  ];

  const filteredClients = mockClients.filter((c) =>
    c.name.toLowerCase().includes(query.toLowerCase())
  );
  const filteredServices = TOP_SERVICES.filter((s) =>
    s.name.toLowerCase().includes(query.toLowerCase())
  );
  const filteredProducts = TOP_PRODUCTS.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="relative w-full max-w-xl bg-[#0D121B] border border-[#161e2c] rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Search Input Field */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-[#161e2c]">
          <Search className="w-5 h-5 text-[#E5C365] shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Buscar por cliente, serviço, produto ou horário..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm text-slate-100 placeholder-slate-400 focus:outline-hidden"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <kbd className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#0A0E15] text-slate-400 border border-slate-700/60">
            ESC
          </kbd>
        </div>

        {/* Results Body */}
        <div className="max-h-96 overflow-y-auto p-3 space-y-4">
          {/* Clients */}
          {filteredClients.length > 0 && (
            <div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-2 mb-1.5 flex items-center gap-1.5">
                <User className="w-3 h-3 text-[#E5C365]" />
                <span>Clientes Recentes</span>
              </div>
              <div className="space-y-1">
                {filteredClients.map((client) => (
                  <button
                    key={client.name}
                    onClick={() => {
                      onSelectResult(`Cliente: ${client.name}`);
                      onClose();
                    }}
                    className="w-full flex items-center justify-between p-2 rounded-xl hover:bg-[#111722] text-left transition-colors"
                  >
                    <div>
                      <div className="text-xs font-semibold text-slate-200">
                        {client.name}
                      </div>
                      <div className="text-[11px] text-slate-400">
                        {client.phone}
                      </div>
                    </div>
                    <span className="text-[10px] text-slate-400">
                      Última visita: {client.lastVisit}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Services */}
          {filteredServices.length > 0 && (
            <div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-2 mb-1.5 flex items-center gap-1.5">
                <Scissors className="w-4 h-3 text-[#E5C365]" />
                <span>Serviços</span>
              </div>
              <div className="space-y-1">
                {filteredServices.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => {
                      onSelectResult(`Serviço: ${service.name}`);
                      onClose();
                    }}
                    className="w-full flex items-center justify-between p-2 rounded-xl hover:bg-[#111722] text-left transition-colors"
                  >
                    <span className="text-xs font-semibold text-slate-200">
                      {service.name}
                    </span>
                    <span className="text-xs font-bold text-[#E5C365] font-mono">
                      R$ {(service.revenue / service.salesCount).toFixed(2).replace('.', ',')}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Products */}
          {filteredProducts.length > 0 && (
            <div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-2 mb-1.5 flex items-center gap-1.5">
                <Package className="w-3 h-3 text-purple-400" />
                <span>Produtos</span>
              </div>
              <div className="space-y-1">
                {filteredProducts.map((product) => (
                  <button
                    key={product.id}
                    onClick={() => {
                      onSelectResult(`Produto: ${product.name}`);
                      onClose();
                    }}
                    className="w-full flex items-center justify-between p-2 rounded-xl hover:bg-[#111722] text-left transition-colors"
                  >
                    <span className="text-xs font-semibold text-slate-200">
                      {product.name}
                    </span>
                    <span className="text-xs font-bold text-purple-300 font-mono">
                      R$ {(product.revenue / product.salesCount).toFixed(2).replace('.', ',')}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
