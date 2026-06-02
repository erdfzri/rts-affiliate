# Quick Start Guide

Get your Affiliate Product Management System up and running in 5 minutes!

## ⚡ Prerequisites

- Node.js 18+ installed ([Download](https://nodejs.org/))
- npm (comes with Node.js)
- A code editor (VS Code recommended)

## 🚀 Installation

### Step 1: Clone or Download

```bash
# If using Git
git clone <repository-url>
cd affiliate-product-system

# Or download and extract the ZIP file
```

### Step 2: Install Dependencies

```bash
npm install
```

This will install all required packages (~200MB).

### Step 3: Start Development Server

```bash
npm run dev
```

### Step 4: Open in Browser

Open [http://localhost:5173](http://localhost:5173)

🎉 **That's it!** Your application is now running!

## 🎯 First Steps

### Explore the Public Website

1. **Home Page** (`/`)
   - View featured products
   - Browse categories
   - See trending items

2. **Product Detail** (Click any product)
   - View product information
   - See marketplace links
   - Check related products

3. **Search** (`/search`)
   - Search for products
   - Filter by category
   - Sort by price or popularity

### Access Admin Dashboard

1. Navigate to `/admin`
2. Explore:
   - **Dashboard** - Overview and statistics
   - **Products** - Manage all products
   - **Analytics** - Detailed performance metrics
   - **Affiliate Links** - Manage marketplace links
   - **Settings** - Configure the system

## 🎨 Try These Features

### Toggle Dark Mode

Click the moon/sun icon in the top navigation bar.

### Collapse Sidebar

Click the chevron icon in the sidebar (admin pages only).

### Search Products

1. Go to `/search`
2. Type in the search bar
3. Apply filters
4. Sort results

### View Analytics

1. Go to `/admin/analytics`
2. Change time range (7d, 30d, 90d)
3. Explore different charts

## 📝 Customize Your Data

### Add/Edit Products

Edit `src/data/mockData.ts`:

```typescript
export const products: Product[] = [
  {
    id: '9',
    code: 'PROD-009',
    name: 'Your Product Name',
    description: 'Product description...',
    price: 999000,
    originalPrice: 1299000,
    images: [
      'https://images.unsplash.com/photo-xxx',
    ],
    category: 'Elektronik',
    marketplace: ['shopee', 'tokopedia'],
    affiliateLinks: [
      { 
        marketplace: 'shopee', 
        url: 'https://shopee.co.id/your-link', 
        priority: 1 
      },
    ],
    clicks: 0,
    rating: 4.5,
    reviews: 10,
    status: 'active',
    isFeatured: true,
    isTrending: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  // ... existing products
];
```

### Add Categories

```typescript
export const categories: Category[] = [
  {
    id: '7',
    name: 'Your Category',
    slug: 'your-category',
    icon: 'Package', // Lucide icon name
    productCount: 0,
  },
  // ... existing categories
];
```

### Modify Colors

Edit `src/index.css`:

```css
:root {
  --primary: 221.2 83.2% 53.3%; /* Change this */
  /* ... other colors */
}
```

## 🛠️ Common Tasks

### Build for Production

```bash
npm run build
```

Output will be in `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

### Check TypeScript Errors

```bash
npm run type-check
```

### Lint Code

```bash
npm run lint
```

## 🐛 Troubleshooting

### Port Already in Use

If port 5173 is busy:

```bash
# Kill the process using the port (Windows)
netstat -ano | findstr :5173
taskkill /PID <PID> /F

# Or use a different port
npm run dev -- --port 3000
```

### Module Not Found

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build Fails

```bash
# Check for TypeScript errors
npm run type-check

# Fix any errors, then build again
npm run build
```

### Styles Not Loading

1. Make sure Tailwind CSS is installed
2. Check `postcss.config.js` exists
3. Restart dev server

## 📚 Next Steps

### Learn the Codebase

1. Read [README.md](README.md) for overview
2. Check [FEATURES.md](FEATURES.md) for detailed features
3. Review [CONTRIBUTING.md](CONTRIBUTING.md) for code guidelines

### Customize the Design

1. Modify colors in `src/index.css`
2. Update components in `src/components/`
3. Adjust layouts in `src/components/layout/`

### Add New Features

1. Create new components
2. Add new pages
3. Update routes in `src/App.tsx`
4. Add to sidebar navigation

### Deploy

1. Read [DEPLOYMENT.md](DEPLOYMENT.md)
2. Choose a hosting platform
3. Build and deploy
4. Configure custom domain

## 💡 Tips

### Development

- Use React DevTools for debugging
- Check browser console for errors
- Use VS Code extensions:
  - ESLint
  - Tailwind CSS IntelliSense
  - TypeScript

### Performance

- Keep components small
- Use React.memo for expensive components
- Lazy load routes (future enhancement)
- Optimize images

### Best Practices

- Follow TypeScript types
- Use existing components
- Maintain consistent styling
- Write clean, readable code

## 🆘 Getting Help

### Resources

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Vite Guide](https://vitejs.dev/guide/)

### Community

- Check existing issues on GitHub
- Ask in discussions
- Read documentation files

## ✅ Checklist

Before deploying to production:

- [ ] Customize mock data
- [ ] Update branding (logo, colors)
- [ ] Test all features
- [ ] Check responsive design
- [ ] Test dark mode
- [ ] Verify all links work
- [ ] Build successfully
- [ ] No console errors
- [ ] Good Lighthouse scores

## 🎉 You're Ready!

You now have a fully functional Affiliate Product Management System!

Start customizing it to match your needs and deploy it to share with the world.

Happy coding! 🚀
