<p align="center"><img src="public/logo-full.svg" alt="Trabz" height="64"></p>

# Trabz Landing

![License: MIT](https://img.shields.io/badge/license-MIT-green) ![Next.js](https://img.shields.io/badge/Next.js-16-black) ![React](https://img.shields.io/badge/React-19-61dafb) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8) ![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6)

Bilingual (English / Filipino) marketing website for Trabz, a jobs platform for blue-collar workers and employers in the Philippines. It includes pages for workers, businesses, OFWs, pricing, press, legal notices, a contact form, and a markdown-based blog.

## Stack

Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4, next-intl for i18n, Framer Motion, markdown blog via gray-matter and marked, Vitest for tests.

## Getting started

```bash
npm install
cp .env.example .env.local
npm run dev        # http://localhost:3000
```

Other scripts: `npm run build`, `npm start`, `npm run lint`, `npm test`.

## Environment variables

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL (sitemap, metadata) |
| `NEXT_PUBLIC_API_URL` | Backend API used by the contact form |
| `NEXT_PUBLIC_APP_STORE_URL`, `NEXT_PUBLIC_PLAY_STORE_URL` | Download links |
| `NEXT_PUBLIC_GA_ID`, `NEXT_PUBLIC_META_PIXEL_ID` | Optional analytics |

## Structure

```
src/app/[locale]/   localized pages
src/components/     layout, sections, and UI components
src/lib/            blog, metadata, analytics helpers
src/i18n/           next-intl routing and request config
messages/           en.json, fil.json translations
content/blog/       markdown posts
```

## License

MIT, see [LICENSE](LICENSE).
