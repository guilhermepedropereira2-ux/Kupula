import React, { useState } from 'react';
import {
  Menu,
  Search,
  Calendar,
  Bell,
  ChevronDown,
  Check,
  LogOut,
  User,
  SlidersHorizontal,
} from 'lucide-react';
import { KupolaLogo } from './KupolaLogo';

interface Props {
  onOpenMobileMenu: () => void;
  onOpenSearch: () => void;
  selectedMonth: string;
  onMonthChange: (month: string) => void;
  onOpenNewAppointment: () => void;
}

export const Header: React.FC<Props> = ({
  onOpenMobileMenu,
  onOpenSearch,
  selectedMonth,
  onMonthChange,
  onOpenNewAppointment,
}) => {
  const [showMonthDropdown, setShowMonthDropdown] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [unreadCount, setUnreadCount] = useState(2);

  const months = [
    'Agosto 2026',
    'Setembro 2026',
    'Outubro 2026',
    'Novembro 2026',
    'Dezembro 2026',
  ];

  const notifications = [
    {
      id: 1,
      title: 'Novo agendamento',
      desc: 'Carlos Silva agendou Corte + Barba para 14:30',
      time: 'Há 5 minutos',
      unread: true,
    },
    {
      id: 2,
      title: 'Meta de Faturamento Atingida',
      desc: 'Você bateu 80% da meta diária de R$ 5.000,00',
      time: 'Há 25 minutos',
      unread: true,
    },
    {
      id: 3,
      title: 'Estoque Baixo',
      desc: 'Pomada Matte possui apenas 4 unidades no estoque',
      time: 'Há 1 hora',
      unread: false,
    },
  ];

  return (
    <header className="sticky top-0 z-20 bg-[#0d1017]/95 backdrop-blur-md border-b border-[#1e2430] px-4 lg:px-6 py-3">
      <div className="flex items-center justify-between gap-3">
        {/* Left Side: Mobile Hamburger & Logo for Mobile */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenMobileMenu}
            className="p-2 -ml-2 text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-lg lg:hidden transition-colors"
            aria-label="Abrir navegação"
          >
            <Menu className="w-5 h-5" />
          </button>

          {/* On Mobile show Kupola brand inline */}
          <div className="lg:hidden flex items-center">
            <KupolaLogo subtext="Barbearia Vintage Club" />
          </div>

          {/* Desktop Search Bar */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={onOpenSearch}
              className="flex items-center gap-3 w-[360px] xl:w-[420px] px-3.5 py-2 bg-[#121620] hover:bg-[#151a26] border border-[#232b3b] hover:border-amber-500/40 rounded-xl text-left text-xs text-slate-400 transition-all shadow-inner group"
            >
              <Search className="w-4 h-4 text-slate-400 group-hover:text-amber-400 transition-colors shrink-0" />
              <span className="flex-1 truncate">
                Buscar cliente, agendamento ou atendimento...
              </span>
              <kbd className="hidden sm:inline-flex items-center gap-0.5 px-1.5 py-0.5 text-[10px] font-mono text-slate-400 bg-[#1c2332] rounded border border-slate-700/60 shrink-0">
                Ctrl K
              </kbd>
            </button>
          </div>
        </div>

        {/* Right Side: Month Selector, Notification Bell, User Avatar */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Quick mobile search button */}
          <button
            onClick={onOpenSearch}
            className="lg:hidden p-2 text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-lg transition-colors"
            aria-label="Buscar"
          >
            <Search className="w-5 h-5" />
          </button>

          {/* Month Selector Dropdown */}
          <div className="relative">
            <button
              onClick={() => {
                setShowMonthDropdown(!showMonthDropdown);
                setShowNotifications(false);
                setShowUserMenu(false);
              }}
              className="flex items-center gap-2 px-3 py-1.5 bg-[#121620] hover:bg-[#181e2b] border border-[#232b3b] rounded-xl text-xs font-medium text-slate-200 transition-all hover:border-amber-500/30"
            >
              <Calendar className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span className="truncate">{selectedMonth}</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            </button>

            {showMonthDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-[#121620] border border-[#232b3b] rounded-xl shadow-xl py-1.5 z-40">
                <div className="px-3 py-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  Mês de referência
                </div>
                {months.map((m) => (
                  <button
                    key={m}
                    onClick={() => {
                      onMonthChange(m);
                      setShowMonthDropdown(false);
                    }}
                    className={`w-full text-left px-3 py-2 text-xs flex items-center justify-between hover:bg-[#1a202c] transition-colors ${
                      selectedMonth === m
                        ? 'text-amber-300 font-semibold bg-amber-500/10'
                        : 'text-slate-300'
                    }`}
                  >
                    <span>{m}</span>
                    {selectedMonth === m && (
                      <Check className="w-3.5 h-3.5 text-amber-400" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Notification Bell */}
          <div className="relative">
            <button
              onClick={() => {
                setShowNotifications(!showNotifications);
                setShowMonthDropdown(false);
                setShowUserMenu(false);
              }}
              className="relative p-2 bg-[#121620] hover:bg-[#181e2b] border border-[#232b3b] rounded-xl text-slate-300 hover:text-white transition-all hover:border-amber-500/30"
              aria-label="Notificações"
            >
              <Bell className="w-4 h-4" />
              {unreadCount > 0 && (
                <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-amber-500 ring-2 ring-[#0d1017] animate-pulse" />
              )}
            </button>

            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 bg-[#121620] border border-[#232b3b] rounded-xl shadow-2xl py-2 z-40">
                <div className="px-3.5 py-1.5 flex items-center justify-between border-b border-[#1e2430]">
                  <span className="text-xs font-bold text-slate-200">
                    Notificações
                  </span>
                  <button
                    onClick={() => setUnreadCount(0)}
                    className="text-[11px] text-amber-400 hover:underline"
                  >
                    Marcar lidas
                  </button>
                </div>
                <div className="max-h-72 overflow-y-auto divide-y divide-[#181f2b]">
                  {notifications.map((n) => (
                    <div
                      key={n.id}
                      className={`p-3 hover:bg-[#171d29] transition-colors ${
                        n.unread ? 'bg-amber-500/5' : ''
                      }`}
                    >
                      <div className="flex items-center justify-between mb-0.5">
                        <span className="text-xs font-semibold text-slate-200">
                          {n.title}
                        </span>
                        <span className="text-[10px] text-slate-400">
                          {n.time}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 leading-snug">
                        {n.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* User Profile Badge (Desktop) */}
          <div className="relative">
            <button
              onClick={() => {
                setShowUserMenu(!showUserMenu);
                setShowMonthDropdown(false);
                setShowNotifications(false);
              }}
              className="flex items-center gap-2.5 pl-1.5 pr-2 py-1 bg-[#121620] hover:bg-[#181e2b] border border-[#232b3b] rounded-xl transition-all group"
            >
              {/* Initials Circle */}
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#241c10] to-[#141822] border-2 border-[#e5a93c] flex items-center justify-center text-xs font-bold text-[#f5b338] shadow-sm">
                GP
              </div>

              {/* Name & Role */}
              <div className="hidden sm:flex flex-col text-left">
                <span className="text-xs font-semibold text-slate-200 leading-tight">
                  Guilherme Pereira
                </span>
                <span className="text-[10px] text-slate-400 leading-tight">
                  Dono • Administrador
                </span>
              </div>

              <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-200 transition-colors ml-0.5" />
            </button>

            {showUserMenu && (
              <div className="absolute right-0 mt-2 w-56 bg-[#121620] border border-[#232b3b] rounded-xl shadow-2xl py-1.5 z-40 divide-y divide-[#1e2430]">
                <div className="px-3.5 py-2">
                  <div className="text-xs font-bold text-slate-200">
                    Guilherme Pereira
                  </div>
                  <div className="text-[11px] text-amber-400">
                    Barbearia Vintage Club
                  </div>
                  <div className="text-[10px] text-slate-400 truncate">
                    guilhermepedropereira2@gmail.com
                  </div>
                </div>
                <div className="py-1">
                  <button
                    onClick={() => {
                      onOpenNewAppointment();
                      setShowUserMenu(false);
                    }}
                    className="w-full text-left px-3.5 py-1.5 text-xs text-amber-300 hover:bg-[#171d29] flex items-center gap-2"
                  >
                    <span>+ Registrar Atendimento</span>
                  </button>
                  <button
                    onClick={() => {
                      alert('Acessando configurações do perfil e segurança...');
                      setShowUserMenu(false);
                    }}
                    className="w-full text-left px-3.5 py-1.5 text-xs text-slate-300 hover:bg-[#171d29] flex items-center gap-2"
                  >
                    <User className="w-3.5 h-3.5 text-slate-400" />
                    <span>Meu Perfil</span>
                  </button>
                  <button
                    onClick={() => {
                      alert('Abrindo configurações da barbearia...');
                      setShowUserMenu(false);
                    }}
                    className="w-full text-left px-3.5 py-1.5 text-xs text-slate-300 hover:bg-[#171d29] flex items-center gap-2"
                  >
                    <SlidersHorizontal className="w-3.5 h-3.5 text-slate-400" />
                    <span>Configurações da Loja</span>
                  </button>
                </div>
                <div className="py-1">
                  <button
                    onClick={() => {
                      alert('Sessão encerrada com segurança.');
                      setShowUserMenu(false);
                    }}
                    className="w-full text-left px-3.5 py-1.5 text-xs text-rose-400 hover:bg-rose-500/10 flex items-center gap-2"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                    <span>Sair da conta</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
