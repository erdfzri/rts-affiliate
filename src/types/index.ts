export type Marketplace = 'shopee' | 'tiktok' | 'tokopedia' | 'lazada' | 'blibli';

export interface Product {
  id: string;
  code: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  images: string[];
  category: string;
  marketplace: Marketplace[];
  affiliateLinks: AffiliateLink[];
  clicks: number;
  rating: number;
  reviews: number;
  status: 'active' | 'inactive';
  isFeatured: boolean;
  isTrending: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface AffiliateLink {
  marketplace: Marketplace;
  url: string;
  priority: number;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  icon: string;
  productCount: number;
}

export interface AnalyticsData {
  date: string;
  clicks: number;
  visitors: number;
  ctr: number;
}

export interface DashboardStats {
  totalProducts: number;
  totalClicks: number;
  totalVisitors: number;
  topProducts: Product[];
}
