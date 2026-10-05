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
  onToast?: (msg: string) => void;
}

export const Header: React.FC<Props> = ({
  onOpenMobileMenu,
  onOpenSearch,
  selectedMonth,
  onMonthChange,
  onOpenNewAppointment,
  onToast,
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
    <header className="sticky top-0 z-20 bg-[#05070B]/95 backdrop-blur-md border-b border-[#121824] px-3 sm:px-5 lg:px-7 py-2.5">
      <div className="flex items-center justify-between gap-3 max-w-[1600px] mx-auto w-full">
        {/* Left Side: Mobile Hamburger & Desktop Search Bar */}
        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
          <button
            onClick={onOpenMobileMenu}
            className="p-2 -ml-1 text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-xl lg:hidden transition-colors shrink-0"
            aria-label="Abrir navegação"
          >
            <Menu className="w-5 h-5" />
          </button>

          {/* Desktop Search Bar (shown on desktop >= lg) */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={onOpenSearch}
              className="flex items-center gap-3 w-[280px] xl:w-[360px] px-3.5 py-1.5 bg-[#0A0E15] hover:bg-[#0D121B] border border-[#161e2c] hover:border-[#D4AF37]/40 rounded-xl text-left text-xs text-slate-400 transition-all shadow-inner group"
            >
              <Search className="w-4 h-4 text-slate-400 group-hover:text-[#E5C365] transition-colors shrink-0" />
              <span className="flex-1 truncate">
                Buscar cliente, agendamento ou atendimento...
              </span>
              <kbd className="hidden xl:inline-flex items-center gap-0.5 px-1.5 py-0.5 text-[10px] font-mono text-slate-400 bg-[#111722] rounded border border-slate-700/60 shrink-0">
                Ctrl K
              </kbd>
            </button>
          </div>
        </div>

        {/* Center: Mobile KUPOLA Logo - Prominent, balanced, strictly never truncated */}
        <div className="lg:hidden flex items-center justify-center flex-1 shrink-0 px-1 sm:px-2 min-w-max">
          <KupolaLogo subtext="GESTÃO PARA BARBEARIAS" />
        </div>

        {/* Right Side: Secondary elements adapt or hide to protect KUPOLA logo */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
          {/* Tablet Search icon button */}
          <button
            onClick={onOpenSearch}
            className="hidden md:flex lg:hidden p-2 text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-xl transition-colors shrink-0"
            title="Buscar (Ctrl+K)"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Month Selector Dropdown - Hidden on mobile (<sm) to prevent squeezing KUPOLA logo! */}
          <div className="relative hidden sm:block">
            <button
              onClick={() => {
                setShowMonthDropdown(!showMonthDropdown);
                setShowNotifications(false);
                setShowUserMenu(false);
              }}
              className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 bg-[#0A0E15] hover:bg-[#0D121B] border border-[#161e2c] rounded-xl text-xs font-medium text-slate-200 transition-all hover:border-[#D4AF37]/30 shrink-0"
            >
              <Calendar className="w-3.5 h-3.5 text-[#E5C365] shrink-0" />
              <span className="whitespace-nowrap">{selectedMonth}</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            </button>

            {showMonthDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-[#0D121B] border border-[#161e2c] rounded-xl shadow-xl py-1.5 z-40">
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
                    className={`w-full text-left px-3 py-2 text-xs flex items-center justify-between hover:bg-[#111722] transition-colors ${
                      selectedMonth === m
                        ? 'text-[#E5C365] font-semibold bg-[#D4AF37]/10'
                        : 'text-slate-300'
                    }`}
                  >
                    <span>{m}</span>
                    {selectedMonth === m && (
                      <Check className="w-3.5 h-3.5 text-[#E5C365]" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Notification Bell - Always visible (Priority 3) */}
          <div className="relative shrink-0">
            <button
              onClick={() => {
                setShowNotifications(!showNotifications);
                setShowMonthDropdown(false);
                setShowUserMenu(false);
              }}
              className="relative p-2 bg-[#0A0E15] hover:bg-[#0D121B] border border-[#161e2c] rounded-xl text-slate-300 hover:text-white transition-all hover:border-[#D4AF37]/30 shrink-0"
              aria-label="Notificações"
            >
              <Bell className="w-4 h-4" />
              {unreadCount > 0 && (
                <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#E5C365] ring-2 ring-[#05070B] animate-pulse" />
              )}
            </button>

            {showNotifications && (
              <div className="absolute right-0 mt-2 w-72 sm:w-80 bg-[#0D121B] border border-[#161e2c] rounded-xl shadow-2xl py-2 z-40">
                <div className="px-3.5 py-1.5 flex items-center justify-between border-b border-[#161e2c]">
                  <span className="text-xs font-bold text-slate-200">
                    Notificações
                  </span>
                  <button
                    onClick={() => setUnreadCount(0)}
                    className="text-[11px] text-[#E5C365] hover:underline"
                  >
                    Marcar lidas
                  </button>
                </div>
                <div className="max-h-72 overflow-y-auto divide-y divide-[#161e2c]">
                  {notifications.map((n) => (
                    <div
                      key={n.id}
                      className={`p-3 hover:bg-[#111722] transition-colors ${
                        n.unread ? 'bg-[#D4AF37]/5' : ''
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

          {/* User Profile Badge (Desktop & Tablet) */}
          <div className="relative hidden sm:block shrink-0">
            <button
              onClick={() => {
                setShowUserMenu(!showUserMenu);
                setShowMonthDropdown(false);
                setShowNotifications(false);
              }}
              className="flex items-center gap-2 pl-1.5 pr-2.5 py-1 bg-[#0A0E15] hover:bg-[#0D121B] border border-[#161e2c] rounded-xl transition-all group shrink-0"
            >
              {/* Initials Circle */}
              <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#1b1509] to-[#0A0E15] border-2 border-[#D4AF37] flex items-center justify-center text-xs font-bold text-[#E5C365] shadow-xs shrink-0">
                GP
              </div>

              {/* Name & Role (hidden on small screens, visible on lg) */}
              <div className="hidden lg:flex flex-col text-left">
                <span className="text-xs font-semibold text-slate-200 leading-tight whitespace-nowrap">
                  Guilherme Pereira
                </span>
                <span className="text-[10px] text-slate-400 leading-tight">
                  Dono • Administrador
                </span>
              </div>

              <ChevronDown className="w-3 h-3 text-slate-400 group-hover:text-slate-200 transition-colors ml-0.5 shrink-0" />
            </button>

            {showUserMenu && (
              <div className="absolute right-0 mt-2 w-56 bg-[#0D121B] border border-[#161e2c] rounded-xl shadow-2xl py-1.5 z-40 divide-y divide-[#161e2c]">
                <div className="px-3.5 py-2">
                  <div className="text-xs font-bold text-slate-200">
                    Guilherme Pereira
                  </div>
                  <div className="text-[11px] text-[#E5C365]">
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
                    className="w-full text-left px-3.5 py-1.5 text-xs text-[#E5C365] hover:bg-[#111722] flex items-center gap-2"
                  >
                    <span>+ Registrar Atendimento</span>
                  </button>
                  <button
                    onClick={() => {
                      onToast?.('Acessando configurações do perfil e segurança...');
                      setShowUserMenu(false);
                    }}
                    className="w-full text-left px-3.5 py-1.5 text-xs text-slate-300 hover:bg-[#111722] flex items-center gap-2"
                  >
                    <User className="w-3.5 h-3.5 text-slate-400" />
                    <span>Meu Perfil</span>
                  </button>
                  <button
                    onClick={() => {
                      onToast?.('Abrindo configurações da barbearia...');
                      setShowUserMenu(false);
                    }}
                    className="w-full text-left px-3.5 py-1.5 text-xs text-slate-300 hover:bg-[#111722] flex items-center gap-2"
                  >
                    <SlidersHorizontal className="w-3.5 h-3.5 text-slate-400" />
                    <span>Configurações da Loja</span>
                  </button>
                </div>
                <div className="py-1">
                  <button
                    onClick={() => {
                      onToast?.('Sessão encerrada com segurança.');
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
