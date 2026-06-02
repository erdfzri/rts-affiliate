import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ArrowRight, X } from 'lucide-react';
import type { Product, Marketplace } from '@/types';
import { formatCurrency, cn } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
  variant?: 'default' | 'featured' | 'compact';
  index?: number;
}

const marketplaceConfig: Record<Marketplace, { name: string; color: string; bg: string; logo: string }> = {
  shopee: { name: 'Shopee', color: 'text-orange-600', bg: 'bg-orange-50 dark:bg-orange-950/30', logo: 'https://icon.horse/icon/shopee.co.id' },
  tiktok: { name: 'TikTok', color: 'text-gray-900 dark:text-gray-100', bg: 'bg-gray-100 dark:bg-gray-800', logo: 'https://icon.horse/icon/tiktok.com' },
  tokopedia: { name: 'Tokopedia', color: 'text-emerald-700', bg: 'bg-emerald-50 dark:bg-emerald-950/30', logo: 'https://icon.horse/icon/tokopedia.com' },
  lazada: { name: 'Lazada', color: 'text-blue-600', bg: 'bg-blue-50 dark:bg-blue-950/30', logo: 'https://icon.horse/icon/lazada.co.id' },
  blibli: { name: 'Blibli', color: 'text-blue-700', bg: 'bg-blue-50 dark:bg-blue-950/30', logo: 'https://icon.horse/icon/blibli.com' },
};

export function ProductCard({ product, variant = 'default', index = 0 }: ProductCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: index * 0.05, ease: [0.25, 0.46, 0.45, 0.94] }}
        whileHover={{ y: -4 }}
        className="group"
      >
        <div 
          onClick={() => setIsModalOpen(true)}
          className={cn(
            "relative cursor-pointer overflow-hidden rounded-2xl bg-card border border-border/60 shadow-sm transition-all duration-300 group-hover:shadow-xl group-hover:shadow-black/8 group-hover:border-primary/20",
            variant === 'featured' && "ring-2 ring-primary/20 bg-gradient-to-br from-card to-accent/30"
          )}
        >
          {/* Image Container */}
          <div className="relative overflow-hidden bg-muted aspect-[4/3]">
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            
            {/* Product Code Badge */}
            <div className="absolute top-1 right-2 z-10 rotate-6 bubble-number select-none">
              {product.id.padStart(3, '0')}
            </div>
          </div>

          {/* Content */}
          <div className="p-3">
            {/* Category */}
            <div className="mb-1.5">
              <span className="text-[10px] font-medium text-primary/80 bg-accent px-1.5 py-0.5 rounded-full">
                {product.category}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-xs font-semibold text-foreground leading-snug mb-1.5 line-clamp-2 group-hover:text-primary transition-colors" title={`[${product.id.padStart(3, '0')}] ${product.name}`}>
              <span className="text-primary font-bold">{product.id.padStart(3, '0')}</span> - {product.name}
            </h3>

            {/* Rating */}
            <div className="flex items-center gap-1 mb-2">
              <div className="flex items-center gap-0.5">
                <Star className="h-2.5 w-2.5 fill-amber-400 text-amber-400" />
                <span className="text-[10px] font-semibold text-foreground">{product.rating}</span>
              </div>
              <span className="text-[10px] text-muted-foreground">
                ({product.reviews})
              </span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-1.5 mb-2">
              <span className="text-sm font-bold text-foreground">
                {formatCurrency(product.price)}
              </span>
            </div>

            {/* Marketplace Badges */}
            <div className="flex flex-wrap gap-1">
              {product.marketplace.slice(0, 2).map((mp) => {
                const config = marketplaceConfig[mp];
                return (
                  <span
                    key={mp}
                    className={cn(
                      "px-1.5 py-0.5 rounded-[4px] text-[9px] font-medium leading-none",
                      config.bg,
                      config.color
                    )}
                  >
                    {config.name}
                  </span>
                );
              })}
              {product.marketplace.length > 2 && (
                <span className="px-1.5 py-0.5 rounded-[4px] text-[9px] font-medium leading-none bg-muted text-muted-foreground">
                  +{product.marketplace.length - 2}
                </span>
              )}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Modal Popup */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={(e) => {
              e.stopPropagation();
              setIsModalOpen(false);
            }}
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="relative w-full max-w-sm bg-background rounded-3xl shadow-2xl p-6 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 h-8 w-8 flex items-center justify-center rounded-full bg-muted text-muted-foreground hover:bg-foreground hover:text-background transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
            
            <div className="mb-6 pr-8">
              <h3 className="text-lg sm:text-xl font-bold text-foreground leading-snug mb-2">
                <span className="text-primary">{product.id.padStart(3, '0')}</span> - {product.name}
              </h3>
              <div className="text-2xl font-black text-primary">{formatCurrency(product.price)}</div>
            </div>

            <div className="space-y-3">
              <div className="text-xs sm:text-sm font-medium text-muted-foreground mb-3">Tersedia di:</div>
              {product.affiliateLinks?.map((link) => {
                const config = marketplaceConfig[link.marketplace];
                return (
                  <button
                    key={link.marketplace}
                    onClick={() => window.open(link.url, '_blank')}
                    className={cn(
                      "w-full flex items-center justify-between p-3 rounded-xl border border-border/50 hover:shadow-md transition-all active:scale-[0.98]",
                      config?.bg || "bg-muted"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 flex items-center justify-center shrink-0">
                        {config?.logo?.startsWith('http') ? (
                          <img src={config.logo} alt={config.name} className="w-full h-full object-contain rounded-md" />
                        ) : (
                          <span className="text-xl">{config?.logo || '🛒'}</span>
                        )}
                      </div>
                      <span className={cn("font-semibold text-sm", config?.color || "text-foreground")}>
                        Beli di {config?.name || link.marketplace}
                      </span>
                    </div>
                    <ArrowRight className={cn("h-4 w-4 opacity-70", config?.color)} />
                  </button>
                );
              })}
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}
