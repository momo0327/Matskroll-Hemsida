# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 16 application using the App Router, TypeScript, React 19, and Tailwind CSS v4. The project appears to be a website for "Matskroll" (Swedish for food scroll/menu) based on the directory name.

## Key Technologies

- **Next.js 16.1.5**: App Router architecture
- **React 19.2.3**: Latest React with new concurrent features
- **TypeScript 5**: Strict mode enabled
- **Tailwind CSS v4**: Using the new PostCSS plugin architecture (`@tailwindcss/postcss`)
- **ESLint 9**: Flat config format with Next.js presets

## Development Commands

```bash
# Start development server (runs on http://localhost:3000)
npm run dev

# Production build
npm run build

# Start production server (must run build first)
npm start

# Run linter
npm run lint
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx       # Root layout with font loading and metadata
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles with Tailwind v4 and CSS variables
```

### App Router Architecture

- Uses Next.js App Router (app directory)
- Root layout in `src/app/layout.tsx` sets up:
  - Geist Sans and Geist Mono fonts from `next/font/google`
  - CSS variable injection for fonts (`--font-geist-sans`, `--font-geist-mono`)
  - Global metadata
- Route components are in `src/app/` with `page.tsx` files

### Styling System

- **Tailwind CSS v4** with PostCSS plugin
- Theme configuration uses inline `@theme` directive in `globals.css`
- CSS custom properties for theming:
  - `--background` and `--foreground` colors
  - Dark mode via `prefers-color-scheme` media query
  - Font variables: `--font-geist-sans` and `--font-geist-mono`
- Tailwind utilities reference custom properties (e.g., `bg-background`, `text-foreground`)

### TypeScript Configuration

- Path alias: `@/*` maps to `./src/*`
- Strict mode enabled
- Module resolution: bundler
- JSX: react-jsx (new JSX transform)
- Target: ES2017

## Important Patterns

### Font Loading

Fonts are loaded in the root layout using `next/font/google` and exposed as CSS variables:

```tsx
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
```

Apply to elements via className: `${geistSans.variable}`

### Dark Mode

Dark mode is automatic based on system preferences via CSS media query `(prefers-color-scheme: dark)`. Colors are managed through CSS custom properties that change based on the media query.

### ESLint Configuration

Uses the new flat config format (`eslint.config.mjs`) with:
- `eslint-config-next/core-web-vitals`
- `eslint-config-next/typescript`
- Global ignores for build directories

## Tailwind CSS v4 Notes

This project uses Tailwind v4, which has breaking changes from v3:
- Import via `@import "tailwindcss"` in CSS files (not `@tailwind` directives)
- Configuration via `@theme` directive in CSS (not `tailwind.config.js`)
- PostCSS plugin is `@tailwindcss/postcss`
