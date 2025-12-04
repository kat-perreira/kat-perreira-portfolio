import { Section, KapaBackground } from "@/components";

export const metadata = {
  title: "Projects | Kat Perreira",
  description: "Featured projects and work by Kat Perreira",
};

export default function ProjectsPage() {
  return (
    <KapaBackground className="min-h-screen">
      <div className="px-6 lg:px-12 py-12 lg:py-24">
        <Section title="Projects">
          <p className="text-sand/70 max-w-2xl mb-12 leading-relaxed">
            A collection of projects I&apos;ve built or contributed to. 
            Each one taught me something new about building great software.
          </p>
          
          <div className="space-y-12">
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

        <Section title="Other Projects" className="mt-16">
          <div className="grid md:grid-cols-2 gap-6">
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
  links?: {
    live?: string;
    github?: string;
  };
}) {
  return (
    <div className="border border-sand/10 p-8 hover:border-gold/30 transition-colors">
      <h3 className="font-serif text-2xl text-sand mb-4">{title}</h3>
      <p className="text-sand/70 leading-relaxed mb-6">{description}</p>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-1 bg-sand/5 text-sand/50"
          >
            {tag}
          </span>
        ))}
      </div>
      
      {links && (
        <div className="flex gap-4">
          {links.live && (
            <a
              href={links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-sand transition-colors text-sm link-underline"
            >
              View Live →
            </a>
          )}
          {links.github && (
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-sand transition-colors text-sm link-underline"
            >
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
    <div className="border border-sand/10 p-6 hover:border-gold/30 transition-colors">
      <h3 className="font-serif text-lg text-sand mb-2">{title}</h3>
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
    </div>
  );
}

