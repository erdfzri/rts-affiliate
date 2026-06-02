import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { products, categories } from '@/data/mockData';
import { ProductCard } from '@/components/ProductCard';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const categoryIcons: Record<string, string> = {
  'Elektronik': '💻',
  'Fashion': '👟',
  'Rumah Tangga': '🏠',
  'Gaming': '🎮',
  'Kesehatan': '❤️',
  'Olahraga': '🏋️',
};

export function Category() {
  const { slug } = useParams();
  const category = categories.find((c) => c.slug === slug);
  const categoryProducts = products.filter(
    (p) => p.category === category?.name
  );

  if (!category) {
    return (
      <div className="pt-16 flex min-h-[80vh] items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">📦</div>
          <h2 className="text-2xl font-bold mb-2">Kategori Tidak Ditemukan</h2>
          <Link
            to="/"
            className="inline-flex items-center gap-2 h-11 px-6 rounded-2xl gradient-primary text-white font-semibold"
          >
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-14">
      {/* Header */}
      <div className="border-b border-border bg-muted/30">
        <div className="container-custom py-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Link to="/" className="hover:text-foreground transition-colors">Beranda</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-foreground font-medium">{category.name}</span>
          </nav>

          <div className="flex items-center gap-4">
            <div className="text-4xl">{categoryIcons[category.name] ?? '📦'}</div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold">{category.name}</h1>
              <p className="text-muted-foreground text-sm mt-1">
                {categoryProducts.length} produk tersedia
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="container-custom py-10">
        {categoryProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {categoryProducts.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="text-5xl mb-4">📦</div>
            <h3 className="text-lg font-semibold mb-2">Belum ada produk</h3>
            <p className="text-muted-foreground text-sm">Produk untuk kategori ini sedang dipersiapkan.</p>
          </div>
        )}
      </div>

      {/* Other Categories */}
      <div className="container-custom pb-16">
        <h2 className="text-xl font-bold mb-6">Kategori Lainnya</h2>
        <div className="flex flex-wrap gap-3">
          {categories
            .filter((c) => c.slug !== slug)
            .map((cat) => (
              <motion.div key={cat.id} whileHover={{ y: -2 }}>
                <Link
                  to={`/category/${cat.slug}`}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-card border border-border/60 hover:border-primary/30 hover:shadow-md transition-all text-sm font-medium"
                >
                  <span>{categoryIcons[cat.name] ?? '📦'}</span>
                  {cat.name}
                  <span className="text-xs text-muted-foreground">({cat.productCount})</span>
                </Link>
              </motion.div>
            ))}
        </div>
      </div>
    </div>
  );
}
