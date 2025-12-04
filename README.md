# Kat Perreira Portfolio

Personal portfolio website built with Next.js 16, TypeScript, and Tailwind CSS.

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
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout with sticky sidebar
│   ├── page.tsx            # Home page
│   ├── about/
│   ├── projects/
│   ├── talks/
│   ├── writing/
│   └── contact/
├── components/             # Reusable components
│   ├── Sidebar.tsx         # Sticky navigation sidebar
│   ├── IwaBirds.tsx        # Decorative ʻIwa bird SVGs
│   ├── KapaBackground.tsx  # Kapa pattern background wrapper
│   └── Section.tsx         # Section container component
```

## Brand Colors

| Name         | Hex       | Usage              |
|--------------|-----------|-------------------|
| `forest`     | `#062b24` | Main background   |
| `forestSoft` | `#0b3b32` | Subtle variation  |
| `sand`       | `#f4f4f1` | Primary text      |
| `gold`       | `#d3b379` | Accent/links      |
| `clay`       | `#c88f85` | Subtle accent     |


## Tech Stack

- [Next.js 16](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS 4](https://tailwindcss.com/) - Styling
