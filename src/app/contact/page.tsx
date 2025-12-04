import { Section, KapaBackground } from "@/components";
import styles from "./page.module.scss";

export const metadata = {
  title: "Contact | Kat Perreira",
  description: "Get in touch with Kat Perreira",
};

export default function ContactPage() {
  return (
    <KapaBackground>
      <div className={styles.container}>
        <Section title="Get in Touch">
          <div className={styles.content}>
            <p className={styles.intro}>
              I&apos;m always happy to connect! Whether you want to discuss a 
              project, invite me to speak at your event, or just say hello — 
              my inbox is open.
            </p>
            
            <a href="mailto:hello@katperreira.com" className={styles.button}>
              Say Hello
            </a>
            
            <div className={styles.contactList}>
              <ContactMethod
                label="Email"
                value="hello@katperreira.com"
                href="mailto:hello@katperreira.com"
              />
              <ContactMethod
                label="LinkedIn"
                value="linkedin.com/in/katperreira"
                href="https://linkedin.com/in/katperreira"
              />
              <ContactMethod
                label="GitHub"
                value="github.com/katperreira"
                href="https://github.com/katperreira"
              />
              <ContactMethod
                label="Twitter/X"
                value="@katperreira"
                href="https://twitter.com/katperreira"
              />
            </div>
          </div>
        </Section>

        <Section title="Speaking Inquiries">
          <div className={styles.content}>
            <p className={styles.speakingIntro}>
              I speak at conferences and meetups about engineering culture, 
              accessibility, search systems, and building humane software. 
              If you&apos;d like me to speak at your event, please include:
            </p>
            <ul className={styles.speakingList}>
              <li>
                <BulletIcon />
                <span>Event name, date, and location</span>
              </li>
              <li>
                <BulletIcon />
                <span>Expected audience size and demographic</span>
              </li>
              <li>
                <BulletIcon />
                <span>Topic preferences or suggestions</span>
              </li>
              <li>
                <BulletIcon />
                <span>Whether travel/accommodation is provided</span>
              </li>
            </ul>
            <a href="mailto:speaking@katperreira.com" className={styles.speakingLink}>
              speaking@katperreira.com →
            </a>
          </div>
        </Section>
      </div>
    </KapaBackground>
  );
}

function ContactMethod({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href: string;
}) {
  return (
    <div className={styles.contactItem}>
      <span className={styles.contactLabel}>{label}</span>
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className={styles.contactLink}
      >
        {value}
      </a>
    </div>
  );
}

function BulletIcon() {
  return (
    <svg className={styles.speakingIcon} viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="12" r="4" />
    </svg>
  );
}
