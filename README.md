# Ogun USA — Website

A dark, technical, cinematic marketing site for **Ogun USA**, a
technology startup focused on High Velocity Engineering: computational design,
AI-assisted optimization, and additive manufacturing.

Built with **Vite + React + React Router**. No backend required to run.

## Stack

- Vite 5 + React 18
- React Router 6 (clean URLs: `/`, `/mission`, `/join`, `/contact`)
- Plain CSS with design tokens (no framework) — see `src/styles/global.css`
- Fonts: Space Grotesk (display), Inter (body), Sansation (logo, with fallback)

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs to dist/
npm run preview  # preview the production build
```

## Project structure

```
src/
  components/        Reusable building blocks
    Header / Footer  Shared chrome (sticky nav + mobile menu, footer columns)
    Hero             Full-bleed hero with video/image background + overlay
    Section          Padded section container w/ scroll-reveal
    SectionHeading   Kicker + heading block
    CapabilityGrid   3-column capability cards (stacks on mobile)
    ProductMedia     Two side-by-side replaceable media slots
    MediaPlaceholder Video slot OR abstract technical placeholder (no stock art)
    JobPosting       Data-driven role posting
    ContactForm      Form with mailto fallback (see "Backend" below)
    Card / Button    Primitives
  pages/             Home, Mission, Join, Contact, NotFound
  hooks/             useSeo (per-page <title>/meta), useReveal (fade-in)
  styles/            global.css design tokens + base
public/              favicon, SPA redirects
```

## Design system

Tokens live in `src/styles/global.css`:

- Backgrounds `#000 / #0A0A0A / #111`, text `#FFF / #B8B8B8 / #777`
- Borders `#2A2A2A`, accent electric blue `#00AEEF` (used sparingly)
- Buttons: primary (white outline → inverts on hover), secondary (text + arrow)
- Motion is subtle: gentle fade-in on scroll, hover states, dark video overlay.
  Honors `prefers-reduced-motion`.

## Replacing media

All hero/product/section visuals use `MediaPlaceholder`, which renders an
abstract technical treatment when no source is supplied. To drop in real assets:

- **Hero**: pass `videoSrc` and `poster` to `<Hero>` in `src/pages/Home.jsx`.
- **Product / capability media**: add `src` (and optional `poster`) to the
  items arrays in `Home.jsx` / `Mission.jsx`.

Optimize videos, provide poster images, and prefer lazy-loaded compressed media.

## Backend (contact form)

No backend is configured yet. The contact form builds a `mailto:` to
`contact@ogunusa.com` and shows a clear confirmation — it never silently fails.

**TODO:** replace `handleSubmit` in `src/components/ContactForm.jsx` with a POST
to a form endpoint (serverless function, Formspree, etc.) when ready.

## Deploying

The app is a static SPA. `public/_redirects` (Netlify) and `vercel.json`
(Vercel) are included so deep links fall back to `index.html`.

## Accessibility

Semantic landmarks, one `<h1>` per page, skip link, keyboard-accessible nav,
visible focus states, labelled form inputs, alt/aria text on meaningful media,
and sufficient contrast on the dark palette.
