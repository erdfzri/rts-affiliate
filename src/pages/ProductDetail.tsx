import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Star,
  ExternalLink,
  Share2,
  Heart,
  ChevronLeft,
  ShoppingCart,
  Shield,
  Truck,
  RefreshCw,
  ChevronRight,
} from 'lucide-react';
import { products } from '@/data/mockData';
import { formatCurrency, formatNumber } from '@/lib/utils';
import type { Marketplace } from '@/types';
import { ProductCard } from '@/components/ProductCard';

const marketplaceConfig: Record<Marketplace, { name: string; logo: string; color: string; hover: string }> = {
  shopee: { name: 'Shopee', logo: '🛍️', color: 'bg-orange-500 hover:bg-orange-600', hover: 'shadow-orange-200 dark:shadow-orange-900/30' },
  tiktok: { name: 'TikTok Shop', logo: '🎵', color: 'bg-gray-900 hover:bg-black', hover: 'shadow-gray-300 dark:shadow-gray-900/30' },
  tokopedia: { name: 'Tokopedia', logo: '🛒', color: 'bg-emerald-600 hover:bg-emerald-700', hover: 'shadow-emerald-200 dark:shadow-emerald-900/30' },
  lazada: { name: 'Lazada', logo: '🏪', color: 'bg-blue-500 hover:bg-blue-600', hover: 'shadow-blue-200 dark:shadow-blue-900/30' },
  blibli: { name: 'Blibli', logo: '🏬', color: 'bg-sky-600 hover:bg-sky-700', hover: 'shadow-sky-200 dark:shadow-sky-900/30' },
};

export function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === id);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);

  if (!product) {
    return (
      <div className="pt-16 flex min-h-[80vh] items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">😕</div>
          <h2 className="text-2xl font-bold mb-2">Produk Tidak Ditemukan</h2>
          <p className="text-muted-foreground mb-6">Produk yang kamu cari tidak tersedia atau sudah dihapus.</p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 h-11 px-6 rounded-2xl gradient-primary text-white font-semibold shadow-md hover:shadow-lg transition-all"
          >
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const handleBuy = (url: string, marketplace: string) => {
    console.log(`Affiliate click → ${marketplace}: ${url}`);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="pt-14">
      <div className="container-custom py-6">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-foreground transition-colors">Beranda</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <Link to="/search" className="hover:text-foreground transition-colors">Produk</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-foreground font-medium line-clamp-1">{product.name}</span>
        </nav>

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ChevronLeft className="h-4 w-4" />
          Kembali
        </button>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-10 xl:gap-16 mb-16">
          {/* Left – Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            {/* Main Image */}
            <div className="relative rounded-3xl overflow-hidden bg-muted aspect-square">
              <motion.img
                key={selectedImage}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />

              {/* Badges on image */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {product.isTrending && (
                  <div className="px-3 py-1 rounded-xl bg-rose-500 text-white text-xs font-bold shadow-lg">
                    🔥 Trending
                  </div>
                )}
                {discount > 0 && (
                  <div className="px-3 py-1 rounded-xl bg-emerald-500 text-white text-xs font-bold shadow-lg">
                    -{discount}% OFF
                  </div>
                )}
              </div>

              {/* Action buttons */}
              <div className="absolute top-4 right-4 flex flex-col gap-2">
                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/90 dark:bg-gray-900/90 shadow-md hover:bg-white transition-all backdrop-blur-sm"
                  aria-label="Wishlist"
                >
                  <Heart className={`h-4.5 w-4.5 ${isWishlisted ? 'fill-rose-500 text-rose-500' : 'text-foreground'}`} />
                </button>
                <button
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/90 dark:bg-gray-900/90 shadow-md hover:bg-white transition-all backdrop-blur-sm"
                  aria-label="Share"
                >
                  <Share2 className="h-4.5 w-4.5 text-foreground" />
                </button>
              </div>
            </div>

            {/* Thumbnail Strip */}
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`relative rounded-2xl overflow-hidden aspect-square w-20 flex-none border-2 transition-all ${
                      selectedImage === i ? 'border-primary shadow-md' : 'border-transparent hover:border-border'
                    }`}
                  >
                    <img src={img} alt={`${product.name} ${i + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </motion.div>

          {/* Right – Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {/* Category */}
            <span className="inline-block text-xs font-semibold text-primary bg-accent px-3 py-1 rounded-full">
              {product.category}
            </span>

            {/* Title */}
            <h1 className="text-2xl sm:text-3xl font-bold leading-snug">{product.name}</h1>

            {/* Rating Row */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4.5 w-4.5 ${i < Math.floor(product.rating) ? 'fill-amber-400 text-amber-400' : 'text-muted'}`}
                  />
                ))}
                <span className="ml-1.5 text-sm font-bold">{product.rating}</span>
              </div>
              <span className="text-sm text-muted-foreground">
                {formatNumber(product.reviews)} ulasan
              </span>
              <span className="text-sm text-muted-foreground">
                {formatNumber(product.clicks)} dilihat
              </span>
            </div>

            {/* Price Block */}
            <div className="p-5 rounded-2xl bg-muted/40 border border-border/60">
              <div className="flex items-baseline gap-3 mb-1">
                <span className="text-3xl font-bold text-foreground">
                  {formatCurrency(product.price)}
                </span>
                {product.originalPrice && (
                  <span className="text-base text-muted-foreground line-through">
                    {formatCurrency(product.originalPrice)}
                  </span>
                )}
              </div>
              {discount > 0 && (
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                    Hemat {formatCurrency(product.originalPrice! - product.price)}
                  </span>
                  <span className="px-2 py-0.5 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-xs font-bold">
                    -{discount}%
                  </span>
                </div>
              )}
            </div>

            {/* Description */}
            <div>
              <h3 className="text-sm font-semibold mb-2">Deskripsi Produk</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{product.description}</p>
            </div>

            {/* Buy Buttons */}
            <div>
              <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
                <ShoppingCart className="h-4 w-4" />
                Beli di Marketplace
              </h3>
              <div className="space-y-2.5">
                {product.affiliateLinks.map((link) => {
                  const config = marketplaceConfig[link.marketplace];
                  return (
                    <motion.button
                      key={link.marketplace}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      onClick={() => handleBuy(link.url, link.marketplace)}
                      id={`buy-${link.marketplace}`}
                      className={`w-full flex items-center justify-between h-13 px-5 rounded-2xl ${config.color} text-white font-semibold transition-all shadow-lg hover:shadow-xl ${config.hover}`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{config.logo}</span>
                        <span>Beli di {config.name}</span>
                      </div>
                      <ExternalLink className="h-4 w-4 opacity-70" />
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              {[
                { icon: Shield, label: 'Terpercaya', desc: 'Link resmi' },
                { icon: Truck, label: 'Pengiriman', desc: 'Cepat & aman' },
                { icon: RefreshCw, label: 'Return', desc: 'Sesuai kebijakan' },
              ].map(({ icon: Icon, label, desc }) => (
                <div key={label} className="flex flex-col items-center gap-1.5 p-3 rounded-2xl bg-muted/40 border border-border/60 text-center">
                  <Icon className="h-4.5 w-4.5 text-primary" />
                  <div className="text-xs font-semibold">{label}</div>
                  <div className="text-xs text-muted-foreground">{desc}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section>
            <div className="flex items-end justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold">Produk Serupa</h2>
                <p className="text-muted-foreground text-sm mt-1">Produk lain dari kategori {product.category}</p>
              </div>
              <Link to={`/category/${product.category.toLowerCase().replace(' ', '-')}`} className="text-sm font-semibold text-primary hover:underline">
                Lihat Semua
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {relatedProducts.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
