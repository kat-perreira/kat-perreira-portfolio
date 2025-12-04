import { Section, SectionDivider, KapaBackground } from "@/components";
import styles from "./page.module.scss";

export const metadata = {
  title: "Writing | Kat Perreira",
  description: "Articles, interviews, and blog posts by Kat Perreira",
};

export default function WritingPage() {
  return (
    <KapaBackground>
      <div className={styles.container}>
        <Section title="Featured In">
          <p className={styles.intro}>
            Interviews and articles where I&apos;ve shared thoughts on 
            diversity in tech, mentorship, and building inclusive teams.
          </p>
          
          <div className={styles.articlesList}>
            <FeaturedArticle
              title="How We Can Build a More Inclusive Future in Tech"
              publication="Highspot Blog"
              date="2023"
              description="Sharing my journey into tech through Ada Developers Academy, and why businesses need to invest in keeping women in the pipeline to leadership roles — through mentorship, support, and giving people space to be themselves."
              href="https://www.highspot.com/blog/how-we-can-build-a-more-inclusive-future-in-tech/"
            />
            
            <FeaturedArticle
              title="#BuildingBetter: How to Claim Your Seat at the Table with Confidence"
              publication="Highspot Blog"
              date="2021"
              description="On the importance of mentorship and finding someone who will actively listen, celebrate your victories, and support you through challenges. Without my mentors, I wouldn&apos;t be as successful as I am today."
              href="https://www.highspot.com/blog/buildingbetter-how-to-claim-your-seat-at-the-table-with-confidence/"
            />
            
            <FeaturedArticle
              title="Building Better: Making a Product That Works for Everyone"
              publication="Highspot Blog"
              description="Thoughts on accessibility, inclusive design, and creating products that work for all users."
              href="https://www.highspot.com/blog/building-better-making-a-product-that-works-for-everyone/"
            />
          </div>
        </Section>

        <SectionDivider className={styles.divider} />

        <Section title="Blog">
          <p className={styles.blogIntro}>
            Thoughts on engineering, technology, and building software that 
            respects users. I write about what I&apos;m learning and exploring.
          </p>
          
          <a href="/blog" className={styles.blogButton}>
            Read the Blog →
          </a>
        </Section>
      </div>
    </KapaBackground>
  );
}

function FeaturedArticle({
  title,
  publication,
  date,
  description,
  href,
}: {
  title: string;
  publication: string;
  date?: string;
  description: string;
  href: string;
}) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={styles.article}>
      <div className={styles.articleMeta}>
        <span className={styles.publication}>{publication}</span>
        {date && (
          <>
            <span>•</span>
            <span>{date}</span>
          </>
        )}
      </div>
      <h3 className={styles.articleTitle}>{title}</h3>
      <p className={styles.articleDescription}>{description}</p>
      <span className={styles.readMore}>Read article ↗</span>
    </a>
  );
}
