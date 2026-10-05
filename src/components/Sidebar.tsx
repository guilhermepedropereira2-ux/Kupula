import React from 'react';
import {
  Home,
  Calendar,
  Scissors,
  Users,
  LayoutGrid,
  Package,
  Wallet,
  BarChart3,
  Settings,
  Crown,
  HelpCircle,
  MessageCircle,
  MessageSquarePlus,
  ArrowRight,
  X,
} from 'lucide-react';
import { KupolaLogo } from './KupolaLogo';

interface Props {
  activeTab: string;
  onTabChange: (tabId: string) => void;
  isOpenMobile?: boolean;
  onCloseMobile?: () => void;
  onOpenPlanModal?: () => void;
}

export const Sidebar: React.FC<Props> = ({
  activeTab,
  onTabChange,
  isOpenMobile = false,
  onCloseMobile,
  onOpenPlanModal,
}) => {
  const menuItems = [
    { id: 'inicio', label: 'Início', icon: Home },
    { id: 'agenda', label: 'Agenda', icon: Calendar },
    { id: 'atendimentos', label: 'Atendimentos', icon: Scissors },
    { id: 'clientes', label: 'Clientes', icon: Users },
    { id: 'servicos', label: 'Serviços', icon: LayoutGrid },
    { id: 'produtos', label: 'Produtos', icon: Package },
    { id: 'financeiro', label: 'Financeiro', icon: Wallet },
    { id: 'relatorios', label: 'Relatórios', icon: BarChart3 },
    { id: 'configuracoes', label: 'Configurações', icon: Settings },
  ];

  const content = (
    <div className="flex flex-col h-full bg-[#0d1017] border-r border-[#1e2430] w-[260px] select-none text-slate-300">
      {/* Top Brand */}
      <div className="p-5 flex items-center justify-between border-b border-[#1a202c]">
        <KupolaLogo />
        {isOpenMobile && onCloseMobile && (
          <button
            onClick={onCloseMobile}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="Fechar menu"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Main Navigation List */}
      <div className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => {
                onTabChange(item.id);
                if (isOpenMobile && onCloseMobile) onCloseMobile();
              }}
              className={`w-full flex items-center gap-3.5 px-3.5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                isActive
                  ? 'bg-amber-500/10 text-[#f5b338] font-semibold border-l-2 border-[#e5a93c] shadow-[inset_0_1px_1px_rgba(245,179,56,0.1)]'
                  : 'text-slate-400 hover:text-slate-100 hover:bg-[#141a24]'
              }`}
            >
              <Icon
                className={`w-[18px] h-[18px] shrink-0 transition-colors ${
                  isActive ? 'text-[#f5b338]' : 'text-slate-400'
                }`}
              />
              <span className="truncate">{item.label}</span>
            </button>
          );
        })}
      </div>

      {/* Premium Plan Card */}
      <div className="px-3 pb-3">
        <div className="p-3.5 rounded-xl bg-gradient-to-b from-[#181d28] to-[#121620] border border-amber-500/20 shadow-lg">
          <div className="flex items-center gap-2.5 mb-1.5">
            <div className="w-7 h-7 rounded-lg bg-amber-500/15 border border-amber-500/30 flex items-center justify-center shrink-0">
              <Crown className="w-4 h-4 text-amber-400" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-100">Plano Premium</div>
              <div className="flex items-center gap-1.5 text-[11px] text-emerald-400 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Ativo
              </div>
            </div>
          </div>

          <div className="text-[11px] text-slate-400 mb-2.5">
            Renova em 12/11/2026
          </div>

          <button
            onClick={onOpenPlanModal}
            className="w-full flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg text-xs font-semibold text-amber-300 bg-amber-500/10 border border-amber-500/30 hover:bg-amber-500/20 transition-all hover:text-amber-200"
          >
            <span>Gerenciar plano</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Support Section */}
      <div className="p-3 border-t border-[#1a202c] text-xs">
        <div className="px-3 pb-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
          AJUDA E SUPORTE
        </div>
        <div className="space-y-0.5">
          <button
            onClick={() => alert('Central de Ajuda: Acessando documentação e guias da Kupola...')}
            className="w-full flex items-center gap-2.5 px-3 py-1.5 rounded-md text-slate-400 hover:text-slate-200 hover:bg-[#141a24] transition-colors"
          >
            <HelpCircle className="w-4 h-4 text-slate-400" />
            <span>Central de Ajuda</span>
          </button>
          <button
            onClick={() => alert('Abrindo canal oficial de suporte via WhatsApp...')}
            className="w-full flex items-center gap-2.5 px-3 py-1.5 rounded-md text-slate-400 hover:text-slate-200 hover:bg-[#141a24] transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-slate-400" />
            <span>Suporte via WhatsApp</span>
          </button>
          <button
            onClick={() => alert('Obrigado pelo seu feedback! Nossa equipe está trabalhando para aprimorar o Kupola.')}
            className="w-full flex items-center gap-2.5 px-3 py-1.5 rounded-md text-slate-400 hover:text-slate-200 hover:bg-[#141a24] transition-colors"
          >
            <MessageSquarePlus className="w-4 h-4 text-slate-400" />
            <span>Enviar Feedback</span>
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Persistent Sidebar */}
      <aside className="hidden lg:block shrink-0 sticky top-0 h-screen z-30">
        {content}
      </aside>

      {/* Mobile Drawer Overlay */}
      {isOpenMobile && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-xs transition-opacity"
            onClick={onCloseMobile}
          />
          <div className="relative z-10 animate-in slide-in-from-left duration-200 shadow-2xl">
            {content}
          </div>
        </div>
      )}
    </>
  );
};
