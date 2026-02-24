# PT Alih Daya Pamungkas Sejahtera — Company Profile Website

Website company profile modern untuk PT Alih Daya Pamungkas Sejahtera, perusahaan HR & Outsourcing profesional.

## 🚀 Tech Stack
- **Next.js 14** — React framework
- **Tailwind CSS** — Utility-first CSS
- **React Icons** — Icon library (Font Awesome included)
- **Google Fonts** — Plus Jakarta Sans + Sora

## 📁 Struktur Folder

```
adps-website/
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx         # Fixed navbar dengan logo ADPS
│   │   └── Footer.jsx         # Footer dengan social media icons
│   ├── sections/
│   │   ├── HeroSection.jsx    # Slider banner 2 slide + stats bar
│   │   ├── ServicesSection.jsx # 4 kartu layanan HR
│   │   ├── JobsSection.jsx    # Job listing dengan filter
│   │   └── ContactSection.jsx # Google Map + form contact
│   └── ui/
│       └── WhatsAppFloat.jsx  # Floating WA button
├── pages/
│   ├── _app.jsx
│   └── index.jsx              # Main landing page
├── styles/
│   └── globals.css
├── public/
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## ⚙️ Instalasi & Menjalankan

```bash
# 1. Install dependencies
npm install

# 2. Jalankan development server
npm run dev

# 3. Buka browser
open http://localhost:3000
```

## 🎨 Tema & Warna
- **Biru Deep:** `#0A1628`
- **Biru Bright:** `#1E6FD9`
- **Kuning:** `#F5C518`
- **Putih:** `#FFFFFF`

## 📱 Fitur
- ✅ Navbar fixed dengan logo ADPS
- ✅ Hero banner slider 2 slide (Unsplash)
- ✅ Stats bar (500+ talent, 120+ klien, dll)
- ✅ Services section (4 layanan HR)
- ✅ Job listing dengan filter (All/Full Time/Kontrak/Remote)
- ✅ Contact form + Google Map embed
- ✅ reCAPTCHA simulasi
- ✅ Footer dengan ikon social media (Instagram, LinkedIn, Facebook)
- ✅ Floating WhatsApp button (animasi)
- ✅ Responsive mobile/desktop
- ✅ Smooth scroll & hover animations

## 🔧 Konfigurasi

Ubah nomor WhatsApp di `pages/index.jsx`:
```jsx
<WhatsAppFloat phone="6281234567890" />
```

Link Instagram sudah terhubung ke `@adps.official`.

## 📦 Untuk Production

```bash
npm run build
npm start
```
