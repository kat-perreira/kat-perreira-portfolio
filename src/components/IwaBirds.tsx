/**
 * IwaBirds Component
 * 
 * Minimalist, geometric ʻiwa (frigate bird) silhouettes.
 * The ʻiwa is a sacred bird in Hawaiian culture, known for
 * its distinctive angular wings and forked tail.
 * 
 * Props:
 * - className: Control size/position with Tailwind (e.g. "w-64 h-48")
 */

interface IwaBirdsProps {
  className?: string;
}

export function IwaBirds({ className = "" }: IwaBirdsProps) {
  return (
    <svg
      className={`text-gold ${className}`}
      width="100%"
      height="100%"
      viewBox="0 0 200 150"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Bird 1 - Large, foreground */}
      <g className="animate-float">
        <path d="M45 55 L5 35 L50 50 L95 30 L55 55 L50 75 Z" />
      </g>
      
      {/* Bird 2 - Medium, middle */}
      <g className="animate-float-delayed" style={{ opacity: 0.7 }}>
        <path d="M130 40 L100 25 L132 37 L165 22 L135 42 L132 55 Z" />
      </g>
      
      {/* Bird 3 - Small, background */}
      <g style={{ opacity: 0.4, animationDelay: '2s' }} className="animate-float">
        <path d="M160 85 L140 75 L161 83 L182 72 L163 87 L161 95 Z" />
      </g>
    </svg>
  );
}

/**
 * Single IwaBird - for smaller decorative uses
 */
export function IwaBird({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`text-gold ${className}`}
      width="100%"
      height="100%"
      viewBox="0 0 50 30"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M22 12 L2 2 L24 10 L48 0 L26 14 L24 28 Z" />
    </svg>
  );
}

/**
 * IwaBirdsHero - Larger composition for hero sections
 * Matches the wireframe layout with birds on the right side
 */
export function IwaBirdsHero({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none select-none ${className}`} aria-hidden="true">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 300 280"
        fill="currentColor"
        className="text-gold"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Large bird - upper right */}
        <g className="animate-float" style={{ opacity: 0.85 }}>
          <path d="M180 70 L100 20 L185 60 L270 5 L190 80 L185 130 Z" />
        </g>
        
        {/* Smaller bird - lower left, following */}
        <g className="animate-float-delayed" style={{ opacity: 0.65 }}>
          <path d="M120 180 L60 145 L123 175 L190 138 L128 188 L123 225 Z" />
        </g>
      </svg>
    </div>
  );
}
