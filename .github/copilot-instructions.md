# Boiler Room - AI Coding Instructions

## Project Overview

Event venue landing page built with **Next.js 16** (App Router), **React 19**, **TypeScript**, and **Tailwind CSS v4**. Features client-side content management via localStorage.

**Monorepo structure**: Root `package.json` installs shared dependencies (lucide-react). App lives in `front/` subdirectory with its own package.json.

## Architecture

- **Single-page app**: All components rendered on homepage via [page.tsx](../front/src/app/page.tsx)
- **Client-only**: Uses `'use client'` directive - no server components yet
- **State management**: localStorage for persistence, React state via `useState`
- **Data flow**: [lib/data.ts](../front/src/lib/data.ts) → localStorage → App state → Component props

### Key Components

All components in [src/components/](../front/src/components/) follow this pattern:
- Pure presentation components accepting typed props
- Prop interfaces defined inline (e.g., `ServicesProps`, `HeaderProps`)
- Use Tailwind utility classes for styling
- No internal state or side effects

Component order: Header → Hero → Gallery → Services → Testimonials → Contact → Footer

## Development Workflow

**Working directory**: Always `cd front/` before running commands

```bash
# Start dev server (port 3000)
npm run dev

# Build for production
npm run build

# Run production build
npm start

# Lint
npm run lint
```

**Note**: Root package.json exists only for shared dependencies. All dev commands run from `front/`.

## Styling Conventions

**Tailwind v4** with custom configuration:

- **Colors**: `primary` (black), `secondary` (golden), `accent`, `light`
- **Fonts**: Playfair Display (headings), Montserrat (body) - imported in [globals.css](../front/src/app/globals.css)
- **Custom animations**: `animate-fadeInUp`, `animate-fadeInUp-delay`, `animate-wave` (defined in globals.css)
- **Responsive pattern**: Mobile-first with `sm:`, `lg:` breakpoints

Apply hover effects consistently: `hover:shadow-2xl hover:-translate-y-3 transition-all duration-300`

## TypeScript Patterns

**Interfaces over types**: All data structures use `interface` keyword

**Type organization**: 
- Data model interfaces in [src/interfaces/](../front/src/interfaces/) (IPackage, IService, ITestimonial, ISalonData)
- Component props inline with component definition
- Central data type is `SalonData` - main state container

**Path aliases**: Use `@/` for imports from `src/` (configured in tsconfig.json)

## Image Handling

- Next.js Image component with `fill` prop for responsive images
- Unsplash remote patterns allowed in [next.config.ts](../front/next.config.ts)
- Local images expected in `public/` (referenced as `/image.jpg`)
- Always include `alt` and `priority` for above-fold images

## Data Management

**localStorage schema**: Single key `salonData` stores entire `SalonData` object

**Default data**: [lib/data.ts](../front/src/lib/data.ts) contains seed data with Spanish content

**Save flow**: Component → `saveData()` → localStorage → state update

**Admin panel**: Currently commented out in [page.tsx](../front/src/app/page.tsx) - when implementing, follow existing save/load pattern

## Special Considerations

- **React Compiler enabled**: `reactCompiler: true` in next.config.ts (Next.js 16 feature)
- **Spanish content**: All user-facing text in Spanish (e.g., `'Servicios'`, `'Cargando...'`)
- **Loading state**: Show centered `"Cargando..."` message while data loads
- **Error handling**: Use `console.error` + `alert()` for save failures

## Component Guidelines

When creating new components:
1. Accept props matching `SalonData` structure
2. Use Tailwind's `max-w-7xl mx-auto` for content centering
3. Follow section structure: header + decorative line + content grid
4. Export as default function component
5. Import interfaces with named imports from `@/interfaces/`
