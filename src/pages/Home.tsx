import { useRef, useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import {
  ArrowRight,
  Search,
  Sparkles,
  TrendingUp,
  ShoppingBag,
  Star,
  Zap,
  ChevronDown,
  BadgeCheck,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { products, categories } from '@/data/mockData';
import { ProductCard } from '@/components/ProductCard';
import { formatCurrency } from '@/lib/utils';

/* ── helpers ─────────────────────────────────────── */

function SectionHeader({
  title,
  subtitle,
  badge,
}: {
  title: string;
  subtitle?: string;
  badge?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="mb-8"
    >
      {badge && (
        <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-primary bg-accent px-3 py-1 rounded-full mb-3">
          <Sparkles className="h-3 w-3" />
          {badge}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">{title}</h2>
      {subtitle && (
        <p className="mt-2 text-muted-foreground text-sm leading-relaxed max-w-lg">{subtitle}</p>
      )}
    </motion.div>
  );
}



/* ── Main Home Component ─────────────────────────── */

export function Home() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const [searchParams, setSearchParams] = useSearchParams();

  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 50;

  // Sync state with URL params
  useEffect(() => {
    const q = searchParams.get('q');
    if (q !== null && q !== searchQuery) {
      setSearchQuery(q);
      setTimeout(() => {
        document.getElementById('products-grid')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [searchParams]);

  // Update local search query
  const handleSearchChange = (val: string) => {
    setSearchQuery(val);
    setCurrentPage(1); // Reset to page 1 on search
  };

  const handleCategoryChange = (cat: string | null) => {
    setSelectedCategory(cat);
    setCurrentPage(1); // Reset to page 1 on category change
  };

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const q = searchQuery.toLowerCase();
      const paddedId = p.id.padStart(3, '0');
      const matchesSearch = 
        paddedId.includes(q) ||
        p.name.toLowerCase().includes(q) || 
        p.category.toLowerCase().includes(q) || 
        p.marketplace.some(m => m.toLowerCase().includes(q));
      
      const matchesCategory = selectedCategory ? p.category === selectedCategory : true;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredProducts, currentPage]);




  return (
    <div className="pt-14">

      {/* ══════════════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════════════ */}
      <section className="relative overflow-hidden flex flex-col bg-background pt-6 pb-10 lg:pt-8 lg:pb-14 min-h-[300px] lg:min-h-[500px] justify-center">
        
        {/* Floating orbs for light background */}
        <div className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full bg-primary/10 blur-3xl animate-float pointer-events-none" />
        <div className="absolute bottom-1/3 left-1/5 w-56 h-56 rounded-full bg-pink-500/10 blur-3xl animate-float pointer-events-none" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 right-1/3 w-40 h-40 rounded-full bg-amber-500/10 blur-2xl animate-float pointer-events-none" style={{ animationDelay: '3s' }} />

        {/* Content */}
        <div className="relative">
          <div className="container-custom w-full">
            <div className="grid grid-cols-[1.2fr_1fr] sm:grid-cols-[1.5fr_1fr] lg:grid-cols-2 gap-2 sm:gap-8 lg:gap-12 items-center">

              {/* Left: Text + CTA */}
              <motion.div
                ref={heroRef}
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="flex flex-col items-start text-left"
              >
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.25 }}
                  className="text-lg sm:text-3xl lg:text-4xl xl:text-5xl font-black text-foreground leading-[1.1] tracking-tight mb-3 sm:mb-5"
                >
                  Temukan Produk{' '}
                  <span className="text-gradient">
                    Pilihan Terbaik
                  </span>{' '}
                  Untuk Anda
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.35 }}
                  className="text-[10px] sm:text-base text-muted-foreground leading-[1.4] sm:leading-relaxed mb-4 sm:mb-8 max-w-md"
                >
                  Kumpulan produk pilihan dari berbagai marketplace terpercaya dengan harga terbaik
                  dan jaminan kualitas. Belanja lebih cerdas, hemat lebih banyak.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.45 }}
                  className="flex flex-wrap gap-3"
                >
                  <button
                    onClick={() =>
                      document.getElementById('products-grid')?.scrollIntoView({ behavior: 'smooth' })
                    }
                    className="inline-flex items-center gap-1.5 sm:gap-2.5 h-9 sm:h-12 px-3 sm:px-7 rounded-lg sm:rounded-2xl gradient-primary text-white text-[10px] sm:text-sm font-bold shadow-lg hover:shadow-xl hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
                  >
                    <ShoppingBag className="h-3 w-3 sm:h-4 sm:w-4" />
                    Lihat Semua
                    <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
                  </button>
                </motion.div>
              </motion.div>

              {/* Right: AI Illustration */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={heroInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="flex relative h-[220px] sm:h-[280px] lg:h-[460px] w-full items-center justify-center"
              >
                {/* Soft glow behind image */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-40 sm:w-64 lg:w-96 h-40 sm:h-64 lg:h-96 rounded-full bg-primary/10 blur-3xl" />
                </div>

                {/* AI Image */}
                <motion.img
                  src="/hero-shopping-ai.png"
                  alt="AI Shopping Illustration"
                  className="relative z-10 w-full h-full object-contain mix-blend-multiply"
                />
              </motion.div>
            </div>
          </div>
        </div>

      </section>


      {/* ══════════════════════════════════════════════
          ALL PRODUCTS GRID
      ══════════════════════════════════════════════ */}
      <section id="products-grid" className="pt-8 pb-16 bg-background min-h-screen">
        <div className="container-custom">
          <SectionHeader
            badge="Koleksi Lengkap"
            title="Semua Produk"
            subtitle="Jelajahi koleksi lengkap produk rekomendasi kami dari berbagai kategori."
          />

          {/* Sticky Search & Filter */}
          <div className="sticky top-14 z-20 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-4 bg-background/80 backdrop-blur-xl border-b border-border/50 mb-8 shadow-sm">
            <div className="flex flex-col sm:flex-row gap-3">
              {/* Search */}
              <div className="relative flex-1 max-w-sm">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-muted-foreground" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  placeholder="Cari produk, kategori, marketplace..."
                  className="w-full pl-10 pr-4 py-2.5 bg-card border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                />
              </div>

              {/* Category Pills */}
              <div
                className="flex gap-2 overflow-x-auto pb-0.5 scrollbar-none snap-x flex-1"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                <button
                  onClick={() => handleCategoryChange(null)}
                  className={`flex-none snap-start px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                    selectedCategory === null
                      ? 'gradient-primary text-white shadow-md shadow-primary/25'
                      : 'bg-card text-foreground border border-border hover:bg-muted hover:border-primary/30'
                  }`}
                >
                  Semua
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => handleCategoryChange(cat.name)}
                    className={`flex-none snap-start px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                      selectedCategory === cat.name
                        ? 'gradient-primary text-white shadow-md shadow-primary/25'
                        : 'bg-card text-foreground border border-border hover:bg-muted hover:border-primary/30'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Result count */}
          {(searchQuery || selectedCategory) && filteredProducts.length > 0 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-sm text-muted-foreground mb-5"
            >
              Menampilkan{' '}
              <span className="font-semibold text-foreground">{filteredProducts.length}</span> produk
              {selectedCategory ? ` dalam kategori "${selectedCategory}"` : ''}
              {searchQuery ? ` untuk "${searchQuery}"` : ''}
            </motion.p>
          )}

          {/* Product Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4">
            {paginatedProducts.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-10">
              <button
                onClick={() => {
                  setCurrentPage(p => Math.max(1, p - 1));
                  document.getElementById('products-grid')?.scrollIntoView({ behavior: 'smooth' });
                }}
                disabled={currentPage === 1}
                className="flex items-center justify-center w-10 h-10 rounded-xl border border-border bg-card text-foreground disabled:opacity-50 disabled:cursor-not-allowed hover:bg-muted transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <div className="flex items-center gap-1">
                {Array.from({ length: totalPages }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setCurrentPage(idx + 1);
                      document.getElementById('products-grid')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`w-10 h-10 rounded-xl text-sm font-semibold transition-all ${
                      currentPage === idx + 1
                        ? 'gradient-primary text-white shadow-md shadow-primary/25'
                        : 'border border-border bg-card hover:bg-muted text-foreground'
                    }`}
                  >
                    {idx + 1}
                  </button>
                ))}
              </div>

              <button
                onClick={() => {
                  setCurrentPage(p => Math.min(totalPages, p + 1));
                  document.getElementById('products-grid')?.scrollIntoView({ behavior: 'smooth' });
                }}
                disabled={currentPage === totalPages}
                className="flex items-center justify-center w-10 h-10 rounded-xl border border-border bg-card text-foreground disabled:opacity-50 disabled:cursor-not-allowed hover:bg-muted transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}

          {filteredProducts.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-24"
            >
              <div className="text-5xl mb-4">🔍</div>
              <p className="text-lg font-semibold text-foreground mb-2">Produk tidak ditemukan</p>
              <p className="text-sm text-muted-foreground mb-6">
                Coba ubah kata kunci atau pilih kategori yang berbeda
              </p>
              <button
                onClick={() => {
                  handleSearchChange('');
                  handleCategoryChange(null);
                }}
                className="inline-flex items-center gap-2 h-10 px-6 rounded-xl gradient-primary text-white text-sm font-semibold shadow-lg hover:opacity-90 transition-all"
              >
                Reset Filter
              </button>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
