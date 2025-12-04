/**
 * KapaBackground Component
 * 
 * A wrapper that applies a subtle kapa-inspired pattern.
 * Kapa is traditional Hawaiian bark cloth with geometric patterns.
 * 
 * The pattern is very low-opacity (0.03) to maintain readability.
 * 
 * Props:
 * - children: Content to render inside
 * - className: Additional CSS classes
 * - intensity: Pattern opacity ('subtle' | 'medium') - default 'subtle'
 */

interface KapaBackgroundProps {
  children: React.ReactNode;
  className?: string;
  intensity?: 'subtle' | 'medium';
}

export function KapaBackground({ 
  children, 
  className = "",
  intensity = 'subtle' 
}: KapaBackgroundProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Kapa pattern overlay */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f4f4f1' fill-opacity='${intensity === 'subtle' ? '0.03' : '0.05'}'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      />
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

