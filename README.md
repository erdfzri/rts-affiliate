# Affiliate Product Management System

Sistem manajemen produk affiliate modern yang dibangun dengan React 19, TypeScript, dan Tailwind CSS. Aplikasi ini dirancang untuk mengelola dan mempromosikan produk affiliate dari berbagai marketplace Indonesia seperti Shopee, TikTok Shop, Tokopedia, Lazada, dan Blibli.

## ✨ Features

### Public Website
- **Home Page**: Hero section, featured products, popular categories, trending products
- **Product Detail**: Gallery gambar, informasi lengkap, link ke marketplace
- **Search Page**: Pencarian realtime, filter kategori & marketplace, sorting
- **Category Page**: Produk berdasarkan kategori

### Admin Dashboard
- **Dashboard Overview**: Statistik, grafik performa, top products
- **Product Management**: CRUD produk, tabel modern dengan filter & search
- **Analytics**: Grafik mendalam, CTR analysis, category distribution
- **Affiliate Links**: Manajemen link affiliate per marketplace

## 🚀 Tech Stack

- **React 19** - UI Library
- **TypeScript** - Type Safety
- **Vite** - Build Tool
- **Tailwind CSS** - Styling
- **Shadcn UI** - Component Library
- **React Router** - Routing
- **TanStack Query** - Data Fetching
- **Zustand** - State Management
- **Framer Motion** - Animations
- **Recharts** - Charts & Graphs
- **Lucide Icons** - Icons

## 📦 Installation

```bash
# Clone repository
git clone <repository-url>
cd affiliate-product-system

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎨 Design Features

- ✅ Modern SaaS-style design (Linear, Stripe, Vercel inspired)
- ✅ Dark/Light mode
- ✅ Responsive (Mobile, Tablet, Desktop)
- ✅ Smooth animations with Framer Motion
- ✅ Collapsible sidebar
- ✅ Command palette (Ctrl+K)
- ✅ Skeleton loading states
- ✅ Toast notifications
- ✅ Premium typography & spacing
- ✅ Soft shadows & rounded corners

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/              # Reusable UI components
│   ├── layout/          # Layout components (Navbar, Sidebar)
│   └── ProductCard.tsx  # Product card component
├── pages/
│   ├── Home.tsx         # Public home page
│   ├── ProductDetail.tsx
│   ├── Search.tsx
│   └── admin/
│       ├── Dashboard.tsx
│       ├── Products.tsx
│       └── Analytics.tsx
├── store/
│   ├── useThemeStore.ts
│   ├── useSidebarStore.ts
│   └── useCommandStore.ts
├── data/
│   └── mockData.ts      # Mock data (products, categories, analytics)
├── types/
│   └── index.ts         # TypeScript types
├── lib/
│   └── utils.ts         # Utility functions
└── App.tsx              # Main app component
```

## 🎯 Key Features Implemented

### Layout
- ✅ Fixed top navigation
- ✅ Collapsible sidebar
- ✅ Responsive mobile menu
- ✅ Smooth transitions

### Components
- ✅ Button with variants
- ✅ Card components
- ✅ Input fields
- ✅ Badge components
- ✅ Skeleton loaders
- ✅ Product cards with hover effects

### Pages
- ✅ Home with hero & sections
- ✅ Product detail with gallery
- ✅ Search with filters
- ✅ Admin dashboard with charts
- ✅ Product management table
- ✅ Analytics with multiple charts

### State Management
- ✅ Theme store (dark/light mode)
- ✅ Sidebar store (collapsed state)
- ✅ Command palette store
- ✅ Persistent storage with Zustand

### Data
- ✅ 8 sample products
- ✅ 6 categories
- ✅ 30 days analytics data
- ✅ Multiple marketplace support

## 🎨 Color Scheme

The app uses a modern color palette with CSS variables:
- Primary: Blue (#3b82f6)
- Secondary: Gray tones
- Destructive: Red
- Success: Green
- Warning: Orange

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🔧 Customization

### Adding New Products
Edit `src/data/mockData.ts` and add products to the `products` array.

### Changing Theme Colors
Edit `src/index.css` to modify CSS variables for light/dark themes.

### Adding New Pages
1. Create page component in `src/pages/`
2. Add route in `src/App.tsx`
3. Add navigation link in `src/components/layout/Sidebar.tsx`

## 🚀 Deployment

```bash
# Build for production
npm run build

# The dist/ folder is ready to deploy
```

Deploy to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting

## 📝 Notes

- Semua data menggunakan mock data (dummy JSON)
- Tidak ada backend atau API
- Link affiliate akan membuka tab baru
- Tracking clicks hanya console.log (untuk demo)

## 🎯 Future Enhancements

- [ ] Command palette implementation
- [ ] Create product form (multi-step)
- [ ] Settings page
- [ ] Affiliate links management page
- [ ] Category detail page
- [ ] Toast notifications
- [ ] Confirm dialogs
- [ ] Image upload
- [ ] Export data
- [ ] Print reports

## 📄 License

MIT License

## 👨‍💻 Author

Built with ❤️ using React 19 and modern web technologies.
