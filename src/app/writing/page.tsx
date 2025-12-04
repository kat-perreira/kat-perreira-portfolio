import { Section, KapaBackground } from "@/components";

export const metadata = {
  title: "Writing | Kat Perreira",
  description: "Articles and blog posts by Kat Perreira",
};

export default function WritingPage() {
  return (
    <KapaBackground className="min-h-screen">
      <div className="px-6 lg:px-12 py-12 lg:py-24">
        <Section title="Writing">
          <p className="text-sand/70 max-w-2xl mb-12 leading-relaxed">
            Thoughts on engineering, technology, and building software that 
            respects users. I write about what I&apos;m learning and exploring.
          </p>
          
          <div className="space-y-6">
            <ArticleItem
              title="Article Title Here"
              date="November 2024"
              description="A brief excerpt or description of this article. What&apos;s it about? What will readers learn?"
              readTime="5 min read"
              href="/writing/article-slug"
            />
            
            <ArticleItem
              title="Another Article Title"
              date="October 2024"
              description="A brief excerpt or description of this article. What&apos;s it about? What will readers learn?"
              readTime="8 min read"
              href="/writing/another-article"
            />
            
            <ArticleItem
              title="Earlier Article"
              date="September 2024"
              description="A brief excerpt or description of this article. What&apos;s it about? What will readers learn?"
              readTime="6 min read"
              href="/writing/earlier-article"
            />
            
            <ArticleItem
              title="Deep Dive Article"
              date="August 2024"
              description="A brief excerpt or description of this article. What&apos;s it about? What will readers learn?"
              readTime="12 min read"
              href="/writing/deep-dive"
            />
          </div>
        </Section>

        <Section title="External Publications" className="mt-16">
          <p className="text-sand/70 mb-8">
            Articles published on other platforms.
          </p>
          
          <div className="space-y-4">
            <ExternalLink
              title="Article on Platform"
              publication="Medium / Dev.to / etc."
              href="https://example.com/article"
            />
            <ExternalLink
              title="Another External Article"
              publication="Company Blog"
              href="https://example.com/article"
            />
          </div>
        </Section>
      </div>
    </KapaBackground>
  );
}

function ArticleItem({
  title,
  date,
  description,
  readTime,
  href,
}: {
  title: string;
  date: string;
  description: string;
  readTime: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="block border border-sand/10 p-8 hover:border-gold/30 transition-colors group"
    >
      <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-sand/50 mb-2">
        <span>{date}</span>
        <span>•</span>
        <span>{readTime}</span>
      </div>
      <h3 className="font-serif text-2xl text-sand group-hover:text-gold transition-colors mb-4">
        {title}
      </h3>
      <p className="text-sand/70 leading-relaxed">{description}</p>
    </a>
  );
}

function ExternalLink({
  title,
  publication,
  href,
}: {
  title: string;
  publication: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-between p-4 border border-sand/10 hover:border-gold/30 transition-colors group"
    >
      <div>
        <h3 className="text-sand group-hover:text-gold transition-colors">{title}</h3>
        <p className="text-sand/50 text-sm">{publication}</p>
      </div>
      <span className="text-gold">↗</span>
    </a>
  );
}

