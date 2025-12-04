import { Section, SectionDivider, KapaBackground } from "@/components";
import styles from "./page.module.scss";

export const metadata = {
  title: "About | Kat Perreira",
  description: "Learn more about Kat Perreira - Senior Software Engineer & Technical Storyteller",
};

export default function AboutPage() {
  return (
    <KapaBackground>
      <div className={styles.container}>
        <Section title="About Me">
          <div className={styles.intro}>
            <p>
              Hello! I&apos;m Kat, a senior software engineer based in [Location]. 
              I specialize in building accessible, high-performance web applications 
              that make a real difference in people&apos;s lives.
            </p>
            <p>
              My journey in tech started [your story here]. Since then, I&apos;ve had 
              the privilege of working at [companies/projects], where I&apos;ve 
              contributed to products used by millions of people.
            </p>
            <p>
              Beyond coding, I&apos;m passionate about engineering culture, mentorship, 
              and speaking at conferences about topics like [your topics]. I believe 
              in building humane software that respects users&apos; time and attention.
            </p>
          </div>
        </Section>

        <SectionDivider />

        <Section title="Experience">
          <div className={styles.experienceList}>
            <div className={styles.experienceItem}>
              <p className={styles.period}>2022 - Present</p>
              <h3 className={styles.role}>Senior Software Engineer</h3>
              <p className={styles.company}>Company Name</p>
              <p className={styles.description}>
                Led development of key features, mentored junior engineers, and improved system performance.
              </p>
            </div>
            <div className={styles.experienceItem}>
              <p className={styles.period}>2019 - 2022</p>
              <h3 className={styles.role}>Software Engineer</h3>
              <p className={styles.company}>Previous Company</p>
              <p className={styles.description}>
                Built and maintained customer-facing applications serving millions of users.
              </p>
            </div>
            <div className={styles.experienceItem}>
              <p className={styles.period}>2017 - 2019</p>
              <h3 className={styles.role}>Junior Developer</h3>
              <p className={styles.company}>First Company</p>
              <p className={styles.description}>
                Started my career building web applications and learning from senior engineers.
              </p>
            </div>
          </div>
        </Section>

        <SectionDivider />

        <Section title="Skills">
          <div className={styles.skillsGrid}>
            <div className={styles.skillCategory}>
              <h3>Languages & Frameworks</h3>
              <ul className={styles.skillList}>
                {["TypeScript", "JavaScript", "React", "Next.js", "Node.js", "Python"].map((skill) => (
                  <li key={skill} className={styles.skill}>{skill}</li>
                ))}
              </ul>
            </div>
            <div className={styles.skillCategory}>
              <h3>Backend & Data</h3>
              <ul className={styles.skillList}>
                {["PostgreSQL", "MongoDB", "Redis", "GraphQL", "REST APIs"].map((skill) => (
                  <li key={skill} className={styles.skill}>{skill}</li>
                ))}
              </ul>
            </div>
            <div className={styles.skillCategory}>
              <h3>Infrastructure</h3>
              <ul className={styles.skillList}>
                {["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD"].map((skill) => (
                  <li key={skill} className={styles.skill}>{skill}</li>
                ))}
              </ul>
            </div>
            <div className={styles.skillCategory}>
              <h3>Practices</h3>
              <ul className={styles.skillList}>
                {["Accessibility (a11y)", "Performance", "Testing", "Agile", "Mentorship"].map((skill) => (
                  <li key={skill} className={styles.skill}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </Section>
      </div>
    </KapaBackground>
  );
}
