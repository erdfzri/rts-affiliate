import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Menu, X, ShoppingBag } from 'lucide-react';
import { useThemeStore } from '@/store/useThemeStore';
import { cn } from '@/lib/utils';

export function Header() {
  const { theme, toggleTheme } = useThemeStore();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          isScrolled
            ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl shadow-lg shadow-black/8 border-b border-white/20 dark:border-white/10'
            : 'bg-transparent'
        )}
      >
        <div className="container-custom">
          <div className="flex h-14 items-center justify-between gap-4">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 shrink-0">
              <div className="flex h-8 w-8 items-center justify-center">
                <img
                  src="/logo.png"
                  alt="rtsAffiliate"
                  className="w-full h-full object-contain invert mix-blend-multiply dark:invert-0 dark:mix-blend-screen transition-all duration-500"
                />
              </div>
              <span className="text-base font-bold transition-all duration-500 text-gradient">
                rtsAffiliate
              </span>
            </Link>

            {/* Right Group (Nav + Actions) */}
            <div className="flex items-center gap-2 sm:gap-4">
              {/* Desktop Nav */}
              <nav className="hidden lg:flex items-center gap-1">
                <Link
                  to="/"
                  className="px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 text-foreground/70 hover:text-foreground hover:bg-muted"
                >
                  Beranda
                </Link>
                <Link
                  to="/"
                  onClick={() => {
                    setTimeout(() => {
                      document.getElementById('products-grid')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 text-foreground/70 hover:text-foreground hover:bg-muted"
                >
                  Produk
                </Link>
                <Link
                  to="/about"
                  className="px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 text-foreground/70 hover:text-foreground hover:bg-muted"
                >
                  Tentang
                </Link>
              </nav>

              {/* Right Actions */}
              <div className="flex items-center gap-1 sm:gap-2">
                {/* Mobile Menu */}
                <button
                  onClick={() => setIsMobileOpen(!isMobileOpen)}
                  className="lg:hidden flex h-9 w-9 items-center justify-center rounded-xl transition-all duration-300 text-foreground/70 hover:text-foreground hover:bg-muted"
                  aria-label="Menu"
                >
                  {isMobileOpen ? <X className="h-4.5 w-4.5" /> : <Menu className="h-4.5 w-4.5" />}
                </button>
              </div>
            </div>
          </div>

          {/* Search Bar Expanded */}
          <AnimatePresence>
            {isSearchOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <form onSubmit={handleSearch} className="pb-4">
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="Cari produk, kategori, marketplace..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      autoFocus
                      className="w-full h-11 pl-11 pr-4 rounded-xl bg-muted border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    />
                  </div>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden border-t bg-background overflow-hidden"
            >
              <div className="container-custom py-4 flex flex-col gap-1">
                <Link to="/" onClick={() => setIsMobileOpen(false)} className="px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-muted transition-all">Beranda</Link>
                <Link 
                  to="/" 
                  onClick={() => {
                    setIsMobileOpen(false);
                    setTimeout(() => {
                      document.getElementById('products-grid')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }} 
                  className="px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-muted transition-all text-foreground/70"
                >
                  Produk
                </Link>
                <Link to="/about" onClick={() => setIsMobileOpen(false)} className="px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-muted transition-all">Tentang</Link>
                <div className="pt-2 border-t mt-1">
                  <Link to="/" onClick={() => setIsMobileOpen(false)} className="flex justify-center items-center h-10 w-full rounded-xl gradient-primary text-white text-sm font-semibold shadow-md">
                    Lihat Semua Produk
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
