/**
 * Section Component
 * 
 * A reusable section container with consistent spacing.
 * 
 * Props:
 * - id: Section ID for anchor links
 * - title: Optional section title
 * - children: Section content
 * - className: Additional CSS classes
 */

interface SectionProps {
  id?: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export function Section({ id, title, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`py-20 md:py-28 ${className}`}>
      {title && (
        <h2 className="font-serif text-3xl md:text-4xl text-sand mb-8">
          {title}
        </h2>
      )}
      {children}
    </section>
  );
}

/**
 * SectionDivider Component
 * 
 * A subtle divider between sections with optional kapa pattern
 */
export function SectionDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`w-full h-px bg-sand/10 ${className}`} aria-hidden="true" />
  );
}

