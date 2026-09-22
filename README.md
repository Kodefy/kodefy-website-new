# Kodefy Website

Clean Next.js rebuild of the Kodefy marketing website. The MVP contains a complete bilingual homepage and retained legal pages, with routing and SEO generated from a central localized route registry.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. The root route redirects to Indonesian at `/id`.

## Public MVP routes

- `/en` and `/id`
- `/en/terms` and `/id/syarat-ketentuan`
- `/en/privacy` and `/id/kebijakan-privasi`

Add future public pages to `lib/routes.ts` first, then connect the same logical page identity to its localized paths.

## Quality checks

```bash
npm run lint
npx tsc --noEmit
npm run build
```

The production target is Vercel. The canonical production origin is `https://kodefy.id`.
