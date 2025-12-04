import { Section, KapaBackground } from "@/components";
import styles from "./page.module.scss";

export const metadata = {
  title: "Projects | Kat Perreira",
  description: "Featured projects and work by Kat Perreira",
};

export default function ProjectsPage() {
  return (
    <KapaBackground>
      <div className={styles.container}>
        <Section title="Projects">
          <p className={styles.intro}>
            A collection of projects I&apos;ve built or contributed to. 
            Each one taught me something new about building great software.
          </p>
          
          <div className={styles.projectList}>
            <FeaturedProject
              title="Featured Project One"
              description="A comprehensive description of this project. What problem did it solve? What was your role? What technologies did you use? What was the impact?"
              tags={["React", "TypeScript", "Node.js", "PostgreSQL"]}
              links={{
                live: "https://example.com",
                github: "https://github.com/username/project",
              }}
            />
            
            <FeaturedProject
              title="Featured Project Two"
              description="A comprehensive description of this project. What problem did it solve? What was your role? What technologies did you use? What was the impact?"
              tags={["Next.js", "Tailwind", "Prisma", "AWS"]}
              links={{
                live: "https://example.com",
              }}
            />
            
            <FeaturedProject
              title="Featured Project Three"
              description="A comprehensive description of this project. What problem did it solve? What was your role? What technologies did you use? What was the impact?"
              tags={["Python", "FastAPI", "Docker", "Kubernetes"]}
              links={{
                github: "https://github.com/username/project",
              }}
            />
          </div>
        </Section>

        <Section title="Other Projects">
          <div className={styles.smallProjectsGrid}>
            <SmallProject
              title="Small Project One"
              description="A brief description of this smaller project."
              tags={["React", "CSS"]}
            />
            <SmallProject
              title="Small Project Two"
              description="A brief description of this smaller project."
              tags={["Node.js", "Express"]}
            />
            <SmallProject
              title="Small Project Three"
              description="A brief description of this smaller project."
              tags={["Python", "Flask"]}
            />
            <SmallProject
              title="Small Project Four"
              description="A brief description of this smaller project."
              tags={["TypeScript", "CLI"]}
            />
          </div>
        </Section>
      </div>
    </KapaBackground>
  );
}

function FeaturedProject({
  title,
  description,
  tags,
  links,
}: {
  title: string;
  description: string;
  tags: string[];
  links?: { live?: string; github?: string };
}) {
  return (
    <div className={styles.featuredProject}>
      <h3 className={styles.projectTitle}>{title}</h3>
      <p className={styles.projectDescription}>{description}</p>
      
      <div className={styles.tags}>
        {tags.map((tag) => (
          <span key={tag} className={styles.tag}>{tag}</span>
        ))}
      </div>
      
      {links && (
        <div className={styles.links}>
          {links.live && (
            <a href={links.live} target="_blank" rel="noopener noreferrer" className={styles.link}>
              View Live →
            </a>
          )}
          {links.github && (
            <a href={links.github} target="_blank" rel="noopener noreferrer" className={styles.link}>
              View Code →
            </a>
          )}
        </div>
      )}
    </div>
  );
}

function SmallProject({
  title,
  description,
  tags,
}: {
  title: string;
  description: string;
  tags: string[];
}) {
  return (
    <div className={styles.smallProject}>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className={styles.tags}>
        {tags.map((tag) => (
          <span key={tag} className={styles.tag}>{tag}</span>
        ))}
      </div>
    </div>
  );
}
