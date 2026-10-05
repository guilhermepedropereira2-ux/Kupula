import {
  MetricCardData,
  DayRevenue,
  SoldService,
  SoldProduct,
  PaymentMethod,
  HourlySale,
  CurrentStatus,
} from '../types/dashboard';

export const METRIC_CARDS: MetricCardData[] = [
  {
    id: 'faturamento',
    title: 'Faturamento Bruto',
    value: 'R$ 4.850,00',
    trend: '+18% vs. mês anterior',
    trendPositive: true,
    type: 'currency',
  },
  {
    id: 'servicos',
    title: 'Vendas de Serviços',
    value: 'R$ 3.920,00',
    trend: '+15% vs. mês anterior',
    trendPositive: true,
    type: 'currency',
  },
  {
    id: 'produtos',
    title: 'Vendas de Produtos',
    value: 'R$ 930,00',
    trend: '+32% vs. mês anterior',
    trendPositive: true,
    type: 'currency',
  },
  {
    id: 'atendimentos',
    title: 'Total de Atendimentos',
    value: '128',
    trend: '+20% vs. mês anterior',
    trendPositive: true,
    type: 'number',
  },
];

export const CHART_DAYS: DayRevenue[] = [
  { day: '01', dateStr: '01/10', servicos: 180, produtos: 40, total: 220 },
  { day: '02', dateStr: '02/10', servicos: 340, produtos: 70, total: 410 },
  { day: '03', dateStr: '03/10', servicos: 260, produtos: 85, total: 345 },
  { day: '04', dateStr: '04/10', servicos: 320, produtos: 90, total: 410 },
  { day: '05', dateStr: '05/10', servicos: 170, produtos: 40, total: 210 },
  { day: '06', dateStr: '06/10', servicos: 370, produtos: 110, total: 480 },
  { day: '07', dateStr: '07/10', servicos: 290, produtos: 80, total: 370 },
  { day: '08', dateStr: '08/10', servicos: 330, produtos: 70, total: 400 },
  { day: '09', dateStr: '09/10', servicos: 380, produtos: 90, total: 470 },
  { day: '10', dateStr: '10/10', servicos: 580, produtos: 140, total: 720 },
  { day: '11', dateStr: '11/10', servicos: 240, produtos: 60, total: 300 },
  { day: '12', dateStr: '12/10', servicos: 180, produtos: 50, total: 230 },
  { day: '13', dateStr: '13/10', servicos: 250, produtos: 80, total: 330 },
  { day: '14', dateStr: '14/10', servicos: 160, produtos: 45, total: 205 },
  { day: '15', dateStr: '15/10', servicos: 270, produtos: 75, total: 345 },
];

export const TOP_SERVICES: SoldService[] = [
  {
    id: 1,
    rank: 1,
    name: 'Corte + Barba',
    salesCount: 45,
    revenue: 3375.0,
    imageType: 'fade-beard',
  },
  {
    id: 2,
    rank: 2,
    name: 'Barba Terapia',
    salesCount: 28,
    revenue: 980.0,
    imageType: 'beard-therapy',
  },
  {
    id: 3,
    rank: 3,
    name: 'Corte Degradê',
    salesCount: 20,
    revenue: 1200.0,
    imageType: 'skin-fade',
  },
  {
    id: 4,
    rank: 4,
    name: 'Corte Tradicional',
    salesCount: 18,
    revenue: 900.0,
    imageType: 'classic-cut',
  },
  {
    id: 5,
    rank: 5,
    name: 'Sobrancelha',
    salesCount: 8,
    revenue: 160.0,
    imageType: 'eyebrow',
  },
];

export const TOP_PRODUCTS: SoldProduct[] = [
  {
    id: 1,
    rank: 1,
    name: 'Pomada Matte',
    salesCount: 12,
    revenue: 360.0,
    imageType: 'pomade',
  },
  {
    id: 2,
    rank: 2,
    name: 'Shampoo para Barba',
    salesCount: 10,
    revenue: 300.0,
    imageType: 'shampoo',
  },
  {
    id: 3,
    rank: 3,
    name: 'Óleo para Barba',
    salesCount: 8,
    revenue: 240.0,
    imageType: 'oil',
  },
  {
    id: 4,
    rank: 4,
    name: 'Balm Hidratante',
    salesCount: 6,
    revenue: 180.0,
    imageType: 'balm',
  },
  {
    id: 5,
    rank: 5,
    name: 'Kit Cuidados',
    salesCount: 4,
    revenue: 320.0,
    imageType: 'kit',
  },
];

export const PAYMENT_METHODS: PaymentMethod[] = [
  {
    name: 'PIX',
    percentage: 52,
    amount: 2522.0,
    color: '#14b8a6', // emerald/teal
    iconType: 'pix',
  },
  {
    name: 'Cartão de Crédito',
    percentage: 28,
    amount: 1358.0,
    color: '#eab308', // amber/gold
    iconType: 'credit',
  },
  {
    name: 'Cartão de Débito',
    percentage: 15,
    amount: 727.5,
    color: '#38bdf8', // sky blue
    iconType: 'debit',
  },
  {
    name: 'Dinheiro',
    percentage: 5,
    amount: 242.5,
    color: '#a855f7', // purple
    iconType: 'cash',
  },
];

export const HOURLY_SALES: HourlySale[] = [
  { timeRange: '09h - 11h', amount: 850.0, percentage: 68 },
  { timeRange: '11h - 13h', amount: 1240.0, percentage: 100 },
  { timeRange: '13h - 15h', amount: 980.0, percentage: 79 },
  { timeRange: '15h - 17h', amount: 1050.0, percentage: 85 },
  { timeRange: '17h - 19h', amount: 730.0, percentage: 59 },
  { timeRange: '19h - 20h', amount: 0.0, percentage: 0 },
];

export const CURRENT_STATUS: CurrentStatus = {
  barbersCount: 3,
  queueCount: 0,
  inServiceCount: 1,
  statusText: 'Em funcionamento',
};
