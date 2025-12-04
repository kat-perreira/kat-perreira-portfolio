import { Section, KapaBackground } from "@/components";
import { getAllPosts } from "@/lib/posts";
import Link from "next/link";
import styles from "./page.module.scss";

export const metadata = {
  title: "Blog | Kat Perreira",
  description: "Thoughts on engineering, mentorship, and building inclusive tech.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <KapaBackground>
      <div className={styles.container}>
        <Section title="Blog">
          <p className={styles.intro}>
            Thoughts on engineering, mentorship, and building inclusive tech. 
            Writing about what I&apos;m learning along the way.
          </p>

          {posts.length === 0 ? (
            <p className={styles.empty}>No posts yet. Check back soon!</p>
          ) : (
            <div className={styles.postsList}>
              {posts.map((post) => (
                <article key={post.slug}>
                  <Link href={`/blog/${post.slug}`} className={styles.post}>
                    <div className={styles.postMeta}>
                      <time dateTime={post.date}>{formatDate(post.date)}</time>
                      <span>•</span>
                      <span>{post.readingTime}</span>
                      {post.mediumUrl && (
                        <>
                          <span>•</span>
                          <span className={styles.mediumBadge}>Also on Medium</span>
                        </>
                      )}
                    </div>
                    
                    <h2 className={styles.postTitle}>{post.title}</h2>
                    <p className={styles.postDescription}>{post.description}</p>
                    
                    {post.tags && post.tags.length > 0 && (
                      <div className={styles.tags}>
                        {post.tags.map((tag) => (
                          <span key={tag} className={styles.tag}>{tag}</span>
                        ))}
                      </div>
                    )}
                  </Link>
                </article>
              ))}
            </div>
          )}
        </Section>
      </div>
    </KapaBackground>
  );
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
