/**
 * Section Component
 * 
 * A reusable section container with consistent spacing.
 */

import styles from './Section.module.scss';

interface SectionProps {
  id?: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export function Section({ id, title, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`${styles.section} ${className}`}>
      {title && <h2 className={styles.title}>{title}</h2>}
      {children}
    </section>
  );
}

export function SectionDivider({ className = "" }: { className?: string }) {
  return <div className={`${styles.divider} ${className}`} aria-hidden="true" />;
}
