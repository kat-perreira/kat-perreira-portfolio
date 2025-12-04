import { Section, KapaBackground } from "@/components";

export const metadata = {
  title: "Talks | Kat Perreira",
  description: "Conference talks and presentations by Kat Perreira",
};

export default function TalksPage() {
  return (
    <KapaBackground className="min-h-screen">
      <div className="px-6 lg:px-12 py-12 lg:py-24">
        <Section title="Talks">
          <p className="text-sand/70 max-w-2xl mb-12 leading-relaxed">
            I speak at conferences and meetups about engineering culture, 
            search systems, accessibility, and building humane software. 
            Here are some of my recent talks.
          </p>
          
          <div className="space-y-8">
            <TalkItem
              title="Talk Title Here"
              event="Conference Name 2024"
              location="San Francisco, CA"
              date="November 2024"
              description="A description of what this talk covered. What were the key takeaways? Who was the audience?"
              videoUrl="https://youtube.com/watch?v=example"
              slidesUrl="https://speakerdeck.com/example"
            />
            
            <TalkItem
              title="Another Great Talk"
              event="Tech Meetup 2024"
              location="Virtual"
              date="October 2024"
              description="A description of what this talk covered. What were the key takeaways? Who was the audience?"
              slidesUrl="https://speakerdeck.com/example"
            />
            
            <TalkItem
              title="Earlier Talk"
              event="Developer Conference 2023"
              location="Seattle, WA"
              date="June 2023"
              description="A description of what this talk covered. What were the key takeaways? Who was the audience?"
              videoUrl="https://youtube.com/watch?v=example"
            />
          </div>
        </Section>

        <Section title="Upcoming" className="mt-16">
          <p className="text-sand/70 mb-8">
            Interested in having me speak at your event? 
            <a href="/contact" className="text-gold hover:text-sand transition-colors ml-1 link-underline">
              Get in touch
            </a>
            .
          </p>
          
          <div className="border border-sand/10 p-6">
            <p className="text-sand/50 text-sm mb-1">January 2025</p>
            <h3 className="font-serif text-xl text-sand mb-2">Upcoming Talk Title</h3>
            <p className="text-gold text-sm">Conference Name • Location</p>
          </div>
        </Section>
      </div>
    </KapaBackground>
  );
}

function TalkItem({
  title,
  event,
  location,
  date,
  description,
  videoUrl,
  slidesUrl,
}: {
  title: string;
  event: string;
  location: string;
  date: string;
  description: string;
  videoUrl?: string;
  slidesUrl?: string;
}) {
  return (
    <div className="border border-sand/10 p-8 hover:border-gold/30 transition-colors">
      <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-sand/50 mb-2">
        <span>{date}</span>
        <span>•</span>
        <span>{location}</span>
      </div>
      <p className="text-gold text-sm mb-1">{event}</p>
      <h3 className="font-serif text-2xl text-sand mb-4">{title}</h3>
      <p className="text-sand/70 leading-relaxed mb-6">{description}</p>
      
      <div className="flex gap-4">
        {videoUrl && (
          <a
            href={videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:text-sand transition-colors text-sm link-underline"
          >
            Watch Video →
          </a>
        )}
        {slidesUrl && (
          <a
            href={slidesUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:text-sand transition-colors text-sm link-underline"
          >
            View Slides →
          </a>
        )}
      </div>
    </div>
  );
}

