import { Section, KapaBackground } from "@/components";
import styles from "./page.module.scss";

export const metadata = {
  title: "Talks | Kat Perreira",
  description: "Conference talks and presentations by Kat Perreira",
};

export default function TalksPage() {
  return (
    <KapaBackground>
      <div className={styles.container}>
        <Section title="Talks">
          <p className={styles.intro}>
            I speak at conferences and events about engineering culture, 
            diversity in tech, and building inclusive teams.
          </p>
          
          <div className={styles.talksList}>
            <TalkItem
              title="Crossing International Waters: Thoughts from Startup Journeys to Global Scale"
              event="WiT Regatta 2020"
              location="Virtual"
              date="August 2020"
              description="A panel discussion exploring the journey from startup to global scale, sharing insights on navigating growth, building diverse teams, and the unique challenges of scaling technology companies. Supported by Highspot."
              eventUrl="https://seattlewitregatta2020.sched.com/event/cs2i/crossing-international-waters-thoughts-from-startup-journeys-to-global-scale-supported-by-highspot"
            />
          </div>
        </Section>

        <Section title="Speaking">
          <p className={styles.speakingBox}>
            Interested in having me speak at your event? I speak about 
            mentorship, diversity in tech, building inclusive products, 
            and engineering culture.
            <a href="/contact">Get in touch</a>.
          </p>
          
          <div className={styles.topicsBox}>
            <h3>Topics I speak about:</h3>
            <ul>
              <li>• Building a more inclusive future in tech</li>
              <li>• The power of mentorship in career growth</li>
              <li>• Making products that work for everyone</li>
              <li>• Transitioning into tech from non-traditional backgrounds</li>
            </ul>
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
  eventUrl,
}: {
  title: string;
  event: string;
  location: string;
  date: string;
  description: string;
  videoUrl?: string;
  slidesUrl?: string;
  eventUrl?: string;
}) {
  return (
    <div className={styles.talkItem}>
      <div className={styles.meta}>
        <span>{date}</span>
        <span>•</span>
        <span>{location}</span>
      </div>
      <p className={styles.event}>{event}</p>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      
      <div className={styles.links}>
        {eventUrl && (
          <a href={eventUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>
            View Event →
          </a>
        )}
        {videoUrl && (
          <a href={videoUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>
            Watch Video →
          </a>
        )}
        {slidesUrl && (
          <a href={slidesUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>
            View Slides →
          </a>
        )}
      </div>
    </div>
  );
}
