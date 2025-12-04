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

## Push to GitHub (First Time)

1. **Create a new repository on GitHub**
   - Go to [github.com/new](https://github.com/new)
   - Name it `kat-perreira-portfolio` (or your preferred name)
   - Leave it empty — don't add README, .gitignore, or license

2. **Initialize and push from your terminal**

```bash
# Navigate to your project
cd /Users/crow/src/kat-perreira-portfolio

# Initialize git (if not already)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: portfolio scaffold"

# Add your GitHub repo as remote (replace with your username)
git remote add origin https://github.com/YOUR_USERNAME/kat-perreira-portfolio.git

# Push to main branch
git push -u origin main
```

> **Note:** If your default branch is `master`, use `git push -u origin master` instead.

## Deployment

Deploy to Vercel:

```bash
npx vercel
```

Or connect your GitHub repo to [Vercel](https://vercel.com) for automatic deployments.

## Tech Stack

- [Next.js 16](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS 4](https://tailwindcss.com/) - Styling
