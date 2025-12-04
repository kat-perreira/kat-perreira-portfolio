import { Section, KapaBackground } from "@/components";

export const metadata = {
  title: "Contact | Kat Perreira",
  description: "Get in touch with Kat Perreira",
};

export default function ContactPage() {
  const contactMessage = "I'm always happy to connect! Whether you want to discuss a project, invite me to speak at your event, or just say hello — my inbox is open.";
  return (
    <KapaBackground className="min-h-screen">
      <div className="px-6 lg:px-12 py-12 lg:py-24">
        <Section title="Get in Touch">
          <div className="max-w-2xl">
            <p className="text-sand/70 leading-relaxed mb-8">
           {contactMessage}
            </p>
            
            <a
              href="mailto:hello@katperreira.com"
              className="btn-outline inline-block mb-12"
            >
              Say Hello
            </a>
            
            <div className="space-y-6">
              <ContactMethod
                label="Email"
                value="kat.perreira@gmail.com" // todo: replace with new email once set up
                href="mailto:kat.perreira@gmail.com" 
              />
              <ContactMethod
                label="LinkedIn"
                value="linkedin.com/in/katperreira"
                href="https://linkedin.com/in/katperreira"
              />
              <ContactMethod
                label="GitHub"
                value="github.com/katperreira"
                href="https://github.com/katperreira"
              />
            </div>
          </div>
        </Section>

        <Section title="Speaking Inquiries" className="mt-16">
          <div className="max-w-2xl">
            <p className="text-sand/70 leading-relaxed mb-6">
              I speak at conferences and meetups about engineering culture, 
              accessibility, search systems, and building humane software. 
              If you&apos;d like me to speak at your event, please include:
            </p>
            <a
              href="mailto:speaking@katperreira.com"
              className="text-gold hover:text-sand transition-colors link-underline"
            >
              speaking@katperreira.com →
            </a>
          </div>
        </Section>
      </div>
    </KapaBackground>
  );
}

function ContactMethod({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href: string;
}) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
      <span className="text-sand/50 text-sm w-24">{label}</span>
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className="text-gold hover:text-sand transition-colors link-underline"
      >
        {value}
      </a>
    </div>
  );
}

