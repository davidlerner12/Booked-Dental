# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server
npm run build      # Production build
npm run build:dev  # Development build
npm run lint       # ESLint
npm run test       # Run tests once (Vitest)
npm run test:watch # Run tests in watch mode
npm run preview    # Preview production build
```

To run a single test file:
```bash
npx vitest run src/path/to/file.test.ts
```

## Architecture

This is a single-page marketing website for **Booked.Dental**, a dental clinic UGC/marketing service. It has two routes:

- `/` → [Index.tsx](src/pages/Index.tsx) — landing page composed of sequential marketing sections
- `/book` → [BookingPage.tsx](src/pages/BookingPage.tsx) — Cal.com embed for booking strategy calls

**App shell** ([App.tsx](src/App.tsx)): Sets up `QueryClientProvider`, `TooltipProvider`, dual toasters (shadcn + Sonner), React Router, and a `RouteTracker` component that fires analytics on every route change.

**Sections** live in [src/components/sections/](src/components/sections/) — each is a self-contained React component. The landing page renders them in a fixed order defined in `Index.tsx`.

**UI primitives** in [src/components/ui/](src/components/ui/) are shadcn/ui components — do not manually edit these; add new ones via `npx shadcn@latest add <component>`.

**Analytics** ([src/lib/analytics.ts](src/lib/analytics.ts)): Thin wrappers around `window.gtag` (GA4 + Google Ads) and `window.fbq` (Meta Pixel). The tracking IDs are hardcoded in that file. Key composite events: `trackBookingCTA()` (fired on /book page load) and `trackBookingConfirmed()` (fired on Cal.com booking success callback).

## Styling

- Dark theme only — CSS variables defined in [src/index.css](src/index.css), all referencing HSL values
- Primary color is gold (`hsl(42 100% 55%)`)
- Custom utility classes: `.text-gradient-gold`, `.bg-gradient-gold`, `.shadow-gold`, `.border-gold-subtle`
- Fonts: `font-display` = Space Grotesk (headings), `font-body` = Inter (body text)
- Custom Tailwind animations: `fade-up`, `pulse-gold`

## Path Alias

`@/` maps to `src/` — use this for all imports within `src/`.

## Testing

Tests use Vitest + jsdom + React Testing Library. Test files go in `src/**/*.{test,spec}.{ts,tsx}`. Setup file: [src/test/setup.ts](src/test/setup.ts).
