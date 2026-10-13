# Lehesepp

Website for Lehesepp, a one-person web studio for businesses in Estonia.
Next.js (App Router) + TypeScript + Tailwind CSS v4 + Motion. Estonian at `/`, English at `/en`.

## Develop

```bash
npm install
npm run dev
```

## Where things live

- Copy: `src/i18n/dictionaries/et.ts` (Estonian, source) and `en.ts`. Every visible string is there.
- Business facts (email, phone): `src/lib/site.ts`
- Prospect previews (`/eelvaade/<slug>`, noindex, unlinked): `src/content/previews.ts`
- Form submit handler (Formspree): `src/lib/submitQuote.ts`
- Design system: `DESIGN.md`
- Demo photo sources: `docs/image-sources.md`; fonts: `docs/fonts.md`

## Before launch (search the code for `TODO:`)

- [x] Real email and phone in `src/lib/site.ts`
- [x] Quote form sends through Formspree (`src/lib/submitQuote.ts`)
- [ ] Formspree form ID in `formspreeId` in `src/lib/site.ts`
- [x] Name the form provider in the privacy policy (both dictionaries)
- [x] Robert's photo in `src/components/sections/About.tsx`
- [x] Production domain https://lehesepp.ee (override with `NEXT_PUBLIC_SITE_URL`)
- [ ] Confirm the timeline answer in the FAQ
- [ ] Replace the example prospect in `src/content/previews.ts`

## Deploy

Every push to `main` builds a static export (`out/`) and publishes it to GitHub Pages at https://lehesepp.ee via `.github/workflows/deploy.yml`.
