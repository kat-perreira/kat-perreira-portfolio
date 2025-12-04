# Style Guide

A comprehensive guide to the design system for Kat Perreira's portfolio.

---

## Colors

### Brand Palette

| Name | Variable | Hex | Usage |
|------|----------|-----|-------|
| **Forest** | `$forest` | `#062b24` | Primary background |
| **Forest Soft** | `$forest-soft` | `#0b3b32` | Secondary background, subtle elements |
| **Sand** | `$sand` | `#f4f4f1` | Primary text |
| **Gold** | `$gold` | `#d3b379` | Accent, links, highlights |
| **Clay** | `$clay` | `#c88f85` | Secondary accent (reserved) |

### Opacity Variants

Sand and gold have pre-defined opacity variants:

```scss
// Sand variants
$sand-90, $sand-80, $sand-70, $sand-60, $sand-50
$sand-40, $sand-30, $sand-20, $sand-10, $sand-05

// Gold variants
$gold-50, $gold-30, $gold-10
```

### Color Contrast (WCAG AA Compliant)

| Combination | Contrast Ratio | Use Case |
|-------------|----------------|----------|
| Sand on Forest | ~12:1 ✅ | Body text |
| Gold on Forest | ~6:1 ✅ | Accent text, links |
| Near-black on Gold | ~8:1 ✅ | Primary buttons |
| Sand on Forest-soft | ~10:1 ✅ | Secondary buttons |

---

## Typography

### Font Families

| Variable | Font | Usage |
|----------|------|-------|
| `$font-serif` | Cormorant Garamond | Headings, display text |
| `$font-sans` | Source Sans 3 | Body text, UI elements |
| `$font-mono` | JetBrains Mono | Code, technical content |

### Font Sizes

| Variable | Size | Typical Use |
|----------|------|-------------|
| `$text-xs` | 0.75rem (12px) | Labels, tags |
| `$text-sm` | 0.875rem (14px) | Secondary text, buttons |
| `$text-base` | 1rem (16px) | Body text |
| `$text-lg` | 1.125rem (18px) | Lead paragraphs |
| `$text-xl` | 1.25rem (20px) | Small headings |
| `$text-2xl` | 1.5rem (24px) | H3 |
| `$text-3xl` | 1.875rem (30px) | H2 |
| `$text-4xl` | 2.25rem (36px) | H1 (mobile) |
| `$text-5xl` | 3rem (48px) | H1 (desktop) |
| `$text-6xl` | 3.75rem (60px) | Hero text |

### Line Heights

| Variable | Value | Use Case |
|----------|-------|----------|
| `$leading-tight` | 1.25 | Headings |
| `$leading-snug` | 1.375 | Subheadings |
| `$leading-normal` | 1.5 | UI text |
| `$leading-relaxed` | 1.625 | Body text |
| `$leading-loose` | 2 | Spacious text |

---

## Spacing

Based on a 4px grid system:

| Variable | Size | Pixels |
|----------|------|--------|
| `$spacing-1` | 0.25rem | 4px |
| `$spacing-2` | 0.5rem | 8px |
| `$spacing-3` | 0.75rem | 12px |
| `$spacing-4` | 1rem | 16px |
| `$spacing-5` | 1.25rem | 20px |
| `$spacing-6` | 1.5rem | 24px |
| `$spacing-8` | 2rem | 32px |
| `$spacing-10` | 2.5rem | 40px |
| `$spacing-12` | 3rem | 48px |
| `$spacing-16` | 4rem | 64px |
| `$spacing-20` | 5rem | 80px |
| `$spacing-24` | 6rem | 96px |
| `$spacing-32` | 8rem | 128px |

---

## Breakpoints

Mobile-first responsive design:

| Mixin | Min Width | Target |
|-------|-----------|--------|
| `@include sm` | 640px | Large phones |
| `@include md` | 768px | Tablets |
| `@include lg` | 1024px | Laptops |
| `@include xl` | 1280px | Desktops |

### Usage

```scss
.element {
  padding: $spacing-4;
  
  @include md {
    padding: $spacing-8;
  }
  
  @include lg {
    padding: $spacing-12;
  }
}
```

---

## Components

### Buttons

**Primary Button** (high emphasis)
- Background: Gold
- Text: Near-black (#0a0a0a)
- Use: Main CTAs (Resume, primary actions)

**Secondary Button** (medium emphasis)
- Background: Forest-soft
- Border: Sand at 30% opacity
- Text: Sand
- Use: Secondary actions

**Outline Button** (low emphasis)
- Background: Transparent
- Border: Sand
- Text: Sand
- Use: Tertiary actions

### Cards

```scss
@include card;
// Applies: padding, border, hover state
```

- Border: 1px solid `$sand-10`
- Hover: Border changes to `$gold-30`
- Padding: `$spacing-6` (mobile), `$spacing-8` (desktop)

### Links

**Standard Link**
- Color: `$gold`
- Hover: `$sand`

**Underline Link** (use `@include link-underline`)
- Animated underline on hover
- Gold underline color

---

## Patterns

### Kapa Background

Subtle Hawaiian-inspired geometric patterns:

```scss
// In component
<KapaBackground pattern="triangles">
  {children}
</KapaBackground>

// Available patterns: 'triangles', 'diamonds', 'lines'
```

Opacity is intentionally low (~0.15) to maintain text readability.

---

## Accessibility

### Focus States

All interactive elements have visible focus indicators:
- Outline: 2px solid (gold or sand)
- Outline offset: 2px

### Color Contrast

All text/background combinations meet WCAG AA standards:
- Normal text: 4.5:1 minimum
- Large text: 3:1 minimum

### Keyboard Navigation

- All interactive elements are focusable
- Focus order follows visual order
- Skip links available (if implemented)

---

## File Structure

```
src/styles/
├── _variables.scss    # Colors, typography, spacing tokens
├── _mixins.scss       # Reusable patterns and utilities
├── _pages.scss        # Shared page styles
├── globals.scss       # Reset, base styles, global classes
└── STYLE_GUIDE.md     # This file
```

---

## Quick Reference

### Import in Components

```scss
@use '../styles/variables' as *;
@use '../styles/mixins' as *;
```

### Common Patterns

```scss
// Heading
.title {
  font-family: $font-serif;
  font-size: $text-3xl;
  color: $sand;
  
  @include md {
    font-size: $text-4xl;
  }
}

// Body text
.text {
  color: $sand-70;
  line-height: $leading-relaxed;
}

// Gold accent link
.link {
  color: $gold;
  @include link-underline;
  
  &:hover {
    color: $sand;
  }
}

// Card container
.card {
  @include card;
}

// Responsive container
.container {
  padding: $spacing-6;
  
  @include lg {
    padding: $spacing-12;
  }
}
```

