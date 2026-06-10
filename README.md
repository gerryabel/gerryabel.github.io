# Portfolio Website — Gerry Abel Al Ashby

Portfolio website pribadi dibangun dengan **Next.js 16** dan di-deploy ke **GitHub Pages**.

**Live:** [https://gerryabel.github.io](https://gerryabel.github.io)

---

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Deployment:** GitHub Pages (Static Export)

---

## Struktur Proyek

```
app/
├── globals.css      # Styling global + animasi
├── layout.tsx       # Root layout + SEO metadata
└── page.tsx         # Halaman utama portofolio
public/
├── foto-profil.jpg  # Foto profil
└── CV_Gerry.pdf     # CV download
.github/workflows/
└── deploy.yml       # GitHub Actions auto-deploy
```

---

## Cara Jalankan Lokal

```bash
# Install dependencies
npm install

# Jalankan dev server
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

---

## Build & Deploy

```bash
# Build static export
npm run build
```

Setiap push ke branch `main`, GitHub Actions otomatis build dan deploy ke GitHub Pages.

---
