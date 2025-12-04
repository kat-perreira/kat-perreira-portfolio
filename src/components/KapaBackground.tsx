/**
 * KapaBackground Component
 * 
 * Applies a subtle kapa-inspired geometric pattern.
 * Kapa is traditional Hawaiian bark cloth featuring
 * geometric patterns like triangles, lines, and diamonds.
 * 
 * The pattern uses extremely low contrast (forestSoft on forest)
 * to avoid interfering with text readability.
 * 
 * Props:
 * - children: Content to render
 * - className: Additional classes
 * - pattern: 'triangles' | 'diamonds' | 'lines' (default: 'triangles')
 */

interface KapaBackgroundProps {
  children: React.ReactNode;
  className?: string;
  pattern?: 'triangles' | 'diamonds' | 'lines';
}

// Pattern SVGs encoded for CSS backgrounds
// Uses forestSoft (#0b3b32) on forest (#062b24) for minimal contrast
const patterns = {
  // Traditional triangle/mountain pattern
  triangles: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 5 L35 35 L5 35 Z' fill='none' stroke='%230b3b32' stroke-width='0.5' opacity='0.4'/%3E%3C/svg%3E")`,
  
  // Diamond/rhombus pattern
  diamonds: `url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16 4 L28 16 L16 28 L4 16 Z' fill='none' stroke='%230b3b32' stroke-width='0.5' opacity='0.35'/%3E%3C/svg%3E")`,
  
  // Horizontal line pattern
  lines: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='0' y1='10' x2='20' y2='10' stroke='%230b3b32' stroke-width='0.5' opacity='0.3'/%3E%3C/svg%3E")`,
};

export function KapaBackground({ 
  children, 
  className = "",
  pattern = 'triangles'
}: KapaBackgroundProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Pattern overlay */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{ backgroundImage: patterns[pattern] }}
        aria-hidden="true"
      />
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

/**
 * Alternative: CSS class approach
 * Add this to globals.css if you prefer utility classes:
 * 
 * .bg-kapa-triangles {
 *   background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 5 L35 35 L5 35 Z' fill='none' stroke='%230b3b32' stroke-width='0.5' opacity='0.4'/%3E%3C/svg%3E");
 * }
 * 
 * .bg-kapa-diamonds {
 *   background-image: url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16 4 L28 16 L16 28 L4 16 Z' fill='none' stroke='%230b3b32' stroke-width='0.5' opacity='0.35'/%3E%3C/svg%3E");
 * }
 */
