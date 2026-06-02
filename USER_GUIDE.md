# User Guide

Panduan lengkap untuk menggunakan Affiliate Product Management System.

## 📖 Daftar Isi

1. [Pengenalan](#pengenalan)
2. [Website Publik](#website-publik)
3. [Admin Dashboard](#admin-dashboard)
4. [Tips & Trik](#tips--trik)
5. [FAQ](#faq)

## Pengenalan

### Apa itu Affiliate Product Management System?

Sistem ini adalah platform untuk mengelola dan mempromosikan produk affiliate dari berbagai marketplace Indonesia. Terdiri dari dua bagian utama:

1. **Website Publik**: Untuk menampilkan produk kepada calon pembeli
2. **Admin Dashboard**: Untuk mengelola produk dan melihat analytics

### Siapa yang Menggunakan?

- **Affiliate Marketer**: Mengelola produk dan link affiliate
- **Content Creator**: Mempromosikan produk ke audience
- **E-commerce Manager**: Mengelola katalog produk
- **Digital Marketer**: Menganalisis performa campaign

## Website Publik

### Halaman Home

#### Mengakses
Buka aplikasi di browser: `http://localhost:5173` atau URL deployment Anda.

#### Fitur

**1. Hero Section**
- Headline besar yang menarik perhatian
- Tombol "Lihat Produk" untuk ke halaman search
- Tombol "Jelajahi Kategori" untuk melihat semua kategori

**2. Produk Unggulan**
- Menampilkan produk pilihan terbaik
- Klik produk untuk melihat detail
- Badge "Trending" untuk produk populer
- Badge diskon untuk produk yang sedang promo

**3. Kategori Populer**
- 6 kategori utama dengan icon
- Jumlah produk per kategori
- Klik untuk melihat produk dalam kategori

**4. Trending Sekarang**
- Produk yang paling banyak dilihat
- Update otomatis berdasarkan jumlah klik

### Halaman Detail Produk

#### Mengakses
Klik produk dari halaman manapun.

#### Fitur

**1. Gallery Gambar**
- Gambar utama besar
- Thumbnail di bawah untuk navigasi
- Klik thumbnail untuk ganti gambar utama

**2. Informasi Produk**
- Nama produk
- Kategori
- Rating bintang
- Jumlah review
- Harga saat ini
- Harga asli (dicoret)
- Badge hemat
- Deskripsi lengkap

**3. Link Marketplace**
- Tombol untuk setiap marketplace
- Warna berbeda per marketplace:
  - 🟠 Shopee (Orange)
  - ⚫ TikTok Shop (Black)
  - 🟢 Tokopedia (Green)
  - 🔵 Lazada (Blue)
  - 🔷 Blibli (Blue)
- Klik untuk membuka di tab baru
- Tracking otomatis untuk analytics

**4. Produk Serupa**
- 4 produk dari kategori yang sama
- Klik untuk lihat detail

#### Tips
- Bandingkan harga di berbagai marketplace
- Baca deskripsi lengkap sebelum membeli
- Cek rating dan review
- Lihat produk serupa untuk alternatif

### Halaman Search

#### Mengakses
- Klik "Lihat Produk" di home
- Atau navigasi ke `/search`

#### Fitur

**1. Search Bar**
- Ketik nama produk
- Hasil muncul real-time
- Tidak perlu tekan Enter

**2. Filter Kategori**
- Sidebar kiri
- Klik kategori untuk filter
- "Semua Kategori" untuk reset

**3. Filter Marketplace**
- Di bawah kategori
- Filter produk per marketplace
- Bisa pilih multiple

**4. Sorting**
- Terpopuler: Berdasarkan jumlah klik
- Termurah: Harga rendah ke tinggi
- Termahal: Harga tinggi ke rendah

**5. Grid Produk**
- Responsive (1-3 kolom)
- Hover untuk efek
- Klik untuk detail

#### Tips
- Gunakan search untuk produk spesifik
- Kombinasikan filter untuk hasil lebih akurat
- Sort by "Terpopuler" untuk produk terbaik
- Sort by "Termurah" untuk deal terbaik

### Halaman Kategori

#### Mengakses
Klik kategori dari home atau sidebar search.

#### Fitur
- Semua produk dalam kategori
- Jumlah produk ditampilkan
- Bisa di-filter dan di-sort
- Breadcrumb untuk navigasi

## Admin Dashboard

### Mengakses Admin
Navigasi ke `/admin` di browser.

### Dashboard Overview

#### Mengakses
`/admin` atau klik "Dashboard" di sidebar.

#### Fitur

**1. Kartu Metrik**
- Total Produk
- Total Klik
- Total Visitor
- Average CTR
- Trend naik/turun
- Persentase perubahan

**2. Grafik Clicks Overview**
- Area chart 30 hari terakhir
- Hover untuk detail per hari
- Gradient fill untuk visual menarik

**3. Grafik Visitors vs Clicks**
- Line chart perbandingan
- Dua garis berbeda warna
- Hover untuk detail

**4. Top Products**
- 5 produk teratas
- Ranking dengan nomor
- Thumbnail produk
- Nama dan kategori
- Jumlah klik
- Harga
- Status badge

**5. Category Performance**
- Bar chart per kategori
- Total clicks per kategori
- Hover untuk detail

#### Tips
- Cek dashboard setiap hari
- Perhatikan trend naik/turun
- Fokus pada top products
- Analisis kategori terbaik

### Product Management

#### Mengakses
`/admin/products` atau klik "Products" di sidebar.

#### Fitur

**1. Search Bar**
- Cari produk by nama atau kode
- Real-time search
- Case-insensitive

**2. Filter Kategori**
- Button untuk setiap kategori
- "All" untuk semua produk
- Active state berbeda warna

**3. Tabel Produk**
Kolom:
- **Thumbnail**: Gambar produk
- **Product**: Nama dan jumlah review
- **Code**: Kode unik produk
- **Category**: Badge kategori
- **Price**: Harga format Rupiah
- **Marketplace**: Badge multiple
- **Clicks**: Jumlah klik
- **Status**: Active/Inactive
- **Actions**: View, Edit, Delete

**4. Actions**
- 👁️ View: Lihat detail produk
- ✏️ Edit: Edit produk (coming soon)
- 🗑️ Delete: Hapus produk (coming soon)

#### Tips
- Gunakan search untuk produk spesifik
- Filter by kategori untuk fokus
- Sort by clicks untuk lihat top performers
- Update status produk yang tidak aktif

### Analytics

#### Mengakses
`/admin/analytics` atau klik "Analytics" di sidebar.

#### Fitur

**1. Time Range Selector**
- 7 Hari
- 30 Hari
- 90 Hari
- Klik untuk ganti range
- Data update otomatis

**2. Key Metrics**
- Total Clicks
- Total Visitors
- Average CTR
- Avg. Daily Views
- Trend indicators

**3. Clicks Trend Chart**
- Area chart dengan gradient
- Menampilkan trend clicks
- Hover untuk detail per hari

**4. CTR Performance Chart**
- Line chart
- Menampilkan CTR over time
- Identifikasi pola

**5. Top 10 Products Chart**
- Horizontal bar chart
- 10 produk teratas
- Sorted by clicks

**6. Category Distribution Chart**
- Pie chart
- Distribusi clicks per kategori
- Persentase per kategori

#### Tips
- Mulai dengan 7 hari untuk trend terkini
- Gunakan 30 hari untuk overview bulanan
- 90 hari untuk trend jangka panjang
- Perhatikan CTR untuk optimasi
- Fokus pada top 10 products
- Analisis kategori untuk strategi

### Affiliate Links

#### Mengakses
`/admin/links` atau klik "Affiliate Links" di sidebar.

#### Fitur

**1. Overview Stats**
- Total Links
- Active Links
- Total Clicks
- Marketplaces

**2. Search Bar**
- Cari by produk, kode, atau marketplace
- Real-time search

**3. Tabel Links**
Kolom:
- **Product**: Nama produk
- **Code**: Kode produk
- **Marketplace**: Badge warna
- **URL**: Link affiliate
- **Priority**: Urutan prioritas
- **Clicks**: Jumlah klik
- **Status**: Active/Inactive
- **Actions**: Open, Copy, Edit, Delete

**4. Copy to Clipboard**
- Klik icon copy
- Link tersalin otomatis
- Checkmark muncul 2 detik

**5. Open Link**
- Klik icon external link
- Buka di tab baru
- Untuk verifikasi link

#### Tips
- Verifikasi link secara berkala
- Update link yang expired
- Prioritas link dengan performa terbaik
- Copy link untuk share
- Monitor clicks per link

### Settings

#### Mengakses
`/admin/settings` atau klik "Settings" di sidebar.

#### Fitur

**1. Profile Settings**
- Full Name
- Email
- Role (read-only)

**2. Website Settings**
- Site Name
- Site Description
- Contact Email

**3. Theme Settings**
- Light/Dark mode toggle
- Primary color picker
- Preview real-time

**4. Tracking Settings**
- Google Analytics ID
- Facebook Pixel ID
- Enable/Disable click tracking

**5. Danger Zone**
- Clear All Analytics Data
- Reset All Settings
- Konfirmasi required

**6. Save Button**
- Top right corner
- Save semua perubahan
- Konfirmasi muncul

#### Tips
- Update profile info
- Customize site name dan description
- Pilih theme sesuai preferensi
- Setup tracking untuk analytics
- Backup data sebelum clear
- Hati-hati dengan danger zone

## Tips & Trik

### Umum

**1. Keyboard Shortcuts**
- `Ctrl + K`: Command palette (coming soon)
- `Esc`: Close modals
- `Tab`: Navigate form fields

**2. Dark Mode**
- Klik icon moon/sun di navbar
- Otomatis tersimpan
- Sync across tabs

**3. Sidebar**
- Klik chevron untuk collapse
- State tersimpan
- Lebih banyak ruang untuk content

**4. Responsive**
- Mobile: Hamburger menu
- Tablet: Collapsed sidebar
- Desktop: Full sidebar

### Untuk Affiliate Marketer

**1. Optimasi Produk**
- Fokus pada produk dengan CTR tinggi
- Update deskripsi produk populer
- Tambah gambar berkualitas
- Set produk terbaik sebagai featured

**2. Tracking Performance**
- Cek dashboard setiap hari
- Monitor top products
- Analisis trend clicks
- Identifikasi kategori terbaik

**3. Link Management**
- Verifikasi link berkala
- Update link expired
- Prioritas link terbaik
- Test link sebelum share

**4. Content Strategy**
- Promosikan top products
- Fokus pada kategori populer
- Manfaatkan trending products
- Update konten secara berkala

### Untuk Developer

**1. Customization**
- Edit `src/data/mockData.ts` untuk data
- Modify `src/index.css` untuk colors
- Update components untuk UI changes
- Add new pages di `src/pages/`

**2. Development**
- `npm run dev` untuk development
- `npm run build` untuk production
- `npm run preview` untuk test build
- `npm run type-check` untuk TypeScript

**3. Debugging**
- Use React DevTools
- Check browser console
- Inspect network requests
- Use VS Code debugger

## FAQ

### Umum

**Q: Apakah ini gratis?**
A: Ya, aplikasi ini open source dengan MIT License.

**Q: Apakah perlu backend?**
A: Tidak untuk versi ini. Semua data menggunakan mock data. Backend bisa ditambahkan nanti.

**Q: Apakah bisa digunakan untuk produksi?**
A: Ya, aplikasi ini production-ready. Tinggal deploy dan customize data.

**Q: Marketplace apa saja yang didukung?**
A: Shopee, TikTok Shop, Tokopedia, Lazada, dan Blibli.

### Teknis

**Q: Bagaimana cara menambah produk?**
A: Edit file `src/data/mockData.ts` dan tambahkan produk baru ke array `products`.

**Q: Bagaimana cara mengubah warna?**
A: Edit file `src/index.css` dan ubah CSS variables di `:root` dan `.dark`.

**Q: Apakah bisa multi-bahasa?**
A: Belum, tapi bisa ditambahkan dengan library seperti i18next.

**Q: Bagaimana cara deploy?**
A: Lihat [DEPLOYMENT.md](DEPLOYMENT.md) untuk panduan lengkap.

### Troubleshooting

**Q: Aplikasi tidak mau jalan?**
A: Pastikan Node.js 18+ terinstall, jalankan `npm install`, lalu `npm run dev`.

**Q: Build gagal?**
A: Jalankan `npm run type-check` untuk cek error TypeScript.

**Q: Styling tidak muncul?**
A: Pastikan Tailwind CSS terinstall dan `postcss.config.js` ada.

**Q: Dark mode tidak work?**
A: Clear browser cache dan localStorage, lalu refresh.

## 🆘 Butuh Bantuan?

### Resources
- [README.md](README.md) - Overview
- [QUICKSTART.md](QUICKSTART.md) - Quick start
- [FEATURES.md](FEATURES.md) - Detailed features
- [DEPLOYMENT.md](DEPLOYMENT.md) - Deployment guide

### Support
- GitHub Issues - Report bugs
- GitHub Discussions - Ask questions
- Email - contact@affiliatepro.com

---

**Last Updated**: June 1, 2026  
**Version**: 1.0.0

Selamat menggunakan Affiliate Product Management System! 🎉
