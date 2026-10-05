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
import { PeriodFilterBar } from './components/PeriodFilterBar';
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
import { Check, ArrowLeft } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('inicio');
  const [selectedMonth, setSelectedMonth] = useState<string>('Outubro 2026');
  const [selectedPeriod, setSelectedPeriod] = useState<PeriodFilter>('este-mes');

  // Operational State
  const [currentStatus, setCurrentStatus] = useState<CurrentStatus>(CURRENT_STATUS);
  const [metrics, setMetrics] = useState<MetricCardData[]>(METRIC_CARDS);

  // Modals & Feedback
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNewAppointmentOpen, setIsNewAppointmentOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [detailModalType, setDetailModalType] = useState<
    'store' | 'all-services' | 'all-products' | 'hourly' | null
  >(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Period filter changes update values dynamically without ever truncating titles
  const handlePeriodChange = (period: PeriodFilter) => {
    setSelectedPeriod(period);
    if (period === 'hoje') {
      setMetrics([
        {
          id: 'faturamento',
          title: 'Faturamento',
          value: 'R$ 720,00',
          trend: '+24% vs. ontem',
          trendPositive: true,
          type: 'currency',
        },
        {
          id: 'servicos',
          title: 'Serviços',
          value: 'R$ 580,00',
          trend: '+19% vs. ontem',
          trendPositive: true,
          type: 'currency',
        },
        {
          id: 'produtos',
          title: 'Produtos',
          value: 'R$ 140,00',
          trend: '+45% vs. ontem',
          trendPositive: true,
          type: 'currency',
        },
        {
          id: 'atendimentos',
          title: 'Atendimentos',
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
          title: 'Faturamento',
          value: 'R$ 2.450,00',
          trend: '+14% vs. semana anterior',
          trendPositive: true,
          type: 'currency',
        },
        {
          id: 'servicos',
          title: 'Serviços',
          value: 'R$ 1.980,00',
          trend: '+11% vs. semana anterior',
          trendPositive: true,
          type: 'currency',
        },
        {
          id: 'produtos',
          title: 'Produtos',
          value: 'R$ 470,00',
          trend: '+28% vs. semana anterior',
          trendPositive: true,
          type: 'currency',
        },
        {
          id: 'atendimentos',
          title: 'Atendimentos',
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

  // Content of the main dashboard obeying exact hierarchy:
  // HERO -> PERÍODO -> MÉTRICAS -> EVOLUÇÃO + SITUAÇÃO AGORA -> SERVIÇOS + PRODUTOS -> FORMAS DE PAGAMENTO + HORÁRIOS
  const renderDashboardContent = () => (
    <div className="space-y-4 sm:space-y-5 lg:space-y-6 pb-24 lg:pb-8 max-w-[1600px] mx-auto w-full overflow-hidden">
      {/* 1. HERO Banner with grand visual presence */}
      <HeroBanner
        onOpenStoreProfile={() => setDetailModalType('store')}
      />

      {/* 2. PERÍODO Filter Bar with isolated scroll and zero page overflow */}
      <PeriodFilterBar
        selectedPeriod={selectedPeriod}
        onPeriodChange={handlePeriodChange}
        selectedMonth={selectedMonth}
        onOpenAdvancedFilters={() =>
          showToast('Filtro de período: Visualizando dados de ' + selectedPeriod.toUpperCase())
        }
      />

      {/* 3. MÉTRICAS: 2x2 grid on mobile (<md) | 4 cards in a row on tablet & desktop (>=md) */}
      <MetricCards
        metrics={metrics}
        onCardClick={(id) => {
          if (id === 'servicos') setDetailModalType('all-services');
          else if (id === 'produtos') setDetailModalType('all-products');
        }}
      />

      {/* 4. Progressive Responsive Grid Composition */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-4 sm:gap-5 w-full">
        {/* Left Column (Desktop 8 cols / Tablet & Mobile full width) */}
        <div className="xl:col-span-8 space-y-4 sm:space-y-5 min-w-0">
          {/* Evolução de Faturamento */}
          <RevenueChart data={CHART_DAYS} />

          {/* Mobile & Tablet (< xl): Situação Agora right after chart */}
          <div className="xl:hidden">
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
          </div>

          {/* Serviços Mais Vendidos | Produtos Mais Vendidos (side by side on tablet and desktop!) */}
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

        {/* Right Column (Desktop 4 cols / Tablet 2 cols / Mobile 1 col) */}
        <div className="xl:col-span-4 space-y-4 sm:space-y-5 min-w-0">
          {/* Desktop only (>= xl): Situação Agora aligned side-by-side with the chart */}
          <div className="hidden xl:block">
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
          </div>

          {/* Formas de Pagamento & Horários de Maior Venda:
              - On Tablet (md to xl): side-by-side in 2 columns (md:grid-cols-2)
              - On Desktop (xl+): stacked in the 4-column right bar (xl:grid-cols-1)
              - On Mobile (< md): stacked (grid-cols-1) */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-4 sm:gap-5 w-full">
            <PaymentBreakdown methods={PAYMENT_METHODS} />
            <HourlySales
              sales={HOURLY_SALES}
              onViewAll={() => setDetailModalType('hourly')}
            />
          </div>
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
      <div className="p-6 rounded-2xl bg-[#0D121B] border border-[#161e2c] shadow-xl text-slate-200 w-full overflow-hidden">
        <div className="flex items-center gap-3 pb-4 mb-4 border-b border-[#161e2c]">
          <button
            onClick={() => setActiveTab('inicio')}
            className="p-1.5 rounded-lg bg-[#0A0E15] text-slate-400 hover:text-white transition-colors cursor-pointer"
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
          <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 text-[#E5C365] flex items-center justify-center mx-auto text-lg font-bold">
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
            className="px-4 py-2 rounded-xl text-xs font-bold text-slate-950 bg-[#E5C365] hover:bg-[#D4AF37] transition-colors cursor-pointer"
          >
            Voltar para o Painel Principal
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#05070B] text-slate-100 font-['Plus_Jakarta_Sans',sans-serif] w-full overflow-x-hidden">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 bg-[#0D121B] border border-[#D4AF37]/50 rounded-xl shadow-2xl text-xs font-medium text-[#E5C365] animate-in fade-in slide-in-from-bottom-3 duration-200">
          <Check className="w-4 h-4 text-[#20C997] shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Responsive Web Application */}
      <div className="flex min-h-screen w-full overflow-x-hidden">
        {/* Left Desktop Sidebar */}
        <Sidebar
          activeTab={activeTab}
          onTabChange={setActiveTab}
          isOpenMobile={isMobileMenuOpen}
          onCloseMobile={() => setIsMobileMenuOpen(false)}
          onOpenPlanModal={() =>
            showToast('Plano Premium Kupola: Acesso ilimitado, relatórios e suporte 24/7.')
          }
          onToast={showToast}
        />

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col min-w-0 w-full overflow-x-hidden">
          {/* Top Bar */}
          <Header
            onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
            onOpenSearch={() => setIsSearchOpen(true)}
            selectedMonth={selectedMonth}
            onMonthChange={setSelectedMonth}
            onOpenNewAppointment={() => setIsNewAppointmentOpen(true)}
            onToast={showToast}
          />

          {/* Dashboard Content */}
          <main className="flex-1 p-3.5 sm:p-5 lg:p-7 overflow-y-auto overflow-x-hidden w-full">
            {renderTabContent()}
          </main>

          {/* Bottom Mobile Navigation (Visible on mobile viewports <lg) */}
          <MobileNav activeTab={activeTab} onTabChange={setActiveTab} />
        </div>
      </div>

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
