import React from 'react';
import { Scissors, Package, ChevronRight, ArrowRight } from 'lucide-react';
import { SoldService, SoldProduct } from '../types/dashboard';
import { ServiceThumbnail } from './ServiceThumbnail';
import { ProductThumbnail } from './ProductThumbnail';

interface Props {
  services: SoldService[];
  products: SoldProduct[];
  onViewAllServices: () => void;
  onViewAllProducts: () => void;
  onSelectService: (service: SoldService) => void;
  onSelectProduct: (product: SoldProduct) => void;
}

export const TopLists: React.FC<Props> = ({
  services,
  products,
  onViewAllServices,
  onViewAllProducts,
  onSelectService,
  onSelectProduct,
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5">
      {/* Serviços mais vendidos */}
      <div className="rounded-2xl bg-[#121620] border border-[#1e2534] p-4 sm:p-5 shadow-xl flex flex-col justify-between">
        <div>
          {/* Card Header */}
          <div className="flex items-center justify-between pb-3.5 mb-2 border-b border-[#1b2230]">
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 rounded-lg bg-amber-500/10 text-amber-400">
                <Scissors className="w-4 h-4" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-white tracking-tight">
                Serviços mais vendidos
              </h3>
            </div>
            <button
              onClick={onViewAllServices}
              className="flex items-center gap-1 text-xs text-slate-400 hover:text-amber-400 transition-colors"
            >
              <span>Ver todos</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* List items */}
          <div className="space-y-1 sm:space-y-1.5">
            {services.map((item) => (
              <div
                key={item.id}
                onClick={() => onSelectService(item)}
                className="group flex items-center justify-between p-2 rounded-xl hover:bg-[#171d2b] transition-all cursor-pointer"
              >
                {/* Left: Rank Badge, Image & Info */}
                <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                  {/* Number Badge */}
                  <div className="w-5 h-5 rounded-full bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-[11px] font-bold text-amber-400 shrink-0">
                    {item.rank}
                  </div>

                  {/* Thumbnail Avatar */}
                  <ServiceThumbnail type={item.imageType} size={40} />

                  {/* Service info */}
                  <div className="min-w-0">
                    <h4 className="text-xs sm:text-sm font-semibold text-slate-100 group-hover:text-amber-300 transition-colors truncate">
                      {item.name}
                    </h4>
                    <span className="text-[11px] text-slate-400">
                      {item.salesCount} vendas
                    </span>
                  </div>
                </div>

                {/* Right: Revenue and Chevron */}
                <div className="flex items-center gap-2 shrink-0 pl-2">
                  <span className="text-xs sm:text-sm font-bold text-slate-200 tabular-nums font-mono">
                    R$ {item.revenue.toFixed(2).replace('.', ',')}
                  </span>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-slate-200 transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Produtos mais vendidos */}
      <div className="rounded-2xl bg-[#121620] border border-[#1e2534] p-4 sm:p-5 shadow-xl flex flex-col justify-between">
        <div>
          {/* Card Header */}
          <div className="flex items-center justify-between pb-3.5 mb-2 border-b border-[#1b2230]">
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 rounded-lg bg-purple-500/10 text-purple-400">
                <Package className="w-4 h-4" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-white tracking-tight">
                Produtos mais vendidos
              </h3>
            </div>
            <button
              onClick={onViewAllProducts}
              className="flex items-center gap-1 text-xs text-slate-400 hover:text-amber-400 transition-colors"
            >
              <span>Ver todos</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* List items */}
          <div className="space-y-1 sm:space-y-1.5">
            {products.map((item) => (
              <div
                key={item.id}
                onClick={() => onSelectProduct(item)}
                className="group flex items-center justify-between p-2 rounded-xl hover:bg-[#171d2b] transition-all cursor-pointer"
              >
                {/* Left: Rank Badge, Image & Info */}
                <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                  {/* Number Badge */}
                  <div className="w-5 h-5 rounded-full bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-[11px] font-bold text-amber-400 shrink-0">
                    {item.rank}
                  </div>

                  {/* Product Thumbnail */}
                  <ProductThumbnail type={item.imageType} size={40} />

                  {/* Product info */}
                  <div className="min-w-0">
                    <h4 className="text-xs sm:text-sm font-semibold text-slate-100 group-hover:text-amber-300 transition-colors truncate">
                      {item.name}
                    </h4>
                    <span className="text-[11px] text-slate-400">
                      {item.salesCount} vendas
                    </span>
                  </div>
                </div>

                {/* Right: Revenue and Chevron */}
                <div className="flex items-center gap-2 shrink-0 pl-2">
                  <span className="text-xs sm:text-sm font-bold text-slate-200 tabular-nums font-mono">
                    R$ {item.revenue.toFixed(2).replace('.', ',')}
                  </span>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-slate-200 transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
