import { KapaBackground, Hero, Section, SectionDivider } from "@/components";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <KapaBackground pattern="triangles">
      <div className={styles.container}>
        <Hero />

        <Section id="featured-projects" title="Featured Projects">
          <div className={styles.grid}>
            <ProjectCard
              title="Project Name"
              description="A brief description of this project and the impact it had. Technologies used and problems solved."
              tags={["React", "TypeScript", "Node.js"]}
              href="/projects/project-name"
            />
            <ProjectCard
              title="Another Project"
              description="A brief description of this project and the impact it had. Technologies used and problems solved."
              tags={["Next.js", "PostgreSQL", "AWS"]}
              href="/projects/another-project"
            />
          </div>
          <div className={styles.sectionLink}>
            <a href="/projects" className={styles.link}>
              View all projects →
            </a>
          </div>
        </Section>

        <SectionDivider />

        <Section id="featured-talks" title="Featured Talks">
          <div className={styles.grid}>
            <TalkCard
              title="Talk Title Here"
              event="Conference Name 2024"
              description="A brief description of what this talk covered and the key takeaways."
              href="/talks/talk-title"
            />
            <TalkCard
              title="Another Talk"
              event="Meetup Name 2024"
              description="A brief description of what this talk covered and the key takeaways."
              href="/talks/another-talk"
            />
          </div>
          <div className={styles.sectionLink}>
            <a href="/talks" className={styles.link}>
              View all talks →
            </a>
          </div>
        </Section>

        <SectionDivider />

        <Section id="recent-writing" title="Recent Writing">
          <div className={styles.grid}>
            <ArticleCard
              title="Article Title Here"
              date="November 2024"
              description="A brief description or excerpt from this article."
              href="/writing/article-title"
            />
            <ArticleCard
              title="Another Article"
              date="October 2024"
              description="A brief description or excerpt from this article."
              href="/writing/another-article"
            />
          </div>
          <div className={styles.sectionLink}>
            <a href="/writing" className={styles.link}>
              View all writing →
            </a>
          </div>
        </Section>
      </div>
    </KapaBackground>
  );
}

function ProjectCard({
  title,
  description,
  tags,
  href,
}: {
  title: string;
  description: string;
  tags: string[];
  href: string;
}) {
  return (
    <a href={href} className={styles.card}>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
      <div className={styles.cardTags}>
        {tags.map((tag) => (
          <span key={tag} className={styles.tag}>{tag}</span>
        ))}
      </div>
    </a>
  );
}

function TalkCard({
  title,
  event,
  description,
  href,
}: {
  title: string;
  event: string;
  description: string;
  href: string;
}) {
  return (
    <a href={href} className={styles.card}>
      <p className={styles.goldLabel}>{event}</p>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
    </a>
  );
}

function ArticleCard({
  title,
  date,
  description,
  href,
}: {
  title: string;
  date: string;
  description: string;
  href: string;
}) {
  return (
    <a href={href} className={styles.card}>
      <p className={styles.cardMeta}>{date}</p>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
    </a>
  );
}
