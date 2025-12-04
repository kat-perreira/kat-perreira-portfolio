/**
 * Hero Component
 * 
 * The main hero section for the homepage.
 */

import styles from './Hero.module.scss';

interface HeroProps {
  className?: string;
}

export function Hero({ className = "" }: HeroProps) {
  return (
    <section className={`${styles.hero} ${className}`} aria-labelledby="hero-heading">
      <p className={styles.label}>Welcome</p>

      <h1 id="hero-heading" className={styles.heading}>
        Building software that&apos;s
        <br />
        <span className={styles.highlight}>accessible</span>,{" "}
        <span className={styles.highlight}>humane</span>,
        <br />
        and built to last.
      </h1>

      <p className={styles.intro}>
        I&apos;m a senior software engineer who crafts high-performance web 
        experiences, mentors the next generation of engineers, and speaks 
        about engineering culture, search systems, and building technology 
        that respects people.
      </p>

      <div className={styles.buttons}>
        <a 
          href="/resume.pdf" 
          target="_blank"
          rel="noopener noreferrer"
          className={styles.buttonPrimary}
        >
          View Resume
        </a>
        <a href="/projects" className={styles.buttonPrimary}>
          View Projects
        </a>
      </div>

      <div className={styles.decorativeBorder} aria-hidden="true" />
    </section>
  );
}
