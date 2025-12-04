/**
 * Custom MDX Components
 * 
 * These components are available in all MDX files.
 * Styled to match the portfolio's brand.
 */

import type { MDXComponents } from 'mdx/types';
import styles from './MDXComponents.module.scss';

export const mdxComponents: MDXComponents = {
  h1: ({ children }) => <h1 className={styles.h1}>{children}</h1>,
  h2: ({ children }) => <h2 className={styles.h2}>{children}</h2>,
  h3: ({ children }) => <h3 className={styles.h3}>{children}</h3>,
  p: ({ children }) => <p className={styles.p}>{children}</p>,
  a: ({ href, children }) => (
    <a 
      href={href}
      className={styles.a}
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
    >
      {children}
    </a>
  ),
  ul: ({ children }) => <ul className={styles.ul}>{children}</ul>,
  ol: ({ children }) => <ol className={styles.ol}>{children}</ol>,
  blockquote: ({ children }) => <blockquote className={styles.blockquote}>{children}</blockquote>,
  code: ({ children }) => <code className={styles.code}>{children}</code>,
  pre: ({ children }) => <pre className={styles.pre}>{children}</pre>,
  hr: () => <hr className={styles.hr} />,
  strong: ({ children }) => <strong className={styles.strong}>{children}</strong>,
  em: ({ children }) => <em className={styles.em}>{children}</em>,
};

export function Callout({ children }: { children: React.ReactNode }) {
  return <div className={styles.callout}>{children}</div>;
}
