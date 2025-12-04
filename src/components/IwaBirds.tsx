/**
 * IwaBirds Component
 * 
 * ʻIwa (frigate bird) silhouettes - a Hawaiian cultural element.
 * These birds are considered sacred messengers in Hawaiian culture.
 * 
 * Props:
 * - className: Additional CSS classes for positioning/sizing
 */

interface IwaBirdsProps {
  className?: string;
}

export function IwaBirds({ className = "" }: IwaBirdsProps) {
  return (
    <div className={`pointer-events-none select-none ${className}`} aria-hidden="true">
      {/* Upper bird - larger, leading */}
      <svg
        className="absolute -top-8 right-0 w-48 h-48 text-gold opacity-80 animate-float"
        viewBox="0 0 100 100"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M85 35c-8-3-18-4-28-2-6-8-14-15-24-18 12 6 20 15 25 25-10 2-18 7-24 13 8-4 17-6 27-5-2 6-3 12-2 19 2-6 5-12 10-17 4 8 10 15 18 20-5-7-8-14-9-22 10 2 19 6 27 12-7-9-17-16-28-20 4-3 8-5 13-6-2 0-4 0-5 1z" />
      </svg>
      
      {/* Lower bird - smaller, following */}
      <svg
        className="absolute top-32 right-24 w-32 h-32 text-gold opacity-60 animate-float-delayed"
        viewBox="0 0 100 100"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M85 35c-8-3-18-4-28-2-6-8-14-15-24-18 12 6 20 15 25 25-10 2-18 7-24 13 8-4 17-6 27-5-2 6-3 12-2 19 2-6 5-12 10-17 4 8 10 15 18 20-5-7-8-14-9-22 10 2 19 6 27 12-7-9-17-16-28-20 4-3 8-5 13-6-2 0-4 0-5 1z" />
      </svg>
    </div>
  );
}

/**
 * Single bird variant for smaller decorative uses
 */
export function IwaBird({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`text-gold ${className}`}
      viewBox="0 0 100 100"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M85 35c-8-3-18-4-28-2-6-8-14-15-24-18 12 6 20 15 25 25-10 2-18 7-24 13 8-4 17-6 27-5-2 6-3 12-2 19 2-6 5-12 10-17 4 8 10 15 18 20-5-7-8-14-9-22 10 2 19 6 27 12-7-9-17-16-28-20 4-3 8-5 13-6-2 0-4 0-5 1z" />
    </svg>
  );
}

