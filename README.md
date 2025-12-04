# Kat Perreira Portfolio

Personal portfolio website built with Next.js 16, TypeScript, and Tailwind CSS. Features an MDX-powered blog.

## Getting Started

### Prerequisites

- Node.js 18+
- npm (or pnpm/yarn)

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

## Project Structure

```
├── content/
│   └── posts/              # Blog posts (MDX files)
│       └── hello-world.mdx
├── src/
│   ├── app/                # Next.js App Router pages
│   │   ├── layout.tsx      # Root layout with sticky sidebar
│   │   ├── page.tsx        # Home page
│   │   ├── about/
│   │   ├── projects/
│   │   ├── talks/
│   │   ├── writing/
│   │   ├── blog/           # Blog listing + [slug] pages
│   │   └── contact/
│   ├── components/         # Reusable components
│   │   ├── Sidebar.tsx     # Sticky navigation sidebar
│   │   ├── Hero.tsx        # Homepage hero section
│   │   ├── KapaBackground.tsx
│   │   ├── MDXComponents.tsx
│   │   └── Section.tsx
│   └── lib/
│       └── posts.ts        # Blog post utilities
```

## Writing Blog Posts

Blog posts are written in MDX (Markdown + React components) and stored in `content/posts/`.

### Create a New Post

1. Create a new `.mdx` file in `content/posts/`:

```bash
touch content/posts/my-new-post.mdx
```

2. Add frontmatter and content:

```mdx
---
title: "Your Post Title"
date: "2024-12-04"
description: "A short description for previews and SEO"
tags: ["engineering", "career"]
published: true
mediumUrl: "https://medium.com/@you/article"  # optional
---

Your content here! Supports **markdown** formatting.

## Subheadings work

- Lists too
- With bullets

> And blockquotes for emphasis

You can also use custom components like:

<Callout>
This is a highlighted callout box for important information.
</Callout>
```

### Frontmatter Options

| Field | Required | Description |
|-------|----------|-------------|
| `title` | Yes | Post title |
| `date` | Yes | Publication date (YYYY-MM-DD) |
| `description` | Yes | Short description for previews |
| `tags` | No | Array of tags for categorization |
| `published` | No | Set to `false` to hide (draft mode) |
| `mediumUrl` | No | Link to Medium version (for cross-posts) |

### Cross-posting from Medium

If you publish on Medium first, you can cross-post to your blog:

1. Copy your Medium article content
2. Create a new `.mdx` file
3. Add `mediumUrl` in frontmatter to link back to Medium
4. Your blog will show "Also on Medium" badge

## Style Guide

For the complete design system documentation, see **[`src/styles/STYLE_GUIDE.md`](src/styles/STYLE_GUIDE.md)**.

### Brand Colors

| Name | Variable | Hex | Usage |
|------|----------|-----|-------|
| **Forest** | `$forest` | `#062b24` | Primary background |
| **Forest Soft** | `$forest-soft` | `#0b3b32` | Secondary background |
| **Sand** | `$sand` | `#f4f4f1` | Primary text |
| **Gold** | `$gold` | `#d3b379` | Accent, links, highlights |
| **Clay** | `$clay` | `#c88f85` | Secondary accent |

### Typography

| Font | Variable | Usage |
|------|----------|-------|
| Cormorant Garamond | `$font-serif` | Headings |
| Source Sans 3 | `$font-sans` | Body text |
| JetBrains Mono | `$font-mono` | Code |

### Spacing Scale

Based on 4px grid: `$spacing-1` (4px) through `$spacing-32` (128px)

### Breakpoints

| Mixin | Min Width |
|-------|-----------|
| `@include sm` | 640px |
| `@include md` | 768px |
| `@include lg` | 1024px |
| `@include xl` | 1280px |

### Accessibility

- All color combinations meet **WCAG AA** contrast requirements
- Focus states on all interactive elements
- Keyboard navigation support

## Tech Stack

- [Next.js 16](https://nextjs.org/) - React framework (App Router)
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Sass](https://sass-lang.com/) - Styling with CSS Modules
- [MDX](https://mdxjs.com/) via `next-mdx-remote` - Blog content
- [gray-matter](https://github.com/jonschlinkert/gray-matter) - Frontmatter parsing
- [reading-time](https://github.com/ngryman/reading-time) - Read time estimation

## Styling Architecture

This project uses **Sass with CSS Modules** for complete styling control.

### File Structure

```
src/
├── styles/
│   ├── _variables.scss   # Colors, typography, spacing, breakpoints
│   ├── _mixins.scss      # Reusable style patterns
│   ├── _pages.scss       # Shared page styles
│   └── globals.scss      # Global styles and reset
├── components/
│   └── *.module.scss     # Component-specific styles
└── app/
    └── */page.module.scss  # Page-specific styles
```

### Using Variables and Mixins

```scss
@use '../styles/variables' as *;
@use '../styles/mixins' as *;

.myComponent {
  color: $sand;
  background: $forest;
  
  @include md {
    // Styles for medium screens and up
  }
}
```

### Available Mixins

- `@include sm/md/lg/xl` - Responsive breakpoints
- `@include heading-1/2/3` - Typography presets
- `@include button-outline` - Button styles
- `@include card` - Card container styles
- `@include link-underline` - Animated link underline

## Deployment

Deploy to Vercel:

```bash
npx vercel
```

Or connect your GitHub repo to [Vercel](https://vercel.com) for automatic deployments.
