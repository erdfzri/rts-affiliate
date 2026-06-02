import { Link } from 'react-router-dom';
import { Mail, MessageCircle, Share2, Play } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container-custom pt-10 pb-6">
        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 pb-8 border-b border-background/10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <div className="flex h-10 w-10 items-center justify-center">
                <img src="/logo.png" alt="rtsAffiliate" className="w-full h-full object-contain mix-blend-screen" />
              </div>
              <span className="text-base font-bold text-white">rtsAffiliate</span>
            </Link>
            <p className="text-sm text-background/60 leading-relaxed mb-6">
              Rekomendasi produk terpilih dari berbagai marketplace terpercaya. Temukan produk terbaik dengan harga terbaik.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {[
                { icon: MessageCircle, label: 'Instagram', href: '#' },
                { icon: Share2, label: 'Twitter', href: '#' },
                { icon: Play, label: 'YouTube', href: '#' },
                { icon: Mail, label: 'Email', href: '#' },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-background/10 text-background/70 hover:bg-background/20 hover:text-white transition-all"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>



          {/* Info */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Informasi</h3>
            <ul className="space-y-2.5">
              {[
                { label: 'Tentang Kami', href: '/about' },
                { label: 'Cara Kerja Affiliate', href: '#' },
                { label: 'Kebijakan Privasi', href: '#' },
                { label: 'Syarat & Ketentuan', href: '#' },
                { label: 'Hubungi Kami', href: '#' },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link
                    to={href}
                    className="text-sm text-background/60 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/40">
            © 2026 rtsAffiliate. Hak cipta dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}
