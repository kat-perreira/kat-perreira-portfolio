import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { KapaBackground } from "@/components";
import { getPostBySlug, getAllPostSlugs } from "@/lib/posts";
import { mdxComponents, Callout } from "@/components/MDXComponents";
import styles from "./page.module.scss";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  
  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: `${post.title} | Kat Perreira`,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <KapaBackground>
      <article className={styles.container}>
        <Link href="/blog" className={styles.backLink}>
          ← Back to blog
        </Link>

        <header className={styles.header}>
          <div className={styles.meta}>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span>•</span>
            <span>{post.readingTime}</span>
          </div>
          
          <h1 className={styles.title}>{post.title}</h1>
          <p className={styles.description}>{post.description}</p>

          {post.mediumUrl && (
            <a
              href={post.mediumUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mediumLink}
            >
              Also published on Medium ↗
            </a>
          )}
        </header>

        <div className={styles.divider} />

        <div className={styles.content}>
          <MDXRemote 
            source={post.content} 
            components={{
              ...mdxComponents,
              Callout,
            }}
          />
        </div>

        <footer className={styles.footer}>
          {post.tags && post.tags.length > 0 && (
            <div className={styles.tags}>
              {post.tags.map((tag) => (
                <span key={tag} className={styles.tag}>{tag}</span>
              ))}
            </div>
          )}
          
          <Link href="/blog" className={styles.footerLink}>
            ← Back to all posts
          </Link>
        </footer>
      </article>
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
