import { 
  KapaBackground, 
  Hero, 
  Section, 
  SectionDivider 
} from "@/components";

export default function Home() {
  return (
    <KapaBackground className="min-h-screen" pattern="triangles">
      <div className="px-6 lg:px-12">
        
        {/* Hero Section */}
        <Hero />

        {/* Featured Projects */}
        <Section id="featured-projects" title="Featured Projects">
          <div className="grid gap-6 md:grid-cols-2">
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
            <a 
              href="/projects" 
              className="text-gold hover:text-sand transition-colors link-underline"
            >
              View all projects →
            </a>
          </div>
        </Section>

        <SectionDivider className="my-12" />

        {/* Featured Talks */}
        <Section id="featured-talks" title="Featured Talks">
          <div className="space-y-6">
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
          <div className="mt-8">
            <a 
              href="/talks" 
              className="text-gold hover:text-sand transition-colors link-underline"
            >
              View all talks →
            </a>
          </div>
        </Section>

        <SectionDivider className="my-12" />

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
            <a 
              href="/writing" 
              className="text-gold hover:text-sand transition-colors link-underline"
            >
              View all writing →
            </a>
          </div>
        </Section>

        {/* Bottom spacing */}
        <div className="h-24" />
      </div>
    </KapaBackground>
  );
}


/* ========================================
   Page-specific Card Components
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
      className="
        block 
        p-6 
        border 
        border-sand/10 
        hover:border-gold/50 
        transition-colors 
        group
      "
    >
      <h3 className="
        font-serif 
        text-xl 
        text-sand 
        group-hover:text-gold 
        transition-colors 
        mb-2
      ">
        {title}
      </h3>
      <p className="text-sand/60 text-sm leading-relaxed mb-4">
        {description}
      </p>
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
      className="
        block 
        p-6 
        border 
        border-sand/10 
        hover:border-gold/50 
        transition-colors 
        group
      "
    >
      <p className="text-gold text-sm mb-1">{event}</p>
      <h3 className="
        font-serif 
        text-xl 
        text-sand 
        group-hover:text-gold 
        transition-colors 
        mb-2
      ">
        {title}
      </h3>
      <p className="text-sand/60 text-sm leading-relaxed">
        {description}
      </p>
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
      className="
        block 
        p-6 
        border 
        border-sand/10 
        hover:border-gold/50 
        transition-colors 
        group
      "
    >
      <p className="text-sand/40 text-sm mb-1">{date}</p>
      <h3 className="
        font-serif 
        text-xl 
        text-sand 
        group-hover:text-gold 
        transition-colors 
        mb-2
      ">
        {title}
      </h3>
      <p className="text-sand/60 text-sm leading-relaxed">
        {description}
      </p>
    </a>
  );
}
