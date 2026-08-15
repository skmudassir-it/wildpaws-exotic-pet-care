# WildPaws Exotic Pet Care

Veterinary-supervised exotic pet care for reptiles, birds and small mammals — husbandry programs, avian health, small mammal boarding, exotic grooming, dietary planning, habitat design & setup, and in-home pet sitting.

Live: https://wildpaws-exotic-pet-care.amsitservices.com

## Stack

- Next.js 16 (App Router) + TypeScript strict
- Tailwind CSS v4 (CSS-first `@theme` config), shadcn/ui components (Radix)
- framer-motion animations (respects `prefers-reduced-motion`)
- lucide-react + Font Awesome icons
- react-hook-form + zod for quote/contact forms, sonner toasts
- embla-carousel-react sliders
- next/font self-hosted (Inter + Fraunces)
- Route-based `/sitemap.xml`, `/robots.txt`, JSON-LD LocalBusiness schema

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Pages

Home, Services (grid + 7 detail pages), About, Projects (case studies), Pricing, Contact, custom 404, `POST /api/quote` (zod-validated).
