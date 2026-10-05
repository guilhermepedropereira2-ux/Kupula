/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  METRIC_CARDS,
  CHART_DAYS,
  TOP_SERVICES,
  TOP_PRODUCTS,
  PAYMENT_METHODS,
  HOURLY_SALES,
  CURRENT_STATUS,
} from './data/mockData';
import { PeriodFilter, MetricCardData, CurrentStatus } from './types/dashboard';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { HeroBanner } from './components/HeroBanner';
import { MetricCards } from './components/MetricCards';
import { RevenueChart } from './components/RevenueChart';
import { TopLists } from './components/TopLists';
import { OperationalStatus } from './components/OperationalStatus';
import { PaymentBreakdown } from './components/PaymentBreakdown';
import { HourlySales } from './components/HourlySales';
import { MobileNav } from './components/MobileNav';
import { NewAppointmentModal } from './components/NewAppointmentModal';
import { SearchModal } from './components/SearchModal';
import { DetailModal } from './components/DetailModal';
import { DeviceToggle, ViewMode } from './components/DeviceToggle';
import { Check, Wifi, Battery, ChevronRight, ArrowLeft } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('inicio');
  const [selectedMonth, setSelectedMonth] = useState<string>('Outubro 2026');
  const [selectedPeriod, setSelectedPeriod] = useState<PeriodFilter>('este-mes');
  const [viewMode, setViewMode] = useState<ViewMode>('responsive');

  // Operational State
  const [currentStatus, setCurrentStatus] = useState<CurrentStatus>(CURRENT_STATUS);
  const [metrics, setMetrics] = useState<MetricCardData[]>(METRIC_CARDS);

  // Modals
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNewAppointmentOpen, setIsNewAppointmentOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [detailModalType, setDetailModalType] = useState<
    'store' | 'all-services' | 'all-products' | 'hourly' | null
  >(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Period filter changes update values dynamically
  const handlePeriodChange = (period: PeriodFilter) => {
    setSelectedPeriod(period);
    if (period === 'hoje') {
      setMetrics([
        {
          id: 'faturamento',
          title: 'Faturamento Bruto',
          value: 'R$ 720,00',
          trend: '+24% vs. ontem',
          trendPositive: true,
          type: 'currency',
        },
        {
          id: 'servicos',
          title: 'Vendas de Serviços',
          value: 'R$ 580,00',
          trend: '+19% vs. ontem',
          trendPositive: true,
          type: 'currency',
        },
        {
          id: 'produtos',
          title: 'Vendas de Produtos',
          value: 'R$ 140,00',
          trend: '+45% vs. ontem',
          trendPositive: true,
          type: 'currency',
        },
        {
          id: 'atendimentos',
          title: 'Total de Atendimentos',
          value: '19',
          trend: '+12% vs. ontem',
          trendPositive: true,
          type: 'number',
        },
      ]);
    } else if (period === '7dias') {
      setMetrics([
        {
          id: 'faturamento',
          title: 'Faturamento Bruto',
          value: 'R$ 2.450,00',
          trend: '+14% vs. semana anterior',
          trendPositive: true,
          type: 'currency',
        },
        {
          id: 'servicos',
          title: 'Vendas de Serviços',
          value: 'R$ 1.980,00',
          trend: '+11% vs. semana anterior',
          trendPositive: true,
          type: 'currency',
        },
        {
          id: 'produtos',
          title: 'Vendas de Produtos',
          value: 'R$ 470,00',
          trend: '+28% vs. semana anterior',
          trendPositive: true,
          type: 'currency',
        },
        {
          id: 'atendimentos',
          title: 'Total de Atendimentos',
          value: '64',
          trend: '+16% vs. semana anterior',
          trendPositive: true,
          type: 'number',
        },
      ]);
    } else {
      setMetrics(METRIC_CARDS);
    }
  };

  // Keyboard shortcut Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const handleNewAppointmentSuccess = (appointment: any) => {
    setCurrentStatus((prev) => ({
      ...prev,
      inServiceCount: prev.inServiceCount + 1,
    }));
    showToast(
      `Atendimento de ${appointment.clientName} (${appointment.service}) iniciado com sucesso!`
    );
  };

  // Content of the main dashboard
  const renderDashboardContent = () => (
    <div className="space-y-4 sm:space-y-5 lg:space-y-6 pb-20 lg:pb-10">
      {/* 1. Hero Greeting Banner */}
      <HeroBanner
        selectedPeriod={selectedPeriod}
        onPeriodChange={handlePeriodChange}
        onOpenStoreProfile={() => setDetailModalType('store')}
      />

      {/* 2. Key Metrics Grid (4 cards) */}
      <MetricCards
        metrics={metrics}
        onCardClick={(id) => {
          if (id === 'servicos') setDetailModalType('all-services');
          else if (id === 'produtos') setDetailModalType('all-products');
        }}
      />

      {/* 3. Main Dashboard Section */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-4 sm:gap-5 lg:gap-6">
        {/* Left Column (Desktop ~66%): Evolução de Faturamento + Top Lists */}
        <div className="xl:col-span-8 space-y-4 sm:space-y-5 lg:space-y-6">
          {/* Revenue Evolution Chart */}
          <RevenueChart data={CHART_DAYS} />

          {/* Top Services & Top Products */}
          <TopLists
            services={TOP_SERVICES}
            products={TOP_PRODUCTS}
            onViewAllServices={() => setDetailModalType('all-services')}
            onViewAllProducts={() => setDetailModalType('all-products')}
            onSelectService={(s) =>
              showToast(`Serviço selecionado: ${s.name} (${s.salesCount} vendas)`)
            }
            onSelectProduct={(p) =>
              showToast(`Produto selecionado: ${p.name} (${p.salesCount} unidades vendidas)`)
            }
          />
        </div>

        {/* Right Column (Desktop ~33%): Situação Agora, Formas de Pagamento, Horários */}
        <div className="xl:col-span-4 space-y-4 sm:space-y-5 lg:space-y-6">
          {/* Situação Agora */}
          <OperationalStatus
            status={currentStatus}
            onOpenNewAppointment={() => setIsNewAppointmentOpen(true)}
            onRowClick={(row) => {
              if (row === 'barbeiros') {
                showToast('Barbeiros escalados hoje: Guilherme, Thiago e Matheus.');
              } else if (row === 'fila') {
                showToast('Fila vazia no momento. Próximos horários disponíveis!');
              } else if (row === 'atendimento') {
                showToast('1 cliente em atendimento na cadeira 01.');
              }
            }}
          />

          {/* Formas de Pagamento */}
          <PaymentBreakdown methods={PAYMENT_METHODS} />

          {/* Horários de Maior Venda */}
          <HourlySales
            sales={HOURLY_SALES}
            onViewAll={() => setDetailModalType('hourly')}
          />
        </div>
      </div>
    </div>
  );

  // Secondary views for navigation tabs
  const renderTabContent = () => {
    if (activeTab === 'inicio') {
      return renderDashboardContent();
    }

    return (
      <div className="p-6 rounded-2xl bg-[#121620] border border-[#1e2534] shadow-xl text-slate-200">
        <div className="flex items-center gap-3 pb-4 mb-4 border-b border-[#1b2230]">
          <button
            onClick={() => setActiveTab('inicio')}
            className="p-1.5 rounded-lg bg-[#18202d] text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div>
            <h2 className="text-lg font-bold text-white capitalize">
              {activeTab}
            </h2>
            <p className="text-xs text-slate-400">
              Módulo de gestão Kupola • Barbearia Vintage Club
            </p>
          </div>
        </div>

        <div className="py-8 text-center space-y-3">
          <div className="w-12 h-12 rounded-full bg-amber-500/10 text-amber-400 flex items-center justify-center mx-auto text-lg font-bold">
            ✓
          </div>
          <h3 className="text-base font-semibold text-white">
            Módulo {activeTab.toUpperCase()} ativo e integrado
          </h3>
          <p className="text-xs text-slate-400 max-w-md mx-auto">
            Os dados sincronizados desta seção alimentam o painel principal em tempo real.
          </p>
          <button
            onClick={() => setActiveTab('inicio')}
            className="px-4 py-2 rounded-xl text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors"
          >
            Voltar para o Painel Principal
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#0b0e14] text-slate-100 font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Device View Mode Switcher */}
      <DeviceToggle viewMode={viewMode} onViewModeChange={setViewMode} />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 bg-[#141b27] border border-amber-500/50 rounded-xl shadow-2xl text-xs font-medium text-amber-200 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <Check className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Case 1: Mobile Simulated iPhone View (Matches Screenshots 2 & 3) */}
      {viewMode === 'mobile' ? (
        <div className="min-h-screen bg-[#07090d] flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          {/* Realistic iPhone Bezel Container */}
          <div className="relative w-full max-w-[420px] rounded-[52px] bg-[#0d1017] border-[10px] border-[#222733] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_0_2px_rgba(255,255,255,0.05)] overflow-hidden my-6">
            {/* iOS Status Bar (9:41, Dynamic Island, Icons) */}
            <div className="h-11 bg-[#0d1017] px-7 flex items-center justify-between text-xs text-white font-medium select-none z-30 sticky top-0">
              <span className="font-semibold text-xs tracking-tight">9:41</span>
              {/* Dynamic Island Pill */}
              <div className="w-24 h-5 bg-black rounded-full mx-auto" />
              <div className="flex items-center gap-1.5 text-slate-200">
                <Wifi className="w-3.5 h-3.5" />
                <Battery className="w-4 h-4" />
              </div>
            </div>

            {/* Inner Mobile App Container */}
            <div className="h-[840px] overflow-y-auto no-scrollbar flex flex-col justify-between">
              <div>
                {/* Mobile Header */}
                <Header
                  onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
                  onOpenSearch={() => setIsSearchOpen(true)}
                  selectedMonth={selectedMonth}
                  onMonthChange={setSelectedMonth}
                  onOpenNewAppointment={() => setIsNewAppointmentOpen(true)}
                />

                {/* Mobile Main Content */}
                <main className="p-3.5">
                  {renderTabContent()}
                </main>
              </div>

              {/* Mobile Bottom Bar */}
              <div className="sticky bottom-0 z-40 bg-[#0d1017]/95 backdrop-blur-md border-t border-[#1e2430]">
                <MobileNav activeTab={activeTab} onTabChange={setActiveTab} />
                {/* iPhone Home Indicator Line */}
                <div className="w-32 h-1 bg-white/30 rounded-full mx-auto my-2" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Case 2: Desktop / Responsive Layout (Matches Screenshot 1) */
        <div
          className={`flex min-h-screen ${
            viewMode === 'desktop' ? 'w-[1440px] mx-auto shadow-2xl border-x border-[#1e2430]' : 'w-full'
          }`}
        >
          {/* Left Desktop Sidebar */}
          <Sidebar
            activeTab={activeTab}
            onTabChange={setActiveTab}
            isOpenMobile={isMobileMenuOpen}
            onCloseMobile={() => setIsMobileMenuOpen(false)}
            onOpenPlanModal={() =>
              showToast('Plano Premium Kupola: Acesso ilimitado, relatórios e suporte 24/7.')
            }
          />

          {/* Main Content Area */}
          <div className="flex-1 flex flex-col min-w-0">
            {/* Top Bar */}
            <Header
              onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
              onOpenSearch={() => setIsSearchOpen(true)}
              selectedMonth={selectedMonth}
              onMonthChange={setSelectedMonth}
              onOpenNewAppointment={() => setIsNewAppointmentOpen(true)}
            />

            {/* Dashboard Content */}
            <main className="flex-1 p-4 sm:p-5 lg:p-7 overflow-y-auto">
              {renderTabContent()}
            </main>

            {/* Bottom Mobile Navigation (Visible on narrow viewports when responsive) */}
            {viewMode === 'responsive' && (
              <MobileNav activeTab={activeTab} onTabChange={setActiveTab} />
            )}
          </div>
        </div>
      )}

      {/* Interactive Modals */}
      <NewAppointmentModal
        isOpen={isNewAppointmentOpen}
        onClose={() => setIsNewAppointmentOpen(false)}
        onSuccess={handleNewAppointmentSuccess}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectResult={(res) => showToast(`Navegando para: ${res}`)}
      />

      <DetailModal
        type={detailModalType}
        onClose={() => setDetailModalType(null)}
        onOpenNewAppointment={() => setIsNewAppointmentOpen(true)}
      />
    </div>
  );
}
