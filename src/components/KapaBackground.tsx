/**
 * KapaBackground Component
 * 
 * Applies a subtle kapa-inspired geometric pattern.
 */

import styles from './KapaBackground.module.scss';

interface KapaBackgroundProps {
  children: React.ReactNode;
  className?: string;
  pattern?: 'triangles' | 'diamonds' | 'lines';
}

export function KapaBackground({ 
  children, 
  className = "",
  pattern = 'triangles' 
}: KapaBackgroundProps) {
  const patternClass = styles[pattern];
  
  return (
    <div className={`${styles.wrapper} ${className}`}>
      <div className={`${styles.pattern} ${patternClass}`} aria-hidden="true" />
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
}
