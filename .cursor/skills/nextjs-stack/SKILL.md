---
name: nextjs-stack
description: Full-stack development with Next.js 15 App Router, TypeScript, and Tailwind CSS v4. Use when creating pages, components, layouts, API routes, data fetching, or styling in this project. Covers file conventions, Server/Client Components, Tailwind v4 CSS-first config, and TypeScript strict patterns.
---

# Next.js 15 + TypeScript + Tailwind CSS v4

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout — html, body, global providers
│   ├── page.tsx            # Home page (/)
│   ├── globals.css         # Tailwind @import + @theme tokens
│   └── [feature]/
│       ├── page.tsx        # Route: /feature
│       ├── layout.tsx      # Nested layout (optional)
│       └── loading.tsx     # Suspense fallback (optional)
├── components/
│   ├── ui/                 # Primitives: Button, Card, Input…
│   └── [feature]/          # Feature-specific components
├── hooks/                  # Custom React hooks (use*.ts)
├── lib/
│   ├── utils.ts            # cn() helper + misc utilities
│   └── api.ts              # Server-side fetch helpers
└── types/                  # Shared TypeScript types
```

## Creating a New Page

```tsx
// src/app/products/page.tsx
import { ProductList } from '@/components/products/ProductList'

async function getProducts() {
  const res = await fetch('https://api.example.com/products', {
    next: { revalidate: 60 },
  })
  return res.json()
}

export const metadata = { title: 'Products' }

export default async function ProductsPage() {
  const products = await getProducts()
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      <ProductList items={products} />
    </main>
  )
}
```

## Creating a Component

```tsx
// src/components/ui/Button.tsx
import { cn } from '@/lib/utils'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'ghost' | 'destructive'
  size?: 'sm' | 'md' | 'lg'
}

export function Button({ variant = 'primary', size = 'md', className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2',
        variant === 'primary'     && 'bg-brand-500 text-white hover:bg-brand-600',
        variant === 'ghost'       && 'bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800',
        variant === 'destructive' && 'bg-red-500 text-white hover:bg-red-600',
        size === 'sm' && 'h-8 px-3 text-sm',
        size === 'md' && 'h-10 px-4 text-sm',
        size === 'lg' && 'h-12 px-6 text-base',
        className,
      )}
      {...props}
    />
  )
}
```

## Tailwind v4 — CSS-first Config

```css
/* src/app/globals.css */
@import "tailwindcss";

@theme {
  --color-brand-500: oklch(0.62 0.19 260);
  --color-brand-600: oklch(0.53 0.21 260);
  --font-sans: "Inter", sans-serif;
}

@custom-variant dark (&:where(.dark, .dark *));
```

No `tailwind.config.js` needed in v4 — all tokens live in CSS.

## API Route

```ts
// src/app/api/items/route.ts
import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ items: [] })
}

export async function POST(request: Request) {
  const body = await request.json()
  return NextResponse.json({ created: body }, { status: 201 })
}
```

## cn() Utility (required)

```ts
// src/lib/utils.ts
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

Install: `npm install clsx tailwind-merge`

## Key Rules

- Server Components by default; `'use client'` only at the leaves
- `next/image` for images, `next/link` for navigation
- Absolute imports via `@/*`
- No `tailwind.config.js` in v4 — use `@theme` in CSS
- No `any` in TypeScript — use `unknown` + type narrowing
- `cn()` for conditional class composition — never string concatenation
