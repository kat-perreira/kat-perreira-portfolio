import { Section, SectionDivider, KapaBackground } from "@/components";

export const metadata = {
  title: "About | Kat Perreira",
  description: "Learn more about Kat Perreira - Senior Software Engineer & Technical Storyteller",
};

export default function AboutPage() {
  return (
    <KapaBackground className="min-h-screen">
      <div className="px-6 lg:px-12 py-12 lg:py-24">
        <Section title="About Me">
          <div className="max-w-2xl space-y-6 text-sand/80 leading-relaxed">
            <p>
              {/* TODO: Replace with your actual bio */}
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

        <SectionDivider className="my-8" />

        <Section title="Experience">
          <div className="space-y-8">
            <ExperienceItem
              company="Company Name"
              role="Senior Software Engineer"
              period="2022 - Present"
              description="Led development of key features, mentored junior engineers, and improved system performance."
            />
            <ExperienceItem
              company="Previous Company"
              role="Software Engineer"
              period="2019 - 2022"
              description="Built and maintained customer-facing applications serving millions of users."
            />
            <ExperienceItem
              company="First Company"
              role="Junior Developer"
              period="2017 - 2019"
              description="Started my career building web applications and learning from senior engineers."
            />
          </div>
        </Section>

        <SectionDivider className="my-8" />

        <Section title="Skills">
          <div className="grid md:grid-cols-2 gap-8">
            <SkillCategory
              title="Languages & Frameworks"
              skills={["TypeScript", "JavaScript", "React", "Next.js", "Node.js", "Python"]}
            />
            <SkillCategory
              title="Backend & Data"
              skills={["PostgreSQL", "MongoDB", "Redis", "GraphQL", "REST APIs"]}
            />
            <SkillCategory
              title="Infrastructure"
              skills={["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD"]}
            />
            <SkillCategory
              title="Practices"
              skills={["Accessibility (a11y)", "Performance", "Testing", "Agile", "Mentorship"]}
            />
          </div>
        </Section>
      </div>
    </KapaBackground>
  );
}

function ExperienceItem({
  company,
  role,
  period,
  description,
}: {
  company: string;
  role: string;
  period: string;
  description: string;
}) {
  return (
    <div className="border-l-2 border-sand/20 pl-6">
      <p className="text-gold text-sm mb-1">{period}</p>
      <h3 className="font-serif text-xl text-sand mb-1">{role}</h3>
      <p className="text-sand/60 text-sm mb-2">{company}</p>
      <p className="text-sand/70 leading-relaxed">{description}</p>
    </div>
  );
}

function SkillCategory({
  title,
  skills,
}: {
  title: string;
  skills: string[];
}) {
  return (
    <div>
      <h3 className="font-serif text-lg text-gold mb-3">{title}</h3>
      <ul className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <li
            key={skill}
            className="text-sm px-3 py-1 bg-sand/5 text-sand/70 border border-sand/10"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

