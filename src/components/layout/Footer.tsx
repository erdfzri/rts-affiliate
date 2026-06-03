import { Link } from 'react-router-dom';
import { Mail, MessageCircle, Share2, Play } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container-custom pt-10 pb-6">
        {/* Top Grid */}
        <div className="flex flex-col gap-8 pb-8 border-b border-background/10">
          {/* Brand */}
          <div className="max-w-md">
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <div className="flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center">
                <img src="/logo-sofiareview.svg" alt="Sofia Review" className="w-full h-full object-contain" />
              </div>
              <span className="text-base font-bold text-white uppercase tracking-wider">Sofia Review</span>
            </Link>
            <p className="text-sm text-background/60 leading-relaxed mb-6">
              Nggak mau kamu salah beli! Kami review jujur produk-produk viral biar kamu bisa belanja dengan percaya diri. 💕
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




        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/40">
            © 2026 Sofia Review. Hak cipta dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}
