# Deployment Guide

## 📦 Build for Production

```bash
# Install dependencies
npm install

# Build the application
npm run build

# Preview the production build locally
npm run preview
```

The build output will be in the `dist/` folder.

## 🚀 Deployment Options

### 1. Vercel (Recommended)

Vercel is the easiest way to deploy a Vite + React application.

#### Via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

#### Via Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Vite settings
6. Click "Deploy"

**Configuration:**
- Framework Preset: Vite
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

### 2. Netlify

#### Via Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build the app
npm run build

# Deploy
netlify deploy

# Deploy to production
netlify deploy --prod
```

#### Via Netlify Dashboard

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Connect your GitHub repository
5. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

**netlify.toml** (optional):
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### 3. GitHub Pages

#### Using gh-pages package

```bash
# Install gh-pages
npm install -D gh-pages

# Add to package.json scripts:
# "predeploy": "npm run build",
# "deploy": "gh-pages -d dist"

# Deploy
npm run deploy
```

**Update vite.config.ts:**
```typescript
export default defineConfig({
  base: '/your-repo-name/',
  // ... other config
})
```

### 4. Firebase Hosting

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login to Firebase
firebase login

# Initialize Firebase
firebase init hosting

# Build the app
npm run build

# Deploy
firebase deploy
```

**firebase.json:**
```json
{
  "hosting": {
    "public": "dist",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

### 5. AWS S3 + CloudFront

#### Build and Upload

```bash
# Build
npm run build

# Upload to S3 (using AWS CLI)
aws s3 sync dist/ s3://your-bucket-name --delete

# Invalidate CloudFront cache
aws cloudfront create-invalidation --distribution-id YOUR_DIST_ID --paths "/*"
```

#### S3 Bucket Configuration
- Enable static website hosting
- Set index document: `index.html`
- Set error document: `index.html`
- Configure bucket policy for public access

### 6. Docker

**Dockerfile:**
```dockerfile
# Build stage
FROM node:20-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

**nginx.conf:**
```nginx
server {
    listen 80;
    server_name localhost;
    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

**Build and Run:**
```bash
# Build Docker image
docker build -t affiliate-system .

# Run container
docker run -p 80:80 affiliate-system
```

### 7. Railway

1. Push your code to GitHub
2. Go to [railway.app](https://railway.app)
3. Click "New Project"
4. Select "Deploy from GitHub repo"
5. Railway will auto-detect and deploy

### 8. Render

1. Push your code to GitHub
2. Go to [render.com](https://render.com)
3. Click "New Static Site"
4. Connect your repository
5. Configure:
   - Build Command: `npm run build`
   - Publish Directory: `dist`
6. Click "Create Static Site"

## 🔧 Environment Variables

For production, set these environment variables in your hosting platform:

```bash
VITE_APP_NAME=Affiliate Pro
VITE_APP_URL=https://yourdomain.com
VITE_GA_ID=your-ga-id
VITE_FB_PIXEL_ID=your-pixel-id
VITE_API_URL=https://api.yourdomain.com
```

## 🌐 Custom Domain

### Vercel
1. Go to Project Settings → Domains
2. Add your custom domain
3. Configure DNS records as instructed

### Netlify
1. Go to Site Settings → Domain Management
2. Add custom domain
3. Configure DNS records

### Cloudflare (Recommended for any hosting)
1. Add your site to Cloudflare
2. Update nameservers
3. Enable:
   - SSL/TLS (Full)
   - Auto Minify (JS, CSS, HTML)
   - Brotli compression
   - Caching

## 📊 Performance Optimization

### Before Deployment

1. **Optimize Images**
   - Use WebP format
   - Compress images
   - Use CDN (Cloudinary, Imgix)

2. **Code Splitting**
   - Already configured with Vite
   - Lazy load routes (future)

3. **Bundle Analysis**
   ```bash
   npm run build -- --mode analyze
   ```

4. **Lighthouse Audit**
   - Run in Chrome DevTools
   - Aim for 90+ scores

### After Deployment

1. **Enable Compression**
   - Gzip/Brotli on server
   - Most platforms enable by default

2. **CDN Configuration**
   - Cache static assets
   - Set proper cache headers

3. **Monitoring**
   - Set up error tracking (Sentry)
   - Set up analytics (Google Analytics)
   - Monitor performance (Web Vitals)

## 🔒 Security Checklist

- [ ] Enable HTTPS
- [ ] Set security headers
- [ ] Configure CORS properly
- [ ] Sanitize user inputs (when backend added)
- [ ] Keep dependencies updated
- [ ] Use environment variables for secrets
- [ ] Enable rate limiting (when backend added)
- [ ] Regular security audits

## 🐛 Troubleshooting

### Build Fails

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### 404 on Refresh

Make sure your hosting platform is configured to redirect all routes to `index.html` (SPA mode).

### Blank Page After Deploy

1. Check browser console for errors
2. Verify `base` path in vite.config.ts
3. Check if assets are loading correctly
4. Verify environment variables

### Slow Loading

1. Enable compression
2. Use CDN for assets
3. Optimize images
4. Check bundle size
5. Enable caching

## 📈 Post-Deployment

1. **Test Everything**
   - All routes work
   - Forms submit correctly
   - Links open properly
   - Mobile responsive
   - Dark mode works

2. **Set Up Monitoring**
   - Error tracking
   - Performance monitoring
   - Uptime monitoring

3. **SEO**
   - Submit sitemap to Google
   - Add meta tags
   - Configure robots.txt
   - Set up Google Search Console

4. **Analytics**
   - Google Analytics
   - Facebook Pixel
   - Custom event tracking

## 🎉 You're Live!

Your Affiliate Product Management System is now deployed and ready to use!

For support or questions, refer to the main README.md or create an issue on GitHub.
