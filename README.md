# Abdallah Ashraf El Bayoumi — Agricultural Engineer Portfolio

> Premium bilingual (AR/EN) personal portfolio for **Abdallah Ashraf El Bayoumi**, a professional Agricultural Engineer specializing in agricultural economics, cooperative sciences, and field supervision.

## Tech Stack

- **React 19** + **TypeScript**
- **Vite 6** (dev server & build)
- **Tailwind CSS v4** (via `@tailwindcss/vite` plugin)
- **Framer Motion** (`motion/react`) for animations
- **Lucide React** for icons

## Getting Started

### Prerequisites
- Node.js ≥ 18

### Install & Run

```bash
npm install
npm run dev
```

The app runs at `http://localhost:3000`.

### Build for Production

```bash
npm run build
npm run preview
```

## Project Structure

```
├── public/                  # Static assets (profile images)
├── src/
│   ├── App.tsx              # Main application (all components)
│   ├── index.css            # Global styles & Tailwind theme
│   ├── main.tsx             # React entry point
│   ├── translations.ts      # AR/EN translation strings
│   └── lib/
│       └── utils.ts         # cn() utility (clsx + tailwind-merge)
├── docs/                    # Project documentation
│   └── AUDIT_REPORT.md      # Full code audit & fixes log
├── index.html               # HTML shell with SEO metadata
├── vite.config.ts           # Vite configuration
├── tsconfig.json            # TypeScript config
└── package.json             # Dependencies & scripts
```

## Features

- 🌐 Full Arabic / English bilingual support (RTL/LTR)
- 📄 Built-in ATS-friendly CV generator with print-to-PDF
- ✨ Premium animations & micro-interactions
- 📱 Fully responsive (mobile → desktop)
- 🔍 SEO / Open Graph / Structured Data optimized

## License

All rights reserved © Abdallah Ashraf El Bayoumi
