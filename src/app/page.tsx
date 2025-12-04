import { KapaBackground, Section, SectionDivider } from "@/components";

export default function Home() {
  return (
    <KapaBackground className="min-h-screen">
      <div className="px-6 lg:px-12 lg:py-24">
        {/* Hero Section */}
        <section className="py-12 lg:py-0 lg:min-h-[60vh] flex flex-col justify-center">
          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mt-8 animate-fade-in-up animation-delay-300">
            <a href="/projects" className="btn-outline">
              View Projects
            </a>
            <a href="/talks" className="btn-outline">
              Watch a Talk
            </a>
          </div>
        </section>

        <SectionDivider className="my-8" />

        {/* Featured Work Preview */}
        <Section id="featured" title="Featured Work">
          <div className="grid gap-8 md:grid-cols-2">
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
          <div className="mt-8">
            <a href="/projects" className="text-gold hover:text-sand transition-colors link-underline">
              View all projects →
            </a>
          </div>
        </Section>

        <SectionDivider className="my-8" />

        {/* Recent Talks */}
        <Section id="recent-talks" title="Recent Talks">
          <div className="space-y-6">
            <TalkCard
              title="Talk Title Here"
              event="Conference Name 2024"
              description="A brief description of what this talk covered."
              href="/talks/talk-title"
            />
            <TalkCard
              title="Another Talk"
              event="Meetup Name 2024"
              description="A brief description of what this talk covered."
              href="/talks/another-talk"
            />
          </div>
          <div className="mt-8">
            <a href="/talks" className="text-gold hover:text-sand transition-colors link-underline">
              View all talks →
            </a>
          </div>
        </Section>

        <SectionDivider className="my-8" />

        {/* Recent Writing */}
        <Section id="recent-writing" title="Recent Writing">
          <div className="space-y-6">
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
          <div className="mt-8">
            <a href="/writing" className="text-gold hover:text-sand transition-colors link-underline">
              View all writing →
            </a>
          </div>
        </Section>
      </div>
    </KapaBackground>
  );
}

/* ========================================
   Page-specific Components
   ======================================== */

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
    <a
      href={href}
      className="block p-6 border border-sand/10 hover:border-gold/50 transition-colors group"
    >
      <h3 className="font-serif text-xl text-sand group-hover:text-gold transition-colors mb-2">
        {title}
      </h3>
      <p className="text-sand/60 text-sm leading-relaxed mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-1 bg-sand/5 text-sand/50"
          >
            {tag}
          </span>
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
    <a
      href={href}
      className="block p-6 border border-sand/10 hover:border-gold/50 transition-colors group"
    >
      <p className="text-gold text-sm mb-1">{event}</p>
      <h3 className="font-serif text-xl text-sand group-hover:text-gold transition-colors mb-2">
        {title}
      </h3>
      <p className="text-sand/60 text-sm leading-relaxed">{description}</p>
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
    <a
      href={href}
      className="block p-6 border border-sand/10 hover:border-gold/50 transition-colors group"
    >
      <p className="text-sand/40 text-sm mb-1">{date}</p>
      <h3 className="font-serif text-xl text-sand group-hover:text-gold transition-colors mb-2">
        {title}
      </h3>
      <p className="text-sand/60 text-sm leading-relaxed">{description}</p>
    </a>
  );
}

