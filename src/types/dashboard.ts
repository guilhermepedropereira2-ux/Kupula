export interface MetricCardData {
  id: string;
  title: string;
  value: string;
  trend: string;
  trendPositive: boolean;
  type: 'currency' | 'number';
}

export interface DayRevenue {
  day: string;
  dateStr: string;
  servicos: number;
  produtos: number;
  total: number;
}

export interface SoldService {
  id: number;
  rank: number;
  name: string;
  salesCount: number;
  revenue: number;
  imageType: 'fade-beard' | 'beard-therapy' | 'skin-fade' | 'classic-cut' | 'eyebrow';
}

export interface SoldProduct {
  id: number;
  rank: number;
  name: string;
  salesCount: number;
  revenue: number;
  imageType: 'pomade' | 'shampoo' | 'oil' | 'balm' | 'kit';
}

export interface PaymentMethod {
  name: string;
  percentage: number;
  amount: number;
  color: string;
  iconType: 'pix' | 'credit' | 'debit' | 'cash';
}

export interface HourlySale {
  timeRange: string;
  amount: number;
  percentage: number;
}

export interface CurrentStatus {
  barbersCount: number;
  queueCount: number;
  inServiceCount: number;
  statusText: string;
}

export type PeriodFilter = 'hoje' | '7dias' | 'este-mes' | '3meses';
