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
- Industry landing pages (`/kodulehe-tegemine-…`, Estonian only): `src/content/industries.ts`
- Visit statistics (Umami, cookieless): `src/lib/analytics.ts`
- Form submit handler (Formspree): `src/lib/submitQuote.ts`
- Design system: `DESIGN.md`
- Demo photo sources: `docs/image-sources.md`; fonts: `docs/fonts.md`

## Before launch (search the code for `TODO:`)

- [x] Real email and phone in `src/lib/site.ts`
- [x] Quote form sends through Formspree (`src/lib/submitQuote.ts`)
- [x] Formspree form ID in `formspreeId` in `src/lib/site.ts`
- [x] Name the form provider in the privacy policy (both dictionaries)
- [x] Robert's photo in `src/components/sections/About.tsx`
- [x] Production domain https://lehesepp.ee (override with `NEXT_PUBLIC_SITE_URL`)
- [x] Confirm the timeline answer in the FAQ
- [x] Remove the example prospect from `src/content/previews.ts`
- [ ] Umami website ID in `umami.websiteId` in `src/lib/site.ts` (visit statistics)

## Deploy

Every push to `main` builds a static export (`out/`) and publishes it to GitHub Pages at https://lehesepp.ee via `.github/workflows/deploy.yml`.
